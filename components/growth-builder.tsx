'use client'

import { useMemo, useState } from 'react'
import { Check } from 'lucide-react'

// Prices stay off until real figures are filled in here. With `enabled: false` the summary says the
// investment is agreed on the walkthrough call, so no made-up number is ever shown to a visitor.
// To switch prices on: set enabled to true and fill in the monthly amounts in KES below.
const PRICING = {
  enabled: false,
  base: { boutique: 0, urban: 0, group: 0 } as Record<string, number>,
  modules: { gbp: 0, seo: 0, funnel: 0, reputation: 0 } as Record<string, number>,
  // Multiplies the monthly total. Steady build 1, sprint and takeover usually more.
  intensity: { steady: 1, sprint: 1, takeover: 1 } as Record<string, number>,
}

const WHATSAPP = '254799022671'
const CALENDLY = 'https://calendly.com/mogerejulius41/30min'

const PROPERTIES = [
  {
    id: 'boutique',
    name: 'Boutique or safari lodge',
    focus: 'High-value direct enquiries and search that tells your story.',
  },
  {
    id: 'urban',
    name: 'Urban or business hotel',
    focus: 'Winning the Google Maps results and repeat corporate bookings.',
  },
  {
    id: 'group',
    name: 'Multi-property or villa group',
    focus: 'One trusted brand that shows up in every location.',
  },
]

const MODULES = [
  {
    id: 'gbp',
    name: 'Google Business Profile and Map Pack',
    text: 'Local ranking, photo optimisation and a steady flow of new reviews.',
  },
  {
    id: 'seo',
    name: 'Direct booking SEO',
    text: 'Search pages for guests who are ready to book without a booking site.',
  },
  {
    id: 'funnel',
    name: 'Conversion and funnel overhaul',
    text: 'Website speed, a smoother mobile booking flow and reasons to book direct.',
  },
  {
    id: 'reputation',
    name: 'Guest reputation system',
    text: 'Automatic review requests and a simple routine for replying to every review.',
  },
]

const INTENSITIES = [
  {
    id: 'steady',
    name: 'Steady build',
    length: '90-day foundation',
    text: 'The essential fixes and baseline content, done properly.',
  },
  {
    id: 'sprint',
    name: 'Growth sprint',
    length: '6-month push',
    text: 'Weekly content, local citations and testing across the whole booking path.',
  },
  {
    id: 'takeover',
    name: 'Full takeover',
    length: 'Ongoing partnership',
    text: 'Ongoing management, monthly reports and campaigns for your busy seasons.',
  },
]

const kes = (n: number) => `KES ${Math.round(n).toLocaleString('en-KE')}`

