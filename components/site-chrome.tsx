'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { KeepReading } from './keep-reading'

const NO_PUBLIC_CHROME_PREFIXES = ['/admin', '/sign-in', '/sign-up']

// Articles and guides (not the lists themselves) get the endless Keep Reading feed.
const FEED_PATH = /^\/(blog\/[^/]+|guides\/.+|channel-manager-setup-kenya)\/?$/

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hidePublicChrome = NO_PUBLIC_CHROME_PREFIXES.some((p) => pathname?.startsWith(p))
  if (hidePublicChrome) return <>{children}</>
  return (
    <>
      <Navigation />
      <main className="pt-20 md:pt-24">{children}</main>
      {pathname && FEED_PATH.test(pathname) && <KeepReading />}
      <Footer />
    </>
  )
}
