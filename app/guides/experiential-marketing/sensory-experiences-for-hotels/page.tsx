import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/guides/experiential-marketing/sensory-experiences-for-hotels',
  },
  title: 'Sensory Experiences for Hotels: Five Senses Guide | BookedUp Africa',
  description:
    'How Kenyan hotels can shape what guests see, hear, smell, touch and taste, so the stay is remembered and talked about.',
  keywords: 'sensory experiences hotels, hotel guest experience Kenya, memorable hotel stay, five senses hospitality',
}

const SENSES = [
  {
    id: 'sight',
    title: 'Sight: What Guests See First',
    intro: 'Guests decide how they feel about your place within the first minute. Most of that is what they see.',
    points: [
      'Use light on purpose. Bright and open in the morning, warm and soft in the evening. A lamp in the corner beats a harsh ceiling light.',
      'Show where you are. Local art, woven baskets and fabrics from the area say "this is Naivasha" or "this is Diani" far better than the same prints you would find in any hotel.',
      'Frame the view. A chair placed facing the lake, the escarpment or the garden turns an ordinary corner into the photo guests post.',
    ],
  },
  {
    id: 'sound',
    title: 'Sound: What Guests Hear',
    intro: 'In the places guests come to escape from, the quiet is a feature. Protect it.',
    points: [
      'Let the place speak. Birdsong in the morning, the lake at night. Do not cover it with loud music in the restaurant garden.',
      'Choose music by area. Something lively at the bar, something soft at breakfast, nothing at all by the rooms.',
      'Cut the noise you can control: doors that do not slam, a generator that is out of earshot, staff who talk quietly at night.',
    ],
  },
  {
    id: 'smell',
    title: 'Smell: What Guests Notice Without Thinking',
    intro: 'Smell is tied closely to memory. Guests may not say why, but they remember how a place smelled.',
    points: [
      'Start with clean. Fresh air and fresh linen come before any scent. A strong smell of cleaning chemicals loses trust fast.',
      'Use what is already yours: woodsmoke from the fire, coffee at breakfast, rain on dry ground, cut grass after the gardener has been.',
      'If you add a scent, keep it light and the same every time, so it becomes part of your hotel.',
    ],
  },
  {
    id: 'touch',
    title: 'Touch: What Guests Feel',
    intro: 'A guest spends most of the stay touching your bed, towels and chairs. Comfort here is what turns into five-star reviews.',
    points: [
      'Spend on the bed first: good sheets, a choice of pillows, a warm blanket for cold nights.',
      'Add texture that belongs to the place: a kikoi or kanga throw, a wooden chair, a heavy ceramic mug.',
      'Make hot showers and good water pressure a promise you keep. Guests remember when they fail.',
    ],
  },
  {
    id: 'taste',
    title: 'Taste: The Welcome Guests Talk About',
    intro: 'Taste is the quickest way to make a guest feel looked after, and the quickest way to tie them to the place.',
    points: [
      'Greet guests with something local and cold or hot, depending on the weather: fresh juice, spiced tea or a pot of Kenyan coffee.',
      'Serve the region. If the farm next door grows it, put it on the plate and say where it came from.',
      'Leave something small at turndown: fruit, a local sweet, a flask of tea. It costs little and guests mention it.',
    ],
  },
]

