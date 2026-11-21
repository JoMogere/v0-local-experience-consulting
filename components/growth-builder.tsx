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

/* ---------- Timeline under the preview ---------- */

function Timeline({ intensity, on }: { intensity: (typeof INTENSITIES)[number] | undefined; on: Record<ModuleId, boolean> }) {
  const second = on.gbp ? 'Map Pack set up' : on.seo ? 'Booking pages live' : on.funnel ? 'Booking bar live' : 'First fixes live'
  const plan: Record<string, { at: number; label: string }[]> = {
    steady: [
      { at: 0.25, label: 'Week 1: audit' },
      { at: 2, label: `Month 2: ${second}` },
      { at: 3, label: 'Month 3: results review' },
    ],
    sprint: [
      { at: 0.25, label: 'Week 1: audit' },
      { at: 2, label: `Month 2: ${second}` },
      { at: 4, label: 'Month 4: weekly content in full swing' },
      { at: 6, label: 'Month 6: direct booking review' },
    ],
    takeover: [
      { at: 0.25, label: 'Week 1: audit' },
      { at: 2, label: `Month 2: ${second}` },
      { at: 3, label: 'Month 3: first monthly report' },
      { at: 6, label: 'Month 6: seasonal campaign' },
    ],
  }
  const items = intensity ? plan[intensity.id] : []
  const fill = intensity ? (intensity.months / 6) * 100 : 0
  return (
    <div className="mt-4 border border-white/15 bg-[#0D0D0D] p-4 text-left">
      <p className="font-sign font-bold text-xl text-[#F8F5EC]">
        {intensity ? `${intensity.length}: what happens when` : 'Pick a pace to see the timeline'}
      </p>
      <div className="relative mt-4 h-3 rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] transition-all duration-700 ease-out"
          style={{ width: `${fill}%` }}
        />
        {items.map((m, i) => (
          <span
            key={m.label}
            style={{ left: `${Math.min((m.at / 6) * 100, 98)}%` }}
            className="absolute top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-[#F8F5EC] text-[11px] font-bold text-black"
          >
            {i + 1}
          </span>
        ))}
      </div>
      <div className="mt-1 flex justify-between font-prose text-xs text-[#EAE5DF]/60">
        <span>Start</span><span>Month 3</span><span>Month 6{intensity?.id === 'takeover' ? ' and on' : ''}</span>
      </div>
      {items.length > 0 && (
        <ol className="mt-3 grid gap-1 font-prose text-sm text-[#EAE5DF]/90 sm:grid-cols-2">
          {items.map((m, i) => (
            <li key={m.label} className="flex gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F8F5EC] text-[11px] font-bold text-black">{i + 1}</span>
              {m.label}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

/* ---------- Small swatches for the choices ---------- */

function Swatch({ selected, onClick, children, label, multi }: { selected: boolean; onClick: () => void; children: ReactNode; label: string; multi?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`relative flex flex-col items-center gap-2 border-2 p-2 transition-colors ${
        selected ? 'border-[#F6B12C] bg-[#F6B12C]/10' : 'border-white/15 bg-[#0D0D0D] hover:border-[#F6B12C]/60'
      }`}
    >
      {children}
      <span className="font-sign font-bold text-lg leading-none text-[#F8F5EC]">{label}</span>
      {selected && (
        <span className={`absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-[#F6B12C] text-black ${multi ? 'rounded-sm' : 'rounded-full'}`}>
          <Check size={12} strokeWidth={3} />
        </span>
      )}
    </button>
  )
}

function StepLabel({ n, title }: { n: number; title: string }) {
  return (
    <p className="mb-3 text-left font-sign font-bold text-2xl text-[#F8F5EC]">
      <span className="text-[#F6B12C]">Step {n}.</span> {title}
    </p>
  )
}

export function GrowthBuilder() {
  const [propertyId, setPropertyId] = useState('boutique')
  const [chosen, setChosen] = useState<ModuleId[]>([])
  const [intensityId, setIntensityId] = useState<string | null>(null)
  const [propertyPicked, setPropertyPicked] = useState(false)
  const [info, setInfo] = useState('Click a swatch, or a + pin on the preview, to build your system.')

  const property = PROPERTIES.find((p) => p.id === propertyId)!
  const intensity = INTENSITIES.find((i) => i.id === intensityId)
  const modules = MODULES.filter((m) => chosen.includes(m.id))
  const on: Record<ModuleId, boolean> = {
    gbp: chosen.includes('gbp'),
    seo: chosen.includes('seo'),
    funnel: chosen.includes('funnel'),
    reputation: chosen.includes('reputation'),
  }
  const ready = propertyPicked && Boolean(intensity) && modules.length > 0

  const toggle = (id: ModuleId) => {
    const m = MODULES.find((x) => x.id === id)!
    setChosen((cur) => {
      const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
      setInfo(`${next.includes(id) ? 'On' : 'Off'}: ${m.name}. ${m.info}`)
      return next
    })
  }

  const monthly = useMemo(() => {
    if (!PRICING.enabled || !propertyPicked || !intensityId) return null
    const sum = PRICING.base[propertyId] + chosen.reduce((t, id) => t + (PRICING.modules[id] ?? 0), 0)
    return sum * PRICING.intensity[intensityId]
  }, [propertyId, propertyPicked, chosen, intensityId])

  const message = ready
    ? `I built this growth plan on bookedupafrica.com.\nProperty: ${property.name}\nModules: ${modules.map((m) => m.name).join(', ')}\nPace: ${intensity!.name} (${intensity!.length})\nI would like a 15-minute walkthrough.`
    : ''

  const summary = (
    <aside className="border-2 border-[#F6B12C] bg-[#0D0D0D] p-6 text-left">
      <p className="font-sign font-bold text-[#F6B12C] text-xl">Your custom growth blueprint</p>
      <dl className="mt-4 space-y-4 font-prose text-[#EAE5DF]">
        <div>
          <dt className="text-sm text-[#EAE5DF]/60">Property</dt>
          <dd className="text-lg">{propertyPicked ? property.name : 'Not chosen yet'}</dd>
        </div>
        <div>
          <dt className="text-sm text-[#EAE5DF]/60">Modules</dt>
          <dd>
            {modules.length > 0 ? (
              <ul className="space-y-1">
                {modules.map((m) => (
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
          <dd className="text-lg">{intensity ? `${intensity.name}, ${intensity.length}` : 'Not chosen yet'}</dd>
        </div>
        <div className="border-t border-dashed border-white/25 pt-4">
          <dt className="text-sm text-[#EAE5DF]/60">Investment</dt>
          <dd>
            {ready && monthly !== null ? (
              <>
                <span className="font-sign font-bold text-4xl text-[#F6B12C]">{kes(monthly)}</span>
                <span className="mt-1 block text-sm text-[#EAE5DF]/60">a month, to start</span>
              </>
            ) : ready ? (
              <span className="text-lg">Agreed on a short call, based on exactly this scope.</span>
            ) : (
              <span className="text-lg">Appears once you have made your choices.</span>
            )}
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
        <p className="mt-6 font-prose text-sm text-[#EAE5DF]/60">Choose a property, at least one module and a pace to unlock the next step.</p>
      )}
    </aside>
  )

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-8 items-start">
      {/* Preview: stays in view while the choices scroll past */}
      <div className="sticky top-16 z-20 -mx-4 bg-black px-4 pb-2 pt-2 lg:top-28 lg:mx-0 lg:px-0">
        <Preview property={property} on={on} toggle={toggle} />
        <p className="mt-2 min-h-[3.2rem] border-l-4 border-[#F6B12C] bg-[#0D0D0D] px-3 py-2 text-left font-prose text-sm text-[#EAE5DF]/90">{info}</p>
        <p className="mt-1 text-left font-prose text-xs text-[#EAE5DF]/50">
          An illustration with an example property, not a real result or a guarantee.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <StepLabel n={1} title="Choose your base" />
          <div className="grid grid-cols-3 gap-3">
            {PROPERTIES.map((p) => (
              <Swatch
                key={p.id}
                label={p.short}
                selected={propertyPicked && propertyId === p.id}
                onClick={() => {
                  setPropertyId(p.id)
                  setPropertyPicked(true)
                  setInfo(p.info)
                }}
              >
                <span className="block h-14 w-full overflow-hidden">
                  <PropertyArt kind={p.id} />
                </span>
              </Swatch>
            ))}
          </div>
        </section>

        <section>
          <StepLabel n={2} title="Switch on your modules" />
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
            {MODULES.map((m) => {
              const Icon = m.icon
              return (
                <Swatch key={m.id} multi label={m.short} selected={on[m.id]} onClick={() => toggle(m.id)}>
                  <span className="flex h-14 w-full items-center justify-center bg-[#161616] text-[#F6B12C]">
                    <Icon size={30} strokeWidth={1.8} />
                  </span>
                </Swatch>
              )
            })}
          </div>
        </section>

        <section>
          <StepLabel n={3} title="Set your pace" />
          <div className="grid grid-cols-3 gap-3">
            {INTENSITIES.map((i) => (
              <Swatch
                key={i.id}
                label={i.short}
                selected={intensityId === i.id}
                onClick={() => {
                  setIntensityId(i.id)
                  setInfo(i.info)
                }}
              >
                <span className="flex h-14 w-full flex-col justify-center gap-1 bg-[#161616] px-2">
                  <span className="block h-2 rounded-full bg-white/15">
                    <span className="block h-2 rounded-full bg-gradient-to-r from-[#F26A0A] to-[#F6B12C]" style={{ width: `${(i.months / 6) * 100}%` }} />
                  </span>
                  <span className="text-center font-prose text-xs text-[#EAE5DF]/70">{i.length}</span>
                </span>
              </Swatch>
            ))}
          </div>
          <Timeline intensity={intensity} on={on} />
        </section>

        <section>
          <StepLabel n={4} title="Lock it in" />
          {summary}
        </section>
      </div>
    </div>
  )
}
