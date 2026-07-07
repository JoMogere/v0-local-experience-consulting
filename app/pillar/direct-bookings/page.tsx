import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Direct Bookings for Hotels: The Complete Guide to Cutting OTA Commissions | BookedUp Africa',
  description: 'A practical guide for African hotels to reduce OTA dependence, set up a booking engine that actually converts, and win back the bookings you\'re paying 15-25% commission on.',
  keywords: 'direct hotel bookings, reduce OTA commission, hotel booking engine Kenya, cut Booking.com commission, direct booking strategy Africa',
  openGraph: {
    title: 'Direct Bookings for Hotels: The Complete Guide',
    description: 'How African hotels reduce OTA dependence and win more bookings straight from their own website.',
    type: 'article',
  },
}

export default function DirectBookingsPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span>Direct Bookings</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Direct Bookings for Hotels: The Complete Guide to Cutting OTA Commissions
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Every booking that comes through Booking.com or Expedia costs you 15-25% in commission. This guide covers exactly how to build a direct booking channel that earns guests back — from parity strategy to the booking engine itself.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-text-gray">
            <li><Link href="#the-cost" className="hover:text-orange-500 transition-colors">1. The Real Cost of OTA Dependence</Link></li>
            <li><Link href="#why-guests-use-otas" className="hover:text-orange-500 transition-colors">2. Why Guests Book Through OTAs Anyway</Link></li>
            <li><Link href="#booking-engine" className="hover:text-orange-500 transition-colors">3. Choosing a Booking Engine</Link></li>
            <li><Link href="#parity" className="hover:text-orange-500 transition-colors">4. Rate Parity Without Losing Money</Link></li>
            <li><Link href="#incentives" className="hover:text-orange-500 transition-colors">5. Direct Booking Incentives That Work</Link></li>
            <li><Link href="#checklist" className="hover:text-orange-500 transition-colors">6. Direct Booking Checklist</Link></li>
            <li><Link href="#faqs" className="hover:text-orange-500 transition-colors">7. Frequently Asked Questions</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <section className="prose-invert max-w-none space-y-12">

          {/* Section 1 */}
          <section id="the-cost">
            <h2 className="text-4xl font-bold mb-6">The Real Cost of OTA Dependence</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Booking.com and Expedia typically charge 15-25% commission per booking. On a KES 15,000/night room, that's KES 2,250-3,750 gone before you've paid for a single guest amenity. Book the same room directly and that entire margin stays with the property.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-8">
              <h3 className="font-bold text-blue-400 mb-3">Key Point</h3>
              <p className="text-text-gray">
                OTAs aren't the enemy — they're a discovery channel. The problem is when a property has no real alternative, so every guest who finds you on Google still books through the OTA out of habit. The fix isn't leaving OTAs; it's giving guests a reason to book direct once they've found you.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="why-guests-use-otas">
            <h2 className="text-4xl font-bold mb-6">Why Guests Book Through OTAs Anyway</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Most hotels lose direct bookings for reasons that have nothing to do with price:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>No visible "Book Now" path</strong> — the website exists, but booking still means a phone call or WhatsApp message</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>Trust</strong> — OTAs have reviews, cancellation policies, and payment protection guests already recognize</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>No price incentive to switch</strong> — if the direct rate is identical to Booking.com, there's no reason to leave a platform they already trust</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>Slow or broken booking flow</strong> — multi-step forms, no real-time availability, or a redirect to an email inquiry instead of instant confirmation</span>
              </li>
            </ul>
            <p className="text-lg text-text-gray leading-relaxed">
              Fix the visible path and the incentive, and a meaningful share of guests who already found you through Google or social will book direct without you losing a single OTA listing.
            </p>
          </section>

          {/* Section 3 */}
          <section id="booking-engine">
            <h2 className="text-4xl font-bold mb-6">Choosing a Booking Engine</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              For independent hotels and villas in Kenya, the booking engine decision usually comes down to a channel manager with a built-in booking widget (like Beds24 or Lodgify) versus a standalone booking button. Which one makes sense depends on how many channels you're already managing:
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">If you list on 2+ OTAs already</h3>
                <p className="text-text-gray">A channel manager (Beds24, Lodgify) syncs your calendar across every platform automatically, so a direct booking blocks the room everywhere else in real time. Without this, double bookings are just a matter of time.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">If you want to appear in Google Hotel Search</h3>
                <p className="text-text-gray">This requires a Google Hotel Center price feed (an XML feed of your live rates and availability) connected to a booking engine that can accept the booking. It's a separate integration from your channel manager, and it's one of the highest-intent placements available — those are travelers actively comparing prices to book, not just browsing.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">If you're a single small property</h3>
                <p className="text-text-gray">A lightweight booking widget embedded directly on your website may be enough, provided it shows real-time availability and confirms instantly — a "request to book" form that requires a manual reply defeats the purpose.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="parity">
            <h2 className="text-4xl font-bold mb-6">Rate Parity Without Losing Money</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Most OTA contracts include a rate parity clause — you can't list a lower price on your own website than on their platform. That doesn't mean you can't win the booking. It means the advantage has to come from somewhere other than a lower headline rate:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">Free breakfast, late checkout, or a welcome drink included only for direct bookings</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">A best-price guarantee, so guests don't need to price-compare elsewhere</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray">Flexible or free cancellation direct, where the OTA rate is non-refundable</span>
              </li>
            </ul>
            <p className="text-lg text-text-gray leading-relaxed">
              None of this requires undercutting the OTA rate — it requires making the direct booking clearly worth more for the same price.
            </p>
          </section>

          {/* Section 5 */}
          <section id="incentives">
            <h2 className="text-4xl font-bold mb-6">Direct Booking Incentives That Work</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <ul className="space-y-3 text-text-gray">
                <li>• A visible "Book Direct & Save" or "Book Direct, Get [X]" banner on every page, not just the homepage</li>
                <li>• An email to past OTA guests after checkout, thanking them and offering a direct-booking discount for their next stay</li>
                <li>• A dedicated "Direct Booking Perks" section on the room/rates page, listed clearly against the OTA price</li>
                <li>• WhatsApp as a fallback for guests who want to ask questions before booking — but the booking button should always come first</li>
              </ul>
            </div>
          </section>

          {/* Checklist */}
          <section id="checklist">
            <h2 className="text-4xl font-bold mb-6">Direct Booking Checklist</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">"Book Now" visible on every page, not buried in a menu</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Real-time availability shown — no "request to book" forms</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Channel manager syncing calendar across all OTA listings</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">At least one direct-booking-only perk clearly advertised</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Mobile checkout tested end-to-end (most travelers book on their phone)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Post-stay email sequence inviting past OTA guests to book direct next time</span>
                </label>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  Will pushing direct bookings hurt my OTA ranking?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  No — OTA rankings are driven by conversion rate, reviews, and response time on their platform, not by how many bookings you get elsewhere. You can grow both channels at once.
                </p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  Do I need a channel manager if I only list on one OTA?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  It's less urgent, but still worth it once you add a direct booking engine — you now have two calendars to keep in sync, and a missed update is a double booking.
                </p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  What share of bookings should realistically go direct?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  It depends heavily on your local search visibility and repeat guest base, but a well-run direct channel with strong local SEO can realistically shift 20-40% of bookings away from OTAs over time.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Cut Your OTA Commission Bill?</h2>
            <p className="text-text-gray mb-6">
              We help African hotels set up booking engines, channel managers, and direct-booking strategy end to end — including Google Hotel Search integration.
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

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Direct Bookings for Hotels: The Complete Guide to Cutting OTA Commissions',
              description: 'How African hotels reduce OTA dependence and win more bookings straight from their own website.',
              author: {
                '@type': 'Organization',
                name: 'BookedUp Africa',
              },
              datePublished: new Date().toISOString(),
            }),
          }}
        />
      </article>
    </main>
  )
}
