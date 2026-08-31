import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/resources',
  },
  title: 'BookedUp Africa — Hotel Growth Articles & Resources',
  description: 'In-depth articles on local SEO, guest experience, direct booking optimization, and hospitality marketing strategies.',
  keywords: 'hotel marketing articles, local SEO guide, hospitality strategy, direct bookings, medium articles',
  openGraph: {
    title: 'BookedUp Africa — Articles & Resources',
    description: 'Deep-dive articles on hotel growth and hospitality marketing',
    type: 'website',
  },
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0]">
      {/* Header */}
      <div className="bg-navy-deep border-b border-border-flat py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Growth Resources</h1>
          <p className="text-lg text-text-gray max-w-2xl">
            In-depth articles and implementation guides for increasing direct bookings and guest satisfaction.
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8">
          {/* Medium Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Articles on Medium</h2>
            <p className="text-text-gray mb-8">
              Read in-depth analyses and case studies on hotel marketing, local SEO, and direct booking strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Featured Articles */}
              <div className="bg-navy-alt border border-border-flat rounded-sm p-6 hover:border-gold-flat/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Hotel Local SEO Guide</h3>
                <p className="text-text-gray text-sm mb-4">
                  Complete guide to dominating local search results and appearing in map pack for your hotel location.
                </p>
                <a
                  href="https://medium.com/@mogerejulius41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-flat hover:text-gold-flat font-semibold inline-flex items-center gap-2"
                >
                  Read on Medium →
                </a>
              </div>

              <div className="bg-navy-alt border border-border-flat rounded-sm p-6 hover:border-gold-flat/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Direct Booking Strategy</h3>
                <p className="text-text-gray text-sm mb-4">
                  Strategic analysis of direct booking vs OTA dependency and how to reduce reliance on OTA platforms.
                </p>
                <a
                  href="https://medium.com/@mogerejulius41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-flat hover:text-gold-flat font-semibold inline-flex items-center gap-2"
                >
                  Read on Medium →
                </a>
              </div>

              <div className="bg-navy-alt border border-border-flat rounded-sm p-6 hover:border-gold-flat/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Guest Experience Optimization</h3>
                <p className="text-text-gray text-sm mb-4">
                  How to design the guest journey to increase repeat bookings, referrals, and 5-star reviews.
                </p>
                <a
                  href="https://medium.com/@mogerejulius41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-flat hover:text-gold-flat font-semibold inline-flex items-center gap-2"
                >
                  Read on Medium →
                </a>
              </div>

              <div className="bg-navy-alt border border-border-flat rounded-sm p-6 hover:border-gold-flat/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Revenue Growth Framework</h3>
                <p className="text-text-gray text-sm mb-4">
                  Integrated framework combining local SEO, experience optimization, and direct booking strategy.
                </p>
                <a
                  href="https://medium.com/@mogerejulius41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-flat hover:text-gold-flat font-semibold inline-flex items-center gap-2"
                >
                  Read on Medium →
                </a>
              </div>
            </div>
          </div>

          {/* Medium Follow */}
          <div className="bg-navy-alt border border-border-flat rounded-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Follow on Medium</h2>
            <p className="text-text-gray mb-6 max-w-2xl mx-auto">
              Get notified about new articles on hotel marketing, local SEO, and hospitality growth strategies.
            </p>
            <a
              href="https://medium.com/@mogerejulius41"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] hover:opacity-90 rounded font-semibold hover:opacity-90 transition-colors"
            >
              Follow on Medium
            </a>
          </div>

          {/* Blog Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">BookedUp Africa Blog</h2>
            <p className="text-text-gray mb-8">
              Subscribe to our blog for exclusive articles on hotel growth, implementation guides, and case studies.
            </p>
            <a
              href="/blog"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] hover:opacity-90 rounded font-semibold hover:opacity-90 transition-colors"
            >
              Visit Our Blog
            </a>
          </div>

          {/* CTA Section */}
          <div className="bg-navy-alt border border-border-flat rounded-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Implement?</h3>
            <p className="text-text-gray mb-6">
              Learn the strategies, then work with us to implement them for your specific property and market.
            </p>
            <a
              href="/hotel-growth-partnership-kenya"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] hover:opacity-90 rounded font-semibold hover:opacity-90 transition-colors"
            >
              Schedule a Strategy Call
            </a>
            <p className="text-text-gray text-sm mt-4">
              Or see the full picture: <a href="/hotel-digital-marketing-agency-kenya" className="text-gold-flat hover:text-gold-flat font-semibold">what working with a hotel-only marketing agency looks like →</a>
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-6 text-sm">
              <a href="/hotel-local-seo-kenya" className="text-gold-flat hover:text-gold-flat">Local SEO for Hotels →</a>
              <a href="/hotel-booking-leak-audit-kenya" className="text-gold-flat hover:text-gold-flat">Direct Booking Audit →</a>
              <a href="/hotel-guest-experience-optimization-kenya" className="text-gold-flat hover:text-gold-flat">Guest Experience Audit →</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
