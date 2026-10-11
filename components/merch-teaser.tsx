import Image from 'next/image'
import Link from 'next/link'
import { MERCH, SHOP_NAME, SHOP_HEADLINE } from '@/lib/merch-data'

export function MerchTeaser() {
  const photo = MERCH.photo
  return (
    <section id="shop" className="py-16 md:py-24 bg-navy-deep">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="overflow-hidden rounded-sm border border-border-flat max-w-sm mx-auto md:max-w-none w-full">
          <Image src={photo.image} alt={photo.alt} width={photo.width} height={photo.height} className="w-full h-auto" />
        </div>
        <div>
          <p className="text-gold-flat uppercase tracking-[2px] md:tracking-[3px] text-xs md:text-sm mb-3 md:mb-4">{SHOP_NAME}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F9F6F0] mb-4">{SHOP_HEADLINE}</h2>
          <p className="text-gold-flat mb-3">{MERCH.name}</p>
          <p className="text-text-gray mb-6">{MERCH.description}</p>
          <Link
            href="/shop"
            className="inline-flex items-center text-sm text-gold-flat uppercase tracking-[2px] hover:tracking-[3px] transition-all"
          >
            Visit the Shop →
          </Link>
        </div>
      </div>
    </section>
  )
}
