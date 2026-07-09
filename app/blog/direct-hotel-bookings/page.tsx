import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Increase Direct Hotel Bookings: A Practical Guide | BookedUp Africa',
  description: 'Why guests default to OTAs, and the specific funnel and website fixes that shift bookings back to your own channel.',
  keywords: 'direct hotel bookings, booking funnel, OTA vs direct, conversion rate optimization hotels',
}

export default function DirectBookingsPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Direct Bookings</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Increase Direct Hotel Bookings: A Practical Guide</h1>
          <p className="text-xl text-text-gray mb-6">
            Every OTA booking costs 15-30% in commission. Here's what actually shifts that number in your favor.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#advantage" className="text-orange-500 hover:text-orange-400">The Direct Booking Advantage</Link></li>
            <li><Link href="#why-otas" className="text-orange-500 hover:text-orange-400">Why Guests Book OTAs Anyway</Link></li>
            <li>
              <Link href="#fixes" className="text-orange-500 hover:text-orange-400">What Actually Shifts Bookings Direct</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li>(i). Your booking funnel</li>
                <li>(ii). Your website</li>
                <li>(iii). Your booking engine</li>
              </ul>
            </li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="advantage">
            <h2 className="text-3xl font-bold text-white">The Direct Booking Advantage</h2>
            <p>
              Every booking through an OTA hands over 15-30% before you've spent a shilling on the guest's actual stay. A direct booking keeps that margin — plus the guest's contact details, their booking history, and the ability to talk to them directly next time, none of which an OTA gives you.
            </p>
          </div>

          <div id="why-otas">
            <h2 className="text-3xl font-bold text-white">Why Guests Book OTAs Anyway</h2>
            <p>It's rarely about price — it's about what the OTA offers that your own site often doesn't:</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 not-prose">
              <div>
                <h3 className="font-semibold text-orange-500">What Keeps Guests on the OTA</h3>
                <ul className="text-sm text-text-gray list-disc list-inside">
                  <li>Easy price comparison across properties</li>
                  <li>Reviews already aggregated in one place</li>
                  <li>A cancellation policy they already trust</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500">What You Actually Have Going For You</h3>
                <ul className="text-sm text-text-gray list-disc list-inside">
                  <li>The ability to offer something the OTA rate can't, without breaking parity</li>
                  <li>Direct communication before and during the stay</li>
                  <li>A personalized offer an algorithm can't replicate</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="fixes">
            <h2 className="text-3xl font-bold text-white">What Actually Shifts Bookings Direct</h2>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Your booking funnel</h3>
            <p>Each stage needs to do its specific job, not just exist:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Discovery:</strong> Local search visibility gets you found in the first place</li>
              <li><strong className="text-white">Consideration:</strong> Real photos and real reviews, not stock imagery</li>
              <li><strong className="text-white">Decision:</strong> Trust signals right where the guest is deciding, not buried in a footer</li>
              <li><strong className="text-white">Action:</strong> A checkout that doesn't add friction at the last step</li>
            </ul>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). Your website</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mobile-first, genuinely tested on a phone — not just responsive in theory</li>
              <li>Fast load times, since a slow site loses guests before they even see your rates</li>
              <li>A booking button visible on every page, not just the homepage</li>
            </ul>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). Your booking engine</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time availability — a "request to book" form loses guests to whoever confirms instantly</li>
              <li>Multiple payment options guests actually use locally</li>
              <li>Instant confirmation by email, not a manual follow-up</li>
            </ul>
            <p>
              The full technical setup — channel managers, Google Hotel Search, rate parity strategy — is covered in our{' '}
              <Link href="/pillar/direct-bookings" className="text-orange-500 hover:text-orange-400">Direct Bookings guide</Link>.
            </p>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              None of this means abandoning OTAs — they're still how most guests discover you the first time. It means not accepting that every guest who finds you has to book through a third party. The goal is a real, working alternative sitting right there when they're ready to book again.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Related Reading</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/pillar/direct-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-bold text-orange-500 mb-2">Direct Bookings: The Complete Guide →</h3>
                <p className="text-text-gray text-sm">OTA costs, booking engines, rate parity, and Google Hotel Search</p>
              </Link>
              <Link href="/blog/hotel-marketing-agency-vs-digital-marketing-agency" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-bold text-orange-500 mb-2">Hotel Agency vs. Digital Marketing Agency →</h3>
                <p className="text-text-gray text-sm">What actually separates a hospitality specialist from a generalist</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Shift Bookings Direct?</h2>
          <p className="text-text-gray mb-6">We'll audit your funnel and tell you exactly where guests are dropping off.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
