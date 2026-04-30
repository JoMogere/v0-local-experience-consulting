import Link from "next/link"

export function Newsletter() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Substack Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gold/10 rounded-full mb-5 md:mb-6">
          <svg viewBox="0 0 24 24" width="28" height="28" className="text-gold md:w-8 md:h-8" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 md:mb-4">
          Stay Ahead in <span className="text-gold">Hospitality</span>
        </h2>

        {/* Description */}
        <p className="text-text-gray text-sm md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
          Get weekly insights on local search optimization, guest experience strategies, 
          and growth tactics for African hotels and resorts. Join hospitality professionals 
          who are transforming their properties.
        </p>

        {/* CTA Button */}
        <Link
          href="https://jomogere.substack.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 uppercase tracking-[1px] md:tracking-[2px] text-xs md:text-sm"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" className="md:w-5 md:h-5" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
          Subscribe to Newsletter
        </Link>

        {/* Trust indicator */}
        <p className="text-text-gray/60 text-xs md:text-sm mt-5 md:mt-6">
          Free weekly newsletter. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
