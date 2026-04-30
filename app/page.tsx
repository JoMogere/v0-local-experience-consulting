import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Playbooks } from "@/components/playbooks"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <Playbooks />
      <Newsletter />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
