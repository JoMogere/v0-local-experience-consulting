import { Metadata } from 'next'
import Link from 'next/link'
import { DemoRequestForm } from '@/components/demo-request-form'

export const metadata: Metadata = {
  title: 'Book a Demo & Get a Quote | BookedUp Africa',
  description:
    'Book a free demo call for your hotel or guesthouse in Kenya. See how direct bookings, Google visibility and a booking engine would work for your property, then get a clear written quote.',
  alternates: { canonical: '/book-demo' },
}

const steps = [
  { t: 'Tell us about your property', d: 'Rooms, location and how guests book today. Two minutes.' },
  { t: 'Book a quick demo call', d: 'A short call where we walk through the setup that fits a property your size: booking engine, Google connectivity and local search.' },
  { t: 'Receive a clear written quote', d: 'Scope, timeline and price in writing, with nothing hidden. No obligation.' },
]

const covered = [
  'Direct booking setup for small properties (a 6-room hotel is a good fit)',
  'Google Business Profile and Google Maps visibility',
  'Connecting your booking engine to Google so guests can book from search',
  'Review and guest-experience improvements that drive repeat and direct bookings',
]

export default function BookDemoPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <p className="text-gold-flat text-sm uppercase tracking-[2px] mb-4">Free Demo</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Book a Demo, Then Get Your Quote
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            See exactly how we would get more direct bookings for your hotel, guesthouse or lodge, and leave with an accurate quote.
          </p>
        </header>

        <ol className="grid md:grid-cols-3 gap-4 mb-12">
          {steps.map((s, i) => (
            <li key={s.t} className="bg-navy-alt border border-border-flat rounded-sm p-6">
              <span className="text-gold-flat font-bold text-sm">Step {i + 1}</span>
              <h2 className="font-bold mt-1 mb-2">{s.t}</h2>
              <p className="text-text-gray text-sm">{s.d}</p>
            </li>
          ))}
        </ol>

        <h2 className="text-2xl font-bold mb-4">1. Tell us about your property</h2>
        <DemoRequestForm />

        <h2 className="text-2xl font-bold mt-12 mb-4">2. Pick a time for the demo</h2>
        <div className="bg-navy-alt border border-border-flat rounded-sm p-8 text-center">
          <p className="text-text-gray mb-6">Choose a slot that suits you. It takes about 30 minutes.</p>
          <Link
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] text-[#0D0D0D] font-bold rounded-sm hover:opacity-90"
          >
            Book My Demo Call →
          </Link>
        </div>

        <section className="mt-12 bg-navy-alt border border-border-flat rounded-sm p-8">
          <h2 className="text-xl font-bold mb-4">What we cover on the call</h2>
          <ul className="space-y-2 text-text-gray">
            {covered.map((c) => (
              <li key={c} className="flex gap-2"><span className="text-gold-flat">✓</span>{c}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
