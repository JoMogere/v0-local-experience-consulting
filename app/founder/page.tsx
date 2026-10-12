import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'

const NAME = 'Julius Onyiego Mogere'

export const metadata: Metadata = {
  title: 'About Julius Onyiego Mogere (Jo Mogere) – Founder of BookedUp Africa',
  description:
    'Julius Onyiego Mogere, known publicly as Jo Mogere, is the founder of BookedUp Africa, a hospitality digital marketing consultancy helping hotels and resorts in Kenya and East Africa with local SEO, direct bookings and experiential marketing.',
  alternates: { canonical: '/founder' },
  openGraph: {
    title: 'About Julius Onyiego Mogere (Jo Mogere) – Founder of BookedUp Africa',
    description:
      'Founder of BookedUp Africa. Local SEO, direct bookings and experiential marketing for hotels and resorts in Kenya and East Africa.',
    type: 'profile',
  },
}

type FounderLink = { label: string; href: string; url: string; external?: boolean; personal?: boolean }

const links: FounderLink[] = [
  { label: 'Contact Jo Mogere', href: '/contact', url: `${SITE_URL}/contact` },
  { label: 'BookedUp Africa home', href: '/', url: SITE_URL },
  {
    label: 'Book a strategy call',
    href: 'https://calendly.com/mogerejulius41/30min',
    url: 'https://calendly.com/mogerejulius41/30min',
    external: true,
  },
  {
    label: 'BookedUp Africa on YouTube',
    href: 'https://www.youtube.com/@bookedupafrica',
    url: 'https://www.youtube.com/@bookedupafrica',
    external: true,
  },
  {
    label: 'BookedUp Africa on Instagram',
    href: 'https://www.instagram.com/bookedupafrica',
    url: 'https://www.instagram.com/bookedupafrica',
    external: true,
  },
  {
    label: 'BookedUp Africa on TikTok',
    href: 'https://www.tiktok.com/@bookedupafrica',
    url: 'https://www.tiktok.com/@bookedupafrica',
    external: true,
  },
  {
    label: 'BookedUp Africa on Facebook',
    href: 'https://web.facebook.com/profile.php?id=61555797101970',
    url: 'https://web.facebook.com/profile.php?id=61555797101970',
    external: true,
  },
  {
    label: 'Jo Mogere on LinkedIn',
    href: 'https://www.linkedin.com/in/julius-mogere-8538473b4/',
    url: 'https://www.linkedin.com/in/julius-mogere-8538473b4/',
    external: true,
    personal: true,
  },
  {
    label: 'Jo Mogere on Facebook',
    href: 'https://www.facebook.com/jomogere/',
    url: 'https://www.facebook.com/jomogere/',
    external: true,
    personal: true,
  },
  {
    label: 'Jo Mogere on Medium',
    href: 'https://medium.com/@mogerejulius41',
    url: 'https://medium.com/@mogerejulius41',
    external: true,
    personal: true,
  },
  {
    label: 'Jo Mogere playbooks on Selar',
    href: 'https://selar.com/m/jomogere',
    url: 'https://selar.com/m/jomogere',
    external: true,
    personal: true,
  },
]

const propertyPhotos = [
  {
    name: 'Jazby Guest House, Naivasha',
    src: '/founder/properties/jazby-guest-house.jpg',
    width: 1000,
    height: 670,
    alt: 'Aerial view of Jazby Guest House in Naivasha, a two-storey building with a red roof and a sign on the left, with two vehicles parked on the street in front',
    href: undefined as string | undefined,
  },
  {
    name: 'Wild Wood Cottages',
    src: '/founder/properties/wild-wood-cottages.jpg',
    width: 1000,
    height: 666,
    alt: 'Garden at Wild Wood Cottages with a large cream umbrella over a table on a green lawn and a timber cottage in the background',
    href: undefined as string | undefined,
  },
  {
    name: 'Elsamere Lodge',
    src: '/founder/properties/elsamere-lodge.jpg',
    width: 851,
    height: 315,
    alt: 'Aerial view of Elsamere Lodge beside Lake Naivasha, with buildings scattered among yellow acacia trees along the shore and a road on the left',
    href: '/blog/case-study-elsamere-lodge' as string | undefined,
  },
  {
    name: 'Elsamere Lodge, Lake Naivasha',
    src: '/founder/properties/elsamere-lodge.jpg',
    width: 851,
    height: 315,
    alt: 'Aerial view of Elsamere Lodge on the shore of Lake Naivasha, with buildings scattered among yellow-barked acacia trees beside the lake and a road on the left',
    href: '/blog/case-study-elsamere-lodge' as string | undefined,
  },
  {
    name: 'Silent Palms Villa, Diani',
    src: '/founder/properties/silent-palms-villa.jpg',
    width: 1000,
    height: 666,
    alt: 'Aerial view of Silent Palms Villa in Diani, a cream-coloured villa with a turquoise swimming pool and sun loungers surrounded by palms and trees',
    href: '/blog/case-study-silent-palms-villa' as string | undefined,
  },
]

