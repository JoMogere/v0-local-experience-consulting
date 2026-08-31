import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/hotel-local-seo-kenya',
  },
  title: 'Hotel Local SEO Kenya | BookedUp Africa',
  description: 'Dominate Google Maps and local search results so guests find and book your hotel directly. Complete Local SEO strategy for Kenyan hotels.',
  keywords: 'hotel local SEO Kenya, Google Maps ranking, hotel search visibility, direct bookings Kenya',
}

export default function HotelLocalSEOPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-[#F9F6F0]">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-flat text-sm uppercase tracking-[2px] mb-4">Demand Capture</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hotel Local SEO & Search Rankings
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Help your hotel appear first in local search results and Google Maps so travelers find and book you directly. This is where you win visibility.
          </p>
          <div className="flex gap-4">
            <Link href="#strategy" className="px-6 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] hover:opacity-90 rounded hover:opacity-90 transition-colors">
              See Strategy
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-orange-500 text-gold-flat rounded hover:bg-gold-flat/10 transition-colors">
              Get Audit
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-4 bg-navy-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Guests searching for hotels on Google Maps or local search aren&apos;t finding you. Instead, they discover your competitors first.
            </p>
            <p>
              Without strong local SEO, you&apos;re invisible to travelers actively searching in your area — which means they book elsewhere.
            </p>
            <p className="text-gold-flat font-semibold">
              Result: Lost direct bookings and revenue to better-ranking properties.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="strategy" className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Approach</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">1. Google Business Profile Optimization</h3>
              <p className="text-gray-300 mb-4">
                Your GBP is your most powerful local SEO tool. We optimize every element: categories, description, photos, posts, and Q&A to help you rank.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">2. Local Keyword Strategy</h3>
              <p className="text-gray-300 mb-4">
                We identify the search terms travelers use in your area—and build your strategy around them so you rank for searches that convert.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">3. Citation Building & Cleanup</h3>
              <p className="text-gray-300 mb-4">
                Consistent business listings (citations) across directories signal authority to Google. We build and maintain them for ranking power.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">4. Map Pack Visibility</h3>
              <p className="text-gray-300 mb-4">
                Map pack placement (top 3 results on Google Maps) drives the most qualified traffic. We position you to compete for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 md:py-32 px-4 bg-navy-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Success Looks Like</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-gold-flat mb-2">Top 3 Results</p>
              <p className="text-gray-300">Your hotel appears in the map pack for searches in your area.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-flat mb-2">Increased Inquiries</p>
              <p className="text-gray-300">More qualified guests finding and contacting you directly.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-flat mb-2">Direct Bookings</p>
              <p className="text-gray-300">Higher conversion of search traffic into confirmed reservations.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-flat mb-2">Sustainable Growth</p>
              <p className="text-gray-300">Long-term ranking stability that generates bookings month after month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Recommended With This</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hotel-growth-partnership-kenya" className="border border-border-flat rounded p-6 hover:border-gold-flat/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Growth Partnership Retainer</h3>
              <p className="text-gray-300">Ongoing management of Local SEO, reviews, and booking performance.</p>
            </Link>
            <Link href="/hotel-guest-experience-optimization-kenya" className="border border-border-flat rounded p-6 hover:border-gold-flat/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Guest Experience Optimization</h3>
              <p className="text-gray-300">Improve full guest journey to increase repeat bookings and reviews.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
