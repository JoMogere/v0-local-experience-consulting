const PROPERTIES = [
  'Silent Palms Villa',
  'Elsamere Lodge',
  'Mt Longonot Country Resort',
  'Luna Light Guest House',
  'Wild Wood Cottages',
  'Jazby Guest House',
]

export function TrustStrip() {
  return (
    <section className="py-10 border-y border-white/10 bg-navy-deep">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-center text-text-gray text-xs uppercase tracking-[2px] mb-6">
          Trusted By Properties Across Kenya
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {PROPERTIES.map((name) => (
            <span key={name} className="text-white/50 font-semibold text-sm md:text-base whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
