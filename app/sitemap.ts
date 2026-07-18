import { getPublishedBlogs } from '@/app/actions/blogs'
import { SERVICES } from '@/lib/services-data'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://bookedupafrica.com'

  let blogs = []

  try {
    blogs = await getPublishedBlogs()
  } catch (error) {
    console.log('[v0] Could not fetch blog posts for sitemap')
  }

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: 'weekly' as const,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/hospitality-case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/local-seo-for-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/google-business-profile-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/experiential-marketing-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/direct-hotel-bookings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/hotel-website-design-seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/content-marketing-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/ai-for-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/case-study-elsamere-lodge`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/case-study-silent-palms-villa`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/hotel-marketing-agency-vs-digital-marketing-agency`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/blog/how-to-choose-a-hotel-marketing-agency-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/hotel-growth-partnership-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/hotel-local-seo-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/hotel-booking-leak-audit-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/hotel-guest-experience-optimization-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/hotel-digital-marketing-agency-kenya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/local-seo-hotels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/local-seo-hotels/google-maps-ranking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/local-seo-hotels/nap-consistency`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/local-seo-hotels/generate-hotel-reviews`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/direct-bookings`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/direct-bookings/reduce-ota-dependence`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/direct-bookings/booking-engine-setup`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/direct-bookings/website-conversion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/experiential-marketing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/experiential-marketing/local-partnerships`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/experiential-marketing/turning-moments-into-content`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/pillar/experiential-marketing/telling-your-story`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    ...serviceRoutes,
    ...blogRoutes,
  ]
}
