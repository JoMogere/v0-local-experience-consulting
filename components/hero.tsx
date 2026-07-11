import { MapPin, Star, TrendingUp } from "lucide-react"
import Image from "next/image"

const icons = [
  { icon: MapPin, label: "Local SEO" },
  { icon: Star, label: "Experiential Marketing" },
  { icon: TrendingUp, label: "Direct Bookings" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-48 pb-24 md:pt-32 md:pb-0 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=60&w=1600"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-20"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(18, 24, 34, 0.98) 35%, rgba(18, 24, 34, 0.4))`,
        }}
      />
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
        <div className="max-w-[700px] relative z-5 text-center md:text-left">
          <h1 className="text-[clamp(32px,6vw,72px)] font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-white text-balance">
            Research and implementation
            <span className="block text-lg md:text-[26px] font-light mt-2.5 tracking-normal">
              for <span className="text-orange-500 font-bold">local SEO</span>,{" "}
              <span className="text-orange-500 font-bold">experiential marketing</span>,
              <br className="hidden md:block" />
              and <span className="text-orange-500 font-bold">direct bookings</span>
            </span>
          </h1>
          <div className="w-20 h-px bg-orange-500 my-8 md:my-10 mx-auto md:mx-0" />
          <p className="font-serif italic text-orange-500 text-lg md:text-[22px] tracking-[0.5px]">
            Search. Stay. Succeed.
          </p>
          <div className="flex gap-8 md:gap-15 mt-10 md:mt-15 justify-center md:justify-start">
            {icons.map((item, index) => (
              <div
                key={index}
                className="text-center md:text-left opacity-90 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-100"
              >
                <div className="w-10 h-10 md:w-[45px] md:h-[45px] mb-2 md:mb-3 flex items-center justify-center mx-auto md:mx-0">
                  <item.icon className="w-full h-full text-orange-500 fill-orange-500" />
                </div>
                <div className="text-[11px] md:text-[13px] font-bold text-white uppercase tracking-[1px]">
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
