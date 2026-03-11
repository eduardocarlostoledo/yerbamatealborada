import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Values from './pages/Values'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'

export default function App() {
  return (
    <Router>
      <div className="app">
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
      </div>
    </Router>
  )
}
