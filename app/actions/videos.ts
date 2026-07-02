'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { videos } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getVideos() {
  const userId = await getUserId()
  return db
    .select()
    .from(videos)
    .where(eq(videos.userId, userId))
    .orderBy(desc(videos.createdAt))
}

export async function getPublicVideos() {
  return db
    .select()
    .from(videos)
    .where(eq(videos.status, 'active'))
    .orderBy(desc(videos.createdAt))
}

export async function createVideo(data: {
  title: string
  youtubeId: string
  description?: string
  thumbnail?: string
  category?: string
}) {
  const userId = await getUserId()
  const result = await db
    .insert(videos)
    .values({
      ...data,
      userId,
      status: 'active',
    })
    .returning()
  revalidatePath('/admin/videos')
  revalidatePath('/videos')
  return result[0]
}

export async function updateVideo(
  id: number,
  data: {
    title?: string
    description?: string
    category?: string
    status?: 'active' | 'inactive'
  }
) {
  const userId = await getUserId()
  const result = await db
    .update(videos)
    .set({
      ...data,
      updatedAt: new Date(),
    })
    .where(eq(videos.id, id))
    .returning()
  revalidatePath('/admin/videos')
  revalidatePath('/videos')
  return result[0]
}

export async function deleteVideo(id: number) {
  const userId = await getUserId()
  await db.delete(videos).where(eq(videos.id, id))
  revalidatePath('/admin/videos')
  revalidatePath('/videos')
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export async function createVideoFromUrl(data: {
  title: string
  youtubeUrl: string
  description?: string
  category?: string
}) {
  const youtubeId = extractYoutubeId(data.youtubeUrl)
  if (!youtubeId) throw new Error('Invalid YouTube URL')

  return createVideo({
    title: data.title,
    youtubeId,
    description: data.description,
    category: data.category,
    thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
  })
}
