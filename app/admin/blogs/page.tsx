'use client'

import { useState, useEffect } from 'react'
import { getBlogs, createBlog, updateBlog, deleteBlog } from '@/app/actions/blogs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
  })

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      const data = await getBlogs()
      setBlogs(data)
    } catch (error) {
      console.error('Failed to load blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
  }

  const handleAddBlog = async () => {
    if (!formData.title || !formData.content) return

    try {
      const slug = formData.slug || generateSlug(formData.title)
      if (editingId) {
        await updateBlog(editingId, { ...formData, slug })
      } else {
        await createBlog({ ...formData, slug })
      }
      setFormData({ title: '', slug: '', content: '', excerpt: '', category: '' })
      setShowForm(false)
      setEditingId(null)
      loadBlogs()
    } catch (error) {
      console.error('Failed to save blog:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteBlog(id)
        loadBlogs()
      } catch (error) {
        console.error('Failed to delete blog:', error)
      }
    }
  }

  const handleEdit = (blog: any) => {
    setFormData(blog)
    setEditingId(blog.id)
    setShowForm(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Blog Articles</h2>
        <Button
          onClick={() => {
            setFormData({ title: '', slug: '', content: '', excerpt: '', category: '' })
            setEditingId(null)
            setShowForm(!showForm)
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + New Article
        </Button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            {editingId ? 'Edit Article' : 'New Article'}
          </h3>

          <div className="space-y-4">
            <div>
              <Label className="text-white">Title</Label>
              <Input
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value })
                  if (!editingId) {
                    setFormData((prev) => ({
                      ...prev,
                      slug: generateSlug(e.target.value),
                    }))
                  }
                }}
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Slug</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Category</Label>
              <Input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Local SEO, Marketing"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Excerpt</Label>
              <Input
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Brief summary"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Content</Label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                className="w-full bg-white/10 border border-white/20 rounded text-white p-3"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAddBlog}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                {editingId ? 'Update' : 'Create'}
              </Button>
              <Button
                onClick={() => {
                  setShowForm(false)
                  setEditingId(null)
                }}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-text-gray">Loading...</p>
      ) : blogs.length > 0 ? (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{blog.title}</h3>
                <p className="text-sm text-text-gray mt-1">
                  {blog.category && <span className="inline-block mr-3">{blog.category}</span>}
                  <span className="inline-block">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </p>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                    blog.status === 'published'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {blog.status === 'published' ? 'Published' : 'Draft'}
                </span>
              </div>

              <div className="flex gap-2 ml-4">
                <Button
                  onClick={() => handleEdit(blog)}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
          <p className="text-text-gray">No articles yet. Create your first one!</p>
        </div>
      )}
    </div>
  )
}
