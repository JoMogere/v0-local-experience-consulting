import { Logo } from "./logo"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="absolute top-0 w-full z-[1000] py-4 md:py-8 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center gap-4">
          <Logo />
          <Link
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 uppercase tracking-[1px] md:tracking-[2px] text-[11px] md:text-[13px] no-underline whitespace-nowrap"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  )
}
