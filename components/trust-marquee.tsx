const PROPERTIES = [
  'Silent Palms Villa',
  'Elsamere Lodge',
  'Mt Longonot Country Resort',
  'Luna Light Guest House',
  'Wild Wood Cottages',
  'Jazby Guest House',
]

export function TrustMarquee() {
  return (
    <section className="py-14 md:py-20 bg-navy-deep border-t border-border-flat overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 mb-10 text-center">
        <p className="text-text-gray text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] font-semibold">
          Trusted By Kenya's Leading Hospitality Brands
        </p>
      </div>
      <div className="border-t border-border-flat">
        <div className="relative w-full py-8 md:py-10">
          <div className="flex w-max animate-marquee">
            {[...PROPERTIES, ...PROPERTIES].map((name, index) => (
              <span
                key={index}
                className="mx-8 md:mx-12 text-base md:text-xl font-semibold text-text-gray whitespace-nowrap opacity-70 hover:opacity-100 hover:text-gold-flat transition-all"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
