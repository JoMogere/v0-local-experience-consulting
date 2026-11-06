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
    <div className="bg-[#15110E] min-h-screen py-16 md:py-24 px-6 text-center">
      <div className="max-w-[760px] mx-auto mb-12">
        <h1 className="font-sign font-bold text-[#F4EFE6] text-5xl md:text-7xl leading-[0.95]">
          How much is your hotel paying the OTAs?
        </h1>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 mt-5 leading-relaxed">
          Enter your own figures: your room price, the commission the booking sites take and how many bookings you get
          each month. The answer appears as you type.
        </p>
        <p lang="sw" className="font-prose italic text-lg text-[#E6AD45] mt-3">
          Weka namba zako mwenyewe. Utaona OTA zinachukua kiasi gani kwa mwaka.
        </p>
      </div>

      <div className="mb-16">
        <PriceComparison />
      </div>

      <OtaCalculator />

      <p className="font-prose text-lg text-[#EAE5DF]/80 mt-16 max-w-[52ch] mx-auto">
        Want the worked example in words? Read{' '}
        <Link href="/blog/ota-commission-lodge-example" className="text-[#E6AD45] underline underline-offset-4">
          how a lodge loses KES 240,000 a year to commission
        </Link>
        , or see{' '}
        <Link href="/services/direct-bookings" className="text-[#E6AD45] underline underline-offset-4">
          how we help hotels win direct bookings
        </Link>
        .
      </p>
    </div>
  )
}
