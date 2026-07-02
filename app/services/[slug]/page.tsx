import { Metadata } from 'next'
import { getServiceBySlug, getPublicServices } from '@/app/actions/services'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)

  if (!service || service.status !== 'active') {
    notFound()
  }

  return {
    title: service.title,
    description: service.description,
    keywords: service.features,
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.shortDescription || '',
      type: 'article',
      images: service.image ? [{ url: service.image }] : [],
    },
  }
}

export async function generateStaticParams() {
  try {
    const services = await getPublishedServices()
    return services.map((service) => ({
      slug: service.slug,
    }))
  } catch (error) {
    // During build, database might not be available
    // Return empty array so the route is generated on-demand
    console.log('[v0] Could not generate static params for services, will generate on-demand')
    return []
  }
}

export default async function ServicePage({ params }: { params: Params }) {
  const service = await getServiceBySlug(params.slug)

  if (!service || !service.published) {
    notFound()
  }

  return (
    <article className="min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-10">
        {/* Back Link */}
        <Link href="/services" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Services
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="text-xl text-gold mb-4">{service.subtitle}</p>
          )}
          <div className="flex items-center text-text-gray text-sm">
            {service.publishedAt && (
              <span>{new Date(service.publishedAt).toLocaleDateString()}</span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {service.image && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-lg text-white leading-relaxed mb-8">
            {service.description}
          </div>

          {/* Research Phase */}
          {service.researchDetails && (
            <section className="mb-12 p-8 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Research Phase</h2>
              <div className="text-white/80 space-y-4">
                {Array.isArray(service.researchDetails) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {service.researchDetails.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <pre className="whitespace-pre-wrap">{JSON.stringify(service.researchDetails, null, 2)}</pre>
                )}
              </div>
            </section>
          )}

          {/* Implementation Phase */}
          {service.implementationDetails && (
            <section className="mb-12 p-8 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Implementation Phase</h2>
              <div className="text-white/80 space-y-4">
                {Array.isArray(service.implementationDetails) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {service.implementationDetails.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <pre className="whitespace-pre-wrap">{JSON.stringify(service.implementationDetails, null, 2)}</pre>
                )}
              </div>
            </section>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gold/10 border border-gold/20 rounded-lg text-center">
          <p className="text-lg text-white mb-4">Ready to get started?</p>
          <Link
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded hover:scale-105 transition-transform"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            description: service.description,
            image: service.image,
            provider: {
              '@type': 'Organization',
              name: 'Local Experience Consulting',
            },
          }),
        }}
      />
    </article>
  )
}
