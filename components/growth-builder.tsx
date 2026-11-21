'use client'

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Check, MapPin, Search, Smartphone, Star } from 'lucide-react'

// Prices stay off until real figures are filled in here. With `enabled: false` the summary says the
// investment is agreed on the walkthrough call, so no made-up number is ever shown to a visitor.
// To switch prices on: set enabled to true and fill in the monthly amounts in KES below.
const PRICING = {
  enabled: false,
  base: { boutique: 0, urban: 0, group: 0 } as Record<string, number>,
  modules: { gbp: 0, seo: 0, funnel: 0, reputation: 0 } as Record<string, number>,
  intensity: { steady: 1, sprint: 1, takeover: 1 } as Record<string, number>,
}

const WHATSAPP = '254799022671'
const CALENDLY = 'https://calendly.com/mogerejulius41/30min'

type ModuleId = 'gbp' | 'seo' | 'funnel' | 'reputation'

const PROPERTIES = [
  {
    id: 'boutique',
    short: 'Safari camp',
    name: 'Boutique or safari lodge',
    name2: 'Your Lodge',
    query: 'tented camp near me',
    headline: 'Wake up in the bush',
    info: 'Boutique and safari lodge: high-value direct enquiries, and search that tells your story.',
  },
  {
    id: 'urban',
    short: 'City hotel',
    name: 'Urban or business hotel',
    name2: 'Your Hotel',
    query: 'business hotel in Nairobi',
    headline: 'Business stays, made easy',
    info: 'Urban and business hotel: winning the Google Maps results and repeat corporate bookings.',
  },
  {
    id: 'group',
    short: 'Villa group',
    name: 'Multi-property or villa group',
    name2: 'Your Villas',
    query: 'villas in Naivasha',
    headline: 'Pick your villa',
    info: 'Villa group: one trusted brand that shows up in every location.',
  },
]

const MODULES: { id: ModuleId; short: string; name: string; icon: typeof MapPin; info: string }[] = [
  {
    id: 'gbp',
    short: 'Map Pack',
    name: 'Google Business Profile and Map Pack',
    icon: MapPin,
    info: 'Local ranking, photo optimisation and a steady flow of new reviews, so you show up in the map results.',
  },
  {
    id: 'seo',
    short: 'Direct SEO',
    name: 'Direct booking SEO',
    icon: Search,
    info: 'Search pages built for guests who are ready to book, so your own site appears above the booking sites.',
  },
  {
    id: 'funnel',
    short: 'Booking bar',
    name: 'Conversion and funnel overhaul',
    icon: Smartphone,
    info: 'A faster website and a simple mobile booking bar, with a reason to book direct.',
  },
  {
    id: 'reputation',
    short: 'Reviews',
    name: 'Guest reputation system',
    icon: Star,
    info: 'Automatic review requests and a routine for replying to every review.',
  },
]

const INTENSITIES = [
  { id: 'steady', short: 'Steady build', name: 'Steady build', length: '90-day foundation', months: 3, info: 'The essential fixes and baseline content, done properly over 90 days.' },
  { id: 'sprint', short: 'Growth sprint', name: 'Growth sprint', length: '6-month push', months: 6, info: 'Weekly content, local citations and testing across the whole booking path for six months.' },
  { id: 'takeover', short: 'Full takeover', name: 'Full takeover', length: 'Ongoing partnership', months: 6, info: 'Ongoing management, monthly reports and campaigns for your busy seasons.' },
]

const kes = (n: number) => `KES ${Math.round(n).toLocaleString('en-KE')}`

/* ---------- Pictures of the three property types ---------- */

