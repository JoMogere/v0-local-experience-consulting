import { getPublishedBlogPosts } from '@/app/actions/blog'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Local Experience Consulting',
  description: 'Read insights on local search optimization, experiential marketing, and hotel growth strategies for African hospitality.',
  keywords: 'hospitality blog, local search, marketing insights, hotel growth',
}

export default async function BlogPage() {
  let posts = []
  try {
    posts = await getPublishedBlogPosts()
  } catch (error) {
    console.log('[v0] Could not fetch published blog posts', error)
  }

  return (
    <main className="min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
          <p className="text-xl text-text-gray max-w-2xl mx-auto">
            Insights and strategies to help your hospitality business thrive
          </p>
        </header>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image */}
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  {post.category && (
                    <p className="text-gold text-xs font-bold uppercase tracking-wider mb-2">
                      {post.category}
                    </p>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-text-gray text-sm mb-4 line-clamp-3">
                    {post.excerpt || post.content.substring(0, 100)}...
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-text-gray/70">
                    {post.publishedAt && (
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-gold hover:text-gold-light font-bold"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-gray">No blog posts published yet.</p>
          </div>
        )}
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Local Experience Consulting Blog',
            description: 'Insights on hospitality marketing and growth',
            publisher: {
              '@type': 'Organization',
              name: 'Local Experience Consulting',
            },
          }),
        }}
      />
    </main>
  )
}
