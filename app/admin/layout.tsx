import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { headers } from 'next/headers'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-deep text-white border-r border-white/10">
        <div className="p-6">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        
        <nav className="space-y-1 px-4">
          <Link
            href="/admin/services"
            className="block px-4 py-2 rounded hover:bg-white/10 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/admin/blog"
            className="block px-4 py-2 rounded hover:bg-white/10 transition-colors"
          >
            Blog Posts
          </Link>
          <Link
            href="/admin/pages"
            className="block px-4 py-2 rounded hover:bg-white/10 transition-colors"
          >
            Pages
          </Link>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="text-sm text-gray-400 mb-3">
            Logged in as: {session.user.email}
          </div>
          <form
            action={async () => {
              'use server'
              await auth.api.signOut({ headers: await headers() })
              redirect('/sign-in')
            }}
          >
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
            >
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
