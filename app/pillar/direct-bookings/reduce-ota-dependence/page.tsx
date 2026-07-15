import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar/direct-bookings/reduce-ota-dependence',
  },
  title: 'How to Reduce OTA Dependence for Hotels | BookedUp Africa',
  description: 'A practical, step-by-step approach for hotels to reduce reliance on Booking.com and Expedia without losing bookings in the process.',
  keywords: 'reduce OTA dependence, cut Booking.com commission, hotel direct booking strategy, OTA vs direct bookings',
}

export default function ReduceOTADependencePage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar/direct-bookings" className="hover:text-white transition-colors">Direct Bookings</Link>
          <span className="mx-2">/</span>
          <span>Reduce OTA Dependence</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Reduce OTA Dependence Without Losing Bookings</h1>
          <p className="text-lg text-text-gray">A phased approach to shifting bookings toward your own channel while OTAs stay part of the mix.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Start With the Numbers, Not the Feeling</h2>
            <p className="text-text-gray mb-6">
              Before changing anything, pull three numbers from the last 90 days: total bookings by channel, average commission paid per OTA booking, and repeat-guest rate. Most properties are surprised by how much of their "OTA problem" is actually a handful of repeat guests who could easily be booking direct.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Key Point</h3>
              <p className="text-text-gray">Your repeat guests and referral guests are the easiest bookings to move direct — they already trust you. Start there before trying to win new OTA-discovered guests away from the platform.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">A 90-Day Phased Approach</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Weeks 1-2: Fix the Foundation</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Make sure "Book Now" is visible and instant on every page</li>
                  <li>• Set up or fix your channel manager sync</li>
                  <li>• Confirm rate parity is actually being honored (check your own OTA listing against your site)</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Weeks 3-6: Win Back Repeat Guests</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Email past guests with a direct-booking-only perk for their next stay</li>
                  <li>• Add a "Welcome Back" rate for returning guests who book direct</li>
                  <li>• Ask staff to mention direct booking at checkout for guests likely to return</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Weeks 7-12: Capture New Direct Demand</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Strengthen local SEO so new guests find you directly, not just via OTA search</li>
                  <li>• Launch the direct-booking perk publicly across social and your Google Business Profile</li>
                  <li>• Track direct bookings weekly and adjust the incentive if conversion is flat</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What Not to Do</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <ul className="text-text-gray text-sm space-y-2">
                <li>• Don't pull listings off OTAs — they're still your largest discovery channel for new guests</li>
                <li>• Don't undercut your OTA rate directly — it usually violates your contract and risks the listing</li>
                <li>• Don't run the shift as a one-time campaign — direct booking share builds over months, not weeks</li>
              </ul>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <a href="/pillar/direct-bookings" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Direct Bookings Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
