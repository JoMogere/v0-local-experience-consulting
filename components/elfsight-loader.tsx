'use client'

import { useEffect } from 'react'

// Elfsight only looks for widgets when its script loads. On this site pages change without a full
// reload, so the script is added again each time the feed appears, which makes it find the widgets.
export function ElfsightLoader() {
  useEffect(() => {
    const src = 'https://elfsightcdn.com/platform.js'
    document.querySelectorAll(`script[src^="${src}"]`).forEach((el) => el.remove())
    const s = document.createElement('script')
    s.src = `${src}?t=${Date.now()}`
    s.async = true
    document.body.appendChild(s)
    return () => {
      s.remove()
    }
  }, [])
  return null
}
