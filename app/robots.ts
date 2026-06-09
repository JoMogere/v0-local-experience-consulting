import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BETTER_AUTH_URL || 'https://bookedupafrica.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/sign-in', '/sign-up', '/setup-admin', '/api'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
