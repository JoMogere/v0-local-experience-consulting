'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const KEY = 'bua_builder_popup'
const WEEK = 7 * 24 * 60 * 60 * 1000

// Pages where a visitor is reading and weighing options. Never the builder, the quote form or contact.
const SHOW_ON = /^\/(services|hotel-[^/]+|blog\/[^/]+|guides\/.+|playbooks(\/.*)?|case-studies|ota-commission-calculator-kenya|channel-manager-setup-kenya)\/?$/
const NEVER = /^\/(build-your-growth-system|book-demo|book-a-demo|contact|admin|sign-in|sign-up)/

const read = () => {
  try {
    return Number(localStorage.getItem(KEY) ?? 0)
  } catch {
    return 0
  }
}
const write = () => {
  try {
    localStorage.setItem(KEY, String(Date.now()))
  } catch {
    /* private window: the popup may show again, which is fine */
  }
}

export function BuilderPopup() {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    setOpen(false)
    if (NEVER.test(pathname) || !SHOW_ON.test(pathname)) return
    if (Date.now() - read() < WEEK) return

    const show = () => {
      if (Date.now() - read() < WEEK) return
      write()
      setOpen(true)
      cleanup()
    }
    const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    const start = Date.now()
    // Desktop: the mouse leaves through the top of the window, after at least 10 seconds on the page.
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget && Date.now() - start > 10000) show()
    }
    // Phone: the visitor has scrolled through 60% of the page.
    const onScroll = () => {
      const doc = document.documentElement
      const depth = (window.scrollY + window.innerHeight) / doc.scrollHeight
      if (depth >= 0.6) show()
    }
    const cleanup = () => {
      document.removeEventListener('mouseout', onLeave)
      window.removeEventListener('scroll', onScroll)
    }
    if (mobile) window.addEventListener('scroll', onScroll, { passive: true })
    else document.addEventListener('mouseout', onLeave)
    return cleanup
  }, [pathname])

  useEffect(() => {
    if (!open) return
    button.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="builder-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md border-2 border-[#F6B12C] bg-[#1A1A1A] p-8 text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-2xl leading-none text-[#EAE5DF]/70 hover:text-white"
        >
          ×
        </button>
        <h2 id="builder-popup-title" className="font-sign text-4xl font-bold text-[#F8F5EC]">
          Not looking for a full retainer?
        </h2>
        <p className="mt-3 font-prose text-lg text-[#EAE5DF]/90">
          Pick your property type, toggle only the channels you want fixed, and lock in a custom scope in 30 seconds.
        </p>
        <Link
          ref={button}
          href="/build-your-growth-system"
          onClick={() => setOpen(false)}
          className="mt-6 inline-block bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] px-6 py-3 font-sign text-xl font-bold text-black transition-opacity hover:opacity-90"
        >
          Build My Hotel Growth System →
        </Link>
      </div>
    </div>
  )
}
