import { Zap, Users, LineChart } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Growth Partnership Retainer",
    tagline: "Consistent growth, every month.",
    description: "A long term partnership managing your Local SEO, reviews, and booking performance to deliver consistent growth in direct bookings.",
    research: [
      "Local SEO audit",
      "Review performance analysis",
      "Booking funnel assessment",
      "Competitor benchmarking",
    ],
    implementation: [
      "Monthly Local SEO management",
      "Review generation & monitoring",
      "Booking performance tracking",
      "Quarterly strategy reviews",
    ],
  },
  {
    icon: Users,
    title: "Guest Experience (CX) Optimization",
    tagline: "From discovery to return visit.",
    description: "Improve the full guest journey from discovery to post stay engagement to increase repeat bookings, referrals, and five star reviews.",
    research: [
      "Guest experience audit",
      "Touchpoint mapping",
      "Review sentiment analysis",
      "Repeat booking rate analysis",
    ],
    implementation: [
      "CX optimization roadmap",
      "Touchpoint redesign",
      "Post-stay engagement strategy",
      "Referral program setup",
    ],
  },
  {
    icon: LineChart,
    title: "Direct Booking & Distribution Audit",
    tagline: "Identify leaks. Reclaim revenue.",
    description: "Identify where bookings are leaking to OTAs and get a clear action plan to improve visibility, conversions, and direct revenue.",
    research: [
      "OTA vs direct booking ratio",
      "Revenue leakage analysis",
      "Website conversion audit",
      "Competitor distribution strategy",
    ],
    implementation: [
      "Direct booking strategy",
      "Website optimization plan",
      "OTA reduction roadmap",
      "Revenue recovery tracking",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-navy-deep">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-orange-500 uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm mb-3 md:mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6">
            Three Core Offerings
          </h2>
          <p className="text-text-gray text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive solutions to maximize your hotel's direct bookings, 
            guest satisfaction, and revenue across East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 hover:border-orange-500/30 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/10 rounded-sm flex items-center justify-center mb-5 md:mb-6 group-hover:bg-orange-500/20 transition-colors">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-orange-500 text-sm italic mb-3 md:mb-4">{service.tagline}</p>
              
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
                      <span className="text-orange-500 mt-1">+</span>
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
                      <span className="text-orange-500 mt-1">+</span>
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
