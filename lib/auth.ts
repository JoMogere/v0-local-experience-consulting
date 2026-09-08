import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'

export const auth = betterAuth({
  database: pool,
  baseURL:
    process.env.BETTER_AUTH_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.V0_RUNTIME_URL),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  // The live database has all-lowercase, unquoted column names (see
  // lib/db/schema.ts for the full explanation). Better Auth is given a raw
  // `pool` above rather than a Drizzle adapter, so it does NOT read our
  // Drizzle schema at all — it builds its own queries using its own default
  // camelCase field names. Without these explicit mappings, every Better
  // Auth query fails to find the real (lowercase) column, exactly like the
  // "column emailVerified does not exist" error this whole investigation
  // started from. Verified against /api/db-diagnostic.
  user: {
    fields: {
      emailVerified: 'emailverified',
      createdAt: 'createdat',
      updatedAt: 'updatedat',
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
    fields: {
      expiresAt: 'expiresat',
      createdAt: 'createdat',
      updatedAt: 'updatedat',
      ipAddress: 'ipaddress',
      userAgent: 'useragent',
      userId: 'userid',
    },
  },
  account: {
    fields: {
      accountId: 'accountid',
      providerId: 'providerid',
      userId: 'userid',
      accessToken: 'accesstoken',
      refreshToken: 'refreshtoken',
      idToken: 'idtoken',
      accessTokenExpiresAt: 'accesstokenexpiresat',
      refreshTokenExpiresAt: 'refreshtokenexpiresat',
      createdAt: 'createdat',
      updatedAt: 'updatedat',
    },
  },
  verification: {
    fields: {
      expiresAt: 'expiresat',
      createdAt: 'createdat',
      updatedAt: 'updatedat',
    },
  },
  trustedOrigins: [
    ...(process.env.V0_RUNTIME_URL ? [process.env.V0_RUNTIME_URL] : []),
    ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
    ...(process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? [`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`]
      : []),
  ],
  ...(process.env.NODE_ENV === 'development'
    ? {
        advanced: {
          // In dev (v0 preview iframe), force cross-site cookies so the
          // session cookie is stored by the browser.
          defaultCookieAttributes: {
            sameSite: 'none' as const,
            secure: true,
          },
        },
      }
    : {}),
})
