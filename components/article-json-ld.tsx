import { SITE_URL } from '@/lib/site'

// Article markup for the hand-built blog posts and guides, so search engines and AI assistants
// can tell these pages are articles by BookedUp Africa and who wrote them.
export function ArticleJsonLd({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title.replace(/\s*\|\s*BookedUp Africa$/, ''),
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    author: { '@id': `${SITE_URL}/#founder` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/opengraph-image.png`,
    inLanguage: 'en',
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