function PropertyArt({ kind }: { kind: string }) {
  if (kind === 'urban') {
    const wins: ReactNode[] = []
    const b = [
      [10, 40, 38], [52, 18, 44], [100, 52, 34], [140, 30, 40], [188, 12, 46], [236, 46, 34],
    ]
    b.forEach(([x, top, w], i) => {
      for (let r = 0; r < 6; r++)
        for (let c = 0; c < 3; c++)
          if ((r * 3 + c + i) % 3 !== 0)
            wins.push(<rect key={`${i}-${r}-${c}`} x={x + 5 + c * ((w - 10) / 3)} y={top + 8 + r * 12} width={5} height={6} fill="#FFD27A" />)
    })
    return (
      <svg viewBox="0 0 270 130" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="skyU" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3A1706" /><stop offset="1" stopColor="#F26A0A" /></linearGradient>
        </defs>
        <rect width="270" height="130" fill="url(#skyU)" />
        {b.map(([x, top, w], i) => (
          <rect key={i} x={x} y={top} width={w} height={130 - top} fill="#0D0D0D" />
        ))}
        {wins}
      </svg>
    )
  }
  if (kind === 'group') {
    return (
      <svg viewBox="0 0 270 130" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
        <rect width="270" height="130" fill="#E9E4D2" />
        <path d="M0 95 C60 70 110 110 170 80 S250 70 270 85 V130 H0Z" fill="#BFD7C0" />
        <path d="M-5 30 L90 55 L175 35 L275 70" stroke="#FFFFFF" strokeWidth="7" fill="none" />
        <path d="M120 -5 L135 60 L110 135" stroke="#FFFFFF" strokeWidth="6" fill="none" />
        <circle cx="215" cy="30" r="14" fill="#9CC9E8" />
        {[[70, 52], [150, 46], [205, 78], [105, 92]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <path d="M0 0 C-9 -12 -9 -24 0 -24 S9 -12 0 0Z" fill="#F26A0A" transform="translate(0 0)" />
            <circle cx="0" cy="-17" r="3" fill="#fff" />
          </g>
        ))}
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 270 130" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#F6B12C" /><stop offset="1" stopColor="#F26A0A" /></linearGradient>
      </defs>
      <rect width="270" height="130" fill="url(#skyB)" />
      <circle cx="205" cy="62" r="24" fill="#FFE29A" />
      <rect y="92" width="270" height="38" fill="#3A1706" />
      <path d="M26 92 V62 M26 66 C6 62 0 52 -2 50 M26 66 C46 62 54 54 56 52 M26 60 C16 54 10 46 8 44 M26 60 C38 54 46 46 48 44" stroke="#0D0D0D" strokeWidth="3" fill="none" />
      <path d="M70 94 L108 60 L146 94Z" fill="#E8D3A8" />
      <path d="M98 94 L108 74 L118 94Z" fill="#3A1706" />
      <path d="M150 96 L184 68 L218 96Z" fill="#D8BD8C" />
      <path d="M176 96 L184 82 L192 96Z" fill="#3A1706" />
    </svg>
  )
}

/* ---------- The hotel preview, drawn at 560x400 and scaled to fit ---------- */

const W = 560
const H = 400

