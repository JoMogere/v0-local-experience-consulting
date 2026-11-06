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

// The steps really are a sequence, so they are marked like distance posts along the road.
export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-[#241A12] text-center" id="how-we-work">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="font-sign font-bold text-[#F4EFE6] text-4xl md:text-6xl leading-[0.98] text-balance">
          What happens after you reach out
        </h2>

        <ol className="mt-12 md:mt-16">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <div className="road-dash h-12 md:h-16 mx-auto" aria-hidden="true" />
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F4EFE6] text-[#15110E] font-sign font-bold text-3xl"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="font-sign font-bold text-[#F4EFE6] text-3xl md:text-4xl mt-4">{step.title}</h3>
              <p className="font-prose text-lg text-[#EAE5DF]/90 mt-2 mx-auto max-w-[48ch] leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
