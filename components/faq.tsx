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
    <section className="py-16 md:py-24 bg-[#15110E] text-center" id="faq">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F4EFE6] text-4xl md:text-6xl leading-[0.98] text-balance">
          Before you reach out
        </h2>

        <div className="mt-12 md:mt-14 border-t-[3px] border-dashed border-[#E6AD45]/50">
          {FAQS.map((faq, index) => {
            const open = openIndex === index
            return (
              <div key={index} className="border-b-[3px] border-dashed border-[#E6AD45]/50">
                <h3 className="m-0">
                  <button
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                    className="w-full px-2 py-5 font-sign font-semibold text-2xl md:text-3xl text-[#F4EFE6] hover:text-[#E6AD45] focus-visible:text-[#E6AD45] transition-colors text-balance"
                  >
                    {faq.q}
                    <span className="sr-only">{open ? ' (hide answer)' : ' (show answer)'}</span>
                  </button>
                </h3>
                {open && (
                  <p className="font-prose text-lg text-[#EAE5DF]/90 leading-relaxed px-2 pb-6 mx-auto max-w-[52ch]">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
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
