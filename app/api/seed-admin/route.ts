import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'

// One-time seed endpoint. Visit once with the secret query param, then this
// route should be deleted from the repo — it has no auth beyond the secret.
const SEED_SECRET = 'bookedup-admin-seed-2026-x7q'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== SEED_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const existing = await db.select().from(user).limit(1)
  if (existing.length > 0) {
    return NextResponse.json({
      status: 'skipped',
      message: 'An admin user already exists — not creating a duplicate.',
      existingEmail: existing[0].email,
    })
  }

  try {
    const result = await auth.api.signUpEmail({
      body: {
        email: 'mogerejulius41@gmail.com',
        password: 'MogereBABA254@',
        name: 'BookedUp Africa Admin',
      },
    })
    return NextResponse.json({ status: 'created', result })
  } catch (error: any) {
    return NextResponse.json({ status: 'error', message: error?.message || String(error) }, { status: 500 })
  }
}
