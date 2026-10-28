// Everything the "Keep reading" feed can suggest. Add new pages here.
export type FeedTopic = 'local-seo' | 'direct-bookings' | 'experiential' | 'agency' | 'results'

export type FeedItem = {
  href: string
  title: string
  excerpt: string
  kind: 'Guide' | 'Article' | 'Case study'
  topic: FeedTopic
}

export const CONTENT_FEED: FeedItem[] = [
  // Local SEO
  { href: '/guides/local-seo-hotels', title: 'Local SEO for Hotels: Complete Guide', excerpt: 'Show up on Google Maps when guests search for hotels near them.', kind: 'Guide', topic: 'local-seo' },
  { href: '/guides/local-seo-hotels/google-maps-ranking', title: 'Google Maps Ranking for Hotels', excerpt: 'What moves a hotel up the map results.', kind: 'Guide', topic: 'local-seo' },
  { href: '/guides/local-seo-hotels/generate-hotel-reviews', title: 'How to Get More Hotel Reviews', excerpt: 'Ask the right way and at the right time.', kind: 'Guide', topic: 'local-seo' },
  { href: '/guides/local-seo-hotels/nap-consistency', title: 'Keep Your Hotel Details the Same Everywhere', excerpt: 'Why matching name, address and phone helps you rank.', kind: 'Guide', topic: 'local-seo' },
  { href: '/blog/local-seo-for-hotels', title: 'Hotel Local SEO Basics', excerpt: 'A plain-language start on Google Maps rankings and reviews.', kind: 'Article', topic: 'local-seo' },
  { href: '/blog/google-business-profile-hotels', title: 'Google Business Profile for Hotels', excerpt: 'Set up the free listing that guests see first.', kind: 'Article', topic: 'local-seo' },
  { href: '/blog/semantic-seo-for-hotels', title: 'Semantic SEO for Hotels: Be Found for What Guests Mean', excerpt: 'How hotels get found on Google, voice search and AI assistants.', kind: 'Article', topic: 'local-seo' },

  // Direct bookings
  { href: '/guides/direct-bookings', title: 'Direct Bookings for Hotels: Full Guide', excerpt: 'Cut OTA commission and win more bookings from your own website.', kind: 'Guide', topic: 'direct-bookings' },
  { href: '/guides/direct-bookings/reduce-ota-dependence', title: 'Reduce Your Dependence on Booking Sites', excerpt: 'Keep your listings while pushing guests to book direct.', kind: 'Guide', topic: 'direct-bookings' },
  { href: '/guides/direct-bookings/booking-engine-setup', title: 'Channel Managers and Direct Bookings', excerpt: 'How to mix both without double bookings.', kind: 'Guide', topic: 'direct-bookings' },
  { href: '/guides/direct-bookings/website-conversion', title: 'Turn Website Visitors Into Bookings', excerpt: 'Small changes that stop guests leaving without booking.', kind: 'Guide', topic: 'direct-bookings' },
  { href: '/channel-manager-setup-kenya', title: 'Channel Manager Setup for Hotels in Kenya', excerpt: 'One calendar for every booking site and your own website.', kind: 'Guide', topic: 'direct-bookings' },
  { href: '/blog/direct-hotel-bookings', title: 'Direct Hotel Bookings', excerpt: 'Why direct bookings matter and how to win them.', kind: 'Article', topic: 'direct-bookings' },
  { href: '/blog/hotel-website-design-seo', title: 'Hotel Website Design and SEO', excerpt: 'A website that ranks and turns visitors into guests.', kind: 'Article', topic: 'direct-bookings' },

  // Experiential
  { href: '/guides/experiential-marketing', title: 'Experiential Marketing for Hotels: Full Guide', excerpt: 'Turn your property into the stay guests talk about.', kind: 'Guide', topic: 'experiential' },
  { href: '/guides/experiential-marketing/sensory-experiences-for-hotels', title: 'Sensory Experiences for Hotels', excerpt: 'Five senses, one memorable stay.', kind: 'Guide', topic: 'experiential' },
  { href: '/guides/experiential-marketing/telling-your-story', title: 'Telling Your Property’s Story', excerpt: 'Find the story that makes you memorable.', kind: 'Guide', topic: 'experiential' },
  { href: '/guides/experiential-marketing/local-partnerships', title: 'Local Partnerships for Hotels', excerpt: 'Work with the businesses around you.', kind: 'Guide', topic: 'experiential' },
  { href: '/guides/experiential-marketing/turning-moments-into-content', title: 'Turning Moments Into Content', excerpt: 'Turn guest moments into posts and videos.', kind: 'Guide', topic: 'experiential' },
  { href: '/blog/african-basil-uses-for-hotels', title: 'African Basil: Uses Hotels Can Explore Beyond the Kitchen', excerpt: 'Eight practical ideas for the kitchen, garden and content.', kind: 'Article', topic: 'experiential' },
  { href: '/blog/experiential-marketing-hotels', title: 'Experiential Marketing for Hotels: Stays Into Stories', excerpt: 'Why amenity lists stop working.', kind: 'Article', topic: 'experiential' },
  { href: '/blog/content-marketing-hotels', title: 'Content Marketing for Hotels', excerpt: 'Content that brings guests, not just likes.', kind: 'Article', topic: 'experiential' },
  { href: '/blog/ai-for-hotels', title: 'AI for Hotels: Where It Actually Helps', excerpt: 'Where AI pays off and where it costs you guests.', kind: 'Article', topic: 'experiential' },

  // Agency choice
  { href: '/blog/how-to-choose-a-hotel-marketing-agency-kenya', title: 'How to Choose a Hotel Marketing Agency in Kenya', excerpt: 'The questions to ask and the red flags to watch for.', kind: 'Article', topic: 'agency' },
  { href: '/blog/hotel-marketing-agency-vs-digital-marketing-agency', title: 'Hotel Marketing Agency vs Digital Agency', excerpt: 'Which to hire, and how to tell the difference.', kind: 'Article', topic: 'agency' },

  // Results
  { href: '/blog/case-study-elsamere-lodge', title: 'Elsamere Lodge Case Study', excerpt: 'Free booking clicks and search clicks, from real Google data.', kind: 'Case study', topic: 'results' },
  { href: '/blog/case-study-silent-palms-villa', title: 'Silent Palms Villa Case Study', excerpt: 'What early-stage local SEO looks like, month by month.', kind: 'Case study', topic: 'results' },
  { href: '/blog/case-study-naivasha-hotel-google-business-profile', title: 'Naivasha Hotel Case Study', excerpt: 'What a well-set-up Google Business Profile did.', kind: 'Case study', topic: 'results' },
]
