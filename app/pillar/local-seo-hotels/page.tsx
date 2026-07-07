import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Local SEO for Hotels: Complete Guide to Google Maps Domination | BookedUp Africa',
  description: 'Master local SEO for hotels in Africa. Learn strategies to rank in Google Maps, Local Pack, and get direct bookings from local search with our comprehensive guide.',
  keywords: 'local SEO hotels, hotel local search optimization, Google Maps ranking hotels, hotel direct bookings SEO, Africa hospitality marketing',
  openGraph: {
    title: 'Local SEO for Hotels: Complete Guide to Google Maps Domination',
    description: 'Master local SEO strategies specifically designed for African hotels and hospitality businesses.',
    type: 'article',
  },
}

export default function LocalSEOPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span>Local SEO for Hotels</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Local SEO for Hotels: The Complete Guide to Dominating Google Maps & Local Search
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Discover how to master local search optimization and get your hotel to the top of Google Maps, Google Local Pack, and local search results. This comprehensive guide covers every aspect of local SEO specifically for African hospitality businesses.
          </p>
        </header>

        {/* Table of Contents */}
        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-text-gray">
            <li><Link href="#what-is-local-seo" className="hover:text-orange-500 transition-colors">1. What Is Local SEO for Hotels?</Link></li>
            <li><Link href="#why-matters" className="hover:text-orange-500 transition-colors">2. Why It Matters for Your Hotel</Link></li>
            <li><Link href="#how-works" className="hover:text-orange-500 transition-colors">3. How Local SEO Works</Link></li>
            <li><Link href="#google-maps" className="hover:text-orange-500 transition-colors">4. Google Maps Optimization</Link></li>
            <li><Link href="#on-site" className="hover:text-orange-500 transition-colors">5. On-Site Local SEO</Link></li>
            <li><Link href="#citations" className="hover:text-orange-500 transition-colors">6. Citations & Directories</Link></li>
            <li><Link href="#reviews" className="hover:text-orange-500 transition-colors">7. Review Management Strategy</Link></li>
            <li><Link href="#schema" className="hover:text-orange-500 transition-colors">8. Schema Markup Implementation</Link></li>
            <li><Link href="#mistakes" className="hover:text-orange-500 transition-colors">9. Common Mistakes to Avoid</Link></li>
            <li><Link href="#checklist" className="hover:text-orange-500 transition-colors">10. Local SEO Checklist</Link></li>
            <li><Link href="#faqs" className="hover:text-orange-500 transition-colors">11. Frequently Asked Questions</Link></li>
          </ul>
        </nav>

        {/* Main Content */}
        <section className="prose-invert max-w-none space-y-12">
          
          {/* Section 1 */}
          <section id="what-is-local-seo">
            <h2 className="text-4xl font-bold mb-6">What Is Local SEO for Hotels?</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Local SEO is the practice of optimizing your hotel's online presence to appear prominently in local search results, particularly in Google Maps, the Google Local Pack (the three business listings shown at the top of search results), and location-specific searches. For hospitality businesses, local SEO is not optional—it's essential.
            </p>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              When potential guests search "hotel in Nairobi," "resort near Dar es Salaam," or "luxury lodge in the Serengeti," local SEO determines whether your property appears at the top of the results or gets buried on page three.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 my-8">
              <h3 className="font-bold text-blue-400 mb-3">Key Point</h3>
              <p className="text-text-gray">
                Local SEO is fundamentally different from traditional SEO because it prioritizes geographic relevance. Google's algorithms understand that a traveler searching for "hotels" has specific location intent, and local SEO helps you capture that intent when it matters most—when someone is ready to book.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="why-matters">
            <h2 className="text-4xl font-bold mb-6">Why Local SEO Matters for Your Hotel</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Consider these statistics that demonstrate why local SEO is critical for hospitality businesses:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>76% of travelers</strong> use Google to search for accommodations before making a decision</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>88% of consumers</strong> trust online reviews as much as personal recommendations</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>50% of mobile searches</strong> have local intent—people looking for something nearby</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                <span className="text-text-gray"><strong>72% of travelers</strong> who perform a local search visit the location within 24 hours</span>
              </li>
            </ul>
            <p className="text-lg text-text-gray leading-relaxed">
              For African hospitality businesses, this means direct bookings are literally one Google search away—if you're visible in local search results.
            </p>
          </section>

          {/* Section 3 */}
          <section id="how-works">
            <h2 className="text-4xl font-bold mb-6">How Local SEO Works: The Google Map Stack</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Google Local SEO operates through what's known as "The Map Stack"—a set of ranking factors that determine which hotels appear at the top of Google Maps and local search results:
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">1. Relevance</h3>
                <p className="text-text-gray">How well your Google Business Profile and website content match what people are searching for. If someone searches "luxury safari lodge," Google needs to understand that your property matches that description.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">2. Distance/Proximity</h3>
                <p className="text-text-gray">Where your hotel is physically located relative to the searcher. A hotel in Kampala will rank higher for "hotels in Kampala" than one in Kigali, all else being equal.</p>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2">3. Prominence</h3>
                <p className="text-text-gray">How well-known and reputable your hotel is. This is built through reviews, citations (mentions of your business across the web), and website authority.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="google-maps">
            <h2 className="text-4xl font-bold mb-6">Google Maps Optimization: Your Digital Front Door</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Your Google Business Profile (GBP) is the single most important element of local SEO. This is where Google showcases your hotel's information directly in search results and maps.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
              <p className="text-blue-400 text-sm">
                Ready to dive deeper? See our detailed guide on <Link href="/pillar/local-seo-hotels/google-maps-ranking" className="underline hover:text-blue-300">how to rank higher in Google Maps</Link>.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Critical GBP Optimization Elements</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Complete & Accurate Information</h4>
                  <ul className="text-text-gray space-y-2 ml-4">
                    <li>• Business name (should match your website and legal name)</li>
                    <li>• Exact address (verified and current)</li>
                    <li>• Phone number (active, monitored daily)</li>
                    <li>• Website URL (homepage or booking page)</li>
                    <li>• Hours of operation (updated for holidays)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Professional Photos & Videos</h4>
                  <ul className="text-text-gray space-y-2 ml-4">
                    <li>• 10+ high-quality hotel photos (rooms, common areas, amenities)</li>
                    <li>• Recent photos (within last 6 months)</li>
                    <li>• 360° virtual tour (increases click-through by 40%+)</li>
                    <li>• Video tour (15-30 seconds)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-500 mb-2">Service Categories</h4>
                  <ul className="text-text-gray space-y-2 ml-4">
                    <li>• Primary category: "Hotel" or specific type (Boutique Hotel, Resort, Eco-Lodge)</li>
                    <li>• Additional categories for special amenities (restaurant, spa, conference facilities)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="on-site">
            <h2 className="text-4xl font-bold mb-6">On-Site Local SEO: Your Website's Role</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Your hotel website is the credibility anchor for local SEO. Google uses your website to verify information and understand your business more deeply.
            </p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-6">
              <p className="text-purple-400 text-sm">
                Learn why <Link href="/pillar/local-seo-hotels/nap-consistency" className="underline hover:text-purple-300">NAP (Name, Address, Phone) consistency</Link> is critical and how to audit your business information across all platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-orange-500">Location Pages</h3>
                <p className="text-text-gray text-sm">If you have multiple properties, create dedicated pages for each with unique content, photos, and reviews.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-orange-500">NAP Consistency</h3>
                <p className="text-text-gray text-sm">Name, Address, Phone must be identical across your website, GBP, and all citations.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-orange-500">Schema Markup</h3>
                <p className="text-text-gray text-sm">Add Hotel, LocalBusiness, and Review schema to help Google understand your business structure.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-orange-500">Local Keywords</h3>
                <p className="text-text-gray text-sm">Target city/region names naturally: "hotel in Nairobi," "resort near Mount Kenya," "lodge in Zanzibar."</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="citations">
            <h2 className="text-4xl font-bold mb-6">Citations & Business Directories</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Citations are online mentions of your business name, address, and phone number. They're signals of legitimacy to Google and essential for local SEO.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-8">
              <h3 className="font-bold text-orange-500 mb-4">Top Priority Directories for African Hotels</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-text-gray space-y-2">
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Google Business Profile</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> TripAdvisor</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Booking.com</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Airbnb</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> OpenTable (if you have dining)</li>
                </ul>
                <ul className="text-text-gray space-y-2">
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Expedia</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Agoda</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Apple Maps</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Yelp</li>
                  <li className="flex gap-2"><span className="text-orange-500">✓</span> Facebook</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="reviews">
            <h2 className="text-4xl font-bold mb-6">Review Management: Your SEO Superpower</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Reviews are one of the most powerful local SEO ranking factors. Hotels with more reviews and higher ratings rank significantly higher in Google Maps.
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
              <p className="text-green-400 text-sm">
                Get the step-by-step system for <Link href="/pillar/local-seo-hotels/generate-hotel-reviews" className="underline hover:text-green-300">generating authentic hotel reviews</Link> that boost both SEO and guest satisfaction.
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-8 mb-8">
              <h3 className="font-bold text-green-400 mb-4">Strategic Review Generation</h3>
              <ol className="text-text-gray space-y-3 ml-4 list-decimal">
                <li>After checkout, send automated email requesting Google review (48 hours post-checkout)</li>
                <li>Include direct link to your Google Business Profile review page</li>
                <li>Offer incentive: "Help us improve—leave a review and we'll give you X discount"</li>
                <li>Train staff to ask for reviews verbally during check-out</li>
                <li>Respond to ALL reviews within 24 hours (positive and negative)</li>
                <li>Personalize responses mentioning specific room/experience</li>
              </ol>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-3">Review Response Template (For Negative Reviews)</h3>
              <p className="text-text-gray text-sm italic bg-white/5 p-4 rounded">
                "Thank you for sharing your feedback about [specific issue]. We take this seriously and have [specific action taken]. We'd love to make it right. Please email me at [manager email] so we can discuss how we can provide a better experience on your next visit."
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="schema">
            <h2 className="text-4xl font-bold mb-6">Schema Markup: Speaking Google's Language</h2>
            <p className="text-lg text-text-gray leading-relaxed mb-6">
              Schema markup is code that tells search engines exactly what information is on your page. For hotels, the right schema markup can dramatically improve your search visibility.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-orange-500 mb-3">Essential Schema Types for Hotels</h3>
              <ul className="text-text-gray space-y-3">
                <li className="flex gap-3"><span className="text-orange-500 font-bold">1.</span> Hotel Schema - Basic business information</li>
                <li className="flex gap-3"><span className="text-orange-500 font-bold">2.</span> LocalBusiness Schema - Geographic and contact details</li>
                <li className="flex gap-3"><span className="text-orange-500 font-bold">3.</span> Review Schema - Display star ratings and reviews</li>
                <li className="flex gap-3"><span className="text-orange-500 font-bold">4.</span> AggregateRating Schema - Overall rating across all reviews</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section id="mistakes">
            <h2 className="text-4xl font-bold mb-6">Common Local SEO Mistakes Hotels Make</h2>
            <div className="space-y-4">
              <div className="bg-red-500/10 border-l-4 border-red-500 pl-6 py-4">
                <h3 className="font-bold text-red-400 mb-2">Inconsistent Business Information</h3>
                <p className="text-text-gray text-sm">Different phone numbers or addresses across platforms confuse Google's algorithms and hurt rankings.</p>
              </div>
              <div className="bg-red-500/10 border-l-4 border-red-500 pl-6 py-4">
                <h3 className="font-bold text-red-400 mb-2">Ignored or Neglected Reviews</h3>
                <p className="text-text-gray text-sm">Not responding to reviews signals to Google that you don't care about customer experience.</p>
              </div>
              <div className="bg-red-500/10 border-l-4 border-red-500 pl-6 py-4">
                <h3 className="font-bold text-red-400 mb-2">Poor Quality Photos</h3>
                <p className="text-text-gray text-sm">Blurry, old, or unrepresentative photos reduce click-through rates and hurt engagement metrics.</p>
              </div>
              <div className="bg-red-500/10 border-l-4 border-red-500 pl-6 py-4">
                <h3 className="font-bold text-red-400 mb-2">Missing Location Pages</h3>
                <p className="text-text-gray text-sm">If you have multiple properties, not creating individual pages means missing ranking opportunities.</p>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section id="checklist">
            <h2 className="text-4xl font-bold mb-6">Local SEO Implementation Checklist</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Claim and verify Google Business Profile</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Complete all GBP fields (name, address, phone, category)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Upload 10+ professional photos</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Create 360° virtual tour</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Add business hours and holiday hours</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Verify NAP consistency across all platforms</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Set up automated review request system</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Respond to all reviews (establish 24-hour response time)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Create location pages on website</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Add Hotel schema markup to website</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Build citations in top 10 directories</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Ensure mobile-responsive website</span>
                </label>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section id="faqs">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  How long does it take to see results from local SEO?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  With consistent effort, you should see initial improvements within 4-8 weeks. Significant improvements typically take 3-6 months. Local SEO is an ongoing process, not a one-time project.
                </p>
              </details>

              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  Do I need a website for local SEO to work?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  While Google Business Profile alone can help with visibility, having a website significantly improves your ranking potential. Your website serves as credibility reinforcement and helps Google understand your business better.
                </p>
              </details>

              <details className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer group">
                <summary className="font-bold text-lg flex items-center justify-between">
                  What's more important for local SEO: Google Business Profile or website?
                  <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-text-gray mt-4">
                  Both are essential. GBP is typically 70% of the local ranking equation, while your website is 30%. But they work together—a strong GBP without a strong website is incomplete.
                </p>
              </details>
            </div>
          </section>

          {/* Related Content */}
          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Content</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/pillar/direct-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-orange-500 mb-2">Direct Bookings Guide →</h3>
                <p className="text-text-gray text-sm">Turn local search visibility into confirmed bookings</p>
              </Link>
              <Link href="/pillar/direct-bookings/website-conversion" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-orange-500 mb-2">Website Conversion →</h3>
                <p className="text-text-gray text-sm">Turn website visitors into confirmed bookings</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate Local Search?</h2>
            <p className="text-text-gray mb-6">
              Need help implementing local SEO for your hotel? We offer comprehensive local SEO audits and strategies specifically designed for African hospitality businesses.
            </p>
            <a
              href="https://calendly.com/mogerejulius41/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors"
            >
              Schedule a Free Strategy Call
            </a>
          </section>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Local SEO for Hotels: The Complete Guide to Dominating Google Maps & Local Search',
              description: 'Master local SEO strategies specifically designed for African hotels and hospitality businesses.',
              author: {
                '@type': 'Organization',
                name: 'BookedUp Africa',
              },
              datePublished: new Date().toISOString(),
            }),
          }}
        />
      </article>
    </main>
  )
}
