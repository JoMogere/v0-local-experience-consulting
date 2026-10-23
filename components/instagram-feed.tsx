import Script from 'next/script'

// Instagram and TikTok feeds by Elfsight. The widget script loads only after the page has
// finished loading, and the feed itself loads lazily when scrolled into view.
export function InstagramFeed() {
  return (
    <section className="py-16 md:py-24 bg-navy-alt" id="instagram">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-clay text-sm uppercase tracking-[2px] mb-4">Follow along</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-4 tracking-[-0.02em] text-[#F9F6F0]">
          See What We&apos;re Up To on Instagram and TikTok
        </h2>
        <p className="text-text-gray max-w-2xl mb-10">
          Behind-the-scenes from the hotels we work with, quick tips and fresh ideas for getting more direct bookings.
          Follow{' '}
          <a
            href="https://www.instagram.com/bookedupafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-flat underline"
          >
            @bookedupafrica
          </a>{' '}
          on Instagram and{' '}
          <a
            href="https://www.tiktok.com/@bookedupafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-flat underline"
          >
            @bookedupafrica
          </a>{' '}
          on TikTok.
        </p>
        <h3 className="text-xl font-bold text-[#F9F6F0] mb-4">Instagram</h3>
        <div className="elfsight-app-1cbe8a3b-5578-45e4-9dc2-6b61a50d478d" data-elfsight-app-lazy />
        <h3 className="text-xl font-bold text-[#F9F6F0] mt-12 mb-4">TikTok</h3>
        <div className="elfsight-app-7fb7ddb3-5086-4add-9d26-28d35187e1e1" data-elfsight-app-lazy />
        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </div>
    </section>
  )
}
