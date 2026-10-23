import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/content-marketing-hotels',
  },
  title: "Content Marketing for Hotels: What Actually Gets Read",
  description: "Content marketing for hotels that guests actually find: blog, video and social media built around what travellers search for, not a generic calendar.",
  keywords: 'content marketing hotels, content marketing hotel, hotel content, hotel blogging, video marketing, social media hotels',
}

export default function ContentMarketingPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Content Marketing</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Content Marketing for Hotels: What Actually Gets Read</h1>
          <p className="text-xl text-text-gray mb-6">
            Most hotel blogs get written for search engines and read by nobody. Here's how to fix that.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#why-content" className="text-orange-500 hover:text-orange-400">Why Content Actually Matters Here</Link></li>
            <li><Link href="#blog" className="text-orange-500 hover:text-orange-400">Blog Strategy That Isn't Generic</Link></li>
            <li><Link href="#kenya-topics" className="text-orange-500 hover:text-orange-400">Article Ideas Kenyan Guests Actually Search For</Link></li>
            <li><Link href="#video" className="text-orange-500 hover:text-orange-400">Video: The Highest-Engagement Format</Link></li>
            <li><Link href="#social" className="text-orange-500 hover:text-orange-400">Social Media, Platform by Platform</Link></li>
            <li><Link href="#rhythm" className="text-orange-500 hover:text-orange-400">A Simple Publishing Routine</Link></li>
            <li><Link href="#faq" className="text-orange-500 hover:text-orange-400">Frequently Asked Questions</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="why-content">
            <h2 className="text-3xl font-bold text-white">Why Content Actually Matters Here</h2>
            <p>Content isn't a nice-to-have marketing extra — it's how a guest who's never heard of your property finds you, trusts you, and eventually books you. Each format does a different part of that job:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Blog posts capture the long-tail searches — the specific questions a guest types before they've picked a hotel</li>
              <li>Video gets watched further and shared more than any other format in hospitality</li>
              <li>Social builds the audience that comes back before they even search</li>
              <li>Guest-generated content (reviews, tagged photos) carries more trust than anything you write yourself</li>
            </ul>
          </div>

          <div id="blog">
            <h2 className="text-3xl font-bold text-white">Blog Strategy That Isn't Generic</h2>
            <p>
              The test for any blog topic: would a guest actually search for this before booking? If the honest answer is no, it's filler. Topics that pass the test:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>What's actually within walking or short driving distance, and how long it takes to get there</li>
              <li>Practical travel logistics specific to your location — not generic "10 tips for travelers" content</li>
              <li>Seasonal timing — when to visit for what, and why it matters for their trip</li>
            </ul>
          </div>

          <div id="kenya-topics">
            <h2 className="text-3xl font-bold text-white">Article Ideas Kenyan Guests Actually Search For</h2>
            <p>
              Guests don't search for your marketing. They search for answers to the practical questions that stand between them and a booking. For hotels and lodges in Kenya, these tend to work well:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">How to get here:</strong> the route from Nairobi or the nearest airport, honest drive times, and road conditions in the wet and dry seasons</li>
              <li><strong className="text-white">When to visit:</strong> what each season is like at your location. The long rains fall roughly March to May and the short rains around October to December, but your area's pattern is what matters</li>
              <li><strong className="text-white">Weekend getaways from Nairobi:</strong> a page for the domestic market, who it suits, and what a two-night stay looks like</li>
              <li><strong className="text-white">What's included in the price:</strong> meals, activities and park or conservancy fees, shown in KES so guests aren't left guessing</li>
              <li><strong className="text-white">Group and corporate stays:</strong> conference space, team-building options and what you can host</li>
              <li><strong className="text-white">Things to do nearby:</strong> real distances and times, written from the point of view of someone who lives there</li>
            </ul>
            <p className="mt-4">
              Put the answer in the first paragraph, include details only you would know, and finish by pointing the reader to your{' '}
              <Link href="/blog/direct-hotel-bookings" className="text-orange-500 hover:text-orange-400">direct booking page</Link>. If you can't think of a topic, check your{' '}
              <Link href="/blog/google-business-profile-hotels" className="text-orange-500 hover:text-orange-400">Google Business Profile</Link> search queries, because they show what real guests typed to find you.
            </p>
          </div>

          <div id="video">
            <h2 className="text-3xl font-bold text-white">Video: The Highest-Engagement Format</h2>
            <p>If you only have budget for one content format, this is usually it:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>An honest property walkthrough — not an overproduced ad, guests can tell the difference</li>
              <li>Real guest reactions, not scripted testimonials</li>
              <li>Local area guides shot on location, not stock footage</li>
            </ul>
          </div>

          <div id="social">
            <h2 className="text-3xl font-bold text-white">Social Media, Platform by Platform</h2>
            <p>Each platform does a different job — posting the same content everywhere wastes the format:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Instagram:</strong> Visual storytelling — the experience, not the amenities</li>
              <li><strong className="text-white">Facebook:</strong> Community and local engagement, especially for repeat/local guests</li>
              <li><strong className="text-white">LinkedIn:</strong> Corporate stays and B2B partnerships specifically</li>
              <li><strong className="text-white">TikTok:</strong> Behind-the-scenes and real moments — polish actually underperforms here</li>
            </ul>
          </div>

          <div id="rhythm">
            <h2 className="text-3xl font-bold text-white">A Simple Publishing Routine</h2>
            <p>A small, steady routine beats a burst of posts followed by months of silence:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Publish one or two useful articles a month rather than a rushed weekly post</li>
              <li>Start each one from a real question your front desk, WhatsApp or booking inbox received</li>
              <li>Once a quarter, update your older articles with current prices, seasons and photos</li>
              <li>Link every new article to your booking page and to related guides on your site</li>
              <li>Check Google Search Console monthly to see which searches already show your pages, and write more on those topics</li>
            </ul>
          </div>

          <div id="faq">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-white mt-6">Does my hotel really need a blog?</h3>
            <p>If you want guests to find you before they've chosen a hotel, yes. Social posts disappear from view quickly, while a good article can bring in guests through search for a long time.</p>

            <h3 className="text-xl font-semibold text-white mt-6">How often should a hotel publish?</h3>
            <p>Consistency matters more than volume. One or two genuinely useful articles a month is a realistic pace for most properties and beats a flurry of thin posts.</p>

            <h3 className="text-xl font-semibold text-white mt-6">How long should an article be?</h3>
            <p>Long enough to fully answer the question, and no longer. A clear page that answers one question well does better than padding added to hit a word count.</p>

            <h3 className="text-xl font-semibold text-white mt-6">Should I write for local or international guests?</h3>
            <p>Both, on separate pages. Domestic guests ask about weekend trips, prices in KES and group stays. International guests ask about getting there, safety and the best season, so each deserves its own answer.</p>

            <h3 className="text-xl font-semibold text-white mt-6">How do I know if my content is working?</h3>
            <p>Watch three things: impressions and clicks in Google Search Console, booking link clicks on your Google Business Profile, and the number of direct enquiries that mention reading your content.</p>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              The hotels that win at content aren't the ones posting the most — they're the ones whose content answers a real question a real guest had before booking. Quality and relevance beat volume every time.
            </p>
            <p>
              Start with the questions your front desk actually gets asked. That list is usually a better content calendar than anything a generic template will give you.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/local-seo-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO for Hotels</h3>
            </Link>
            <Link href="/case-studies" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Hotel Case Studies: Real Results</h3>
            </Link>
            <Link href="/book-demo" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Book a Demo & Get a Quote</h3>
            </Link>
            <Link href="/blog/experiential-marketing-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Experiential Marketing for Hotels</h3>
            </Link>
            <Link href="/blog/google-business-profile-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Google Business Profile Setup Guide</h3>
            </Link>
            <Link href="/guides/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO: In-Depth Guide</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Content Strategy That Fits Your Property?</h2>
          <p className="text-text-gray mb-6">We build content plans around what your guests are actually searching for.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
          <p className="mt-4 text-sm text-text-gray">
            Prefer to talk it through? <Link href="/book-demo" className="text-orange-500 hover:underline">Book a free demo and get a quote</Link>.
          </p>
        </section>
      </div>
    </article>
  )
}
