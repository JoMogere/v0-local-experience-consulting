import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import './globals.css'

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
  description: 'Research and implementation for local search, experiential marketing, and direct bookings. Empowering East African hotels and resorts.',
  keywords: 'hotel marketing Africa, local search optimization, hospitality growth, direct bookings, East Africa tourism',
  authors: [{ name: 'BookedUp Africa' }],
  creator: 'BookedUp Africa',
  publisher: 'BookedUp Africa',
  metadataBase: new URL(process.env.BETTER_AUTH_URL || 'https://bookedupafrica.com'),
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
    description: 'Research and implementation for local search, experiential marketing, and direct bookings.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BookedUp Africa',
    description: 'Transforming African hospitality through local search and experiential marketing',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        <Navigation />
        <main className="pt-20 md:pt-24">
          {children}
        </main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
