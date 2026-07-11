'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'How much does this cost?',
    a: "It depends on your property size and which pillars you need — Local SEO, Direct Bookings, and Experiential Marketing can be engaged together or separately. We'll give you a clear scope and cost after the free audit call, not a generic package price that doesn't fit your property.",
  },
  {
    q: 'What actually happens in the free audit?',
    a: "We look at your Google Business Profile setup, local search visibility, booking flow, and where guests are likely dropping off — then send back specific, honest findings. No sales pitch disguised as an audit.",
  },
  {
    q: 'How long before we see results?',
    a: 'Some fixes — like a Google Business Profile category correction — can show movement within weeks. Local search rankings and direct booking share build over months, not days. We track and report on progress along the way, not just at the end.',
  },
  {
    q: 'Do you only work with properties in Kenya?',
    a: 'Our work is centered on Kenya and East Africa, where we have hands-on experience with the local market, platforms, and guest behavior. Reach out and we can discuss whether your property is a fit.',
  },
  {
    q: 'Do we need to switch our booking system?',
    a: "Not necessarily. We work with what you already have — Zeevou, Beds24, Lodgify, or others — and fix what's misconfigured before recommending a switch.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="faq">
      <div className="max-w-[900px] mx-auto px-4 md:px-10">
        <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4 text-center">Common Questions</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-12 tracking-[-0.02em] text-center">
          Before You Reach Out
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
              <h3 className="m-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-white/[0.03] hover:bg-white/[0.06] transition-colors font-semibold"
                >
                  <span>{faq.q}</span>
                  <span className={`text-gold transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
              </h3>
              {openIndex === index && (
                <div className="px-6 py-4 text-text-gray text-sm border-t border-white/10">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
