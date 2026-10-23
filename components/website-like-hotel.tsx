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
        <p className="text-clay text-sm uppercase tracking-[2px] mb-4 text-center">A simple way to think about it</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-12 tracking-[-0.02em] text-[#F9F6F0] text-center text-balance">
          Your Website Should Feel Like Walking Into Your Hotel
        </h2>

        {/* Speech-bubble quote */}
        <figure className="relative px-0 md:px-8 pb-2 md:pb-12 mb-16">
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

        <p className="text-text-gray max-w-2xl mx-auto text-center mb-8">
          Here is what that looks like, step by step. <span lang="sw" className="text-gold-flat font-medium">Karibu</span>,
          but only after they have found you.
        </p>

        <ol className="border border-border-flat">
          {STEPS.map((s, i) => (
            <li
              key={s.offline}
              className="md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border-b last:border-b-0 border-border-flat"
            >
              <div className="p-5 md:p-8 bg-navy-alt">
                <p className="text-xs uppercase tracking-[2px] text-text-gray mb-2">0{i + 1} &middot; Offline</p>
                <h3 className="text-xl font-bold text-[#F9F6F0]">{s.offline}</h3>
              </div>
              <div className="p-5 md:p-8">
                <p className="text-xs uppercase tracking-[2px] text-gold-flat mb-2">Online</p>
                <h4 className="text-lg font-bold mb-2 text-[#F9F6F0]">{s.online}</h4>
                <p className="text-text-gray">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
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
