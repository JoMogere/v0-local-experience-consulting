// Turns a pasted video link into something we can embed.
// The `key` is stored in the existing `videos.youtubeid` column (no DB change
// needed): plain YouTube ids stay as they are, other platforms are stored as
// "tiktok:<id>", "instagram:<code>" or "facebook:<full url>".

export type Platform = 'youtube' | 'tiktok' | 'instagram' | 'facebook'

export interface ParsedVideo {
  platform: Platform
  key: string
  embedUrl: string
  /** true for tall phone-style video (TikTok, Instagram Reels) */
  vertical: boolean
  watchUrl: string
}

export function parseVideoUrl(input: string): ParsedVideo | null {
  const url = input.trim()

  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([\w-]{6,})/)
  if (yt) {
    return {
      platform: 'youtube',
      key: yt[1],
      embedUrl: `https://www.youtube.com/embed/${yt[1]}`,
      vertical: /shorts\//.test(url),
      watchUrl: `https://www.youtube.com/watch?v=${yt[1]}`,
    }
  }

  const tt = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/)
  if (tt) {
    return {
      platform: 'tiktok',
      key: `tiktok:${tt[1]}`,
      embedUrl: `https://www.tiktok.com/embed/v2/${tt[1]}`,
      vertical: true,
      watchUrl: url,
    }
  }

  const ig = url.match(/instagram\.com\/(?:[\w.]+\/)?(p|reel|reels|tv)\/([\w-]+)/)
  if (ig) {
    const kind = ig[1] === 'reels' ? 'reel' : ig[1]
    return {
      platform: 'instagram',
      key: `instagram:${ig[2]}`,
      embedUrl: `https://www.instagram.com/${kind}/${ig[2]}/embed`,
      vertical: kind !== 'p',
      watchUrl: `https://www.instagram.com/${kind}/${ig[2]}/`,
    }
  }

  if (/(facebook\.com|fb\.watch)\//.test(url)) {
    const clean = url.split('#')[0]
    return {
      platform: 'facebook',
      key: `facebook:${clean}`,
      embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(clean)}&show_text=false`,
      vertical: /\/reel\//.test(url),
      watchUrl: clean,
    }
  }

  return null
}

/** Rebuild embed info from what is stored in the database. */
export function fromStoredKey(key: string): ParsedVideo | null {
  if (key.startsWith('tiktok:')) return parseVideoUrl(`https://www.tiktok.com/@x/video/${key.slice(7)}`)
  if (key.startsWith('instagram:')) return parseVideoUrl(`https://www.instagram.com/reel/${key.slice(10)}/`)
  if (key.startsWith('facebook:')) return parseVideoUrl(key.slice(9))
  return parseVideoUrl(`https://www.youtube.com/watch?v=${key}`)
}

export const PLATFORM_LABEL: Record<Platform, string> = {
  youtube: 'YouTube',
  tiktok: 'TikTok',
  instagram: 'Instagram',
  facebook: 'Facebook',
}
