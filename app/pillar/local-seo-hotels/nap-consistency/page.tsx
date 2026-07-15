import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: '/pillar/local-seo-hotels/nap-consistency',
  },
  title: 'NAP Consistency for Hotels | BookedUp Africa',
  description: 'Keep your hotel\'s Name, Address, and Phone number consistent across every platform so guests — and Google — can always find you.',
  keywords: 'NAP consistency, hotel local SEO, Google Business Profile Kenya, local citations hotel',
}

export default function NAPConsistencyPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NAP Consistency for Hotels: Why Your Details Need to Match Everywhere</h1>
          <p className="text-lg text-text-gray">Keep your Name, Address, and Phone number consistent across every platform so guests — and Google — can always find you.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">What is NAP and Why It Matters</h2>
            <p className="text-text-gray mb-6">
              NAP = Name, Address, Phone. These three pieces of information must be identical across your website, Google Business Profile, and all business listings (citations). Even small differences confuse Google's algorithms and hurt your rankings.
            </p>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
              <h3 className="font-bold text-red-400 mb-3">Common NAP Mistakes</h3>
              <ul className="text-text-gray text-sm space-y-2">
                <li>• Hotel name: "Safari Lodge" vs "Safari Lodge Limited" vs "Safari Lodge Kenya"</li>
                <li>• Address: "Nairobi, Kenya" vs "Nairobi" vs "Nairobi 00100"</li>
                <li>• Phone: "+254 712 345 678" vs "0712345678" vs "+254-712-345-678"</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">NAP Audit Checklist</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Google Business Profile</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Your hotel website</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Facebook</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">TripAdvisor</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Booking.com</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500" />
                  <span className="text-text-gray">Expedia</span>
                </label>
              </div>
            </div>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <a href="/pillar/local-seo-hotels" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Local SEO for Hotels Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
