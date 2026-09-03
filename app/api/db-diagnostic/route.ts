import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

// One-time diagnostic endpoint. Visit once with the secret query param, then this
// route should be deleted from the repo — it exposes schema structure (not data).
const DIAG_SECRET = 'bookedup-schema-check-2026-q3'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('secret') !== DIAG_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // List every table in the public schema
    const tablesResult = await pool.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `)
    const tables = tablesResult.rows.map((r: any) => r.table_name)

    // Get columns for every table found
    const schemaByTable: Record<string, any[]> = {}
    for (const table of tables) {
      const colsResult = await pool.query(
        `
        SELECT column_name, data_type, is_nullable, column_default
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
        ORDER BY ordinal_position
        `,
        [table]
      )
      schemaByTable[table] = colsResult.rows
    }

    // Row counts (cheap sanity check on whether tables have any real data)
    const rowCounts: Record<string, number> = {}
    for (const table of tables) {
      try {
        const countResult = await pool.query(`SELECT COUNT(*) FROM "${table}"`)
        rowCounts[table] = parseInt(countResult.rows[0].count, 10)
      } catch (e) {
        rowCounts[table] = -1
      }
    }

    return NextResponse.json({
      status: 'ok',
      tables,
      schemaByTable,
      rowCounts,
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        message: error?.message || String(error),
        name: error?.name,
      },
      { status: 500 }
    )
  }
}
