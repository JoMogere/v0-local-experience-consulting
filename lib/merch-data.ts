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

export interface MerchPhoto {
  image: string
  width: number
  height: number
  alt: string
}

export interface MerchProduct {
  slug: string
  name: string
  tagline: string
  description: string
  price?: string
  buyUrl?: string
  photo: MerchPhoto
  gallery: MerchPhoto[]
  designs: MerchDesign[]
}

// Shop page heading. Change SHOP_PRIDE_WORD to reword "Show Your ___ Pride".
export const SHOP_PRIDE_WORD = 'African'
export const SHOP_NAME = 'BookedUp Africa Shop'
export const SHOP_HEADLINE = `Show Your ${SHOP_PRIDE_WORD} Pride`

export const WHATSAPP_NUMBER = '+254799022671'

export const MERCH: MerchProduct = {
  slug: 'signature-tee',
  name: 'BookedUp Africa Signature Tee',
  tagline: 'Wear the brand that helps African hotels get booked.',
  description:
    'A black tee with the BookedUp Africa logo on the front and our promise on the back: Research and Implementation for local search, experiential marketing, and hospitality growth.',
  price: undefined,
  buyUrl: undefined,
  photo: {
    image: '/merch/tee-worn.jpg',
    width: 1000,
    height: 1333,
    alt: 'Jo Mogere wearing the black BookedUp Africa t-shirt with arms raised on a stone path through trees at a lodge with thatched huts',
  },
  gallery: [
    {
      image: '/merch/tee-front-worn.webp',
      width: 1040,
      height: 1560,
      alt: 'Jo Mogere smiling in a grey BookedUp Africa t-shirt with the logo on the front',
    },
  ],
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
  ],
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
