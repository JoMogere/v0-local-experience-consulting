import { SignPlate } from './sign-plate'

// The hero is a signpost. Each plate points to one of the three services.
export function Hero() {
  return (
    <section className="bg-[#000000] pt-36 md:pt-44 text-center overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6">
        <h1 className="font-sign font-bold text-[#F8F5EC] text-[clamp(44px,9vw,104px)] leading-[0.95] tracking-[-0.01em] text-balance">
          Hotel marketing in Kenya
        </h1>
        <p className="font-prose text-lg md:text-2xl text-[#EAE5DF]/90 mt-6 mx-auto max-w-[34ch] md:max-w-[44ch] text-balance leading-snug">
          Research and implementation for local SEO, direct bookings and experiential marketing for hotels
        </p>
      </div>

      {/* Signpost */}
      <div className="relative max-w-[900px] mx-auto mt-14 md:mt-20 pb-20 md:pb-28">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-3 md:w-4 bg-[#3A1706]" aria-hidden="true" />
        <nav aria-label="Our services" className="relative flex flex-col items-center gap-4 md:gap-5 pt-2">
          <SignPlate href="/services/local-seo" direction="right" tone="gold" tilt={-1.5}>
            Local SEO
          </SignPlate>
          <SignPlate href="/services/direct-bookings" direction="left" tone="paper" tilt={1}>
            Direct bookings
          </SignPlate>
          <SignPlate href="/services/experiential-marketing" direction="right" tone="clay" size="md" tilt={-0.5}>
            Experiential marketing
          </SignPlate>
        </nav>
      </div>

      <div className="pb-16 md:pb-24 relative">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] hover:opacity-90 text-[#000000] font-sign font-bold text-xl md:text-2xl rounded-sm transition-colors"
        >
          Claim your free growth audit
        </a>
        <div className="road-dash h-20 md:h-28 mx-auto mt-12" aria-hidden="true" />
      </div>
    </section>
  )
}
