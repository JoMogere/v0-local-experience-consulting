/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

export default nextConfig
