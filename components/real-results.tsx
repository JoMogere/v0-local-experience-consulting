import Link from 'next/link'
import Image from 'next/image'

export function RealResults() {
  return (
    <section className="py-16 md:py-24 bg-navy-alt" id="results">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-clay text-sm uppercase tracking-[2px] mb-4">Real Results</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-4 tracking-[-0.02em] text-[#F9F6F0]">
          Verified Numbers, Not Recycled Stats
        </h2>
        <p className="text-text-gray max-w-2xl mb-12">
          Every result we publish is specific and pulled straight from the source — no rounded-up estimates.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-sm overflow-hidden border border-border-flat">
            <Image
              src="/case-studies/elsamere-lodge-booking-clicks.png"
              alt="Google Business Profile Performance dashboard for Elsamere Lodge showing 124 clicks on the hotel's free booking link between February and July 2026."
              width={1200}
              height={484}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F9F6F0]">Elsamere Lodge: 124 Free Booking Link Clicks</h3>
            <p className="text-text-gray mb-6">
              Over six months, Elsamere Lodge's Google Business Profile generated 124 clicks on its free hotel booking link — the direct "Book" button Google shows on verified hotel listings. Zero commission, pure high-intent traffic.
            </p>
            <Link href="/blog/case-study-elsamere-lodge" className="inline-block text-gold-flat font-bold hover:opacity-80 transition-opacity">
              Read the full case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
