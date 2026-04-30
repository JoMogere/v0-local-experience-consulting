import { Logo } from "./logo"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="absolute top-0 w-full z-[1000] py-8 border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo />
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 uppercase tracking-[2px] text-[13px] no-underline"
          >
            Start Your Audit
          </Link>
        </div>
      </div>
    </nav>
  )
}
