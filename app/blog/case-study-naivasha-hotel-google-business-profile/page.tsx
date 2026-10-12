import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/case-study-naivasha-hotel-google-business-profile',
  },
  title: 'Naivasha Hotel Case Study: 8,427 Google Views',
  description:
    'A Naivasha hotel\'s Google Business Profile: 8,427 views, 443 direction requests and 115 phone calls, plus the local ranking map. Real numbers, including the gap.',
  keywords:
    'Naivasha hotel, Google Business Profile case study, hotel local SEO Kenya, cheap hotels in Naivasha, Google Maps ranking hotels',
}

export default function NaivashaHotelCaseStudy() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link> /{' '}
          <Link href="/case-studies" className="hover:text-orange-500">Case Studies</Link> / Naivasha Hotel
        </div>

        <header className="mb-12">
          <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            A Naivasha Hotel: 8,427 Google Views, 443 Direction Requests, 115 Calls
          </h1>
          <p className="text-xl text-text-gray leading-relaxed">
            What a hotel's Google Business Profile looks like when local search is working, and the one number in it that still needs fixing. The property is not named, and every figure below is taken from the profile's own Google dashboard.
          </p>
        </header>

        <section className="mb-12">
          <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
            <Image
              src="/case-studies/naivasha-hotel-gbp-insights.jpg"
              alt="Google Business Profile insights for a Naivasha hotel: 8,427 total views split into 2,704 mobile search, 4,490 mobile Maps, 524 desktop search and 709 desktop Maps; 2,908 searches; 443 direction requests; 115 phone calls; 0 website visits; 0 messages."
              width={1261}
              height={641}
              className="w-full h-auto"
            />
          </div>
          <p className="text-text-gray text-sm mt-3 text-center">
            The hotel's Google Business Profile insights. The date range isn't shown in the screenshot.
          </p>
        </section>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Real Numbers</h2>
            <ul className="space-y-2 text-text-gray list-disc list-inside">
              <li><strong className="text-white">8,427</strong> total views of the profile</li>
              <li><strong className="text-white">2,908</strong> searches that led to the profile</li>
              <li><strong className="text-white">443</strong> direction requests</li>
              <li><strong className="text-white">115</strong> phone calls</li>
              <li><strong className="text-white">0</strong> website visits and <strong className="text-white">0</strong> messages recorded</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Most Guests Found This Hotel on Their Phone, on the Map</h2>
            <p className="text-text-gray mb-4">
              Of the 8,427 views, <strong className="text-white">4,490 (53.3%) came from mobile Google Maps</strong> and another 2,704 (32.1%) from mobile search. That is about 85% of all views on a phone. Desktop made up only around 15%.
            </p>
            <p className="text-text-gray">
              For a hotel, that means the first impression happens on a small screen, in the map results, usually while the guest is comparing nearby places to stay. Your photos, rating and category matter more than your website's homepage at that moment. It's the pattern we describe in the{' '}
              <Link href="/blog/google-business-profile-hotels#insights" className="text-orange-500 hover:text-orange-400">
                Maps vs. Search views section of our Google Business Profile guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What People Searched For</h2>
            <p className="text-text-gray mb-4">Google listed the top searches that led to the profile:</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <ol className="space-y-2 text-text-gray">
                <li className="flex justify-between"><span>1. hotels</span><strong className="text-white">2,057</strong></li>
                <li className="flex justify-between"><span>2. cheap hotels in naivasha</span><strong className="text-white">255</strong></li>
                <li className="flex justify-between"><span>3. affordable hotels in naivasha</span><strong className="text-white">201</strong></li>
              </ol>
            </div>
            <p className="text-text-gray mt-4">
              About 71% of those searches were the single word "hotels", which people type when they are near a place and looking for somewhere to stay now. The rest are price-led searches that name Naivasha. That tells a hotel what guests care about: location and affordability, in that order.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">The Ranking Map</h2>
            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/case-studies/naivasha-hotel-ranking-map.jpg"
                alt="Local ranking map around Lake Naivasha. A grid of green circles, most numbered 2, with two orange circles numbered 4 near the centre, showing the hotel's ranking position at each point on the grid."
                width={907}
                height={599}
                className="w-full h-auto"
              />
            </div>
            <p className="text-text-gray text-sm mt-3 text-center">
              A local ranking grid scan around Lake Naivasha, taken 12 August 2025.
            </p>
            <p className="text-text-gray mt-4">
              A ranking grid checks where a hotel appears in Google Maps from many points around it, not just from one spot. Each circle shows the hotel's position at that location. Most points on this map show position 2, in green, with only two points near the centre showing position 4. Showing up in the top few results across a wide area, not only next door, is what drives the Maps views above.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-orange-400 mb-3">The Gap: 558 Actions, 0 Website Visits</h2>
            <p className="text-text-gray mb-4">
              Guests asked for directions 443 times and called 115 times. Yet the dashboard shows zero website visits. A hotel getting that much attention should be getting some clicks to its website too.
            </p>
            <p className="text-text-gray mb-4">
              A zero like this usually means the profile has no website link, the link isn't tracked properly, or guests are being sent somewhere that doesn't register. We can't tell which from a screenshot, but it is the first thing we would check, and it is exactly the kind of leak the{' '}
              <Link href="/hotel-booking-leak-audit-kenya" className="text-orange-500 hover:text-orange-400">
                booking leak audit
              </Link>{' '}
              looks for. Fixing it, and adding the free Google booking link described in our{' '}
              <Link href="/blog/google-business-profile-hotels#booking" className="text-orange-500 hover:text-orange-400">
                Google Business Profile guide
              </Link>
              , would give those guests a way to book directly instead of calling or walking in.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">What Hotels Can Take From This</h2>
            <ul className="space-y-2 text-text-gray list-disc list-inside">
              <li>Optimise your profile for phones first. That is where most guests meet you.</li>
              <li>Your Google Maps ranking, not your website's homepage, is what brings the first views.</li>
              <li>Check your insights for website visits. If they read zero while directions and calls are high, you are losing bookings you have already earned.</li>
              <li>Give guests a direct way to book from the profile so attention turns into revenue without a commission.</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">More Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
              <p className="text-sm text-text-gray mt-2">124 free booking link clicks and 205 organic clicks</p>
            </Link>
            <Link href="/blog/case-study-silent-palms-villa" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Silent Palms Villa</h3>
              <p className="text-sm text-text-gray mt-2">What early-stage local SEO looks like</p>
            </Link>
            <Link href="/blog/google-business-profile-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Google Business Profile Setup Guide</h3>
              <p className="text-sm text-text-gray mt-2">Categories, photos, posts and the free booking link</p>
            </Link>
            <Link href="/playbooks/local-search-direct-bookings-playbook" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Playbook: Turn Local Searches Into Direct Bookings</h3>
              <p className="text-sm text-text-gray mt-2">The step-by-step version</p>
            </Link>
          </div>
        </section>

        <section className="mt-12 p-8 bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want Us to Check Your Profile?</h2>
          <p className="text-text-gray mb-6">
            We'll look at your Maps visibility, your website and booking links, and where guests are slipping away.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors"
          >
            Claim My Free Growth Audit →
          </Link>
        </section>
      </div>
    </article>
  )
}
