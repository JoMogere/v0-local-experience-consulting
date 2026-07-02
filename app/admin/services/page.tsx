'use client'

import { useState, useEffect } from 'react'
import { getServices, createService, updateService, deleteService } from '@/app/actions/services'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ServicesManagement() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    content: '',
    features: '',
    icon: '',
  })

  useEffect(() => {
    loadServices()
  }, [])

  const loadServices = async () => {
    try {
      const data = await getServices()
      setServices(data)
    } catch (error) {
      console.error('Failed to load services:', error)
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

  const handleAddService = async () => {
    if (!formData.title || !formData.description) return

    try {
      const slug = formData.slug || generateSlug(formData.title)
      if (editingId) {
        await updateService(editingId, { ...formData, slug })
      } else {
        await createService({ ...formData, slug })
      }
      setFormData({ title: '', slug: '', description: '', content: '', features: '', icon: '' })
      setShowForm(false)
      setEditingId(null)
      loadServices()
    } catch (error) {
      console.error('Failed to save service:', error)
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteService(id)
        loadServices()
      } catch (error) {
        console.error('Failed to delete service:', error)
      }
    }
  }

  const handleEdit = (service: any) => {
    setFormData(service)
    setEditingId(service.id)
    setShowForm(true)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Services</h2>
        <Button
          onClick={() => {
            setFormData({ title: '', slug: '', description: '', content: '', features: '', icon: '' })
            setEditingId(null)
            setShowForm(!showForm)
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + New Service
        </Button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">
            {editingId ? 'Edit Service' : 'New Service'}
          </h3>
          <div className="space-y-4">
            <div>
              <Label className="text-white mb-2 block">Service Title *</Label>
              <Input
                placeholder="e.g., Growth Partnership Retainer"
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
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Slug</Label>
              <Input
                placeholder="service-slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Short Description</Label>
              <Input
                placeholder="Brief tagline"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Detailed Content</Label>
              <textarea
                placeholder="Full service details"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-32"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Features</Label>
              <Input
                placeholder="Key features, comma-separated"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Icon</Label>
              <Input
                placeholder="Icon emoji or icon name"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div className="flex gap-4">
              <Button
                onClick={handleAddService}
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
      ) : services.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                {service.icon && <span className="text-3xl">{service.icon}</span>}
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    service.status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {service.status}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-text-gray mb-4">{service.description}</p>
              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(service)}
                  className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-text-gray">No services yet. Create your first service!</div>
      )}
    </div>
  )
}
