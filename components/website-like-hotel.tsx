import Link from 'next/link'

const STEPS = [
  {
    offline: 'The signboard on the main road',
    online: 'Your Google profile and search results',
    text: 'A guest driving past needs to see your name, know what you are and know you are open. Online, your Google profile is that signboard. If it is missing, outdated or has no photos, guests drive right past.',
  },
  {
    offline: 'Direction signs along the way',
    online: 'Clear menus and links between your pages',
    text: 'Nobody should wonder which turn to take. Every page on your website should point the guest to the next step: rooms, rates, location, then booking. No dead ends.',
  },
  {
    offline: 'The gate and the welcome',
    online: 'Your homepage and the first five seconds',
    text: 'The gate tells a guest whether they are in the right place. Your homepage should do the same quickly, with real photos, your location and what makes you different. A slow or confusing page is a closed gate.',
  },
  {
    offline: 'Reception and the booking desk',
    online: 'Your booking button and contact details',
    text: 'When a guest walks in, someone is ready to help. Online, that is a clear "Book now" button, a WhatsApp number that gets answered and prices that match what you offer elsewhere.',
  },
  {
    offline: 'The visitors’ book and word of mouth',
    online: 'Your reviews and replies',
    text: 'Guests trust what other guests say. Reviews on Google, and your replies to them, are the visitors’ book that new guests read before they come.',
  },
]

export function WebsiteLikeHotel() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="website-like-your-hotel">
      <div className="max-w-[1000px] mx-auto px-4 md:px-10">
        <p className="text-clay text-sm uppercase tracking-[2px] mb-8 text-center">A simple way to think about it</p>

        {/* Speech-bubble quote */}
        <div className="relative px-3 md:px-8 pb-14">
          <span
            className="absolute -top-6 left-0 md:left-2 font-serif text-[88px] md:text-[120px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <span
            className="absolute bottom-6 right-0 md:right-2 font-serif text-[88px] md:text-[120px] leading-none text-[#F9F6F0] select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>

          <div className="relative border-4 border-[#F9F6F0] bg-[#E6AD45] text-[#0D0D0D] rounded-3xl px-6 py-10 md:px-14 md:py-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-center mb-6 text-balance">
              Your Website Should Feel Like Walking Into Your Hotel
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto mb-10">
              Offline, you would never leave guests to find you on their own. You put up a signboard on the road,
              direction signs at every junction, a welcoming gate and someone at reception. Your website needs to do
              the same job online. <span lang="sw" className="font-bold">Karibu</span>, but only after they have found you.
            </p>

            <ol className="border-t-2 border-[#0D0D0D]/40">
              {STEPS.map((s, i) => (
                <li key={s.offline} className="py-5 border-b-2 border-[#0D0D0D]/40 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
                  <div className="mb-2 md:mb-0">
                    <p className="text-xs uppercase tracking-[2px] opacity-70 mb-1">0{i + 1} &middot; Offline</p>
                    <h3 className="text-lg md:text-xl font-bold">{s.offline}</h3>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[2px] opacity-70 mb-1">Online</p>
                    <h4 className="font-bold mb-1">{s.online}</h4>
                    <p className="text-[15px] leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Bubble tail */}
            <div
              className="absolute -bottom-[24px] left-12 md:left-20 w-10 h-10 rotate-45 bg-[#E6AD45] border-r-4 border-b-4 border-[#F9F6F0]"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-4 text-center">
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
