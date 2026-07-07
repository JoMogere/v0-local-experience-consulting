'use client'

import { Logo } from "./logo"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Articles" },
    { href: "/videos", label: "Videos" },
    { href: "/resources", label: "Resources" },
  ]

  return (
    <nav className="fixed top-0 w-full z-[1000] py-4 md:py-6 border-b border-white/10 bg-navy-deep/95 backdrop-blur-sm">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-gray hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://calendly.com/mogerejulius41/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 uppercase tracking-[1px] text-[12px] no-underline whitespace-nowrap"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-gray hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-text-gray hover:text-white hover:bg-white/5 rounded transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button Mobile */}
              <Link
                href="https://calendly.com/mogerejulius41/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full px-4 py-2.5 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm text-center text-sm uppercase tracking-[1px] no-underline"
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
