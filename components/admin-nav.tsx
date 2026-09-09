'use client'

import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'

const navLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/content-architecture', label: 'Content Architecture' },
  { href: '/admin/blog', label: 'Blog' },
  { href: '/admin/services', label: 'Services' },
  { href: '/admin/videos', label: 'Videos' },
  { href: '/admin/newsletter', label: 'Newsletter' },
  { href: '/admin/seo', label: 'SEO' },
  { href: '/admin/performance', label: 'Performance' },
]

export function AdminNav({ userEmail }: { userEmail: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = async () => {
    await authClient.signOut()
    router.push('/sign-in')
    router.refresh()
  }

  return (
    <>
      <header className="bg-navy-alt border-b border-border-flat sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#F9F6F0]">BookedUp Africa Admin</h1>
            <p className="text-text-gray text-xs mt-0.5">{userEmail}</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 rounded-sm text-sm font-medium transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      <nav className="bg-navy-deep border-b border-border-flat sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6 flex gap-8 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-4 px-1 border-b-2 whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? 'border-gold-flat text-gold-flat'
                  : 'border-transparent text-text-gray hover:text-[#F9F6F0]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
