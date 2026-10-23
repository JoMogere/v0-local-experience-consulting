import Image from 'next/image'

type Logo = { src: string; width: number; height: number; tile: string }
type Property = { name: string; logo?: Logo }

// Properties with a logo show it; the rest show their name until a logo is added.
const PROPERTIES: Property[] = [
  { name: 'Silent Palms Villas', logo: { src: '/logos/silent-palms-villas.webp', width: 275, height: 200, tile: 'bg-white px-4 py-2' } },
  { name: 'Elsamere Lodge, Naivasha', logo: { src: '/logos/elsamere-naivasha.webp', width: 334, height: 100, tile: 'bg-white px-4 py-2' } },
  { name: 'Mt Longonot Country Resort', logo: { src: '/logos/mt-longonot-country-resort.webp', width: 318, height: 200, tile: 'bg-white px-4 py-2' } },
  { name: 'Luna Light Guest House' },
  { name: 'Wild Wood Escapes', logo: { src: '/logos/wild-wood-escapes.webp', width: 374, height: 196, tile: 'bg-[#1A1A1A] border border-border-flat px-4 py-2' } },
  { name: 'Jazby Guest House', logo: { src: '/logos/jazby-guest-house.webp', width: 240, height: 240, tile: 'bg-[#120f2a]' } },
]

function Item({ property }: { property: Property }) {
  if (property.logo) {
    return (
      <span className={`mx-6 md:mx-10 flex items-center justify-center h-14 md:h-[68px] shrink-0 ${property.logo.tile}`}>
        <Image
          src={property.logo.src}
          alt={`${property.name} logo`}
          width={property.logo.width}
          height={property.logo.height}
          className="h-full w-auto object-contain"
        />
      </span>
    )
  }
  return (
    <span className="mx-8 md:mx-12 text-base md:text-xl font-semibold text-text-gray whitespace-nowrap opacity-70 hover:opacity-100 hover:text-gold-flat transition-all">
      {property.name}
    </span>
  )
}

export function TrustMarquee() {
  return (
    <section className="py-14 md:py-20 bg-navy-deep border-t border-border-flat overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 mb-10 text-center">
        <p className="text-text-gray text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] font-semibold">
          Trusted By Kenya&apos;s Leading Hospitality Brands
        </p>
      </div>
      <div className="border-t border-border-flat">
        <div className="relative w-full py-8 md:py-10">
          <div className="flex w-max items-center animate-marquee">
            {PROPERTIES.map((p) => (
              <Item key={p.name} property={p} />
            ))}
            {/* Second copy keeps the scroll seamless; hidden from screen readers */}
            <div className="flex items-center" aria-hidden="true">
              {PROPERTIES.map((p) => (
                <Item key={`copy-${p.name}`} property={{ ...p, logo: p.logo && { ...p.logo } }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
