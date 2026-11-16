import { useEffect, useRef, useState } from 'react'

type Props = { initialCode?: string }

const DEFAULT_CODE = `# ทดสอบโค้ด Python ได้ที่นี่
print("สวัสดี Python!")

for i in range(5):
    print("รอบที่", i)
`

declare global {
  interface Window {
    loadPyodide?: (opts: any) => Promise<any>
    pyodideLoaded?: boolean
  }
}

export default function Playground({ initialCode }: Props) {
  const [code, setCode] = useState(initialCode ? decodeURIComponent(initialCode) : DEFAULT_CODE)
  const [output, setOutput] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [running, setRunning] = useState(false)
  const pyodideRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    async function init() {
      if (!window.loadPyodide) {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js'
        document.head.appendChild(script)
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Pyodide'))
        })
      }
      const py = await window.loadPyodide!({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/' })
      if (cancelled) return
      pyodideRef.current = py
      setLoading(false)
    }
    init().catch((e) => {
      if (!cancelled) {
        setOutput('โหลด Pyodide ไม่สำเร็จ: ' + String(e))
        setError(true)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (initialCode) setCode(decodeURIComponent(initialCode))
  }, [initialCode])

  async function run() {
    const py = pyodideRef.current
    if (!py) return
    setRunning(true)
    setOutput('')
    setError(false)
    let buf = ''
    py.setStdout({ batched: (s: string) => { buf += s + '\n' } })
    py.setStderr({ batched: (s: string) => { buf += s + '\n' } })
    try {
      await py.runPythonAsync(code)
      setOutput(buf || '(ไม่มีผลลัพธ์)')
    } catch (e: any) {
      setOutput(buf + '\n' + String(e))
      setError(true)
    } finally {
      setRunning(false)
    }
  }

  return (
    <div>
      <h1>🧪 ทดสอบโค้ด Python</h1>
      <p style={{ color: 'var(--fg-muted)' }}>
        เขียนโค้ด Python แล้วกด Run เพื่อรันในเบราว์เซอร์ (ใช้ Pyodide)
      </p>
      {loading && <div className="card">กำลังโหลด Python runtime...</div>}
      <textarea
        className="code-editor"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
      />
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button className="btn" onClick={run} disabled={loading || running}>
          {running ? 'กำลังรัน...' : '▶ Run'}
        </button>
        <button className="btn btn-secondary" onClick={() => setCode(DEFAULT_CODE)}>รีเซ็ต</button>
      </div>
      <h3 style={{ marginTop: 16 }}>ผลลัพธ์</h3>
      <div className={`output ${error ? 'error' : ''}`}>{output}</div>
    </div>
  )
}
