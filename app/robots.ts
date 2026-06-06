import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/sign-in', '/sign-up', '/api'],
    },
    sitemap: `${process.env.BETTER_AUTH_URL || 'https://localexperienceconsulting.com'}/sitemap.xml`,
  }
}
