export type ChapterMeta = {
  slug: string
  order: number
  title: string
  file: string
}

// Vite glob of all chapter markdown files
const modules = import.meta.glob('/chapters/*.md', { query: '?raw', import: 'default' })

export function getChapterSlugs(): string[] {
  return Object.keys(modules)
    .map((p) => p.split('/').pop()!.replace('.md', ''))
    .sort()
}

export async function loadChapter(slug: string): Promise<string> {
  const path = `/chapters/${slug}.md`
  const loader = modules[path]
  if (!loader) throw new Error('Chapter not found: ' + slug)
  return (await loader()) as string
}

export function titleFromSlug(slug: string): string {
  // "01-intro" -> "01. Intro" fallback; real title parsed from md
  return slug
}

export function parseTitle(md: string, slug: string): string {
  const m = md.match(/^#\s+(.+)$/m)
  return m ? m[1] : slug
}
