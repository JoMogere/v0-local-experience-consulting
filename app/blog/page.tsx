import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Building2, Sparkles, FileText, TrendingUp, Globe, Bot, BarChart3 } from 'lucide-react'

const CATEGORY_ICONS: Record<string, typeof MapPin> = {
  'local-seo-for-hotels': MapPin,
  'google-business-profile-hotels': Building2,
  'experiential-marketing-hotels': Sparkles,
  'content-marketing-hotels': FileText,
  'direct-hotel-bookings': TrendingUp,
  'hotel-website-design-seo': Globe,
  'ai-for-hotels': Bot,
  'hospitality-case-studies': BarChart3,
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Hotel Marketing Blog | BookedUp Africa',
  description: 'Comprehensive guides on local SEO, direct bookings, content marketing, and experiential marketing for African hotels.',
  keywords: 'hotel marketing blog, hotel SEO, direct bookings, hospitality marketing, local search',
  openGraph: {
    title: 'Hotel Marketing Blog | BookedUp Africa',
    description: 'Expert guides on growing hotel bookings and revenue.',
    type: 'website',
  },
}

export default function BlogPage() {
  const pillars = [
    {
      title: 'Local SEO for Hotels',
      description: 'Master local search optimization and dominate Google Maps rankings to attract direct bookings.',
      link: '/blog/local-seo-for-hotels',
      articles: 11,
    },
    {
      title: 'Google Business Profile',
      description: 'Optimize your GBP for maximum hotel visibility, reviews, and direct bookings from local search.',
      link: '/blog/google-business-profile-hotels',
      articles: 9,
    },
    {
      title: 'Experiential Marketing',
      description: 'Create memorable guest experiences that drive bookings, loyalty, and word-of-mouth marketing.',
      link: '/blog/experiential-marketing-hotels',
      articles: 8,
    },
    {
      title: 'Content Marketing',
      description: 'Build authority and drive bookings through strategic, guest-focused content.',
      link: '/blog/content-marketing-hotels',
      articles: 9,
    },
    {
      title: 'Direct Bookings',
      description: 'Reduce OTA dependence and increase direct bookings through optimized websites and conversion strategies.',
      link: '/blog/direct-hotel-bookings',
      articles: 8,
    },
    {
      title: 'Hotel Website Design & SEO',
      description: 'Create a website that ranks in search engines and converts visitors into guests.',
      link: '/blog/hotel-website-design-seo',
      articles: 8,
    },
    {
      title: 'AI for Hotels',
      description: 'Leverage AI to automate operations, improve marketing, and deliver better guest experiences.',
      link: '/blog/ai-for-hotels',
      articles: 7,
    },
    {
      title: 'Case Studies',
      description: 'Real examples of how hotels increased bookings and revenue through strategic optimization.',
      link: '/blog/hospitality-case-studies',
      articles: 6,
    },
  ]

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Hotel Marketing & Growth Strategy
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Comprehensive guides on local SEO, direct bookings, content marketing, and experiential marketing for African hotels. Learn the strategies that drive real bookings and revenue.
          </p>
        </header>

        {/* Pillar Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">In-Depth Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <Link
                key={idx}
                href={pillar.link}
                className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-orange-500 flex-shrink-0">
                    {(() => {
                      const slug = pillar.link.split('/').pop() || ''
                      const Icon = CATEGORY_ICONS[slug]
                      return Icon ? <Icon size={32} strokeWidth={1.5} /> : null
                    })()}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-500 group-hover:text-orange-400 transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    <div className="text-xs text-text-gray/70 flex items-center justify-between">
                      <span>{pillar.articles} articles</span>
                      <span className="text-orange-500 font-semibold">Read →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why These Guides */}
        <section className="mb-16 bg-white/5 border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Why Hoteliers Read These Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-orange-500 mb-4">Built From Real Work</h3>
              <p className="text-text-gray mb-4">
                Every guide comes from hands-on work managing marketing for real East African hotels and resorts — not recycled generic advice.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Real case studies & examples
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Practical, step-by-step advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Written for hotels operating in Kenya & East Africa
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">What You'll Get</h3>
              <p className="text-text-gray mb-4">
                No fluff, no filler — each guide is built to help you take action the same day you read it.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Clear, actionable steps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Checklists and FAQs you can use right away
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Honest, transparent recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Hotel?</h3>
          <p className="text-text-gray mb-6 max-w-2xl mx-auto">
            Our complete hotel growth strategy combines everything in these guides with technical SEO, direct booking optimization, and experiential marketing to drive real revenue growth.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
          >
            Book a Strategy Call
          </a>
        </section>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Hotel Marketing Blog | BookedUp Africa',
            description: 'Comprehensive guides on hotel marketing and growth strategies',
            publisher: {
              '@type': 'Organization',
              name: 'BookedUp Africa',
              url: 'https://bookedupafrica.com',
            },
          }),
        }}
      />
    </main>
  )
}
