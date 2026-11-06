import { SubscribeForm } from "./subscribe-form"

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-[#121212] text-center">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          One hotel marketing idea, every week
        </h2>
        <p className="font-prose text-lg md:text-xl text-[#EAE5DF]/90 mt-5 mb-8 mx-auto max-w-[50ch] leading-relaxed">
          Local search, guest experience and growth tactics for hotels and resorts in Africa, in your inbox.
        </p>

        <SubscribeForm buttonLabel="Send me weekly insights" />

        <p className="font-prose text-[#EAE5DF]/60 mt-5">Free. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
