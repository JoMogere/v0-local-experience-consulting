import { MapPin, Star, TrendingUp } from "lucide-react"

const icons = [
  { icon: MapPin, label: "Local Search" },
  { icon: Star, label: "Experiential" },
  { icon: TrendingUp, label: "Hotel Growth" },
]

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center relative bg-cover bg-center pt-40 pb-24 md:pt-0 md:pb-0"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(18, 24, 34, 0.98) 35%, rgba(18, 24, 34, 0.4)), url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000')`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-10 w-full">
        <div className="max-w-[700px] relative z-5 text-center md:text-left">
          <h1 className="text-[clamp(44px,6vw,72px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-white text-balance">
            Research and implementation
          </h1>
          <p className="text-[26px] font-light mb-2.5">
            for <span className="text-gold font-bold">local search</span>,{" "}
            <span className="text-gold font-bold">experiential marketing</span>,
            <br className="hidden md:block" />
            and <span className="text-gold font-bold">hotel growth</span>
          </p>
          <div className="w-20 h-px bg-gold my-10 mx-auto md:mx-0" />
          <p className="font-serif italic text-gold text-[22px] tracking-[0.5px]">
            Search. Stay. Succeed.
          </p>
          <div className="flex gap-15 mt-15 justify-center md:justify-start">
            {icons.map((item, index) => (
              <div
                key={index}
                className="text-left opacity-90 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-100"
              >
                <div className="w-[45px] h-[45px] mb-3 flex items-center justify-center">
                  <item.icon className="w-full h-full text-gold fill-gold" />
                </div>
                <div className="text-[13px] font-bold text-white uppercase tracking-[1px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
