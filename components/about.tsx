export function About() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep/50" id="about">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
          <div>
            <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Who's Behind This</p>
            <h2 className="text-3xl md:text-[42px] font-bold tracking-[-0.02em]">Julius Mogere</h2>
            <p className="text-text-gray mt-2">Founder, BookedUp Africa</p>
          </div>
          <div className="space-y-4 text-text-gray">
            <p>
              BookedUp Africa isn't a general agency that added "hotels" to a service list. It's built specifically around Local SEO, Direct Bookings, and Experiential Marketing for hotels and resorts across Kenya and East Africa — informed by hands-on work managing channel managers, booking engines, and Google Business Profiles for real properties, not theory.
            </p>
            <p>
              That includes direct experience with platforms like Zeevou, Beds24, and Lodgify, and ongoing work with properties including Silent Palms Villa, Elsamere Lodge, Mt Longonot Country Resort, Luna Light Guest House, Wild Wood Cottages, and Jazby Guest House.
            </p>
            <p className="italic text-white/80">
              "Research and implementation for local search, experiential marketing, and direct bookings — for hotels that want the work done, not just a report explaining it."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
