import { Metadata } from 'next'
import Link from 'next/link'
import { OtaCalculator } from '@/components/ota-calculator'
import { PriceComparison } from '@/components/price-comparison'

export const metadata: Metadata = {
  alternates: { canonical: '/ota-commission-calculator-kenya' },
  title: 'OTA Commission Calculator for Hotels in Kenya | BookedUp Africa',
  description:
    'Work out how much your hotel or lodge pays Booking.com and other OTAs in commission every year, and what you keep by moving bookings to direct.',
  keywords: 'OTA commission calculator, Booking.com commission Kenya, direct bookings calculator hotel, hotel commission loss',
}

export default function OtaCalculatorPage() {
  return (
    <div className="bg-[#000000] min-h-screen py-16 md:py-24 px-6 text-center">
      <div className="max-w-[760px] mx-auto mb-12">
        <h1 className="font-sign font-bold text-[#F8F5EC] text-5xl md:text-7xl leading-[0.95]">
          How much is your hotel paying the OTAs?
        </h1>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 mt-5 leading-relaxed">
          Enter your own figures: your room price, the commission the booking sites take and how many bookings you get
          each month. The answer appears as you type.
        </p>
        <p lang="sw" className="font-prose italic text-lg text-[#F6B12C] mt-3">
          Weka namba zako mwenyewe. Utaona OTA zinachukua kiasi gani kwa mwaka.
        </p>
      </div>

      <div className="mb-16">
        <PriceComparison />
      </div>

      <OtaCalculator />

      <section className="max-w-[640px] mx-auto mt-20 text-center">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-5xl">How this is calculated</h2>
        <div className="font-prose text-lg text-[#EAE5DF]/90 mt-6 leading-relaxed space-y-2">
          <p>Cost of one booking = room price × nights</p>
          <p>Commission on one booking = cost of one booking × commission %</p>
          <p>Monthly commission = commission on one booking × OTA bookings a month</p>
          <p>Yearly commission = monthly commission × 12</p>
          <p>Yearly saving = commission on one booking × bookings moved to direct × 12</p>
        </div>
        <p className="font-prose text-lg text-[#EAE5DF]/80 mt-6 leading-relaxed">
          If you leave the number of bookings to move empty, the calculator assumes 3 in every 10 OTA bookings. It is
          only a starting point. Type your own number to see what a more or less ambitious plan is worth.
        </p>
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-5xl mt-14">Where the savings come from</h2>
        <ol className="font-prose text-lg text-[#EAE5DF]/90 mt-6 leading-relaxed space-y-4 text-left list-decimal pl-6">
          <li>A booking option on your own website that loads fast on a phone and takes the payments your guests use, such as M-Pesa and cards.</li>
          <li>A message after every stay, on WhatsApp or email, with a reason to book direct next time.</li>
          <li>A complete Google Business Profile, so guests who search your hotel name find your own booking link ahead of the booking sites.</li>
        </ol>
      </section>

      <p className="font-prose text-lg text-[#EAE5DF]/80 mt-16 max-w-[52ch] mx-auto">
        Want the worked example in words? Read{' '}
        <Link href="/blog/ota-commission-lodge-example" className="text-[#F6B12C] underline underline-offset-4">
          how a lodge loses KES 240,000 a year to commission
        </Link>
        , or see{' '}
        <Link href="/services/direct-bookings" className="text-[#F6B12C] underline underline-offset-4">
          how we help hotels win direct bookings
        </Link>
        .
      </p>
    </div>
  )
}
