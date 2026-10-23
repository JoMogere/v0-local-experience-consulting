import Link from 'next/link'

export function WebsiteLikeHotel() {
  return (
    <section className="py-8 md:py-14 bg-navy-deep" id="website-like-your-hotel">
      <div className="max-w-[620px] mx-auto px-8 md:px-4">
        {/* Speech-bubble quote */}
        <figure className="relative px-0 md:px-6 pb-1 md:pb-10 mb-4">
          <span
            className="hidden md:block absolute -top-6 left-2 font-serif text-[84px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span
            className="hidden md:block absolute bottom-6 right-2 font-serif text-[84px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
          <span
            className="md:hidden block h-6 font-serif text-[52px] leading-[0.9] text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative border-[3px] md:border-4 border-[#F9F6F0] bg-[#E6AD45] text-[#0D0D0D] rounded-xl md:rounded-2xl px-5 py-5 md:px-8 md:py-7">
            <blockquote className="font-serif text-[15px] md:text-xl leading-snug font-semibold text-center text-balance">
              Think of your website like your hotel. You would never leave guests to find you on their own. You put up a
              signboard on the road, signs at every junction, a welcoming gate and someone at reception. Your website has
              to do the same job online.
            </blockquote>
            <figcaption className="mt-3 text-center text-xs md:text-sm">
              <span className="font-bold">Jo Mogere</span>
              <span className="opacity-80">, Founder, BookedUp Africa</span>
            </figcaption>

            {/* Bubble tail */}
            <div
              className="absolute -bottom-[15px] left-10 md:left-14 w-6 h-6 rotate-45 bg-[#E6AD45] border-r-[3px] border-b-[3px] border-[#F9F6F0]"
              aria-hidden="true"
            />
          </div>

          <span
            className="md:hidden block h-6 text-right font-serif text-[52px] leading-[0.9] text-[#F9F6F0] select-none mt-3"
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
