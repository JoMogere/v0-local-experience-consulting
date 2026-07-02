import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'

export default async function AdminDashboard() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
      <p className="text-text-gray mb-8">Welcome back, {session.user.email}</p>

      {/* Management Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Management */}
        <Link
          href="/admin/blogs"
          className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
        >
          <div className="text-3xl mb-3">📝</div>
          <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors mb-1">
            Blog Articles
          </h3>
          <p className="text-text-gray text-sm">Create and publish articles for your audience.</p>
        </Link>

        {/* Service Management */}
        <Link
          href="/admin/services"
          className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
        >
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors mb-1">
            Services
          </h3>
          <p className="text-text-gray text-sm">Manage your service offerings and descriptions.</p>
        </Link>

        {/* Video Management */}
        <Link
          href="/admin/videos"
          className="p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
        >
          <div className="text-3xl mb-3">📹</div>
          <h3 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors mb-1">
            Videos
          </h3>
          <p className="text-text-gray text-sm">Add and organize your YouTube content.</p>
        </Link>
      </div>
    </div>
  )
}
