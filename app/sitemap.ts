import { getPublishedServices } from '@/app/actions/services'
import { getPublishedBlogPosts } from '@/app/actions/blog'
import { getPublishedPages } from '@/app/actions/pages'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://localexperienceconsulting.com'

  let services = []
  let blogs = []
  let pages = []

  try {
    services = await getPublishedServices()
  } catch (error) {
    console.log('[v0] Could not fetch services for sitemap')
  }

  try {
    blogs = await getPublishedBlogPosts()
  } catch (error) {
    console.log('[v0] Could not fetch blog posts for sitemap')
  }

  try {
    pages = await getPublishedPages()
  } catch (error) {
    console.log('[v0] Could not fetch pages for sitemap')
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

  const pageRoutes = pages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page.updatedAt || page.createdAt),
    changeFrequency: 'monthly' as const,
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
    ...serviceRoutes,
    ...blogRoutes,
    ...pageRoutes,
  ]
}
