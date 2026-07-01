'use client'

import { useState } from 'react'

const contentSections = [
  {
    id: 'hero',
    title: 'Hero Section',
    fields: [
      { name: 'heading', label: 'Main Heading', type: 'text', value: 'Research and implementation' },
      { name: 'subheading', label: 'Subheading', type: 'textarea', value: 'for local search, experiential marketing, and hotel growth' },
      { name: 'tagline', label: 'Tagline', type: 'text', value: 'Search. Stay. Succeed.' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    fields: [
      { name: 'service1', label: 'Service 1 Title', type: 'text', value: 'Growth Partnership Retainer' },
      { name: 'service1_desc', label: 'Service 1 Description', type: 'textarea', value: 'Long term partnership managing your Local SEO, reviews, and booking performance' },
      { name: 'service2', label: 'Service 2 Title', type: 'text', value: 'Guest Experience Optimization' },
      { name: 'service2_desc', label: 'Service 2 Description', type: 'textarea', value: 'Improve the full guest journey from discovery to post stay engagement' },
      { name: 'service3', label: 'Service 3 Title', type: 'text', value: 'Direct Booking & Distribution Audit' },
      { name: 'service3_desc', label: 'Service 3 Description', type: 'textarea', value: 'Identify where bookings are leaking to OTAs and get a clear action plan' },
    ],
  },
  {
    id: 'about',
    title: 'About Section',
    fields: [
      { name: 'about_title', label: 'About Title', type: 'text', value: 'About BookedUp Africa' },
      { name: 'about_desc', label: 'About Description', type: 'textarea', value: 'We help East African hotels maximize direct bookings through local search optimization and guest experience excellence.' },
    ],
  },
]

export default function ContentPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const currentSection = contentSections.find((s) => s.id === activeSection)

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Content Management</h2>

      {/* Section Tabs */}
      <div className="flex gap-2 mb-6 border-b border-white/10">
        {contentSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-3 border-b-2 transition-colors ${
              activeSection === section.id ? 'border-orange-500 text-orange-500' : 'border-transparent text-text-gray hover:text-white'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content Editor */}
      {currentSection && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-6">{currentSection.title}</h3>

          <div className="space-y-6">
            {currentSection.fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-white mb-2">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    defaultValue={field.value}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500 resize-none"
                    rows={4}
                  />
                ) : (
                  <input
                    type="text"
                    defaultValue={field.value}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Save Changes
            </button>
            <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-text-gray font-semibold rounded-lg border border-white/10 transition-colors">
              Preview
            </button>
          </div>

          {saved && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg">
              ✓ Changes saved successfully
            </div>
          )}
        </div>
      )}
    </div>
  )
}
