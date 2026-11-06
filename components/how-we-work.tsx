import { Search, Compass, Wrench, CalendarCheck } from 'lucide-react'

const STEPS = [
  {
    title: 'Audit',
    description: "We start with a real audit: your Google Business Profile category, NAP consistency, booking flow, and where guests are actually dropping off. No template checklist.",
  },
  {
    title: 'Strategy',
    description: 'A plan built around your specific property and market: which of the three areas needs attention first, and in what order.',
  },
  {
    title: 'Implementation',
    description: "We do the work: category fixes, channel manager setup, content, booking flow changes. We don't hand you a document and disappear.",
  },
  {
    title: 'Weekly check-ins',
    description: "Ongoing tracking and adjustment based on what's actually moving, with direct access when something urgent comes up. Not a monthly report you read once.",
  },
]

// The steps really are a sequence, so they are drawn as a route: a wide winding road with a location pin
// at each stop and a card for each step. Phones get the same picture and swipe sideways.
const ICONS = [Search, Compass, Wrench, CalendarCheck]
const PIN_COLORS = ['#F26A0A', '#F6B12C', '#F8F5EC', '#BA3206']
const PIN_TEXT = ['#000000', '#000000', '#000000', '#F8F5EC']
const STOP_X = ['12.5%', '37.5%', '62.5%', '87.5%']
// Height of each stop on the road, in px from the top of the road drawing.
const STOP_Y = [40, 170, 40, 170]
const ROAD_TOP = 70

function Pin({ i }: { i: number }) {
  const Icon = ICONS[i]
  return (
    <span className="relative inline-block w-12 h-12" aria-hidden="true">
      <span
        className="absolute inset-0 -rotate-45 rounded-[50%_50%_50%_0] shadow-[0_6px_14px_rgba(0,0,0,0.6)] ring-2 ring-black"
        style={{ background: PIN_COLORS[i] }}
      />
      <span className="absolute inset-0 flex items-center justify-center" style={{ color: PIN_TEXT[i] }}>
        <Icon className="w-5 h-5" strokeWidth={2.4} />
      </span>
    </span>
  )
}

function StepCard({ i, step }: { i: number; step: { title: string; description: string } }) {
  return (
    <div className="relative bg-[#F8F5EC] text-black rounded-md px-5 pt-9 pb-5 shadow-[0_8px_20px_rgba(0,0,0,0.5)] h-full">
      <span
        className="absolute -top-5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full font-sign font-bold text-2xl ring-4 ring-[#121212]"
        style={{ background: PIN_COLORS[i] === '#F8F5EC' ? '#F6B12C' : PIN_COLORS[i], color: PIN_TEXT[i] === '#F8F5EC' ? '#F8F5EC' : '#000000' }}
        aria-hidden="true"
      >
        {i + 1}
      </span>
      <h3 className="font-sign font-bold text-black text-3xl leading-none">{step.title}</h3>
      <p className="font-prose text-black/90 text-[16px] mt-2 leading-snug">{step.description}</p>
    </div>
  )
}

const ROAD_PATH =
  'M 0 105 C 60 105 70 40 125 40 S 310 170 375 170 S 560 40 625 40 S 810 170 875 170 S 960 105 1000 105'

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-[#121212] text-center" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          What happens after you reach out
        </h2>

        {/* The same route on every screen. On a phone it keeps its shape and swipes sideways. */}
        <p className="md:hidden font-prose text-[#EAE5DF]/70 mt-4">Swipe sideways to follow the road</p>
        <div className="mt-8 md:mt-12 overflow-x-auto -mx-6 px-6 pb-4 snap-x">
          <div className="min-w-[980px]">
          <div className="relative h-[310px]" aria-hidden="true">
            <svg
              className="absolute inset-x-0 w-full h-[210px] overflow-visible"
              style={{ top: ROAD_TOP }}
              viewBox="0 0 1000 210"
              preserveAspectRatio="none"
            >
              <path d={ROAD_PATH} fill="none" stroke="#F8F5EC" strokeWidth="76" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.9" />
              <path d={ROAD_PATH} fill="none" stroke="#1A1A1A" strokeWidth="68" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              <path d={ROAD_PATH} fill="none" stroke="#F8F5EC" strokeWidth="3" strokeDasharray="18 14" vectorEffect="non-scaling-stroke" />
            </svg>
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="absolute -translate-x-1/2"
                style={{ left: STOP_X[i], top: ROAD_TOP + STOP_Y[i] - 58 }}
              >
                <Pin i={i} />
              </div>
            ))}
          </div>

          <ol className="grid grid-cols-4 gap-x-5 -mt-2">
            {STEPS.map((step, i) => (
              <li key={step.title} className="pt-5">
                <StepCard i={i} step={step} />
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
