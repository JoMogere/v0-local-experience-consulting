import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hospitality Case Studies | BookedUp Africa',
  description: 'Real examples of how hotels increased bookings and revenue through strategic optimization.',
  keywords: 'hotel case studies, hospitality marketing examples, hotel success stories',
}

export default function CaseStudiesHub() {
  return (
    <article className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-sm text-text-gray mb-8"><a href="/blog" className="hover:text-orange-500">Blog</a> / Case Studies</div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitality Case Studies</h1>
          <p className="text-xl text-text-gray mb-6">Real results from hotels that transformed their marketing and revenue.</p>
        </header>

        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/blog/case-study-local-visibility" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Local Visibility Transformation</h3>
              <p className="text-text-gray text-sm mb-4">How a mid-range hotel went from page 3 to page 1 in local search results</p>
              <div className="text-2xl font-bold text-green-400">+340% local search traffic</div>
            </a>

            <a href="/blog/case-study-gbp-optimization" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Google Business Profile Optimization</h3>
              <p className="text-text-gray text-sm mb-4">Strategic GBP optimization drove significant booking increases</p>
              <div className="text-2xl font-bold text-green-400">+250 direct bookings/month</div>
            </a>

            <a href="/blog/case-study-website-conversion" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Website Conversion Optimization</h3>
              <p className="text-text-gray text-sm mb-4">Website redesign and CRO increased direct bookings</p>
              <div className="text-2xl font-bold text-green-400">+62% conversion rate</div>
            </a>

            <a href="/blog/case-study-content-strategy" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Content Strategy Results</h3>
              <p className="text-text-gray text-sm mb-4">Strategic blogging established local authority and boosted SEO</p>
              <div className="text-2xl font-bold text-green-400">+180 organic keywords</div>
            </a>

            <a href="/blog/case-study-booking-recovery" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Direct Booking Recovery</h3>
              <p className="text-text-gray text-sm mb-4">Reduced OTA dependency through direct booking optimization</p>
              <div className="text-2xl font-bold text-green-400">+$85K monthly revenue</div>
            </a>

            <a href="/blog/case-study-experience-marketing" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Experiential Marketing Impact</h3>
              <p className="text-text-gray text-sm mb-4">Guest experience innovation created word-of-mouth growth</p>
              <div className="text-2xl font-bold text-green-400">45% repeat bookings</div>
            </a>
          </div>
        </section>

        <section className="mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-text-gray mb-6">Let's build a comprehensive strategy that drives real results for your hotel.</p>
          <a href="https://calendly.com/mogerejulius41/30min" target="_blank" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm transition-colors">
            Schedule Strategy Call
          </a>
        </section>
      </div>
    </article>
  )
}
