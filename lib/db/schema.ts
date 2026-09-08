import { pgTable, text, timestamp, boolean, serial, integer, jsonb } from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// IMPORTANT: The live database has ALL-LOWERCASE column names (no camelCase),
// because the original migration created them unquoted. Postgres lowercases
// unquoted identifiers automatically. Drizzle's column name string (the first
// argument) must match the REAL lowercase name; the JS property name (the key)
// can stay camelCase for ergonomics in code. Do not "fix" these back to
// camelCase strings — that reintroduces the exact bug this file fixes.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailverified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresat').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
  ipAddress: text('ipaddress'),
  userAgent: text('useragent'),
  userId: text('userid').notNull(),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountid').notNull(),
  providerId: text('providerid').notNull(),
  userId: text('userid').notNull(),
  accessToken: text('accesstoken'),
  refreshToken: text('refreshtoken'),
  idToken: text('idtoken'),
  accessTokenExpiresAt: timestamp('accesstokenexpiresat'),
  refreshTokenExpiresAt: timestamp('refreshtokenexpiresat'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresat').notNull(),
  createdAt: timestamp('createdat').defaultNow(),
  updatedAt: timestamp('updatedat').defaultNow(),
})

// --- App tables ------------------------------------------------------------
// All column name strings below are verified against the live database via
// /api/db-diagnostic. Every table here actually exists in production.

export const blogs = pgTable('blogs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  category: text('category'),
  status: text('status').notNull().default('draft'),
  userId: text('userid').notNull(),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
  publishedAt: timestamp('publishedat'),
})

// A second, separate blog table that also exists live — richer shape (image,
// full SEO meta fields, published boolean instead of status text). Kept
// distinct from `blogs` rather than merged, since merging without knowing
// which one the rest of the app should standardize on risks silently losing
// the field differences. Not wired into any page yet.
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  userId: text('userid').notNull(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  image: text('image'),
  category: text('category'),
  metaTitle: text('metatitle'),
  metaDescription: text('metadescription'),
  metaKeywords: text('metakeywords'),
  published: boolean('published').default(false),
  publishedAt: timestamp('publishedat'),
  createdAt: timestamp('createdat').defaultNow(),
  updatedAt: timestamp('updatedat').defaultNow(),
})

export const pages = pgTable('pages', {
  id: serial('id').primaryKey(),
  userId: text('userid').notNull(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  metaTitle: text('metatitle'),
  metaDescription: text('metadescription'),
  metaKeywords: text('metakeywords'),
  published: boolean('published').default(false),
  publishedAt: timestamp('publishedat'),
  createdAt: timestamp('createdat').defaultNow(),
  updatedAt: timestamp('updatedat').defaultNow(),
})

// Real structure differs significantly from what earlier code assumed —
// no content/features/icon/status/orderPosition. Uses subtitle,
// shortDescription, jsonb detail blocks, image, published boolean, and
// full SEO meta fields instead.
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  userId: text('userid').notNull(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  subtitle: text('subtitle'),
  description: text('description').notNull(),
  shortDescription: text('shortdescription'),
  researchDetails: jsonb('researchdetails'),
  implementationDetails: jsonb('implementationdetails'),
  image: text('image'),
  metaTitle: text('metatitle'),
  metaDescription: text('metadescription'),
  metaKeywords: text('metakeywords'),
  published: boolean('published').default(false),
  publishedAt: timestamp('publishedat'),
  createdAt: timestamp('createdat').defaultNow(),
  updatedAt: timestamp('updatedat').defaultNow(),
})

export const videos = pgTable('videos', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  youtubeId: text('youtubeid').notNull().unique(),
  description: text('description'),
  thumbnail: text('thumbnail'),
  category: text('category'),
  status: text('status').notNull().default('active'),
  userId: text('userid').notNull(),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
})

export const seoMetadata = pgTable('seo_metadata', {
  id: serial('id').primaryKey(),
  pageType: text('pagetype').notNull(),
  pageId: integer('pageid'),
  title: text('title'),
  description: text('description'),
  keywords: text('keywords'),
  ogTitle: text('ogtitle'),
  ogDescription: text('ogdescription'),
  canonicalUrl: text('canonicalurl'),
  userId: text('userid').notNull(),
  createdAt: timestamp('createdat').notNull().defaultNow(),
  updatedAt: timestamp('updatedat').notNull().defaultNow(),
})
