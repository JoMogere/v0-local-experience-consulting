"use client"

import { useState } from "react"
import Image from "next/image"

const properties = [
  {
    name: "Wild Wood Cottage",
    location: "Naivasha",
    description: "Flagship Implementation.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Boutique Nairobi",
    location: "Nairobi",
    description: "Urban Luxury Experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
  {
    name: "Zanzibar Retreat",
    location: "Zanzibar",
    description: "Coastal Paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1200",
  },
]

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-navy-deep" id="portfolio">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-bold mb-10 tracking-[-0.02em]">Portfolio</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-15">
          <div className="relative rounded overflow-hidden h-[400px] lg:h-[500px] group">
            <Image
              src={properties[activeIndex].image}
              alt={properties[activeIndex].name}
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,24,34,0.9)] to-transparent flex flex-col justify-end p-10">
              <h3 className="text-[32px] font-bold">
                {properties[activeIndex].name} {properties[activeIndex].location}
              </h3>
              <p className="text-white/70">{properties[activeIndex].description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {properties.map((property, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`bg-white/[0.03] border p-8 rounded text-left transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                  index === activeIndex
                    ? "border-gold bg-gold/10"
                    : "border-white/5 hover:border-white/20"
                }`}
              >
                <h4 className="font-bold text-lg">{property.name}</h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
