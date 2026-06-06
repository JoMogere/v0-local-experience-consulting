'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { and, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export async function getBlogPosts() {
  const userId = await getUserId()
  return db.select().from(blogPosts).where(eq(blogPosts.userId, userId)).orderBy(blogPosts.createdAt)
}

export async function createBlogPost(data: {
  title: string
  excerpt?: string
  content: string
  image?: string
  category?: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}) {
  const userId = await getUserId()
  const slug = generateSlug(data.title)

  const result = await db
    .insert(blogPosts)
    .values({
      userId,
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      image: data.image,
      category: data.category,
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.excerpt,
      metaKeywords: data.metaKeywords,
    })
    .returning()

  revalidatePath('/admin/blog')
  revalidatePath('/blog')
  return result[0]
}

export async function updateBlogPost(
  id: number,
  data: {
    title?: string
    excerpt?: string
    content?: string
    image?: string
    category?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published?: boolean
  }
) {
  const userId = await getUserId()

  const result = await db
    .update(blogPosts)
    .set({
      ...data,
      updatedAt: new Date(),
      publishedAt: data.published ? new Date() : undefined,
    })
    .where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
    .returning()

  revalidatePath('/admin/blog')
  revalidatePath('/blog')
  return result[0]
}

export async function deleteBlogPost(id: number) {
  const userId = await getUserId()

  await db.delete(blogPosts).where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))

  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}

export async function getPublishedBlogPosts() {
  return db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(blogPosts.publishedAt)
}

export async function getBlogPostBySlug(slug: string) {
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug))
  return result[0]
}
