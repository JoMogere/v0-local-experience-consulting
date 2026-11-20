import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Sparkles, TrendingUp, BarChart3 } from 'lucide-react'
import { getPublishedBlogs } from '@/app/actions/blogs'
import { SITE_URL } from '@/lib/site'
import { BUILTIN_POSTS } from '@/lib/builtin-posts'
import { firstImage } from '@/lib/markdown'
import { THUMBNAILS } from '@/lib/thumbnails'
import { getMediumPosts } from '@/lib/medium'

const CATEGORY_ICONS: Record<string, typeof MapPin> = {
  'local-seo-hotels': MapPin,
  'direct-bookings': TrendingUp,
  'experiential-marketing': Sparkles,
  'case-studies': BarChart3,
}


// The long-form articles that live as their own pages. They are articles, so they sit in the list with the rest.
const STATIC_ARTICLES = [
  { slug: 'local-seo-for-hotels', title: 'How to Rank Higher in Local Hotel Search', excerpt: 'A plain-language start on Google Maps rankings, reviews and why guests search the way they do.', category: 'Local SEO' },
  { slug: 'google-business-profile-hotels', title: 'Google Business Profile: The Complete Setup Guide', excerpt: 'Set up and improve your hotel profile so guests find you, call you and book direct.', category: 'Local SEO' },
  { slug: 'direct-hotel-bookings', title: 'Increase Direct Hotel Bookings: A Practical Guide', excerpt: 'How a hotel moves guests from booking sites to its own website and WhatsApp.', category: 'Direct Bookings' },
  { slug: 'hotel-website-design-seo', title: 'Hotel Website Design & SEO: What Actually Converts', excerpt: 'What a hotel website needs to rank in search and turn visitors into guests.', category: 'Website' },
  { slug: 'experiential-marketing-hotels', title: 'Experiential Marketing for Hotels: Turning Stays Into Stories', excerpt: 'Turn guest experiences into reasons to book, review and tell others.', category: 'Guest Experience' },
  { slug: 'content-marketing-hotels', title: 'Content Marketing for Hotels: What Actually Gets Read', excerpt: 'What to publish, and how to make it bring in guests rather than just clicks.', category: 'Content' },
  { slug: 'ai-for-hotels', title: 'AI for Hotels: Where It Actually Helps', excerpt: 'Where AI genuinely helps hotel marketing and where it quietly costs you guests.', category: 'AI' },
]

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog',
  },
  title: 'Hotel Marketing Blog: SEO and Bookings | BookedUp Africa',
  description: 'Comprehensive guides on local SEO, direct bookings, content marketing, and experiential marketing for African hotels.',
  keywords: 'hotel marketing blog, hotel SEO, direct bookings, hospitality marketing, local search',
  openGraph: {
    title: 'Hotel Marketing Blog: SEO and Bookings | BookedUp Africa',
    description: 'Expert guides on growing hotel bookings and revenue.',
    type: 'website',
  },
}

