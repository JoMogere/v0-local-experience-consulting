import Link from 'next/link'
import Image from 'next/image'
import { WebsiteLikeHotel } from './website-like-hotel'

export function SearchChanged() {
  return (
    <section className="py-16 md:py-24 bg-[#241A12] text-center" id="search-has-changed">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-x-12 gap-y-10 items-center mb-14">
        <div>
        <h2 className="font-sign font-bold text-[#F4EFE6] text-4xl md:text-6xl leading-[0.98] text-balance mb-6">
          Guests Search Differently Now. Is Your Hotel Showing Up?
        </h2>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 leading-relaxed max-w-[52ch] mx-auto mb-5">
          Your guests still search Google, but many now also ask AI assistants where to stay. Those assistants
          don&apos;t give ten links. They name a few places. We help your hotel get found on Google, mentioned
          by the assistants and chosen by the guest.
        </p>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 leading-relaxed max-w-[52ch] mx-auto">
          Your guests also ask in Swahili, or a mix of Swahili and English. Your hotel needs to show up for{' '}
          <span lang="sw" className="text-gold-flat font-medium">malazi</span>,{' '}
          <span lang="sw" className="text-gold-flat font-medium">hoteli karibu nami</span> and{' '}
          <span lang="sw" className="text-gold-flat font-medium">weka nafasi</span> as well.
        </p>
        </div>

        <WebsiteLikeHotel embedded />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <figure className="border border-border-flat bg-navy-deep">
            <figcaption className="p-4 md:p-5 border-b border-border-flat">
              <p className="font-sign font-semibold text-2xl text-[#E6AD45] mb-1">On Google</p>
              <p className="text-[#F9F6F0] text-sm">
                Search: <span className="font-medium">&ldquo;hotel near hells gate&rdquo;</span>
              </p>
            </figcaption>
            <Image
              src="/search-examples/google-hotel-search.webp"
              alt="Google hotel results for 'hotel near hells gate', showing a map with prices and a list of properties with photos, ratings and prices."
              width={640}
              height={516}
              className="w-full h-auto"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </figure>

          <figure className="border border-border-flat bg-navy-deep">
            <figcaption className="p-4 md:p-5 border-b border-border-flat">
              <p className="font-sign font-semibold text-2xl text-[#E6AD45] mb-1">On an AI assistant</p>
              <p className="text-[#F9F6F0] text-sm">
                Ask: <span className="font-medium">&ldquo;where should we stay near hell&apos;s gate naivasha for a weekend?&rdquo;</span>
              </p>
            </figcaption>
            <Image
              src="/search-examples/ai-assistant-answer.webp"
              alt="An AI assistant answering the question about where to stay near Hell's Gate, Naivasha, with a short recommendation and a shortlist of places to stay with a budget guide."
              width={880}
              height={489}
              className="w-full h-auto"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </figure>
        </div>
        <div className="grid md:grid-cols-3 mt-14 md:divide-x-[3px] md:divide-dashed md:divide-[#E6AD45]/50">
          {[
            { h: 'Be easy to find', sw: 'Rahisi kupatikana', p: 'A complete, active Google profile and clear location pages, so Google and the assistants know exactly who you are and where you are.' },
            { h: 'Be easy to trust', sw: 'Rahisi kuaminika', p: 'Fresh reviews you reply to, real photos and the same details everywhere your hotel is listed.' },
            { h: 'Be easy to book', sw: 'Rahisi kuweka nafasi', p: 'Clear prices and a simple way to book direct, so the guest who picks you doesn’t end up on a booking site.' },
          ].map((c) => (
            <div key={c.h} className="px-6 py-8 md:py-2">
              <h3 className="font-sign font-bold text-3xl text-[#F4EFE6]">{c.h}</h3>
              <p lang="sw" className="font-prose italic text-[#E6AD45] mt-1 mb-3">{c.sw}</p>
              <p className="font-prose text-lg text-[#EAE5DF]/90 leading-relaxed">{c.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#E6AD45] hover:bg-[#F1BE5E] text-[#15110E] font-sign font-bold text-xl md:text-2xl rounded-sm transition-colors"
          >
            See how your hotel shows up today
          </Link>
        </div>
      </div>
    </section>
  )
}