function Pin({ x, y, on, label, onClick }: { x: number; y: number; on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${on ? 'Turn off' : 'Turn on'} ${label}`}
      aria-pressed={on}
      style={{ left: x, top: y }}
      className="absolute z-30 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-black shadow-lg"
    >
      {!on && <span className="absolute inset-0 animate-ping rounded-full bg-[#F6B12C]/70" aria-hidden="true" />}
      <span className={`relative flex h-full w-full items-center justify-center rounded-full ${on ? 'bg-[#2F9E5B] text-white' : 'bg-[#F6B12C]'}`}>
        {on ? <Check size={18} strokeWidth={3} /> : '+'}
      </span>
    </button>
  )
}

const layer = (on: boolean, from: string) =>
  `transition-all duration-500 ease-out ${on ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${from} pointer-events-none`}`

const ghost = 'absolute rounded-md border-2 border-dashed border-[#B8B2A5] bg-[#F3EFE6]/70 text-[13px] text-[#8A8579] flex items-center justify-center'

function Preview({ property, on, toggle }: { property: (typeof PROPERTIES)[number]; on: Record<ModuleId, boolean>; toggle: (id: ModuleId) => void }) {
  const wrap = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.7)
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const fit = () => setScale(el.clientWidth / W)
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={wrap} className="w-full overflow-hidden" style={{ height: H * scale }}>
      <div className="relative origin-top-left select-none" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        {/* Google search pane */}
        <div className="absolute left-0 top-0 h-[400px] w-[270px] overflow-hidden rounded-xl bg-white shadow-xl font-sans">
          <div className="m-3 flex h-8 items-center gap-2 rounded-full border border-[#DADCE0] px-3 text-[13px] text-[#3C4043]">
            <Search size={14} className="text-[#9AA0A6]" />
            <span className="truncate">{property.query}</span>
          </div>

          {/* Map pack slot */}
          <div className="absolute left-3 right-3 top-[54px] h-[122px]">
            <div className={`${ghost} inset-0 flex-col gap-1`}>
              <span>Other camps in the map results</span>
              <span className="text-[11px]">Rank: not in the top 3</span>
            </div>
            <div className={`absolute inset-0 overflow-hidden rounded-md border border-[#DADCE0] bg-white shadow ${layer(on.gbp, 'translate-y-4 scale-95')}`}>
              <div className="flex h-[52px] gap-[2px]">
                <div className="flex-1 bg-gradient-to-br from-[#F6B12C] to-[#F26A0A]" />
                <div className="flex-1 bg-gradient-to-br from-[#7BB27E] to-[#3E7A56]" />
                <div className="flex-1 bg-gradient-to-br from-[#E8D3A8] to-[#B98B4E]" />
              </div>
              <div className="px-2 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[#202124]">{property.name2}</span>
                  <span className="rounded bg-[#F26A0A] px-1.5 py-[1px] text-[11px] font-bold text-white">#1 Ranking</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-[#202124]">
                  <span className="font-semibold">4.9</span>
                  <span className="text-[#F6B12C]">★★★★★</span>
                  <span className="text-[#70757A]">· Hotel</span>
                </div>
                <div className="mt-[2px] flex gap-3 text-[11px] font-semibold text-[#1A73E8]">
                  <span>Website</span><span>Directions</span><span>Call</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct SEO slot */}
          <div className="absolute left-3 right-3 top-[184px] h-[64px]">
            <div className={`${ghost} inset-0`}>Your website: not on page one</div>
            <div className={`absolute inset-0 rounded-md border border-[#DADCE0] bg-white px-2 py-1 shadow ${layer(on.seo, '-translate-y-3')}`}>
              <div className="flex items-center gap-1 text-[11px] text-[#202124]">
                <span className="h-3 w-3 rounded-full bg-[#F26A0A]" />
                {property.name2.toLowerCase().replace(' ', '')}.com
              </div>
              <div className="text-[14px] font-semibold leading-tight text-[#1A0DAB]">{property.name2}: Book Direct</div>
              <div className="text-[11px] font-semibold text-[#2F9E5B]">Official Site • Best Rate Guaranteed</div>
            </div>
          </div>

          {/* Booking site results, always there */}
          <div className="absolute left-3 right-3 top-[256px] space-y-2">
            {[0, 1].map((i) => (
              <div key={i} className="h-[46px] rounded-md border border-[#E4E4E4] bg-[#FAFAFA] px-2 py-1">
                <div className="text-[10px] text-[#70757A]">bookingsite{i + 1}.com</div>
                <div className="text-[13px] text-[#1A0DAB]/70">{property.name2} – lowest prices</div>
                <div className="mt-[2px] h-[3px] w-2/3 rounded bg-[#E4E4E4]" />
              </div>
            ))}
          </div>

          {/* Reviews layer */}
          <div className="absolute left-2 top-[322px] w-[230px]">
            <div className={`${ghost} left-0 top-0 h-[34px] w-[200px]`}>Guest reviews: not collected</div>
            <div className={`relative ${layer(on.reputation, 'translate-y-3')}`}>
              <div className="w-[210px] -rotate-1 rounded-lg border border-[#F6B12C] bg-[#FFF8E6] px-2 py-1 text-[11px] text-[#202124] shadow-lg">
                <span className="text-[#F6B12C]">★★★★★</span> &ldquo;Booked direct, zero hassle&rdquo;
              </div>
              <div className="ml-8 mt-1 w-[190px] rotate-1 rounded-lg bg-[#2F9E5B] px-2 py-1 text-[11px] text-white shadow-lg">
                Thank you for staying with us! <span className="opacity-80">Reply sent automatically</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hotel website pane */}
        <div className="absolute right-0 top-0 h-[400px] w-[270px] overflow-hidden rounded-xl bg-white shadow-xl font-sans">
          <div className="flex h-9 items-center justify-between border-b border-[#EEE] px-3">
            <span className="text-[14px] font-bold text-[#202124]">{property.name2}</span>
            <span className="space-y-[3px]"><i className="block h-[2px] w-4 bg-[#202124]" /><i className="block h-[2px] w-4 bg-[#202124]" /><i className="block h-[2px] w-4 bg-[#202124]" /></span>
          </div>
          <div className="relative h-[130px]">
            <PropertyArt kind={property.id} />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-[15px] font-bold text-white">{property.headline}</div>
          </div>

          {/* Rooms and offers, shown once the site has been tidied up */}
          <div className={`absolute inset-x-3 top-[178px] transition-opacity duration-500 ${on.funnel ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-2 text-[12px] leading-snug text-[#5F6368]">Rooms, dining and offers, all one tap away.</div>
            <div className="grid grid-cols-3 gap-2">
              {[['Rooms', 'from-[#F6B12C] to-[#F26A0A]'], ['Dining', 'from-[#7BB27E] to-[#3E7A56]'], ['Offers', 'from-[#E8D3A8] to-[#B98B4E]']].map(([t, c]) => (
                <div key={t} className={`flex h-[70px] items-end rounded-md bg-gradient-to-br ${c} p-1 text-[12px] font-bold text-white`}>{t}</div>
              ))}
            </div>
          </div>

          {/* Clunky form, replaced when the booking bar is on */}
          <div className={`mx-3 mt-3 space-y-[6px] transition-opacity duration-500 ${on.funnel ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-[12px] font-semibold text-[#5F6368]">Enquiry form</div>
            {['Full name', 'Email address', 'Dates (dd/mm/yyyy)'].map((f) => (
              <div key={f} className="h-6 rounded-sm border border-[#C8C8C8] bg-[#F4F4F4] px-2 text-[11px] leading-6 text-[#9AA0A6]">{f}</div>
            ))}
            <div className="w-16 rounded-sm bg-[#B0B0B0] py-[3px] text-center text-[11px] text-white">Submit</div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[70px]">
            <div className={`${ghost} inset-x-3 bottom-3 h-[44px] ${on.funnel ? 'opacity-0' : 'opacity-0'}`} />
            <div className={`absolute inset-x-2 bottom-3 rounded-xl bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] px-3 py-[6px] text-black shadow-lg ${layer(on.funnel, 'translate-y-10')}`}>
              <div className="text-[14px] font-extrabold leading-tight">Check availability</div>
              <div className="text-[11px] font-semibold">Save 15% when you book direct</div>
            </div>
          </div>
        </div>

        {/* Pins: clicking one on the picture switches that module */}
        <Pin x={236} y={56} on={on.gbp} label="Map Pack" onClick={() => toggle('gbp')} />
        <Pin x={236} y={186} on={on.seo} label="Direct booking SEO" onClick={() => toggle('seo')} />
        <Pin x={216} y={314} on={on.reputation} label="Guest reviews" onClick={() => toggle('reputation')} />
        <Pin x={514} y={338} on={on.funnel} label="the booking bar" onClick={() => toggle('funnel')} />
      </div>
    </div>
  )
}

/* ---------- One simple row of choices under the picture ---------- */

function Dot({
  selected,
  onClick,
  label,
  children,
  square,
}: {
  selected: boolean
  onClick: () => void
  label: string
  children: ReactNode
  square?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={label}
      title={label}
      className={`flex flex-col items-center gap-1 ${selected ? 'text-[#F6B12C]' : 'text-[#EAE5DF]/70 hover:text-[#F8F5EC]'}`}
    >
      <span
        className={`flex h-12 w-12 items-center justify-center overflow-hidden border-2 transition-colors ${square ? 'rounded-md' : 'rounded-full'} ${
          selected ? 'border-[#F6B12C] bg-[#F6B12C]/15' : 'border-white/25 bg-[#161616]'
        }`}
      >
        {children}
      </span>
      <span className="font-sign text-sm font-semibold leading-none">{label}</span>
    </button>
  )
}

export function GrowthBuilder() {
  // Starts already built, like a shoe you can start changing straight away.
  const [propertyId, setPropertyId] = useState('boutique')
  const [chosen, setChosen] = useState<ModuleId[]>(['gbp'])
  const [intensityId, setIntensityId] = useState('sprint')
  const [info, setInfo] = useState('Tap the + pins on the picture, or the circles below, to build your system.')

  const property = PROPERTIES.find((p) => p.id === propertyId)!
  const intensity = INTENSITIES.find((i) => i.id === intensityId)!
  const modules = MODULES.filter((m) => chosen.includes(m.id))
  const on: Record<ModuleId, boolean> = {
    gbp: chosen.includes('gbp'),
    seo: chosen.includes('seo'),
    funnel: chosen.includes('funnel'),
    reputation: chosen.includes('reputation'),
  }

  const toggle = (id: ModuleId) => {
    const m = MODULES.find((x) => x.id === id)!
    setChosen((cur) => {
      const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
      setInfo(`${next.includes(id) ? 'Added' : 'Removed'}: ${m.name}. ${m.info}`)
      return next
    })
  }

  const monthly = useMemo(() => {
    if (!PRICING.enabled) return null
    const sum = PRICING.base[propertyId] + chosen.reduce((t, id) => t + (PRICING.modules[id] ?? 0), 0)
    return sum * PRICING.intensity[intensityId]
  }, [propertyId, chosen, intensityId])

  const message =
    `I built this growth plan on bookedupafrica.com.\nProperty: ${property.name}\nModules: ${
      modules.length ? modules.map((m) => m.name).join(', ') : 'none yet'
    }\nPace: ${intensity.name} (${intensity.length})\nI would like a 15-minute walkthrough.`

  return (
    <div className="mx-auto max-w-3xl">
      <div className="sticky top-16 z-20 -mx-4 bg-black px-4 pb-2 pt-2 md:static md:mx-0 md:px-0">
        <Preview property={property} on={on} toggle={toggle} />
        <p className="mt-2 min-h-[3.2rem] border-l-4 border-[#F6B12C] bg-[#0D0D0D] px-3 py-2 text-left font-prose text-sm text-[#EAE5DF]/90">
          {info}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-start justify-center gap-x-8 gap-y-5 border border-white/15 bg-[#0D0D0D] p-4">
        <div className="flex gap-3" role="group" aria-label="Property type">
          {PROPERTIES.map((p) => (
            <Dot
              key={p.id}
              label={p.short}
              selected={propertyId === p.id}
              onClick={() => {
                setPropertyId(p.id)
                setInfo(p.info)
              }}
            >
              <span className="block h-full w-full scale-[1.6]">
                <PropertyArt kind={p.id} />
              </span>
            </Dot>
          ))}
        </div>

        <div className="flex gap-3" role="group" aria-label="Growth modules">
          {MODULES.map((m) => {
            const Icon = m.icon
            return (
              <Dot key={m.id} label={m.short} selected={on[m.id]} onClick={() => toggle(m.id)}>
                <Icon size={22} strokeWidth={1.9} />
              </Dot>
            )
          })}
        </div>

        <div className="flex gap-3" role="group" aria-label="Pace">
          {INTENSITIES.map((i) => (
            <Dot
              key={i.id}
              square
              label={i.short}
              selected={intensityId === i.id}
              onClick={() => {
                setIntensityId(i.id)
                setInfo(i.info)
              }}
            >
              <span className="font-sign text-base font-bold">{i.id === 'steady' ? '90d' : i.id === 'sprint' ? '6m' : '∞'}</span>
            </Dot>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 border-2 border-[#F6B12C] bg-[#0D0D0D] p-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-prose text-[#EAE5DF]">
          <span className="font-sign text-xl font-bold text-[#F8F5EC]">{property.short}</span> · {modules.length}{' '}
          {modules.length === 1 ? 'module' : 'modules'} · {intensity.name}
          <span className="block text-sm text-[#EAE5DF]/70">
            {monthly !== null ? `${kes(monthly)} a month, to start` : 'Price agreed on a short call, for exactly this scope'}
          </span>
        </p>
        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] px-6 py-3 font-sign text-xl font-bold text-black transition-opacity hover:opacity-90"
          >
            Lock in this scope
          </a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="font-prose text-sm text-[#F6B12C] underline underline-offset-4">
            or book a walkthrough call
          </a>
        </div>
      </div>
      <p className="mt-2 text-center font-prose text-xs text-[#EAE5DF]/50">
        An illustration with an example property, not a real result or a guarantee.
      </p>
    </div>
  )
}
