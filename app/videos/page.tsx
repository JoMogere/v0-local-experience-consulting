import { Metadata } from 'next'
import Link from 'next/link'
import { getChannelVideos, YouTubeDebugInfo } from '@/lib/youtube'
import { getPublicVideos } from '@/app/actions/videos'
import { fromStoredKey, PLATFORM_LABEL } from '@/lib/social-video'
import { InstagramFeed } from '@/components/instagram-feed'
import { VideoGrid } from '@/components/video-grid'

export const metadata: Metadata = {
  alternates: {
    canonical: '/videos',
  },
  title: 'Hotel Growth Videos | BookedUp Africa',
  description: 'Practical strategies and implementation guides for increasing direct bookings and guest satisfaction, from the BookedUp Africa YouTube channel.',
}

export const revalidate = 3600

export default async function VideosPage({ searchParams }: { searchParams: Promise<{ debug?: string }> }) {
  const { debug: debugParam } = await searchParams
  const debug: YouTubeDebugInfo = {}
  const videos = await getChannelVideos(debugParam === '1' ? debug : undefined)
  const social = await getPublicVideos()
    .then((rows) =>
      rows
        .filter((r) => /^(tiktok|instagram|facebook):/.test(r.youtubeId))
        .map((r) => ({ row: r, info: fromStoredKey(r.youtubeId) }))
        .filter((x) => x.info),
    )
    .catch(() => [])
  const featured = videos.slice(0, 3)
  const rest = videos.slice(3)

  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24">
      <div className="bg-navy-deep border-b border-border-flat py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Growth Videos</h1>
          <p className="text-lg text-text-gray max-w-2xl">
            Practical strategies and implementation guides for increasing direct bookings and guest satisfaction.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-navy-alt border border-border-flat rounded-sm p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Subscribe to BookedUp Africa</h2>
          <p className="text-text-gray mb-6">
            Get weekly videos on local SEO, guest experience, and direct booking optimization.
          </p>
          <a
            href="https://www.youtube.com/@bookedupafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] hover:opacity-90 rounded font-semibold hover:opacity-90 transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>

        {videos.length === 0 && (
          <div className="text-center py-12 bg-navy-alt border border-border-flat rounded-sm">
            <p className="text-text-gray">
              Videos couldn't be loaded right now. Check back shortly, or visit the channel directly above.
            </p>
          </div>
        )}

        {debugParam === '1' && (
          <div className="mb-8 p-6 bg-black/60 border border-yellow-500/30 rounded-sm overflow-x-auto">
            <h2 className="text-yellow-500 font-bold mb-2">Debug Info</h2>
            <pre className="text-xs text-text-gray whitespace-pre-wrap">{JSON.stringify(debug, null, 2)}</pre>
          </div>
        )}

        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((video) => (
                <div key={video.id} className="bg-navy-alt border border-border-flat rounded-sm overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm line-clamp-2">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {social.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">From Our Social Channels</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {social.map(({ row, info }) => (
                <div key={row.id} className="bg-navy-alt border border-border-flat rounded-sm overflow-hidden">
                  <div className={info!.vertical ? 'aspect-[9/16]' : 'aspect-video'}>
                    <iframe
                      src={info!.embedUrl}
                      title={row.title}
                      className="w-full h-full"
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm line-clamp-2">{row.title}</h3>
                    <a
                      href={info!.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold-flat hover:underline"
                    >
                      Watch on {PLATFORM_LABEL[info!.platform]} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">All Videos ({videos.length})</h2>
            <VideoGrid videos={rest.map((v) => ({ id: v.id, title: v.title, thumbnail: v.thumbnail }))} />
          </section>
        )}
      </div>
      <InstagramFeed />
    </main>
  )
}
