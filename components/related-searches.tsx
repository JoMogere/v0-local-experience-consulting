import Link from 'next/link'

export type RelatedSearch = { text: string; href?: string; sw?: boolean }

// A plain-language list of the other ways people ask about the same topic
// (English, Swahili, and the words hotel owners use), so the page speaks to
// the meaning of the search and not only one exact phrase.
export function RelatedSearches({
  heading = 'Other Ways People Ask About This',
  intro,
  items,
}: {
  heading?: string
  intro: string
  items: RelatedSearch[]
}) {
  return (
    <section className="mb-16" aria-labelledby="related-searches-heading">
      <h2 id="related-searches-heading" className="text-3xl md:text-4xl font-bold mb-4">
        {heading}
      </h2>
      <p className="text-text-gray mb-6">{intro}</p>
      <ul className="flex flex-wrap gap-3">
        {items.map((item) => {
          const cls =
            'inline-block border border-border-flat px-4 py-2 text-sm text-[#F9F6F0] hover:border-gold-flat/60 transition-colors'
          return (
            <li key={item.text}>
              {item.href ? (
                <Link href={item.href} className={cls} lang={item.sw ? 'sw' : undefined}>
                  {item.text}
                </Link>
              ) : (
                <span className={cls} lang={item.sw ? 'sw' : undefined}>
                  {item.text}
                </span>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
