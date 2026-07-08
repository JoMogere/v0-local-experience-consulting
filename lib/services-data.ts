export interface ServiceData {
  slug: string
  title: string
  description: string
  content: string[]
  features: string[]
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'local-seo',
    title: 'Local SEO',
    description:
      "Get found first when guests search for hotels near you. We optimize your Google Business Profile, fix local search visibility issues, and build the citation and review foundation that gets you ranked above competitors in your area.",
    content: [
      "If your hotel doesn't show up when someone searches \"hotels near [your area]\" or \"[your area] beach villa,\" you're invisible to guests who are actively ready to book — not just browsing. Local SEO is how you fix that.",
      "We start with a real audit, not a template: your Google Business Profile category (a mismatched category is one of the most common reasons hotels don't appear in the local map pack), your NAP consistency across every platform where your property is listed, and how your current review volume and response rate compare to nearby competitors.",
      "From there, we fix what's broken — category corrections, citation cleanup, a review-generation system that's ethical and sustainable rather than a one-time push — and build toward the content that earns long-term visibility: location pages, guides your future guests are actually searching for, and the structured data that helps Google understand exactly what your property offers.",
      "This isn't a one-time fix. Local search rankings respond to consistent signals over months, not a single optimization pass. We track your visibility monthly and adjust based on what's actually moving — not a generic checklist.",
    ],
    features: [
      'Google Business Profile audit & category correction',
      'NAP consistency check across all listed platforms',
      'Ethical review-generation system',
      'Local content & location page strategy',
      'Monthly visibility tracking',
    ],
  },
  {
    slug: 'direct-bookings',
    title: 'Direct Bookings',
    description:
      "Stop paying 15-25% commission on every booking. We set up your booking engine, channel manager, and Google Hotel Search integration so guests book straight from your website instead of Booking.com or Expedia.",
    content: [
      "Every booking through Booking.com or Expedia costs 15-25% in commission. That's real money leaving your property on every single reservation — and most of it is recoverable without leaving those platforms.",
      "We work primarily with Zeevou for channel management — real-time sync across OTA listings plus a full property management layer in one system — and have also configured Beds24 and Lodgify depending on a property's needs. On top of that, we set up Google Hotel Center price feeds so properties show up in Google's price-comparison box next to the OTAs, a placement most independent hotels never reach because the setup (GBP verification, the XML feed, a booking engine that can actually accept the booking) is more involved than it looks.",
      "Beyond the technical setup, direct booking growth comes down to giving guests who already found you a reason to book direct instead of defaulting to habit: a visible, instant booking flow, a direct-only perk that doesn't violate your OTA rate parity agreement, and a post-stay sequence that brings repeat guests back through your own channel next time.",
      "We work through this in phases — foundation first, then repeat guests, then new direct demand — because a rushed push to \"go direct\" usually just confuses guests without changing the numbers.",
    ],
    features: [
      'Channel manager setup (Zeevou, Beds24, Lodgify)',
      'Google Hotel Center feed & Hotel Search integration',
      'Booking flow & mobile conversion audit',
      'Rate parity-compliant direct booking incentives',
      'Repeat guest win-back sequences',
    ],
  },
  {
    slug: 'experiential-marketing',
    title: 'Experiential Marketing',
    description:
      "Turn your property's unique experience into the reason guests choose you. We build content and campaigns around what makes a stay memorable, so your marketing does more than list amenities.",
    content: [
      "Amenity lists don't sell stays — memories do. The properties that consistently win bookings are the ones whose marketing shows a guest exactly what it feels like to be there, not just what's included.",
      "We build content around what actually makes your property distinct: the sunset from a specific vantage point, the local experience only your location offers, the detail past guests mention unprompted in reviews. That becomes the foundation for photography direction, video content, and the story your website and social channels tell — instead of the same beachfront-hotel template every competitor is using.",
      "This connects directly to your local SEO and direct booking work rather than sitting apart from it: experiential content earns the engagement and shares that build authority signals over time, and it's what turns a guest who's comparing five similar-looking properties into one who books yours specifically because they can already picture being there.",
    ],
    features: [
      'Property-specific content strategy',
      'Photography & video direction',
      'Story-driven website & social content',
      'Guest experience narrative development',
      'Cross-channel consistency with SEO content',
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
