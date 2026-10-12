'use client'

import { useRef, useState } from 'react'
import TurndownService from 'turndown'
import { BlogContent } from '@/components/blog-content'

interface Props {
  value: string
  onChange: (value: string) => void
}

const MAX_DIMENSION = 1600

// Shrink large photos in the browser so they upload quickly and fit the 4 MB limit.
async function prepareImage(file: File): Promise<File> {
  if (file.type === 'image/gif') return file
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_DIMENSION / Math.max(bitmap.width, bitmap.height))
    if (scale === 1 && file.size < 1_000_000) return file
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.85))
    if (!blob) return file
    return new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' })
  } catch {
    return file
  }
}

function htmlToMarkdown(html: string) {
  let droppedImages = 0
  const td = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  })

  // Word and Google Docs mark bold/italic with inline styles on <span>.
  td.addRule('styledSpans', {
    filter: (node) => node.nodeName === 'SPAN' && !!(node as HTMLElement).getAttribute('style'),
    replacement: (content, node) => {
      const style = ((node as HTMLElement).getAttribute('style') || '').toLowerCase()
      const bold = /font-weight:\s*(bold|[6-9]00)/.test(style)
      const italic = /font-style:\s*italic/.test(style)
      if (!content.trim()) return content
      let out = content
      if (bold) out = `**${out.trim()}** `
      if (italic) out = `*${out.trim()}* `
      return out
    },
  })
  // Images pasted from a document can't be carried over (they are not web addresses); count them instead.
  td.addRule('dropImages', {
    filter: 'img',
    replacement: () => {
      droppedImages += 1
      return ''
    },
  })
  // Google Docs wraps everything in a <b> that is not really bold.
  td.addRule('docsWrapper', {
    filter: (node) =>
      node.nodeName === 'B' && ((node as HTMLElement).id || '').startsWith('docs-internal-guid'),
    replacement: (content) => content,
  })

  const markdown = td.turndown(html).replace(/\n{3,}/g, '\n\n').trim()
  return { markdown, droppedImages }
}

