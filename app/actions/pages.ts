'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { pages } from '@/lib/db/schema'
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

export async function getPages() {
  const userId = await getUserId()
  return db.select().from(pages).where(eq(pages.userId, userId)).orderBy(pages.createdAt)
}

export async function createPage(data: {
  title: string
  content: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}) {
  const userId = await getUserId()
  const slug = generateSlug(data.title)

  const result = await db
    .insert(pages)
    .values({
      userId,
      slug,
      title: data.title,
      content: data.content,
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription,
      metaKeywords: data.metaKeywords,
    })
    .returning()

  revalidatePath('/admin/pages')
  revalidatePath('/pages')
  return result[0]
}

export async function updatePage(
  id: number,
  data: {
    title?: string
    content?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published?: boolean
  }
) {
  const userId = await getUserId()

  const result = await db
    .update(pages)
    .set({
      ...data,
      updatedAt: new Date(),
      publishedAt: data.published ? new Date() : undefined,
    })
    .where(and(eq(pages.id, id), eq(pages.userId, userId)))
    .returning()

  revalidatePath('/admin/pages')
  revalidatePath('/pages')
  return result[0]
}

export async function deletePage(id: number) {
  const userId = await getUserId()

  await db.delete(pages).where(and(eq(pages.id, id), eq(pages.userId, userId)))

  revalidatePath('/admin/pages')
  revalidatePath('/pages')
}

export async function getPublishedPages() {
  return db.select().from(pages).where(eq(pages.published, true)).orderBy(pages.createdAt)
}

export async function getPageBySlug(slug: string) {
  const result = await db.select().from(pages).where(eq(pages.slug, slug))
  return result[0]
}
