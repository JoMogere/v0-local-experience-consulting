import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar/experiential-marketing/telling-your-story',
  },
  title: 'Telling Your Property\'s Story | BookedUp Africa',
  description: 'How to find and tell the story that makes your property memorable, instead of sounding like every other listing.',
  keywords: 'hotel branding story, hospitality storytelling, hotel differentiation Kenya',
}

export default function TellingYourStoryPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar/experiential-marketing" className="hover:text-white transition-colors">Experiential Marketing</Link>
          <span className="mx-2">/</span>
          <span>Telling Your Story</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Telling Your Property's Story</h1>
          <p className="text-lg text-text-gray">Every property has a story. Most just aren't telling it.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">"Luxury" Is a Word Everyone Uses</h2>
            <p className="text-text-gray mb-6">
              Scroll through ten hotel websites in the same area and you'll see the same words over and over — luxury, stunning, unforgettable. None of it actually tells a guest anything specific. A real story does what a generic adjective never can: it makes you the only option that fits.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Finding Your Actual Story</h2>
            <p className="text-text-gray mb-4">A few honest questions to sit with:</p>
            <ul className="text-text-gray space-y-3 ml-4">
              <li>• Why did this property start, and who started it?</li>
              <li>• What's true about your location that's genuinely true nowhere else nearby?</li>
              <li>• What do guests mention in reviews, unprompted, again and again?</li>
              <li>• What would your staff tell a friend about working here?</li>
            </ul>
            <p className="text-text-gray mt-4">
              That third question is often the most useful one — guests tend to notice things the owners have stopped seeing, simply because it's become normal to them.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Where Your Story Should Actually Show Up</h2>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Your Homepage</h3>
                <p className="text-text-gray text-sm">Within the first few seconds, before a visitor scrolls, they should get a sense of what makes you different — not just a list of amenities.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">Your Social Media Bio and Posts</h3>
                <p className="text-text-gray text-sm">A consistent voice and theme, not a random mix of amenity photos with no thread connecting them.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold text-orange-500 mb-3">What Your Staff Says to Guests</h3>
                <p className="text-text-gray text-sm">If your team can tell the story too, in their own words, guests hear it twice — once online, once in person. That's when it actually sticks.</p>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <a href="/pillar/experiential-marketing" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Experiential Marketing Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
