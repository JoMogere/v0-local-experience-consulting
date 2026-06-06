import { getBlogPosts } from '@/app/actions/blog'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

export default async function AdminBlogPage() {
  const posts = await getBlogPosts()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="px-4 py-2 bg-gold text-navy-deep font-bold rounded hover:bg-gold-light transition-colors"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">No blog posts yet. Create your first post to get started.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{post.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{post.category || '—'}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </td>
                  <td className="px-6 py-4 text-right text-sm">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="text-gold hover:text-gold-dark mr-4"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
