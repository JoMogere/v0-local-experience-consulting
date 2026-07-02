import { Metadata } from 'next'
import { getBlogBySlug, getPublishedBlogs } from '@/app/actions/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getBlogBySlug(params.slug)

  if (!post || post.status !== 'published') {
    notFound()
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.substring(0, 150),
    keywords: post.category,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || '',
      type: 'article',
      images: post.image ? [{ url: post.image }] : [],
    },
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    // During build, database might not be available
    // Return empty array so the route is generated on-demand
    console.log('[v0] Could not generate static params for blog posts, will generate on-demand')
    return []
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <article className="min-h-screen py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-10">
        {/* Back Link */}
        <Link href="/blog" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-text-gray text-sm">
            {post.category && (
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full">
                {post.category}
              </span>
            )}
            {post.publishedAt && (
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gold mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Main Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-lg text-white/90 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gold/10 border border-gold/20 rounded-lg text-center">
          <p className="text-lg text-white mb-4">Want to implement these strategies?</p>
          <Link
            href="https://calendly.com/mogerejulius41/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded hover:scale-105 transition-transform"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedAt,
            author: {
              '@type': 'Organization',
              name: 'Local Experience Consulting',
            },
          }),
        }}
      />
    </article>
  )
}
