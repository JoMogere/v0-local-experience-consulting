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
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-clay text-sm uppercase tracking-[2px] mb-4">A simple way to think about it</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-4 tracking-[-0.02em] text-[#F9F6F0]">
          Your Website Should Feel Like Walking Into Your Hotel
        </h2>
        <div className="relative max-w-3xl mb-14">
          <figure className="border border-gold-flat/60 px-6 py-6 md:px-8 md:py-7">
            <p className="text-xs uppercase tracking-[2px] text-gold-flat mb-3">Think of it this way</p>
            <blockquote className="text-lg md:text-xl text-[#F9F6F0] leading-relaxed">
              &ldquo;Offline, you would never leave guests to find you on their own. You put up a signboard on
              the road, direction signs at every junction, a welcoming gate and someone at reception. Your
              website needs to do the same job online.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-text-gray text-sm">
              <span lang="sw" className="text-gold-flat font-medium">Karibu</span>, but only after they have found you.
            </figcaption>
          </figure>
          {/* thought trail */}
          <div className="absolute left-8 top-full flex flex-col gap-1.5 pt-2" aria-hidden="true">
            <span className="block w-3 h-3 rounded-full border border-gold-flat/60" />
            <span className="block w-2 h-2 rounded-full border border-gold-flat/60 ml-1" />
            <span className="block w-1.5 h-1.5 rounded-full border border-gold-flat/60 ml-1.5" />
          </div>
        </div>

        <ol className="border border-border-flat">
          {STEPS.map((s, i) => (
            <li
              key={s.offline}
              className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] border-b last:border-b-0 border-border-flat"
            >
              <div className="p-6 md:p-8 bg-navy-alt">
                <p className="text-xs uppercase tracking-[2px] text-text-gray mb-2">0{i + 1} &middot; Offline</p>
                <h3 className="text-xl font-bold text-[#F9F6F0]">{s.offline}</h3>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[2px] text-gold-flat mb-2">Online</p>
                <h3 className="text-lg font-bold mb-2 text-[#F9F6F0]">{s.online}</h3>
                <p className="text-text-gray">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
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
