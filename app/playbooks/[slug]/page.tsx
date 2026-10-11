import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PLAYBOOKS, getPlaybook } from '@/lib/playbooks-data'
import { SITE_URL } from '@/lib/site'

interface Params {
  slug: string
}

export const dynamicParams = false

export function generateStaticParams() {
  return PLAYBOOKS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const playbook = getPlaybook(slug)
  if (!playbook) return {}
  return {
    title: playbook.metaTitle,
    description: playbook.metaDescription,
    alternates: { canonical: `/playbooks/${playbook.slug}` },
    openGraph: {
      title: playbook.metaTitle,
      description: playbook.metaDescription,
      type: 'website',
      images: [{ url: playbook.image }],
    },
  }
}

const buttonClass =
  'inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity'

export default async function PlaybookPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const playbook = getPlaybook(slug)
  if (!playbook) notFound()

  const others = PLAYBOOKS.filter((p) => p.slug !== playbook.slug)

  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/" className="hover:text-gold-flat">Home</Link> /{' '}
          <Link href="/playbooks" className="hover:text-gold-flat">Playbooks</Link> / {playbook.title}
        </div>

        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div>
            <p className="text-gold-flat uppercase tracking-[2px] text-xs md:text-sm mb-3">Playbook</p>
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-balance">{playbook.title}</h1>
            <p className="text-gold-flat mb-4">{playbook.subtitle}</p>
            <p className="text-lg text-text-gray mb-8">{playbook.description}</p>
            <a href={playbook.buyUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              Get the Playbook →
            </a>
            <p className="text-xs text-text-gray mt-3">Digital download. Secure checkout on Selar.</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#f5f3ef]">
            <Image
              src={playbook.image}
              alt={`Cover of ${playbook.title}: ${playbook.subtitle}`}
              fill
              priority
              className="object-contain p-4"
            />
          </div>
        </section>

        <div className="max-w-3xl space-y-14">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{playbook.problemHeading}</h2>
            <div className="space-y-4 text-text-gray leading-relaxed">
              {playbook.problem.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What this playbook covers</h2>
            <ul className="space-y-2 text-text-gray">
              {playbook.focus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-flat">✓</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {playbook.inside.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What's inside</h2>
              <ul className="space-y-2 text-text-gray list-disc list-inside">
                {playbook.inside.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who it's for</h2>
            <ul className="space-y-2 text-text-gray">
              {playbook.audience.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-gold-flat">✓</span> {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="p-8 bg-navy-alt border border-border-flat rounded-sm text-center">
            <h2 className="text-2xl font-bold mb-3">{playbook.title}</h2>
            <p className="text-text-gray mb-6">{playbook.subtitle}</p>
            <a href={playbook.buyUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              Get the Playbook →
            </a>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Start with our free guides</h2>
            <p className="text-text-gray mb-4">Want a taste of the thinking first? These free guides cover the same ground.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {playbook.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-gold-flat font-semibold"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently asked questions</h2>
            <div className="space-y-6">
              {playbook.faq.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold mb-1">{item.q}</h3>
                  <p className="text-text-gray leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Prefer to have it done with you?</h2>
            <p className="text-text-gray mb-6">Book a free growth audit and we'll look at your property together.</p>
            <Link href="/contact" className={buttonClass}>
              Claim My Free Growth Audit →
            </Link>
          </section>

          {others.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-3">More playbooks</h2>
              <ul className="space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/playbooks/${o.slug}`} className="text-gold-flat hover:underline">
                      {o.title}: {o.subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Playbooks', item: `${SITE_URL}/playbooks` },
              { '@type': 'ListItem', position: 3, name: playbook.title, item: `${SITE_URL}/playbooks/${playbook.slug}` },
            ],
          }),
        }}
      />
    </main>
  )
}
