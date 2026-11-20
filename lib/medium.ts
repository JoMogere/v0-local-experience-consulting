// Pulls the newest Medium articles from the public RSS feed, so the blog shows them with
// their own title, date and cover image. Medium only puts the latest ~10 posts in the feed.
export interface MediumPost {
  title: string
  link: string
  date: string
  image: string | null
  excerpt: string
  category: string | null
}

const FEED_URL = 'https://medium.com/feed/@mogerejulius41'

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&rsquo;/g, "'")
    .trim()

const tag = (block: string, name: string) => {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))
  return m ? m[1] : ''
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BookedUpAfricaSite/1.0)' },
    })
    if (!res.ok) return []
    const xml = await res.text()
    const items = xml.split('<item>').slice(1)
    return items.map((block) => {
      const html = decode(tag(block, 'content:encoded'))
      const image = html.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null
      const firstP = html.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? ''
      const text = decode(firstP.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ')
      return {
        title: decode(tag(block, 'title')),
        link: decode(tag(block, 'link')).split('?')[0],
        date: decode(tag(block, 'pubDate')),
        image,
        excerpt: text.length > 170 ? text.slice(0, 167).replace(/\s+\S*$/, '') + '...' : text,
        category: decode(tag(block, 'category')) || null,
      }
    }).filter((p) => p.title && p.link)
  } catch {
    return []
  }
}
