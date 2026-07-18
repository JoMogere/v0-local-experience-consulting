import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/case-study-silent-palms-villa',
  },
  title: 'Silent Palms Villa Case Study | BookedUp Africa',
  description: 'What early-stage local SEO actually looks like — real Search Console numbers from Silent Palms Villa, month by month, not a highlight reel.',
  keywords: 'Silent Palms Villa, hotel SEO Kenya, local SEO case study, early-stage SEO results',
}

export default function SilentPalmsCaseStudy() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> /{' '}
          <Link href="/blog/hospitality-case-studies" className="hover:text-orange-500">Case Studies</Link> / Silent Palms Villa
        </div>

        <header className="mb-12">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Case Study — In Progress</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Silent Palms Villa: What Early-Stage Local SEO Actually Looks Like
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Not every case study is a highlight reel. This one shows the honest, unglamorous numbers from an active retainer in its earlier months — because knowing what "early" really looks like matters if you're deciding whether to start.
          </p>
        </header>

        <section className="mb-12">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/case-studies/silent-palms-search-console.png"
              alt="Google Search Console performance report for Silent Palms Villa showing 14 clicks, 688 impressions, 2% average CTR, and average position 9 over a three-month period from April to July 2026."
              width={1200}
              height={490}
              className="w-full h-auto"
            />
          </div>
          <p className="text-text-gray text-sm mt-3 text-center">
            Silent Palms Villa's Search Console performance report, Apr 2026 – Jul 2026.
          </p>
        </section>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">The Real Numbers</h2>
            <p className="text-text-gray mb-6">
              Over this three-month window, Silent Palms Villa recorded <strong className="text-white">14 clicks</strong> and <strong className="text-white">688 impressions</strong> in organic search, with a <strong className="text-white">2% click-through rate</strong> and an <strong className="text-white">average position of 9</strong>. That's page one, but the bottom of it — visible, not yet winning the click most of the time.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Why We're Publishing This Anyway</h3>
              <p className="text-text-gray">
                It would be easy to only ever publish the strong numbers. But if you're a property owner trying to judge what realistic progress looks like in the early months of local SEO work, a small, honest number is more useful to you than another agency's inflated one.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What Position 9 Actually Means</h2>
            <p className="text-text-gray">
              Position 9 means Silent Palms is appearing on the first page of results, just not high enough yet to win most of the clicks — the difference between position 9 and position 3 is usually the difference between a handful of impressions turning into visits and a steady stream of them. Moving up that stretch of page one is exactly the work covered in our <Link href="/pillar/local-seo-hotels" className="text-orange-500 hover:text-orange-400">Local SEO guide</Link> — category accuracy, review velocity, and consistent citations compounding over months, not days.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What Progress Looks Like From Here</h2>
            <p className="text-text-gray">
              This is genuinely what the early stage of local SEO looks like for most independent properties — small numbers that move slowly at first, then compound. For a sense of where consistent work over more months can lead, our <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 hover:text-orange-400">Elsamere Lodge case study</Link> shows the same kind of Search Console data further along that same curve.
            </p>
          </section>

          <section className="mt-16 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-bold mb-6">More Articles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
                <p className="text-sm text-text-gray mt-2">124 free booking link clicks and 205 organic clicks, further along the same journey</p>
              </Link>
              <Link href="/blog/local-seo-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-semibold text-orange-500">Rank Higher in Local Hotel Search</h3>
                <p className="text-sm text-text-gray mt-2">The full guide to local SEO for hotels</p>
              </Link>
              <Link href="/blog/how-to-choose-a-hotel-marketing-agency-kenya" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-semibold text-orange-500">How to Choose a Hotel Marketing Agency</h3>
                <p className="text-sm text-text-gray mt-2">A real buyer's checklist before you sign anything</p>
              </Link>
              <Link href="/blog" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
                <h3 className="font-semibold text-orange-500">Browse All Guides →</h3>
                <p className="text-sm text-text-gray mt-2">Local SEO, Direct Bookings, Experiential Marketing, and more</p>
              </Link>
            </div>
          </section>

          <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Starting From Zero Too?</h2>
            <p className="text-text-gray mb-6">
              We'll give you an honest read on where you actually stand — not an inflated pitch.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
            >
              Claim My Free Strategy Call →
            </a>
          </section>
        </section>
      </div>
    </article>
  )
}
