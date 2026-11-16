'use client'

import { usePathname } from 'next/navigation'
import { SITE_URL } from '@/lib/site'

// Open Graph address, site name and language for every page. The address is the page's own,
// so it always matches the canonical link. React places these tags in the page head.
export function SocialTags() {
  const path = usePathname() || '/'
  const clean = path === '/' ? '/' : path.replace(/\/+$/, '')
  return (
    <>
      <meta property="og:url" content={`${SITE_URL}${clean === '/' ? '/' : clean}`} />
      <meta property="og:site_name" content="BookedUp Africa" />
      <meta property="og:locale" content="en_US" />
    </>
  )
}
