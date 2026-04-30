import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 text-white no-underline">
      <div className="w-[60px] h-[75px] relative">
        <svg viewBox="0 0 100 120" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1D592" />
              <stop offset="100%" stopColor="#B8962D" />
            </linearGradient>
            <clipPath id="pinClip">
              <path d="M50 115C50 115 90 85 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 85 50 115 50 115Z" />
            </clipPath>
          </defs>
          <path
            d="M50 115C50 115 90 85 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 85 50 115 50 115Z"
            stroke="url(#goldGrad)"
            strokeWidth="6"
          />
          <g clipPath="url(#pinClip)">
            <rect x="0" y="35" width="100" height="40" fill="#E8B84B" fillOpacity="0.3" />
            <path d="M25 60 Q50 40 75 60" stroke="#D4AF37" strokeWidth="2" />
            <path d="M40 75 L60 75 M35 85 L65 85" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 55 L50 45 M35 45 Q50 35 65 45" stroke="#D4AF37" strokeWidth="3" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-2xl font-bold leading-none tracking-[1px] uppercase">
          LOCAL EXPERIENCE
        </div>
        <div className="flex items-center text-[11px] font-bold text-gold tracking-[4.5px] uppercase mt-2 pt-2 relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent">
          CONSULTING
        </div>
      </div>
    </Link>
  )
}
