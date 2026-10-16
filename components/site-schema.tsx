import { SITE_URL } from '@/lib/site'

// Site-wide identity markup (Organization + founder Person + WebSite).
// Rendered once in the root layout so every page tells search engines and AI
// assistants who owns the site. Other pages can point at these @id values.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': `${SITE_URL}/#organization`,
      name: 'BookedUp Africa',
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand-icon.png` },
      image: `${SITE_URL}/brand-icon.png`,
      description:
        'Hospitality marketing for hotels and resorts in Kenya and East Africa: local SEO, direct bookings and experiential marketing.',
      founder: { '@id': `${SITE_URL}/#founder` },
      email: 'mogerejulius41@gmail.com',
      telephone: '+254799022671',
      areaServed: [
        { '@type': 'Country', name: 'Kenya' },
        { '@type': 'Place', name: 'East Africa' },
      ],
      serviceType: ['Hotel local SEO', 'Hotel direct booking strategy', 'Experiential marketing for hotels'],
      knowsAbout: ['Local SEO for hotels', 'Google Business Profile', 'Direct hotel bookings', 'Experiential marketing'],
      sameAs: [
        'https://www.youtube.com/@bookedupafrica',
        'https://www.instagram.com/bookedupafrica',
        'https://www.tiktok.com/@bookedupafrica',
        'https://web.facebook.com/profile.php?id=61555797101970',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: 'Julius Onyiego Mogere',
      alternateName: 'Jo Mogere',
      jobTitle: 'Founder',
      url: `${SITE_URL}/founder`,
      image: `${SITE_URL}/founder/jo-mogere.jpg`,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: [
        'https://www.linkedin.com/in/julius-mogere-8538473b4/',
        'https://www.facebook.com/jomogere/',
        'https://medium.com/@mogerejulius41',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'BookedUp Africa',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en',
    },
  ],
}

export function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
