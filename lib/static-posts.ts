// Articles that are built as their own pages under /blog/. Add a new one here
// (newest first) so it shows up in the "Latest Articles" list on the blog page.
export type StaticPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date?: string
  image?: string
}

export const STATIC_POSTS: StaticPost[] = [
  {
    slug: 'african-basil-uses-for-hotels',
    title: 'African Basil: Uses Hotels Can Explore Beyond the Kitchen',
    excerpt: 'Eight practical ideas for the kitchen, the garden, guest activities and content.',
    category: 'Guest Experience',
    date: '2026-10-27',
    image: '/blog/african-basil-plant.webp',
  },
  {
    slug: 'semantic-seo-for-hotels',
    title: 'Semantic SEO for Hotels: Be Found for What Guests Mean',
    excerpt: 'Guests no longer search in exact keywords. How Kenyan hotels get found on Google, voice search and AI assistants.',
    category: 'Local SEO',
    date: '2026-10-23',
  },
  {
    slug: 'how-to-choose-a-hotel-marketing-agency-kenya',
    title: 'How to Choose a Hotel Marketing Agency in Kenya',
    excerpt: 'The questions to ask, the red flags to watch for, and what actually matters.',
    category: 'Hiring an Agency',
  },
  {
    slug: 'hotel-marketing-agency-vs-digital-marketing-agency',
    title: 'Hotel Marketing Agency vs Digital Agency: Which to Hire',
    excerpt: 'What separates a hotel marketing specialist from a general digital agency, and how to tell which one you are talking to.',
    category: 'Hiring an Agency',
  },
  {
    slug: 'case-study-elsamere-lodge',
    title: 'Elsamere Lodge Case Study',
    excerpt: 'How Elsamere Lodge got free booking link clicks and organic search clicks, from real Google data.',
    category: 'Case Study',
  },
  {
    slug: 'case-study-silent-palms-villa',
    title: 'Silent Palms Villa Case Study',
    excerpt: 'What early-stage local SEO looks like, month by month, from real Search Console numbers.',
    category: 'Case Study',
  },
  {
    slug: 'case-study-naivasha-hotel-google-business-profile',
    title: 'Naivasha Hotel Case Study: Google Business Profile Views',
    excerpt: 'What a well-set-up Google Business Profile did for a Naivasha hotel.',
    category: 'Case Study',
  },
]
