// Email box that hands the visitor to Substack with their email already filled in.
// A plain GET form, so it needs no scripts.
export function SubscribeForm({ buttonLabel = 'Subscribe' }: { buttonLabel?: string }) {
  return (
    <form
      action="https://jomogere.substack.com/subscribe"
      method="get"
      target="_blank"
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="Your email address"
        autoComplete="email"
        className="flex-1 px-4 py-3 bg-navy-deep border border-border-flat rounded-sm text-[#F9F6F0] placeholder:text-text-gray/60 focus:outline-none focus:border-gold-flat"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-[#D46A43] to-[#E6AD45] hover:opacity-90 text-[#0D0D0D] font-bold rounded-sm transition-opacity text-sm uppercase tracking-[0.5px]"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
