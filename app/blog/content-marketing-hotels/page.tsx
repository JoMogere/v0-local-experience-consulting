import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing for Hotels | BookedUp Africa',
  description: 'Strategic content marketing to build authority, engage guests, and drive bookings.',
  keywords: 'content marketing hotels, hotel blogging, video marketing, social media hotels',
}

export default function ContentMarketingPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><a href="/blog" className="hover:text-orange-500">Blog</a> / Content Marketing</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Content Marketing for Hotels</h1>
          <p className="text-xl text-text-gray mb-6">Build authority and drive bookings through strategic, guest-focused content.</p>
        </header>

        <section className="prose prose-invert max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold">The Power of Hotel Content</h2>
            <p>Content is how you attract, engage, and convert potential guests at every stage of their journey.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Blog posts rank for long-tail keywords</li>
              <li>Video content increases engagement</li>
              <li>Social media builds community</li>
              <li>Email nurtures relationships</li>
              <li>User-generated content builds trust</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Blog Strategy for Hotels</h2>
            <p>Create content that answers guest questions and positions your hotel as a local authority.</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Destination guides</li>
              <li>Things to do locally</li>
              <li>Travel tips and advice</li>
              <li>Seasonal recommendations</li>
              <li>Behind-the-scenes stories</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Video Marketing</h2>
            <p>Video is the most engaging content format for hospitality:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li>Property tours and walk-throughs</li>
              <li>Guest testimonials</li>
              <li>Local area guides</li>
              <li>Event coverage</li>
              <li>Staff introductions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Social Media Strategy</h2>
            <p>Use different platforms strategically:</p>
            <ul className="list-disc list-inside space-y-2 text-text-gray">
              <li><strong>Instagram:</strong> Visual storytelling and experiences</li>
              <li><strong>Facebook:</strong> Community building and engagement</li>
              <li><strong>LinkedIn:</strong> B2B partnerships and corporate stays</li>
              <li><strong>TikTok:</strong> Behind-the-scenes and trending content</li>
            </ul>
          </div>
        </section>
      </div>
    </article>
  )
}
