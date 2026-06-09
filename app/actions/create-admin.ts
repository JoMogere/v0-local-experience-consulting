'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function createDefaultAdminUser() {
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminName = process.env.ADMIN_NAME

  if (!adminEmail || !adminPassword || !adminName) {
    return { 
      success: false, 
      message: 'Admin credentials not configured. Please set ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_NAME environment variables.' 
    }
  }

  try {
    // Check if admin already exists
    const existingAdmin = await db
      .select()
      .from(user)
      .where(eq(user.email, adminEmail))
      .limit(1)

    if (existingAdmin.length > 0) {
      return { success: true, message: 'Admin user already exists' }
    }

    // Create the admin user with better-auth
    const result = await auth.api.signUpEmail({
      email: adminEmail,
      password: adminPassword,
      name: adminName,
    })

    if (result.user) {
      // Mark as admin
      await db
        .update(user)
        .set({ isAdmin: true, emailVerified: true })
        .where(eq(user.id, result.user.id))

      return { success: true, message: 'Admin user created successfully', userId: result.user.id }
    }

    return { success: false, message: 'Failed to create admin user' }
  } catch (error) {
    console.error('Error creating admin user:', error)
    return { success: false, message: 'Error creating admin user', error: String(error) }
  }
}
