import { redirect } from 'next/navigation'
import { AdminNav } from '@/components/admin-nav'
import { getAdminSession } from '@/lib/admin'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { session, isAdmin } = await getAdminSession()

  if (!session?.user) {
    redirect('/sign-in')
  }

  // Signed in but not the admin (sign-up is public, so this can happen).
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-bold text-white mb-3">Access denied</h1>
          <p className="text-text-gray">
            {session.user.email} is not authorised to use the admin panel.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy-deep">
      <AdminNav userEmail={session.user.email} />
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}
