import { NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { services, user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

// One-time seed endpoint. Visit once with the secret query param, then this
// route should be deleted from the repo — it has no auth beyond the secret.
const SEED_SECRET = 'bookedup-seed-2026-elsamere'

const SERVICES = [
  {
    title: 'Local SEO',
    slug: 'local-seo',
    description:
      "Get found first when guests search for hotels near you. We optimize your Google Business Profile, fix local search visibility issues, and build the citation and review foundation that gets you ranked above competitors in your area.",
    content:
      "If your hotel doesn't show up when someone searches \"hotels near [your area]\" or \"[your area] beach villa,\" you're invisible to guests who are actively ready to book — not just browsing. Local SEO is how you fix that.\n\nWe start with a real audit, not a template: your Google Business Profile category (a mismatched category is one of the most common reasons hotels don't appear in the local map pack), your NAP consistency across every platform where your property is listed, and how your current review volume and response rate compare to nearby competitors.\n\nFrom there, we fix what's broken — category corrections, citation cleanup, a review-generation system that's ethical and sustainable rather than a one-time push — and build toward the content that earns long-term visibility: location pages, guides your future guests are actually searching for, and the structured data that helps Google understand exactly what your property offers.\n\nThis isn't a one-time fix. Local search rankings respond to consistent signals over months, not a single optimization pass. We track your visibility monthly and adjust based on what's actually moving — not a generic checklist.",
    features: "Google Business Profile audit & category correction\nNAP consistency check across all listed platforms\nEthical review-generation system\nLocal content & location page strategy\nMonthly visibility tracking",
    icon: '📍',
  },
  {
    title: 'Direct Bookings',
    slug: 'direct-bookings',
    description:
      "Stop paying 15-25% commission on every booking. We set up your booking engine, channel manager, and Google Hotel Search integration so guests book straight from your website instead of Booking.com or Expedia.",
    content:
      "Every booking through Booking.com or Expedia costs 15-25% in commission. That's real money leaving your property on every single reservation — and most of it is recoverable without leaving those platforms.\n\nWe work primarily with Zeevou for channel management — real-time sync across OTA listings plus a full property management layer in one system — and have also configured Beds24 and Lodgify depending on a property's needs. On top of that, we set up Google Hotel Center price feeds so properties show up in Google's price-comparison box next to the OTAs, a placement most independent hotels never reach because the setup (GBP verification, the XML feed, a booking engine that can actually accept the booking) is more involved than it looks.\n\nBeyond the technical setup, direct booking growth comes down to giving guests who already found you a reason to book direct instead of defaulting to habit: a visible, instant booking flow, a direct-only perk that doesn't violate your OTA rate parity agreement, and a post-stay sequence that brings repeat guests back through your own channel next time.",
    features: "Channel manager setup (Zeevou, Beds24, Lodgify)\nGoogle Hotel Center feed & Hotel Search integration\nBooking flow & mobile conversion audit\nRate parity-compliant direct booking incentives\nRepeat guest win-back sequences",
    icon: '💰',
  },
  {
    title: 'Experiential Marketing',
    slug: 'experiential-marketing',
    description:
      "Turn your property's unique experience into the reason guests choose you. We build content and campaigns around what makes a stay memorable, so your marketing does more than list amenities.",
    content:
      "Amenity lists don't sell stays — memories do. The properties that consistently win bookings are the ones whose marketing shows a guest exactly what it feels like to be there, not just what's included.\n\nWe build content around what actually makes your property distinct: the sunset from a specific vantage point, the local experience only your location offers, the detail past guests mention unprompted in reviews. That becomes the foundation for photography direction, video content, and the story your website and social channels tell — instead of the same beachfront-hotel template every competitor is using.\n\nThis connects directly to your local SEO and direct booking work rather than sitting apart from it: experiential content earns the engagement and shares that build authority signals over time, and it's what turns a guest who's comparing five similar-looking properties into one who books yours specifically because they can already picture being there.",
    features: "Property-specific content strategy\nPhotography & video direction\nStory-driven website & social content\nGuest experience narrative development\nCross-channel consistency with SEO content",
    icon: '✨',
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== SEED_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const owners = await db.select({ id: user.id, email: user.email }).from(user).limit(1)
  if (owners.length === 0) {
    return NextResponse.json({ error: 'No admin user found in the database — cannot attribute services to an owner.' }, { status: 400 })
  }
  const ownerUserId = owners[0].id

  const results = []
  for (const svc of SERVICES) {
    const existing = await db.select().from(services).where(eq(services.slug, svc.slug)).limit(1)
    if (existing.length > 0) {
      results.push({ slug: svc.slug, action: 'skipped (already exists)' })
      continue
    }
    await db.insert(services).values({
      ...svc,
      userId: ownerUserId,
      status: 'active',
    })
    results.push({ slug: svc.slug, action: 'created' })
  }

  return NextResponse.json({ ownerEmail: owners[0].email, results })
}
