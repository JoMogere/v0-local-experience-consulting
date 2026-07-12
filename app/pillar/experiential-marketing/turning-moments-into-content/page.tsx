import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Turning Guest Moments Into Content | BookedUp Africa',
  description: 'A simple guide to capturing real guest moments — no expensive equipment or production crew needed.',
  keywords: 'hotel content creation, guest photos videos, hotel social media Kenya',
}

export default function TurningMomentsIntoContentPage() {
  return (
    <main className="min-h-screen bg-navy-deep text-white pt-32">
      <article className="max-w-4xl mx-auto px-4 md:px-6 pb-16">
        <nav className="mb-8 text-sm text-text-gray">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar" className="hover:text-white transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <Link href="/pillar/experiential-marketing" className="hover:text-white transition-colors">Experiential Marketing</Link>
          <span className="mx-2">/</span>
          <span>Turning Moments Into Content</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Turning Guest Moments Into Content</h1>
          <p className="text-lg text-text-gray">You don't need a film crew. You need to be paying attention at the right moments.</p>
        </header>

        <section className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">A Real Moment Beats a Perfect Photo</h2>
            <p className="text-text-gray mb-6">
              A guest laughing during a cooking class, genuinely surprised by a view, relaxed and happy at breakfast — these moments feel real because they are. They connect with future guests far more than a posed, professional-looking shot ever will.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-400 mb-3">Simple Rule of Thumb</h3>
              <p className="text-text-gray">If it looks like an advertisement, people scroll past it. If it looks like something a friend shared, people stop and look.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">What to Capture</h2>
            <ul className="text-text-gray space-y-3 ml-4">
              <li>• Genuine reactions — the moment someone sees the view for the first time, tastes something new, or laughs at something a guide said</li>
              <li>• The people behind the experience — your chef, your guide, your host, not just the guest</li>
              <li>• Small, honest details — the steam off a fresh meal, hands making something by hand, the walk down to the water</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Making It Easy on Yourself</h2>
            <p className="text-text-gray mb-4">A phone camera is genuinely enough. What actually matters more:</p>
            <ul className="text-text-gray space-y-2 ml-4">
              <li>• Good natural light — early morning and late afternoon are the easiest to work with</li>
              <li>• Asking guests if it's okay to photograph them, and getting a quick yes</li>
              <li>• Capturing a little bit, often — a few minutes a day beats one big shoot a year</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Where This Content Actually Helps</h2>
            <p className="text-text-gray">
              These moments do double duty: they make your social media feel alive and human, and the same photos and stories work just as well on your website and blog — helping future guests picture themselves there before they've even booked.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Back to the Guide</h2>
            <a href="/pillar/experiential-marketing" className="text-orange-500 hover:text-orange-400 font-bold">← Return to Experiential Marketing Guide</a>
          </section>
        </section>
      </article>
    </main>
  )
}
