import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/how-to-choose-a-hotel-marketing-agency-kenya',
  },
  title: 'How to Choose a Hotel Marketing Agency in Kenya | BookedUp Africa',
  description: 'A real buyer\'s checklist for picking a hotel marketing agency in Kenya — the questions to ask, the red flags to watch for, and what actually matters.',
  keywords: 'best hotel marketing agency Kenya, how to choose hotel marketing agency, hotel marketing agency checklist Kenya',
}

export default function HowToChooseAgencyPost() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> /{' '}
          <Link href="/blog/direct-hotel-bookings" className="hover:text-orange-500">Direct Bookings</Link> / How to Choose an Agency
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            How to Choose a Hotel Marketing Agency in Kenya
          </h1>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-text-gray">
            <li><Link href="#trust-problem" className="hover:text-orange-500 transition-colors">The Problem With Most "Best Agency" Lists</Link></li>
            <li>
              <Link href="#what-to-look-for" className="hover:text-orange-500 transition-colors">What Actually Matters When Choosing</Link>
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li>(i). Hospitality-only, not "hotels plus everything else"</li>
                <li>(ii). Proof, not percentages</li>
                <li>(iii). They ask about your booking channels before pitching</li>
                <li>(iv). How they actually report back</li>
              </ul>
            </li>
            <li><Link href="#questions-to-ask" className="hover:text-orange-500 transition-colors">5 Questions to Ask on the First Call</Link></li>
            <li><Link href="#red-flags" className="hover:text-orange-500 transition-colors">Red Flags Worth Walking Away From</Link></li>
            <li><Link href="#final-thoughts" className="hover:text-orange-500 transition-colors">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="space-y-8 text-text-gray leading-relaxed">
          <section id="trust-problem">
            <h2 className="text-3xl font-bold text-white">The Problem With Most "Best Agency" Lists</h2>
            <p>
              Search "best hotel marketing agency Kenya" and most of what comes up is written by an agency, about itself, dressed up as an objective roundup. One name gets five detailed paragraphs and a #1 spot; six others get one generic paragraph each for the appearance of balance. It's a common tactic, and it makes genuinely comparing agencies harder than it should be.
            </p>
            <p>
              This isn't that. It's a straightforward list of what to actually check before you hire anyone — including us. If a claim here sounds convenient for our own positioning, question it exactly as hard as anyone else's.
            </p>
          </section>

          <section id="what-to-look-for">
            <h2 className="text-3xl font-bold text-white">What Actually Matters When Choosing</h2>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Hospitality-only, not "hotels plus everything else"</h3>
            <p>
              A lot of agencies list hotels alongside real estate, restaurants, retail, and salons. That's not disqualifying on its own, but it usually means hotel-specific knowledge — channel managers, rate parity, OTA commission structures — gets learned on your account, not brought in on day one. Ask directly: what share of your current clients are hotels or resorts?
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). Proof, not percentages</h3>
            <p>
              Watch for stats that could apply to literally any business — "150% traffic increase," "90% client satisfaction" — especially if the same numbers show up across an agency's real estate page and their hotel page. A real result names the property, the number, and the timeframe. See{' '}
              <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 hover:text-orange-400">
                our Elsamere Lodge result
              </Link>{' '}
              as an example of the level of specificity worth expecting.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). They ask about your booking channels before pitching</h3>
            <p>
              A good first call involves them asking what channel manager you're on, what your current direct-to-OTA booking split looks like, and where your Google Business Profile stands — before they start selling anything. If the first call is a generic pitch deck, that's a sign the strategy is generic too.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iv). How they actually report back</h3>
            <p>
              A monthly PDF tells you what already happened. Ask how issues get caught in between — a rate parity mismatch, a booking engine problem — and whether that requires waiting for the next report or gets flagged as it happens.
            </p>
          </section>

          <section id="questions-to-ask">
            <h2 className="text-3xl font-bold text-white">5 Questions to Ask on the First Call</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4">
              <p>1. "What share of your clients are hotels specifically, not general hospitality or travel?"</p>
              <p>2. "Can you show me a result — with the actual property named — not a percentage?"</p>
              <p>3. "What's your approach to rate parity when building direct booking incentives?"</p>
              <p>4. "How do you handle an urgent issue between scheduled reports?"</p>
              <p>5. "What channel manager or booking engine experience do you actually have?"</p>
            </div>
            <p className="mt-4">
              We wrote more on why the answers to these matter in{' '}
              <Link href="/blog/hotel-marketing-agency-vs-digital-marketing-agency" className="text-orange-500 hover:text-orange-400">
                Hotel Agency vs. Digital Marketing Agency
              </Link>
              .
            </p>
          </section>

          <section id="red-flags">
            <h2 className="text-3xl font-bold text-white">Red Flags Worth Walking Away From</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>The same "success" numbers appear word-for-word across different industry pages on their own site</li>
              <li>No answer, or a vague one, when asked for a hotel-specific case study</li>
              <li>They can't name a channel manager or booking engine they've actually configured</li>
              <li>Every "best agency" article that ranks them #1 was written by them</li>
            </ul>
          </section>

          <section id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              The right agency for your property is the one whose answers to these five questions are specific, not the one at the top of a list they wrote themselves. Ask, compare, and pick the one whose proof actually holds up when you look closely.
            </p>
          </section>
        </section>

        <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ask Us These Same Questions</h2>
          <p className="text-text-gray mb-6">
            We'd rather you compare us properly than take our word for it.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
          >
            Claim My Free Audit — No Obligation →
          </Link>
        </section>
      </div>
    </article>
  )
}
