'use client'

import { useEffect, useRef, useState } from 'react'

export type GridVideo = { id: string; title: string; thumbnail: string }

const STEP = 12

// The full video list, shown 12 at a time. More load as the visitor scrolls.
export function VideoGrid({ videos }: { videos: GridVideo[] }) {
  const [count, setCount] = useState(STEP)
  const sentinel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = sentinel.current
    if (!el || count >= videos.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setCount((c) => Math.min(c + STEP, videos.length))
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, videos.length])

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(0, count).map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-navy-alt border border-border-flat rounded-sm overflow-hidden hover:border-gold-flat/50 transition-colors"
          >
            <div className="aspect-video relative overflow-hidden bg-black/40">
              {video.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-14 h-14 bg-gold-flat/90 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="22" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm line-clamp-2 group-hover:text-gold-flat transition-colors">{video.title}</h3>
            </div>
          </a>
        ))}
      </div>
      {count < videos.length && <div ref={sentinel} className="h-10" aria-hidden="true" />}
    </>
  )
}
