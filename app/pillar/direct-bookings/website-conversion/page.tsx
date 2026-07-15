import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar/direct-bookings/website-conversion',
  },
  title: 'Website Conversion for Hotels | BookedUp Africa',
  description: 'Practical fixes for hotel websites that get traffic but not bookings — booking flow, mobile checkout, and trust signals that convert.',
  keywords: 'hotel website conversion, hotel booking flow, hotel website optimization, direct booking conversion rate',
}

export default function WebsiteConversionPage() {
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
          <span>Website Conversion</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Turning Website Visitors Into Direct Bookings</h1>
          <p className="text-lg text-text-gray">If your site gets traffic but few direct bookings, the problem is almost always in the booking flow, not the traffic.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Where Bookings Actually Get Lost</h2>
            <p className="text-text-gray mb-6">
              Most hotel websites lose potential direct bookings at one of three points: the guest can't find the booking button quickly, the booking flow requires too many steps or a manual reply, or the mobile experience breaks down mid-checkout. Traffic isn't usually the bottleneck — the path from "interested" to "confirmed" is.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Key Point</h3>
              <p className="text-text-gray">Test your own booking flow on your phone, start to finish, at least once a month. Most conversion problems are found this way faster than through analytics.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Non-Negotiables</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">A Booking Button on Every Page</h3>
                <p className="text-text-gray text-sm">Not just the homepage — rooms, gallery, blog posts, everywhere. A guest reading a blog post about your property should never have to hunt for how to book it.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Real-Time Availability, Not "Request to Book"</h3>
                <p className="text-text-gray text-sm">A form that requires a manual reply loses guests to whichever OTA can confirm instantly. If your booking engine can't show live availability, that's the first thing to fix.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Mobile-First, Genuinely Tested</h3>
                <p className="text-text-gray text-sm">The majority of hotel searches and a large share of bookings now happen on mobile. If the date picker, payment form, or confirmation screen breaks on a phone, that's lost revenue you'll never see in analytics as a "problem" — it just looks like a guest who left.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Trust Signals Near the Booking Button</h3>
                <p className="text-text-gray text-sm">A review count, a cancellation policy, and clear contact info (WhatsApp works well in Kenya) placed right next to the booking button reduce the hesitation that sends guests back to a familiar OTA.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Quick Conversion Audit</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Booking button visible without scrolling on mobile</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Booking flow completed in 3 steps or fewer</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Confirmation is instant, not a "we'll get back to you"</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Reviews or ratings visible on the booking page</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Page loads in under 3 seconds on mobile data</span>
                </label>
              </div>
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
