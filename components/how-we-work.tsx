'use client'

import { useState } from 'react'
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
// at each stop and a card for each step. Phones get the same picture, shrunk to fit, with the text of a step shown when it is tapped.
const ICONS = [Search, Compass, Wrench, CalendarCheck]
const PIN_COLORS = ['#F26A0A', '#F6B12C', '#F8F5EC', '#BA3206']
const PIN_TEXT = ['#000000', '#000000', '#000000', '#F8F5EC']
const STOP_X = ['12.5%', '37.5%', '62.5%', '87.5%']
// Height of each stop on the road, in px from the top of the road drawing.
const STOP_Y = [40, 170, 40, 170]
const ROAD_TOP = 70

function Pin({ i, small = false }: { i: number; small?: boolean }) {
  const Icon = ICONS[i]
  return (
    <span className={`relative inline-block ${small ? 'w-9 h-9' : 'w-12 h-12'}`} aria-hidden="true">
      <span
        className="absolute inset-0 -rotate-45 rounded-[50%_50%_50%_0] shadow-[0_6px_14px_rgba(0,0,0,0.6)] ring-2 ring-black"
        style={{ background: PIN_COLORS[i] }}
      />
      <span className="absolute inset-0 flex items-center justify-center" style={{ color: PIN_TEXT[i] }}>
        <Icon className={small ? "w-4 h-4" : "w-5 h-5"} strokeWidth={2.4} />
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

const MOBILE_ROAD =
  'M 0 65 C 60 65 70 25 125 25 S 310 105 375 105 S 560 25 625 25 S 810 105 875 105 S 960 65 1000 65'
const MOBILE_Y = [25, 105, 25, 105]

const ROAD_PATH =
  'M 0 105 C 60 105 70 40 125 40 S 310 170 375 170 S 560 40 625 40 S 810 170 875 170 S 960 105 1000 105'

export function HowWeWork() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-16 md:py-24 bg-[#121212] text-center" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          What happens after you reach out
        </h2>

        {/* Phones: the whole route fits the screen. Tap a step to read it. */}
        <div className="md:hidden mt-8">
          <div className="relative h-[200px]" aria-hidden="true">
            <svg className="absolute inset-x-0 w-full h-[130px] overflow-visible" style={{ top: 56 }} viewBox="0 0 1000 130" preserveAspectRatio="none">
              <path d={MOBILE_ROAD} fill="none" stroke="#F8F5EC" strokeWidth="46" strokeLinecap="round" vectorEffect="non-scaling-stroke" opacity="0.9" />
              <path d={MOBILE_ROAD} fill="none" stroke="#1A1A1A" strokeWidth="40" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              <path d={MOBILE_ROAD} fill="none" stroke="#F8F5EC" strokeWidth="2" strokeDasharray="10 8" vectorEffect="non-scaling-stroke" />
            </svg>
            {STEPS.map((step, i) => (
              <div key={step.title} className="absolute -translate-x-1/2" style={{ left: STOP_X[i], top: 56 + MOBILE_Y[i] - 44 }}>
                <Pin i={i} small />
              </div>
            ))}
          </div>

          <ol className="grid grid-cols-4 gap-1.5 -mt-3">
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`w-full h-full rounded-md bg-[#F8F5EC] text-black px-1 pt-5 pb-2 relative shadow-[0_6px_14px_rgba(0,0,0,0.5)] ${active === i ? 'outline outline-[3px] outline-[#F6B12C]' : ''}`}
                >
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-7 h-7 rounded-full font-sign font-bold text-lg ring-2 ring-[#121212]"
                    style={{ background: PIN_COLORS[i] === '#F8F5EC' ? '#F6B12C' : PIN_COLORS[i], color: PIN_TEXT[i] === '#F8F5EC' ? '#F8F5EC' : '#000000' }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="block font-sign font-bold text-[17px] leading-[1.05] text-black text-center">{step.title}</span>
                </button>
              </li>
            ))}
          </ol>

          <div className="mt-5 bg-[#F8F5EC] text-black rounded-md px-5 py-4 text-center shadow-[0_8px_20px_rgba(0,0,0,0.5)]" aria-live="polite">
            <p className="font-sign font-bold text-2xl leading-none !text-center">
              {active + 1}. {STEPS[active].title}
            </p>
            <p className="font-prose text-black/90 text-[16px] mt-2 leading-snug">{STEPS[active].description}</p>
          </div>
          <p className="font-prose text-[#EAE5DF]/60 text-sm mt-3">Tap a step to read it.</p>
        </div>

        {/* Wide screens: a wide winding road with a pin at each stop, and the steps in a row below */}
        <div className="hidden md:block mt-12">
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
              <div key={step.title} className="absolute -translate-x-1/2" style={{ left: STOP_X[i], top: ROAD_TOP + STOP_Y[i] - 58 }}>
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
    </section>
  )
}
