import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PLAYBOOKS } from '@/lib/playbooks-data'

export const metadata: Metadata = {
  title: 'Hotel Marketing Playbooks for Kenya & East Africa',
  description:
    'Practical playbooks for hotels and resorts: win local search, get more direct bookings and improve guest experience across Kenya and East Africa.',
  alternates: { canonical: '/playbooks' },
  openGraph: {
    title: 'Hotel Marketing Playbooks for Kenya & East Africa',
    description: 'Practical playbooks for hotels and resorts in Kenya and East Africa.',
    type: 'website',
  },
}

export default function PlaybooksPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-[#F9F6F0] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Hotel Marketing Playbooks for Kenya & East Africa
          </h1>
          <p className="text-xl text-text-gray max-w-3xl">
            Practical playbooks for hotels and resorts that want more direct bookings, better local search visibility and a stronger guest experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PLAYBOOKS.map((p) => (
            <Link
              key={p.slug}
              href={`/playbooks/${p.slug}`}
              className="group block bg-navy-alt border border-border-flat rounded-sm overflow-hidden hover:border-gold-flat/40 transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f3ef]">
                <Image src={p.image} alt={`Cover of ${p.title}`} fill className="object-contain p-4" />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-medium mb-1 group-hover:text-gold-flat transition-colors">{p.title}</h2>
                <p className="text-gold-flat text-sm mb-3">{p.subtitle}</p>
                <p className="text-text-gray text-sm leading-relaxed mb-4">{p.description}</p>
                <span className="text-sm text-gold-flat uppercase tracking-[2px]">View playbook →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
