import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hotel Growth & Direct Booking System Kenya | BookedUp Africa',
  description: 'Long-term hotel growth partnership managing Local SEO, reviews, and booking performance to deliver consistent direct booking revenue.',
  keywords: 'hotel growth Kenya, direct bookings, local SEO, hotel revenue, booking management',
}

export default function GrowthPartnershipPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Growth System</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hotel Growth & Direct Booking System
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            A long-term partnership managing your Local SEO, reputation, and booking performance to increase direct revenue consistently. This is your hotel growth engine.
          </p>
          <div className="flex gap-4">
            <Link href="#strategy" className="px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
              Learn More
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-500/10 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="strategy" className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What&apos;s Included</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Hotel Local SEO</h3>
              <p className="text-gray-300 mb-4">Dominate Google Maps and local search results so guests find and book you directly.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Google Business Profile optimization</li>
                <li>• Local keyword strategy</li>
                <li>• Citation building & cleanup</li>
                <li>• Map pack visibility</li>
              </ul>
            </div>

            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Reputation Management</h3>
              <p className="text-gray-300 mb-4">Build trust through reviews, responses, and strong online reputation across platforms.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Review generation campaigns</li>
                <li>• Professional response strategy</li>
                <li>• Sentiment monitoring</li>
                <li>• Multi-platform management</li>
              </ul>
            </div>

            <div className="border border-orange-500/20 rounded p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Direct Booking Optimization</h3>
              <p className="text-gray-300 mb-4">Optimize your website and booking flow to convert search traffic into confirmed stays.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Website UX audit</li>
                <li>• Booking flow optimization</li>
                <li>• Conversion rate improvement</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Complete Your System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hotel-booking-leak-audit-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Direct Booking & Distribution Audit</h3>
              <p className="text-gray-300">Identify where bookings are leaking to OTAs and get a clear action plan to recover direct revenue.</p>
            </Link>
            <Link href="/hotel-guest-experience-optimization-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Guest Experience Optimization</h3>
              <p className="text-gray-300">Improve full guest journey to increase repeat bookings, referrals, and five-star reviews.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
