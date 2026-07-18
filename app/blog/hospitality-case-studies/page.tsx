import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/hospitality-case-studies',
  },
  title: 'Hospitality Case Studies | BookedUp Africa',
  description: 'Real, verified results from our work with hotels and resorts — no placeholder numbers, just what actually happened.',
  keywords: 'hotel case studies, hospitality marketing examples, hotel success stories',
}

export default function CaseStudiesHub() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Case Studies</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitality Case Studies: Real Results, Real Numbers</h1>
          <p className="text-xl text-text-gray mb-6">Every number here is verified and pulled straight from the source — no rounded-up estimates, no placeholders.</p>
        </header>

        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/case-study-elsamere-lodge" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors block">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Elsamere Lodge: Real Search Results →</h3>
              <p className="text-text-gray text-sm mb-4">124 free booking link clicks and 205 organic search clicks in the same period — zero commission, verified Google data</p>
              <div className="text-2xl font-bold text-green-400">124 clicks + 205 organic clicks</div>
            </Link>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-lg text-center">
            <p className="text-text-gray">More case studies from our work with hotels and resorts across Kenya are on the way.</p>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Own Result?</h2>
          <p className="text-text-gray mb-6">Let's build a strategy that produces numbers worth putting on this page.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>
    </article>
  )
}
