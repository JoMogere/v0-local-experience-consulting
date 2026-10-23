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

      const toTop = () => window.scrollTo(0, 0)
      toTop()
      const timers = [50, 200, 600].map((ms) => window.setTimeout(toTop, ms))
      window.addEventListener('load', toTop, { once: true })
      return () => {
        timers.forEach(window.clearTimeout)
        window.removeEventListener('load', toTop)
      }
    } catch {
      /* older browsers: leave the default behaviour */
    }
  }, [])

  return null
}
