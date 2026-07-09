import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Google Business Profile for Hotels: The Complete Setup Guide | BookedUp Africa',
  description: 'How to set up and optimize your Google Business Profile so it actually drives bookings — categories, photos, posts, and the free booking link most hotels never activate.',
  keywords: 'Google Business Profile hotels, hotel GBP optimization, Google Posts, hotel categories, booking links',
}

export default function GBPPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Google Business Profile for Hotels</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Google Business Profile: The Complete Setup Guide</h1>
          <p className="text-xl text-text-gray mb-6">
            This is the single most-visited page about your hotel that you don't control the design of. Here's how to make sure it's working for you, not against you.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#setup" className="text-orange-500 hover:text-orange-400">Setup & Verification</Link></li>
            <li><Link href="#categories" className="text-orange-500 hover:text-orange-400">Why Your Category Matters More Than You Think</Link></li>
            <li><Link href="#photos" className="text-orange-500 hover:text-orange-400">Photos That Actually Increase Visibility</Link></li>
            <li><Link href="#posts" className="text-orange-500 hover:text-orange-400">Using Google Posts</Link></li>
            <li><Link href="#booking" className="text-orange-500 hover:text-orange-400">The Free Booking Link Most Hotels Ignore</Link></li>
            <li><Link href="#reviews" className="text-orange-500 hover:text-orange-400">Review Management</Link></li>
            <li><Link href="#insights" className="text-orange-500 hover:text-orange-400">Reading Your GBP Insights</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="setup">
            <h2 className="text-3xl font-bold text-white">Setup & Verification</h2>
            <p>If your profile isn't claimed and verified, nothing else on this page matters yet. Start here:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Claim your profile if it's currently unclaimed</li>
              <li>Complete verification (usually by mail, sometimes by phone)</li>
              <li>Double-check your name, address, and phone number are exactly accurate</li>
              <li>Write a complete description that actually says what makes you worth booking</li>
              <li>Fill in every relevant business attribute Google offers</li>
            </ul>
          </div>

          <div id="categories">
            <h2 className="text-3xl font-bold text-white">Why Your Category Matters More Than You Think</h2>
            <p>
              This is the single most common reason a hotel doesn't show up in local search — and it's a two-minute fix once you know to check it.
            </p>
            <p>
              Your primary category should be "Hotel," or the specific type that matches you (boutique, resort, guesthouse). Add 2-3 relevant secondary categories — "Restaurant" if you have one, for example — but don't stack in categories that don't genuinely apply. It dilutes relevance instead of adding it.
            </p>
          </div>

          <div id="photos">
            <h2 className="text-3xl font-bold text-white">Photos That Actually Increase Visibility</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Aim for 50+ high-quality photos as a baseline, not a ceiling</li>
              <li>Cover the exterior, lobby, every room type, and common areas — guests want to see what they're actually booking</li>
              <li>Update seasonally so the profile doesn't look abandoned</li>
              <li>Encourage guests and staff to add their own — third-party photos carry weight Google's algorithm notices</li>
            </ul>
          </div>

          <div id="posts">
            <h2 className="text-3xl font-bold text-white">Using Google Posts</h2>
            <p>Google Posts show up directly in search results and signal an active, maintained profile. Worth posting regularly about:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Offers and seasonal packages</li>
              <li>New amenities or renovations</li>
              <li>Local events happening near you</li>
            </ul>
          </div>

          <div id="booking">
            <h2 className="text-3xl font-bold text-white">The Free Booking Link Most Hotels Ignore</h2>
            <p>
              Google offers verified hotels a free "Book" button directly on their profile — no OTA commission, no middleman. Most hotels never activate it, either because they don't know it exists or their booking engine isn't connected properly to accept it.
            </p>
            <p>
              We saw exactly what this looks like in practice with Elsamere Lodge:{' '}
              <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 hover:text-orange-400">
                124 clicks on their free booking link in six months
              </Link>{' '}
              — zero commission, pure high-intent traffic. The setup steps are covered in our{' '}
              <Link href="/pillar/direct-bookings/booking-engine-setup" className="text-orange-500 hover:text-orange-400">
                booking engine setup guide
              </Link>
              .
            </p>
          </div>

          <div id="reviews">
            <h2 className="text-3xl font-bold text-white">Review Management</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to every review within 24-48 hours — including, especially, the negative ones</li>
              <li>Thank positive reviewers by name where it feels natural, not with a copy-pasted line</li>
              <li>Watch for patterns in feedback — three guests mentioning the same issue is a signal, not a coincidence</li>
            </ul>
          </div>

          <div id="insights">
            <h2 className="text-3xl font-bold text-white">Reading Your GBP Insights</h2>
            <p>Google gives you real data on how people find and interact with your profile. The ones worth actually watching:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Which search queries you're actually appearing for</li>
              <li>How many people click through to your website vs. call directly</li>
              <li>Direction requests — a real signal of local intent</li>
              <li>Booking link clicks, if you've got one connected</li>
            </ul>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              A Google Business Profile isn't a listing you set up once and leave. Google treats an actively updated profile as a trust signal, and a stale one as a reason to rank you lower — even if nothing about your actual property changed.
            </p>
            <p>
              If you only fix one thing from this guide today, check your category. It's the fastest possible win, and it's the one most hotels have quietly wrong.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/local-seo-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO for Hotels</h3>
            </Link>
            <Link href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Direct Bookings Strategy</h3>
            </Link>
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
            </Link>
            <Link href="/pillar/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO: In-Depth Guide</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want Your Profile Audited?</h2>
          <p className="text-text-gray mb-6">We'll check your category, booking link setup, and visibility gaps — free.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
