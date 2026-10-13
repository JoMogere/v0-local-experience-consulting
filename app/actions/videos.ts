'use server'

import { requireAdmin } from '@/lib/admin'
import { parseVideoUrl } from '@/lib/social-video'
import { db } from '@/lib/db'
import { videos } from '@/lib/db/schema'
import { eq, desc } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const user = await requireAdmin()
  return user.id
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

export async function createVideoFromUrl(data: {
  title: string
  youtubeUrl: string
  description?: string
  category?: string
}) {
  const parsed = parseVideoUrl(data.youtubeUrl)
  if (!parsed) {
    throw new Error(
      'Link not recognised. Paste a full YouTube, TikTok (…/@name/video/123), Instagram (post or reel) or Facebook video link. Short links like vm.tiktok.com must be opened first and the full address copied.',
    )
  }

  try {
    return await createVideo({
      title: data.title,
      youtubeId: parsed.key,
      description: data.description,
      category: data.category,
      thumbnail:
        parsed.platform === 'youtube'
          ? `https://img.youtube.com/vi/${parsed.key}/maxresdefault.jpg`
          : undefined,
    })
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    if (/duplicate key|unique/i.test(msg)) throw new Error('That video has already been added.')
    throw error
  }
}
