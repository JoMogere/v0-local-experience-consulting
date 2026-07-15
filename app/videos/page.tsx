import { Metadata } from 'next'
import Link from 'next/link'
import { getChannelVideos, YouTubeDebugInfo } from '@/lib/youtube'

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
  const featured = videos.slice(0, 3)
  const rest = videos.slice(3)

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="bg-navy-deep border-b border-white/10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Growth Videos</h1>
          <p className="text-lg text-text-gray max-w-2xl">
            Practical strategies and implementation guides for increasing direct bookings and guest satisfaction.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Subscribe to BookedUp Africa</h2>
          <p className="text-text-gray mb-6">
            Get weekly videos on local SEO, guest experience, and direct booking optimization.
          </p>
          <a
            href="https://www.youtube.com/@bookedupafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 text-navy-deep rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>

        {videos.length === 0 && (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-text-gray">
              Videos couldn't be loaded right now. Check back shortly, or visit the channel directly above.
            </p>
          </div>
        )}

        {debugParam === '1' && (
          <div className="mb-8 p-6 bg-black/60 border border-yellow-500/30 rounded-lg overflow-x-auto">
            <h2 className="text-yellow-500 font-bold mb-2">Debug Info</h2>
            <pre className="text-xs text-text-gray whitespace-pre-wrap">{JSON.stringify(debug, null, 2)}</pre>
          </div>
        )}

        {featured.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((video) => (
                <div key={video.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
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

        {rest.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">All Videos ({videos.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-orange-500/50 transition-colors"
                >
                  <div className="aspect-video relative overflow-hidden bg-black/40">
                    {video.thumbnail && (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-14 h-14 bg-orange-500/90 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="22" fill="white" className="ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
