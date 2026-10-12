'use client'

import { useState } from 'react'
import { WHATSAPP_NUMBER } from '@/lib/merch-data'

const GOALS = [
  'More direct bookings',
  'Google Maps / local search visibility',
  'Booking engine & Google connectivity',
  'Reviews & guest experience',
  'Not sure yet — advise me',
]

const field =
  'w-full bg-navy-deep border border-border-flat rounded-sm px-4 py-3 text-[#F9F6F0] placeholder:text-text-gray focus:outline-none focus:border-gold-flat'

export function DemoRequestForm() {
  const [goals, setGoals] = useState<string[]>([])
  const [error, setError] = useState('')

  const toggle = (g: string) =>
    setGoals((cur) => (cur.includes(g) ? cur.filter((x) => x !== g) : [...cur, g]))

  const build = (form: HTMLFormElement) => {
    const d = new FormData(form)
    const get = (k: string) => String(d.get(k) ?? '').trim()
    if (!get('name') || !get('property') || !get('location')) {
      setError('Please add your name, property name and location.')
      return null
    }
    setError('')
    return [
      'Demo & quote request — BookedUp Africa',
      `Name: ${get('name')}`,
      `Property: ${get('property')} (${get('location')})`,
      `Rooms: ${get('rooms') || 'not given'}`,
      `Website: ${get('website') || 'none yet'}`,
      `Currently takes bookings via: ${get('channels') || 'not given'}`,
      `Goals: ${goals.length ? goals.join(', ') : 'not given'}`,
      `Best time for a call: ${get('time') || 'any'}`,
      `Phone/email: ${get('contact') || 'this WhatsApp number'}`,
    ].join('\n')
  }

  const send = (form: HTMLFormElement, via: 'whatsapp' | 'email') => {
    const msg = build(form)
    if (!msg) return
    const url =
      via === 'whatsapp'
        ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
        : `mailto:mogerejulius41@gmail.com?subject=${encodeURIComponent(
            'Demo & quote request',
          )}&body=${encodeURIComponent(msg)}`
    window.open(url, via === 'whatsapp' ? '_blank' : '_self')
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        send(e.currentTarget, 'whatsapp')
      }}
      className="bg-navy-alt border border-border-flat rounded-sm p-6 md:p-8 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your name *" className={field} />
        <input name="contact" placeholder="Phone or email" className={field} />
        <input name="property" placeholder="Property name *" className={field} />
        <input name="location" placeholder="Location (e.g. Naivasha) *" className={field} />
        <input name="rooms" inputMode="numeric" placeholder="Number of rooms" className={field} />
        <input name="website" placeholder="Website (if any)" className={field} />
      </div>
      <input
        name="channels"
        placeholder="How do guests book today? (OTAs, WhatsApp, calls…)"
        className={field}
      />
      <fieldset>
        <legend className="text-sm text-text-gray mb-2">What do you want help with?</legend>
        <div className="flex flex-wrap gap-2">
          {GOALS.map((g) => (
            <button
              type="button"
              key={g}
              onClick={() => toggle(g)}
              aria-pressed={goals.includes(g)}
              className={`px-3 py-2 text-sm rounded-sm border transition-colors ${
                goals.includes(g)
                  ? 'bg-gold-flat text-navy-deep border-gold-flat font-bold'
                  : 'border-border-flat text-[#F9F6F0] hover:border-gold-flat'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </fieldset>
      <input name="time" placeholder="Best day/time for the demo (EAT)" className={field} />

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-[#25D366] text-[#0D0D0D] font-bold rounded-sm hover:opacity-90"
        >
          Send on WhatsApp →
        </button>
        <button
          type="button"
          onClick={(e) => e.currentTarget.form && send(e.currentTarget.form, 'email')}
          className="flex-1 px-6 py-3 border border-border-flat text-[#F9F6F0] font-bold rounded-sm hover:border-gold-flat"
        >
          Send by email
        </button>
      </div>
    </form>
  )
}
