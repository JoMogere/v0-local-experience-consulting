'use client'

import { useState } from 'react'
import { createService, updateService } from '@/app/actions/services'

interface ServiceFormProps {
  service?: {
    id: number
    title: string
    slug: string
    subtitle?: string
    description: string
    shortDescription?: string
    researchDetails?: any
    implementationDetails?: any
    image?: string
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    published: boolean
  }
  onSuccess?: () => void
}

export function ServiceForm({ service, onSuccess }: ServiceFormProps) {
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
      subtitle: formData.get('subtitle') as string,
      description: formData.get('description') as string,
      shortDescription: formData.get('shortDescription') as string,
      image: formData.get('image') as string,
      metaTitle: formData.get('metaTitle') as string,
      metaDescription: formData.get('metaDescription') as string,
      metaKeywords: formData.get('metaKeywords') as string,
      published: formData.get('published') === 'on',
      researchDetails: {
        items: (formData.get('researchItems') as string)?.split('\n').filter(Boolean) || [],
      },
      implementationDetails: {
        items: (formData.get('implementationItems') as string)?.split('\n').filter(Boolean) || [],
      },
    }

    try {
      if (service?.id) {
        await updateService(service.id, data)
      } else {
        await createService(data)
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
          defaultValue={service?.title}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slug</label>
        <input
          type="text"
          name="slug"
          defaultValue={service?.slug}
          required
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          defaultValue={service?.subtitle || ''}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          defaultValue={service?.description}
          required
          rows={4}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Short Description</label>
        <textarea
          name="shortDescription"
          defaultValue={service?.shortDescription || ''}
          rows={2}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Image URL</label>
        <input
          type="url"
          name="image"
          defaultValue={service?.image || ''}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Research Details (one per line)</label>
        <textarea
          name="researchItems"
          defaultValue={service?.researchDetails?.items?.join('\n') || ''}
          rows={3}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          placeholder="Enter each research item on a new line"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Implementation Details (one per line)</label>
        <textarea
          name="implementationItems"
          defaultValue={service?.implementationDetails?.items?.join('\n') || ''}
          rows={3}
          className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          placeholder="Enter each implementation item on a new line"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SEO Metadata</h3>
        
        <div>
          <label className="block text-sm font-medium mb-2">Meta Title</label>
          <input
            type="text"
            name="metaTitle"
            defaultValue={service?.metaTitle || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Description</label>
          <textarea
            name="metaDescription"
            defaultValue={service?.metaDescription || ''}
            rows={2}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Meta Keywords</label>
          <input
            type="text"
            name="metaKeywords"
            defaultValue={service?.metaKeywords || ''}
            className="w-full px-3 py-2 bg-secondary border border-white/10 rounded text-white"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={service?.published}
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
        {loading ? 'Saving...' : 'Save Service'}
      </button>
    </form>
  )
}
