const STEPS = [
  {
    number: '01',
    title: 'Audit',
    description: "We start with a real audit — your Google Business Profile category, NAP consistency, booking flow, and where guests are actually dropping off. No template checklist.",
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'A plan built around your specific property and market — which of the three pillars needs attention first, and in what order.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: "We do the work — category fixes, channel manager setup, content, booking flow changes — not just hand you a document and disappear.",
  },
  {
    number: '04',
    title: 'Weekly Check-Ins',
    description: 'Ongoing tracking and adjustment based on what\'s actually moving, with direct access when something urgent comes up — not a monthly report you read once.',
  },
]

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-navy-deep" id="how-we-work">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <p className="text-orange-500 text-sm uppercase tracking-[2px] mb-4">How We Work</p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-12 tracking-[-0.02em]">
          What Actually Happens After You Reach Out
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="border-t-2 border-gold pt-6">
              <div className="text-gold text-3xl font-bold mb-3">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-gray text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
