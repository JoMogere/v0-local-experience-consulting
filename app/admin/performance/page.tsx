'use client'

export default function PerformancePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Performance Analytics</h2>

      {/* Core Web Vitals */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-4">Largest Contentful Paint (LCP)</div>
          <div className="text-4xl font-bold text-green-400 mb-2">1.2s</div>
          <div className="text-xs text-green-400">✓ Good - Under 2.5s</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-4">First Input Delay (FID)</div>
          <div className="text-4xl font-bold text-green-400 mb-2">45ms</div>
          <div className="text-xs text-green-400">✓ Good - Under 100ms</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-4">Cumulative Layout Shift (CLS)</div>
          <div className="text-4xl font-bold text-green-400 mb-2">0.08</div>
          <div className="text-xs text-green-400">✓ Good - Under 0.1</div>
        </div>
      </div>

      {/* Performance Score */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-4">PageSpeed Score</div>
          <div className="flex items-end gap-4">
            <div className="text-5xl font-bold text-green-400">92</div>
            <div className="text-sm text-text-gray mb-2">/100</div>
          </div>
          <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-green-500"></div>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-4">SEO Score</div>
          <div className="flex items-end gap-4">
            <div className="text-5xl font-bold text-green-400">95</div>
            <div className="text-sm text-text-gray mb-2">/100</div>
          </div>
          <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[95%] bg-green-500"></div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">Performance Metrics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-text-gray">First Contentful Paint (FCP)</span>
            <span className="text-white font-mono">0.8s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-gray">Time to Interactive (TTI)</span>
            <span className="text-white font-mono">1.5s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-gray">Total Blocking Time (TBT)</span>
            <span className="text-white font-mono">40ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-gray">Speed Index</span>
            <span className="text-white font-mono">1.3s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-gray">Total Page Size</span>
            <span className="text-white font-mono">2.4 MB</span>
          </div>
        </div>
      </div>

      {/* SEO Performance */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">SEO Performance</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-gray">Indexed Pages</span>
              <span className="text-white font-semibold">127</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full">
              <div className="h-full w-[85%] bg-orange-500"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-gray">Keywords Ranking (Top 10)</span>
              <span className="text-white font-semibold">34</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full">
              <div className="h-full w-[68%] bg-green-500"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-gray">Mobile Friendly</span>
              <span className="text-green-400 font-semibold">✓ Pass</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-gray">XML Sitemap</span>
              <span className="text-green-400 font-semibold">✓ Submitted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Traffic Overview */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-6">Traffic Overview (Last 30 Days)</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <div className="text-text-gray text-sm mb-2">Organic Sessions</div>
            <div className="text-2xl font-bold text-white">1,234</div>
            <div className="text-xs text-green-400 mt-1">↑ +12%</div>
          </div>
          <div>
            <div className="text-text-gray text-sm mb-2">Avg. Session Duration</div>
            <div className="text-2xl font-bold text-white">2m 34s</div>
            <div className="text-xs text-green-400 mt-1">↑ +8%</div>
          </div>
          <div>
            <div className="text-text-gray text-sm mb-2">Bounce Rate</div>
            <div className="text-2xl font-bold text-white">35%</div>
            <div className="text-xs text-green-400 mt-1">↓ -5%</div>
          </div>
          <div>
            <div className="text-text-gray text-sm mb-2">Conversions</div>
            <div className="text-2xl font-bold text-white">47</div>
            <div className="text-xs text-green-400 mt-1">↑ +3%</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
        <h4 className="text-lg font-bold text-blue-400 mb-4">Optimization Recommendations</h4>
        <ul className="text-text-gray text-sm space-y-2">
          <li>✓ Your site performance is excellent</li>
          <li>✓ All Core Web Vitals are in good range</li>
          <li>• Consider optimizing images further to improve LCP</li>
          <li>• Update internal links to improve crawlability</li>
          <li>• Publish more content targeting search intent</li>
        </ul>
      </div>
    </div>
  )
}
