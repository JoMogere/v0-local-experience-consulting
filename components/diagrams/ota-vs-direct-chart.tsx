export function OTAvsDirectChart() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 my-8">
      <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-labelledby="ota-chart-title">
        <title id="ota-chart-title">Comparison of money kept on a KES 15,000 booking: OTA booking keeps KES 11,625, direct booking keeps KES 15,000</title>

        {/* Baseline */}
        <line x1="60" y1="260" x2="560" y2="260" stroke="#2A3441" strokeWidth="2" />

        {/* OTA Bar */}
        <g>
          <rect x="130" y="90" width="120" height="170" rx="4" fill="#2A3441" />
          <rect x="130" y="90" width="120" height="127.5" rx="4" fill="#F97316" fillOpacity="0.85" />
          <text x="190" y="75" textAnchor="middle" fill="#F97316" fontSize="22" fontWeight="700">KES 11,625</text>
          <text x="190" y="285" textAnchor="middle" fill="#A0AEC0" fontSize="14" fontWeight="600">OTA Booking</text>
          <text x="190" y="303" textAnchor="middle" fill="#A0AEC0" fontSize="12">15-25% commission lost</text>
        </g>

        {/* Direct Bar */}
        <g>
          <rect x="350" y="60" width="120" height="200" rx="4" fill="#D4AF37" />
          <text x="410" y="45" textAnchor="middle" fill="#D4AF37" fontSize="22" fontWeight="700">KES 15,000</text>
          <text x="410" y="285" textAnchor="middle" fill="#A0AEC0" fontSize="14" fontWeight="600">Direct Booking</text>
          <text x="410" y="303" textAnchor="middle" fill="#A0AEC0" fontSize="12">0% commission</text>
        </g>

        {/* Y axis label */}
        <text x="30" y="170" textAnchor="middle" fill="#A0AEC0" fontSize="12" transform="rotate(-90 30 170)">
          Kept on a KES 15,000 room
        </text>
      </svg>
    </div>
  )
}
