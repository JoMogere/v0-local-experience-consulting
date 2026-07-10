import Link from 'next/link'
import { MapPin, TrendingUp, Sparkles } from 'lucide-react'
import { SERVICES } from '@/lib/services-data'

const ICONS: Record<string, typeof MapPin> = {
  'local-seo': MapPin,
  'direct-bookings': TrendingUp,
  'experiential-marketing': Sparkles,
}

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="services-overview">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">What We Do</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-4 tracking-[-0.02em]">
          Three Pillars, One Connected System
        </h2>
        <p className="text-text-gray max-w-2xl mb-12">
          Not three unrelated services bundled into a retainer — each one feeds the next, from getting found to getting booked.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug]
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block p-6 bg-white/[0.03] border border-white/10 rounded hover:border-gold/50 transition-colors group"
              >
                <div className="text-gold mb-4">{Icon && <Icon size={32} strokeWidth={1.5} />}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-text-gray text-sm mb-4">{service.description}</p>
                <span className="text-gold text-sm font-bold">Learn more →</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
