import Link from 'next/link'

export function WebsiteLikeHotel() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="website-like-your-hotel">
      <div className="max-w-[1000px] mx-auto px-4 md:px-10">
        {/* Speech-bubble quote */}
        <figure className="relative px-0 md:px-8 pb-2 md:pb-12 mb-6">
          <span
            className="hidden md:block absolute -top-6 left-2 font-serif text-[120px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span
            className="hidden md:block absolute bottom-6 right-2 font-serif text-[120px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
          <span
            className="md:hidden block h-9 font-serif text-[72px] leading-[0.9] text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative border-[3px] md:border-4 border-[#F9F6F0] bg-[#E6AD45] text-[#0D0D0D] rounded-2xl md:rounded-3xl px-6 py-8 md:px-16 md:py-12">
            <blockquote className="font-serif text-xl md:text-3xl leading-snug font-bold text-center text-balance">
              Think of your website like your hotel. You would never leave guests to find you on their own. You put up a
              signboard on the road, signs at every junction, a welcoming gate and someone at reception. Your website has
              to do the same job online.
            </blockquote>
            <figcaption className="mt-6 text-center text-sm md:text-base">
              <span className="font-bold">Jo Mogere</span>
              <span className="opacity-80">, Founder, BookedUp Africa</span>
            </figcaption>

            {/* Bubble tail */}
            <div
              className="absolute -bottom-[24px] left-12 md:left-20 w-10 h-10 rotate-45 bg-[#E6AD45] border-r-4 border-b-4 border-[#F9F6F0]"
              aria-hidden="true"
            />
          </div>

          <span
            className="md:hidden block h-9 text-right font-serif text-[72px] leading-[0.9] text-[#F9F6F0] select-none mt-5"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </figure>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity text-sm md:text-base uppercase tracking-[0.5px]"
          >
            Walk through your hotel&apos;s website with us
          </Link>
        </div>
      </div>
    </section>
  )
}
