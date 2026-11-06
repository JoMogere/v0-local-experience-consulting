// A picture of what a guest sees when they compare prices: your own site next to the booking sites.
// All amounts are examples in KES.
const PINS = [
  { price: '9,300', cls: 'left-[6%] top-[22%]' },
  { price: '11,100', cls: 'left-[16%] top-[62%]' },
  { price: '12,500', cls: 'left-[26%] top-[38%]' },
  { price: '14,800', cls: 'right-[22%] top-[34%]' },
  { price: '16,000', cls: 'right-[6%] top-[64%]' },
]

const OTHERS = [
  { name: 'Booking site', price: '12,500' },
  { name: 'Booking site', price: '13,000' },
  { name: 'Another booking site', price: '14,000' },
]

export function PriceComparison() {
  return (
    <figure className="max-w-[1000px] mx-auto">
      <div className="relative rounded-sm bg-[#121212] border border-[#2A2A2A] px-4 py-10 md:py-14 overflow-hidden">
        {/* Nearby hotels, shown as price pins on a dashed road */}
        <div className="absolute inset-x-0 top-1/2 border-t-[3px] border-dashed border-[#F6B12C]/20" aria-hidden="true" />
        {PINS.map((p) => (
          <span
            key={p.price}
            aria-hidden="true"
            className={`hidden md:block absolute ${p.cls} px-3 py-1.5 bg-[#3A1706] text-[#F8F5EC] font-sign font-bold text-xl rounded-sm`}
          >
            KES {p.price}
          </span>
        ))}

        <div className="relative max-w-[460px] mx-auto bg-[#F8F5EC] text-[#000000] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left">
          <div className="px-6 pt-5 pb-4 border-b border-[#000000]/15">
            <p className="font-sign font-bold text-3xl leading-none !text-left">Your hotel</p>
            <p className="text-[#000000]/70 mt-1 !text-left" aria-label="Rated 4.7 out of 5">
              4.7 <span className="text-[#F6B12C]" aria-hidden="true">★★★★★</span>
            </p>
          </div>

          <div className="px-6 py-4 flex items-center justify-between gap-3">
            <p className="font-sign font-semibold text-xl !text-left">Check availability</p>
            <p className="text-sm border border-[#000000]/25 rounded px-3 py-1.5 whitespace-nowrap !text-left">8 to 9 April, 2 guests</p>
          </div>

          <div className="px-3">
            <div className="flex items-center justify-between gap-3 bg-white rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.2)] px-4 py-3 ring-2 ring-[#F6B12C]">
              <p className="font-sign font-bold text-2xl !text-left">
                Your hotel <span className="ml-1 align-middle text-xs font-sans font-medium bg-[#F6B12C]/30 rounded px-2 py-0.5">Official site</span>
              </p>
              <p className="font-sign font-bold text-2xl whitespace-nowrap !text-left">KES 12,000</p>
            </div>
          </div>

          <ul className="px-6 py-3 mt-1">
            {OTHERS.map((o, i) => (
              <li key={i} className="flex items-center justify-between py-3 border-t border-[#000000]/10 first:border-t-0">
                <span className="font-sign text-xl text-[#000000]/80">{o.name}</span>
                <span className="font-sign text-xl text-[#000000]/80 whitespace-nowrap">KES {o.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="text-center mt-6">
        <p className="font-prose text-lg text-[#EAE5DF]/90 max-w-[52ch] mx-auto leading-relaxed">
          Guests compare prices before they book. When your own website shows the best price, they book direct and you keep the commission.
        </p>
        <p lang="sw" className="font-prose italic text-[#F6B12C] mt-2">
          Mgeni analinganisha bei. Bei bora ikiwa kwenye website yako, anabook direct.
        </p>
        <p className="font-prose text-sm text-[#EAE5DF]/60 mt-2">Example prices.</p>
      </figcaption>
    </figure>
  )
}
