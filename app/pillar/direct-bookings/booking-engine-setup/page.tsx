import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hotel Booking Engine Setup: Channel Managers & Google Hotel Search | BookedUp Africa',
  description: 'How to choose and set up a booking engine for an independent hotel — channel manager options, Google Hotel Search feeds, and what actually matters for small African properties.',
  keywords: 'hotel booking engine, Beds24, Lodgify, channel manager hotel, Google Hotel Center XML feed, Google Hotel Search setup',
}

export default function BookingEngineSetupPage() {
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
          <span>Booking Engine Setup</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Booking Engine Setup: Channel Managers & Google Hotel Search</h1>
          <p className="text-lg text-text-gray">What actually matters when setting up a direct booking engine for a small or independent property.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Channel Manager vs. Standalone Booking Button</h2>
            <p className="text-text-gray mb-6">
              A standalone booking button (just a widget on your site) is fine if you're not listed anywhere else. The moment you're on even one OTA, a channel manager becomes worth it — it syncs your calendar in real time so a direct booking automatically blocks that room everywhere else. Without it, you're manually updating availability across platforms, and the first missed update is a double booking.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Key Point</h3>
              <p className="text-text-gray">
                Beds24 and Lodgify are the two most common channel manager choices for independent East African properties — both handle OTA sync and include a direct booking widget. The right choice usually comes down to how many rooms/units you're managing and whether you need a full property management system or just booking + sync.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Getting Into Google Hotel Search</h2>
            <p className="text-text-gray mb-6">
              Google Hotel Search — the price-comparison box that appears when someone searches for a hotel directly — is separate from your regular Google Business Profile listing. To appear there with your own rates, you need:
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">1. A Verified Google Business Profile</h3>
                <p className="text-text-gray text-sm">Your property needs to be claimed and verified in Google Business Profile first — Hotel Search eligibility is tied to this, and a disconnect between the two is one of the most common reasons a hotel doesn't show up.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">2. A Google Hotel Center Price Feed</h3>
                <p className="text-text-gray text-sm">An XML feed of your live rates and availability, submitted through Google Hotel Center. This is what lets Google show your actual price next to Booking.com and Expedia's.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">3. A Booking Engine That Can Take the Booking</h3>
                <p className="text-text-gray text-sm">Google sends the guest to your booking engine to complete the reservation — most channel managers with a booking widget (Beds24, Lodgify) can connect to this, but it needs to be configured, not assumed.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why This Placement Is Worth the Setup Effort</h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <p className="text-text-gray">Hotel Search traffic is high-intent — these are travelers actively comparing prices to book, not early-stage browsers. Unlike organic local SEO, which builds over months, a correctly configured Hotel Center feed can put you in front of ready-to-book guests as soon as it's approved.</p>
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
