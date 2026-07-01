import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
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
      icon: '📍',
      articles: 11,
    },
    {
      title: 'Google Business Profile',
      description: 'Optimize your GBP for maximum hotel visibility, reviews, and direct bookings from local search.',
      link: '/blog/google-business-profile-hotels',
      icon: '🗺️',
      articles: 9,
    },
    {
      title: 'Experiential Marketing',
      description: 'Create memorable guest experiences that drive bookings, loyalty, and word-of-mouth marketing.',
      link: '/blog/experiential-marketing-hotels',
      icon: '✨',
      articles: 8,
    },
    {
      title: 'Content Marketing',
      description: 'Build authority and drive bookings through strategic, guest-focused content.',
      link: '/blog/content-marketing-hotels',
      icon: '📝',
      articles: 9,
    },
    {
      title: 'Direct Bookings',
      description: 'Reduce OTA dependence and increase direct bookings through optimized websites and conversion strategies.',
      link: '/blog/direct-hotel-bookings',
      icon: '💰',
      articles: 8,
    },
    {
      title: 'Hotel Website Design & SEO',
      description: 'Create a website that ranks in search engines and converts visitors into guests.',
      link: '/blog/hotel-website-design-seo',
      icon: '🌐',
      articles: 8,
    },
    {
      title: 'AI for Hotels',
      description: 'Leverage AI to automate operations, improve marketing, and deliver better guest experiences.',
      link: '/blog/ai-for-hotels',
      icon: '🤖',
      articles: 7,
    },
    {
      title: 'Case Studies',
      description: 'Real examples of how hotels increased bookings and revenue through strategic optimization.',
      link: '/blog/hospitality-case-studies',
      icon: '📊',
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
          <h2 className="text-3xl font-bold mb-8">8 Content Pillars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <Link
                key={idx}
                href={pillar.link}
                className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0">{pillar.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-orange-500 group-hover:text-orange-400 transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    <div className="text-xs text-text-gray/70 flex items-center justify-between">
                      <span>{pillar.articles} supporting articles</span>
                      <span className="text-orange-500 font-semibold">Read →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Strategy Explanation */}
        <section className="mb-16 bg-white/5 border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Content Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-orange-500 mb-4">Topical Authority</h3>
              <p className="text-text-gray mb-4">
                Each pillar page is a comprehensive resource covering the topic thoroughly with semantic depth and internal linking. This creates topical authority that signals expertise to Google.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> 8 pillar pages targeting main topics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> 4-11 supporting articles per pillar
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> 4,000-6,000 word pillar pages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Internal linking for SEO authority
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-orange-500 mb-4">EEAT Signals</h3>
              <p className="text-text-gray mb-4">
                Every page includes original insights from our work with hospitality marketing, real examples, statistics, checklists, and FAQs.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Expertise: Real case studies & examples
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Authoritativeness: Industry insights
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Trustworthiness: Transparent methodology
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span> Experience: Practical, actionable advice
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content Hierarchy */}
        <section className="mb-16 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-blue-400">Content Hierarchy</h3>
          <div className="font-mono text-sm text-text-gray space-y-1">
            <div className="text-white">Hotel Marketing & Growth</div>
            <div className="ml-6">├── <Link href="/blog/local-seo-for-hotels" className="text-orange-500 hover:text-orange-400">Local SEO (11 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/google-business-profile-hotels" className="text-orange-500 hover:text-orange-400">Google Business Profile (9 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/experiential-marketing-hotels" className="text-orange-500 hover:text-orange-400">Experiential Marketing (8 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/content-marketing-hotels" className="text-orange-500 hover:text-orange-400">Content Marketing (9 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/direct-hotel-bookings" className="text-orange-500 hover:text-orange-400">Direct Bookings (8 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/hotel-website-design-seo" className="text-orange-500 hover:text-orange-400">Hotel Websites (8 articles)</Link></div>
            <div className="ml-6">├── <Link href="/blog/ai-for-hotels" className="text-orange-500 hover:text-orange-400">AI for Hotels (7 articles)</Link></div>
            <div className="ml-6">└── <Link href="/blog/hospitality-case-studies" className="text-orange-500 hover:text-orange-400">Case Studies (6 articles)</Link></div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Hotel?</h3>
          <p className="text-text-gray mb-6 max-w-2xl mx-auto">
            Our complete hotel growth strategy combines these content pillars with technical SEO, direct booking optimization, and experiential marketing to drive real revenue growth.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors"
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
