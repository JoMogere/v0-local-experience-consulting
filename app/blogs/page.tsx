'use client'

import { useState, useEffect } from 'react'
import { getPublishedBlogPosts } from '@/lib/data'
import Link from 'next/link'

export default function BlogsPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPosts(getPublishedBlogPosts())
    setLoading(false)
  }, [])

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Latest Articles</h1>
          <p className="text-xl text-text-gray max-w-2xl">
            Insights and strategies to help your hotel grow
          </p>
        </header>

        {loading ? (
          <p className="text-text-gray">Loading articles...</p>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-500 text-xs font-semibold rounded">
                    {post.keywords.split(',')[0].trim()}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-gray text-sm mb-4 line-clamp-3">
                  {post.excerpt || post.content.substring(0, 150)}...
                </p>
                <div className="flex items-center justify-between text-xs text-text-gray/70">
                  <span>{post.date}</span>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-orange-500 hover:text-orange-400 font-semibold"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-text-gray mb-4">No articles published yet.</p>
            <Link
              href="/admin/blog"
              className="inline-block px-6 py-2 bg-orange-500 text-navy-deep rounded hover:bg-orange-600 transition-colors"
            >
              Create First Article
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
