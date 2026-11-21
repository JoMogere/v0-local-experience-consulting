import { Metadata } from 'next'
import { GrowthBuilder } from '@/components/growth-builder'

export const metadata: Metadata = {
  alternates: { canonical: '/build-your-growth-system' },
  title: 'Build Your Hotel Growth System | BookedUp Africa',
  description:
    'Pick your property type, choose only the hotel marketing modules you need and see your custom growth plan before we speak.',
  openGraph: {
    title: 'Build Your Hotel Growth System | BookedUp Africa',
    description: 'Choose your property, your modules and your pace, then lock in a custom scope.',
    type: 'website',
  },
}

export default function BuildPage() {
  return (
    <main className="min-h-screen bg-black text-[#F9F6F0] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <header className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="font-sign font-bold text-4xl md:text-6xl leading-[0.95] text-[#F8F5EC]">
            Stop buying cookie-cutter retainers. Build your hotel&apos;s growth system.
          </h1>
          <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/85 mt-3 leading-relaxed">
            Pick your property type, choose only the channels you need to fix, and see your custom roadmap before we ever get on a call.
          </p>
        </header>
        <GrowthBuilder />
      </div>
    </main>
  )
}
