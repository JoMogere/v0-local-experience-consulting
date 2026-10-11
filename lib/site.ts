// The public address of this site. Used for canonical links, the sitemap,
// robots.txt and structured data. With no custom domain it resolves to the
// Vercel address automatically. When you connect a custom domain, set
// NEXT_PUBLIC_SITE_URL on Vercel (e.g. https://yourdomain.com) and redeploy.
const raw =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://v0-local-experience-consulting.vercel.app')

export const SITE_URL = raw.replace(/\/+$/, '')
export const SITE_HOST = new URL(SITE_URL).host
