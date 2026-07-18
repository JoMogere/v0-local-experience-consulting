export interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
}

const CHANNEL_HANDLE = '@bookedupafrica'

export interface YouTubeDebugInfo {
  channelLookupStatus?: number
  channelLookupBody?: any
  uploadsPlaylistId?: string | null
  playlistItemsStatus?: number
  playlistItemsError?: any
}

async function getUploadsPlaylistId(apiKey: string, debug?: YouTubeDebugInfo): Promise<string | null> {
  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${encodeURIComponent(CHANNEL_HANDLE)}&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json().catch(() => null)
    if (debug) {
      debug.channelLookupStatus = res.status
      debug.channelLookupBody = data
    }
    if (!res.ok || !data) return null
    return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null
  } catch (error) {
    console.log('[youtube] channel lookup failed:', error)
    if (debug) debug.channelLookupBody = { error: String(error) }
    return null
  }
}

export async function getChannelVideos(debug?: YouTubeDebugInfo): Promise<YouTubeVideo[]> {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    if (!apiKey) {
      console.log('[youtube] YOUTUBE_API_KEY is not set')
      return []
    }

    const uploadsPlaylistId = await getUploadsPlaylistId(apiKey, debug)
    if (debug) debug.uploadsPlaylistId = uploadsPlaylistId
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
      if (!res.ok) {
        if (debug) {
          debug.playlistItemsStatus = res.status
          debug.playlistItemsError = await res.json().catch(() => null)
        }
        break
      }
      const data = await res.json().catch(() => null)
      if (!data) break

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
  } catch (error) {
    console.log('[youtube] getChannelVideos failed:', error)
    return []
  }
}
