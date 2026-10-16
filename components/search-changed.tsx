import Link from 'next/link'
import { Search, Sparkles } from 'lucide-react'

// Illustrative example only: generic property types, no real businesses.
const OLD_RESULTS = [
  { site: 'booking-site.com', title: 'Lodges near Hell’s Gate, Naivasha – Prices & Deals', note: 'Compare rooms, rates and reviews from many lodges.' },
  { site: 'travel-guide.com', title: '10 Best Places to Stay in Naivasha', note: 'A list article with the usual big names.' },
  { site: 'your-hotel.com', title: 'Your Lodge | Naivasha', note: 'Your own site, buried on page two with the old photos.' },
  { site: 'review-site.com', title: 'Naivasha Lodges – Traveller Reviews', note: 'Ratings and opinions from past guests.' },
]

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

        <div className="grid md:grid-cols-2 border border-border-flat">
          {/* Then */}
          <div className="p-6 md:p-8 bg-navy-deep md:border-r border-b md:border-b-0 border-border-flat">
            <p className="text-xs uppercase tracking-[2px] text-text-gray mb-4">Then &middot; Google results</p>
            <div className="flex items-center gap-3 border border-border-flat px-4 py-3 mb-6 text-[#F9F6F0] text-sm">
              <Search className="w-4 h-4 text-gold-flat shrink-0" aria-hidden="true" />
              <span>lodge near hell&apos;s gate naivasha</span>
            </div>
            <ol className="space-y-5">
              {OLD_RESULTS.map((r, i) => (
                <li key={r.site} className="flex gap-4">
                  <span className="text-xs text-text-gray pt-1">0{i + 1}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[1px] text-text-gray">{r.site}</p>
                    <p className="text-gold-flat font-medium">{r.title}</p>
                    <p className="text-sm text-text-gray">{r.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Now */}
          <div className="p-6 md:p-8 bg-navy-deep">
            <p className="text-xs uppercase tracking-[2px] text-text-gray mb-4">Now &middot; AI assistants</p>
            <div className="flex items-center gap-3 border border-border-flat px-4 py-3 mb-6 text-[#F9F6F0] text-sm">
              <Sparkles className="w-4 h-4 text-gold-flat shrink-0" aria-hidden="true" />
              <span>where should we stay near hell&apos;s gate naivasha for a weekend?</span>
            </div>
            <div className="space-y-4 text-text-gray leading-relaxed">
              <p>
                For a relaxed weekend near Hell&apos;s Gate, look at lodges that are{' '}
                <span className="text-gold-flat font-medium">close to the park gate</span>, have{' '}
                <span className="text-gold-flat font-medium">strong recent reviews</span> and let you{' '}
                <span className="text-gold-flat font-medium">book directly</span> with clear prices.
              </p>
              <p>
                Check that the lodge&apos;s Google profile has current photos, opening details and answers to
                common questions before you decide.
              </p>
              <p className="text-[#F9F6F0]">
                <strong>Short answer:</strong> pick the lodge that is easy to find, easy to trust and easy to book.
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs text-text-gray mt-3">
          Illustrative example. Real assistants word their answers differently, but they favour the same things.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { h: 'Be easy to find', p: 'A complete, active Google profile and clear location pages, so Google and the assistants know exactly who you are and where you are.' },
            { h: 'Be easy to trust', p: 'Fresh reviews you reply to, real photos and the same details everywhere your hotel is listed.' },
            { h: 'Be easy to book', p: 'Clear prices and a simple way to book direct, so the guest who picks you doesn’t end up on a booking site.' },
          ].map((c) => (
            <div key={c.h} className="p-6 bg-navy-deep border border-border-flat rounded-sm">
              <h3 className="text-xl font-bold mb-2 text-[#F9F6F0]">{c.h}</h3>
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
