import React, { useEffect, useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Products from './pages/Products'
import Values from './pages/Values'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import SceneLoader from './three/Loader.js'
import { initRevealAnimations } from './hooks/useInView'

function AppContent() {
  const location = useLocation()
  const [loaderProgress, setLoaderProgress] = useState(0)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    const loader = new SceneLoader(
      (pct) => setLoaderProgress(pct),
      () => {}
    )
    loader.simulateLoad()
  }, [])

  const handleLoaderHidden = useCallback(() => {
    setLoaderVisible(false)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      initRevealAnimations()

      if (location.hash) {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        window.scrollTo(0, 0)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <>
      <CustomCursor />
      {loaderVisible && (
        <Loader
          progress={loaderProgress}
          visible={loaderVisible}
          onHidden={handleLoaderHidden}
        />
      )}
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/values" element={<Values />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Blog />} />
          <Route path="/post/:slug" element={<PostDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  )
}
