import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Case Study: Elsamere Lodge Free Booking Link Results | BookedUp Africa',
  description: 'How Elsamere Lodge generated 124 clicks on its free Google hotel booking link, driving zero-commission direct booking traffic.',
  keywords: 'Elsamere Lodge, free hotel booking link, Google Business Profile results, direct bookings Kenya',
}

export default function ElsamereLodgeCaseStudy() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> /{' '}
          <Link href="/blog/hospitality-case-studies" className="hover:text-orange-500">Case Studies</Link> / Elsamere Lodge
        </div>

        <header className="mb-12">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Elsamere Lodge: 124 Free Booking Link Clicks in 6 Months
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Google's free hotel booking link places a direct "Book" button on your Google Business Profile — no commission, no OTA middleman. Here's what that looked like for Elsamere Lodge over a 6-month window.
          </p>
        </header>

        <section className="mb-12">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/case-studies/elsamere-lodge-booking-clicks.png"
              alt="Google Business Profile Performance dashboard for Elsamere Lodge showing 124 clicks on the hotel's free booking link between February and July 2026, with a chart showing booking click volume rising over the period."
              width={1200}
              height={484}
              className="w-full h-auto"
            />
          </div>
          <p className="text-text-gray text-sm mt-3 text-center">
            Elsamere Lodge's Google Business Profile Performance report, Feb 2026 – Jul 2026.
          </p>
        </section>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">The Result</h2>
            <p className="text-text-gray mb-6">
              Over the Feb–Jul 2026 window, Elsamere Lodge's Google Business Profile recorded <strong className="text-white">124 clicks</strong> on its free hotel booking link — the "Book" button Google shows directly in Search and Maps for verified hotel listings. Every one of those clicks is a guest who was shown a direct path to book with Elsamere, with no OTA commission attached and no third party in between.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Why This Matters</h3>
              <p className="text-text-gray">
                Most hotels never see this button at all, because it depends on the Google Business Profile being correctly set up as a hotel-category listing with a working booking link connected — not just a standard business listing. This is the same "free booking link" setup covered in our <Link href="/pillar/direct-bookings/booking-engine-setup" className="text-orange-500 hover:text-orange-400">Booking Engine Setup guide</Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What This Traffic Represents</h2>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">High-intent traffic — guests who had already found Elsamere on Google and were ready to check availability, not early-stage browsers</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">Zero commission — unlike an OTA booking, a click through the free booking link costs nothing per booking</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">Visibility that compounds — this sits alongside organic local search ranking, so it grows as the property's overall Google presence strengthens</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Bigger Picture</h2>
            <p className="text-text-gray">
              124 clicks in one channel over six months isn't the whole story on its own — it's one piece of a Google Business Profile working the way it's supposed to. It reflects a listing that's correctly categorized, verified, and connected to a working booking link, which is the foundation covered in our <Link href="/pillar/local-seo-hotels" className="text-orange-500 hover:text-orange-400">Local SEO guide</Link>.
            </p>
          </section>

          <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Want This for Your Property?</h2>
            <p className="text-text-gray mb-6">
              We set up and audit Google Business Profile booking links, local SEO, and direct booking systems for hotels across Kenya and East Africa.
            </p>
            <a
              href="https://calendly.com/mogerejulius41/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors"
            >
              Schedule a Free Strategy Call
            </a>
          </section>
        </section>
      </div>
    </article>
  )
}
