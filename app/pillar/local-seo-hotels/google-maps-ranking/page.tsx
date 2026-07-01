'use client'

export default function GoogleMapsRankingPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Rank Higher in Google Maps: The Complete Strategy for Hotels</h1>
          <p className="text-lg text-text-gray">Master the ranking factors that matter and dominate Google Maps search results for your location.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Understanding Google Maps Ranking Factors</h2>
            <p className="text-text-gray mb-6">Google uses three primary factors to rank hotels in Google Maps: Relevance, Distance, and Prominence. Understanding each is crucial.</p>
            
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-400 mb-3">The Three Pillars of Google Maps Ranking</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold mb-2">1. Relevance (30%)</h4>
                  <p className="text-text-gray text-sm">How well your business profile matches the search query. "Luxury resort" vs "budget hotel" matters.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold mb-2">2. Distance (30%)</h4>
                  <p className="text-text-gray text-sm">Physical proximity to the searcher. A hotel 5km away ranks higher than 50km away if other factors are equal.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-bold mb-2">3. Prominence (40%)</h4>
                  <p className="text-text-gray text-sm">Your business reputation, reviews, and web presence. This is the most heavily weighted factor.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Step-by-Step Google Maps Optimization</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Step 1: Complete Your Profile (Today)</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Verify your hotel name matches exactly</li>
                  <li>• Add precise address with coordinates</li>
                  <li>• Link to your website</li>
                  <li>• Add business phone number</li>
                  <li>• Set hours of operation</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Step 2: Add Rich Media (Week 1)</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Upload 15+ high-quality photos</li>
                  <li>• Add 360° virtual tour</li>
                  <li>• Create video tour (30 seconds)</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Step 3: Generate Reviews (Ongoing)</h3>
                <ul className="text-text-gray space-y-2 text-sm ml-4">
                  <li>• Set up automated review request emails</li>
                  <li>• Train staff to ask for reviews</li>
                  <li>• Respond to all reviews within 24 hours</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">FAQ Schema Markup</h2>
            <details className="bg-white/5 border border-white/10 rounded-lg p-6 mb-4 cursor-pointer group">
              <summary className="font-bold flex items-center justify-between">
                How often should I update my Google Maps profile?
                <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-text-gray mt-4 text-sm">At least weekly. Add new photos monthly, update hours for holidays, and respond to reviews daily.</p>
            </details>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to Pillar</h2>
            <a href="/pillar/local-seo-hotels" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Local SEO for Hotels Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
