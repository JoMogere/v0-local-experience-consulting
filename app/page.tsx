import { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ServicesOverview } from "@/components/services-overview"
import { Portfolio } from "@/components/portfolio"
import { RealResults } from "@/components/real-results"
import { HowWeWork } from "@/components/how-we-work"
import { About } from "@/components/about"
import { Playbooks } from "@/components/playbooks"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { generateHomepageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ServicesOverview />
      <Portfolio />
      <RealResults />
      <HowWeWork />
      <About />
      <Playbooks />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateHomepageSchema()),
        }}
      />
    </main>
  )
}
