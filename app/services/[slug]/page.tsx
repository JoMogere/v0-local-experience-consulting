import { Metadata } from 'next'
import { getServiceBySlug, SERVICES } from '@/lib/services-data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, TrendingUp, Sparkles } from 'lucide-react'

const ICONS: Record<string, typeof MapPin> = {
  'local-seo': MapPin,
  'direct-bookings': TrendingUp,
  'experiential-marketing': Sparkles,
}

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return {
    title: `${service.title} | BookedUp Africa`,
    description: service.metaDescription,
    keywords: service.features.join(', '),
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      type: 'article',
    },
  }
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32 pb-16">
      <article className="max-w-3xl mx-auto px-4 md:px-6">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span>{service.title}</span>
        </nav>

        <header className="mb-12">
          <div className="text-orange-500 mb-6">
            {(() => {
              const Icon = ICONS[service.slug]
              return Icon ? <Icon size={48} strokeWidth={1.5} /> : null
            })()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{service.title}</h1>
          <p className="text-xl text-text-gray leading-relaxed">{service.description}</p>
        </header>

        <section className="space-y-6 mb-12">
          {service.content.map((paragraph, i) => (
            <p key={i} className="text-text-gray leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">What's Included</h2>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">✓</span>
                <span className="text-text-gray">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-text-gray mb-6">
            Let's talk about {service.title.toLowerCase()} for your property.
          </p>
          <a
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
          >
            Claim My Free Strategy Call →
          </a>
        </section>
      </article>
    </main>
  )
}
