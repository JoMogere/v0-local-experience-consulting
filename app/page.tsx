import { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { TrustMarquee } from "@/components/trust-marquee"
import { RealResults } from "@/components/real-results"
import { HowWeWork } from "@/components/how-we-work"
import { About } from "@/components/about"
import { Playbooks } from "@/components/playbooks"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ServicesOverview />
      <TrustMarquee />
      <RealResults />
      <HowWeWork />
      <About />
      <Playbooks />
      <FAQ />
      <Newsletter />
      <Contact />
      <WhatsAppButton />
    </div>
  )
}
