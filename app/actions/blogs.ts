'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { blogs } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getBlogs() {
  const userId = await getUserId()
  return db
    .select()
    .from(blogs)
    .where(eq(blogs.userId, userId))
    .orderBy(desc(blogs.createdAt))
}

export async function getPublishedBlogs() {
  return db
    .select()
    .from(blogs)
    .where(eq(blogs.status, 'published'))
    .orderBy(desc(blogs.publishedAt))
}

export async function getBlogBySlug(slug: string) {
  const result = await db
    .select()
    .from(blogs)
    .where(eq(blogs.slug, slug))
    .limit(1)
  return result[0] || null
}

export async function createBlog(data: {
  title: string
  slug: string
  content: string
  excerpt?: string
  category?: string
}) {
  const userId = await getUserId()
  const result = await db
    .insert(blogs)
    .values({
      ...data,
      userId,
      status: 'draft',
    })
    .returning()
  revalidatePath('/admin/blogs')
  return result[0]
}

export async function updateBlog(
  id: number,
  data: {
    title?: string
    slug?: string
    content?: string
    excerpt?: string
    category?: string
    status?: 'draft' | 'published'
  }
) {
  const userId = await getUserId()
  const result = await db
    .update(blogs)
    .set({
      ...data,
      updatedAt: new Date(),
      publishedAt: data.status === 'published' ? new Date() : undefined,
    })
    .where(eq(blogs.id, id))
    .returning()
  revalidatePath('/admin/blogs')
  revalidatePath('/blogs')
  return result[0]
}

export async function deleteBlog(id: number) {
  const userId = await getUserId()
  await db.delete(blogs).where(eq(blogs.id, id))
  revalidatePath('/admin/blogs')
  revalidatePath('/blogs')
}
