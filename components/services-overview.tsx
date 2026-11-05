import Link from 'next/link'
import { SERVICES } from '@/lib/services-data'
import { SignPlate } from './sign-plate'

const TONES = ['gold', 'paper', 'clay'] as const

// Three junction signs, one per service, pointing alternately left and right.
export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#15110E] text-center" id="services-overview">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F4EFE6] text-4xl md:text-6xl leading-[0.98] text-balance">
          Local SEO, direct bookings and experiential marketing for hotels
        </h2>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 mt-5 mx-auto max-w-[52ch] leading-relaxed">
          Not three unrelated services bundled into a retainer. Each one feeds the next, from getting found to getting booked.
        </p>

        <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
          {SERVICES.map((service, i) => (
            <div key={service.slug}>
              <SignPlate
                href={`/services/${service.slug}`}
                direction={i % 2 === 0 ? 'right' : 'left'}
                tone={TONES[i % TONES.length]}
                size="md"
              >
                {service.title}
              </SignPlate>
              <p className="font-prose text-lg text-[#EAE5DF]/90 mt-6 mx-auto max-w-[56ch] leading-relaxed">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-4 font-sign font-semibold text-xl text-[#E6AD45] underline decoration-2 underline-offset-4 hover:text-[#F1BE5E]"
              >
                See how {service.title} works
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
