import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Values from './pages/Values'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import { initRevealAnimations } from './hooks/useInView'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    // Inicializar animaciones de reveal cuando hay cambios de ruta
    const timer = setTimeout(() => {
      initRevealAnimations()
      // Scroll al top cuando cambia de página
      window.scrollTo(0, 0)
    }, 100)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
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
