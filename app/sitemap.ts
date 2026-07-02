import { getPublicServices } from '@/app/actions/services'
import { getPublishedBlogs } from '@/app/actions/blogs'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://bookedupafrica.com'

  let services = []
  let blogs = []

  try {
    services = await getPublicServices()
  } catch (error) {
    console.log('[v0] Could not fetch services for sitemap')
  }

  try {
    blogs = await getPublishedBlogs()
  } catch (error) {
    console.log('[v0] Could not fetch blog posts for sitemap')
  }

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt || service.createdAt),
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
    ...serviceRoutes,
    ...blogRoutes,
  ]
}
