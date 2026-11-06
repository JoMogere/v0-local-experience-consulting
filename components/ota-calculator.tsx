'use client'

import { useState } from 'react'

const WHATSAPP = '254799022671'
const kes = (n: number) => `KES ${Math.round(n).toLocaleString('en-KE')}`


type Summary = {
  rate: number
  commission: number
  ota: number
  direct: number
  perBooking: number
  nights: number
  monthly: number
  yearly: number
  directShare: number
  moved: number
  savedYearly: number
}

const CARD_W = 1080
const CARD_H = 1350

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ')
  const lines: string[] = []
  let line = ''
  for (const w of words) {
    const test = line ? `${line} ${w}` : w
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = w
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  return lines
}

// Draws the result as a picture the owner can save or share.
function drawCard(d: Summary): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = CARD_W
  canvas.height = CARD_H
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const sign = '"Arial Narrow", "Helvetica Neue", Arial, sans-serif'
  const serif = 'Georgia, "Times New Roman", serif'

  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, CARD_W, CARD_H)
  ctx.textAlign = 'center'

  let y = 150
  ctx.fillStyle = '#F8F5EC'
  ctx.font = `bold 64px ${sign}`
  ctx.fillText('What the booking sites cost my hotel', CARD_W / 2, y)

  y += 190
  ctx.fillStyle = '#F6B12C'
  ctx.font = `bold 150px ${sign}`
  ctx.fillText(kes(d.yearly), CARD_W / 2, y)

  y += 80
  ctx.fillStyle = '#F8F5EC'
  ctx.font = `38px ${serif}`
  ctx.fillText('goes to the OTAs every year.', CARD_W / 2, y)

  y += 60
  ctx.fillStyle = '#F6B12C'
  ctx.font = `italic 34px ${serif}`
  ctx.fillText(`Hiyo ${kes(d.yearly)} si profit yako. Ni ya OTA.`, CARD_W / 2, y)

  y += 70
  ctx.strokeStyle = 'rgba(230,173,69,0.5)'
  ctx.lineWidth = 4
  ctx.setLineDash([18, 14])
  ctx.beginPath()
  ctx.moveTo(140, y)
  ctx.lineTo(CARD_W - 140, y)
  ctx.stroke()
  ctx.setLineDash([])

  const rows = [
    `Room price: ${kes(d.rate)} per night`,
    `Each booking: ${d.nights} ${d.nights === 1 ? 'night' : 'nights'} at ${kes(d.rate)}, ${d.commission}% commission = ${kes(d.perBooking)}`,
    `Each month: ${d.ota} OTA bookings, ${d.direct} direct`,
    `Commission paid each month: ${kes(d.monthly)}`,
    `Direct bookings: ${d.directShare}% of the total`,
  ]
  y += 80
  ctx.fillStyle = '#EAE5DF'
  ctx.font = `36px ${serif}`
  for (const r of rows) {
    for (const l of wrap(ctx, r, CARD_W - 240)) {
      ctx.fillText(l, CARD_W / 2, y)
      y += 48
    }
    y += 14
  }

  if (d.moved > 0) {
    y += 20
    ctx.fillStyle = '#F8F5EC'
    ctx.font = `bold 40px ${serif}`
    for (const l of wrap(ctx, `Move ${d.moved} OTA ${d.moved === 1 ? 'booking' : 'bookings'} a month to direct and keep ${kes(d.savedYearly)} a year.`, CARD_W - 240)) {
      ctx.fillText(l, CARD_W / 2, y)
      y += 54
    }
  }

  ctx.fillStyle = '#F6B12C'
  ctx.font = `bold 40px ${sign}`
  ctx.fillText('BookedUp Africa', CARD_W / 2, CARD_H - 120)
  ctx.fillStyle = '#EAE5DF'
  ctx.font = `30px ${serif}`
  ctx.fillText('bookedupafrica.com/ota-commission-calculator-kenya', CARD_W / 2, CARD_H - 70)
  return canvas
}

// A single-page PDF that holds the picture. Built by hand so no extra library is needed.
function jpegToPdf(jpeg: Uint8Array, w: number, h: number): Blob {
  const enc = new TextEncoder()
  const parts: Uint8Array[] = []
  const offsets: number[] = []
  let length = 0
  const push = (d: string | Uint8Array) => {
    const b = typeof d === 'string' ? enc.encode(d) : d
    parts.push(b)
    length += b.length
  }
  const pw = 595
  const ph = Math.round((595 * h) / w)
  push('%PDF-1.4\n')
  offsets[1] = length
  push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n')
  offsets[2] = length
  push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n')
  offsets[3] = length
  push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pw} ${ph}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n`)
  offsets[4] = length
  push(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`)
  push(jpeg)
  push('\nendstream\nendobj\n')
  const content = `q ${pw} 0 0 ${ph} 0 0 cm /Im0 Do Q`
  offsets[5] = length
  push(`5 0 obj\n<< /Length ${content.length} >>\nstream\n${content}\nendstream\nendobj\n`)
  const xref = length
  let table = 'xref\n0 6\n0000000000 65535 f \n'
  for (let i = 1; i <= 5; i++) table += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
  push(`${table}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`)
  return new Blob(parts as BlobPart[], { type: 'application/pdf' })
}

