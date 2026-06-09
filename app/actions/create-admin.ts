'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function createDefaultAdminUser() {
  try {
    // Check if admin already exists
    const existingAdmin = await db
      .select()
      .from(user)
      .where(eq(user.email, 'mogerejulius41@gmail.com'))
      .limit(1)

    if (existingAdmin.length > 0) {
      return { success: true, message: 'Admin user already exists' }
    }

    // Create the admin user with better-auth
    const result = await auth.api.signUpEmail({
      email: 'mogerejulius41@gmail.com',
      password: 'Mudora254@',
      name: 'BookedUp Africa Admin',
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
