'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CONTENT_FEED } from '@/lib/content-feed'

const STEP = 3

// An endless "keep reading" list at the bottom of articles and guides. It shows
// a few related pages first and loads more as the visitor scrolls, closest
// topics first, then ends with a call to action.
export function KeepReading() {
  const pathname = (usePathname() || '').replace(/\/+$/, '')
  const [count, setCount] = useState(STEP)
  const sentinel = useRef<HTMLDivElement | null>(null)

  const items = useMemo(() => {
    const current = CONTENT_FEED.find((i) => i.href === pathname)
    const others = CONTENT_FEED.filter((i) => i.href !== pathname)
    if (!current) return others
    return [...others.filter((i) => i.topic === current.topic), ...others.filter((i) => i.topic !== current.topic)]
  }, [pathname])

  useEffect(() => {
    setCount(STEP)
  }, [pathname])

  useEffect(() => {
    const el = sentinel.current
    if (!el || count >= items.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setCount((c) => Math.min(c + STEP, items.length))
      },
      { rootMargin: '400px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count, items.length])

  const done = count >= items.length

  return (
    <section className="bg-navy-deep border-t border-border-flat py-12 md:py-16" aria-labelledby="keep-reading-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 id="keep-reading-heading" className="text-2xl md:text-3xl font-bold text-[#F9F6F0] mb-8">
          Keep Reading
        </h2>
        <ul className="space-y-4">
          {items.slice(0, count).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group block p-5 bg-navy-alt border border-border-flat rounded-sm hover:border-gold-flat/50 transition-colors"
              >
                <span className="text-xs uppercase tracking-[2px] text-gold-flat">{item.kind}</span>
                <h3 className="text-lg font-bold text-[#F9F6F0] group-hover:text-gold-flat transition-colors mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-text-gray">{item.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>

        {!done && <div ref={sentinel} className="h-10" aria-hidden="true" />}

        {done && (
          <div className="mt-10 p-8 border border-gold-flat/40 text-center">
            <p className="text-xl font-bold text-[#F9F6F0] mb-2">You&apos;ve reached the end. Want this done for your hotel?</p>
            <p className="text-text-gray mb-6">Get a free look at what&apos;s costing you bookings.</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity text-sm uppercase tracking-[0.5px]"
            >
              Get Your Free Audit
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