function Option({
  selected,
  onClick,
  title,
  text,
  tag,
  multi,
}: {
  selected: boolean
  onClick: () => void
  title: string
  text: string
  tag?: string
  multi?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`text-left p-5 border-2 transition-colors w-full ${
        selected ? 'border-[#F6B12C] bg-[#F6B12C]/10' : 'border-white/15 hover:border-[#F6B12C]/60 bg-[#0D0D0D]'
      }`}
    >
      <span className="flex items-start justify-between gap-3">
        <span className="font-sign font-bold text-2xl text-[#F8F5EC] leading-tight">{title}</span>
        <span
          className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center border-2 ${
            multi ? 'rounded-sm' : 'rounded-full'
          } ${selected ? 'border-[#F6B12C] bg-[#F6B12C] text-black' : 'border-white/30'}`}
          aria-hidden="true"
        >
          {selected && <Check size={14} strokeWidth={3} />}
        </span>
      </span>
      {tag && <span className="block font-prose italic text-[#F6B12C] text-sm mt-1">{tag}</span>}
      <span className="block font-prose text-[#EAE5DF]/85 mt-2 leading-snug">{text}</span>
    </button>
  )
}

function StepHeading({ n, title, hint }: { n: number; title: string; hint: string }) {
  return (
    <div className="mb-4 text-left">
      <p className="font-sign font-bold text-[#F6B12C] text-xl">Step {n}</p>
      <h2 className="font-sign font-bold text-3xl md:text-4xl text-[#F8F5EC] !text-left">{title}</h2>
      <p className="font-prose text-[#EAE5DF]/75 mt-1 !text-left">{hint}</p>
    </div>
  )
}

export function GrowthBuilder() {
  const [property, setProperty] = useState<string | null>(null)
  const [modules, setModules] = useState<string[]>([])
  const [intensity, setIntensity] = useState<string | null>(null)

  const prop = PROPERTIES.find((p) => p.id === property)
  const level = INTENSITIES.find((i) => i.id === intensity)
  const chosen = MODULES.filter((m) => modules.includes(m.id))
  const ready = Boolean(prop && level && chosen.length > 0)

  const monthly = useMemo(() => {
    if (!PRICING.enabled || !property || !intensity) return null
    const sum = PRICING.base[property] + modules.reduce((t, id) => t + (PRICING.modules[id] ?? 0), 0)
    return sum * PRICING.intensity[intensity]
  }, [property, modules, intensity])

  const toggle = (id: string) =>
    setModules((cur) => (cur.includes(id) ? cur.filter((m) => m !== id) : [...cur, id]))

  const message = ready
    ? `I built this growth plan on bookedupafrica.com.\nProperty: ${prop!.name}\nModules: ${chosen
        .map((m) => m.name)
        .join(', ')}\nPace: ${level!.name} (${level!.length})\nI would like a 15-minute walkthrough.`
    : ''

  const summary = (
    <aside className="border-2 border-[#F6B12C] bg-[#0D0D0D] p-6 text-left">
      <p className="font-sign font-bold text-[#F6B12C] text-xl">Your custom growth blueprint</p>
      <dl className="mt-4 space-y-4 font-prose text-[#EAE5DF]">
        <div>
          <dt className="text-sm text-[#EAE5DF]/60">Property</dt>
          <dd className="text-lg">{prop ? prop.name : 'Not chosen yet'}</dd>
        </div>
        <div>
          <dt className="text-sm text-[#EAE5DF]/60">Modules</dt>
          <dd>
            {chosen.length > 0 ? (
              <ul className="space-y-1">
                {chosen.map((m) => (
                  <li key={m.id} className="flex gap-2">
                    <Check size={18} className="mt-1 shrink-0 text-[#F6B12C]" />
                    <span>{m.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-lg">None chosen yet</span>
            )}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-[#EAE5DF]/60">Pace and length</dt>
          <dd className="text-lg">{level ? `${level.name}, ${level.length}` : 'Not chosen yet'}</dd>
        </div>
        <div className="border-t border-dashed border-white/25 pt-4">
          <dt className="text-sm text-[#EAE5DF]/60">Investment</dt>
          <dd>
            {ready && monthly !== null ? (
              <span className="font-sign font-bold text-4xl text-[#F6B12C]">{kes(monthly)}</span>
            ) : ready ? (
              <span className="text-lg">Agreed on a short call, based on exactly this scope.</span>
            ) : (
              <span className="text-lg">Appears once you have made your choices.</span>
            )}
            {ready && monthly !== null && <span className="block text-sm text-[#EAE5DF]/60 mt-1">a month, to start</span>}
          </dd>
        </div>
      </dl>

      {ready ? (
        <div className="mt-6 space-y-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] hover:opacity-90 text-black font-sign font-bold text-xl transition-opacity"
          >
            Lock in this scope on WhatsApp
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-5 py-3 border-2 border-[#F6B12C] text-[#F6B12C] hover:bg-[#F6B12C]/10 font-sign font-bold text-xl transition-colors"
          >
            Book a walkthrough call
          </a>
        </div>
      ) : (
        <p className="mt-6 font-prose text-sm text-[#EAE5DF]/60">
          Choose a property, at least one module and a pace to unlock the next step.
        </p>
      )}
    </aside>
  )

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
      <div className="space-y-12">
        <section>
          <StepHeading n={1} title="Choose your base" hint="Pick the one that looks most like your property." />
          <div className="grid md:grid-cols-3 gap-4">
            {PROPERTIES.map((p) => (
              <Option
                key={p.id}
                selected={property === p.id}
                onClick={() => setProperty(p.id)}
                title={p.name}
                text={p.focus}
              />
            ))}
          </div>
        </section>

        <section>
          <StepHeading n={2} title="Select your growth modules" hint="Switch on only what you need right now. You can add more later." />
          <div className="grid md:grid-cols-2 gap-4">
            {MODULES.map((m) => (
              <Option key={m.id} multi selected={modules.includes(m.id)} onClick={() => toggle(m.id)} title={m.name} text={m.text} />
            ))}
          </div>
        </section>

        <section>
          <StepHeading n={3} title="Set your pace" hint="How hard should we push?" />
          <div className="grid md:grid-cols-3 gap-4">
            {INTENSITIES.map((i) => (
              <Option
                key={i.id}
                selected={intensity === i.id}
                onClick={() => setIntensity(i.id)}
                title={i.name}
                tag={i.length}
                text={i.text}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="lg:sticky lg:top-28">
        <p className="font-sign font-bold text-[#F6B12C] text-xl mb-2 text-left">Step 4</p>
        {summary}
      </div>
    </div>
  )
}
