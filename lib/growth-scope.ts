// The choices from the growth builder, as short codes that travel in a web address
// (/book-demo?property=villa-group&modules=map-pack,reviews&pace=6m) and read back as plain words.
export const SCOPE_PROPERTIES: Record<string, string> = {
  'safari-camp': 'Boutique or safari lodge',
  'city-hotel': 'Urban or business hotel',
  'villa-group': 'Multi-property or villa group',
}

export const SCOPE_MODULES: Record<string, string> = {
  'map-pack': 'Google Business Profile and Map Pack',
  'direct-seo': 'Direct booking SEO',
  'booking-bar': 'Conversion and funnel overhaul',
  reviews: 'Guest reputation system',
}

export const SCOPE_PACE: Record<string, string> = {
  '90d': 'Steady build (90-day foundation)',
  '6m': 'Growth sprint (6-month push)',
  ongoing: 'Full takeover (ongoing partnership)',
}

export interface Scope {
  property: string
  modules: string[]
  pace: string
}

export function parseScope(get: (key: string) => string | null): Scope | null {
  const property = SCOPE_PROPERTIES[get('property') ?? '']
  const pace = SCOPE_PACE[get('pace') ?? '']
  const modules = (get('modules') ?? '')
    .split(',')
    .map((m) => SCOPE_MODULES[m.trim()])
    .filter(Boolean)
  if (!property || !pace) return null
  return { property, modules, pace }
}

export function scopeText(s: Scope): string {
  return `${s.property}. Modules: ${s.modules.length ? s.modules.join(', ') : 'none chosen'}. Pace: ${s.pace}.`
}
