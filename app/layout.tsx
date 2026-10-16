import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteChrome } from '@/components/site-chrome'
import { SiteSchema } from '@/components/site-schema'
import './globals.css'
import { SITE_URL } from '@/lib/site'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '700']
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700'],
  style: ['normal', 'italic']
});

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
  verification: {
    google: 'R4EcsFocCZIX3AYkXYQzgQxhSNfunB66fq2hhKXxXa4',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'BookedUp Africa',
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
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased text-foreground`}>
        <SiteSchema />
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