export default function SensoryExperiencesPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <Link href="/guides/experiential-marketing" className="hover:text-white transition-colors">Experiential Marketing</Link>
          <span className="mx-2">/</span>
          <span>Sensory Experiences</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sensory Experiences for Hotels: Five Senses, One Memorable Stay</h1>
          <p className="text-lg text-text-gray">
            Guests forget a list of amenities. They remember how the place felt. Here is how to shape that on purpose.
          </p>
          <p className="text-sm text-text-gray mt-4">By Jo Mogere, BookedUp Africa</p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><a href="#why" className="text-orange-500 hover:text-orange-400">Why This Belongs in Your Marketing</a></li>
            {SENSES.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-orange-500 hover:text-orange-400">{s.title}</a></li>
            ))}
            <li><a href="#walk-through" className="text-orange-500 hover:text-orange-400">Walk Through Your Hotel Like a Guest</a></li>
            <li><a href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</a></li>
          </ul>
        </nav>

        <div className="space-y-12">
          <section id="why">
            <h2 className="text-3xl font-bold mb-4">Why This Belongs in Your Marketing</h2>
            <p className="text-text-gray mb-4">
              When guests write reviews, they rarely list your amenities. They write about how it felt: &ldquo;so peaceful&rdquo;,
              &ldquo;the best bed&rdquo;, &ldquo;that welcome tea&rdquo;. Those words are what the next guest reads on Google
              before booking, so the senses are not a luxury extra. They are where your reviews, your photos and your word of
              mouth come from.
            </p>
            <p className="text-text-gray">
              It also gives you something real to show. Photos of the lamp-lit terrace, a short video of the morning coffee
              being poured and a post about the fruit left at turndown tell a story a list of room features never can. We
              cover how to turn those moments into content in{' '}
              <Link href="/guides/experiential-marketing/turning-moments-into-content" className="text-orange-500 hover:text-orange-400 underline">
                turning moments into content
              </Link>
              .
            </p>
          </section>

          {SENSES.map((s) => (
            <section key={s.id} id={s.id}>
              <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
              <p className="text-text-gray mb-4">{s.intro}</p>
              <ul className="space-y-3 text-text-gray">
                {s.points.map((p, i) => (
                  <li key={i}>
                    <span className="text-orange-500 font-semibold mr-2">({['i', 'ii', 'iii'][i]}).</span>
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section id="walk-through" className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Walk Through Your Hotel Like a Guest</h2>
            <p className="text-text-gray mb-4">
              Once a quarter, arrive the way a guest does. Start at the gate and go slowly to the room, the restaurant and the
              pool, and ask five quick questions at each stop:
            </p>
            <ul className="space-y-2 text-text-gray">
              <li>(i). What do I see? Is anything broken, cluttered or ordinary?</li>
              <li>(ii). What do I hear? Is it the place, or just noise?</li>
              <li>(iii). What do I smell? Is it fresh?</li>
              <li>(iv). What do I touch? Is it comfortable and in good condition?</li>
              <li>(v). What do I taste? Would I tell a friend about it?</li>
            </ul>
            <p className="text-text-gray mt-4">
              Fix the small things first. One thing done well, like the welcome drink, beats five things done halfway. And do
              not overdo it. A place with too much scent, music and decoration feels loud, and guests come to rest.
            </p>
          </section>

          <section id="final-thoughts">
            <h2 className="text-3xl font-bold mb-4">Final Thoughts</h2>
            <p className="text-text-gray mb-4">
              You do not need a big budget to do this. You need to notice your own place the way a first-time guest does, then
              improve the small things that guests feel but rarely say. They end up in reviews, and good reviews are what bring
              guests to book direct. See{' '}
              <Link href="/guides/local-seo-hotels/generate-hotel-reviews" className="text-orange-500 hover:text-orange-400 underline">
                how to get more hotel reviews
              </Link>{' '}
              and{' '}
              <Link href="/guides/experiential-marketing/telling-your-story" className="text-orange-500 hover:text-orange-400 underline">
                how to tell your property&apos;s story
              </Link>{' '}
              for what comes next.
            </p>
            <p className="text-text-gray">
              Want a second pair of eyes? Our{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-400 underline">free audit</Link>{' '}
              includes what your guests are already saying about how your hotel feels.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <Link href="/guides/experiential-marketing" className="text-orange-500 hover:text-orange-400 font-bold">
              ← Return to Experiential Marketing Guide
            </Link>
          </section>
        </div>
      </article>
    </main>
  )
}
