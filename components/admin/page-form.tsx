'use client'

import { useState } from 'react'
import { createPage, updatePage } from '@/app/actions/pages'

interface PageFormProps {
  page?: {
    id: number
    title: string
    slug: string
    content: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published: boolean
  }
  onSuccess?: () => void
}

export function PageForm({ page, onSuccess }: PageFormProps) {
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
      content: formData.get('content') as string,
      metaTitle: formData.get('metaTitle') as string,
      metaDescription: formData.get('metaDescription') as string,
      metaKeywords: formData.get('metaKeywords') as string,
      published: formData.get('published') === 'on',
    }

    try {
      if (page?.id) {
        await updatePage(page.id, data)
      } else {
        await createPage(data)
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
          defaultValue={page?.title}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slug</label>
        <input
          type="text"
          name="slug"
          defaultValue={page?.slug}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <textarea
          name="content"
          defaultValue={page?.content}
          required
          rows={10}
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
            defaultValue={page?.metaTitle || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Description</label>
          <textarea
            name="metaDescription"
            defaultValue={page?.metaDescription || ''}
            rows={2}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Keywords</label>
          <input
            type="text"
            name="metaKeywords"
            defaultValue={page?.metaKeywords || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={page?.published}
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
        {loading ? 'Saving...' : 'Save Page'}
      </button>
    </form>
  )
}
