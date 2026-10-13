import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PreferredSourceButton } from '@/components/preferred-source-button'

export const metadata: Metadata = {
  alternates: {
    canonical: '/case-studies',
  },
  title: 'Hospitality Case Studies | BookedUp Africa',
  description: 'Real, verified results from our work with hotels and resorts — no placeholder numbers, just what actually happened.',
  keywords: 'hotel case studies, hospitality marketing examples, hotel success stories',
}

export default function CaseStudiesHub() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">Case Studies</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitality Case Studies: Real Results, Real Numbers</h1>
          <p className="text-xl text-text-gray mb-6">Every number here is verified and pulled straight from the source — no rounded-up estimates, no placeholders.</p>
        </header>

        <section className="mb-12 grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-sm overflow-hidden border border-white/10">
            <Image
              src="/case-studies/elsamere-lodge-booking-clicks.png"
              alt="Google Business Profile Performance dashboard for Elsamere Lodge showing 124 clicks on the hotel's free booking link between February and July 2026."
              width={1200}
              height={484}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Elsamere Lodge: 124 Free Booking Link Clicks</h2>
            <p className="text-text-gray mb-4">
              Over six months, Elsamere Lodge's Google Business Profile generated 124 clicks on its free hotel booking link, the direct "Book" button Google shows on verified hotel listings. Zero commission, pure high-intent traffic.
            </p>
            <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 font-bold hover:underline">
              Read the full case study →
            </Link>
          </div>
        </section>

        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/case-study-elsamere-lodge" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors block">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Elsamere Lodge: Real Search Results →</h3>
              <p className="text-text-gray text-sm mb-4">124 free booking link clicks and 205 organic search clicks in the same period — zero commission, verified Google data</p>
              <div className="text-2xl font-bold text-green-400">124 clicks + 205 organic clicks</div>
            </Link>
            <Link href="/blog/case-study-silent-palms-villa" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors block">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Silent Palms Villa: Early-Stage Numbers →</h3>
              <p className="text-text-gray text-sm mb-4">An honest look at what the early months of local SEO actually look like — not a highlight reel</p>
              <div className="text-2xl font-bold text-blue-400">14 clicks, position 9 → climbing</div>
            </Link>
            <Link href="/blog/case-study-naivasha-hotel-google-business-profile" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors block">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Naivasha Hotel: Google Profile Results →</h3>
              <p className="text-text-gray text-sm mb-4">What a working Google Business Profile looks like, and the zero in it that needs fixing</p>
              <div className="text-2xl font-bold text-green-400">8,427 views, 443 directions, 115 calls</div>
            </Link>
          </div>

          <figure className="max-w-xl mx-auto">
            <div className="rounded-sm overflow-hidden border border-white/10">
              <Image
                src="/testimonials/client-whatsapp-may-2026.png"
                alt="WhatsApp message from a hospitality client, 7 May 2026: Btw Google profile naona inawork poa. What else do you recommend."
                width={954}
                height={232}
                className="w-full h-auto"
              />
            </div>
            <figcaption className="text-sm mt-4 text-center">
              <span className="text-white">&ldquo;By the way, I can see the Google profile is working well. What else do you recommend?&rdquo;</span>
              <span className="block text-orange-500 mt-1">Real client message on WhatsApp, 7 May 2026. Name withheld for privacy.</span>
            </figcaption>
          </figure>

          <div className="p-8 bg-white/5 border border-white/10 rounded-lg text-center">
            <p className="text-text-gray">More case studies from our work with hotels and resorts across Kenya are on the way.</p>
          </div>
        </section>

        <PreferredSourceButton />

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Result?</h2>
          <p className="text-text-gray mb-6">Let's build a strategy that produces numbers worth putting on this page.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
