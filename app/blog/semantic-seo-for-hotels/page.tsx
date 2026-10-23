import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/semantic-seo-for-hotels',
  },
  title: 'Semantic SEO for Hotels: Be Found for Meaning | BookedUp Africa',
  description:
    'Guests no longer search in exact keywords. Learn how Kenyan hotels get found for what guests mean, on Google, voice search and AI assistants.',
  keywords: 'semantic SEO for hotels, hotel SEO Kenya, AI search hotels, hotel content strategy, search intent hotels',
}

export default function SemanticSeoForHotels() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> / Semantic SEO for Hotels
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Semantic SEO for Hotels: Be Found for What Guests Mean</h1>
          <p className="text-xl text-text-gray mb-6">
            A guest in Nairobi types &ldquo;lodge near Hell&apos;s Gate&rdquo;. Another asks her phone, &ldquo;where can we
            stay in Naivasha for a quiet weekend?&rdquo; Same guest need, different words. Is your website ready for both?
          </p>
          <p className="text-sm text-text-gray">By Jo Mogere, BookedUp Africa</p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#what-it-means" className="text-orange-500 hover:text-orange-400">What &ldquo;Semantic&rdquo; Actually Means</Link></li>
            <li><Link href="#then-and-now" className="text-orange-500 hover:text-orange-400">How Search Used to Work, and How It Works Now</Link></li>
            <li>
              <Link href="#what-to-do" className="text-orange-500 hover:text-orange-400">Four Things To Do on Your Website</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li>(i). Write for the guest&apos;s need, not one phrase</li>
                <li>(ii). Connect your hotel to the places around it</li>
                <li>(iii). Answer the questions guests really ask</li>
                <li>(iv). Keep your details the same everywhere</li>
              </ul>
            </li>
            <li><Link href="#before-after" className="text-orange-500 hover:text-orange-400">A Before and After</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="what-it-means">
            <h2 className="text-3xl font-bold text-white">What &ldquo;Semantic&rdquo; Actually Means</h2>
            <p>
              &ldquo;Semantic&rdquo; just means &ldquo;about meaning&rdquo;. Semantic SEO is writing your website so search
              engines understand what your hotel is, where it is and who it is for, instead of only matching the exact words
              someone typed.
            </p>
            <p>
              Think about how a good receptionist works. A guest says, &ldquo;somewhere quiet near the lake, not too
              expensive.&rdquo; A good receptionist does not look for the word &ldquo;quiet&rdquo; on a list. She understands
              what the guest wants and points them to the right room. Google and AI assistants now try to do the same thing
              with your website.
            </p>
          </div>

          <div id="then-and-now">
            <h2 className="text-3xl font-bold text-white">How Search Used to Work, and How It Works Now</h2>
            <p>
              Not long ago, you could rank by repeating a phrase. &ldquo;Hotel in Naivasha. Best hotel in Naivasha. Cheap hotel
              in Naivasha.&rdquo; Pages like that worked for a while. Do they work now? Not really, and guests find them
              annoying to read anyway.
            </p>
            <p>
              Today, search tools connect the dots. They know &ldquo;lodge near Hell&apos;s Gate&rdquo;, &ldquo;malazi karibu na
              Naivasha&rdquo; and &ldquo;where to stay for a weekend at the lake&rdquo; are all the same kind of search. They also
              know that Hell&apos;s Gate, Lake Naivasha and Mt Longonot are places people visit together. If your website clearly
              describes where you are and what is around you, your hotel gets connected to all of those searches.
            </p>
            <p>
              This matters more every month, because guests now ask AI assistants full questions in normal language. We talk
              about that shift on the{' '}
              <Link href="/#search-has-changed" className="text-orange-500 hover:text-orange-400 underline">homepage</Link>,
              and it is why hotels that explain themselves well are the ones being mentioned.
            </p>
          </div>

          <div id="what-to-do">
            <h2 className="text-3xl font-bold text-white">Four Things To Do on Your Website</h2>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(i). Write for the guest&apos;s need, not one phrase</h3>
            <p>
              Ask what the guest is really trying to do. A couple wants a quiet weekend. A family wants space for children. A
              company wants a venue for a team retreat. Write a clear section for each. You will naturally use all the words
              they would search with, without stuffing anything.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(ii). Connect your hotel to the places around it</h3>
            <p>
              Name the real places guests care about and say how far they are. &ldquo;Fifteen minutes from the Hell&apos;s Gate
              gate&rdquo; tells guests and search engines far more than &ldquo;perfectly located&rdquo;. Add the lake, the
              restaurants, the viewpoints and the things you recommend. This is exactly what{' '}
              <Link href="/guides/experiential-marketing/local-partnerships" className="text-orange-500 hover:text-orange-400 underline">
                local partnerships
              </Link>{' '}
              give you: real places to mention that are genuinely connected to your stay.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iii). Answer the questions guests really ask</h3>
            <p>
              Is there parking? Can we bring children? How far is the gate? What time is check-in? Put the real answers on the
              page. AI assistants pick answers up from pages that state them plainly. Your{' '}
              <Link href="/blog/google-business-profile-hotels" className="text-orange-500 hover:text-orange-400 underline">
                Google Business Profile
              </Link>{' '}
              has a questions-and-answers area for exactly this, so fill it in too.
            </p>

            <h3 className="text-xl font-bold text-orange-500 mt-6">(iv). Keep your details the same everywhere</h3>
            <p>
              Your name, address, phone number and opening details should match on your website, Google, Facebook and booking
              sites. When the details disagree, search engines are less sure the places are the same hotel. We cover this in
              the guide to{' '}
              <Link href="/guides/local-seo-hotels/nap-consistency" className="text-orange-500 hover:text-orange-400 underline">
                keeping your hotel details consistent
              </Link>
              .
            </p>
          </div>

          <div id="before-after">
            <h2 className="text-3xl font-bold text-white">A Before and After</h2>
            <p><strong className="text-white">Before:</strong></p>
            <p>
              &ldquo;Welcome to our hotel in Naivasha. We are the best hotel in Naivasha with cheap rooms and great service.&rdquo;
            </p>
            <p><strong className="text-white">After:</strong></p>
            <p>
              &ldquo;We are a quiet lodge on the Naivasha side of the lake, a short drive from the Hell&apos;s Gate gate. Guests
              usually cycle through the gorge in the morning, come back for lunch and watch the sun go down over the water. We
              have family rooms, free parking and a kitchen that can pack a picnic for the park.&rdquo;
            </p>
            <p>
              The second version is better for guests and for search. It names the place, the activity, the type of guest and
              the practical details. There is no phrase repeated, yet it matches far more of the ways people ask. (Use your own
              real details, of course. These are examples.)
            </p>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              Search is moving from &ldquo;match the words&rdquo; to &ldquo;understand the guest&rdquo;. Hotels that explain who
              they are, where they are and who they are for will be found by more of the guests they actually want.
            </p>
            <p>
              Nothing here needs a developer or a big budget. It needs honest, specific writing about your own place. If you
              would like us to check how clearly your website explains your hotel, the{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-400 underline">free audit</Link> is the place to
              start. And if you are still deciding who should help,{' '}
              <Link href="/blog/how-to-choose-a-hotel-marketing-agency-kenya" className="text-orange-500 hover:text-orange-400 underline">
                this guide to choosing a hotel marketing agency in Kenya
              </Link>{' '}
              may help.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO for Hotels: Full Guide</h3>
            </Link>
            <Link href="/blog/ai-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">AI for Hotels: Where It Actually Helps</h3>
            </Link>
            <Link href="/blog/hotel-website-design-seo" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Hotel Website Design and SEO</h3>
            </Link>
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Does Your Website Explain Your Hotel Clearly?</h2>
          <p className="text-text-gray mb-6">We will read your website the way a search engine does and tell you plainly what it understands about your hotel.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Article',
                headline: 'Semantic SEO for Hotels: Be Found for What Guests Mean',
                description:
                  'How Kenyan hotels get found for what guests mean on Google, voice search and AI assistants.',
                author: { '@id': `${SITE_URL}/#founder` },
                publisher: { '@id': `${SITE_URL}/#organization` },
                dateModified: '2026-10-23',
                mainEntityOfPage: `${SITE_URL}/blog/semantic-seo-for-hotels`,
                about: [{ '@type': 'Thing', name: 'Semantic search' }, { '@type': 'Thing', name: 'Search engine optimization' }],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE_URL}/blog` },
                  { '@type': 'ListItem', position: 2, name: 'Semantic SEO for Hotels', item: `${SITE_URL}/blog/semantic-seo-for-hotels` },
                ],
              },
            ],
          }),
        }}
      />
    </article>
  )
}
