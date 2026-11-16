import { useEffect, useState } from 'react'
import { getChapterSlugs, loadChapter, parseTitle } from '../data/chapters'

type SidebarProps = { current: any }

export default function Sidebar({ current }: SidebarProps) {
  const [chapters, setChapters] = useState<{ slug: string; title: string }[]>([])

  useEffect(() => {
    let cancelled = false
    async function load() {
      const slugs = getChapterSlugs()
      const items = await Promise.all(
        slugs.map(async (slug) => {
          const md = await loadChapter(slug)
          return { slug, title: parseTitle(md, slug) }
        }),
      )
      if (!cancelled) setChapters(items)
    }
    load()
    return () => { cancelled = true }
  }, [])

  const activeSlug = current.page === 'chapter' ? current.slug : null

  return (
    <aside className="sidebar">
      <h2 style={{ marginTop: 0 }}>🐍 Python สอน</h2>
      <nav>
        <ul className="chapter-list">
          <li>
            <a href="#/" className={current.page === 'home' ? 'active' : ''}>🏠 หน้าแรก</a>
          </li>
          {chapters.map((c) => (
            <li key={c.slug}>
              <a href={`#/chapter/${c.slug}`} className={activeSlug === c.slug ? 'active' : ''}>
                {c.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#/playground" className={current.page === 'playground' ? 'active' : ''}>🧪 ทดสอบโค้ด</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
