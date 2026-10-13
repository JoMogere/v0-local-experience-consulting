import data from '@/lib/world-dots.json'

const CELL = 6
const W = data.cols * CELL
const H = data.rows * CELL

// [lon, lat] -> position on the dotted grid (matches scripts/gen-world-dots.mjs)
const pos = (lon: number, lat: number) => ({
  x: ((lon + 170) / data.step) * CELL + CELL / 2,
  y: ((80 - lat) / data.step) * CELL + CELL / 2,
})

// Add clients here as you win them, e.g. { name: 'Naivasha', ...pos(36.43, -0.72), primary: true }
const MARKERS: { name: string; x: number; y: number; primary: boolean }[] = []

export function WorldMap() {
  return (
    <figure className="rounded-sm border border-border-flat bg-navy-deep p-4 md:p-6">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Dotted world map"
        className="w-full h-auto"
      >
        <g fill="currentColor" className="text-white/15">
          {data.dots.map(([c, r]) => (
            <circle key={`${c}-${r}`} cx={c * CELL + CELL / 2} cy={r * CELL + CELL / 2} r={1.9} />
          ))}
        </g>
        {MARKERS.map((m) => (
          <g key={m.name}>
            <circle cx={m.x} cy={m.y} r={9} fill={m.primary ? '#1d4ed8' : '#60a5fa'} opacity={0.35}>
              <animate attributeName="r" values="7;20;7" dur="2.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0;0.45" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle cx={m.x} cy={m.y} r={m.primary ? 8 : 6} fill={m.primary ? '#1d4ed8' : '#60a5fa'} />
            <circle cx={m.x} cy={m.y} r={2} fill="#fff" />
          </g>
        ))}
      </svg>
    </figure>
  )
}
