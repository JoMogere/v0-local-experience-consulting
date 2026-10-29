import { SITE_URL } from '@/lib/site'

// Served at /robots.txt. Lines starting with # are comments that crawlers ignore.
const BANNER = String.raw`#
#  ____              _            _ _   _
# | __ )  ___   ___ | | _____  __| | | | |_ __
# |  _ \ / _ \ / _ \| |/ / _ \/ _' | | | | '_ \
# | |_) | (_) | (_) |   <  __/ (_| | |_| | |_) |
# |____/ \___/ \___/|_|\_\___|\__,_|\___/| .__/
#                                        |_|
#      _    _____ ____  ___ ____    _
#     / \  |  ___|  _ \|_ _/ ___|  / \
#    / _ \ | |_  | |_) || | |     / _ \
#   / ___ \|  _| |  _ < | | |___ / ___ \
#  /_/   \_\_|   |_| \_\___\____/_/   \_\
#
#  Hotel marketing for Kenya and East Africa
#  ${SITE_URL}
#
# Hello, search engines and AI crawlers. The public site is
# yours to read. Private areas are off limits.
#`

export function GET() {
  const body = `${BANNER}

User-Agent: *
Allow: /
Disallow: /admin
Disallow: /sign-in
Disallow: /sign-up
Disallow: /setup-admin
Disallow: /api

Sitemap: ${SITE_URL}/sitemap.xml
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  })
}
