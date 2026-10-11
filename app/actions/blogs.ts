'use server'

import { db } from '@/lib/db'
import { blogs } from '@/lib/db/schema'
import { requireAdmin } from '@/lib/admin'
import { slugify } from '@/lib/slug'
import { eq, desc } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

export type BlogStatus = 'draft' | 'published'

export interface BlogInput {
  title: string
  slug: string
  content: string
  excerpt?: string
  category?: string
  status?: BlogStatus
}

// Slugs that already exist as hand-built pages under /blog/ — a database post
// with one of these would be silently shadowed by the static page.
const RESERVED_SLUGS = new Set([
  'ai-for-hotels',
  'case-study-elsamere-lodge',
  'case-study-silent-palms-villa',
  'content-marketing-hotels',
  'direct-hotel-bookings',
  'experiential-marketing-hotels',
  'google-business-profile-hotels',
  'hospitality-case-studies',
  'hotel-marketing-agency-vs-digital-marketing-agency',
  'hotel-website-design-seo',
  'how-to-choose-a-hotel-marketing-agency-kenya',
  'local-seo-for-hotels',
])

function refreshSite(slug?: string) {
  revalidatePath('/blog')
  if (slug) revalidatePath(`/blog/${slug}`)
  revalidatePath('/sitemap.xml')
  revalidatePath('/admin/blogs')
}

function clean(data: BlogInput) {
  const title = data.title.trim()
  const slug = slugify(data.slug || title)
  const content = data.content.trim()
  if (!title) throw new Error('Title is required')
  if (!content) throw new Error('Content is required')
  if (!slug) throw new Error('Slug is required')
  if (RESERVED_SLUGS.has(slug)) {
    throw new Error(`"${slug}" is already used by an existing page. Choose a different slug.`)
  }
  return {
    title,
    slug,
    content,
    excerpt: data.excerpt?.trim() || null,
    category: data.category?.trim() || null,
  }
}

function friendly(error: unknown): never {
  const msg = error instanceof Error ? error.message : String(error)
  if (/duplicate key|unique/i.test(msg)) {
    throw new Error('That slug is already used by another article. Choose a different slug.')
  }
  throw error instanceof Error ? error : new Error(msg)
}

// ---------- Public reads (no auth) ----------

export async function getPublishedBlogs() {
  return db
    .select()
    .from(blogs)
    .where(eq(blogs.status, 'published'))
    .orderBy(desc(blogs.publishedAt))
}

export async function getBlogBySlug(slug: string) {
  const result = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1)
  return result[0] || null
}

// ---------- Admin only ----------

export async function getBlogs() {
  await requireAdmin()
  return db.select().from(blogs).orderBy(desc(blogs.createdAt))
}

export async function createBlog(data: BlogInput) {
  const user = await requireAdmin()
  const values = clean(data)
  const status: BlogStatus = data.status === 'published' ? 'published' : 'draft'
  try {
    const result = await db
      .insert(blogs)
      .values({
        ...values,
        userId: user.id,
        status,
        publishedAt: status === 'published' ? new Date() : null,
      })
      .returning()
    refreshSite(values.slug)
    return result[0]
  } catch (error) {
    friendly(error)
  }
}

export async function updateBlog(id: number, data: BlogInput) {
  await requireAdmin()
  const values = clean(data)

  const existing = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1)
  if (!existing[0]) throw new Error('Article not found')
  const prev = existing[0]

  const status: BlogStatus = data.status ?? (prev.status as BlogStatus)
  // Keep the original publish date; only stamp it the first time it goes live.
  const publishedAt =
    status === 'published' ? (prev.publishedAt ?? new Date()) : prev.publishedAt

  try {
    const result = await db
      .update(blogs)
      .set({ ...values, status, publishedAt, updatedAt: new Date() })
      .where(eq(blogs.id, id))
      .returning()
    refreshSite(values.slug)
    if (prev.slug !== values.slug) revalidatePath(`/blog/${prev.slug}`)
    return result[0]
  } catch (error) {
    friendly(error)
  }
}

export async function setBlogStatus(id: number, status: BlogStatus) {
  await requireAdmin()
  const existing = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1)
  if (!existing[0]) throw new Error('Article not found')
  const prev = existing[0]

  const result = await db
    .update(blogs)
    .set({
      status,
      publishedAt: status === 'published' ? (prev.publishedAt ?? new Date()) : prev.publishedAt,
      updatedAt: new Date(),
    })
    .where(eq(blogs.id, id))
    .returning()
  refreshSite(prev.slug)
  return result[0]
}

export async function deleteBlog(id: number) {
  await requireAdmin()
  const existing = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1)
  await db.delete(blogs).where(eq(blogs.id, id))
  refreshSite(existing[0]?.slug)
}
