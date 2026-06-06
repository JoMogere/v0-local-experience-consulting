'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { services } from '@/lib/db/schema'
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

export async function getServices() {
  const userId = await getUserId()
  return db.select().from(services).where(eq(services.userId, userId)).orderBy(services.createdAt)
}

export async function createService(data: {
  title: string
  subtitle?: string
  description: string
  shortDescription?: string
  researchDetails?: Record<string, any>
  implementationDetails?: Record<string, any>
  image?: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}) {
  const userId = await getUserId()
  const slug = generateSlug(data.title)

  const result = await db
    .insert(services)
    .values({
      userId,
      slug,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      shortDescription: data.shortDescription,
      researchDetails: data.researchDetails,
      implementationDetails: data.implementationDetails,
      image: data.image,
      metaTitle: data.metaTitle || data.title,
      metaDescription: data.metaDescription || data.shortDescription,
      metaKeywords: data.metaKeywords,
    })
    .returning()

  revalidatePath('/admin/services')
  revalidatePath('/services')
  return result[0]
}

export async function updateService(
  id: number,
  data: {
    title?: string
    subtitle?: string
    description?: string
    shortDescription?: string
    researchDetails?: Record<string, any>
    implementationDetails?: Record<string, any>
    image?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published?: boolean
  }
) {
  const userId = await getUserId()

  const result = await db
    .update(services)
    .set({
      ...data,
      updatedAt: new Date(),
      publishedAt: data.published && !data.published ? null : undefined,
    })
    .where(and(eq(services.id, id), eq(services.userId, userId)))
    .returning()

  revalidatePath('/admin/services')
  revalidatePath('/services')
  return result[0]
}

export async function deleteService(id: number) {
  const userId = await getUserId()

  await db.delete(services).where(and(eq(services.id, id), eq(services.userId, userId)))

  revalidatePath('/admin/services')
  revalidatePath('/services')
}

export async function getPublishedServices() {
  return db.select().from(services).where(eq(services.published, true)).orderBy(services.createdAt)
}

export async function getServiceBySlug(slug: string) {
  const result = await db.select().from(services).where(eq(services.slug, slug))
  return result[0]
}
