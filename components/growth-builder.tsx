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

// Short codes used in the web address that carries the choices to the quote form.
const PROPERTY_CODE: Record<string, string> = { boutique: 'safari-camp', urban: 'city-hotel', group: 'villa-group' }
const MODULE_CODE: Record<ModuleId, string> = { gbp: 'map-pack', seo: 'direct-seo', funnel: 'booking-bar', reputation: 'reviews' }
const PACE_CODE: Record<string, string> = { steady: '90d', sprint: '6m', takeover: 'ongoing' }

type ModuleId = 'gbp' | 'seo' | 'funnel' | 'reputation'

const PROPERTIES = [
  {
    id: 'boutique',
    short: 'Safari camp',
    name: 'Boutique or safari lodge',
    name2: 'Your Lodge',
    type: 'safari lodge',
    query: 'tented camp near me',
    headline: 'Wake up in the bush',
    info: 'Boutique and safari lodge: high-value direct enquiries, and search that tells your story.',
  },
  {
    id: 'urban',
    short: 'City hotel',
    name: 'Urban or business hotel',
    name2: 'Your Hotel',
    type: 'hotel',
    query: 'business hotel in Nairobi',
    headline: 'Business stays, made easy',
    info: 'Urban and business hotel: winning the Google Maps results and repeat corporate bookings.',
  },
  {
    id: 'group',
    short: 'Villa group',
    name: 'Multi-property or villa group',
    name2: 'Your Villas',
    type: 'villas',
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

/* ---------- The studio stage: one fixed box, phone in the middle ---------- */

const W = 640
const H = 400

function Pin({ x, y, on, label, onClick }: { x: number; y: number; on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${on ? 'Turn off' : 'Turn on'} ${label}`}
      aria-pressed={on}
      style={{ left: x - 16, top: y - 16 }}
      className="absolute z-30 flex h-8 w-8 items-center justify-center rounded-full border border-[#F6B12C] bg-[#1A1408] text-lg font-bold text-[#F6B12C] shadow-[0_0_14px_rgba(246,177,44,0.55)]"
    >
      {!on && <span className="absolute inset-0 animate-ping rounded-full bg-[#F6B12C]/40" aria-hidden="true" />}
      <span className="relative">{on ? <Check size={16} strokeWidth={3} /> : '+'}</span>
    </button>
  )
}

// A card that is switched off stays in place but is dimmed, so before and after never show together.
const card = (on: boolean) =>
  `absolute z-20 transition-all duration-500 ease-out ${on ? 'opacity-100 scale-100' : 'opacity-25 scale-[0.97] grayscale'}`

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


function Stage({
  property,
  on,
  toggle,
  brand,
  location,
  photo,
}: {
  property: (typeof PROPERTIES)[number]
  on: Record<ModuleId, boolean>
  toggle: (id: ModuleId) => void
  brand: string
  location: string
  photo: string | null
}) {
  const name = brand.trim() || property.name2
  const place = location.trim()
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
      <div className="relative origin-top-left select-none font-sans" style={{ width: W, height: H, transform: `scale(${scale})` }}>
        {/* soft ring behind the phone */}
        <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />

        {/* Google Maps card, left */}
        <div className={`${card(on.gbp)} left-[6px] top-[118px] h-[138px] w-[232px] overflow-hidden rounded-xl border-2 border-[#3E9B63] bg-white shadow-xl`}>
          <div className="relative h-[68px] bg-[#E8EFE4]">
            <svg viewBox="0 0 232 68" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M0 50 L90 24 L170 40 L262 8" stroke="#fff" strokeWidth="9" fill="none" />
              <path d="M120 0 L135 68" stroke="#fff" strokeWidth="7" fill="none" />
              <path d="M0 14 L60 30" stroke="#D9D9D9" strokeWidth="3" fill="none" />
            </svg>
            <span className="absolute left-3 top-2 flex items-center gap-1 text-[12px] font-semibold text-[#3C4043]">
              <span className="h-3 w-3 rounded-full bg-[#EA4335]" /> Google Maps
            </span>
            <svg viewBox="0 0 24 32" className="absolute right-14 top-3 h-9 w-7" aria-hidden="true">
              <path d="M12 0C5 0 0 5 0 12c0 9 12 20 12 20s12-11 12-20C24 5 19 0 12 0z" fill="#2F9E5B" />
              <circle cx="12" cy="12" r="4.5" fill="#fff" />
            </svg>
          </div>
          <div className="px-3 pt-2">
            <div className="text-[15px] font-bold text-[#2F9E5B]">
              #1 Ranking <span className="text-[#202124]">• 4.9</span> <span className="text-[#F6B12C]">★</span>
            </div>
            <div className="text-[17px] font-semibold text-[#202124]">{name}</div>
            {place ? <div className="text-[12px] text-[#5F6368]">{place}</div> : <div className="mt-1 h-[5px] w-4/5 rounded bg-[#E4E4E4]" />}
          </div>
        </div>

        {/* Google Search snippet, right */}
        <div className={`${card(on.seo)} right-[6px] top-[118px] h-[126px] w-[232px] rounded-xl border-2 border-[#4A6FD6] bg-white px-3 py-2 shadow-xl`}>
          <div className="flex items-center gap-2 text-[12px] font-semibold text-[#3C4043]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#DADCE0] text-[12px] font-bold text-[#4285F4]">G</span>
            Google Search
          </div>
          <div className="mt-2 text-[15px] font-bold leading-snug text-[#1A0DAB]">Official Site • Best Rate Guaranteed</div>
          <div className="mt-2 h-[5px] w-full rounded bg-[#E4E4E4]" />
          <div className="mt-[6px] h-[5px] w-3/4 rounded bg-[#E4E4E4]" />
        </div>

        {/* Review bubble, bottom left */}
        <div className={`${card(on.reputation)} left-[20px] top-[290px] w-[200px] rounded-xl border-2 border-[#F6B12C] bg-[#FFF8E6] px-3 py-2 shadow-xl`}>
          <div className="text-[13px] text-[#202124]">
            <span className="text-[#F6B12C]">★★★★★</span> &ldquo;Booked direct, zero hassle&rdquo;
          </div>
          <div className="mt-1 rounded-md bg-[#2F9E5B] px-2 py-[3px] text-[11px] text-white">Thanks for staying with us! Reply sent automatically</div>
        </div>

        {/* Phone */}
        <div className="absolute left-1/2 top-[10px] z-10 h-[380px] w-[196px] -translate-x-1/2 rounded-[30px] border-[6px] border-[#1F1F1F] bg-black shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
          <div className="relative h-full w-full overflow-hidden rounded-[24px]">
            {PROPERTIES.map((p) => (
              <div key={p.id} className={`absolute inset-0 transition-opacity duration-700 ${p.id === property.id && !photo ? 'opacity-100' : 'opacity-0'}`}>
                <PropertyArt kind={p.id} />
              </div>
            ))}
            {photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photo} alt="Your property" className="absolute inset-0 h-full w-full object-cover" />
            )}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-3 pb-6 pt-3 text-[12px] font-bold text-white">
              <span className="truncate">{name}</span>
              <span>☰</span>
            </div>
            <div className="absolute left-1/2 top-[6px] z-10 h-[14px] w-[56px] -translate-x-1/2 rounded-full bg-black" />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-3 pb-[64px] pt-12 text-[14px] font-bold text-white">
              {property.headline}
            </div>
            <div
              className={`absolute inset-x-2 bottom-3 z-10 rounded-full bg-gradient-to-r from-[#D4A93D] to-[#F6B12C] px-2 py-[9px] text-center text-[11px] font-extrabold text-black shadow-lg transition-all duration-500 ease-out ${
                on.funnel ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Check Availability • Save 15% Direct
            </div>
          </div>
        </div>

        {/* Pins: tap one on the picture to switch that module */}
        <Pin x={122} y={256} on={on.gbp} label="Map Pack" onClick={() => toggle('gbp')} />
        <Pin x={610} y={122} on={on.seo} label="Direct booking SEO" onClick={() => toggle('seo')} />
        <Pin x={218} y={292} on={on.reputation} label="Guest reviews" onClick={() => toggle('reputation')} />
        <Pin x={W / 2 + 70} y={318} on={on.funnel} label="the booking bar" onClick={() => toggle('funnel')} />
      </div>
    </div>
  )
}

/* ---------- Three labelled rows of choices ---------- */

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
        className={`relative flex h-12 w-12 items-center justify-center overflow-hidden border-2 transition-colors ${square ? 'rounded-md' : 'rounded-full'} ${
          selected ? 'border-[#F6B12C] bg-[#F6B12C]/15' : 'border-white/25 bg-[#161616]'
        }`}
      >
        {children}
      </span>
      <span className="font-sign text-sm font-semibold leading-none">{label}</span>
    </button>
  )
}

function Group({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <div className="text-left">
      <p className="mb-2 font-sign text-lg font-bold text-[#F8F5EC]">
        {n}. {title}
      </p>
      <div className="flex gap-3">{children}</div>
    </div>
  )
}

export function GrowthBuilder() {
  // Starts already built, like a shoe you can start changing straight away.
  const [propertyId, setPropertyId] = useState('boutique')
  const [chosen, setChosen] = useState<ModuleId[]>(['gbp'])
  const [intensityId, setIntensityId] = useState('sprint')
  const [open, setOpen] = useState(false)
  const [details, setDetails] = useState({ name: '', contact: '', property: '', location: '', rooms: '', website: '' })
  const [error, setError] = useState('')
  const [photo, setPhoto] = useState<string | null>(null)
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

  // The photo stays in the visitor's browser. It is never uploaded anywhere.
  const choosePhoto = (file: File | undefined) => {
    setPhoto((old) => {
      if (old) URL.revokeObjectURL(old)
      return file ? URL.createObjectURL(file) : null
    })
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

  const scopeHref = `/book-demo?property=${PROPERTY_CODE[propertyId]}&modules=${chosen.map((m) => MODULE_CODE[m]).join(',')}&pace=${PACE_CODE[intensityId]}#request`

  const message = [
    '*Custom growth plan* (built on bookedupafrica.com)',
    '',
    `*Name:* ${details.name || 'not given'}`,
    `*Property:* ${details.property || 'not given'} (${details.location || 'location not given'})`,
    `*Rooms:* ${details.rooms || 'not given'}`,
    `*Website:* ${details.website || 'none yet'}`,
    `*Phone or email:* ${details.contact || 'this WhatsApp number'}`,
    '',
    `*Property type:* ${property.name}`,
    '',
    '*Modules:*',
    ...(modules.length ? modules.map((m) => `- ${m.name}`) : ['- none chosen yet']),
    '',
    `*Pace:* ${intensity.name} (${intensity.length})`,
    '',
    'Please share a time for a 15-minute walkthrough.',
  ].join('\n')

  const send = (via: 'whatsapp' | 'email') => {
    if (!details.name.trim() || !details.property.trim() || !details.location.trim()) {
      setError('Please add your name, property name and location.')
      return
    }
    setError('')
    const url =
      via === 'whatsapp'
        ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
        : `mailto:mogerejulius41@gmail.com?subject=${encodeURIComponent('Custom growth plan request')}&body=${encodeURIComponent(message)}`
    window.open(url, via === 'whatsapp' ? '_blank' : '_self')
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="sticky top-16 z-20 -mx-4 bg-black px-4 pb-1 pt-2 md:static md:mx-0 md:px-0">
        <Stage property={property} on={on} toggle={toggle} brand={details.property} location={details.location} photo={photo} />
        <p className="mt-1 min-h-[2.6rem] text-center font-prose text-sm text-[#EAE5DF]/80">{info}</p>
      </div>

      <div className="mt-2 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <input
          value={details.property}
          onChange={(e) => setDetails((d) => ({ ...d, property: e.target.value }))}
          placeholder="Your property name"
          aria-label="Your property name"
          className="w-full border border-white/25 bg-black px-4 py-3 text-[#F9F6F0] placeholder:text-[#9A958B] focus:border-[#F6B12C] focus:outline-none"
        />
        <input
          value={details.location}
          onChange={(e) => setDetails((d) => ({ ...d, location: e.target.value }))}
          placeholder="Location (e.g. Naivasha)"
          aria-label="Location"
          className="w-full border border-white/25 bg-black px-4 py-3 text-[#F9F6F0] placeholder:text-[#9A958B] focus:border-[#F6B12C] focus:outline-none"
        />
        <label className="flex cursor-pointer items-center justify-center border-2 border-[#F6B12C] px-4 py-3 font-sign text-lg font-bold text-[#F6B12C] hover:bg-[#F6B12C]/10">
          {photo ? 'Change photo' : 'Add your photo'}
          <input type="file" accept="image/*" className="sr-only" onChange={(e) => choosePhoto(e.target.files?.[0])} />
        </label>
      </div>
      <p className="mt-1 text-center font-prose text-xs text-[#EAE5DF]/60">
        See the preview with your own property. Your photo stays on your device and is not uploaded.
        {photo && (
          <button type="button" onClick={() => choosePhoto(undefined)} className="ml-2 text-[#F6B12C] underline">
            Remove photo
          </button>
        )}
      </p>

      <div className="mt-3 grid gap-x-8 gap-y-6 border-t border-white/15 pt-6 sm:grid-cols-[auto_auto_auto] sm:justify-center">
        <Group n={1} title="Property type">
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
              <span className="block h-full w-full scale-[1.6]"><PropertyArt kind={p.id} /></span>
            </Dot>
          ))}
        </Group>

        <Group n={2} title="Modules">
          {MODULES.map((m) => {
            const Icon = m.icon
            return (
              <Dot key={m.id} label={m.short} selected={on[m.id]} onClick={() => toggle(m.id)}>
                <Icon size={22} strokeWidth={1.9} />
              </Dot>
            )
          })}
        </Group>

        <Group n={3} title="Pace">
          {INTENSITIES.map((i) => (
            <Dot
              key={i.id}
              square
              label={i.id === 'steady' ? '90 days' : i.id === 'sprint' ? '6 months' : 'Ongoing'}
              selected={intensityId === i.id}
              onClick={() => {
                setIntensityId(i.id)
                setInfo(i.info)
              }}
            >
              <span className="font-sign text-base font-bold">{i.id === 'steady' ? '90d' : i.id === 'sprint' ? '6m' : '∞'}</span>
            </Dot>
          ))}
        </Group>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/15 pt-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-prose text-[#EAE5DF]">
          <span className="font-sign text-xl font-bold text-[#F8F5EC]">{property.short}</span> · {modules.length}{' '}
          {modules.length === 1 ? 'module' : 'modules'} · {intensity.name}
          <span className="block text-sm text-[#EAE5DF]/70">
            {monthly !== null ? `${kes(monthly)} a month, to start` : 'Price agreed on a short call, for exactly this scope'}
          </span>
        </p>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="bg-gradient-to-r from-[#D4A93D] to-[#F6B12C] px-8 py-3 font-sign text-xl font-bold text-black transition-opacity hover:opacity-90"
          >
            Lock in this scope
          </button>
          <a href={scopeHref} className="font-prose text-sm text-[#F6B12C] underline underline-offset-4">
            or use the full quote form
          </a>
        </div>
      </div>

      {open && (
        <div className="mt-4 border-2 border-[#F6B12C] bg-[#0D0D0D] p-5 text-left">
          <p className="font-sign text-2xl font-bold text-[#F8F5EC]">Tell us about your property</p>
          <p className="font-prose text-sm text-[#EAE5DF]/70">So we know who you are and what you need before the call.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {(
              [
                ['name', 'Your name *'],
                ['contact', 'Phone or email'],
                ['property', 'Property name *'],
                ['location', 'Location (e.g. Naivasha) *'],
                ['rooms', 'Number of rooms'],
                ['website', 'Website (if any)'],
              ] as const
            ).map(([k, label]) => (
              <input
                key={k}
                value={details[k]}
                onChange={(e) => setDetails((d) => ({ ...d, [k]: e.target.value }))}
                placeholder={label}
                aria-label={label}
                inputMode={k === 'rooms' ? 'numeric' : undefined}
                className="w-full border border-white/25 bg-black px-4 py-3 text-[#F9F6F0] placeholder:text-[#9A958B] focus:border-[#F6B12C] focus:outline-none"
              />
            ))}
          </div>
          {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => send('whatsapp')}
              className="bg-gradient-to-r from-[#D4A93D] to-[#F6B12C] px-6 py-3 font-sign text-xl font-bold text-black transition-opacity hover:opacity-90"
            >
              Send on WhatsApp
            </button>
            <button
              type="button"
              onClick={() => send('email')}
              className="border-2 border-[#F6B12C] px-6 py-3 font-sign text-xl font-bold text-[#F6B12C] transition-colors hover:bg-[#F6B12C]/10"
            >
              Send by email
            </button>
          </div>
        </div>
      )}
      <p className="mt-3 text-center font-prose text-xs text-[#EAE5DF]/50">
        An illustration with example properties, not a real result or a guarantee.
      </p>
    </div>
  )
}
