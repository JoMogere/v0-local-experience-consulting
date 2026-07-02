// In-memory data store (simulates database)
// In production, this would be replaced with actual database

export interface Video {
  id: number
  title: string
  youtubeId: string
  thumbnail: string
  description?: string
  uploadedAt: string
}

export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  metaDesc: string
  keywords: string
  status: 'draft' | 'published'
  date: string
  updatedAt: string
}

export interface Newsletter {
  id: number
  email: string
  subscribedAt: string
  status: 'active' | 'unsubscribed'
}

// Global data store
let videosData: Video[] = [
  {
    id: 1,
    title: 'Hotel Local SEO Tips',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Learn the fundamentals of local SEO for hotels',
    uploadedAt: new Date().toISOString(),
  },
]

let blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'Hotel Local SEO Guide',
    slug: 'hotel-local-seo-guide',
    content: 'Comprehensive guide on optimizing your hotel for local search.',
    excerpt: 'Learn how to dominate local search for your hotel and increase direct bookings.',
    metaDesc: 'Master local SEO for hotels with our comprehensive guide.',
    keywords: 'hotel SEO, local search, direct bookings',
    status: 'published',
    date: '2024-01-15',
    updatedAt: new Date().toISOString(),
  },
]

let newsletterData: Newsletter[] = []

// Video management
export function getVideos(): Video[] {
  return videosData
}

export function addVideo(video: Omit<Video, 'id'>): Video {
  const newVideo: Video = {
    ...video,
    id: Math.max(...videosData.map(v => v.id), 0) + 1,
  }
  videosData.push(newVideo)
  return newVideo
}

export function deleteVideo(id: number): boolean {
  const index = videosData.findIndex(v => v.id === id)
  if (index > -1) {
    videosData.splice(index, 1)
    return true
  }
  return false
}

// Blog post management
export function getBlogPosts(): BlogPost[] {
  return blogPostsData
}

export function getPublishedBlogPosts(): BlogPost[] {
  return blogPostsData.filter(post => post.status === 'published')
}

export function addBlogPost(post: Omit<BlogPost, 'id' | 'updatedAt'>): BlogPost {
  const newPost: BlogPost = {
    ...post,
    id: Math.max(...blogPostsData.map(p => p.id), 0) + 1,
    updatedAt: new Date().toISOString(),
  }
  blogPostsData.push(newPost)
  return newPost
}

export function updateBlogPost(id: number, updates: Partial<BlogPost>): BlogPost | null {
  const index = blogPostsData.findIndex(p => p.id === id)
  if (index > -1) {
    blogPostsData[index] = {
      ...blogPostsData[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    return blogPostsData[index]
  }
  return null
}

export function deleteBlogPost(id: number): boolean {
  const index = blogPostsData.findIndex(p => p.id === id)
  if (index > -1) {
    blogPostsData.splice(index, 1)
    return true
  }
  return false
}

export function publishBlogPost(id: number): BlogPost | null {
  return updateBlogPost(id, { status: 'published' })
}

// Newsletter management
export function getNewsletterSubscribers(): Newsletter[] {
  return newsletterData
}

export function addNewsletterSubscriber(email: string): Newsletter {
  const existing = newsletterData.find(n => n.email === email)
  if (existing) {
    existing.status = 'active'
    existing.subscribedAt = new Date().toISOString()
    return existing
  }

  const newSubscriber: Newsletter = {
    id: Math.max(...newsletterData.map(n => n.id), 0) + 1,
    email,
    subscribedAt: new Date().toISOString(),
    status: 'active',
  }
  newsletterData.push(newSubscriber)
  return newSubscriber
}

export function removeNewsletterSubscriber(email: string): boolean {
  const index = newsletterData.findIndex(n => n.email === email)
  if (index > -1) {
    newsletterData.splice(index, 1)
    return true
  }
  return false
}
