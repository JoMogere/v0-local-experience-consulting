'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for admin session cookie
    const cookies = document.cookie.split(';')
    const hasAuth = cookies.some((c) => c.trim().startsWith('admin_auth='))

    if (!hasAuth && !pathname.includes('/login')) {
      router.push('/admin/login')
    }
    setIsAuth(hasAuth)
    setLoading(false)
  }, [router, pathname])

  if (loading) return null

  if (!isAuth && !pathname.includes('/login')) {
    return null
  }

  if (pathname.includes('/login')) {
    return children
  }

  const handleLogout = () => {
    document.cookie = 'admin_auth=; path=/; max-age=0'
    router.push('/admin/login')
  }

  const navLinks = [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/content', label: 'Content' },
    { href: '/admin/seo', label: 'SEO' },
    { href: '/admin/performance', label: 'Performance' },
  ]

  return (
    <div className="min-h-screen bg-navy-deep">
      {/* Header */}
      <header className="bg-white/5 border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">BookedUp Africa Admin</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-lg text-sm font-medium transition-colors">
            Logout
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/[0.02] border-b border-white/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-4 px-1 border-b-2 transition-colors ${
                pathname === link.href ? 'border-orange-500 text-orange-500' : 'border-transparent text-text-gray hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}