function save(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
}

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
      <label htmlFor={id} className="block font-sign font-semibold text-xl text-[#F8F5EC] mb-1">
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
          className="w-full px-4 py-3 bg-[#000000] border border-[#2A2A2A] rounded-sm text-[#F8F5EC] text-lg placeholder:text-[#EAE5DF]/35 focus:outline-none focus:border-[#F6B12C]"
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

  const summary: Summary = { rate: rateN || 0, commission: commN || 0, ota: ready ? otaN : 0, direct: directN, perBooking: feePerBooking, nights: nightsN, monthly, yearly, directShare, moved, savedYearly }

  const downloadImage = () => {
    drawCard(summary).toBlob((blob) => blob && save(blob, 'ota-commission-result.png'), 'image/png')
  }
  const downloadPdf = () => {
    const canvas = drawCard(summary)
    const b64 = canvas.toDataURL('image/jpeg', 0.92).split(',')[1]
    const bin = atob(b64)
    const bytes = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
    save(jpegToPdf(bytes, CARD_W, CARD_H), 'ota-commission-result.pdf')
  }

  const message = `Niliangalia calculator yenu. Room yangu ni ${kes(rateN || 0)} per night, nipo na ${ready ? otaN : 0} OTA bookings na ${directN} direct kwa mwezi. OTA zinachukua ${kes(yearly)} kwa mwaka. Naomba msaada wa kuongeza direct bookings.`

  return (
    <div className="max-w-[760px] mx-auto">
      <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-6">
        <Field id="rate" label="Your room price per night" value={rate} onChange={setRate} suffix="KES" placeholder="10000" />
        <Field id="commission" label="OTA commission" value={commission} onChange={setCommission} suffix="%" placeholder="20" hint="Check your booking site statement. Often 15% to 20%." />
        <Field id="ota" label="Bookings from OTAs each month" value={ota} onChange={setOta} placeholder="10" hint="Booking.com, Expedia and similar." />
        <Field id="direct" label="Direct bookings each month" value={direct} onChange={setDirect} placeholder="5" hint="Phone, WhatsApp, walk-in and your website. Leave empty if none." />
        <Field id="nights" label="Average nights per booking" value={nights} onChange={setNights} placeholder="1" hint="Leave empty for 1 night. If a guest stays 2 nights, the commission is taken on both." />
        <Field id="shift" label="OTA bookings you could move to direct" value={shift} onChange={setShift} suffix="a month" placeholder="3" hint="Leave empty and we assume about 3 in 10." />
      </form>

      <div className="text-center mt-4">
        <button type="button" onClick={fillExample} className="font-prose text-[#F6B12C] underline underline-offset-4 hover:text-[#FFC24A]">
          Not sure? Fill in an example
        </button>
      </div>

      <div className="mt-12 text-center" aria-live="polite">
        {!ready ? (
          <p className="font-prose text-xl text-[#EAE5DF]/80 border-t-[3px] border-dashed border-[#F6B12C]/50 pt-8">
            Fill in the first three boxes and your answer appears here.
          </p>
        ) : (
          <>
            <p className="font-sign text-2xl text-[#EAE5DF]">
              Each OTA booking costs you {kes(feePerBooking)} in commission.
            </p>
            <p className="font-prose text-[#EAE5DF]/70 mt-1">
              {nightsN === 1 ? '' : `${nightsN} nights × ${kes(rateN)} = ${kes(perBooking)}, then `}
              {commN}% of {kes(perBooking)} = {kes(feePerBooking)}
            </p>
            <p className="font-sign font-bold text-[#F6B12C] text-6xl md:text-8xl leading-none mt-4">{kes(yearly)}</p>
            <p className="font-prose text-xl text-[#F8F5EC] mt-3">
              goes to the OTAs every year. That is {kes(monthly)} a month. It is not your profit.
            </p>
            <p lang="sw" className="font-prose italic text-lg text-[#F6B12C] mt-2">
              Hiyo {kes(yearly)} si profit yako. Ni ya OTA.
            </p>

            <div className="border-t-[3px] border-dashed border-[#F6B12C]/50 mt-10 pt-8">
              <p className="font-prose text-lg text-[#EAE5DF]/90">
                {directShare}% of your bookings are direct. {verdict}
              </p>
              {moved > 0 && (
                <p className="font-prose text-lg text-[#EAE5DF]/90 mt-3">
                  {assumed ? 'If you moved about 3 in 10 of your OTA bookings, ' : 'If you moved '}
                  {assumed ? `that is ${moved} a month, ` : `${moved} OTA ${moved === 1 ? 'booking' : 'bookings'} a month to direct, `}
                  you would keep <strong className="text-[#F6B12C]">{kes(savedYearly)}</strong> a year.
                </p>
              )}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#F26A0A] to-[#F6B12C] hover:opacity-90 text-[#000000] font-sign font-bold text-xl rounded-sm transition-colors"
                >
                  Send to Jo on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={downloadImage}
                  className="px-6 py-3 border-2 border-[#F6B12C] text-[#F6B12C] hover:bg-[#F6B12C] hover:text-[#000000] font-sign font-bold text-xl rounded-sm transition-colors"
                >
                  Download as image
                </button>
                <button
                  type="button"
                  onClick={downloadPdf}
                  className="px-6 py-3 border-2 border-[#F6B12C] text-[#F6B12C] hover:bg-[#F6B12C] hover:text-[#000000] font-sign font-bold text-xl rounded-sm transition-colors"
                >
                  Download as PDF
                </button>
              </div>
              <p className="font-prose text-[#EAE5DF]/60 mt-4">
                Nothing is saved on our side. Your figures stay on your phone unless you send them.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
