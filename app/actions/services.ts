'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { services } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getServices() {
  const userId = await getUserId()
  return db
    .select()
    .from(services)
    .where(eq(services.userId, userId))
    .orderBy(desc(services.createdAt))
}

export async function getPublicServices() {
  return db
    .select()
    .from(services)
    .where(eq(services.status, 'active'))
}

export async function getServiceBySlug(slug: string) {
  const result = await db
    .select()
    .from(services)
    .where(eq(services.slug, slug))
    .limit(1)
  return result[0] || null
}

export async function createService(data: {
  title: string
  slug: string
  description: string
  content?: string
  features?: string
  icon?: string
}) {
  const userId = await getUserId()
  const result = await db
    .insert(services)
    .values({
      ...data,
      userId,
      status: 'active',
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
    slug?: string
    description?: string
    content?: string
    features?: string
    icon?: string
    status?: 'active' | 'inactive'
  }
) {
  const userId = await getUserId()
  const result = await db
    .update(services)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(services.id, id))
    .returning()
  revalidatePath('/admin/services')
  revalidatePath('/services')
  return result[0]
}

export async function deleteService(id: number) {
  const userId = await getUserId()
  await db.delete(services).where(eq(services.id, id))
  revalidatePath('/admin/services')
  revalidatePath('/services')
}
