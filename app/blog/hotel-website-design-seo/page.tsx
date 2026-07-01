import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Website Design & SEO | BookedUp Africa',
  description: 'Build hotel websites that rank in search engines and convert visitors into guests.',
  keywords: 'hotel website design, hotel web SEO, website structure, mobile booking',
}

export default function WebsitePillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><a href="/blog" className="hover:text-orange-500">Blog</a> / Hotel Websites</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hotel Website Design & SEO</h1>
          <p className="text-xl text-text-gray mb-6">Create a website that ranks, engages, and converts guests into bookings.</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold">Core Web Vitals for Hotels</h2>
            <p>Google prioritizes websites that load fast and work smoothly:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li><strong>LCP (Largest Contentful Paint):</strong> &lt;2.5 seconds</li>
              <li><strong>FID (First Input Delay):</strong> &lt;100ms</li>
              <li><strong>CLS (Cumulative Layout Shift):</strong> &lt;0.1</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Homepage Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Clear value proposition above the fold</li>
              <li>High-quality hero image or video</li>
              <li>Easy booking widget</li>
              <li>Guest testimonials</li>
              <li>Unique experiences/amenities</li>
              <li>Local area highlights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Navigation Structure</h2>
            <p>Intuitive navigation helps guests find information and Google understands your site:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Homepage</li>
              <li>Rooms & Suites</li>
              <li>Amenities & Facilities</li>
              <li>Dining</li>
              <li>Location & Directions</li>
              <li>Things to Do</li>
              <li>Packages & Special Offers</li>
              <li>Contact & Reservations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Internal Linking Strategy</h2>
            <p>Internal links distribute authority and help Google understand relationships between pages:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Link from homepage to key pages</li>
              <li>Link room pages to relevant amenities</li>
              <li>Link packages to rooms and experiences</li>
              <li>Link blog posts to service pages</li>
              <li>Use descriptive anchor text</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Schema Markup</h2>
            <p>Help Google understand your content with structured data:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Hotel schema with property details</li>
              <li>Room schema for room types</li>
              <li>LocalBusiness schema</li>
              <li>Review and AggregateRating</li>
              <li>Breadcrumb navigation</li>
              <li>FAQ schema</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}
