import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Get Your Free Hotel Growth Audit | BookedUp Africa',
  description: 'Request a free audit covering local SEO, direct bookings, and experiential marketing for your hotel or resort. We reply within 24 hours.',
  keywords: 'free hotel audit, hotel SEO audit, hotel marketing consultation Kenya',
}

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to request a free growth audit for my property."
  )

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <header className="text-center mb-12">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Free Audit</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Get a Free Growth Audit for Your Property
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            Tell us a bit about your property and we'll send back a short, honest review covering local search visibility, direct booking readiness, and quick wins — no obligation.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" width="24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Fastest: WhatsApp</h2>
            <p className="text-text-gray text-sm mb-6">Message us your property name and location — we typically reply the same day.</p>
            <Link
              href={`https://wa.me/+254799022671?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm hover:opacity-90 transition-opacity"
            >
              Message on WhatsApp
            </Link>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" width="24" fill="none" stroke="#f97316" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Prefer to Talk It Through?</h2>
            <p className="text-text-gray text-sm mb-6">Book a free 30-minute call and we'll walk through your property's growth audit live.</p>
            <Link
              href="https://calendly.com/mogerejulius41/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-sm hover:bg-orange-600 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
          <h2 className="text-lg font-bold mb-3">Prefer email?</h2>
          <p className="text-text-gray text-sm mb-4">
            Include your property name, location, and website — we'll get back to you within 24 hours.
          </p>
          <a href="mailto:mogerejulius41@gmail.com" className="text-orange-500 hover:text-orange-400 font-bold">
            mogerejulius41@gmail.com
          </a>
        </section>
      </div>
    </main>
  )
}
