// Turn blog content (Markdown) into plain text, e.g. for Google descriptions.
export function plainText(markdown: string, maxLength = 155) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > maxLength ? text.slice(0, maxLength - 1).trimEnd() + '…' : text
}

// The first image used in an article's markdown, used as its cover on the blog list.
export function firstImage(markdown: string): string | undefined {
  const md = markdown.match(/!\[[^\]]*\]\(\s*<?([^)\s>]+)/)
  if (md) return md[1]
  const html = markdown.match(/<img[^>]+src=["']([^"']+)["']/i)
  return html ? html[1] : undefined
}
