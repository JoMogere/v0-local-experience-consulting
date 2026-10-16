import { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { SearchChanged } from "@/components/search-changed"
import { TrustMarquee } from "@/components/trust-marquee"
import { HowWeWork } from "@/components/how-we-work"
import { About } from "@/components/about"
import { Playbooks } from "@/components/playbooks"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { PreferredSourceButton } from "@/components/preferred-source-button"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: { absolute: 'Hotel Marketing in Kenya | BookedUp Africa' },
  description:
    'BookedUp Africa helps hotels in Kenya get found on Google, win more direct bookings and stand out with experiential marketing.',
  keywords: 'hotel marketing Kenya, local SEO for hotels, direct bookings, experiential marketing, Google Business Profile',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hotel Marketing in Kenya | BookedUp Africa',
    description:
      'Get found on Google, win more direct bookings and stand out with experiential marketing for your hotel.',
    url: '/',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ServicesOverview />
      <SearchChanged />
      <TrustMarquee />
      <HowWeWork />
      <About />
      <Playbooks />
      <FAQ />
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <PreferredSourceButton />
      </div>
      <Newsletter />
      <Contact />
      <WhatsAppButton />
    </div>
  )
}
