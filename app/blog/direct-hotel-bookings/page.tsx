import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Direct Hotel Bookings | BookedUp Africa',
  description: 'Reduce OTA dependency and increase direct bookings through optimized websites and conversion strategies.',
  keywords: 'direct hotel bookings, booking funnel, OTA vs direct, conversion rate optimization hotels',
}

export default function DirectBookingsPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><a href="/blog" className="hover:text-orange-500">Blog</a> / Direct Bookings</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Increase Direct Hotel Bookings</h1>
          <p className="text-xl text-text-gray mb-6">Reduce OTA dependence and maximize revenue with direct booking optimization.</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold">The Direct Booking Advantage</h2>
            <p>Every booking through OTAs costs you 15-30% in commissions. Direct bookings let you keep 100% of revenue.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Higher profit margins</li>
              <li>Direct guest relationships</li>
              <li>Better data and insights</li>
              <li>Flexibility in pricing and offers</li>
              <li>Lower customer acquisition cost</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">OTA vs Direct Bookings</h2>
            <p>Why guests book OTAs vs your website:</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-orange-500">OTA Advantages (to guests)</h4>
                <ul className="text-sm text-text-gray list-disc list-inside">
                  <li>Price comparison</li>
                  <li>Aggregated reviews</li>
                  <li>Easy cancellation policies</li>
                  <li>Loyalty programs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange-500">Your Advantages</h4>
                <ul className="text-sm text-text-gray list-disc list-inside">
                  <li>Better rates (price parity)</li>
                  <li>Personalized service</li>
                  <li>Exclusive experiences</li>
                  <li>Direct communication</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Optimizing Your Booking Funnel</h2>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li><strong>Discovery:</strong> Rank for local searches and drive traffic</li>
              <li><strong>Awareness:</strong> Clear messaging about your unique value</li>
              <li><strong>Consideration:</strong> High-quality photos and guest reviews</li>
              <li><strong>Decision:</strong> Easy booking process with trust signals</li>
              <li><strong>Action:</strong> Seamless checkout experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Website Optimization</h2>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Mobile-first design</li>
              <li>Fast loading speeds</li>
              <li>Clear CTA buttons</li>
              <li>Trust badges and security signals</li>
              <li>Guest testimonials and reviews</li>
              <li>Live chat support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Booking Engine Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Simple search interface</li>
              <li>Real-time availability</li>
              <li>Multiple payment options</li>
              <li>Guest account creation optional</li>
              <li>Booking confirmation via email</li>
              <li>Pre-arrival communication</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}
