import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar/experiential-marketing/local-partnerships',
  },
  title: 'Finding Local Partners for Guest Experiences | BookedUp Africa',
  description: 'A simple, friendly guide to finding and working with local guides, chefs, and artisans to create experiences guests love.',
  keywords: 'local partnerships hotels, guest experiences Kenya, hotel local guides',
}

export default function LocalPartnershipsPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar/experiential-marketing" className="hover:text-white transition-colors">Experiential Marketing</Link>
          <span className="mx-2">/</span>
          <span>Local Partnerships</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Finding Local Partners for Guest Experiences</h1>
          <p className="text-lg text-text-gray">You don't need a big budget to create something memorable — you need the right people nearby.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Start With What's Already Special</h2>
            <p className="text-text-gray mb-6">
              Before reaching out to anyone, take a walk around your own area with fresh eyes. What do locals do that visitors never get to see? A market only locals know about, a family that's been fishing the same waters for generations, a craft that's dying out but still practiced nearby — these are the details that make a stay unforgettable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Who Makes a Great Partner</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Guides Who Actually Know the Area</h3>
                <p className="text-text-gray text-sm">Not a script-reader — someone who grew up there, who has real stories, who gets genuinely excited talking about their home.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Cooks and Food Sellers</h3>
                <p className="text-text-gray text-sm">A market stall, a family kitchen, a fisherman who'll grill the day's catch — food experiences are consistently the ones guests talk about most.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Craftspeople and Artists</h3>
                <p className="text-text-gray text-sm">Weaving, carving, jewelry-making — watching something be made by hand, and maybe trying it themselves, is the kind of thing guests photograph and remember.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">How to Approach Someone</h2>
            <p className="text-text-gray mb-4">Most local partnerships start simply — a conversation, not a contract:</p>
            <ul className="text-text-gray space-y-2 ml-4">
              <li>• Explain what you're hoping to offer guests, and ask if they'd be interested</li>
              <li>• Agree on a fair price per guest or per group upfront</li>
              <li>• Try it with a small number of guests first before promoting it widely</li>
              <li>• Ask guests for honest feedback afterward, and adjust</li>
            </ul>
          </section>

          <section className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
            <h3 className="font-bold text-green-400 mb-3">A Nice Side Effect</h3>
            <p className="text-text-gray">
              Local partners usually have their own customers and followers too — and they'll often mention you to them. It's marketing that flows both ways, for free.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <a href="/pillar/experiential-marketing" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Experiential Marketing Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
