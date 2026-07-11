import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hotel Website Design & SEO: What Actually Converts | BookedUp Africa',
  description: 'Core Web Vitals, homepage structure, navigation, and internal linking for hotel websites that rank and actually convert visitors into bookings.',
  keywords: 'hotel website design, hotel web SEO, website structure, mobile booking',
}

export default function WebsitePillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Hotel Websites</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotel Website Design & SEO: What Actually Converts</h1>
          <p className="text-xl text-text-gray mb-6">
            A beautiful website that's slow or confusing loses bookings just as fast as an ugly one that's fast and clear.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#speed" className="text-orange-500 hover:text-orange-400">Why Speed Isn't Optional</Link></li>
            <li><Link href="#homepage" className="text-orange-500 hover:text-orange-400">What Your Homepage Actually Needs</Link></li>
            <li><Link href="#navigation" className="text-orange-500 hover:text-orange-400">Navigation Guests Won't Get Lost In</Link></li>
            <li><Link href="#linking" className="text-orange-500 hover:text-orange-400">Internal Linking, Done Simply</Link></li>
            <li><Link href="#schema" className="text-orange-500 hover:text-orange-400">Structured Data</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="speed">
            <h2 className="text-3xl font-bold text-white">Why Speed Isn't Optional</h2>
            <p>
              A guest on a mobile connection deciding between three properties won't wait for a slow site to load — they'll just book the one that loaded first. Google measures this directly through Core Web Vitals:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Largest Contentful Paint:</strong> under 2.5 seconds — how fast the main content actually appears</li>
              <li><strong className="text-white">First Input Delay:</strong> under 100ms — how fast the page responds when someone taps something</li>
              <li><strong className="text-white">Cumulative Layout Shift:</strong> under 0.1 — whether the page jumps around while it's loading</li>
            </ul>
          </div>

          <div id="homepage">
            <h2 className="text-3xl font-bold text-white">What Your Homepage Actually Needs</h2>
            <p>Everything above the fold should answer "why here, not somewhere else" within a few seconds:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>A clear statement of what makes you worth booking — not a generic welcome message</li>
              <li>A real image or video, not a stock photo that could be any hotel anywhere</li>
              <li>A booking widget that's actually usable, not a "contact us" link disguised as one</li>
              <li>Real guest testimonials, not a marketing paragraph pretending to be one</li>
            </ul>
          </div>

          <div id="navigation">
            <h2 className="text-3xl font-bold text-white">Navigation Guests Won't Get Lost In</h2>
            <p>The simplest structure is usually the right one — guests are trying to make a decision quickly, not explore:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Rooms & Suites</li>
              <li>Amenities & Dining</li>
              <li>Location & Things to Do</li>
              <li>Offers</li>
              <li>Book Now — visible from every page, not buried in the menu</li>
            </ul>
          </div>

          <div id="linking">
            <h2 className="text-3xl font-bold text-white">Internal Linking, Done Simply</h2>
            <p>
              Internal links aren't just a technical SEO checkbox — they're how a guest actually moves from "interested" to "booking." Link your homepage to your highest-value pages, link room pages to relevant amenities, and link blog content back to the service or room it's actually relevant to. Descriptive link text ("book a garden-view room" instead of "click here") helps both the guest and how Google understands the page.
            </p>
          </div>

          <div id="schema">
            <h2 className="text-3xl font-bold text-white">Structured Data</h2>
            <p>Structured data doesn't change what a visitor sees — it changes what Google understands about the page. Worth having:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Hotel and Room schema with accurate property details</li>
              <li>LocalBusiness schema matching your NAP exactly</li>
              <li>Review and AggregateRating markup</li>
              <li>FAQ schema for common guest questions</li>
            </ul>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              A hotel website has one real job beyond looking good: getting someone from "browsing" to "booked" with as little friction as possible. Every design decision is worth testing against that, not against what looks impressive in a portfolio.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Increase Direct Hotel Bookings</h3>
            </Link>
            <Link href="/pillar/direct-bookings/website-conversion" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Website Conversion: In-Depth Guide</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want Your Website Audited?</h2>
          <p className="text-text-gray mb-6">Speed, structure, and conversion — we'll show you exactly where you're losing bookings.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
