'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ServicesManagement() {
  const [services, setServices] = useState([
    { id: 1, title: 'Growth Partnership Retainer', description: 'Long-term partnership for consistent growth' },
    { id: 2, title: 'Hotel Local SEO', description: 'Help your hotel appear first in local search' },
    { id: 3, title: 'Direct Booking & Distribution Audit', description: 'Identify booking leaks and increase revenue' },
    { id: 4, title: 'Guest Experience Optimization', description: 'Improve full guest journey and get 5-star reviews' },
  ])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    details: '',
    price: '',
    metaDesc: '',
    keywords: '',
  })

  const handleAddService = () => {
    if (formData.title) {
      const newService = {
        id: Math.max(...services.map(s => s.id), 0) + 1,
        title: formData.title,
        description: formData.description,
      }
      setServices([...services, newService])
      setFormData({ title: '', description: '', details: '', price: '', metaDesc: '', keywords: '' })
      setShowForm(false)
    }
  }

  const handleDelete = (id: number) => {
    setServices(services.filter(s => s.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Services</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + New Service
        </Button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Create New Service</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-white mb-2 block">Service Title *</Label>
              <Input
                placeholder="e.g., Growth Partnership Retainer"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
              <Label className="text-white mb-2 block">Detailed Description</Label>
              <textarea
                placeholder="Full service details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-32"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Price/Investment</Label>
              <Input
                placeholder="e.g., Custom Quote or $2,000/month"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">Meta Description (SEO)</Label>
              <textarea
                placeholder="160 char description for search engines"
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
              <Button onClick={handleAddService} className="bg-orange-500 hover:bg-orange-600 text-white">
                Save Service
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

      {/* Services List */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.length === 0 ? (
          <div className="text-center py-12 text-text-gray col-span-2">No services yet. Create your first service!</div>
        ) : (
          services.map((service) => (
            <div key={service.id} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-text-gray mb-4">{service.description}</p>
              <Button
                onClick={() => handleDelete(service.id)}
                className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
