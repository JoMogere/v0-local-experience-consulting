// Playbooks sold on Selar. Each one gets its own page on this site so it can
// rank in Google; the page's button sends buyers to the Selar checkout.
//
// `inside` is intentionally empty: add the real chapter / section list and a
// "What's inside" section appears on the page automatically.

export interface Playbook {
  slug: string
  title: string
  subtitle: string
  description: string
  metaTitle: string
  metaDescription: string
  image: string
  buyUrl: string
  audience: string[]
  problemHeading: string
  problem: string[]
  focus: string[]
  inside: string[]
  related: { href: string; label: string }[]
  faq: { q: string; a: string }[]
}

const sharedFaq = (name: string) => [
  {
    q: 'What format is the playbook?',
    a: 'It is a digital download. Checkout and delivery are handled securely through Selar, so you can get it from any device.',
  },
  {
    q: 'Who wrote it?',
    a: `${name} was written by Jo Mogere, founder of BookedUp Africa, a digital marketing consultancy that works with hotels and resorts in Kenya and East Africa.`,
  },
  {
    q: 'Can you help me apply it to my property?',
    a: 'Yes. If you would rather have it done with you, book a free growth audit and we will look at your property together.',
  },
]

export const PLAYBOOKS: Playbook[] = [
  {
    slug: 'local-search-direct-bookings-playbook',
    title: 'Turn Local Searches Into Direct Bookings',
    subtitle: 'A Practical Guide for Hotels & Resorts',
    description:
      'Master local search optimization to convert online searches into direct bookings and reduce dependency on OTAs.',
    metaTitle: 'Hotel Local SEO Playbook: Turn Searches Into Direct Bookings',
    metaDescription:
      'A practical guide for hotels and resorts in Kenya and East Africa to win local search, get more direct bookings and depend less on OTAs.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2ung3dxT0DOx2BNgCqkGHbXn9pvJrC.png',
    buyUrl: 'https://selar.com/781011tnj1',
    audience: [
      'Hotel, lodge and resort owners who rely on Booking.com or Expedia for most of their bookings',
      'General managers and marketing managers responsible for bookings and online visibility',
      'Properties that want to show up when guests search for stays in their area',
    ],
    problemHeading: 'Why local search decides who gets the booking',
    problem: [
      'When a guest searches for a place to stay near a destination, the properties shown in Google\'s map results get the clicks. If your hotel is missing or poorly set up there, those guests book somewhere else, often through an online travel agency that takes a commission on every booking.',
      'Local search is how you get in front of guests who are already looking for a stay, and it is how you turn that attention into bookings made directly with you.',
    ],
    focus: [
      'Local search optimization for hotels and resorts',
      'Converting online searches into direct bookings',
      'Reducing your dependence on OTAs',
    ],
    inside: [],
    related: [
      { href: '/blog/google-business-profile-hotels', label: 'Google Business Profile: The Complete Setup Guide' },
      { href: '/blog/local-seo-for-hotels', label: 'Local SEO for Hotels' },
      { href: '/pillar/direct-bookings/reduce-ota-dependence', label: 'How to Reduce OTA Dependence' },
      { href: '/pillar/direct-bookings/booking-engine-setup', label: 'Booking Engine Setup Guide' },
      { href: '/blog/case-study-elsamere-lodge', label: 'Case Study: Elsamere Lodge' },
    ],
    faq: [
      {
        q: 'Will this help me reduce what I pay to Booking.com and other OTAs?',
        a: 'That is the aim. The playbook is about getting guests to find you in local search and book directly, so fewer bookings have to go through a commission-charging platform.',
      },
      ...sharedFaq('This playbook'),
    ],
  },
  {
    slug: 'african-hospitality-cx-playbook',
    title: 'The African Hospitality CX Playbook',
    subtitle: 'Boost Revenue & Guest Experience',
    description:
      'A comprehensive guide to elevating customer experience and driving revenue growth for African hospitality businesses.',
    metaTitle: 'African Hospitality CX Playbook: Guest Experience & Revenue',
    metaDescription:
      'A comprehensive guide to elevating guest experience and driving revenue growth for hotels, lodges and other African hospitality businesses.',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mhsz06PXzGyquhx4KVLkV7hjJpaLm3.png',
    buyUrl: 'https://selar.com/23200vr569',
    audience: [
      'Owners and managers of hotels, lodges and other hospitality businesses in Africa',
      'Teams that want happier guests, better reviews and more repeat business',
      'Operators who see guest experience as a way to grow revenue, not just a cost',
    ],
    problemHeading: 'Why guest experience is a revenue lever',
    problem: [
      'Guests who have a great stay leave better reviews, come back, and recommend you to others. Those reviews and referrals then feed the next round of bookings, which makes guest experience one of the most reliable ways to grow revenue.',
      'The African Hospitality CX Playbook is written for the realities of running hospitality businesses across the continent.',
    ],
    focus: [
      'Elevating customer experience across the guest journey',
      'Driving revenue growth from the experience you deliver',
      'Frameworks designed for African hospitality businesses',
    ],
    inside: [],
    related: [
      { href: '/hotel-guest-experience-optimization-kenya', label: 'Hotel Guest Experience Optimization in Kenya' },
      { href: '/blog/experiential-marketing-hotels', label: 'Experiential Marketing for Hotels' },
      { href: '/pillar/local-seo-hotels/generate-hotel-reviews', label: 'How to Generate Hotel Reviews' },
      { href: '/case-studies', label: 'Hospitality Case Studies' },
    ],
    faq: [
      {
        q: 'Is this only for hotels?',
        a: 'It is written for African hospitality businesses in general, so lodges, resorts and other guest-facing operators can use it too.',
      },
      ...sharedFaq('This playbook'),
    ],
  },
]

export function getPlaybook(slug: string) {
  return PLAYBOOKS.find((p) => p.slug === slug) || null
}
