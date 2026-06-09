'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createDefaultAdminUser } from '@/app/actions/create-admin'
import { Button } from '@/components/ui/button'

export default function SetupAdminPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleCreateAdmin = async () => {
    setLoading(true)
    setMessage(null)
    setError(null)

    const result = await createDefaultAdminUser()

    setLoading(false)

    if (result.success) {
      setMessage('Admin account created successfully! Redirecting to sign-in...')
      setTimeout(() => {
        router.push('/sign-in')
      }, 2000)
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-4">Admin Setup</h1>
        <p className="text-text-gray mb-6">
          Click the button below to create your admin account. Your credentials are securely stored in environment variables.
        </p>

        <Button
          onClick={handleCreateAdmin}
          disabled={loading}
          className="w-full mb-4 bg-orange-500 hover:bg-orange-600 text-white"
        >
          {loading ? 'Creating Admin Account...' : 'Create Admin Account'}
        </Button>

        {message && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm">
            {message} ✓
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
            {error}
          </div>
        )}

        {message && !error && (
          <p className="text-sm text-text-gray mt-4">
            Your admin account has been created! You can now go to{' '}
            <a href="/sign-in" className="text-orange-500 hover:text-orange-400">
              /sign-in
            </a>{' '}
            and log in with your credentials.
          </p>
        )}
      </div>
    </div>
  )
}
