import Link from 'next/link'

const POINT = 28
const SHAPES = {
  right: `polygon(0 0, calc(100% - ${POINT}px) 0, 100% 50%, calc(100% - ${POINT}px) 100%, 0 100%)`,
  left: `polygon(${POINT}px 0, 100% 0, 100% 100%, ${POINT}px 100%, 0 50%)`,
}
const TONES = {
  gold: 'bg-[#E6AD45]',
  paper: 'bg-[#F4EFE6]',
  clay: 'bg-[#D46A43]',
}

// A roadside direction plate: a link shaped like a sign with a pointed end.
export function SignPlate({
  href,
  direction,
  tone,
  size = 'lg',
  tilt = 0,
  children,
}: {
  href: string
  direction: 'left' | 'right'
  tone: keyof typeof TONES
  size?: 'lg' | 'md'
  tilt?: number
  children: React.ReactNode
}) {
  const pad =
    direction === 'right'
      ? size === 'lg' ? 'pl-6 pr-12 md:pl-9 md:pr-16' : 'pl-5 pr-10 md:pl-7 md:pr-12'
      : size === 'lg' ? 'pl-12 pr-6 md:pl-16 md:pr-9' : 'pl-10 pr-5 md:pl-12 md:pr-7'
  const text = size === 'lg' ? 'text-3xl md:text-5xl py-3 md:py-4' : 'text-2xl md:text-3xl py-2 md:py-3'
  return (
    <Link
      href={href}
      className={`font-sign font-bold leading-none text-[#15110E] inline-block hover:brightness-110 focus-visible:underline decoration-4 underline-offset-4 transition ${TONES[tone]} ${pad} ${text}`}
      style={{ clipPath: SHAPES[direction], transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      {children}
    </Link>
  )
}
