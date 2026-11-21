import Link from 'next/link'

// A short nudge towards the growth builder, placed where a hotel owner is weighing options.
export function BuilderCallout({
  title = 'Only need one or two of these fixes?',
  text = 'Build a custom scope in 30 seconds.',
  button = 'Build your system',
}: {
  title?: string
  text?: string
  button?: string
}) {
  return (
    <aside className="mx-auto my-12 max-w-3xl px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 border-2 border-dashed border-[#F6B12C]/70 bg-[#0D0D0D] p-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-sign text-2xl font-bold text-[#F8F5EC] md:text-3xl">{title}</p>
          <p className="font-prose text-[#EAE5DF]/85">{text}</p>
        </div>
        <Link
          href="/build-your-growth-system"
          className="shrink-0 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] px-6 py-3 font-sign text-xl font-bold text-black transition-opacity hover:opacity-90"
        >
          {button} →
        </Link>
      </div>
    </aside>
  )
}
