import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Business Profile for Hotels | BookedUp Africa',
  description: 'Complete guide to managing your Google Business Profile for maximum hotel visibility, reviews, and direct bookings.',
  keywords: 'Google Business Profile hotels, hotel GBP optimization, Google Posts, hotel categories, booking links',
}

export default function GBPPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><a href="/blog" className="hover:text-orange-500">Blog</a> / Google Business Profile for Hotels</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Google Business Profile Management for Hotels</h1>
          <p className="text-xl text-text-gray mb-6">Optimize your GBP to rank higher on Google Maps and attract direct bookings from local search.</p>
          <div className="flex gap-4 text-sm text-text-gray">
            <span>Updated January 2024</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h3 className="font-bold mb-4">Table of Contents</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#setup" className="text-orange-500 hover:text-orange-400">GBP Setup & Verification</a></li>
            <li><a href="#categories" className="text-orange-500 hover:text-orange-400">Choosing the Right Categories</a></li>
            <li><a href="#photos" className="text-orange-500 hover:text-orange-400">Hotel Photos That Increase Visibility</a></li>
            <li><a href="#posts" className="text-orange-500 hover:text-orange-400">Using Google Posts Effectively</a></li>
            <li><a href="#booking" className="text-orange-500 hover:text-orange-400">Adding Booking Links</a></li>
            <li><a href="#qna" className="text-orange-500 hover:text-orange-400">Managing Q&A Section</a></li>
            <li><a href="#reviews" className="text-orange-500 hover:text-orange-400">Google Reviews Management</a></li>
            <li><a href="#insights" className="text-orange-500 hover:text-orange-400">Using GBP Insights</a></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8">
          <div id="setup">
            <h2 className="text-3xl font-bold">GBP Setup & Verification</h2>
            <p>Your Google Business Profile is your primary presence on Google Maps. Proper setup is critical for visibility.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Claim your profile if unclaimed</li>
              <li>Verify your business through mail verification</li>
              <li>Ensure accuracy of all basic information (name, address, phone)</li>
              <li>Add a complete description highlighting your unique value</li>
              <li>Add all relevant business attributes</li>
            </ul>
          </div>

          <div id="categories">
            <h2 className="text-3xl font-bold">Choosing the Right Categories</h2>
            <p>Categories help Google understand your business type and rank you for relevant searches.</p>
            <p className="text-text-gray">Primary category should be "Hotel" or specific hotel type (boutique, luxury, budget). Add 2-3 secondary categories like "Restaurant" if applicable.</p>
          </div>

          <div id="photos">
            <h2 className="text-3xl font-bold">Hotel Photos That Increase Visibility</h2>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Upload 50+ high-quality photos (minimum recommended)</li>
              <li>Include exterior shots, lobby, rooms, common areas</li>
              <li>Add captions and titles with relevant keywords</li>
              <li>Update photos seasonally</li>
              <li>Encourage staff to upload from their accounts</li>
            </ul>
          </div>

          <div id="posts">
            <h2 className="text-3xl font-bold">Using Google Posts Effectively</h2>
            <p>Google Posts appear in search results and boost engagement. Post regularly about:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Special offers and promotions</li>
              <li>Seasonal events and packages</li>
              <li>New amenities or renovations</li>
              <li>Local events and activities</li>
              <li>Staff spotlights and stories</li>
            </ul>
          </div>

          <div id="booking">
            <h2 className="text-3xl font-bold">Adding Booking Links</h2>
            <p>Enable direct booking links in your GBP to capture high-intent searchers.</p>
            <p className="text-text-gray">Link to your booking page or reservation system to reduce friction between search and booking.</p>
          </div>

          <div id="reviews">
            <h2 className="text-3xl font-bold">Google Reviews Management</h2>
            <p>Reviews are critical for Google Business Profile ranking and conversion.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Respond to all reviews within 24-48 hours</li>
              <li>Thank positive reviewers and address negative feedback professionally</li>
              <li>Use keywords naturally in responses</li>
              <li>Monitor trends and act on common feedback</li>
              <li>Encourage satisfied guests to leave reviews</li>
            </ul>
          </div>

          <div id="insights">
            <h2 className="text-3xl font-bold">Using GBP Insights</h2>
            <p>Google provides valuable data about how people find and interact with your profile.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>How you appear in searches (search queries)</li>
              <li>How people reach your website</li>
              <li>Phone call metrics</li>
              <li>Direction requests</li>
              <li>Customer actions</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-6">Related Pillars</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/blog/local-seo-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors">
              <h4 className="font-semibold text-orange-500">Local SEO for Hotels</h4>
            </a>
            <a href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors">
              <h4 className="font-semibold text-orange-500">Direct Bookings</h4>
            </a>
          </div>
        </section>
      </div>
    </article>
  )
}
