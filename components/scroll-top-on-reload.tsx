'use client'

import { useEffect } from 'react'

// When the visitor refreshes the page, start again at the top of that page
// instead of the browser jumping back to where they had scrolled to. Links with
// a #section in the address still go to that section, and the back button and
// normal clicking between pages are not affected.
export function ScrollTopOnReload() {
  useEffect(() => {
    try {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      if (nav?.type !== 'reload' || window.location.hash) return

      const toTop = () => {
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: 'auto' })
      }
      const frame = window.requestAnimationFrame(toTop)
      window.addEventListener('load', toTop, { once: true })
      return () => {
        window.cancelAnimationFrame(frame)
        window.removeEventListener('load', toTop)
      }
    } catch {
      /* older browsers: leave the default behaviour */
    }
  }, [])

  return null
}
