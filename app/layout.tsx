import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Local Experience Consulting — Research. Implementation. Growth.',
  description: 'Research and implementation for local search, experiential marketing, and hotel growth. Specializing in East African hospitality.',
  keywords: 'local search optimization, hospitality marketing, hotel growth, experiential marketing, East Africa',
  authors: [{ name: 'Local Experience Consulting' }],
  creator: 'Local Experience Consulting',
  publisher: 'Local Experience Consulting',
  metadataBase: new URL(process.env.BETTER_AUTH_URL || 'https://localexperienceconsulting.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Local Experience Consulting',
    title: 'Local Experience Consulting — Research. Implementation. Growth.',
    description: 'Research and implementation for local search, experiential marketing, and hotel growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local Experience Consulting',
    description: 'Research and implementation for hospitality growth in East Africa',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
