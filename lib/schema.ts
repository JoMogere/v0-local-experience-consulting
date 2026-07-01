// Schema Markup Generator for Topical Authority
// Generates JSON-LD structured data for SEO

export const generateArticleSchema = (article: {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  image: article.image || 'https://bookedupafrica.com/og-image.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
})

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const generateTopicalAuthoritySchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BookedUp Africa',
  url: 'https://bookedupafrica.com',
  description: 'Hospitality marketing consultancy helping African hotels, resorts, and tourism businesses increase direct bookings through local SEO and strategic marketing.',
  logo: 'https://bookedupafrica.com/logo.jpg',
  sameAs: [
    'https://www.facebook.com/bookedupafrica',
    'https://www.linkedin.com/company/bookedupafrica',
  ],
  knowsAbout: [
    'Local SEO for Hotels',
    'Google Business Profile Optimization',
    'Hotel Direct Bookings',
    'Hotel Website Strategy',
    'Hospitality Content Marketing',
    'Google Maps Ranking',
    'Travel and Tourism Marketing',
    'Experiential Marketing',
    'African Hospitality',
  ],
})

export const generateArticleClusterSchema = (pillarPage: {
  title: string
  url: string
  articles: Array<{
    title: string
    url: string
  }>
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: pillarPage.title,
  url: pillarPage.url,
  hasPart: pillarPage.articles.map((article) => ({
    '@type': 'Article',
    headline: article.title,
    url: article.url,
  })),
})
