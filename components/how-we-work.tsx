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

// The steps really are a sequence, so they are drawn as a route: a winding road with a roadside sign at each stop.
// Small screens show the signs stacked down a straight road; wide screens show the winding route.
const STOP_X = ['12.5%', '37.5%', '62.5%', '87.5%']
const BOARD_TONES = ['bg-[#F6B12C]', 'bg-[#F8F5EC]', 'bg-[#F26A0A]', 'bg-[#F6B12C]']

function Marker({ n }: { n: number }) {
  return (
    <span
      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black text-[#F6B12C] font-sign font-bold text-3xl ring-4 ring-[#F6B12C]"
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

// The sign itself: a board with a black inset border, like the plates on a road.
function Board({ index, title, description }: { index: number; title: string; description: string }) {
  return (
    <div
      className={`${BOARD_TONES[index]} text-black rounded-md px-5 py-4 shadow-[inset_0_0_0_4px_#000000,0_8px_20px_rgba(0,0,0,0.5)]`}
    >
      <h3 className="font-sign font-bold text-black text-3xl leading-none">{title}</h3>
      <p className="font-prose text-black text-[16px] mt-2 leading-snug">{description}</p>
    </div>
  )
}

function Post({ className = '' }: { className?: string }) {
  return <span className={`block w-2 bg-[#5A2308] ${className}`} aria-hidden="true" />
}

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-[#121212] text-center" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          What happens after you reach out
        </h2>

        {/* Phones: signs stacked along a straight road */}
        <ol className="md:hidden max-w-[360px] mx-auto mt-12">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <div className="road-dash h-10 mx-auto" aria-hidden="true" />
              <Marker n={i + 1} />
              <Post className="h-5 mx-auto" />
              <Board index={i} title={step.title} description={step.description} />
            </li>
          ))}
        </ol>

        {/* Wide screens: a winding route with a roadside sign at each stop */}
        <div className="hidden md:block relative h-[740px] mt-14">
          <svg
            className="absolute inset-x-0 top-[280px] w-full h-[180px] overflow-visible"
            viewBox="0 0 1000 180"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 0 90 C 60 90 70 0 125 0 S 310 180 375 180 S 560 0 625 0 S 810 180 875 180 S 960 90 1000 90"
              fill="none"
              stroke="#262626"
              strokeWidth="34"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 0 90 C 60 90 70 0 125 0 S 310 180 375 180 S 560 0 625 0 S 810 180 875 180 S 960 90 1000 90"
              fill="none"
              stroke="#F6B12C"
              strokeWidth="4"
              strokeDasharray="16 14"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol>
            {STEPS.map((step, i) => {
              const upper = i % 2 === 0
              return (
                <li
                  key={step.title}
                  className="absolute top-0 h-full w-[23%] -translate-x-1/2"
                  style={{ left: STOP_X[i] }}
                >
                  {upper ? (
                    <>
                      <div className="absolute inset-x-0 top-0 h-[236px] flex flex-col justify-end">
                        <Board index={i} title={step.title} description={step.description} />
                      </div>
                      <Post className="absolute left-1/2 -translate-x-1/2 top-[236px] h-[16px]" />
                      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 252 }}>
                        <Marker n={i + 1} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 432 }}>
                        <Marker n={i + 1} />
                      </div>
                      <Post className="absolute left-1/2 -translate-x-1/2 top-[488px] h-[16px]" />
                      <div className="absolute inset-x-0 top-[504px]">
                        <Board index={i} title={step.title} description={step.description} />
                      </div>
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
