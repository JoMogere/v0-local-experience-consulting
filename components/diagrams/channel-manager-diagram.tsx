export function ChannelManagerDiagram() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 my-8">
      <svg viewBox="0 0 600 320" className="w-full h-auto" role="img" aria-labelledby="cm-diagram-title">
        <title id="cm-diagram-title">Diagram showing Booking.com, Expedia, and your website all connected through a channel manager to one shared calendar, preventing double bookings</title>

        {/* Connecting lines - drawn first so boxes sit on top */}
        <line x1="110" y1="70" x2="290" y2="150" stroke="#2A3441" strokeWidth="2" />
        <line x1="110" y1="140" x2="290" y2="165" stroke="#2A3441" strokeWidth="2" />
        <line x1="490" y1="100" x2="310" y2="160" stroke="#2A3441" strokeWidth="2" />
        <line x1="300" y1="195" x2="300" y2="250" stroke="#2A3441" strokeWidth="2" />

        {/* OTA boxes (left) */}
        <rect x="20" y="45" width="180" height="50" rx="6" fill="#1A2230" stroke="#2A3441" strokeWidth="1.5" />
        <text x="110" y="75" textAnchor="middle" fill="#A0AEC0" fontSize="15" fontWeight="600">Booking.com</text>

        <rect x="20" y="115" width="180" height="50" rx="6" fill="#1A2230" stroke="#2A3441" strokeWidth="1.5" />
        <text x="110" y="145" textAnchor="middle" fill="#A0AEC0" fontSize="15" fontWeight="600">Expedia</text>

        {/* Direct booking box (right) */}
        <rect x="400" y="75" width="180" height="50" rx="6" fill="#1A2230" stroke="#D4AF37" strokeWidth="1.5" />
        <text x="490" y="105" textAnchor="middle" fill="#D4AF37" fontSize="15" fontWeight="700">Your Website</text>

        {/* Channel Manager center */}
        <rect x="220" y="150" width="160" height="55" rx="8" fill="#F97316" />
        <text x="300" y="182" textAnchor="middle" fill="#121822" fontSize="15" fontWeight="700">Channel Manager</text>

        {/* Shared calendar bottom */}
        <rect x="150" y="250" width="300" height="55" rx="8" fill="#2A3441" stroke="#A0AEC0" strokeWidth="1" />
        <text x="300" y="273" textAnchor="middle" fill="white" fontSize="14" fontWeight="700">One Shared Calendar</text>
        <text x="300" y="293" textAnchor="middle" fill="#A0AEC0" fontSize="12">No double bookings</text>
      </svg>
    </div>
  )
}
