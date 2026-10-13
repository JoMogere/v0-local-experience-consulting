// The public address of this site. Used for canonical links, the sitemap,
// robots.txt and structured data. Defaults to https://bookedupafrica.com;
// set NEXT_PUBLIC_SITE_URL on Vercel to override and redeploy.
const raw =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'https://bookedupafrica.com')

export const SITE_URL = raw.replace(/\/+$/, '')
export const SITE_HOST = new URL(SITE_URL).host
