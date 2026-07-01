'use client'

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Pages Published</div>
          <div className="text-3xl font-bold text-white">8</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Blog Posts</div>
          <div className="text-3xl font-bold text-white">12</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">SEO Score</div>
          <div className="text-3xl font-bold text-orange-500">92/100</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Site Health</div>
          <div className="text-3xl font-bold text-green-400">Good</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a href="/admin/content" className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg hover:bg-orange-500/20 transition-colors">
            <div className="font-semibold text-orange-500 mb-1">Manage Content</div>
            <div className="text-sm text-text-gray">Edit pages, services, and blog posts</div>
          </a>
          <a href="/admin/seo" className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-colors">
            <div className="font-semibold text-blue-400 mb-1">SEO Settings</div>
            <div className="text-sm text-text-gray">Update meta tags, keywords, descriptions</div>
          </a>
          <a href="/admin/performance" className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors">
            <div className="font-semibold text-green-400 mb-1">Performance</div>
            <div className="text-sm text-text-gray">View site speed and metrics</div>
          </a>
          <a href="https://search.google.com/search-console" target="_blank" className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-colors">
            <div className="font-semibold text-purple-400 mb-1">Google Search Console</div>
            <div className="text-sm text-text-gray">View search performance and errors</div>
          </a>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">System Information</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-gray">Domain:</span>
            <span className="text-white font-mono">bookedupafrica.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-gray">Sitemap:</span>
            <span className="text-white font-mono">/sitemap.xml</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-gray">Robots.txt:</span>
            <span className="text-white font-mono">/robots.txt</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-gray">Last Updated:</span>
            <span className="text-white font-mono">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
