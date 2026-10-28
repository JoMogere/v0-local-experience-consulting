import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'

// Renders blog content written in Markdown (headings, bold, lists, links,
// images, quotes, tables). Raw HTML is not rendered, so content stays safe.
function textOf(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (node && typeof node === 'object' && 'props' in node) return textOf((node as { props: { children?: React.ReactNode } }).props.children)
  return ''
}

// Same rule the contents lists use, so "#what-is-it" style links jump to the heading.
function anchor(children: React.ReactNode) {
  return textOf(children).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function BlogContent({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      components={{
        h1: ({ children }) => <h2 id={anchor(children)} className="text-3xl font-bold text-white mt-12 mb-4">{children}</h2>,
        h2: ({ children }) => <h2 id={anchor(children)} className="text-3xl font-bold text-white mt-12 mb-4">{children}</h2>,
        h3: ({ children }) => <h3 id={anchor(children)} className="text-2xl font-semibold text-white mt-10 mb-3">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-semibold text-white mt-8 mb-2">{children}</h4>,
        p: ({ children }) => <p className="text-lg text-white/90 leading-relaxed mb-5">{children}</p>,
        ul: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-5 text-lg text-white/90">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-5 text-lg text-white/90">{children}</ol>,
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        a: ({ href, children }) => {
          const external = !!href && /^https?:\/\//.test(href)
          return (
            <a
              href={href}
              className="text-gold hover:text-gold-light underline underline-offset-2"
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {children}
            </a>
          )
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gold pl-4 italic text-white/80 my-6">{children}</blockquote>
        ),
        hr: () => <hr className="border-white/10 my-10" />,
        img: ({ src, alt }) => (
          <span className="block my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={typeof src === 'string' ? src : undefined}
              alt={alt || ''}
              loading="lazy"
              className="w-full h-auto rounded-lg border border-white/10"
            />
            {alt ? <span className="block text-sm text-text-gray text-center mt-2">{alt}</span> : null}
          </span>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse text-white/90">{children}</table>
          </div>
        ),
        th: ({ children }) => <th className="border border-white/20 bg-white/5 px-3 py-2 font-semibold">{children}</th>,
        td: ({ children }) => <td className="border border-white/10 px-3 py-2">{children}</td>,
        code: ({ children }) => <code className="bg-white/10 rounded px-1.5 py-0.5 text-sm">{children}</code>,
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
