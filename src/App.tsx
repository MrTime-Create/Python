import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Chapter from './pages/Chapter'
import Playground from './pages/Playground'
import './App.css'

type Route = { page: 'home' } | { page: 'chapter'; slug: string } | { page: 'playground'; code?: string }

function parseHash(): Route {
  const h = window.location.hash.replace(/^#/, '')
  if (!h || h === '/') return { page: 'home' }
  if (h.startsWith('/playground')) {
    const params = new URLSearchParams(h.split('?')[1] || '')
    return { page: 'playground', code: params.get('code') || undefined }
  }
  if (h.startsWith('/chapter/')) {
    return { page: 'chapter', slug: h.replace('/chapter/', '') }
  }
  return { page: 'home' }
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash())

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="layout">
      <Sidebar current={route} />
      <main className="main">
        {route.page === 'home' && <Home />}
        {route.page === 'chapter' && <Chapter slug={route.slug} />}
        {route.page === 'playground' && <Playground initialCode={route.code} />}
      </main>
    </div>
  )
}
