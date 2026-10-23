import Link from 'next/link'
import Image from 'next/image'

export function SearchChanged() {
  return (
    <section className="py-16 md:py-24 bg-navy-alt" id="search-has-changed">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-clay text-sm uppercase tracking-[2px] mb-4">How guests find hotels now</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-4 tracking-[-0.02em] text-[#F9F6F0]">
          Guests Search Differently Now. Is Your Hotel Showing Up?
        </h2>
        <p className="text-text-gray max-w-3xl mb-12">
          Your guests still search Google, but many now also ask AI assistants where to stay. Those assistants
          don&apos;t give ten links. They name a few places. We help your hotel get found on Google, mentioned
          by the assistants and chosen by the guest.
        </p>
        <p className="text-text-gray max-w-3xl mb-12 -mt-8">
          Your guests also ask in Swahili, or a mix of Swahili and English. Your hotel needs to show up for{' '}
          <span lang="sw" className="text-gold-flat font-medium">malazi</span>,{' '}
          <span lang="sw" className="text-gold-flat font-medium">hoteli karibu nami</span> and{' '}
          <span lang="sw" className="text-gold-flat font-medium">weka nafasi</span> as well.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <figure className="border border-border-flat bg-navy-deep">
            <figcaption className="p-4 md:p-5 border-b border-border-flat">
              <p className="text-xs uppercase tracking-[2px] text-gold-flat mb-1">Google</p>
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
              <p className="text-xs uppercase tracking-[2px] text-gold-flat mb-1">AI assistant</p>
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
        <p className="text-xs text-text-gray mt-3">
          Real searches run on 23 October 2026. Results change by person, place and day. Property names belong to their owners.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { h: 'Be easy to find', sw: 'Rahisi kupatikana', p: 'A complete, active Google profile and clear location pages, so Google and the assistants know exactly who you are and where you are.' },
            { h: 'Be easy to trust', sw: 'Rahisi kuaminika', p: 'Fresh reviews you reply to, real photos and the same details everywhere your hotel is listed.' },
            { h: 'Be easy to book', sw: 'Rahisi kuweka nafasi', p: 'Clear prices and a simple way to book direct, so the guest who picks you doesn’t end up on a booking site.' },
          ].map((c) => (
            <div key={c.h} className="p-6 bg-navy-deep border border-border-flat rounded-sm">
              <h3 className="text-xl font-bold mb-1 text-[#F9F6F0]">{c.h}</h3>
              <p lang="sw" className="text-sm text-gold-flat mb-3">{c.sw}</p>
              <p className="text-text-gray">{c.p}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity text-sm md:text-base uppercase tracking-[0.5px]"
          >
            See how your hotel shows up today
          </Link>
        </div>
      </div>
    </section>
  )
}