export function MarkdownEditor({ value, onChange }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef(value)
  valueRef.current = value

  const [tab, setTab] = useState<'write' | 'preview'>('write')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ type: 'error' | 'info'; text: string } | null>(null)

  const replaceRange = (start: number, end: number, text: string, selStart?: number, selEnd?: number) => {
    const current = valueRef.current
    onChange(current.slice(0, start) + text + current.slice(end))
    requestAnimationFrame(() => {
      const ta = textareaRef.current
      if (!ta) return
      ta.focus()
      ta.setSelectionRange(selStart ?? start + text.length, selEnd ?? start + text.length)
    })
  }

  const selection = () => {
    const ta = textareaRef.current
    return { start: ta?.selectionStart ?? valueRef.current.length, end: ta?.selectionEnd ?? valueRef.current.length }
  }

  const wrap = (before: string, after: string, placeholder: string) => {
    const { start, end } = selection()
    const selected = valueRef.current.slice(start, end) || placeholder
    replaceRange(start, end, before + selected + after, start + before.length, start + before.length + selected.length)
  }

  const prefixLines = (prefix: string, numbered = false) => {
    const current = valueRef.current
    const { start, end } = selection()
    const lineStart = current.lastIndexOf('\n', start - 1) + 1
    const block = current.slice(lineStart, end) || ''
    const lines = (block || 'Text').split('\n')
    const out = lines.map((l, i) => (numbered ? `${i + 1}. ` : prefix) + l.replace(/^(#{1,6}\s+|[-*]\s+|\d+\.\s+|>\s*)/, '')).join('\n')
    replaceRange(lineStart, end, out)
  }

  const addLink = () => {
    const url = window.prompt('Paste the web address (https://...)')
    if (!url) return
    wrap('[', `](${url.trim()})`, 'link text')
  }

  const uploadAndInsert = async (files: File[]) => {
    setBusy(true)
    setMessage(null)
    try {
      for (const original of files) {
        const file = await prepareImage(original)
        const form = new FormData()
        form.append('file', file)
        const res = await fetch('/api/upload', { method: 'POST', body: form })
        const data = await res.json().catch(() => ({}))
        if (!res.ok || !data.url) throw new Error(data.error || 'Upload failed')
        const { start, end } = selection()
        const current = valueRef.current
        const before = start > 0 && !current.slice(0, start).endsWith('\n\n') ? (current.slice(0, start).endsWith('\n') ? '\n' : '\n\n') : ''
        replaceRange(start, end, `${before}![](${data.url})\n\n`)
        await new Promise((r) => setTimeout(r, 30))
      }
      setMessage({ type: 'info', text: 'Image added. Type a description between the [ ] to show a caption and help Google.' })
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Upload failed' })
    } finally {
      setBusy(false)
    }
  }

  const onPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const images = Array.from(e.clipboardData.files).filter((f) => f.type.startsWith('image/'))
    if (images.length > 0) {
      e.preventDefault()
      void uploadAndInsert(images)
      return
    }
    const html = e.clipboardData.getData('text/html')
    if (html && /<(h[1-6]|ul|ol|li|strong|b|em|a|table|img|span)\b/i.test(html)) {
      e.preventDefault()
      const { markdown, droppedImages } = htmlToMarkdown(html)
      const { start, end } = selection()
      replaceRange(start, end, markdown)
      setMessage(
        droppedImages > 0
          ? {
              type: 'info',
              text: `Headings, bold text, lists and links were kept. ${droppedImages} image${droppedImages > 1 ? 's' : ''} from the document can't be pasted this way: click "Add image" to upload ${droppedImages > 1 ? 'them' : 'it'}.`,
            }
          : { type: 'info', text: 'Pasted with headings, bold text, lists and links kept.' }
      )
    }
  }

  const btn =
    'px-3 py-1.5 text-sm rounded bg-white/10 hover:bg-white/20 text-white disabled:opacity-50 transition-colors'

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <div className="flex rounded overflow-hidden border border-white/20 mr-2">
          <button
            type="button"
            onClick={() => setTab('write')}
            className={`px-3 py-1.5 text-sm ${tab === 'write' ? 'bg-orange-500 text-white' : 'bg-white/5 text-text-gray'}`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setTab('preview')}
            className={`px-3 py-1.5 text-sm ${tab === 'preview' ? 'bg-orange-500 text-white' : 'bg-white/5 text-text-gray'}`}
          >
            Preview
          </button>
        </div>
        {tab === 'write' && (
          <>
            <button type="button" className={btn} onClick={() => prefixLines('## ')} title="Big heading">H2</button>
            <button type="button" className={btn} onClick={() => prefixLines('### ')} title="Smaller heading">H3</button>
            <button type="button" className={`${btn} font-bold`} onClick={() => wrap('**', '**', 'bold text')} title="Bold">B</button>
            <button type="button" className={`${btn} italic`} onClick={() => wrap('*', '*', 'italic text')} title="Italic">I</button>
            <button type="button" className={btn} onClick={addLink} title="Link">Link</button>
            <button type="button" className={btn} onClick={() => prefixLines('- ')} title="Bullet list">• List</button>
            <button type="button" className={btn} onClick={() => prefixLines('', true)} title="Numbered list">1. List</button>
            <button type="button" className={btn} onClick={() => prefixLines('> ')} title="Quote">Quote</button>
            <button type="button" className={`${btn} bg-orange-500/30 hover:bg-orange-500/40`} onClick={() => fileRef.current?.click()} disabled={busy}>
              {busy ? 'Uploading…' : 'Add image'}
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files || [])
                e.target.value = ''
                if (files.length) void uploadAndInsert(files)
              }}
            />
          </>
        )}
      </div>

      {message && (
        <div
          className={`mb-2 p-3 rounded text-sm border ${
            message.type === 'error'
              ? 'bg-red-900/20 border-red-500 text-red-300'
              : 'bg-blue-900/20 border-blue-500/50 text-blue-200'
          }`}
        >
          {message.text}
        </div>
      )}

      {tab === 'write' ? (
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onPaste={onPaste}
          onDrop={(e) => {
            const images = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/'))
            if (images.length) {
              e.preventDefault()
              void uploadAndInsert(images)
            }
          }}
          rows={18}
          className="w-full bg-white/10 border border-white/20 rounded text-white p-3 font-mono text-sm leading-relaxed"
          placeholder={'Write or paste your article here.\n\nUse the buttons above for headings, bold text, lists, links and images.'}
        />
      ) : (
        <div className="bg-navy-deep border border-white/20 rounded p-6 min-h-[18rem]">
          {value.trim() ? <BlogContent>{value}</BlogContent> : <p className="text-text-gray">Nothing to preview yet.</p>}
        </div>
      )}

      <p className="text-xs text-text-gray mt-2">
        Paste from Word or Google Docs: headings, bold, lists and links are kept. Paste a screenshot or drag an image in, or use "Add image", to upload pictures. A blank line starts a new paragraph.
      </p>
    </div>
  )
}
