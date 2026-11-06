'use client'

import { useState } from 'react'

const WHATSAPP = '254799022671'
const kes = (n: number) => `KES ${Math.round(n).toLocaleString('en-KE')}`

function Field({
  id,
  label,
  hint,
  value,
  onChange,
  suffix,
}: {
  id: string
  label: string
  hint?: string
  value: number
  onChange: (v: number) => void
  suffix?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-sign font-semibold text-xl text-[#F4EFE6] mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="w-full px-4 py-3 bg-[#15110E] border border-[#3A2D22] rounded-sm text-[#F4EFE6] text-lg focus:outline-none focus:border-[#E6AD45]"
        />
        {suffix && <span className="text-[#EAE5DF]/80 whitespace-nowrap">{suffix}</span>}
      </div>
      {hint && <p className="text-sm text-[#EAE5DF]/60 mt-1">{hint}</p>}
    </div>
  )
}

export function OtaCalculator() {
  const [rate, setRate] = useState(10000)
  const [commission, setCommission] = useState(20)
  const [nights, setNights] = useState(1)
  const [ota, setOta] = useState(10)
  const [direct, setDirect] = useState(5)
  const [shift, setShift] = useState(3)

  const perBooking = rate * nights
  const feePerBooking = (perBooking * commission) / 100
  const monthly = feePerBooking * ota
  const yearly = monthly * 12
  const moved = Math.min(shift, ota)
  const savedYearly = feePerBooking * moved * 12
  const total = ota + direct
  const directShare = total > 0 ? Math.round((direct / total) * 100) : 0

  const message = `Niliangalia calculator yenu. Room yangu ni ${kes(rate)} per night, nipo na ${ota} OTA bookings na ${direct} direct kwa mwezi. OTA zinachukua ${kes(yearly)} kwa mwaka. Naomba msaada wa kuongeza direct bookings.`

  return (
    <div className="max-w-[760px] mx-auto">
      <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
        <Field id="rate" label="Room price per night" value={rate} onChange={setRate} suffix="KES" />
        <Field id="commission" label="OTA commission" value={commission} onChange={setCommission} suffix="%" hint="Booking.com and others often take 15% to 20%." />
        <Field id="nights" label="Nights per booking" value={nights} onChange={setNights} />
        <Field id="ota" label="OTA bookings per month" value={ota} onChange={setOta} />
        <Field id="direct" label="Direct bookings per month" value={direct} onChange={setDirect} hint="Phone, WhatsApp, walk-in and your own website." />
        <Field id="shift" label="Bookings you could move to direct" value={shift} onChange={setShift} suffix="per month" />
      </form>

      <div className="mt-12 text-center" aria-live="polite">
        <p className="font-sign text-2xl text-[#EAE5DF]">Each OTA booking costs you {kes(feePerBooking)} in commission.</p>
        <p className="font-sign font-bold text-[#E6AD45] text-6xl md:text-8xl leading-none mt-4">{kes(yearly)}</p>
        <p className="font-prose text-xl text-[#F4EFE6] mt-3">
          goes to the OTAs every year. That is {kes(monthly)} a month. It is not your profit.
        </p>
        <p lang="sw" className="font-prose italic text-lg text-[#E6AD45] mt-2">
          Hiyo {kes(yearly)} si profit yako. Ni ya OTA.
        </p>

        <div className="border-t-[3px] border-dashed border-[#E6AD45]/50 mt-10 pt-8">
          <p className="font-prose text-lg text-[#EAE5DF]/90">
            Only {directShare}% of your bookings are direct right now.
            {moved > 0 && (
              <>
                {' '}
                Move {moved} OTA {moved === 1 ? 'booking' : 'bookings'} a month to direct and you keep{' '}
                <strong className="text-[#E6AD45]">{kes(savedYearly)}</strong> a year.
              </>
            )}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 bg-[#E6AD45] hover:bg-[#F1BE5E] text-[#15110E] font-sign font-bold text-2xl rounded-sm transition-colors"
          >
            Send these numbers to Jo on WhatsApp
          </a>
          <p className="font-prose text-[#EAE5DF]/60 mt-4">
            Nothing is saved. The numbers stay on your phone until you send them.
          </p>
        </div>
      </div>
    </div>
  )
}
