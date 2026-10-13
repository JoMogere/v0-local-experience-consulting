// The BookedUp Africa logo, already hosted on Vercel Blob (same file the
// site header uses). Served from our own domain so browsers and Google show
// it as the site icon.
const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BookedUp%20Africa%20Logo-tPdkLknldcSEjEadrPMnjrh4qRp9zO.png'

export async function brandIconResponse() {
  let res: Response
  try {
    res = await fetch(LOGO_URL, { next: { revalidate: 86400 } })
  } catch {
    return new Response('Icon unavailable', { status: 502 })
  }
  if (!res.ok) return new Response('Icon unavailable', { status: 502 })
  return new Response(await res.arrayBuffer(), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
