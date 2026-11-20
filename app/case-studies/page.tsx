import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  alternates: {
    canonical: '/case-studies',
  },
  title: 'Hospitality Case Studies | BookedUp Africa',
  description: 'Real, verified results from our work with hotels and resorts — no placeholder numbers, just what actually happened.',
  keywords: 'hotel case studies, hospitality marketing examples, hotel success stories',
}

const CASES = [
  {
    slug: 'case-study-elsamere-lodge',
    name: 'Elsamere Lodge',
    place: 'Lake Naivasha',
    summary:
      "Over six months, the lodge's Google Business Profile sent guests straight to its free booking link, with no commission to a booking site, alongside steady organic search traffic.",
    image: '/case-studies/elsamere-lodge-booking-clicks.png',
    alt: 'Google Business Profile Performance dashboard for Elsamere Lodge showing 124 clicks on the free booking link between February and July 2026.',
    width: 1196,
    height: 483,
    metrics: [
      { value: '124', label: 'free booking link clicks' },
      { value: '205', label: 'organic search clicks' },
    ],
  },
  {
    slug: 'case-study-silent-palms-villa',
    name: 'Silent Palms Villa',
    place: 'Early-stage local SEO',
    summary: 'An honest look at what the first months of local SEO really look like, not a highlight reel.',
    image: '/case-studies/silent-palms-search-console.png',
    alt: 'Google Search Console performance chart for Silent Palms Villa.',
    width: 1069,
    height: 386,
    metrics: [
      { value: '14', label: 'search clicks' },
      { value: '9', label: 'average position, climbing' },
    ],
  },
  {
    slug: 'case-study-naivasha-hotel-google-business-profile',
    name: 'Naivasha Hotel',
    place: 'Google Business Profile',
    summary: 'What a working Google Business Profile looks like, and the zero in it that still needs fixing.',
    image: '/case-studies/naivasha-hotel-gbp-insights.jpg',
    alt: 'Google Business Profile insights for a Naivasha hotel showing profile views, directions and calls.',
    width: 1261,
    height: 641,
    metrics: [
      { value: '8,427', label: 'profile views' },
      { value: '443', label: 'direction requests' },
      { value: '115', label: 'calls' },
    ],
  },
]

export default function CaseStudiesHub() {
  return (
    <main className="min-h-screen bg-black text-[#F9F6F0] pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="font-sign font-bold text-5xl md:text-7xl leading-[0.95] text-[#F8F5EC]">Hospitality Case Studies</h1>
          <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/85 mt-5 leading-relaxed">
            Results from hotels we have worked with, taken straight from Google's own reports. No rounded-up estimates and no placeholders.
          </p>
        </header>

        <div className="space-y-10">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              href={`/blog/${c.slug}`}
              className="group grid md:grid-cols-5 gap-0 border border-white/15 hover:border-[#F6B12C]/70 transition-colors bg-[#0D0D0D]"
            >
              <div className="md:col-span-3 bg-[#161616] flex items-center">
                <Image src={c.image} alt={c.alt} width={c.width} height={c.height} className="w-full h-auto" />
              </div>
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col text-left">
                <p className="font-prose italic text-[#F6B12C] text-sm">{c.place}</p>
                <h2 className="font-sign font-bold text-3xl md:text-4xl text-[#F8F5EC] mt-1 mb-3 !text-left">{c.name}</h2>
                <p className="font-prose text-[#EAE5DF]/85 leading-relaxed mb-5 !text-left">{c.summary}</p>
                <dl className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="font-sign font-bold text-4xl text-[#F6B12C] leading-none">{m.value}</dt>
                      <dd className="font-prose text-sm text-[#EAE5DF]/75 mt-1">{m.label}</dd>
                    </div>
                  ))}
                </dl>
                <span className="mt-auto font-sign font-bold text-xl text-[#F6B12C] group-hover:underline underline-offset-4">
                  Read the case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <figure className="max-w-xl mx-auto mt-16 text-center">
          <h2 className="font-sign font-bold text-3xl text-[#F8F5EC] mb-4">From a client</h2>
          <div className="overflow-hidden border border-white/15">
            <Image
              src="/testimonials/client-whatsapp-may-2026.png"
              alt="WhatsApp message from a hospitality client, 7 May 2026: Btw Google profile naona inawork poa. What else do you recommend."
              width={954}
              height={232}
              className="w-full h-auto"
            />
          </div>
          <figcaption className="font-prose text-sm text-[#EAE5DF]/70 mt-3">A WhatsApp message from a hospitality client, 7 May 2026.</figcaption>
        </figure>

        <section className="mt-16 border-t-4 border-dashed border-[#F6B12C]/60 pt-12 text-center">
          <h2 className="font-sign font-bold text-4xl md:text-5xl text-[#F8F5EC]">Want a result like these?</h2>
          <p className="font-prose text-lg text-[#EAE5DF]/85 mt-3 mb-8">Start with a free audit of how your hotel shows up on Google today.</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] hover:opacity-90 text-[#000000] font-sign font-bold text-xl rounded-sm transition-opacity"
          >
            Get your free audit
          </Link>
        </section>
      </div>
    </main>
  )
}
