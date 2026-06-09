'use server'

import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function markUserAsAdmin(userId: string, invitationCode: string) {
  const correctCode = process.env.ADMIN_INVITATION_CODE
  
  if (!correctCode || invitationCode !== correctCode) {
    return { error: 'Invalid invitation code' }
  }

  try {
    await db.update(user).set({ isAdmin: true }).where(eq(user.id, userId))
    return { success: true }
  } catch (error) {
    console.error('Error marking user as admin:', error)
    return { error: 'Failed to mark user as admin' }
  }
}
