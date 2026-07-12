import { SERVICES } from '@/lib/services-data'
import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, TrendingUp, Sparkles } from 'lucide-react'

const ICONS: Record<string, typeof MapPin> = {
  'local-seo': MapPin,
  'direct-bookings': TrendingUp,
  'experiential-marketing': Sparkles,
}

export const metadata: Metadata = {
  title: 'Our Services | BookedUp Africa',
  description: 'Local SEO, Experiential Marketing, and Direct Bookings strategy for African hotels and resorts.',
  keywords: 'local SEO hotels, experiential marketing, direct bookings, hospitality consulting Kenya',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 bg-background pt-32">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Three interconnected pillars of growth for African hospitality properties
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="p-6">
                <div className="text-gold mb-4">
                  {(() => {
                    const Icon = ICONS[service.slug]
                    return Icon ? <Icon size={36} strokeWidth={1.5} /> : null
                  })()}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-text-gray mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="text-gold text-sm font-bold mt-1">▸</span>
                    <div>
                      <p className="text-white text-sm font-semibold">Research</p>
                      <p className="text-text-gray text-xs">Audit & Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gold text-sm font-bold mt-1">▸</span>
                    <div>
                      <p className="text-white text-sm font-semibold">Implementation</p>
                      <p className="text-text-gray text-xs">Execute & Track</p>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-gold hover:text-gold-light font-bold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded hover:scale-105 transition-transform"
          >
            Claim My Free Consultation →
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://bookedupafrica.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://bookedupafrica.com/services',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
