import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/google-business-profile-hotels',
  },
  title: "Google Business Profile for Hotels: Complete Setup Guide",
  description: "Google My Business for hotels, explained. Set up your Business Profile, choose categories, add photos and posts, and activate the free booking link.",
  keywords: 'Google Business Profile hotels, Google My Business for hotels, hotel Google Business Profile optimization, hotel GBP optimization, Google Posts, hotel categories, booking links',
}

export default function GBPPillar() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><Link href="/blog" className="hover:text-orange-500">Blog</Link> / Google Business Profile for Hotels</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Google Business Profile: The Complete Setup Guide</h1>
          <p className="text-xl text-text-gray mb-6">
            This is the single most-visited page about your hotel that you don't control the design of. Here's how to make sure it's working for you, not against you. (Still called "Google My Business" by a lot of people — Google renamed it Business Profile back in 2021, but the setup and the stakes haven't changed.)
          </p>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-sm text-text-gray">
            <li><Link href="#setup" className="text-orange-500 hover:text-orange-400">Setup & Verification</Link></li>
            <li><Link href="#kenya" className="text-orange-500 hover:text-orange-400">Setting Up in Kenya: Addresses, Verification, Seasons</Link></li>
            <li><Link href="#categories" className="text-orange-500 hover:text-orange-400">Why Your Category Matters More Than You Think</Link></li>
            <li><Link href="#photos" className="text-orange-500 hover:text-orange-400">Photos That Actually Increase Visibility</Link></li>
            <li><Link href="#posts" className="text-orange-500 hover:text-orange-400">Using Google Posts</Link></li>
            <li><Link href="#booking" className="text-orange-500 hover:text-orange-400">The Free Booking Link Most Hotels Ignore</Link></li>
            <li><Link href="#reviews" className="text-orange-500 hover:text-orange-400">Review Management</Link></li>
            <li><Link href="#insights" className="text-orange-500 hover:text-orange-400">Reading Your GBP Insights</Link></li>
            <li><Link href="#faq" className="text-orange-500 hover:text-orange-400">Frequently Asked Questions</Link></li>
            <li><Link href="#final-thoughts" className="text-orange-500 hover:text-orange-400">Final Thoughts</Link></li>
          </ul>
        </nav>

        <section className="prose prose-invert max-w-none space-y-8 text-text-gray leading-relaxed">
          <div id="setup">
            <h2 className="text-3xl font-bold text-white">Setup & Verification</h2>
            <p>If your profile isn't claimed and verified, nothing else on this page matters yet. Start here:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Claim your profile if it's currently unclaimed</li>
              <li>Complete verification (usually by mail, sometimes by phone)</li>
              <li>Double-check your name, address, and phone number are exactly accurate</li>
              <li>Write a complete description that actually says what makes you worth booking</li>
              <li>Fill in every relevant business attribute Google offers</li>
            </ul>
          </div>

          <div id="kenya">
            <h2 className="text-3xl font-bold text-white">Setting Up in Kenya: Addresses, Verification, Seasons</h2>
            <p>
              Most Google Business Profile advice is written for cities with tidy street addresses. Lodges, camps and guesthouses across Kenya often don't fit that mould, and that's where profiles go wrong. These are the Kenya-specific things worth getting right:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">A P.O. Box is not an address.</strong> Google doesn't accept a P.O. Box as your business location, even though it's how many Kenyan businesses are listed. Use the physical location of the property.
              </li>
              <li>
                <strong className="text-white">No street name? Be precise another way.</strong> Place the map pin on your actual entrance, not the nearest town. Add your Google Plus Code and plain landmark directions to your description, for example how far you are past a well-known trading centre or junction, and on which side of the road.
              </li>
              <li>
                <strong className="text-white">Choose verification that suits your location.</strong> If Google offers video verification, it's often the faster route for a remote property, because postcards can be slow or unreliable in rural areas. Have your signage, the premises and proof you run the property ready to show on camera.
              </li>
              <li>
                <strong className="text-white">Pick the category that matches what you are.</strong> Depending on your property that could be Safari lodge, Lodge, Resort hotel, Guest house or Bed &amp; breakfast. Google adjusts its category list over time, so check the exact names in your dashboard.
              </li>
              <li>
                <strong className="text-white">Keep your details identical everywhere.</strong> Your name, address and phone number should match across your website, social pages and listings. We explain why in our{' '}
                <Link href="/guides/local-seo-hotels/nap-consistency" className="text-orange-500 hover:text-orange-400">NAP consistency guide</Link>.
              </li>
              <li>
                <strong className="text-white">Plan around your seasons.</strong> Refresh photos and Posts ahead of your busy periods. For Mara-area properties that is roughly the July to October migration season, and for most of Kenya it also includes the December holidays and Easter.
              </li>
              <li>
                <strong className="text-white">Make it easy to reach you on WhatsApp.</strong> Many Kenyan guests prefer to message before booking. Put a click-to-chat WhatsApp link on the website your profile points to, and keep your listed phone number answered.
              </li>
            </ul>
          </div>

          <div id="categories">
            <h2 className="text-3xl font-bold text-white">Why Your Category Matters More Than You Think</h2>
            <p>
              This is the single most common reason a hotel doesn't show up in local search — and it's a two-minute fix once you know to check it.
            </p>
            <p>
              Your primary category should be "Hotel," or the specific type that matches you (boutique, resort, guesthouse). Add 2-3 relevant secondary categories — "Restaurant" if you have one, for example — but don't stack in categories that don't genuinely apply. It dilutes relevance instead of adding it.
            </p>
          </div>

          <div id="photos">
            <h2 className="text-3xl font-bold text-white">Photos That Actually Increase Visibility</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Aim for 50+ high-quality photos as a baseline, not a ceiling</li>
              <li>Cover the exterior, lobby, every room type, and common areas — guests want to see what they're actually booking</li>
              <li>Update seasonally so the profile doesn't look abandoned</li>
              <li>Encourage guests and staff to add their own — third-party photos carry weight Google's algorithm notices</li>
            </ul>
          </div>

          <div id="posts">
            <h2 className="text-3xl font-bold text-white">Using Google Posts</h2>
            <p>Google Posts show up directly in search results and signal an active, maintained profile. Worth posting regularly about:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Offers and seasonal packages</li>
              <li>New amenities or renovations</li>
              <li>Local events happening near you</li>
            </ul>
          </div>

          <div id="booking">
            <h2 className="text-3xl font-bold text-white">The Free Booking Link Most Hotels Ignore</h2>
            <p>
              Google offers verified hotels a free "Book" button directly on their profile — no OTA commission, no middleman. Most hotels never activate it, either because they don't know it exists or their booking engine isn't connected properly to accept it.
            </p>
            <figure className="rounded-lg overflow-hidden border border-white/10 bg-white/5 my-6">
              <Image
                src="/infographics/which-hotel-gets-the-booking.jpg"
                alt="Illustration comparing two hotels in Google search: The Riverside Inn, with no booking option, a July 2021 update and a one-star review, beside Sunset View Hotel, with Website, Directions and Book online buttons, fresh photos and a five-star review."
                width={1400}
                height={764}
                className="w-full h-auto"
              />
              <figcaption className="text-text-gray text-sm text-center p-3">
                Illustration: two hotels, same search. The one with a booking button, fresh updates and answered reviews wins the guest.
              </figcaption>
            </figure>
            <p>
              We saw exactly what this looks like in practice with Elsamere Lodge:{' '}
              <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 hover:text-orange-400">
                124 clicks on their free booking link in six months
              </Link>{' '}
              — zero commission, pure high-intent traffic. The setup steps are covered in our{' '}
              <Link href="/guides/direct-bookings/booking-engine-setup" className="text-orange-500 hover:text-orange-400">
                booking engine setup guide
              </Link>
              .
            </p>
          </div>

          <div id="reviews">
            <h2 className="text-3xl font-bold text-white">Review Management</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Respond to every review within 24-48 hours — including, especially, the negative ones</li>
              <li>Thank positive reviewers by name where it feels natural, not with a copy-pasted line</li>
              <li>Watch for patterns in feedback — three guests mentioning the same issue is a signal, not a coincidence</li>
              <li>Ask for reviews at checkout using your profile's review link, and never offer a discount or gift in exchange. It breaks Google's rules and can get reviews removed</li>
              <li>Reply in the language the guest wrote in, English or Swahili. It shows a real person is reading</li>
            </ul>
            <p className="mt-4">
              Want a repeatable process? See{' '}
              <Link href="/guides/local-seo-hotels/generate-hotel-reviews" className="text-orange-500 hover:text-orange-400">how to generate hotel reviews</Link>.
            </p>
          </div>

          <div id="insights">
            <h2 className="text-3xl font-bold text-white">Reading Your GBP Insights</h2>
            <p>Google gives you real data on how people find and interact with your profile. The ones worth actually watching:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Which search queries you're actually appearing for</li>
              <li>How many people click through to your website vs. call directly</li>
              <li>Direction requests — a real signal of local intent</li>
              <li>Booking link clicks, if you've got one connected</li>
            </ul>
            <p className="mt-4">
              One split worth understanding specifically: <strong className="text-white">Maps views vs. Search views</strong>, broken out by mobile and desktop. Maps views come from people actively browsing the map — often comparing you against nearby properties in real time. Search views come from people typing a specific query. Here's what that split typically looks like in practice:
            </p>
            <div className="rounded-lg overflow-hidden border border-white/10 bg-white/5 mt-6 mb-3">
              <Image
                src="/infographics/gbp-insights-example.jpeg"
                alt="Example Google Business Profile insights showing a breakdown of mobile and desktop views split between Maps views and Search views, with mobile Maps views typically outweighing mobile Search views."
                width={1364}
                height={501}
                className="w-full h-auto"
              />
            </div>
            <p className="text-text-gray text-sm text-center">
              An example of the Maps vs. Search views breakdown in Google Business Profile Insights.
            </p>
          </div>

          <div id="faq">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-white mt-6">Is Google My Business the same as Google Business Profile?</h3>
            <p>Yes. Google renamed Google My Business to Google Business Profile, so guides and articles using either name are talking about the same free listing.</p>

            <h3 className="text-xl font-semibold text-white mt-6">Does it cost anything?</h3>
            <p>No. Creating, verifying and managing your profile is free. You only pay if you choose to run Google Ads on top of it.</p>

            <h3 className="text-xl font-semibold text-white mt-6">Can I use a P.O. Box as my hotel's address?</h3>
            <p>No. Google needs the physical location of your property. If you have no formal street address, place the pin precisely, add a Plus Code, and describe how to find you using landmarks.</p>

            <h3 className="text-xl font-semibold text-white mt-6">How long does verification take?</h3>
            <p>It varies by method and by your location. Video or phone verification can be quick when offered, while postcards can take noticeably longer, especially for remote properties. If one method stalls, check whether Google offers another.</p>

            <h3 className="text-xl font-semibold text-white mt-6">My hotel doesn't show up on Google Maps. What should I check?</h3>
            <p>First search for your property name and see whether a profile already exists, because it may be unclaimed or duplicated. Then confirm it's verified, that your category matches what you are, and that the pin sits on your real entrance.</p>

            <h3 className="text-xl font-semibold text-white mt-6">What should I do about a bad review?</h3>
            <p>Reply calmly within a day or two, acknowledge what went wrong where it's fair, and offer to continue the conversation privately. Future guests read your response as much as the review itself.</p>

            <h3 className="text-xl font-semibold text-white mt-6">Can I delete an unfair or fake review?</h3>
            <p>You can't delete a review just because it's negative. You can report reviews that break Google's policies, such as spam, fake reviews or off-topic content, and Google decides whether to remove them.</p>
          </div>

          <div id="final-thoughts">
            <h2 className="text-3xl font-bold text-white">Final Thoughts</h2>
            <p>
              A Google Business Profile isn't a listing you set up once and leave. Google treats an actively updated profile as a trust signal, and a stale one as a reason to rank you lower — even if nothing about your actual property changed.
            </p>
            <p>
              If you only fix one thing from this guide today, check your category. It's the fastest possible win, and it's the one most hotels have quietly wrong.
            </p>
          </div>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/content-marketing-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Hotel Content Marketing Guide</h3>
            </Link>
            <Link href="/case-studies" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Hotel Case Studies: Real Results</h3>
            </Link>
            <Link href="/book-demo" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Book a Demo & Get a Quote</h3>
            </Link>
            <Link href="/blog/local-seo-for-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO for Hotels</h3>
            </Link>
            <Link href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Direct Bookings Strategy</h3>
            </Link>
            <Link href="/blog/case-study-naivasha-hotel-google-business-profile" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: A Naivasha Hotel's Google Profile</h3>
            </Link>
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
            </Link>
            <Link href="/playbooks/local-search-direct-bookings-playbook" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Playbook: Turn Local Searches Into Direct Bookings</h3>
            </Link>
            <Link href="/guides/local-seo-hotels" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Local SEO: In-Depth Guide</h3>
            </Link>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Want Your Profile Audited?</h2>
          <p className="text-text-gray mb-6">We'll check your category, booking link setup, and visibility gaps — free.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-navy-deep font-bold rounded-sm transition-colors">
            Get Your Free Audit
          </Link>
          <p className="mt-4 text-sm text-text-gray">
            Prefer to talk it through? <Link href="/book-demo" className="text-orange-500 hover:underline">Book a free demo and get a quote</Link>.
          </p>
        </section>
      </div>
    </article>
  )
}
