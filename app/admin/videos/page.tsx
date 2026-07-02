'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getVideos, addVideo, deleteVideo } from '@/lib/data'

export default function VideoManagement() {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    youtubeUrl: '',
    description: '',
  })

  useEffect(() => {
    // Load videos from persistent data
    setVideos(getVideos())
    setLoading(false)
  }, [])

  const extractYoutubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
    return match ? match[1] : ''
  }

  const handleAddVideo = () => {
    if (formData.title && formData.youtubeUrl) {
      const youtubeId = extractYoutubeId(formData.youtubeUrl)
      if (youtubeId) {
        const newVideo = addVideo({
          title: formData.title,
          youtubeId,
          thumbnail: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
          description: formData.description,
          uploadedAt: new Date().toISOString(),
        })
        setVideos(getVideos())
        setFormData({ title: '', youtubeUrl: '', description: '' })
        setShowForm(false)
      }
    }
  }

  const handleDelete = (id: number) => {
    deleteVideo(id)
    setVideos(getVideos())
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Embedded Videos</h2>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + Embed Video
        </Button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Embed YouTube Video</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-white mb-2 block">Video Title *</Label>
              <Input
                placeholder="e.g., How to Increase Direct Bookings"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
            </div>
            <div>
              <Label className="text-white mb-2 block">YouTube URL *</Label>
              <Input
                placeholder="https://youtube.com/watch?v=... or https://youtu.be/..."
                value={formData.youtubeUrl}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
              <span className="text-xs text-text-gray">Paste full YouTube link</span>
            </div>
            <div>
              <Label className="text-white mb-2 block">Description</Label>
              <textarea
                placeholder="Video description (optional)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-20"
              />
            </div>
            <div className="flex gap-4">
              <Button onClick={handleAddVideo} className="bg-orange-500 hover:bg-orange-600 text-white">
                Embed Video
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

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.length === 0 ? (
          <div className="text-center py-12 text-text-gray col-span-3">No videos embedded yet. Add your first video!</div>
        ) : (
          videos.map((video) => (
            <div key={video.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-video bg-black relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white mb-3">{video.title}</h3>
                <Button
                  onClick={() => handleDelete(video.id)}
                  className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
