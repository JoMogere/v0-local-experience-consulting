"use client"

import Link from "next/link"
import { BookOpen, TrendingUp } from "lucide-react"

const playbooks = [
  {
    title: "The African Hospitality CX Playbook",
    subtitle: "Boost Revenue & Guest Experience",
    description: "A comprehensive guide to elevating customer experience and driving revenue growth for African hospitality businesses.",
    icon: TrendingUp,
    link: "https://selar.com/23200vr569",
  },
  {
    title: "Turn Local Searches Into Direct Bookings",
    subtitle: "A Practical Guide for Hotels & Resorts",
    description: "Master local search optimization to convert online searches into direct bookings and reduce dependency on OTAs.",
    icon: BookOpen,
    link: "https://selar.com/781011tnj1",
  },
]

export function Playbooks() {
  return (
    <section id="playbooks" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[3px] text-sm mb-4">Resources</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Playbooks & Guides
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto">
            Practical frameworks and strategies distilled from real-world implementations across East African hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {playbooks.map((playbook) => (
            <Link
              key={playbook.title}
              href={playbook.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-navy-deep border border-white/5 p-8 rounded-sm transition-all duration-300 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <playbook.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white font-medium mb-1 group-hover:text-gold transition-colors">
                    {playbook.title}
                  </h3>
                  <p className="text-gold text-sm mb-3">{playbook.subtitle}</p>
                  <p className="text-text-gray text-sm leading-relaxed mb-4">
                    {playbook.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-gold uppercase tracking-[2px] group-hover:tracking-[3px] transition-all">
                    Get the Playbook
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