// Person structured data lists personal profiles only; the brand's own accounts belong to the organisation.
const sameAs = links.filter((l) => 'personal' in l && l.personal).map((l) => l.url)

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/" className="hover:text-gold-flat">Home</Link> / Founder
        </div>

        <header className="mb-10 flex flex-col-reverse sm:flex-row sm:items-center gap-6 sm:gap-8">
          <div className="flex-1">
            <p className="text-gold-flat uppercase tracking-[2px] text-xs md:text-sm mb-3">Founder</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">About {NAME}</h1>
            <p className="text-gold-flat mb-1">Known as Jo Mogere</p>
            <p className="text-text-gray">Founder, BookedUp Africa. Based in Kenya.</p>
          </div>
          <div className="w-40 sm:w-48 md:w-56 shrink-0 overflow-hidden rounded-sm border border-border-flat">
            <Image
              src="/founder/jo-mogere.jpg"
              alt="Portrait of Julius Onyiego Mogere, known as Jo Mogere, founder of BookedUp Africa"
              width={800}
              height={803}
              priority
              className="w-full h-auto"
            />
          </div>
        </header>

        <section className="space-y-5 text-lg text-text-gray leading-relaxed mb-12">
          <p>
            Julius Onyiego Mogere is the founder of BookedUp Africa, a digital marketing consultancy built specifically for hotels and resorts in Kenya and East Africa. <strong className="text-white">Jo Mogere</strong> is his personal brand. He has worked in hospitality digital marketing since March 2025, hands-on with individual properties on{' '}
            <Link href="/hotel-local-seo-kenya" className="text-gold-flat hover:underline">local SEO</Link>,{' '}
            <Link href="/pillar/direct-bookings" className="text-gold-flat hover:underline">direct bookings</Link> and{' '}
            <Link href="/pillar/experiential-marketing" className="text-gold-flat hover:underline">experiential marketing</Link>.
          </p>
          <p>
            His approach comes from the day-to-day work: managing Google Business Profiles, booking engines and channel managers for real properties, with direct experience on platforms like Zeevou, Beds24 and Lodgify. He shares what he learns through{' '}
            <Link href="/blog" className="text-gold-flat hover:underline">free guides</Link>, <Link href="/videos" className="text-gold-flat hover:underline">videos</Link>, published{' '}
            <Link href="/case-studies" className="text-gold-flat hover:underline">case studies</Link> with real numbers, and two{' '}
            <Link href="/playbooks" className="text-gold-flat hover:underline">playbooks</Link> for hotel owners.
          </p>
          <blockquote className="border-l-2 border-gold-flat pl-4 italic text-[#EAE5DF]/90">
            "Research and implementation for local search, experiential marketing, and direct bookings — for hotels that want the work done, not just a report explaining it."
          </blockquote>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Started</h2>
          <div className="space-y-4 text-text-gray leading-relaxed">
            <p>
              Before hospitality, Jo worked with general businesses, helping them get on the map and show up in local search. That changed in Naivasha, during the WRC rally.
            </p>
            <p>
              With a big event coming up, he realised visitors would be looking for somewhere to stay at the last minute. They wouldn't open booking apps and compare. They would search, typing things like "guesthouse near me" or "bed and breakfast near Hell's Gate". So he walked into a nearby guesthouse, Jazby Guest House, and offered to help it reach those guests: people in a micro-moment, ready to book now. Jazby was his first.
            </p>
            <p>
              Wild Wood Cottages and Luna Light Guest House followed. Then came Elsamere Lodge and Silent Palms Villa in Diani, and with them the idea of direct bookings. While working with Elsamere Lodge, he saw how much a property can depend on online travel agencies (OTAs) for its bookings. He started putting in place what a property can do to bring in direct bookings, and how the guest experience helps drive them.
            </p>
            <p>
              That is why BookedUp Africa is built around three things that work together: being found at the moment of search, turning that attention into direct bookings, and giving guests an experience that keeps both growing. Read the{' '}
              <Link href="/blog/case-study-elsamere-lodge" className="text-gold-flat hover:underline">Elsamere Lodge case study</Link> to see what that looks like in numbers.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Jo Works On</h2>
          <ul className="space-y-3 text-text-gray">
            <li>
              <strong className="text-white">Local SEO.</strong> Getting hotels found in Google Maps and local search through Google Business Profile, citations and reviews. Start with the{' '}
              <Link href="/blog/google-business-profile-hotels" className="text-gold-flat hover:underline">Google Business Profile guide</Link>.
            </li>
            <li>
              <strong className="text-white">Direct bookings.</strong> Booking engines, channel managers and the free Google booking link, so guests book with the hotel instead of through a commission-charging platform. See{' '}
              <Link href="/pillar/direct-bookings/reduce-ota-dependence" className="text-gold-flat hover:underline">how to reduce OTA dependence</Link>.
            </li>
            <li>
              <strong className="text-white">Experiential marketing.</strong> Turning the guest experience into reviews, content and repeat business. Read{' '}
              <Link href="/blog/experiential-marketing-hotels" className="text-gold-flat hover:underline">experiential marketing for hotels</Link>.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Properties Jo Has Worked With</h2>
          <p className="text-text-gray mb-4">In the order he started working with them:</p>
          <ol className="space-y-2 text-text-gray list-decimal list-inside mb-4">
            <li>Jazby Guest House, Naivasha (his first)</li>
            <li>Wild Wood Cottages</li>
            <li>Luna Light Guest House</li>
            <li>
              <Link href="/blog/case-study-elsamere-lodge" className="text-gold-flat hover:underline">Elsamere Lodge</Link>
            </li>
            <li>
              <Link href="/blog/case-study-silent-palms-villa" className="text-gold-flat hover:underline">Silent Palms Villa</Link>, Diani
            </li>
          </ol>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {propertyPhotos.map((ph) => (
              <figure key={ph.name}>
                <div className="overflow-hidden rounded-sm border border-border-flat">
                  <Image src={ph.src} alt={ph.alt} width={ph.width} height={ph.height} className="w-full h-32 sm:h-40 object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-text-gray">
                  {ph.href ? (
                    <Link href={ph.href} className="text-gold-flat hover:underline">{ph.name}</Link>
                  ) : (
                    ph.name
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-text-gray">
            He has also worked with Mt Longonot Country Resort. Elsamere Lodge and Silent Palms Villa have published case studies with real numbers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Jo Mogere Links</h2>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-gold-flat hover:underline"
                >
                  {l.label}
                </Link>
                <span className="text-text-gray text-sm"> – {l.url.replace(/^https?:\/\//, '')}</span>
              </li>
            ))}
            <li>
              <a href="https://wa.me/+254799022671" target="_blank" rel="noopener noreferrer" className="text-gold-flat hover:underline">
                Message Jo on WhatsApp
              </a>
              <span className="text-text-gray text-sm"> – +254 799 022 671</span>
            </li>
          </ul>
        </section>

        <section className="p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Want Jo to look at your property?</h2>
          <p className="text-text-gray mb-6">Book a free growth audit and get an honest read on where you stand.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity"
          >
            Claim My Free Growth Audit →
          </Link>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Julius Onyiego Mogere',
            alternateName: 'Jo Mogere',
            jobTitle: 'Founder',
            description:
              'Founder of BookedUp Africa, a digital marketing consultancy for hotels and resorts in Kenya and East Africa.',
            url: `${SITE_URL}/founder`,
            image: `${SITE_URL}/founder/jo-mogere.jpg`,
            worksFor: { '@type': 'Organization', name: 'BookedUp Africa', url: SITE_URL },
            knowsAbout: ['Local SEO for hotels', 'Direct hotel bookings', 'Experiential marketing', 'Google Business Profile'],
            sameAs,
          }),
        }}
      />
    </main>
  )
}
