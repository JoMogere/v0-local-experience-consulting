import { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/african-basil-uses-for-hotels',
  },
  title: 'African Basil for Hotels: Uses Beyond the Kitchen | BookedUp Africa',
  description:
    'African basil can do more for a hotel than flavour a meal. Eight practical ideas for the kitchen, the garden, guest activities and content.',
  keywords: 'African basil hotels, Ocimum gratissimum, hotel herb garden Kenya, local ingredients hotels, hotel guest experience',
}

type Section = { id: string; title: string; body: React.ReactNode[] }

const SECTIONS: Section[] = [
  {
    id: 'kitchen',
    title: '1. Use African basil in the kitchen',
    body: [
      'One of the best-known uses of African basil is as a culinary herb. Its aromatic leaves are traditionally used to flavour soups, stews, meat and fish dishes.',
      'For hotel chefs, this offers an opportunity to experiment with an ingredient that can bring a distinctive flavour to locally inspired menus.',
      'The plant can be used fresh or dried. Its leaves can also be ground into powder, which may be more convenient when a kitchen needs a stored seasoning rather than fresh leaves every day.',
      'However, dried powder and fresh leaves do not necessarily produce the same flavour. Chefs should test recipes and quantities before introducing the ingredient to a menu.',
      'Hotels can also tell the story behind an ingredient through menu descriptions, chef recommendations or food experiences that introduce guests to locally used herbs.',
    ],
  },
  {
    id: 'powder',
    title: '2. Explore African basil powder as an alternative to fresh leaves',
    body: [
      'Fresh herbs can be difficult to keep available throughout the year. Drying suitable leaves and grinding them into powder offers another way to store and use African basil.',
      'For a hotel kitchen, the powder can be tested in spice blends, marinades, sauces and other recipes where its flavour works well.',
      'The process requires care. Leaves should be correctly identified, clean and properly dried to reduce the risk of spoilage. The finished powder should be stored in a clean, dry, airtight container and checked for quality before use.',
      'This can also create an opportunity for a hotel to explore its own locally inspired seasoning blend, provided the recipe is consistent and the ingredient is handled safely.',
    ],
  },
  {
    id: 'garden',
    title: '3. Make the herb garden part of the guest experience',
    body: [
      'A hotel garden doesn’t have to be purely decorative.',
      'Where growing conditions are suitable, African basil can be included in a culinary or aromatic herb garden. Its leaves release a noticeable scent when handled, making it an interesting plant for a guided garden walk or an educational activity.',
      'Imagine a guest exploring the plants used by the kitchen, learning how certain herbs are prepared, and then discovering one of them in a meal later that day.',
      'The plant becomes part of a connected experience rather than just another item in the garden.',
      'Hotels can support this idea with simple plant labels, guided walks or small demonstrations led by someone who understands the plants and their uses.',
    ],
  },
  {
    id: 'aroma',
    title: '4. Introduce guests to its aromatic qualities',
    body: [
      'African basil contains aromatic compounds, including compounds found in its essential oil. Research has examined the composition and potential applications of these oils.',
      'For a hotel, this makes the plant interesting from a sensory and educational perspective. Its natural aroma can be introduced through a garden experience or a demonstration of how aromatic leaves are used.',
      'This does not mean that simply planting African basil will scent an entire property or create a particular therapeutic effect. The aroma depends on the plant, its condition and how it is used.',
      'If a hotel wants to develop products containing extracted essential oils, it should work with qualified suppliers and appropriate formulators rather than assuming that homemade preparations are automatically safe for guests.',
    ],
  },
  {
    id: 'soaps',
    title: '5. Explore potential uses in soaps and other products',
    body: [
      'Aromatic plants and their essential oils are used in a range of commercial products, including some soaps, personal-care products and fragrances.',
      'African basil essential oil has attracted scientific and commercial interest because of its aromatic and chemical properties. This creates a possible avenue for hotels interested in locally inspired guest amenities.',
      'For example, a hotel could investigate a professionally formulated soap or other amenity that reflects its local identity.',
      'The important distinction is that using the plant itself is not the same as producing a safe, stable cosmetic. Any product intended for guests should be properly formulated, tested, labelled and compliant with applicable requirements. Hotels should not add concentrated essential oils to guest amenities without appropriate expertise.',
    ],
  },
  {
    id: 'insects',
    title: '6. Investigate its traditional insect-repellent uses carefully',
    body: [
      'African basil has a documented history of traditional use for deterring insects, and researchers have investigated the insect-repellent properties of its extracts and essential oil.',
      'This is an interesting area for further exploration, particularly for properties with gardens and outdoor guest spaces.',
      'However, the evidence for an extract or essential oil does not prove that a growing plant will reliably protect guests from mosquitoes. Results depend on the preparation, concentration, species of insect and conditions of use.',
      'Hotels should not market the plant as a proven mosquito-control solution or substitute it for established mosquito-prevention measures. Any commercial repellent application requires appropriate testing and regulatory compliance.',
    ],
  },
  {
    id: 'story',
    title: '7. Use the plant to tell a story about local ingredients',
    body: [
      'One of the most interesting opportunities for hotels is how a plant can connect several parts of the guest experience.',
      'African basil could feature in a garden tour, a culinary demonstration, a locally inspired meal or an educational post about aromatic plants.',
      'The hotel could photograph the plant growing in its garden, show how the kitchen prepares it, and explain how the ingredient fits into a particular dish or activity.',
      'This gives the marketing team something more specific to communicate than another photograph of a room or a plate of food.',
      'It can also help guests understand the thought behind the hotel’s choices and what makes its experience distinctive.',
    ],
  },
  {
    id: 'content',
    title: '8. Turn overlooked plants into content opportunities',
    body: [
      'Hotels already create content about their rooms, facilities, food and destinations. Plants such as African basil can provide another subject to explore.',
      'A property might publish a short video showing the difference between fresh leaves and powder, share a chef’s recipe, or introduce guests to the herbs growing on the grounds.',
      'The content should be based on what the hotel actually does. If the kitchen uses the herb, show that. If it grows in the garden, explain its role there. If the property develops a new activity around it, document the experience.',
      'This approach helps hotels tell more detailed stories about their property without inventing amenities or making unsupported claims.',
    ],
  },
]

