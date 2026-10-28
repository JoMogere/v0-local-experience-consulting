import { Metadata } from 'next'
import { getBlogBySlug, getPublishedBlogs } from '@/app/actions/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BlogContent } from '@/components/blog-content'
import { plainText, firstImage } from '@/lib/markdown'
import { BUILTIN_POSTS } from '@/lib/builtin-posts'
import { SITE_URL } from '@/lib/site'

// The admin copy wins; until an article is imported, the built-in copy is shown.
async function loadPost(slug: string) {
  const db = await getBlogBySlug(slug).catch(() => null)
  if (db) {
    if (db.status !== 'published') return null
    return { title: db.title, slug: db.slug, content: db.content, excerpt: db.excerpt, category: db.category, publishedAt: db.publishedAt, updatedAt: db.updatedAt, description: null as string | null }
  }
  const b = BUILTIN_POSTS.find((p) => p.slug === slug)
  if (!b) return null
  return { title: b.title, slug: b.slug, content: b.content, excerpt: b.excerpt, category: b.category, publishedAt: new Date(b.date), updatedAt: new Date(b.date), description: b.description }
}

interface Params {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const post = await loadPost(slug)

  if (!post) {
    notFound()
  }

  return {
    title: `${post.title} | BookedUp Africa`,
    description: post.description || post.excerpt || plainText(post.content),
    keywords: post.category || undefined,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || plainText(post.content),
      type: 'article',
      images: firstImage(post.content) ? [firstImage(post.content) as string] : undefined,
    },
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getPublishedBlogs()
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

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await loadPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen py-16 md:py-24 bg-background pt-32">
      <div className="max-w-3xl mx-auto px-4 md:px-10">
        {/* Back Link */}
        <Link href="/blog" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to All Articles
        </Link>

        {/* Header */}
        <header className="mb-12 mt-6">
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

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-xl text-gold mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Main Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <BlogContent>{post.content}</BlogContent>
        </div>


        {/* CTA */}
        <div className="mt-12 p-8 bg-gold/10 border border-gold/20 rounded-lg text-center">
          <p className="text-lg text-white mb-4">Want to implement these strategies for your property?</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-navy-deep font-bold rounded hover:scale-105 transition-transform"
          >
            Claim My Free Growth Audit →
          </Link>
        </div>

        {/* Browse more */}
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-gold hover:text-gold-light text-sm">
            ← Browse all articles
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
            description: post.excerpt || plainText(post.content),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
            image: (() => { const i = firstImage(post.content); return i ? (i.startsWith('http') ? i : `${SITE_URL}${i}`) : undefined })(),
            author: { '@id': `${SITE_URL}/#founder` },
            publisher: { '@id': `${SITE_URL}/#organization` },
          }),
        }}
      />
    </article>
  )
}
