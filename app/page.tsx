import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
