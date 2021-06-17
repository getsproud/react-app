import React from 'react'

import './layout.scss'

const TopBar = React.lazy(() => import('../TopBar'))
const Navigation = React.lazy(() => import('../Navigation'))

export default function AppLayout({ children, className }) {
  return (
    <div className={`app ${navigator.platform.indexOf('Win') > -1 ? 'platform-win' : ''}`}>
      <TopBar />
      <main className="container is-fluid">
        <Navigation />
        <section className="section">
          <div className="container">
            { children }
          </div>
        </section>
      </main>
    </div>
  )
}
