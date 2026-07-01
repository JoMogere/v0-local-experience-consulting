'use client'

import { useState } from 'react'

const seoPages = [
  {
    id: 'home',
    title: 'Homepage',
    url: '/',
    meta: {
      title: 'BookedUp Africa — Transform Your Hospitality Business',
      description: 'Research and implementation for local search, experiential marketing, and direct bookings. Empowering East African hotels and resorts.',
      keywords: 'hotel marketing Africa, local search optimization, hospitality growth',
    },
  },
  {
    id: 'services',
    title: 'Services',
    url: '/services',
    meta: {
      title: 'Hotel Growth Services - BookedUp Africa',
      description: 'Growth Partnership, Local SEO, Guest Experience Optimization, and Direct Booking Audits',
      keywords: 'hotel services, local SEO Kenya, hospitality marketing',
    },
  },
  {
    id: 'blog',
    title: 'Blog',
    url: '/blog',
    meta: {
      title: 'Hotel Marketing Blog - BookedUp Africa',
      description: 'Tips and insights for hotel growth, local search optimization, and guest experience',
      keywords: 'hotel blog, hospitality insights, marketing tips',
    },
  },
]

export default function SEOPage() {
  const [activePage, setActivePage] = useState('home')
  const [saved, setSaved] = useState(false)

  const currentPage = seoPages.find((p) => p.id === activePage)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">SEO Management</h2>

      {/* Page Selector */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {seoPages.map((page) => (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id)}
            className={`p-4 rounded-lg border transition-all ${
              activePage === page.id
                ? 'bg-orange-500/20 border-orange-500/50 text-orange-500'
                : 'bg-white/5 border-white/10 text-text-gray hover:text-white'
            }`}
          >
            <div className="font-semibold">{page.title}</div>
            <div className="text-sm opacity-75">{page.url}</div>
          </button>
        ))}
      </div>

      {/* SEO Editor */}
      {currentPage && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Edit SEO for {currentPage.title}</h3>

          {/* Meta Title */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-3">Meta Title (55-60 chars)</label>
            <input
              type="text"
              defaultValue={currentPage.meta.title}
              maxLength={60}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500"
            />
            <div className="text-xs text-text-gray mt-2">
              {currentPage.meta.title.length}/60 characters
            </div>
          </div>

          {/* Meta Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-3">Meta Description (150-160 chars)</label>
            <textarea
              defaultValue={currentPage.meta.description}
              maxLength={160}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500 resize-none"
              rows={3}
            />
            <div className="text-xs text-text-gray mt-2">
              {currentPage.meta.description.length}/160 characters
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white mb-3">Focus Keywords</label>
            <input
              type="text"
              defaultValue={currentPage.meta.keywords}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-text-gray focus:outline-none focus:border-orange-500"
              placeholder="Separate with commas"
            />
          </div>

          {/* Technical SEO Checklist */}
          <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-white mb-4">Technical SEO Checklist</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-text-gray">Page included in sitemap.xml</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-text-gray">Canonical URL set</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-text-gray">Open Graph tags configured</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-text-gray">Mobile friendly</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-text-gray">Schema markup present</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
            >
              Save SEO Settings
            </button>
            <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-text-gray font-semibold rounded-lg border border-white/10 transition-colors">
              Test Page
            </button>
          </div>

          {saved && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg">
              ✓ SEO settings saved successfully
            </div>
          )}
        </div>
      )}

      {/* SEO Tips */}
      <div className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
        <h4 className="text-lg font-bold text-blue-400 mb-3">SEO Tips</h4>
        <ul className="text-text-gray text-sm space-y-2">
          <li>• Keep meta titles between 55-60 characters for best display</li>
          <li>• Write compelling descriptions that include your target keywords</li>
          <li>• Use focus keywords naturally in your content</li>
          <li>• Ensure internal links point to related pages</li>
          <li>• Update pages regularly to maintain fresh content signals</li>
        </ul>
      </div>
    </div>
  )
}
