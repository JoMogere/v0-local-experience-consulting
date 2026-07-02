'use client'

import { useState, useEffect } from 'react'
import { getVideos, createVideoFromUrl, deleteVideo } from '@/app/actions/videos'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function VideoManagement() {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    youtubeUrl: '',
    description: '',
    category: '',
  })

  useEffect(() => {
    loadVideos()
  }, [])

  const loadVideos = async () => {
    try {
      const data = await getVideos()
      setVideos(data)
    } catch (error) {
      console.error('Failed to load videos:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddVideo = async () => {
    if (!formData.title || !formData.youtubeUrl) return

    try {
      await createVideoFromUrl(formData)
      setFormData({ title: '', youtubeUrl: '', description: '', category: '' })
      setShowForm(false)
      loadVideos()
    } catch (error) {
      console.error('Failed to add video:', error)
      alert('Invalid YouTube URL or video could not be added')
    }
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await deleteVideo(id)
        loadVideos()
      } catch (error) {
        console.error('Failed to delete video:', error)
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">YouTube Videos</h2>
        <Button
          onClick={() => {
            setFormData({ title: '', youtubeUrl: '', description: '', category: '' })
            setShowForm(!showForm)
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          + Add Video
        </Button>
      </div>

      {showForm && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">Add YouTube Video</h3>

          <div className="space-y-4">
            <div>
              <Label className="text-white">Video Title</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Hotel SEO Tips"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">YouTube URL</Label>
              <Input
                value={formData.youtubeUrl}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                placeholder="https://youtube.com/watch?v=..."
                className="bg-white/10 border-white/20"
              />
              <p className="text-xs text-text-gray mt-1">
                Paste full YouTube URL (youtube.com, youtu.be, or embed links)
              </p>
            </div>

            <div>
              <Label className="text-white">Description (Optional)</Label>
              <Input
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div>
              <Label className="text-white">Category (Optional)</Label>
              <Input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Tutorial, Interview"
                className="bg-white/10 border-white/20"
              />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleAddVideo}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Add Video
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

      {loading ? (
        <p className="text-text-gray">Loading...</p>
      ) : videos.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              {video.thumbnail && (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">{video.title}</h3>
                {video.description && (
                  <p className="text-sm text-text-gray mb-2">{video.description}</p>
                )}
                {video.category && (
                  <p className="text-xs text-text-gray mb-3">{video.category}</p>
                )}
                <Button
                  onClick={() => handleDelete(video.id)}
                  className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400"
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
          <p className="text-text-gray">No videos yet. Add your first YouTube video!</p>
        </div>
      )}
    </div>
  )
}
