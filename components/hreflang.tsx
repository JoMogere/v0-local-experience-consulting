'use client'

import { usePathname } from 'next/navigation'
import { SITE_URL } from '@/lib/site'

const PRIVATE_PREFIXES = ['/admin', '/sign-in', '/sign-up', '/setup-admin']

// Tells search engines which language and region each page is for. The site is
// in English for Kenya, so every public page points to itself as the English
// version and as the default version.
export function Hreflang() {
  const pathname = usePathname() || '/'
  if (PRIVATE_PREFIXES.some((p) => pathname.startsWith(p))) return null
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  const url = `${SITE_URL}${path}`
  return (
    <>
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </>
  )
}
