import { pgTable, text, timestamp, boolean, serial, jsonb } from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables for CMS ---------------------------------------------------

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  subtitle: text('subtitle'),
  description: text('description').notNull(),
  shortDescription: text('shortDescription'),
  researchDetails: jsonb('researchDetails'),
  implementationDetails: jsonb('implementationDetails'),
  image: text('image'),
  metaTitle: text('metaTitle'),
  metaDescription: text('metaDescription'),
  metaKeywords: text('metaKeywords'),
  published: boolean('published').notNull().default(false),
  publishedAt: timestamp('publishedAt'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  image: text('image'),
  category: text('category'),
  metaTitle: text('metaTitle'),
  metaDescription: text('metaDescription'),
  metaKeywords: text('metaKeywords'),
  published: boolean('published').notNull().default(false),
  publishedAt: timestamp('publishedAt'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull().references(() => user.id, { onDelete: 'cascade' }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  metaTitle: text('metaTitle'),
  metaDescription: text('metaDescription'),
  metaKeywords: text('metaKeywords'),
  published: boolean('published').notNull().default(false),
  publishedAt: timestamp('publishedAt'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})
