import Link from 'next/link'
import { Metadata } from 'next'
import { MapPin, TrendingUp, Sparkles } from 'lucide-react'

const PILLAR_ICONS: Record<string, typeof MapPin> = {
  'local-seo-hotels': MapPin,
  'direct-bookings': TrendingUp,
  'experiential-marketing': Sparkles,
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar',
  },
  title: 'Hospitality Marketing Guides | BookedUp Africa',
  description: 'In-depth, practical guides on hospitality marketing to help your hotel win more direct bookings — written for African hospitality.',
}

export default function PillarHubPage() {
  const pillars = [
    {
      title: 'Local SEO for Hotels',
      slug: 'local-seo-hotels',
      description: 'Master local search optimization and dominate Google Maps rankings to attract direct bookings from your local market.',
      topics: [
        { label: 'Google Maps Ranking', href: '/pillar/local-seo-hotels/google-maps-ranking' },
        { label: 'NAP Consistency', href: '/pillar/local-seo-hotels/nap-consistency' },
        { label: 'Review Generation', href: '/pillar/local-seo-hotels/generate-hotel-reviews' },
        { label: 'Local Citations', href: null },
      ],
    },
    {
      title: 'Direct Bookings',
      slug: 'direct-bookings',
      description: 'Reduce OTA commission costs and build a booking engine that turns website visitors into confirmed guests.',
      topics: [
        { label: 'Reduce OTA Dependence', href: '/pillar/direct-bookings/reduce-ota-dependence' },
        { label: 'Booking Engine Setup', href: '/pillar/direct-bookings/booking-engine-setup' },
        { label: 'Website Conversion', href: '/pillar/direct-bookings/website-conversion' },
        { label: 'Google Hotel Search', href: null },
      ],
    },
    {
      title: 'Experiential Marketing',
      slug: 'experiential-marketing',
      description: 'Turn your property into the stay guests can\'t stop talking about — real experiences, real stories, real word of mouth.',
      topics: [
        { label: 'Local Partnerships', href: '/pillar/experiential-marketing/local-partnerships' },
        { label: 'Turning Moments Into Content', href: '/pillar/experiential-marketing/turning-moments-into-content' },
        { label: 'Telling Your Story', href: '/pillar/experiential-marketing/telling-your-story' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hospitality Growth Guides</h1>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            In-depth guides on hospitality marketing, organized by topic. Each guide covers everything you need on the subject, with deeper dives linked throughout.
          </p>
        </header>

        {/* Pillar Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.slug}
                className="group bg-white/5 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all"
              >
                <Link href={`/pillar/${pillar.slug}`} className="block">
                  <div className="text-orange-500 mb-4">
                    {(() => {
                      const Icon = PILLAR_ICONS[pillar.slug]
                      return Icon ? <Icon size={40} strokeWidth={1.5} /> : null
                    })()}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {pillar.title}
                  </h2>
                  <p className="text-text-gray mb-6">{pillar.description}</p>
                </Link>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-orange-500 mb-3">Covered In This Guide</h3>
                  <div className="flex flex-wrap gap-2">
                    {pillar.topics.map((topic) =>
                      topic.href ? (
                        <Link
                          key={topic.label}
                          href={topic.href}
                          className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full hover:bg-orange-500/40 transition-colors"
                        >
                          {topic.label}
                        </Link>
                      ) : (
                        <span key={topic.label} className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                          {topic.label}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <Link href={`/pillar/${pillar.slug}`} className="text-orange-500 group-hover:text-orange-400 font-bold">
                  Read Guide →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why These Guides */}
        <section className="bg-white/5 border border-white/10 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">How These Guides Are Built</h2>
          <p className="text-text-gray mb-6">
            Every guide is organized so you can get a complete answer, then go deeper on the exact part that matters to you:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Complete Guides</h3>
              <p className="text-text-gray text-sm">
                Full, in-depth guides that cover an entire topic thoroughly — no need to piece it together from multiple sources.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Deep-Dive Articles</h3>
              <p className="text-text-gray text-sm">
                Focused articles that walk through specific questions in more detail, linked from the main guide.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Everything Connected</h3>
              <p className="text-text-gray text-sm">
                Related guides and articles link to each other, so you can follow a thread wherever it's useful.
              </p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <p className="text-text-gray">
              Whether you're just getting started or troubleshooting a specific problem, you'll find real, practical answers here — not surface-level tips.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">More Guides Coming Soon</h2>
          <p className="text-text-gray mb-6">
            We're expanding this hub with more guides on Google Business Profile and Hotel Website Strategy — each with the same depth and practical detail.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
          >
            Request a Topic
          </a>
        </section>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Hospitality Marketing Guides - BookedUp Africa',
            description: 'In-depth, practical guides on hospitality marketing for hotels and resorts',
            url: 'https://bookedupafrica.com/pillar',
          }),
        }}
      />
    </main>
  )
}
