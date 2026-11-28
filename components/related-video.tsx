import { getChannelVideos } from '@/lib/youtube'

const STOP = new Set(
  'the a an and or of to in on for with how your you our is are be it this that from by at as more what why do does can will not into about hotel hotels kenya kenyan africa bookedup guide guides'.split(' '),
)

function words(text: string) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w)),
  )
}

// Picks the channel video that best matches the page topic and shows it as a
// click-to-play card. Shows nothing when no video is a real match.
export async function RelatedVideo({ topic }: { topic: string }) {
  const videos = await getChannelVideos()
  if (!videos.length) return null
  const want = words(topic)
  let best: { v: (typeof videos)[number]; score: number } | null = null
  for (const v of videos) {
    const have = words(`${v.title} ${v.title} ${v.description.slice(0, 300)}`)
    let score = 0
    want.forEach((w) => {
      if (have.has(w)) score++
    })
    if (!best || score > best.score) best = { v, score }
  }
  if (!best || best.score < 2) return null
  const { v } = best

  return (
    <aside className="mx-auto my-12 max-w-3xl px-4">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F6B12C]">Watch this next</p>
      <a
        href={`https://www.youtube.com/watch?v=${v.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid overflow-hidden border border-white/15 bg-black/40 hover:border-[#F6B12C]/60 sm:grid-cols-[260px_1fr]"
      >
        <div className="relative aspect-video bg-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={v.thumbnail} alt={v.title} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#F6B12C] text-black">▶</span>
          </span>
        </div>
        <div className="p-4 text-left">
          <p className="font-bold leading-snug text-[#F9F6F0] group-hover:text-[#F6B12C]">{v.title}</p>
          <p className="mt-2 text-sm text-[#EAE5DF]/70">From the BookedUp Africa YouTube channel</p>
        </div>
      </a>
    </aside>
  )
}
