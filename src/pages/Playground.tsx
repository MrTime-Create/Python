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
  }
}

export default function Playground({ initialCode }: Props) {
  const [tab, setTab] = useState<'onecompiler' | 'pyodide'>('onecompiler')
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
        เลือกโหมดทดสอบโค้ด: OneCompiler (ออนไลน์, ฟีเจอร์ครบ) หรือ Pyodide (ออฟไลน์ในเบราว์เซอร์)
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button className={`btn ${tab === 'onecompiler' ? '' : 'btn-secondary'}`} onClick={() => setTab('onecompiler')}>
          OneCompiler (ออนไลน์)
        </button>
        <button className={`btn ${tab === 'pyodide' ? '' : 'btn-secondary'}`} onClick={() => setTab('pyodide')}>
          Pyodide (ออฟไลน์)
        </button>
      </div>

      {tab === 'onecompiler' && (
        <div>
          <iframe
            src="https://onecompiler.com/embed/python?theme=dark&hideLanguageSelection=true"
            width="100%"
            height="600px"
            frameBorder="0"
            title="OneCompiler Python"
            style={{ border: '1px solid var(--border)', borderRadius: 8 }}
          />
          <p style={{ color: 'var(--fg-muted)', fontSize: 12, marginTop: 8 }}>
            Powered by OneCompiler — รันโค้ด Python ได้ทันที พร้อม stdin/result
          </p>
        </div>
      )}

      {tab === 'pyodide' && (
        <div>
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
          <div className={`output ${error ? 'error' : ''}`}>{loading ? 'กำลังโหลด Python runtime...' : output}</div>
        </div>
      )}
    </div>
  )
}