export default async function BlogPage() {
  let latestPosts: Awaited<ReturnType<typeof getPublishedBlogs>> = []
  try {
    latestPosts = await getPublishedBlogs()
  } catch {
    // Database unavailable (e.g. during build) — show the guides only.
  }

  const mediumPosts = await getMediumPosts()

  // Articles published from the admin panel come first, then the built-in articles.
  const articles = [
    ...latestPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      image: THUMBNAILS[p.slug] ?? firstImage(p.content),
      date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : undefined,
    })),
    ...BUILTIN_POSTS.filter((p) => !latestPosts.some((l) => l.slug === p.slug)).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      image: THUMBNAILS[p.slug] ?? p.image ?? firstImage(p.content),
      date: p.date ? new Date(p.date).toLocaleDateString() : undefined,
    })),
    ...STATIC_ARTICLES.filter((p) => !latestPosts.some((l) => l.slug === p.slug)).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      image: THUMBNAILS[p.slug] ?? null,
      date: undefined as string | undefined,
    })),
  ]

  const pillars = [
    {
      title: 'Local SEO for Hotels',
      description: 'Google Maps ranking, consistent business details and getting more reviews, so nearby guests find you.',
      link: '/guides/local-seo-hotels',
      cta: 'Read the guide',
    },
    {
      title: 'Direct Bookings',
      description: 'Reduce booking-site commission and build a booking option that turns website visitors into guests.',
      link: '/guides/direct-bookings',
      cta: 'Read the guide',
    },
    {
      title: 'Experiential Marketing',
      description: 'Turn your property into the stay guests talk about: local partners, stories and sensory details.',
      link: '/guides/experiential-marketing',
      cta: 'Read the guide',
    },
    {
      title: 'Case Studies',
      description: 'Real examples of hotels that got more bookings and visibility through the work in these guides.',
      link: '/case-studies',
      cta: 'See the results',
    },
  ]

  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24">
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

        {/* Latest Articles (published from the admin panel) */}
        {articles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {articles.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-navy-alt border border-border-flat rounded-sm hover:bg-[#262626] transition-all overflow-hidden"
                >
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full aspect-video object-cover group-hover:opacity-90 transition-opacity"
                    />
                  )}
                  <div className="p-6">
                  {post.category && (
                    <span className="text-xs uppercase tracking-wide text-gold-flat">
                      {post.category}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-[#F9F6F0] group-hover:text-gold-flat transition-colors mt-1 mb-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-text-gray text-sm leading-relaxed mb-3">{post.excerpt}</p>
                  )}
                  {post.date && (
                    <p className="text-xs text-text-gray">{post.date}</p>
                  )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {mediumPosts.length > 0 ? (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Also on Medium</h2>
            <p className="text-text-gray mb-8">
              Newer articles are published on{' '}
              <a href="https://medium.com/@mogerejulius41" target="_blank" rel="noopener noreferrer" className="text-gold-flat hover:underline">
                Medium
              </a>
              . They open there.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {mediumPosts.map((post) => (
                <a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-navy-alt border border-border-flat rounded-sm hover:bg-[#262626] transition-all overflow-hidden"
                >
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={post.image} alt={post.title} loading="lazy" className="w-full aspect-video object-cover group-hover:opacity-90 transition-opacity" />
                  )}
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-wide text-gold-flat">{post.category ?? 'Medium'}</span>
                    <h3 className="text-lg font-bold text-[#F9F6F0] group-hover:text-gold-flat transition-colors mt-1 mb-2">{post.title}</h3>
                    {post.excerpt && <p className="text-text-gray text-sm leading-relaxed mb-3">{post.excerpt}</p>}
                    <p className="text-xs text-text-gray">{new Date(post.date).toLocaleDateString()} · Read on Medium →</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ) : (
        <p className="-mt-8 mb-16 text-sm text-text-gray">
          Also publishing on{' '}
          <a href="https://medium.com/@mogerejulius41" target="_blank" rel="noopener noreferrer" className="text-gold-flat hover:underline">
            Medium
          </a>
          .
        </p>
        )}

        {/* Pillar Pages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-2">Start with a guide</h2>
          <p className="text-text-gray mb-8">Each guide covers one topic from start to finish, with short pages for the details.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <Link
                key={idx}
                href={pillar.link}
                className="group p-6 bg-navy-alt border border-border-flat rounded-sm hover:bg-[#262626] hover:border-border-flat transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-gold-flat flex-shrink-0">
                    {(() => {
                      const slug = pillar.link.split('/').pop() || ''
                      const Icon = CATEGORY_ICONS[slug]
                      return Icon ? <Icon size={32} strokeWidth={1.5} /> : null
                    })()}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gold-flat group-hover:text-gold-flat transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed mb-3">
                      {pillar.description}
                    </p>
                    <span className="text-gold-flat font-semibold text-sm">{pillar.cta} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>


        {/* Why These Guides */}
        <section className="mb-16 bg-navy-alt border border-border-flat rounded-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Why Hoteliers Read These Guides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gold-flat mb-4">Built From Real Work</h3>
              <p className="text-text-gray mb-4">
                Every guide comes from hands-on work managing marketing for real East African hotels and resorts — not recycled generic advice.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Real case studies & examples
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Practical, step-by-step advice
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Written for hotels operating in Kenya & East Africa
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gold-flat mb-4">What You'll Get</h3>
              <p className="text-text-gray mb-4">
                No fluff, no filler — each guide is built to help you take action the same day you read it.
              </p>
              <ul className="space-y-2 text-text-gray text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Clear, actionable steps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Checklists and FAQs you can use right away
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold-flat">✓</span> Honest, transparent recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy-alt border border-border-flat rounded-sm p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Hotel?</h3>
          <p className="text-text-gray mb-6 max-w-2xl mx-auto">
            Our complete hotel growth strategy combines everything in these guides with technical SEO, direct booking optimization, and experiential marketing to drive real revenue growth.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-colors"
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
            name: 'Hotel Marketing Blog: SEO and Bookings | BookedUp Africa',
            description: 'Comprehensive guides on hotel marketing and growth strategies',
            publisher: {
              '@type': 'Organization',
              name: 'BookedUp Africa',
              url: `${SITE_URL}`,
            },
          }),
        }}
      />
    </main>
  )
}