export default function AfricanBasilForHotels() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> / African Basil for Hotels
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">African Basil: Uses Hotels Can Explore Beyond the Kitchen</h1>
          <p className="text-xl text-text-gray">
            When hotels think about improving the guest experience, they often look at new furniture, room upgrades,
            restaurant menus or additional facilities. But sometimes, there are opportunities growing right in the garden.
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><a href="#about" className="text-orange-500 hover:text-orange-400">What Is African Basil?</a></li>
            {SECTIONS.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-orange-500 hover:text-orange-400">{s.title}</a></li>
            ))}
            <li><a href="#start" className="text-orange-500 hover:text-orange-400">Start With One Practical Use</a></li>
          </ul>
        </nav>

        <div className="space-y-12 text-text-gray leading-relaxed">
          <section id="about" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">What Is African Basil?</h2>
            <p>
              Known scientifically as <em>Ocimum gratissimum</em>, African basil is an aromatic herb found in many tropical
              regions, including parts of Kenya. Its distinctive smell, culinary value and history of traditional use make it
              interesting for hotels looking to explore local plants in different ways.
            </p>
            <p>
              For hotels, lodges, resorts and serviced properties, the possibilities extend beyond adding fresh leaves to a
              meal. The plant can inspire ideas for the garden, sensory experiences, locally themed activities and potentially
              products made from aromatic plant materials. Here are several uses worth exploring.
            </p>
          </section>

          <section aria-label="Video" className="flex flex-col items-center">
            <div className="w-full max-w-[320px] aspect-[9/16] border border-white/10 bg-black">
              <iframe
                src="https://www.youtube.com/embed/n0r8wZuQRrs"
                title="African basil for hotels, a short video from BookedUp Africa"
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-text-gray mt-3">
              Prefer to watch? See more on our{' '}
              <Link href="/videos" className="text-orange-500 hover:text-orange-400 underline">videos page</Link>.
            </p>
          </section>

          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="space-y-4">
              <h2 className="text-3xl font-bold text-white">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.id === 'garden' && (
                <p>
                  Guests remember what they smell, touch and taste. We cover this in our guide to{' '}
                  <Link href="/guides/experiential-marketing/sensory-experiences-for-hotels" className="text-orange-500 hover:text-orange-400 underline">
                    sensory experiences for hotels
                  </Link>
                  .
                </p>
              )}
              {s.id === 'story' && (
                <p>
                  A plant is also a good way to show guests what is local to you. See how to{' '}
                  <Link href="/guides/experiential-marketing/telling-your-story" className="text-orange-500 hover:text-orange-400 underline">
                    tell your property&apos;s story
                  </Link>{' '}
                  and work with{' '}
                  <Link href="/guides/experiential-marketing/local-partnerships" className="text-orange-500 hover:text-orange-400 underline">
                    local partners
                  </Link>
                  .
                </p>
              )}
              {s.id === 'content' && (
                <p>
                  Not sure how to film or post these moments? Start with{' '}
                  <Link href="/guides/experiential-marketing/turning-moments-into-content" className="text-orange-500 hover:text-orange-400 underline">
                    turning moments into content
                  </Link>
                  .
                </p>
              )}
            </section>
          ))}

          <section id="start" className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Start With One Practical Use</h2>
            <p>
              Hotels don&apos;t need to turn African basil into a new product line or build an entire activity around it.
            </p>
            <p>
              Start by identifying the plant correctly and deciding which use fits the property. A chef might begin by
              testing it in a recipe. A garden team might explore growing it in a suitable location. A marketing team might
              document an existing culinary or garden experience.
            </p>
            <p>
              The plant&apos;s potential depends on the hotel&apos;s setting, available expertise and what guests would
              genuinely value.
            </p>
            <p>
              African basil is a reminder that local plants can offer more than one kind of value. They can be culinary
              ingredients, aromatic garden plants, subjects for cultural learning and starting points for distinctive guest
              experiences. For hotels, the opportunity is to explore these uses thoughtfully and connect them to experiences
              worth remembering.
            </p>
          </section>
        </div>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/experiential-marketing" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Experiential Marketing for Hotels: Full Guide</h3>
            </Link>
            <Link href="/blog/experiential-marketing-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Turning Hotel Stays Into Stories</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want Guest Experiences Worth Talking About?</h2>
          <p className="text-text-gray mb-6">We help hotels find the stories already on their grounds and turn them into bookings.</p>
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
                headline: 'African Basil: Uses Hotels Can Explore Beyond the Kitchen',
                description:
                  'Eight practical ideas for using African basil in a hotel kitchen, garden, guest activities and content.',
                author: { '@id': `${SITE_URL}/#organization` },
                publisher: { '@id': `${SITE_URL}/#organization` },
                dateModified: '2026-10-27',
                mainEntityOfPage: `${SITE_URL}/blog/african-basil-uses-for-hotels`,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE_URL}/blog` },
                  { '@type': 'ListItem', position: 2, name: 'African Basil for Hotels', item: `${SITE_URL}/blog/african-basil-uses-for-hotels` },
                ],
              },
            ],
          }),
        }}
      />
    </article>
  )
}
