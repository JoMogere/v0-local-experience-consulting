import { Metadata } from 'next'
import Link from 'next/link'
import { ChannelManagerDiagram } from '@/components/diagrams/channel-manager-diagram'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: {
    canonical: '/channel-manager-setup-kenya',
  },
  title: 'Channel Manager Setup for Hotels in Kenya | BookedUp Africa',
  description:
    'We set up your channel manager so Booking.com, Expedia and your own website share one calendar. No double bookings, more direct bookings.',
  keywords: 'channel manager setup Kenya, best channel manager small hotel Kenya, channel manager Nairobi, hotel OTA sync, Zeevou Beds24 Lodgify',
}

const FAQS = [
  {
    q: 'Which channel manager is best for a small hotel in Kenya?',
    a: 'It depends on your size and how you work. Zeevou, Beds24 and Lodgify are the ones we have set up for properties like yours. For a small hotel the right one is usually the simplest tool that syncs your OTA listings, takes direct bookings on your website and that your team will actually use every day. We look at your rooms, your OTAs and your staff before recommending one.',
  },
  {
    q: 'Do I need a channel manager if I am only on one booking site?',
    a: 'Not always. If you are on a single OTA, a simple booking button on your website may be enough. The moment you are on two or more, or you take bookings by phone and WhatsApp as well, a channel manager stops double bookings and saves hours of updating calendars by hand.',
  },
  {
    q: 'Will a channel manager and direct bookings clash?',
    a: 'No. When a guest books on your website, the room is blocked on every booking site automatically. When a booking site sells a room, your website calendar updates too. That is how you keep your OTA listings and push direct bookings at the same time.',
  },
  {
    q: 'How long does setup take?',
    a: 'It depends on how many rooms and booking sites you have. We will give you a clear timeline after a short call about your property, so you know what happens and when.',
  },
  {
    q: 'Can you set this up for a hotel in Nairobi or outside Nairobi?',
    a: 'Yes. Setup is done online and over WhatsApp or a call, so we work with hotels across Kenya and East Africa, in Nairobi and elsewhere.',
  },
]

export default function ChannelManagerSetupPage() {
  return (
    <div className="min-h-screen bg-navy-deep text-[#F9F6F0]">
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold-flat text-sm uppercase tracking-[2px] mb-4">Direct Bookings</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            Channel Manager Setup for Hotels in Kenya
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            One calendar for Booking.com, Expedia and your own website. No double bookings, no updating three places by
            hand, and more guests booking direct.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-demo"
              className="px-8 py-4 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] font-bold rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-[0.5px]"
            >
              Book a Setup Call
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-gold-flat text-gold-flat rounded-sm hover:bg-gold-flat/10 transition-colors text-sm uppercase tracking-[0.5px]">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What a Channel Manager Does</h2>
          <p className="text-text-gray mb-6">
            Think of it as one notebook that every booking site reads from. A guest books a room on Booking.com and it is
            marked taken everywhere else within moments. A guest books on your website and the same thing happens. You stop
            selling the same room twice.
          </p>
          <ChannelManagerDiagram />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choosing One for a Small Hotel</h2>
          <p className="text-text-gray mb-6">
            There is no single best channel manager. We have set up Zeevou, Beds24 and Lodgify, and the right choice comes
            down to a few honest questions:
          </p>
          <ul className="space-y-3 text-text-gray">
            <li>(i). How many rooms or units do you manage, and on how many booking sites are you listed?</li>
            <li>(ii). Do you only need booking and sync, or a full system for housekeeping, rates and reports too?</li>
            <li>(iii). Can your team learn it quickly, on a phone, with the internet you really have?</li>
            <li>(iv). Does it give you a booking button for your own website and work with the free Google booking link?</li>
            <li>(v). Is the pricing clear and fair for your size? Ask for the full cost before you commit.</li>
          </ul>
          <p className="text-text-gray mt-6">
            We help you answer these before you pay for anything, so you do not end up locked into a tool that is too big or
            too small. The longer version is in our guide to{' '}
            <Link href="/guides/direct-bookings/booking-engine-setup" className="text-gold-flat underline">
              channel managers and direct bookings
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do in a Setup</h2>
          <ol className="space-y-4 text-text-gray">
            <li><strong className="text-[#F9F6F0]">1. Look at your property.</strong> Rooms, rates, booking sites and how bookings reach you today.</li>
            <li><strong className="text-[#F9F6F0]">2. Pick the right tool.</strong> A clear recommendation with reasons, and the full cost.</li>
            <li><strong className="text-[#F9F6F0]">3. Connect your booking sites.</strong> Your calendar and rates sync so nothing is sold twice.</li>
            <li><strong className="text-[#F9F6F0]">4. Add your direct booking button.</strong> Guests can book on your website and through Google.</li>
            <li><strong className="text-[#F9F6F0]">5. Train your team.</strong> A short walk-through so reception can run it without us.</li>
          </ol>
          <p className="text-text-gray mt-6">
            Once guests can book direct, the next step is giving them reasons to. See how to{' '}
            <Link href="/guides/direct-bookings/reduce-ota-dependence" className="text-gold-flat underline">
              reduce your dependence on booking sites
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Common Questions</h2>
          <div className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-bold mb-2">{f.q}</h3>
                <p className="text-text-gray">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy-alt">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Double Bookings?</h2>
          <p className="text-text-gray mb-8">
            Book a short call. We will look at your property, recommend a setup and give you a clear quote.
          </p>
          <Link
            href="/book-demo"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] font-bold rounded-sm hover:opacity-90 transition-opacity text-sm uppercase tracking-[0.5px]"
          >
            Book a Setup Call
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                name: 'Channel manager setup for hotels',
                serviceType: 'Hotel channel manager setup',
                provider: { '@id': `${SITE_URL}/#organization` },
                areaServed: [{ '@type': 'Country', name: 'Kenya' }, { '@type': 'Place', name: 'East Africa' }],
                url: `${SITE_URL}/channel-manager-setup-kenya`,
              },
              {
                '@type': 'FAQPage',
                mainEntity: FAQS.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </div>
  )
}
