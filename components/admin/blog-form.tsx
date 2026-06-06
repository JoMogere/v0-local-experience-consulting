'use client'

import { useState } from 'react'
import { createBlogPost, updateBlogPost } from '@/app/actions/blog'

interface BlogFormProps {
  post?: {
    id: number
    title: string
    slug: string
    excerpt?: string
    content: string
    image?: string
    category?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published: boolean
  }
  onSuccess?: () => void
}

export function BlogForm({ post, onSuccess }: BlogFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      title: formData.get('title') as string,
      slug: formData.get('slug') as string,
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      image: formData.get('image') as string,
      category: formData.get('category') as string,
      metaTitle: formData.get('metaTitle') as string,
      metaDescription: formData.get('metaDescription') as string,
      metaKeywords: formData.get('metaKeywords') as string,
      published: formData.get('published') === 'on',
    }

    try {
      if (post?.id) {
        await updateBlogPost(post.id, data)
      } else {
        await createBlogPost(data)
      }
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && <div className="p-4 bg-red-900/20 border border-red-500 text-red-300 rounded">{error}</div>}

      <div>
        <label className="block text-sm font-medium mb-2">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={post?.title}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slug</label>
        <input
          type="text"
          name="slug"
          defaultValue={post?.slug}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Category</label>
        <input
          type="text"
          name="category"
          defaultValue={post?.category || ''}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Excerpt</label>
        <textarea
          name="excerpt"
          defaultValue={post?.excerpt || ''}
          rows={2}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <textarea
          name="content"
          defaultValue={post?.content}
          required
          rows={8}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Featured Image URL</label>
        <input
          type="url"
          name="image"
          defaultValue={post?.image || ''}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SEO Metadata</h3>
        
        <div>
          <label className="block text-sm font-medium mb-2">Meta Title</label>
          <input
            type="text"
            name="metaTitle"
            defaultValue={post?.metaTitle || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Description</label>
          <textarea
            name="metaDescription"
            defaultValue={post?.metaDescription || ''}
            rows={2}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Keywords</label>
          <input
            type="text"
            name="metaKeywords"
            defaultValue={post?.metaKeywords || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={post?.published}
          className="rounded border-white/10"
        />
        <label htmlFor="published" className="text-sm font-medium">
          Published
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-gold text-navy-deep font-bold rounded disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Post'}
      </button>
    </form>
  )
}
