export function LocalSEOFactorsDiagram() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 my-8">
      <svg viewBox="0 0 600 300" className="w-full h-auto" role="img" aria-labelledby="local-seo-factors-title">
        <title id="local-seo-factors-title">Diagram showing Relevance, Distance, and Prominence combining into your local search ranking</title>

        {/* Connecting lines to bottom box */}
        <line x1="110" y1="140" x2="270" y2="220" stroke="#2A3441" strokeWidth="2" />
        <line x1="300" y1="140" x2="300" y2="220" stroke="#2A3441" strokeWidth="2" />
        <line x1="490" y1="140" x2="330" y2="220" stroke="#2A3441" strokeWidth="2" />

        {/* Relevance */}
        <circle cx="110" cy="80" r="55" fill="#1A2230" stroke="#F97316" strokeWidth="2" />
        <text x="110" y="75" textAnchor="middle" fill="#F97316" fontSize="16" fontWeight="700">Relevance</text>
        <text x="110" y="95" textAnchor="middle" fill="#A0AEC0" fontSize="11">Matches what</text>
        <text x="110" y="110" textAnchor="middle" fill="#A0AEC0" fontSize="11">guests search</text>

        {/* Distance */}
        <circle cx="300" cy="80" r="55" fill="#1A2230" stroke="#F97316" strokeWidth="2" />
        <text x="300" y="75" textAnchor="middle" fill="#F97316" fontSize="16" fontWeight="700">Distance</text>
        <text x="300" y="95" textAnchor="middle" fill="#A0AEC0" fontSize="11">How close you</text>
        <text x="300" y="110" textAnchor="middle" fill="#A0AEC0" fontSize="11">are to the search</text>

        {/* Prominence */}
        <circle cx="490" cy="80" r="55" fill="#1A2230" stroke="#F97316" strokeWidth="2" />
        <text x="490" y="75" textAnchor="middle" fill="#F97316" fontSize="16" fontWeight="700">Prominence</text>
        <text x="490" y="95" textAnchor="middle" fill="#A0AEC0" fontSize="11">Reviews, photos,</text>
        <text x="490" y="110" textAnchor="middle" fill="#A0AEC0" fontSize="11">authority built over time</text>

        {/* Bottom result box */}
        <rect x="150" y="225" width="300" height="55" rx="8" fill="#D4AF37" />
        <text x="300" y="258" textAnchor="middle" fill="#121822" fontSize="15" fontWeight="700">Your Local Search Ranking</text>
      </svg>
    </div>
  )
}
