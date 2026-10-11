// BookedUp Africa merchandise. No prices are shown until you add them.
//
// To sell online later, set `buyUrl` (for example a Selar product link) and a
// "Buy now" button appears next to the WhatsApp enquiry button. Set `price`
// (for example "KES 1,500") to show a price on the page and homepage.

export interface MerchDesign {
  id: string
  name: string
  image: string
  width: number
  height: number
  alt: string
  note: string
}

export interface MerchProduct {
  slug: string
  name: string
  tagline: string
  description: string
  price?: string
  buyUrl?: string
  designs: MerchDesign[]
}

export const WHATSAPP_NUMBER = '+254799022671'

export const MERCH: MerchProduct = {
  slug: 'signature-tee',
  name: 'BookedUp Africa Signature Tee',
  tagline: 'Wear the brand that helps African hotels get booked.',
  description:
    'A black tee with the BookedUp Africa logo on the front and our promise on the back: Research and Implementation for local search, experiential marketing, and hospitality growth.',
  price: undefined,
  buyUrl: undefined,
  designs: [
    {
      id: 'classic',
      name: 'Classic back print',
      image: '/merch/tee-classic.jpg',
      width: 1442,
      height: 800,
      alt: 'Black BookedUp Africa t-shirt, front with the logo and back reading "Research and Implementation for local search, experiential marketing, and hospitality growth" in a bold condensed font',
      note: 'Bold condensed lettering on the back.',
    },
    {
      id: 'script',
      name: 'Script back print',
      image: '/merch/tee-script.jpg',
      width: 1426,
      height: 798,
      alt: 'Black BookedUp Africa t-shirt, front with the logo and back reading "Research and Implementation" with the tagline in a flowing script font',
      note: 'Bold heading with a flowing script tagline.',
    },
  ],
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
