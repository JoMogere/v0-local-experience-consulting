/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
