'use client'

export default function GenerateHotelReviewsPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Generate Hotel Reviews: The Proven System for African Properties</h1>
          <p className="text-lg text-text-gray">Systematic approach to ethically generate authentic reviews that improve both local SEO rankings and guest satisfaction.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Why Hotel Reviews Matter for SEO</h2>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-6">
              <p className="text-text-gray">Hotels with 50+ reviews rank 3x higher than hotels with 10 reviews. More reviews + higher ratings = higher rankings. It's that simple.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">The Review Generation System</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-4">Timeline for Requesting Reviews</h3>
                <div className="space-y-3">
                  <div><strong className="text-white">During Check-In:</strong><span className="text-text-gray"> Brief verbal mention that reviews help small businesses</span></div>
                  <div><strong className="text-white">Day of Checkout:</strong><span className="text-text-gray"> Leave a card in room with QR code to review</span></div>
                  <div><strong className="text-white">4 Hours After Checkout:</strong><span className="text-text-gray"> Send email with review link</span></div>
                  <div><strong className="text-white">Day 3:</strong><span className="text-text-gray"> Follow-up email if no review left</span></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-4">Email Template for Reviews</h3>
                <div className="bg-white/5 p-4 rounded text-text-gray text-sm italic">
                  Subject: Help us improve [Hotel Name] - Your feedback matters

                  Hi [Guest Name],

                  Thank you for choosing [Hotel Name]! We loved having you stay with us [dates]. Your feedback helps us serve future guests better and helps small hospitality businesses like ours appear when travelers search for accommodations in [city].

                  Would you have 30 seconds to share your experience? Click here: [Google Review Link]

                  Best regards,
                  [Manager Name]
                  [Hotel Name]
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Responding to Reviews</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-orange-500 mb-4">Response Time Matters</h3>
              <p className="text-text-gray mb-4">Every review deserves a response within 24 hours. This signals to Google that you're actively managing your reputation.</p>
              
              <div className="bg-white/5 p-4 rounded">
                <p className="text-text-gray text-sm mb-3"><strong>Response to 5-Star Review:</strong></p>
                <p className="text-text-gray text-sm italic">"Thank you so much for the wonderful review! We're thrilled you enjoyed [specific mention: the view from the balcony, our restaurant, etc.]. We hope to welcome you back soon!"</p>
              </div>

              <div className="bg-white/5 p-4 rounded mt-4">
                <p className="text-text-gray text-sm mb-3"><strong>Response to 1-2 Star Review:</strong></p>
                <p className="text-text-gray text-sm italic">"Thank you for your feedback about [specific issue]. We sincerely apologize for this experience. This is not our standard. Please contact me directly at [email] so we can make this right."</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Top Review Platforms for African Hotels</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold text-orange-500 mb-2">Priority 1 (Critical)</h3>
                <ul className="text-text-gray text-sm space-y-1">
                  <li>• Google Reviews</li>
                  <li>• TripAdvisor</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h3 className="font-bold text-orange-500 mb-2">Priority 2 (Important)</h3>
                <ul className="text-text-gray text-sm space-y-1">
                  <li>• Booking.com</li>
                  <li>• Expedia</li>
                </ul>
              </div>
            </div>
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
