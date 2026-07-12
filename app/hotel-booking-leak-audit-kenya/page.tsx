import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Direct Booking Audit | BookedUp Africa',
  description: 'Identify where bookings are leaking to OTAs. Get a clear action plan to improve visibility, conversions, and direct revenue for your hotel.',
  keywords: 'hotel OTA dependency, direct booking audit, booking leakage, hotel revenue management Kenya',
}

export default function DirectBookingAuditPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Revenue Recovery</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Direct Booking & Distribution Audit
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Identify where bookings are leaking to OTAs and get a clear action plan to improve visibility, conversions, and direct revenue. This is your diagnostic authority layer.
          </p>
          <div className="flex gap-4">
            <Link href="#audit" className="px-6 py-3 bg-orange-500 text-navy-deep rounded hover:bg-orange-600 transition-colors">
              See Audit Process
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-500/10 transition-colors">
              Request Audit
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Problem</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              Most hotels don&apos;t know where their bookings actually come from. You might be getting reservations from OTAs while your direct website sits empty.
            </p>
            <p>
              Every OTA booking costs you commission. Every direct booking keeps 100% of your revenue. But without visibility into your booking sources, you can&apos;t fix the leaks.
            </p>
            <p className="text-orange-500 font-semibold">
              Result: Hidden revenue leakage and unnecessary OTA dependency.
            </p>
          </div>
        </div>
      </section>

      {/* The Audit */}
      <section id="audit" className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Analyze</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Booking Source Distribution</h3>
              <p className="text-gray-300 mb-4">
                We map exactly where your bookings come from: direct website, OTAs, phone, email. This reveals your revenue distribution and leakage points.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">OTA Vs Direct Ratio</h3>
              <p className="text-gray-300 mb-4">
                We calculate your OTA dependency percentage and commission costs. For every booking on Booking.com, how many are you losing on your direct site?
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Website Conversion Performance</h3>
              <p className="text-gray-300 mb-4">
                We audit your website booking flow to find friction points that prevent direct conversions. Why are visitors finding you but not booking?
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Visibility Gap Analysis</h3>
              <p className="text-gray-300 mb-4">
                We identify where you&apos;re underperforming: local search, direct website traffic, review presence. Each gap is a revenue opportunity.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">Competitive Benchmarking</h3>
              <p className="text-gray-300 mb-4">
                We compare your distribution strategy to similar properties in your market. Are you over-dependent on OTAs compared to competitors?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Your Action Plan Includes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="font-bold mb-3 text-orange-500">Current State Assessment</h3>
              <p className="text-gray-300 text-sm">Complete breakdown of booking sources, OTA costs, and revenue leakage.</p>
            </div>
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="font-bold mb-3 text-orange-500">Visibility Roadmap</h3>
              <p className="text-gray-300 text-sm">Prioritized strategies to improve direct website visibility and reduce OTA dependency.</p>
            </div>
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="font-bold mb-3 text-orange-500">Conversion Optimization Plan</h3>
              <p className="text-gray-300 text-sm">Specific improvements to turn more website visitors into direct bookings.</p>
            </div>
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="font-bold mb-3 text-orange-500">Revenue Recovery Target</h3>
              <p className="text-gray-300 text-sm">Realistic projections of direct booking increases and OTA commission savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hotel-growth-partnership-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Growth Partnership Retainer</h3>
              <p className="text-gray-300">Implement the audit findings with ongoing management and optimization.</p>
            </Link>
            <Link href="/hotel-local-seo-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Hotel Local SEO</h3>
              <p className="text-gray-300">Improve visibility in local search to drive more direct traffic to your website.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
