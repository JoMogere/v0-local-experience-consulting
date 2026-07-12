import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rank Higher in Local Hotel Search | BookedUp Africa',
  description: 'A practical guide to local SEO for hotels — Google Maps rankings, review strategy, citations, and the search intent behind every booking.',
  keywords: 'local SEO for hotels, hotel local search, Google Maps rankings, Google Business Profile, hotel visibility',
  openGraph: {
    title: 'How to Rank Higher in Local Hotel Search: The Complete Guide',
    description: 'A practical guide to local SEO for hotels.',
    type: 'article',
  },
}

export default function LocalSEOPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> / Local SEO for Hotels
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Rank Higher in Local Hotel Search</h1>
          <p className="text-xl text-text-gray mb-6">
            Most hotels lose bookings before a guest ever reaches their website — because they never showed up in the search in the first place.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#what-is-local-seo" className="text-orange-500 hover:text-orange-400">What Is Local SEO, Actually?</Link></li>
            <li><Link href="#why-it-matters" className="text-orange-500 hover:text-orange-400">Why This Matters More Than Most Hotels Realize</Link></li>
            <li>
              <Link href="#three-factors" className="text-orange-500 hover:text-orange-400">What Google Actually Ranks You On</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li>(i). Relevance</li>
                <li>(ii). Distance</li>
                <li>(iii). Prominence</li>
              </ul>
            </li>
            <li>
              <Link href="#fix-list" className="text-orange-500 hover:text-orange-400">What Actually Moves the Needle</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li>(i). Your website</li>
                <li>(ii). Your content</li>
                <li>(iii). Your reviews</li>
                <li>(iv). Your schema markup</li>
              </ul>
            </li>
            <li><Link href="#measuring" className="text-orange-500 hover:text-orange-400">How to Know If It's Working</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="what-is-local-seo">
            <h2 className="text-3xl font-bold text-white">What Is Local SEO, Actually?</h2>
            <p>
              Local SEO is what gets your hotel to show up when someone searches "hotels in [your city]," a landmark nearby, or "hotels near me" while they're already traveling.
            </p>
            <p>
              It's not the same game as ranking a blog post nationally. It's a smaller, more specific fight — for people searching a specific place, ready to book something specific.
            </p>
          </div>

          <div id="why-it-matters">
            <h2 className="text-3xl font-bold text-white">Why This Matters More Than Most Hotels Realize</h2>
            <p>Guest booking behavior has shifted in a way a lot of properties haven't caught up to yet. Travelers now:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Search "hotels in [city]" and compare on Google Maps before touching a booking site</li>
              <li>Read reviews before they ever click through to your website</li>
              <li>Want to see the exact location relative to what they're actually there to do</li>
              <li>Frequently book directly from the search results screen, without visiting a website at all</li>
            </ul>
            <p>
              Every one of those is a high-intent moment — someone who's already decided to book something, deciding whether it's you. Local SEO is how you make sure it is.
            </p>
          </div>

          <div id="three-factors">
            <h2 className="text-3xl font-bold text-white">What Google Actually Ranks You On</h2>
            <p>Google uses three factors to decide who shows up first in local results. Understanding them tells you exactly where to spend your effort.</p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Relevance</h3>
            <p>
              How well your Google Business Profile, website, and citations match what the person actually searched. A luxury resort and a budget guesthouse don't compete for the same query — but only if your listing is categorized correctly.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). Distance</h3>
            <p>For a "near me" search, this one's simple: the closer you are, the more you're favored. Nothing to optimize here beyond having your location data accurate.</p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). Prominence</h3>
            <p>
              This is your authority — built from reviews, photos, website quality, citation consistency, and how much engagement your listing gets. It's the one factor that responds directly to sustained effort, which makes it the one worth focusing on.
            </p>
          </div>

          <div id="fix-list">
            <h2 className="text-3xl font-bold text-white">What Actually Moves the Needle</h2>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Your website</h3>
            <p>Your homepage should say where you are and what makes you worth booking within the first few seconds of loading. Beyond that:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>A dedicated page for your location and nearby landmarks</li>
              <li>Room pages that are actually optimized, not just photo galleries</li>
              <li>Fast load times — hotel traffic is majority mobile, and slow mobile pages lose bookings before they load</li>
            </ul>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). Your content</h3>
            <p>Content that answers what guests are actually trying to figure out before they book:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>What's actually nearby, and how far</li>
              <li>What the experience is like, in specifics — not adjectives</li>
              <li>What's happening seasonally that would change someone's decision to book now</li>
            </ul>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). Your reviews</h3>
            <p>
              Reviews are both a ranking factor and the first thing a guest actually reads. That means a consistent collection process, professional responses to every review — including the bad ones — and paying attention to how fast new reviews are coming in, not just the star average. Our{' '}
              <Link href="/pillar/local-seo-hotels/generate-hotel-reviews" className="text-orange-500 hover:text-orange-400">
                review generation guide
              </Link>{' '}
              covers this in full.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iv). Your schema markup</h3>
            <p>
              Structured data doesn't change what a guest sees — it changes what Google understands about your page. Hotel schema, LocalBusiness (your NAP — see our{' '}
              <Link href="/pillar/local-seo-hotels/nap-consistency" className="text-orange-500 hover:text-orange-400">
                NAP consistency guide
              </Link>
              ), review aggregate ratings, and FAQ markup are the ones worth prioritizing.
            </p>
          </div>

          <div id="measuring">
            <h2 className="text-3xl font-bold text-white">How to Know If It's Working</h2>
            <p>Track these, not vanity metrics:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Your actual Google Maps position for your target searches</li>
              <li>Direction requests and phone calls from your listing</li>
              <li>Direct bookings that originated from local search, not just total traffic</li>
              <li>Review velocity — new reviews per month, not just the total count</li>
            </ul>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              Here's what trips up most hotels: they treat local SEO as a one-time setup instead of an ongoing signal Google is constantly re-evaluating. A Google Business Profile you set up two years ago and haven't touched since is quietly losing ground to a competitor who updates theirs monthly.
            </p>
            <p>
              You don't need to do everything above at once. Start with your Business Profile category — it's the single most common reason a hotel doesn't show up at all, and it's a five-minute fix once you know to check it.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/pillar/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO for Hotels: In-Depth Guide</h3>
              <p className="text-sm text-text-gray mt-2">Google Maps ranking, NAP consistency, and review generation in full depth</p>
            </Link>
            <Link href="/blog/google-business-profile-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Google Business Profile for Hotels</h3>
              <p className="text-sm text-text-gray mt-2">Setup and optimization, category by category</p>
            </Link>
            <Link href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Direct Bookings Strategy</h3>
              <p className="text-sm text-text-gray mt-2">Turn local search traffic into confirmed reservations</p>
            </Link>
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
              <p className="text-sm text-text-gray mt-2">124 free booking link clicks from a correctly set up profile</p>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Show Up First?</h2>
          <p className="text-text-gray mb-6">Let's build a local SEO strategy that drives direct bookings to your hotel.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
