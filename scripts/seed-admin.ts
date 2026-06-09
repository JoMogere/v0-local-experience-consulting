import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'
import { hash } from 'bcrypt'

async function seedAdmin() {
  try {
    const adminPassword = await hash('Mudora254@', 10)
    
    // Check if admin already exists
    const existingAdmin = await db
      .select()
      .from(user)
      .where(user.email === 'mogerejulius41@gmail.com')
      .limit(1)
    
    if (existingAdmin.length > 0) {
      console.log('Admin user already exists')
      return
    }

    // Create admin user
    const newAdmin = await db.insert(user).values({
      id: 'admin-' + Date.now(),
      name: 'BookedUp Africa Admin',
      email: 'mogerejulius41@gmail.com',
      emailVerified: true,
      isAdmin: true,
    }).returning()

    console.log('Admin user created:', newAdmin)
  } catch (error) {
    console.error('Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
