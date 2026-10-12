'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  getBlogs,
  createBlog,
  updateBlog,
  setBlogStatus,
  deleteBlog,
  type BlogStatus,
} from '@/app/actions/blogs'
import { slugify } from '@/lib/slug'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MarkdownEditor } from '@/components/admin/markdown-editor'

type Blog = Awaited<ReturnType<typeof getBlogs>>[number]

const EMPTY_FORM = { title: '', slug: '', content: '', excerpt: '', category: '' }

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [slugTouched, setSlugTouched] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [formData, setFormData] = useState(EMPTY_FORM)

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async () => {
    try {
      setBlogs(await getBlogs())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingId(null)
    setSlugTouched(false)
    setFormData(EMPTY_FORM)
  }

  const save = async (status: BlogStatus) => {
    setError(null)
    setNotice(null)
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required.')
      return
    }
    setSaving(true)
    try {
      const payload = {
        ...formData,
        slug: formData.slug || slugify(formData.title),
        status,
      }
      if (editingId) {
        await updateBlog(editingId, payload)
      } else {
        await createBlog(payload)
      }
      setNotice(status === 'published' ? 'Article is live.' : 'Draft saved.')
      closeForm()
      await loadBlogs()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save article')
    } finally {
      setSaving(false)
    }
  }

  const toggleStatus = async (blog: Blog) => {
    setError(null)
    setNotice(null)
    try {
      const next: BlogStatus = blog.status === 'published' ? 'draft' : 'published'
      await setBlogStatus(blog.id, next)
      setNotice(next === 'published' ? 'Article is live.' : 'Article moved back to draft.')
      await loadBlogs()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status')
    }
  }

  const handleDelete = async (blog: Blog) => {
    if (!confirm(`Delete "${blog.title}"? This cannot be undone.`)) return
    setError(null)
    setNotice(null)
    try {
      await deleteBlog(blog.id)
      setNotice('Article deleted.')
      await loadBlogs()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete article')
    }
  }

  const handleEdit = (blog: Blog) => {
    setError(null)
    setNotice(null)
    setFormData({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      excerpt: blog.excerpt ?? '',
      category: blog.category ?? '',
    })
    setEditingId(blog.id)
    setSlugTouched(true)
    setShowForm(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const editingBlog = editingId ? blogs.find((b) => b.id === editingId) : null
  const alreadyPublished = editingBlog?.status === 'published'

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Blog Articles</h2>
        <Button
          onClick={() => {
            if (showForm) {
              closeForm()
            } else {
              setFormData(EMPTY_FORM)
              setEditingId(null)
              setSlugTouched(false)
              setShowForm(true)
            }
            setError(null)
            setNotice(null)
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          {showForm ? 'Close' : '+ New Article'}
        </Button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-900/20 border border-red-500 text-red-300 rounded">
          {error}
        </div>
      )}
      {notice && (
        <div className="mb-6 p-4 bg-green-900/20 border border-green-500 text-green-300 rounded">
          {notice}
        </div>
      )}

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
                  const title = e.target.value
                  setFormData((prev) => ({
                    ...prev,
                    title,
                    slug: slugTouched ? prev.slug : slugify(title),
                  }))
                }}
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Slug (the article's web address)</Label>
              <Input
                value={formData.slug}
                onChange={(e) => {
                  setSlugTouched(true)
                  setFormData({ ...formData, slug: e.target.value })
                }}
                className="bg-white/10 border-white/20"
              />
              <p className="text-xs text-text-gray mt-1">
                /blog/{formData.slug || 'your-article'}
              </p>
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
              <Label className="text-white">Excerpt (also used as the Google description)</Label>
              <Input
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="One or two sentences, around 150 characters"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Content</Label>
              <MarkdownEditor
                value={formData.content}
                onChange={(content) => setFormData((prev) => ({ ...prev, content }))}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => save('published')}
                disabled={saving}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                {saving ? 'Saving...' : alreadyPublished ? 'Update (stays live)' : 'Publish now'}
              </Button>
              {!alreadyPublished && (
                <Button
                  onClick={() => save('draft')}
                  disabled={saving}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Save as draft
                </Button>
              )}
              <Button
                onClick={closeForm}
                disabled={saving}
                className="bg-transparent hover:bg-white/10 text-text-gray"
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
              className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col md:flex-row justify-between md:items-start gap-3"
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

              <div className="flex flex-wrap gap-2">
                {blog.status === 'published' && (
                  <Link
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    className="inline-flex items-center px-3 rounded text-sm bg-white/10 hover:bg-white/20 text-white"
                  >
                    View
                  </Link>
                )}
                <Button
                  onClick={() => toggleStatus(blog)}
                  className="bg-green-500/20 hover:bg-green-500/30 text-green-400 text-sm"
                >
                  {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                </Button>
                <Button
                  onClick={() => handleEdit(blog)}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(blog)}
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
