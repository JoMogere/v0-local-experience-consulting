import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

// Only these emails may use the admin panel or run admin actions. Anyone can
// reach /sign-up, so being signed in is NOT enough. Override on Vercel with
// ADMIN_EMAILS="a@x.com,b@y.com" if you ever add another admin.
const DEFAULT_ADMIN_EMAILS = ['mogerejulius41@gmail.com']

function adminEmails(): string[] {
  const fromEnv = process.env.ADMIN_EMAILS?.split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_ADMIN_EMAILS
}

export function isAdminEmail(email?: string | null): boolean {
  return !!email && adminEmails().includes(email.trim().toLowerCase())
}

export async function getAdminSession() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return { session: null, isAdmin: false }
  return { session, isAdmin: isAdminEmail(session.user.email) }
}

/** Use at the top of every admin server action. Throws if not the admin. */
export async function requireAdmin() {
  const { session, isAdmin } = await getAdminSession()
  if (!session?.user || !isAdmin) throw new Error('Unauthorized')
  return session.user
}
