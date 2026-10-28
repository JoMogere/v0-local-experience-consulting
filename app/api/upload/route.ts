import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'
import { getAdminSession } from '@/lib/admin'

const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const MAX_BYTES = 4 * 1024 * 1024 // Vercel functions accept request bodies up to about 4.5 MB

// Admin-only image upload for blog posts. Returns { url } to put in the article.
export async function POST(request: Request) {
  const { isAdmin } = await getAdminSession()
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Vercel names the token after the store prefix, so accept any *_READ_WRITE_TOKEN.
  const tokenKey = Object.keys(process.env).find((k) => k.endsWith('READ_WRITE_TOKEN') && process.env[k])
  const token = tokenKey ? process.env[tokenKey] : undefined

  // No gate on the token: newer Blob stores connect with BLOB_STORE_ID and no token variable,
  // and the SDK works out the credentials itself. Real failures are reported below.

  let file: FormDataEntryValue | null
  try {
    file = (await request.formData()).get('file')
  } catch {
    return NextResponse.json({ error: 'Could not read the upload.' }, { status: 400 })
  }

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No image received.' }, { status: 400 })
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: 'Use a JPG, PNG, WebP or GIF image.' }, { status: 400 })
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Image is too large (max 4 MB).' }, { status: 413 })
  }

  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-+|-+$/g, '') || 'image'
  try {
    const blob = await put(`blog/${safeName}`, file, { access: 'public', addRandomSuffix: true, ...(token ? { token } : {}) })
    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error('Image upload failed', error)
    const detail = error instanceof Error ? error.message : 'unknown error'
    return NextResponse.json({ error: `Upload failed: ${detail}` }, { status: 500 })
  }
}
