"use client"

import Link from "next/link"
import Image from "next/image"
import { PLAYBOOKS as playbooks } from "@/lib/playbooks-data"


export function Playbooks() {
  return (
    <section id="playbooks" className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-gold-flat uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm mb-3 md:mb-4">Resources</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F9F6F0] mb-4 md:mb-6">
            Playbooks & Guides
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Practical frameworks and strategies distilled from real-world implementations across East African hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {playbooks.map((playbook) => (
            <Link
              key={playbook.title}
              href={`/playbooks/${playbook.slug}`}
              className="group block bg-navy-deep border border-border-flat rounded-sm overflow-hidden transition-colors duration-300 hover:border-gold-flat/40"
            >
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f3ef]">
                  <Image
                    src={playbook.image}
                    alt={playbook.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="text-lg md:text-xl text-[#F9F6F0] font-medium mb-1 group-hover:text-gold-flat transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="text-gold-flat text-xs md:text-sm mb-2 md:mb-3">{playbook.subtitle}</p>
                  <p className="text-text-gray text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                    {playbook.description}
                  </p>
                  <span className="inline-flex items-center text-xs md:text-sm text-gold-flat uppercase tracking-[1px] md:tracking-[2px] group-hover:tracking-[2px] md:group-hover:tracking-[3px] transition-all">
                    View the Playbook →
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
