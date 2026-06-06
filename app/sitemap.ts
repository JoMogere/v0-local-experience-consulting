import { getPublishedServices } from '@/app/actions/services'
import { getPublishedBlogPosts } from '@/app/actions/blog'
import { getPublishedPages } from '@/app/actions/pages'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://localexperienceconsulting.com'

  const services = await getPublishedServices()
  const blogs = await getPublishedBlogPosts()
  const pages = await getPublishedPages()

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
