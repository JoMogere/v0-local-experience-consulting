import { Search, Sparkles, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Local Search",
    tagline: "Be found. Be chosen.",
    description: "Dominate local search results and turn online visibility into direct bookings.",
    research: [
      "Google Business Profile audit",
      "Local keyword research",
      "Competitor position analysis",
      "Citation & NAP consistency check",
    ],
    implementation: [
      "GBP optimization & management",
      "Review generation strategy",
      "Citation building & cleanup",
      "Monthly performance tracking",
    ],
  },
  {
    icon: Sparkles,
    title: "Experiential Marketing",
    tagline: "Design moments. Create memories.",
    description: "Transform guest touchpoints into stories worth sharing and experiences worth returning for.",
    research: [
      "Customer experience audit",
      "Guest sentiment analysis",
      "Touchpoint mapping",
      "Review language extraction",
    ],
    implementation: [
      "Experience redesign roadmap",
      "Content strategy from guest voice",
      "Touchpoint optimization",
      "Story-driven marketing assets",
    ],
  },
  {
    icon: TrendingUp,
    title: "Hotel Growth",
    tagline: "Strategy. Revenue. Results.",
    description: "A unified growth plan that ties local search and experiential marketing into measurable revenue outcomes.",
    research: [
      "RevPAR & ADR benchmarking",
      "Repeat guest rate analysis",
      "Channel mix assessment",
      "Direct booking funnel audit",
    ],
    implementation: [
      "90-day growth roadmap",
      "Direct booking strategy",
      "Revenue optimization plan",
      "Quarterly performance reviews",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-navy-deep">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gold uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm mb-3 md:mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Research. Implementation. Growth.
          </h2>
          <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto">
            Three integrated pillars designed to transform your property&apos;s visibility, 
            guest experience, and revenue performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-gold/30 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-5 md:mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gold text-sm italic mb-3 md:mb-4">{service.tagline}</p>
              
              {/* Description */}
              <p className="text-text-gray text-sm leading-relaxed mb-6 md:mb-8">
                {service.description}
              </p>

              {/* Research */}
              <div className="mb-5 md:mb-6">
                <p className="text-[11px] md:text-xs uppercase tracking-[2px] text-white/50 mb-3">
                  Research
                </p>
                <ul className="space-y-2">
                  {service.research.map((item, i) => (
                    <li key={i} className="text-text-gray text-xs md:text-sm flex items-start gap-2">
                      <span className="text-gold mt-1">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation */}
              <div>
                <p className="text-[11px] md:text-xs uppercase tracking-[2px] text-white/50 mb-3">
                  Implementation
                </p>
                <ul className="space-y-2">
                  {service.implementation.map((item, i) => (
                    <li key={i} className="text-text-gray text-xs md:text-sm flex items-start gap-2">
                      <span className="text-gold mt-1">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
