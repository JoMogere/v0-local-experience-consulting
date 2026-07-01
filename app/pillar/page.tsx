import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Pillars | Hospitality Marketing Guides | BookedUp Africa',
  description: 'Comprehensive content pillars on hospitality marketing with supporting cluster articles for maximum SEO authority.',
}

export default function PillarHubPage() {
  const pillars = [
    {
      title: 'Local SEO for Hotels',
      slug: 'local-seo-hotels',
      description: 'Master local search optimization and dominate Google Maps rankings to attract direct bookings from your local market.',
      icon: '📍',
      topics: ['Google Maps Ranking', 'NAP Consistency', 'Review Generation', 'Local Citations'],
    },
  ]

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Content Pillars</h1>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Comprehensive guides on hospitality marketing organized by topic. Each pillar covers a complete subject area with supporting cluster articles for maximum learning and SEO authority.
          </p>
        </header>

        {/* Pillar Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/pillar/${pillar.slug}`}
                className="group bg-white/5 border border-white/10 rounded-lg p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {pillar.title}
                </h2>
                <p className="text-text-gray mb-6">{pillar.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-orange-500 mb-3">Supporting Articles</h3>
                  <div className="flex flex-wrap gap-2">
                    {pillar.topics.map((topic) => (
                      <span key={topic} className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-orange-500 group-hover:text-orange-400 font-bold">
                  Read Pillar →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Architecture Explanation */}
        <section className="bg-white/5 border border-white/10 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Topical Authority Architecture</h2>
          <p className="text-text-gray mb-6">
            We've organized all our content using a pillar-cluster model designed for maximum SEO impact:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Pillar Pages</h3>
              <p className="text-text-gray text-sm">
                Comprehensive 4,000-6,000 word guides that cover an entire topic thoroughly. These are the authoritative, foundational content pieces.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Cluster Articles</h3>
              <p className="text-text-gray text-sm">
                Supporting 1,500-2,500 word articles that target specific search intents related to the pillar topic. Each links back to the pillar.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <h3 className="font-bold text-orange-500 mb-3">Internal Linking</h3>
              <p className="text-text-gray text-sm">
                Strategic semantic links connect all content, signaling to Google that you're an authority on the entire topic cluster.
              </p>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <p className="text-text-gray">
              This approach helps Google understand that you don't just have answers to individual questions—you're a comprehensive resource covering the entire topic area. That's what builds topical authority and drives competitive keywords.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">More Pillars Coming Soon</h2>
          <p className="text-text-gray mb-6">
            We're expanding this content hub with additional pillar pages on Google Business Profile, Hotel Website Strategy, Direct Bookings, Experiential Marketing, and more. Each will have the same depth and comprehensive cluster architecture.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors"
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
            name: 'Content Pillars - BookedUp Africa',
            description: 'Comprehensive guides on hospitality marketing organized by topical authority',
            url: 'https://bookedupafrica.com/pillar',
          }),
        }}
      />
    </main>
  )
}
