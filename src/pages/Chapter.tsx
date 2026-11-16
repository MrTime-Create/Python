import { useEffect, useState } from 'react'
import { loadChapter } from '../data/chapters'
import MarkdownView from '../components/MarkdownView'

type Props = { slug: string }

export default function Chapter({ slug }: Props) {
  const [content, setContent] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setContent('')
    setError(null)
    loadChapter(slug)
      .then((md) => {
        if (cancelled) return
        setContent(md)
      })
      .catch((e) => {
        if (!cancelled) setError(String(e))
      })
    return () => { cancelled = true }
  }, [slug])

  if (error) return <div className="card">ไม่พบบทเรียน: {error}</div>
  if (!content) return <div className="card">กำลังโหลด...</div>

  return (
    <div>
      <MarkdownView content={content} />
      <div style={{ marginTop: 24, display: 'flex', gap: 8 }}>
        <a href="#/playground" className="btn">🧪 ทดสอบโค้ด</a>
      </div>
    </div>
  )
}
