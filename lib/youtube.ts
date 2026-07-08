export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
}

const CHANNEL_HANDLE = 'bookedupafrica'

async function getUploadsPlaylistId(apiKey: string): Promise<string | null> {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${apiKey}`
  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) return null
  const data = await res.json()
  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null
}

export async function getChannelVideos(): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  if (!apiKey) {
    console.log('[youtube] YOUTUBE_API_KEY is not set')
    return []
  }

  const uploadsPlaylistId = await getUploadsPlaylistId(apiKey)
  if (!uploadsPlaylistId) {
    console.log('[youtube] Could not resolve uploads playlist for channel handle')
    return []
  }

  const videos: YouTubeVideo[] = []
  let pageToken = ''

  // Paginate through the uploads playlist, 50 per page, until exhausted.
  // Costs ~1 quota unit per page — negligible even for hundreds of videos.
  for (let i = 0; i < 10; i++) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${apiKey}${pageToken ? `&pageToken=${pageToken}` : ''}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) break
    const data = await res.json()

    for (const item of data.items || []) {
      const snippet = item.snippet
      if (!snippet?.resourceId?.videoId) continue
      videos.push({
        id: snippet.resourceId.videoId,
        title: snippet.title,
        description: snippet.description || '',
        thumbnail:
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          snippet.thumbnails?.default?.url ||
          '',
        publishedAt: snippet.publishedAt,
      })
    }

    pageToken = data.nextPageToken
    if (!pageToken) break
  }

  return videos
}
