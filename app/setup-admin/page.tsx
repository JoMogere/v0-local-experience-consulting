'use client'

import { useState } from 'react'
import { createDefaultAdminUser } from '@/app/actions/create-admin'
import { Button } from '@/components/ui/button'

export default function SetupAdminPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleCreateAdmin = async () => {
    setLoading(true)
    setMessage(null)
    setError(null)

    const result = await createDefaultAdminUser()

    setLoading(false)

    if (result.success) {
      setMessage(result.message)
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-navy-deep flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-4">Admin Setup</h1>
        <p className="text-text-gray mb-6">
          Click the button below to create your admin account with the following credentials:
        </p>
        
        <div className="bg-white/5 p-4 rounded mb-6 space-y-2">
          <p className="text-sm text-white"><strong>Email:</strong> mogerejulius41@gmail.com</p>
          <p className="text-sm text-white"><strong>Password:</strong> Mudora254@</p>
        </div>

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
