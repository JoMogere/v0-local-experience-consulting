'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import { getVideos } from '@/lib/data'

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setVideos(getVideos())
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-24">
      {/* Header */}
      <div className="bg-navy-deep border-b border-white/10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Growth Videos</h1>
          <p className="text-lg text-text-gray max-w-2xl">
            Practical strategies and implementation guides for increasing direct bookings and guest satisfaction.
          </p>
        </div>
      </div>

      {/* YouTube Embed */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8">
          {/* Channel Subscribe */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to BookedUp Africa</h2>
            <p className="text-text-gray mb-6">
              Get weekly videos on local SEO, guest experience, and direct booking optimization.
            </p>
            <a
              href="https://www.youtube.com/@bookedupafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>

          {/* Latest Videos Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Videos ({videos.length})</h2>
            
            {loading ? (
              <p className="text-text-gray">Loading videos...</p>
            ) : videos.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden mb-3">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
                        <div className="text-4xl text-white">▶</div>
                      </div>
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-text-gray mt-1">{video.description}</p>
                    )}
                  </a>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
                <p className="text-text-gray mb-4">No videos uploaded yet.</p>
                <a
                  href="https://www.youtube.com/@bookedupafrica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
                >
                  Visit YouTube Channel
                </a>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Hotel?</h3>
            <p className="text-text-gray mb-6">
              Watch our latest strategies and then connect with us to implement them for your property.
            </p>
            <a
              href="/hotel-growth-partnership-kenya"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
