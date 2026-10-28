'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { KeepReading } from './keep-reading'
import { SubscribeForm } from './subscribe-form'

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
      {pathname && FEED_PATH.test(pathname) && (
        <>
          <section className="bg-navy-alt border-t border-border-flat py-12">
            <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
              <h2 className="text-2xl font-bold text-[#F9F6F0] mb-2">Enjoyed this? Get the next one by email.</h2>
              <p className="text-text-gray mb-6">Weekly hotel marketing insights from Jo. Free. Unsubscribe anytime.</p>
              <SubscribeForm />
            </div>
          </section>
          <KeepReading />
        </>
      )}
      <Footer />
    </>
  )
}
