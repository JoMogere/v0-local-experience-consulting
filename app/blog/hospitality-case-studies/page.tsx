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
            <a href="/blog/case-study-elsamere-lodge" className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-orange-500 mb-2">Elsamere Lodge: Free Booking Link Results →</h3>
              <p className="text-text-gray text-sm mb-4">124 clicks on Google's free hotel booking link over 6 months — zero commission, high-intent traffic</p>
              <div className="text-2xl font-bold text-green-400">124 booking link clicks</div>
            </a>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-lg text-center">
            <p className="text-text-gray">More case studies from our work with hotels and resorts across Kenya are on the way.</p>
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
