/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  swcMinify: true,
  experimental: {
    turbopack: false,
  },
  webpack: (config, { isServer }) => {
    config.externals.push('better-auth/node_modules/@better-auth/kysely-adapter');
    return config;
  },
  async redirects() {
    return [
      {
        // Old Vercel address -> real domain (production host only, so
        // preview deployments keep working).
        source: '/:path*',
        has: [{ type: 'host', value: 'v0-local-experience-consulting.vercel.app' }],
        destination: 'https://bookedupafrica.com/:path*',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/hospitality-case-studies',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/merch',
        destination: '/shop',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Keep the temporary *.vercel.app address out of Google so only
        // bookedupafrica.com shows in search results.
        source: '/:path*',
        has: [{ type: 'host', value: '(?<h>.*\\.vercel\\.app)' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com https://connect.facebook.net https://elfsightcdn.com https://static.elfsight.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "frame-src 'self' https://www.youtube.com https://www.google.com https://www.tiktok.com https://www.instagram.com https://www.facebook.com https://web.facebook.com https://*.elfsight.com",
              "connect-src 'self' https://api.github.com https://www.googleapis.com https://www.facebook.com https://connect.facebook.net https://*.elfsight.com https://elfsightcdn.com",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
