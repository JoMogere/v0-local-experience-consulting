'use server'

import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function markUserAsAdmin(userId: string) {
  try {
    await db.update(user).set({ isAdmin: true }).where(eq(user.id, userId))
    return { success: true }
  } catch (error) {
    console.error('Error marking user as admin:', error)
    return { success: false, error: 'Failed to mark user as admin' }
  }
}
