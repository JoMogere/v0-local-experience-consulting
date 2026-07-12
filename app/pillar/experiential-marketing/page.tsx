import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experiential Marketing for Hotels | BookedUp Africa',
  description: 'How to turn your property into the stay guests can\'t stop talking about — real experiences, real stories, real word of mouth.',
  keywords: 'experiential marketing hotels, guest experience, hotel storytelling, Kenya hospitality marketing',
}

export default function ExperientialMarketingPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span>Experiential Marketing</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Turn Your Stay Into a Story Guests Can't Stop Sharing
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Nobody books a hotel because it has WiFi. They book it because of how it makes them feel — and what they'll get to tell their friends about afterward.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold mb-4">What's Inside</h2>
          <ul className="space-y-2 text-text-gray">
            <li><Link href="#why" className="hover:text-orange-500 transition-colors">1. Why "Nice Amenities" Doesn't Win Bookings Anymore</Link></li>
            <li><Link href="#what-guests-want" className="hover:text-orange-500 transition-colors">2. What Guests Actually Remember</Link></li>
            <li><Link href="#simple-ideas" className="hover:text-orange-500 transition-colors">3. Simple Experiences You Can Start This Month</Link></li>
            <li><Link href="#checklist" className="hover:text-orange-500 transition-colors">4. A Quick Checklist</Link></li>
            <li><Link href="#faqs" className="hover:text-orange-500 transition-colors">5. Common Questions</Link></li>
          </ul>
        </nav>

        <section className="prose-invert max-w-none space-y-12">
          <section id="why">
            <h2 className="text-4xl font-bold mb-6">Why "Nice Amenities" Doesn't Win Bookings Anymore</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Almost every property nearby can say "free breakfast, pool, WiFi." Those things matter, but they don't make anyone choose you over the place next door — because everyone's saying the same thing.
            </p>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              What actually makes someone pick you is a moment they can already picture themselves having. A sunset from a specific spot. A meal cooked by someone who's lived there their whole life. A walk with a guide who tells the stories the guidebooks don't have.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-8">
              <h3 className="font-bold text-blue-400 mb-3">The Simple Idea Behind All This</h3>
              <p className="text-text-gray">
                A guest who has a genuinely great time doesn't just leave a good review — they tell people about it, unprompted. That's the cheapest, most trusted marketing there is, and you can't buy it. You can only earn it.
              </p>
            </div>
          </section>

          <section id="what-guests-want">
            <h2 className="text-4xl font-bold mb-6">What Guests Actually Remember</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Ask yourself honestly: a year from now, what will a guest remember about their stay? It's almost never the thread count of the sheets. It's usually one of these:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>A person, not a place</strong> — the guide, the chef, the staff member who made them feel truly welcome</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>A moment they didn't expect</strong> — something that felt personal, not scripted</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>A taste of somewhere real</strong> — local food, local craft, local life — not a generic version of "luxury"</span>
              </li>
            </ul>
          </section>

          <section id="simple-ideas">
            <h2 className="text-4xl font-bold mb-6">Simple Experiences You Can Start This Month</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              None of this needs a big budget. It needs to be specific to you — something a copy-paste competitor can't just replicate overnight.
            </p>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Partner With Someone Local</h3>
                <p className="text-text-gray text-sm">A nearby farm, a craftsperson, a fishing boat, a market stall owner. They usually cost less than building something in-house, and they'll happily tell their own customers about you too.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Let Food Do the Talking</h3>
                <p className="text-text-gray text-sm">A cooking session, a market walk, a meal with a story behind it — food experiences get shared and talked about more than almost anything else you can offer.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Share the People, Not Just the Place</h3>
                <p className="text-text-gray text-sm">Guests connect with people, not buildings. Let your guide, your chef, your host be part of the story you tell — online and in person.</p>
              </div>
            </div>
          </section>

          <section id="checklist">
            <h2 className="text-4xl font-bold mb-6">A Quick Checklist</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">One experience guests can only get at your property, not everywhere</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">At least one local partner (guide, chef, artisan) built into the stay</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Real photos and videos of real moments, not stock imagery</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">A simple way to capture guest reactions in the moment</span>
                </label>
              </div>
            </div>
          </section>

          <section id="faqs">
            <h2 className="text-4xl font-bold mb-6">Common Questions</h2>
            <div className="space-y-6">
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  Isn't this expensive to set up?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  Not usually. Local partnerships often cost less than in-house alternatives, since the local business already has the skills and equipment. The real cost is time spent finding the right partner, not money.
                </p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  What if my property doesn't have anything special nearby?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  Almost every location has something — it's just not always obvious from the inside. A market, a craft, a view, a family recipe passed down for generations. Sometimes it takes an outside perspective to spot it.
                </p>
              </details>
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  How does this connect to getting more bookings?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  Guests who have a real experience talk about it — in reviews, on social media, to friends planning their own trip. That word of mouth feeds directly into your local search visibility and your direct bookings, so this isn't separate from the rest of your marketing — it's what makes the rest of it work harder.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Give Guests a Story Worth Telling?</h2>
            <p className="text-text-gray mb-6">
              We'll help you find the experience only your property can offer — and turn it into the reason guests choose you.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
            >
              Claim Your Free Growth Audit — No Obligation
            </a>
          </section>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: "Turn Your Stay Into a Story Guests Can't Stop Sharing",
              description: 'How to turn your property into the stay guests can\'t stop talking about.',
              author: { '@type': 'Organization', name: 'BookedUp Africa' },
              datePublished: new Date().toISOString(),
            }),
          }}
        />
      </article>
    </main>
  )
}
