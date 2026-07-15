import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/hotel-guest-experience-optimization-kenya',
  },
  title: 'Guest Experience Optimization | Hotel CX | BookedUp Africa',
  description: 'Improve the full guest journey from discovery to post-stay engagement to increase repeat bookings, referrals, and five-star reviews.',
  keywords: 'guest experience optimization, hotel CX, repeat bookings, guest journey, hotel reviews Kenya',
}

export default function GuestExperienceOptimizationPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Trust & Experience Layer</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Guest Experience (CX) Optimization
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Improve the full guest journey from discovery to post-stay engagement to increase repeat bookings, referrals, and five-star reviews. This is how you build loyalty.
          </p>
          <div className="flex gap-4">
            <Link href="#journey" className="px-6 py-3 bg-orange-500 text-navy-deep rounded hover:bg-orange-600 transition-colors">
              See Framework
            </Link>
            <Link href="/contact" className="px-6 py-3 border border-orange-500 text-orange-500 rounded hover:bg-orange-500/10 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Opportunity</h2>
          <div className="space-y-4 text-lg text-gray-300">
            <p>
              One-time guests don&apos;t become repeat customers by accident. Every touchpoint in their journey—from discovery through post-stay—either builds loyalty or leaves them indifferent.
            </p>
            <p>
              Hotels that optimize the guest experience get repeat bookings, referrals, and consistently high reviews. These become your most profitable revenue streams.
            </p>
            <p className="text-orange-500 font-semibold">
              Result: Increased lifetime value, organic referrals, and competitive advantage through guest loyalty.
            </p>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section id="journey" className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Full Guest Journey</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">1. Discovery Phase</h3>
              <p className="text-gray-300 mb-4">
                How guests find you on search, reviews, and social. We optimize these touchpoints so your property stands out and attracts the right guests from the start.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">2. Booking Phase</h3>
              <p className="text-gray-300 mb-4">
                The website and booking experience. We audit friction points and optimize the booking flow so visitors convert into confirmed reservations.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">3. Pre-Arrival Phase</h3>
              <p className="text-gray-300 mb-4">
                Communications and expectations. We design a pre-arrival experience that builds anticipation, answers questions, and sets guests up for success.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">4. In-Stay Phase</h3>
              <p className="text-gray-300 mb-4">
                The actual guest experience. We help you optimize every touchpoint during their stay so they have exceptional, memorable experiences worth sharing.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">5. Post-Stay Phase</h3>
              <p className="text-gray-300 mb-4">
                Follow-up and engagement. We build a post-stay strategy that encourages reviews, maintains relationships, and drives repeat bookings and referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 md:py-32 px-4 bg-navy-deep/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Success Looks Like</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">Higher Reviews</p>
              <p className="text-gray-300">More guests leaving 5-star reviews that build your reputation and visibility.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">Repeat Guests</p>
              <p className="text-gray-300">Returning customers who book again and again, reducing acquisition costs.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">Organic Referrals</p>
              <p className="text-gray-300">Guests recommending you to friends and family—your best marketing channel.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500 mb-2">Loyal Community</p>
              <p className="text-gray-300">Building a base of guests who choose you first, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Build Your Complete System</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hotel-growth-partnership-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Growth Partnership Retainer</h3>
              <p className="text-gray-300">Ongoing management of all growth systems: SEO, reputation, booking optimization.</p>
            </Link>
            <Link href="/hotel-booking-leak-audit-kenya" className="border border-orange-500/20 rounded p-6 hover:border-orange-500/50 transition-all">
              <h3 className="text-xl font-bold mb-2">Direct Booking Audit</h3>
              <p className="text-gray-300">Identify booking leakage and recovery opportunities for higher direct revenue.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
