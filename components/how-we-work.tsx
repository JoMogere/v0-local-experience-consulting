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

// The steps really are a sequence, so they are drawn as a route: a winding road with a stop for each step.
// Small screens show the stops stacked down a straight road; wide screens show the winding route.
const STOP_X = ['12.5%', '37.5%', '62.5%', '87.5%']

function Marker({ n }: { n: number }) {
  return (
    <span
      className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#F26A0A] to-[#F6B12C] text-black font-sign font-bold text-3xl ring-4 ring-black"
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-[#121212] text-center" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F8F5EC] text-4xl md:text-6xl leading-[0.98] text-balance">
          What happens after you reach out
        </h2>

        {/* Phones: stops stacked along a straight road */}
        <ol className="md:hidden max-w-[720px] mx-auto mt-12">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <div className="road-dash h-12 mx-auto" aria-hidden="true" />
              <Marker n={i + 1} />
              <h3 className="font-sign font-bold text-[#F8F5EC] text-3xl mt-4">{step.title}</h3>
              <p className="font-prose text-lg text-[#EAE5DF]/90 mt-2 mx-auto max-w-[48ch] leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Wide screens: a winding route with a stop for each step */}
        <div className="hidden md:block relative h-[660px] mt-14">
          <svg
            className="absolute inset-x-0 top-[240px] w-full h-[180px] overflow-visible"
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
                  className="absolute top-0 h-full w-[22%] -translate-x-1/2"
                  style={{ left: STOP_X[i] }}
                >
                  <div className="absolute left-1/2 -translate-x-1/2" style={{ top: upper ? 212 : 392 }}>
                    <Marker n={i + 1} />
                  </div>
                  <div
                    className={upper ? 'absolute inset-x-0 top-0 h-[200px] flex flex-col justify-end' : 'absolute inset-x-0 top-[462px]'}
                  >
                    <h3 className="font-sign font-bold text-[#F8F5EC] text-3xl">{step.title}</h3>
                    <p className="font-prose text-[17px] text-[#EAE5DF]/90 mt-1 leading-snug">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
