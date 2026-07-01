'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function BlogManagement() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hotel Local SEO Guide', slug: 'hotel-local-seo-guide', status: 'published', date: '2024-01-15' },
    { id: 2, title: 'Direct Booking Strategy', slug: 'direct-booking-strategy', status: 'draft', date: '2024-01-10' },
  ])
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
      const newPost = {
        id: Math.max(...posts.map(p => p.id), 0) + 1,
        title: formData.title,
        slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
      }
      setPosts([newPost, ...posts])
      setFormData({ title: '', slug: '', content: '', excerpt: '', metaDesc: '', keywords: '' })
      setShowForm(false)
    }
  }

  const handlePublish = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, status: 'published' } : p))
  }

  const handleDelete = (id: number) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Blog Posts</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + New Post
        </Button>
      </div>

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
    </div>
  )
}
