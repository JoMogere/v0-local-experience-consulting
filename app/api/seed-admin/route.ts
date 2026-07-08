import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { user, account } from '@/lib/db/schema'

// One-time seed endpoint. Visit once with the secret query param, then this
// route should be deleted from the repo — it has no auth beyond the secret.
const SEED_SECRET = 'bookedup-admin-seed-2026-x7q'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== SEED_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const existingUsers = await db.select().from(user)
    const existingAccounts = await db.select().from(account)

    if (searchParams.get('debug') === '1') {
      return NextResponse.json({
        status: 'debug',
        userCount: existingUsers.length,
        users: existingUsers.map((u) => ({ id: u.id, email: u.email, emailVerified: u.emailVerified })),
        accountCount: existingAccounts.length,
        accounts: existingAccounts.map((a) => ({ id: a.id, userId: a.userId, providerId: a.providerId, hasPassword: !!a.password })),
      })
    }

    if (existingUsers.length > 0) {
      return NextResponse.json({
        status: 'skipped',
        message: 'An admin user already exists — not creating a duplicate. Add ?debug=1 instead of triggering create to inspect current state, or tell me to clear it.',
        existingEmail: existingUsers[0].email,
      })
    }

    const result = await auth.api.signUpEmail({
      body: {
        email: 'mogerejulius41@gmail.com',
        password: 'MogereBABA254@',
        name: 'BookedUp Africa Admin',
      },
      asResponse: false,
    })
    return NextResponse.json({ status: 'created', result })
  } catch (error: any) {
    return NextResponse.json({
      status: 'error',
      message: error?.message || String(error),
      name: error?.name,
      statusCode: error?.status || error?.statusCode,
      cause: error?.cause ? String(error.cause) : undefined,
      stack: error?.stack,
    }, { status: 500 })
  }
}
