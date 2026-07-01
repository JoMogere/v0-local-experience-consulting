'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ContentArchitecturePage() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>('local-seo-hotels')

  const pillars = [
    {
      id: 'local-seo-hotels',
      title: 'Local SEO for Hotels',
      status: 'published',
      url: '/pillar/local-seo-hotels',
      wordCount: 4200,
      clusters: [
        {
          id: 'google-maps-ranking',
          title: 'How to Rank Higher in Google Maps',
          status: 'published',
          wordCount: 2100,
          url: '/pillar/local-seo-hotels/google-maps-ranking',
        },
        {
          id: 'generate-reviews',
          title: 'How to Generate Hotel Reviews',
          status: 'published',
          wordCount: 1850,
          url: '/pillar/local-seo-hotels/generate-hotel-reviews',
        },
        {
          id: 'nap-consistency',
          title: 'NAP Consistency for Hotels',
          status: 'published',
          wordCount: 1500,
          url: '/pillar/local-seo-hotels/nap-consistency',
        },
      ],
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Content Architecture Manager</h2>

      <div className="space-y-6">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            {/* Pillar Header */}
            <button
              onClick={() => setExpandedPillar(expandedPillar === pillar.id ? null : pillar.id)}
              className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <div className="text-left">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    {pillar.status}
                  </span>
                </div>
                <p className="text-sm text-text-gray">
                  Pillar • {pillar.wordCount} words • {pillar.clusters.length} cluster articles
                </p>
              </div>
              <span className={`text-orange-500 transition-transform ${expandedPillar === pillar.id ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Cluster Articles */}
            {expandedPillar === pillar.id && (
              <div className="bg-white/5 border-t border-white/10 p-6 space-y-4">
                <div className="mb-4">
                  <h4 className="font-bold text-orange-500 mb-4">Supporting Cluster Articles</h4>
                  <div className="space-y-3">
                    {pillar.clusters.map((cluster) => (
                      <div key={cluster.id} className="bg-white/5 p-4 rounded flex items-center justify-between">
                        <div>
                          <h5 className="font-bold text-white mb-1">{cluster.title}</h5>
                          <p className="text-sm text-text-gray">
                            {cluster.wordCount} words •{' '}
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                              {cluster.status}
                            </span>
                          </p>
                        </div>
                        <a
                          href={cluster.url}
                          target="_blank"
                          className="text-orange-500 hover:text-orange-400 text-sm font-bold"
                        >
                          View →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white">
                    Edit Pillar
                  </Button>
                  <Button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400">
                    Add Cluster Article
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Strategy Section */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-8 mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Topical Authority Metrics</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/5 p-4 rounded">
            <div className="text-3xl font-bold text-orange-500">1</div>
            <p className="text-text-gray text-sm mt-2">Active Pillar Pages</p>
          </div>
          <div className="bg-white/5 p-4 rounded">
            <div className="text-3xl font-bold text-orange-500">3</div>
            <p className="text-text-gray text-sm mt-2">Cluster Articles</p>
          </div>
          <div className="bg-white/5 p-4 rounded">
            <div className="text-3xl font-bold text-orange-500">9,650</div>
            <p className="text-text-gray text-sm mt-2">Total Words</p>
          </div>
          <div className="bg-white/5 p-4 rounded">
            <div className="text-3xl font-bold text-orange-500">7</div>
            <p className="text-text-gray text-sm mt-2">Planned Pillars</p>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-8 mt-8">
        <h3 className="text-xl font-bold text-blue-400 mb-3">How This Works</h3>
        <p className="text-text-gray text-sm">
          Each pillar page is a comprehensive 4,000-6,000 word guide on a major topic. Supporting cluster articles (1,500-2,500 words) target specific search intents within that topic. Internal links connect pillars and clusters, creating a topical authority network that Google recognizes as demonstrating deep expertise.
        </p>
      </div>
    </div>
  )
}
