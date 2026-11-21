import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { SiteChrome } from '@/components/site-chrome'
import { SiteSchema } from '@/components/site-schema'
import { MetaPixel } from '@/components/meta-pixel'
import { GoogleTagManager } from '@/components/google-tag-manager'
import { SocialTags } from '@/components/social-tags'
import { Hreflang } from '@/components/hreflang'
import './globals.css'
import { SITE_URL } from '@/lib/site'

// Fonts are stored with the site instead of being downloaded from Google during each build,
// so a slow or blocked download can no longer break a deploy.
const dmSans = localFont({
  variable: '--font-dm-sans',
  display: 'swap',
  src: [
    { path: './fonts/dm-sans-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-sans-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/dm-sans-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
})

const playfair = localFont({
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
  src: [
    { path: './fonts/playfair-display-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/playfair-display-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: './fonts/playfair-display-latin-400-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/playfair-display-latin-700-italic.woff2', weight: '700', style: 'italic' },
  ],
})

// Homepage voice: Barlow Condensed is close to the lettering on road signs; Newsreader is for reading.
const barlow = localFont({
  variable: '--font-sign',
  display: 'swap',
  src: [
    { path: './fonts/barlow-condensed-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/barlow-condensed-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
})

const newsreader = localFont({
  variable: '--font-prose',
  display: 'swap',
  src: [
    { path: './fonts/newsreader-latin-wght-normal.woff2', weight: '200 800', style: 'normal' },
    { path: './fonts/newsreader-latin-wght-italic.woff2', weight: '200 800', style: 'italic' },
  ],
})

export const metadata: Metadata = {
  title: 'BookedUp Africa — Transform Your Hospitality Business',
  description: 'Research and implementation for local search, experiential marketing, and hospitality growth. Empowering African hotels and resorts.',
  keywords: 'hotel marketing Africa, local search optimization, hospitality growth, direct bookings, East Africa tourism',
  authors: [{ name: 'BookedUp Africa' }],
  creator: 'BookedUp Africa',
  publisher: 'BookedUp Africa',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'R4EcsFocCZIX3AYkXYQzgQxhSNfunB66fq2hhKXxXa4',
  },
  openGraph: {
    type: 'website',
    title: 'BookedUp Africa — Transform Your Hospitality Business',
    description: 'Research and implementation for local search, experiential marketing, and hospitality growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookedUp Africa',
    description: 'Transforming African hospitality through local search and experiential marketing',
  },
  icons: {
    icon: [{ url: '/brand-icon.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/brand-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} ${barlow.variable} ${newsreader.variable} font-sans antialiased text-foreground`}>
        <SiteSchema />
          <MetaPixel />
          <GoogleTagManager />
        <SocialTags />
        <Hreflang />
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
