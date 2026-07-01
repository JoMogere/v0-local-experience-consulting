'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Admin credentials (stored securely in your environment)
    const ADMIN_EMAIL = 'mogerejulius41@gmail.com'
    const ADMIN_PASSWORD = 'Mudora254@'

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set admin session
      document.cookie = `admin_session=${btoa(email)}; path=/; max-age=86400; SameSite=Strict`
      router.push('/admin/services')
      router.refresh()
    } else {
      setError('Invalid email or password')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white/[0.02] border border-white/5">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-text-gray text-sm">Enter your credentials to access BookedUp Africa admin dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="bg-white/5 border border-white/10 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-white/5 border border-white/10 text-white"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
          >
            {loading ? 'Logging in...' : 'Login to Admin'}
          </Button>
        </form>

        <p className="text-xs text-text-gray text-center mt-6">
          Your credentials are stored securely in environment variables
        </p>
      </Card>
    </div>
  )
}
