import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/hotel-marketing-agency-vs-digital-marketing-agency',
  },
  title: 'Hotel Agency vs. Digital Marketing Agency | BookedUp Africa',
  description: 'What separates a hotel marketing specialist from a general digital marketing agency, and how to tell which one you\'re talking to.',
  keywords: 'hotel marketing agency Kenya, digital marketing agency Kenya, hospitality marketing specialist, hotel SEO agency',
}

export default function HotelVsDigitalAgencyPost() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8">
          <Link href="/blog" className="hover:text-orange-500">Blog</Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Hotel Marketing Agency vs. Digital Marketing Agency: Why It Matters Which One You Hire
          </h1>
        </header>

        <nav className="bg-white/5 border border-white/10 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold mb-4">Table Of Contents</h2>
          <ul className="space-y-2 text-text-gray text-sm">
            <li><a href="#difference" className="hover:text-orange-500 transition-colors">What's the Difference, Really?</a></li>
            <li><a href="#why-struggle" className="hover:text-orange-500 transition-colors">Why a General Agency Struggles With Hotels</a></li>
            <li className="ml-4">(i). They don't know booking engines or channel managers</li>
            <li className="ml-4">(ii). They treat "reviews" as one generic tactic</li>
            <li className="ml-4">(iii). Their case studies are from completely different industries</li>
            <li className="ml-4">(iv). They price and scope work like every business is the same</li>
            <li><a href="#what-specialist-brings" className="hover:text-orange-500 transition-colors">What a Hotel Marketing Specialist Actually Brings</a></li>
            <li><a href="#how-to-tell" className="hover:text-orange-500 transition-colors">How to Tell Which One You're Talking To</a></li>
            <li><a href="#final-thoughts" className="hover:text-orange-500 transition-colors">Final Thoughts</a></li>
          </ul>
        </nav>

        <section className="space-y-6 text-text-gray leading-relaxed">
          <p>
            Most hotel owners looking for marketing help just search "digital marketing agency Kenya" or "marketing agency near me" and start taking calls.
          </p>
          <p>That's usually where the trouble starts.</p>
          <p>
            You end up on a call with an agency that's run campaigns for law firms, e-commerce stores, and maybe a restaurant or two — and now they're telling you how they'll "grow your hotel." They will use the same playbook they use for everyone else. Because that's all they have.
          </p>
          <p>
            This guide breaks down what actually separates a hotel marketing specialist from a general digital marketing agency, so you know exactly what you're paying for before you sign anything.
          </p>

          <h2 id="difference" className="text-3xl font-bold text-white pt-6">What's the Difference, Really?</h2>
          <p>A general digital marketing agency sells marketing. A hotel marketing specialist sells bookings.</p>
          <p>That sounds like a small distinction. It isn't.</p>
          <p>
            A general agency's job is done when your ad gets clicks or your Instagram gets likes. A hotel specialist's job isn't done until that click turns into a confirmed reservation — because that's the only number that actually matters to your business.
          </p>

          <h2 id="why-struggle" className="text-3xl font-bold text-white pt-6">Why a General Agency Struggles With Hotels</h2>

          <h3 className="text-xl font-bold text-orange-500 pt-2">(i). They don't know booking engines or channel managers</h3>
          <p>
            Ask a general digital marketing agency about Zeevou, Beds24, or a{' '}
            <Link href="/pillar/direct-bookings/booking-engine-setup" className="text-orange-500 hover:text-orange-400">Google Hotel Center feed</Link>{' '}
            and you'll usually get a blank look. These aren't marketing tools — they're hospitality infrastructure. But your{' '}
            <Link href="/pillar/direct-bookings" className="text-orange-500 hover:text-orange-400">direct bookings</Link>{' '}
            live and die by them. A general agency can send you traffic all day; if your booking engine isn't set up right, that traffic just bounces to Booking.com anyway.
          </p>

          <h3 className="text-xl font-bold text-orange-500 pt-2">(ii). They treat "reviews" as one generic tactic</h3>
          <p>
            For most businesses, "get more reviews" means a generic email asking for five stars. For a hotel, review generation is tied to guest experience timing, NAP consistency across every OTA you're listed on, and your{' '}
            <Link href="/pillar/local-seo-hotels" className="text-orange-500 hover:text-orange-400">Google Business Profile category</Link>{' '}
            — get the category wrong and you may not even show up in the map pack, no matter how many reviews you collect.
          </p>

          <h3 className="text-xl font-bold text-orange-500 pt-2">(iii). Their case studies are from completely different industries</h3>
          <p>
            "We grew this e-commerce store 300%" tells you nothing about whether they can grow your occupancy rate. Ask any general agency for a hotel-specific case study and watch what happens. Here's{' '}
            <Link href="/blog/case-study-elsamere-lodge" className="text-orange-500 hover:text-orange-400">what one actually looks like</Link>{' '}
            for a property in Kenya.
          </p>

          <h3 className="text-xl font-bold text-orange-500 pt-2">(iv). They price and scope work like every business is the same</h3>
          <p>
            A retainer built for a local dentist doesn't map onto a hotel's actual needs — seasonal booking patterns, OTA commission structures, and rate parity rules that a general agency has never had to think about.
          </p>

          <h2 id="what-specialist-brings" className="text-3xl font-bold text-white pt-6">What a Hotel Marketing Specialist Actually Brings</h2>
          <p>
            A specialist starts from the guest journey, not a generic marketing funnel: how a guest finds you (
            <Link href="/services/local-seo" className="text-orange-500 hover:text-orange-400">local SEO</Link>
            ), how they decide to book with you instead of the property next door (
            <Link href="/services/experiential-marketing" className="text-orange-500 hover:text-orange-400">experiential marketing</Link>
            ), and how they actually complete that booking without leaking commission to an OTA (
            <Link href="/services/direct-bookings" className="text-orange-500 hover:text-orange-400">direct bookings</Link>
            ). Three pillars, one connected system — not three unrelated services bundled into a retainer.
          </p>

          <h2 id="how-to-tell" className="text-3xl font-bold text-white pt-6">How to Tell Which One You're Talking To</h2>
          <p>Ask any agency these two questions on your first call:</p>
          <p className="italic">"What's your approach to Google Hotel Search and free booking links?"</p>
          <p className="italic">"How do you handle rate parity when building direct booking incentives?"</p>
          <p>A hotel specialist answers immediately, with specifics. A general agency either goes quiet or starts talking about Facebook ads instead.</p>

          <h2 id="final-thoughts" className="text-3xl font-bold text-white pt-6">Final Thoughts</h2>
          <p>
            Here's the uncomfortable part: most hotels in Kenya are currently paying general agency rates for general agency results — and blaming "the algorithm" when bookings don't move.
          </p>
          <p>
            The fix usually isn't more budget. It's working with someone who already knows where the friction actually is in a hotel's booking funnel, instead of learning it on your dime.
          </p>
        </section>

        <section className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/how-to-choose-a-hotel-marketing-agency-kenya" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">How to Choose a Hotel Marketing Agency</h3>
              <p className="text-sm text-text-gray mt-2">A real buyer's checklist and questions to ask before you sign anything</p>
            </Link>
            <Link href="/blog/case-study-elsamere-lodge" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Case Study: Elsamere Lodge</h3>
              <p className="text-sm text-text-gray mt-2">124 free booking link clicks from a correctly set up profile</p>
            </Link>
            <Link href="/blog/direct-hotel-bookings" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Increase Direct Hotel Bookings</h3>
              <p className="text-sm text-text-gray mt-2">Why guests default to OTAs, and how to shift that</p>
            </Link>
            <Link href="/blog" className="p-4 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors block">
              <h3 className="font-semibold text-orange-500">Browse All Guides →</h3>
              <p className="text-sm text-text-gray mt-2">Local SEO, Direct Bookings, Experiential Marketing, and more</p>
            </Link>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Talk to a Hotel Marketing Specialist</h2>
          <p className="text-text-gray mb-6">
            No generic playbook — just Local SEO, Direct Bookings, and Experiential Marketing built for hospitality.
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
