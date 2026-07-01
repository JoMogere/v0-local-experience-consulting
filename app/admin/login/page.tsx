'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simple credentials
    const ADMIN_EMAIL = 'mogerejulius41@gmail.com'
    const ADMIN_PASSWORD = 'Mudora254@'

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set session cookie
      document.cookie = `admin_auth=${btoa(email)}; path=/; max-age=604800; SameSite=Strict`
      setLoading(false)
      router.push('/admin')
      router.refresh()
    } else {
      setError('Invalid credentials')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/[0.02] border border-white/5 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-2">BookedUp Africa Admin</h1>
        <p className="text-text-gray text-sm mb-8">Login to manage your site</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
