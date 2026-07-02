'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getBlogPosts, addBlogPost, publishBlogPost, deleteBlogPost } from '@/lib/data'

export default function BlogManagement() {
  const [activeTab, setActiveTab] = useState<'pillars' | 'articles'>('pillars')
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPosts(getBlogPosts())
    setLoading(false)
  }, [])

  const pillars = [
    { id: 1, title: 'Local SEO for Hotels', slug: 'local-seo-for-hotels', articles: 11, link: '/blog/local-seo-for-hotels' },
    { id: 2, title: 'Google Business Profile', slug: 'google-business-profile-hotels', articles: 9, link: '/blog/google-business-profile-hotels' },
    { id: 3, title: 'Experiential Marketing', slug: 'experiential-marketing-hotels', articles: 8, link: '/blog/experiential-marketing-hotels' },
    { id: 4, title: 'Content Marketing', slug: 'content-marketing-hotels', articles: 9, link: '/blog/content-marketing-hotels' },
    { id: 5, title: 'Direct Bookings', slug: 'direct-hotel-bookings', articles: 8, link: '/blog/direct-hotel-bookings' },
    { id: 6, title: 'Hotel Websites', slug: 'hotel-website-design-seo', articles: 8, link: '/blog/hotel-website-design-seo' },
    { id: 7, title: 'AI for Hotels', slug: 'ai-for-hotels', articles: 7, link: '/blog/ai-for-hotels' },
    { id: 8, title: 'Case Studies', slug: 'hospitality-case-studies', articles: 6, link: '/blog/hospitality-case-studies' },
  ]

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    metaDesc: '',
    keywords: '',
  })

  const handleAddPost = () => {
    if (formData.title) {
      addBlogPost({
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        content: formData.content,
        excerpt: formData.excerpt,
        metaDesc: formData.metaDesc,
        keywords: formData.keywords,
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
      })
      setPosts(getBlogPosts())
      setFormData({ title: '', slug: '', content: '', excerpt: '', metaDesc: '', keywords: '' })
      setShowForm(false)
    }
  }

  const handlePublish = (id: number) => {
    publishBlogPost(id)
    setPosts(getBlogPosts())
  }

  const handleDelete = (id: number) => {
    deleteBlogPost(id)
    setPosts(getBlogPosts())
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Blog & Content Strategy</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + New Article
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b border-white/10">
        <button
          onClick={() => setActiveTab('pillars')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'pillars'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-text-gray hover:text-white'
          }`}
        >
          8 Pillars
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
            activeTab === 'articles'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-text-gray hover:text-white'
          }`}
        >
          Supporting Articles
        </button>
      </div>

      {/* Pillars Tab */}
      {activeTab === 'pillars' && (
        <div className="space-y-6 mb-12">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">Topical Authority Strategy</h3>
            <p className="text-sm text-text-gray">8 pillar pages covering major hotel marketing topics with 4-11 supporting articles each. This creates a comprehensive content network that signals expertise to Google.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <a
                key={pillar.id}
                href={pillar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-orange-500">{pillar.title}</h4>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                </div>
                <p className="text-sm text-text-gray">{pillar.articles} supporting articles</p>
                <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500" style={{ width: `${(pillar.articles / 11) * 100}%` }}></div>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-bold text-white mb-3">Content Hierarchy</h3>
            <div className="text-sm text-text-gray space-y-2 font-mono">
              <div>Hospitality Marketing</div>
              <div className="ml-4">├── Local SEO (11 articles)</div>
              <div className="ml-4">├── Google Business Profile (9 articles)</div>
              <div className="ml-4">├── Experiential Marketing (8 articles)</div>
              <div className="ml-4">├── Content Marketing (9 articles)</div>
              <div className="ml-4">├── Direct Bookings (8 articles)</div>
              <div className="ml-4">├── Hotel Websites (8 articles)</div>
              <div className="ml-4">├── AI for Hotels (7 articles)</div>
              <div className="ml-4">└── Case Studies (6 articles)</div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Tab */}
      {activeTab === 'articles' && (
        <>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Create New Blog Post</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-white mb-2 block">Title *</Label>
              <Input
                placeholder="Post title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Slug (URL)</Label>
              <Input
                placeholder="post-url-slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Excerpt</Label>
              <textarea
                placeholder="Brief summary (160 chars for SEO)"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-20"
              />
              <span className="text-xs text-text-gray">{formData.excerpt.length}/160</span>
            </div>
            <div>
              <Label className="text-white mb-2 block">Content</Label>
              <textarea
                placeholder="Post content (supports markdown)"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-40"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Meta Description</Label>
              <textarea
                placeholder="SEO meta description (160 chars)"
                value={formData.metaDesc}
                onChange={(e) => setFormData({ ...formData, metaDesc: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-20"
              />
              <span className="text-xs text-text-gray">{formData.metaDesc.length}/160</span>
            </div>
            <div>
              <Label className="text-white mb-2 block">Keywords</Label>
              <Input
                placeholder="seo, keywords, separated by commas"
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div className="flex gap-4">
              <Button onClick={handleAddPost} className="bg-orange-500 hover:bg-orange-600 text-white">
                Save as Draft
              </Button>
              <Button
                onClick={() => setShowForm(false)}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-3">
        {posts.length === 0 ? (
          <div className="text-center py-12 text-text-gray">No blog posts yet. Create your first post!</div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">{post.title}</h3>
                <p className="text-sm text-text-gray">
                  {post.slug} • {post.date} • <span className={post.status === 'published' ? 'text-green-400' : 'text-yellow-400'}>{post.status}</span>
                </p>
              </div>
              <div className="flex gap-2">
                {post.status === 'draft' && (
                  <Button
                    onClick={() => handlePublish(post.id)}
                    className="bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm"
                  >
                    Publish
                  </Button>
                )}
                <Button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
        </>
      )}
    </div>
  )
}
