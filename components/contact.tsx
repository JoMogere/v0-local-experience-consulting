"use client"

import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    propertyName: "",
    email: "",
    challenges: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-24 bg-off-white text-navy-deep" id="contact">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[48px] font-bold mb-5 tracking-[-0.02em] text-balance">
              Ready to grow?
            </h2>
            <p className="text-lg mb-10 text-navy-deep/70">
              Submit your details for a complimentary growth framework assessment of your property.
            </p>
            <div className="text-gold font-bold">+254 700 000 000</div>
            <div className="mt-2.5 text-navy-deep/70">hello@localexperience.africa</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block font-bold text-xs uppercase tracking-[1px] mb-2">
                Property Name
              </label>
              <input
                type="text"
                placeholder="e.g. Wild Wood Cottage"
                value={formData.propertyName}
                onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                className="w-full p-4 border border-gray-300 bg-white font-sans text-base rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="block font-bold text-xs uppercase tracking-[1px] mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 border border-gray-300 bg-white font-sans text-base rounded-sm focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="block font-bold text-xs uppercase tracking-[1px] mb-2">
                Current Growth Challenges
              </label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                value={formData.challenges}
                onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                className="w-full p-4 border border-gray-300 bg-white font-sans text-base rounded-sm focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-9 py-4.5 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded-sm transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] uppercase tracking-[2px] text-[13px] border-none cursor-pointer"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
