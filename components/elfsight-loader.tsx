'use client'

import { useEffect, useRef } from 'react'

// Elfsight's script is large, so it is only fetched when the feed is about to scroll into view.
// It is added again each time the feed appears, because pages here change without a full reload
// and Elfsight only looks for its widgets at the moment the script loads.
export function ElfsightLoader() {
  const marker = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const src = 'https://elfsightcdn.com/platform.js'
    let added: HTMLScriptElement | null = null
    const load = () => {
      document.querySelectorAll(`script[src^="${src}"]`).forEach((el) => el.remove())
      added = document.createElement('script')
      added.src = `${src}?t=${Date.now()}`
      added.async = true
      document.body.appendChild(added)
    }
    const el = marker.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      load()
      return () => added?.remove()
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect()
          load()
        }
      },
      { rootMargin: '500px 0px' },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      added?.remove()
    }
  }, [])

  return <div ref={marker} className="h-px" aria-hidden="true" />
}
