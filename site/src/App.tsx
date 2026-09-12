import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header, RouteEffects } from './components'
import { ChatWidget, ScrollProgress, WhatsAppButton } from './widgets'
import Home from './pages/Home'
import About from './pages/About'
import Inn from './pages/Inn'
import Spa from './pages/Spa'
import Healthcare from './pages/Healthcare'
import Meditation from './pages/Meditation'
import Explore from './pages/Explore'
import Contact from './pages/Contact'

// ponytail: all pages in one bundle (~text only); split with React.lazy if it grows past ~150 kB.
const withHero = ['/', '/about', '/inn', '/spa', '/healthcare', '/meditation', '/explore']

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <RouteEffects />
      <Header overImage={withHero.includes(pathname)} />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inn" element={<Inn />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="wrap notfound">
                <h1>This page isn’t here.</h1>
                <p>
                  It may have moved when the site was rebuilt. <Link className="text-link" to="/">Return to the home page</Link>
                </p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ScrollProgress />
      <WhatsAppButton />
      <ChatWidget />
    </>
  )
}
