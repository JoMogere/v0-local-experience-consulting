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
  placeholder,
}: {
  id: string
  label: string
  hint?: string
  value: string
  onChange: (v: string) => void
  suffix?: string
  placeholder: string
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
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 bg-[#15110E] border border-[#3A2D22] rounded-sm text-[#F4EFE6] text-lg placeholder:text-[#EAE5DF]/35 focus:outline-none focus:border-[#E6AD45]"
        />
        {suffix && <span className="text-[#EAE5DF]/80 whitespace-nowrap">{suffix}</span>}
      </div>
      {hint && <p className="text-sm text-[#EAE5DF]/60 mt-1">{hint}</p>}
    </div>
  )
}

const num = (v: string) => {
  const n = Number(v)
  return v.trim() !== '' && Number.isFinite(n) && n >= 0 ? n : NaN
}

export function OtaCalculator() {
  // Fields start empty so the owner types their own figures. Grey placeholders show a sample.
  const [rate, setRate] = useState('')
  const [commission, setCommission] = useState('')
  const [ota, setOta] = useState('')
  const [direct, setDirect] = useState('')
  const [nights, setNights] = useState('')
  const [shift, setShift] = useState('')

  const rateN = num(rate)
  const commN = num(commission)
  const otaN = num(ota)
  const directN = Number.isNaN(num(direct)) ? 0 : num(direct)
  const nightsN = Number.isNaN(num(nights)) || num(nights) === 0 ? 1 : num(nights)
  const ready = !Number.isNaN(rateN) && !Number.isNaN(commN) && !Number.isNaN(otaN) && rateN > 0

  const perBooking = ready ? rateN * nightsN : 0
  const feePerBooking = ready ? (perBooking * commN) / 100 : 0
  const monthly = feePerBooking * (ready ? otaN : 0)
  const yearly = monthly * 12
  const total = (ready ? otaN : 0) + directN
  const directShare = total > 0 ? Math.round((directN / total) * 100) : 0

  // If they do not say how many bookings they could move, assume about 3 in 10 of their OTA bookings.
  const shiftInput = num(shift)
  const moved = ready ? Math.min(Number.isNaN(shiftInput) ? Math.max(1, Math.round(otaN * 0.3)) : shiftInput, otaN) : 0
  const assumed = Number.isNaN(shiftInput)
  const savedYearly = feePerBooking * moved * 12

  const verdict =
    directShare < 20
      ? 'Almost all your income depends on the booking sites. That is where the biggest saving is.'
      : directShare < 50
      ? 'You already get a fair share direct. There is still real money to win back.'
      : 'You get most bookings direct. Protect that, and keep growing it.'

  const fillExample = () => {
    setRate('10000')
    setCommission('20')
    setOta('10')
    setDirect('5')
    setNights('1')
    setShift('')
  }

  const message = `Niliangalia calculator yenu. Room yangu ni ${kes(rateN || 0)} per night, nipo na ${ready ? otaN : 0} OTA bookings na ${directN} direct kwa mwezi. OTA zinachukua ${kes(yearly)} kwa mwaka. Naomba msaada wa kuongeza direct bookings.`

  return (
    <div className="max-w-[760px] mx-auto">
      <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
        <Field id="rate" label="Your room price per night" value={rate} onChange={setRate} suffix="KES" placeholder="10000" />
        <Field id="commission" label="OTA commission" value={commission} onChange={setCommission} suffix="%" placeholder="20" hint="Check your booking site statement. Often 15% to 20%." />
        <Field id="ota" label="Bookings from OTAs each month" value={ota} onChange={setOta} placeholder="10" hint="Booking.com, Expedia and similar." />
        <Field id="direct" label="Direct bookings each month" value={direct} onChange={setDirect} placeholder="5" hint="Phone, WhatsApp, walk-in and your website. Leave empty if none." />
        <Field id="nights" label="Average nights per booking" value={nights} onChange={setNights} placeholder="1" hint="Leave empty for 1 night." />
        <Field id="shift" label="OTA bookings you could move to direct" value={shift} onChange={setShift} suffix="a month" placeholder="3" hint="Leave empty and we assume about 3 in 10." />
      </form>

      <div className="text-center mt-4">
        <button type="button" onClick={fillExample} className="font-prose text-[#E6AD45] underline underline-offset-4 hover:text-[#F1BE5E]">
          Not sure? Fill in an example
        </button>
      </div>

      <div className="mt-12 text-center" aria-live="polite">
        {!ready ? (
          <p className="font-prose text-xl text-[#EAE5DF]/80 border-t-[3px] border-dashed border-[#E6AD45]/50 pt-8">
            Fill in the first three boxes and your answer appears here.
          </p>
        ) : (
          <>
            <p className="font-sign text-2xl text-[#EAE5DF]">
              Each OTA booking costs you {kes(feePerBooking)} in commission.
            </p>
            <p className="font-sign font-bold text-[#E6AD45] text-6xl md:text-8xl leading-none mt-4">{kes(yearly)}</p>
            <p className="font-prose text-xl text-[#F4EFE6] mt-3">
              goes to the OTAs every year. That is {kes(monthly)} a month. It is not your profit.
            </p>
            <p lang="sw" className="font-prose italic text-lg text-[#E6AD45] mt-2">
              Hiyo {kes(yearly)} si profit yako. Ni ya OTA.
            </p>

            <div className="border-t-[3px] border-dashed border-[#E6AD45]/50 mt-10 pt-8">
              <p className="font-prose text-lg text-[#EAE5DF]/90">
                {directShare}% of your bookings are direct. {verdict}
              </p>
              {moved > 0 && (
                <p className="font-prose text-lg text-[#EAE5DF]/90 mt-3">
                  {assumed ? 'If you moved about 3 in 10 of your OTA bookings, ' : 'If you moved '}
                  {assumed ? `that is ${moved} a month, ` : `${moved} OTA ${moved === 1 ? 'booking' : 'bookings'} a month to direct, `}
                  you would keep <strong className="text-[#E6AD45]">{kes(savedYearly)}</strong> a year.
                </p>
              )}
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
          </>
        )}
      </div>
    </div>
  )
}
