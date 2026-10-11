import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MERCH, whatsappLink } from '@/lib/merch-data'

export const metadata: Metadata = {
  title: 'BookedUp Africa Merch: Signature Tee',
  description:
    'The BookedUp Africa Signature Tee: black t-shirt with our logo on the front and Research and Implementation for hospitality growth on the back. Order on WhatsApp.',
  alternates: { canonical: '/merch' },
  openGraph: {
    title: 'BookedUp Africa Merch: Signature Tee',
    description: 'Black BookedUp Africa t-shirt. Order on WhatsApp.',
    type: 'website',
    images: [{ url: MERCH.designs[0].image }],
  },
}

const buttonClass =
  'inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity'

export default function MerchPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/" className="hover:text-gold-flat">Home</Link> / Merch
        </div>

        <header className="mb-12 max-w-3xl">
          <p className="text-gold-flat uppercase tracking-[2px] text-xs md:text-sm mb-3">Merch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{MERCH.name}</h1>
          <p className="text-gold-flat mb-4">{MERCH.tagline}</p>
          <p className="text-lg text-text-gray mb-6">{MERCH.description}</p>
          {MERCH.price && <p className="text-2xl font-semibold mb-6">{MERCH.price}</p>}
          <div className="flex flex-wrap gap-4">
            {MERCH.buyUrl && (
              <a href={MERCH.buyUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                Buy now →
              </a>
            )}
            <a
              href={whatsappLink(`Hi, I'd like to order the ${MERCH.name}. Please share sizes and pricing.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              Order on WhatsApp →
            </a>
          </div>
          <p className="text-xs text-text-gray mt-3">Message us for sizes and pricing.</p>
        </header>

        <section className="space-y-12">
          {MERCH.designs.map((d) => (
            <figure key={d.id}>
              <div className="overflow-hidden rounded-sm border border-border-flat">
                <Image
                  src={d.image}
                  alt={d.alt}
                  width={d.width}
                  height={d.height}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-text-gray">
                <span className="font-semibold text-[#F9F6F0]">{d.name}.</span> {d.note}
              </figcaption>
            </figure>
          ))}
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-3">Want yours?</h2>
          <p className="text-text-gray mb-6">Tell us which back print you prefer and we'll take it from there.</p>
          <a
            href={whatsappLink(`Hi, I'd like to order the ${MERCH.name}. Please share sizes and pricing.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Order on WhatsApp →
          </a>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-xl font-bold mb-4">While you're here</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            <li>
              <Link href="/playbooks" className="block p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-gold-flat font-semibold">
                Hotel marketing playbooks
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors text-gold-flat font-semibold">
                Free hotel marketing guides
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
