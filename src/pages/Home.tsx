import { useEffect, useState } from 'react'
import { getChapterSlugs, loadChapter, parseTitle } from '../data/chapters'

export default function Home() {
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

  return (
    <div>
      <h1>🐍 สอน Python ครบทุกบท</h1>
      <p style={{ color: 'var(--fg-muted)' }}>
        เรียน Python ตั้งแต่พื้นฐานจนถึงขั้นสูง พร้อมตัวอย่างโค้ดและที่ทดสอบโค้ด (Playground) ได้ทันทีในเบราว์เซอร์
      </p>
      <div className="card">
        <h3>🧪 ทดสอบโค้ด</h3>
        <p>เขียนและรันโค้ด Python ได้ทันทีในเบราว์เซอร์ ไม่ต้องติดตั้งอะไร</p>
        <a href="#/playground" className="btn">เปิด Playground</a>
      </div>
      <h2>📚 บทเรียน</h2>
      <div className="home-grid">
        {chapters.map((c, i) => (
          <a key={c.slug} href={`#/chapter/${c.slug}`} className="chapter-card">
            <div style={{ color: 'var(--fg-muted)', fontSize: 12 }}>บทที่ {i + 1}</div>
            <div style={{ fontWeight: 600, marginTop: 4 }}>{c.title}</div>
          </a>
        ))}
      </div>
    </div>
  )
}
