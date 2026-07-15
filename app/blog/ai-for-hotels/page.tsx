import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/ai-for-hotels',
  },
  title: 'AI for Hotels: Where It Actually Helps | BookedUp Africa',
  description: 'A practical look at where AI genuinely helps hotel marketing and operations, and where it quietly makes guest experience worse.',
  keywords: 'AI hotels, chatGPT hotels, AI marketing, hotel automation',
}

export default function AIPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / AI for Hotels</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI for Hotels: Where It Actually Helps</h1>
          <p className="text-xl text-text-gray mb-6">
            Every hotel is being told to "use AI." Almost nobody's being told where it actually pays off and where it quietly costs you guests.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li>
              <Link href="#where-it-helps" className="text-orange-500 hover:text-orange-400">Where AI Genuinely Helps</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li>(i). Content that scales</li>
                <li>(ii). First-response guest communication</li>
                <li>(iii). Research and analysis</li>
              </ul>
            </li>
            <li><Link href="#where-it-fails" className="text-orange-500 hover:text-orange-400">Where It Quietly Fails</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="where-it-helps">
            <h2 className="text-3xl font-bold text-white">Where AI Genuinely Helps</h2>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Content that scales</h3>
            <p>
              First drafts of room descriptions, meta descriptions, and social captions — the repetitive content that doesn't need a human voice for every single instance. The time saved here is real, as long as a human still edits before it goes live.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). First-response guest communication</h3>
            <p>
              A chatbot answering "what time is checkout" at 2am is genuinely useful — it's instant, it's accurate, and it frees your actual staff for the questions that need a real person. The key word is "first-response": it should hand off to a human the moment a question gets specific or emotional.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). Research and analysis</h3>
            <p>
              Keyword research, competitor monitoring, and spotting patterns in review sentiment across hundreds of reviews — this is where AI's speed advantage is a genuine, unambiguous win. It's analysis work, not guest-facing work.
            </p>
          </div>

          <div id="where-it-fails">
            <h2 className="text-3xl font-bold text-white">Where It Quietly Fails</h2>
            <p>
              Unedited AI content posted directly to your site or socials is easy to spot, and guests notice — generic phrasing, oddly confident claims, a voice that doesn't sound like anyone who actually works at your property. It undermines the exact trust you're trying to build.
            </p>
            <p>
              The same applies to guest communication that goes past a basic question. A guest with a real complaint or a special request wants to know a person is handling it — routing that to a bot, or to an unedited AI-generated response, reads as exactly what it is.
            </p>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              The useful line isn't "AI vs. no AI" — it's "does this replace a human touchpoint a guest actually values, or does it handle something a guest never wanted to deal with a human for in the first place." Checkout time questions: replace it. A genuine complaint: don't.
            </p>
            <p>
              Used that way, AI gives your team back time for the parts of hospitality that actually require a person — not a shortcut around them.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/content-marketing-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Content Marketing for Hotels</h3>
            </Link>
            <Link href="/pillar/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO: In-Depth Guide</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p className="text-text-gray mb-6">We'll help you figure out where automation actually helps your property, and where it doesn't.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
