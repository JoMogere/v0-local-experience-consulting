import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BookedUp Africa — Hotel Growth Videos & Tutorials',
  description: 'Watch exclusive videos on local SEO, guest experience optimization, and direct booking strategies for African hotels.',
  keywords: 'hotel marketing videos, local SEO tutorials, hospitality growth, booking optimization, East Africa',
  openGraph: {
    title: 'BookedUp Africa — Hotel Growth Videos',
    description: 'Exclusive video content on hospitality growth strategies',
    type: 'website',
  },
}

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white">
      {/* Header */}
      <div className="bg-navy-deep border-b border-white/10 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Growth Videos</h1>
          <p className="text-lg text-text-gray max-w-2xl">
            Practical strategies and implementation guides for increasing direct bookings and guest satisfaction.
          </p>
        </div>
      </div>

      {/* YouTube Embed */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8">
          {/* Channel Subscribe */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to BookedUp Africa</h2>
            <p className="text-text-gray mb-6">
              Get weekly videos on local SEO, guest experience, and direct booking optimization.
            </p>
            <a
              href="https://www.youtube.com/@bookedupafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>

          {/* Latest Videos Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Videos</h2>
            <p className="text-text-gray mb-6">
              Visit our YouTube channel to watch the latest hotel growth strategies, local SEO tutorials, and booking optimization guides.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">▶</div>
                  <p className="text-text-gray">YouTube Channel Videos</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Topics Covered:</h3>
                <ul className="space-y-2 text-text-gray">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    Hotel Local SEO optimization strategies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    Direct booking funnel analysis and improvement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    Guest experience optimization for 5-star reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    OTA dependency reduction tactics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    Review generation and reputation management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-500">✓</span>
                    Revenue growth implementation roadmaps
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Hotel?</h3>
            <p className="text-text-gray mb-6">
              Watch our latest strategies and then connect with us to implement them for your property.
            </p>
            <a
              href="/hotel-growth-partnership-kenya"
              className="inline-block px-8 py-3 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
