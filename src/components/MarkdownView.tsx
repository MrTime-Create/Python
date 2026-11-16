import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = { content: string }

export default function MarkdownView({ content }: Props) {
  return (
    <div className="chapter-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            const code = String(children).replace(/\n$/, '')
            const isBlock = !!match || code.includes('\n')
            if (!isBlock) {
              return <code className={className} {...props}>{children}</code>
            }
            const lang = match ? match[1] : ''
            return (
              <div style={{ position: 'relative' }}>
                <pre><code className={className} {...props}>{children}</code></pre>
                {lang === 'python' || lang === '' ? (
                  <button
                    className="btn btn-secondary"
                    style={{ position: 'absolute', top: 8, right: 8, fontSize: 12, padding: '4px 8px' }}
                    onClick={() => {
                      const encoded = encodeURIComponent(code)
                      window.location.hash = `#/playground?code=${encoded}`
                    }}
                  >
                    ▶ Run
                  </button>
                ) : null}
              </div>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
