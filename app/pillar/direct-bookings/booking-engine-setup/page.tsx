import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Channel Manager & Direct Bookings Setup | BookedUp Africa',
  description: 'How to mix a channel manager with direct bookings without conflicts — plus Google Hotel Search setup for small African properties.',
  keywords: 'channel manager and direct bookings mix, hotel booking engine, Zeevou, Beds24, Lodgify, channel manager hotel, Google Hotel Center XML feed',
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
                Zeevou is the channel manager we work with most for East African properties — it handles OTA sync, direct booking, and a full property management layer in one system. Beds24 and Lodgify are common alternatives worth considering, particularly for simpler setups. The right choice usually comes down to how many rooms/units you're managing and whether you need a full property management system or just booking + sync.
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
                <p className="text-text-gray text-sm">Google sends the guest to your booking engine to complete the reservation — most channel managers with a booking widget (Zeevou, Beds24, Lodgify) can connect to this, but it needs to be configured, not assumed.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Why This Placement Is Worth the Setup Effort</h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <p className="text-text-gray">Hotel Search traffic is high-intent — these are travelers actively comparing prices to book, not early-stage browsers. Unlike organic local SEO, which builds over months, a correctly configured Hotel Center feed can put you in front of ready-to-book guests as soon as it's approved.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Won't a Channel Manager and Direct Bookings Conflict?</h2>
            <p className="text-text-gray mb-6">
              This is the question that stops a lot of hotels from setting either one up properly — worried that pushing direct bookings will somehow break their OTA listings, or that a channel manager will just add another system to manage. It's the opposite: a channel manager is exactly what lets you run both at once safely.
            </p>
            <p className="text-text-gray mb-6">
              Here's the mix that actually works: your channel manager syncs your calendar across every OTA in real time. The moment a guest books directly through your own site, that room is automatically blocked everywhere else — no manual updates, no double bookings, no risk to your existing OTA relationships. Direct bookings and OTA bookings pull from the same pool of availability, managed by one system.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-orange-500 mb-3">The Order That Actually Works</h3>
              <ul className="text-text-gray text-sm space-y-2">
                <li>1. Get your channel manager syncing your existing OTA listings first — this alone stops double bookings</li>
                <li>2. Add a direct booking widget connected to the same calendar</li>
                <li>3. Only then start actively pushing guests toward booking direct — the safety net is already in place</li>
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
