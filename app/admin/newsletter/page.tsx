'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewsletterManagement() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: 'subscriber@example.com', date: '2024-01-15', status: 'active' },
  ])
  const [newsletters, setNewsletters] = useState([
    { id: 1, subject: 'January Hotel Growth Tips', sent: '2024-01-15', subscribers: 1 },
  ])
  const [showNewsletterForm, setShowNewsletterForm] = useState(false)
  const [newsletterData, setNewsletterData] = useState({
    subject: '',
    content: '',
    previewText: '',
  })
  const [showSubscriberForm, setShowSubscriberForm] = useState(false)
  const [subscriberEmail, setSubscriberEmail] = useState('')

  const handleAddNewsletter = () => {
    if (newsletterData.subject) {
      const newNewsletter = {
        id: Math.max(...newsletters.map(n => n.id), 0) + 1,
        subject: newsletterData.subject,
        sent: new Date().toISOString().split('T')[0],
        subscribers: subscribers.length,
      }
      setNewsletters([newNewsletter, ...newsletters])
      setNewsletterData({ subject: '', content: '', previewText: '' })
      setShowNewsletterForm(false)
    }
  }

  const handleAddSubscriber = () => {
    if (subscriberEmail && !subscribers.some(s => s.email === subscriberEmail)) {
      const newSubscriber = {
        id: Math.max(...subscribers.map(s => s.id), 0) + 1,
        email: subscriberEmail,
        date: new Date().toISOString().split('T')[0],
        status: 'active',
      }
      setSubscribers([newSubscriber, ...subscribers])
      setSubscriberEmail('')
      setShowSubscriberForm(false)
    }
  }

  const handleRemoveSubscriber = (id: number) => {
    setSubscribers(subscribers.filter(s => s.id !== id))
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Total Subscribers</div>
          <div className="text-3xl font-bold text-white">{subscribers.length}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Newsletters Sent</div>
          <div className="text-3xl font-bold text-orange-500">{newsletters.length}</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="text-text-gray text-sm font-medium mb-2">Engagement Rate</div>
          <div className="text-3xl font-bold text-green-400">78%</div>
        </div>
      </div>

      {/* Newsletters Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Newsletters</h2>
          <Button
            onClick={() => setShowNewsletterForm(!showNewsletterForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            + Send Newsletter
          </Button>
        </div>

        {showNewsletterForm && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4">Create & Send Newsletter</h3>
            <div className="space-y-4">
              <div>
                <Label className="text-white mb-2 block">Subject Line *</Label>
                <Input
                  placeholder="e.g., February Hotel Growth Tips"
                  value={newsletterData.subject}
                  onChange={(e) => setNewsletterData({ ...newsletterData, subject: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
                />
              </div>
              <div>
                <Label className="text-white mb-2 block">Preview Text</Label>
                <Input
                  placeholder="Short preview shown in inbox (shown before subject)"
                  value={newsletterData.previewText}
                  onChange={(e) => setNewsletterData({ ...newsletterData, previewText: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-text-gray"
                />
              </div>
              <div>
                <Label className="text-white mb-2 block">Newsletter Content *</Label>
                <textarea
                  placeholder="Write your newsletter content here. You can use HTML or plain text."
                  value={newsletterData.content}
                  onChange={(e) => setNewsletterData({ ...newsletterData, content: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-text-gray p-3 rounded-lg h-40"
                />
              </div>
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300">
                This newsletter will be sent to {subscribers.length} subscriber{subscribers.length !== 1 ? 's' : ''}
              </div>
              <div className="flex gap-4">
                <Button onClick={handleAddNewsletter} className="bg-orange-500 hover:bg-orange-600 text-white">
                  Send to All Subscribers
                </Button>
                <Button
                  onClick={() => setShowNewsletterForm(false)}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Newsletters List */}
        <div className="space-y-3">
          {newsletters.length === 0 ? (
            <div className="text-center py-8 text-text-gray">No newsletters sent yet. Send your first newsletter!</div>
          ) : (
            newsletters.map((newsletter) => (
              <div key={newsletter.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white">{newsletter.subject}</h3>
                    <p className="text-sm text-text-gray">
                      Sent on {newsletter.sent} • {newsletter.subscribers} subscribers
                    </p>
                  </div>
                  <Button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm">
                    View Analytics
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Subscribers Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Subscribers</h2>
          <Button
            onClick={() => setShowSubscriberForm(!showSubscriberForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            + Add Subscriber
          </Button>
        </div>

        {showSubscriberForm && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
            <div className="flex gap-4">
              <Input
                placeholder="subscriber@example.com"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-text-gray"
              />
              <Button onClick={handleAddSubscriber} className="bg-orange-500 hover:bg-orange-600 text-white">
                Add
              </Button>
              <Button
                onClick={() => setShowSubscriberForm(false)}
                className="bg-white/10 hover:bg-white/20 text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Subscribers List */}
        <div className="space-y-2">
          {subscribers.length === 0 ? (
            <div className="text-center py-8 text-text-gray">No subscribers yet. Add your first subscriber!</div>
          ) : (
            subscribers.map((subscriber) => (
              <div key={subscriber.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="text-white font-medium">{subscriber.email}</p>
                  <p className="text-sm text-text-gray">Subscribed {subscriber.date}</p>
                </div>
                <Button
                  onClick={() => handleRemoveSubscriber(subscriber.id)}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-400 text-sm"
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
