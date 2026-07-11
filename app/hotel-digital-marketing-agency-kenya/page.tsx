import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hotel Digital Marketing Agency in Kenya | BookedUp Africa',
  description: 'A hospitality-specialist digital marketing agency for hotels and resorts in Kenya — Local SEO, direct bookings, and experiential marketing, with real verified results.',
  keywords: 'hotel digital marketing agency Kenya, hotel marketing agency Nairobi, hospitality marketing Kenya, hotel SEO agency Kenya',
}

export default function HotelDigitalMarketingAgencyPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Hotel Digital Marketing Agency</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Hotel Marketing Agency, Not a Generalist That Also Does Hotels
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            BookedUp Africa works exclusively with hotels, lodges, and resorts across Kenya — Local SEO, direct bookings, and experiential marketing, built around how guests actually search and book.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="#why-specialist" className="px-6 py-3 bg-orange-500 text-navy-deep rounded hover:bg-orange-600 transition-colors">
              See What's Different
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-500/10 transition-colors">
              Get a Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Why a specialist */}
      <section id="why-specialist" className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why a Hospitality Specialist, Not a General Agency</h2>
          <p className="text-gray-300 mb-12 leading-relaxed">
            A general digital marketing agency can run your ads and post to your social media. What they usually can't do is troubleshoot a rate parity conflict, set up a Google Hotel Search feed, or tell you why your booking engine is quietly leaking guests to Booking.com. That's the gap a specialist closes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Source-Market Segmentation</h3>
              <p className="text-gray-300 text-sm">
                A Nairobi weekend traveler, a European tourist, and a corporate booker don't respond to the same message. We build separate creative and messaging for each, instead of one generic campaign for everyone.
              </p>
            </div>

            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Weekly Check-Ins, Not Monthly Reports</h3>
              <p className="text-gray-300 text-sm">
                You'll hear from us weekly, not once a month with a static PDF. If something's not working, we adjust before the next month's numbers reflect it.
              </p>
            </div>

            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Direct Support When It Matters</h3>
              <p className="text-gray-300 text-sm">
                Rate parity conflicts and booking engine issues don't wait for business hours. You get direct access to talk it through, not a ticket queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Results, Not Recycled Numbers</h2>
          <p className="text-gray-300 mb-12 leading-relaxed">
            Every number on this site is specific to a real property, with a case study behind it — not a statistic that could apply to any industry.
          </p>
          <Link
            href="/blog/case-study-elsamere-lodge"
            className="block border border-orange-500/30 rounded-lg p-8 hover:border-orange-500/60 transition-all bg-white/5"
          >
            <h3 className="text-2xl font-bold mb-3">Elsamere Lodge: 124 Free Booking Link Clicks in 6 Months</h3>
            <p className="text-gray-300 mb-4">
              Zero commission, high-intent traffic from Google's free hotel booking link — verified directly from the property's Google Business Profile dashboard.
            </p>
            <span className="text-orange-500 font-semibold">Read the full case study →</span>
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Actually Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/services/local-seo" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all block">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Local SEO</h3>
              <p className="text-gray-300 text-sm">Google Business Profile optimization, NAP consistency, and review generation that gets you found first.</p>
            </Link>
            <Link href="/services/direct-bookings" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all block">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Direct Bookings</h3>
              <p className="text-gray-300 text-sm">Channel manager setup, Google Hotel Search integration, and booking flow fixes that cut OTA commission.</p>
            </Link>
            <Link href="/services/experiential-marketing" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all block">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Experiential Marketing</h3>
              <p className="text-gray-300 text-sm">Content and campaigns built around what actually makes your property distinct, not a generic template.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Go Deeper</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/hotel-marketing-agency-vs-digital-marketing-agency" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all block">
              <h3 className="text-xl font-bold mb-2">Hotel Agency vs. Digital Marketing Agency</h3>
              <p className="text-gray-300">What actually separates a hospitality specialist from a generalist, and how to tell which one you're talking to.</p>
            </Link>
            <Link href="/hotel-growth-partnership-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all block">
              <h3 className="text-xl font-bold mb-2">Hotel Growth & Direct Booking System</h3>
              <p className="text-gray-300">The full long-term partnership model — Local SEO, reputation, and booking performance managed together.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Talk to a Specialist, Not a Generalist</h2>
          <p className="text-gray-300 mb-8">Get a free audit covering Local SEO, direct bookings, and experiential marketing for your property.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Request Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  )
}
