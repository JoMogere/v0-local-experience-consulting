"use client"

import { useState } from "react"
import Image from "next/image"

const properties = [
  {
    name: "Mt Longonot Country Resort",
    location: "Naivasha, Nakuru",
    description: "Scenic mountain retreat experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-F8khrM3JM3xjDsBMr54Pw0HRq7Bnwp.png",
  },
  {
    name: "Luna Light Guest House",
    location: "Karagita, Naivasha",
    description: "Comfortable lakeside accommodation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Ybcj0VLPG4VU9vmBDtjFU9vJn2RAC.png",
  },
  {
    name: "Elsamere Lodge",
    location: "Moi South Lake Road, Naivasha",
    description: "Historic lakeside conservation lodge.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pOrbsQbg4KAVjV7KryMlWohmk6cF1b.png",
  },
  {
    name: "Wild Wood Cottages",
    location: "Karagita, Naivasha",
    description: "Rustic woodland escape.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bKWd4awGx6brDWRGCGvarPPyZiMRbJ.png",
  },
  {
    name: "Silent Palms Villa",
    location: "Diani Beach, Coast Province",
    description: "Coastal beach paradise.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Pxc3SmAtoxwLg8TOmjUEoMCiO1gEPv.png",
  },
  {
    name: "Jazby Guest House",
    location: "Naivasha",
    description: "Welcoming guest accommodation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NOKaJNSzjGYTgG4mGhVfew8v8pGnMD.png",
  },
]

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="portfolio">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-[42px] font-bold mb-8 md:mb-10 tracking-[-0.02em]">Portfolio</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 md:gap-8 mt-8 md:mt-15">
          <div className="relative rounded overflow-hidden h-[280px] md:h-[400px] lg:h-[500px] group order-1 lg:order-none">
            <Image
              src={properties[activeIndex].image}
              alt={properties[activeIndex].name}
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,34,0.9)] to-transparent flex flex-col justify-end p-5 md:p-10">
              <h3 className="text-xl md:text-[32px] font-bold">
                {properties[activeIndex].name}
              </h3>
              <p className="text-white/70 text-sm md:text-base">{properties[activeIndex].location}</p>
            </div>
          </div>
          <div className="flex flex-row lg:flex-col gap-2 md:gap-5 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 order-2 lg:order-none">
            {properties.map((property, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`bg-white/[0.03] border p-3 md:p-8 rounded text-left transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex-shrink-0 lg:flex-shrink min-w-[140px] lg:min-w-0 ${
                  index === activeIndex
                    ? "border-gold bg-gold/10"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <span className="block font-bold text-sm md:text-lg">{property.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
