import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/img/logo.png" alt="Yerba Mate Alborada" />
          </Link>

          <button 
            className="hamburger" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/products" className="nav-link" onClick={closeMobileMenu}>
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/values" className="nav-link" onClick={closeMobileMenu}>
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/post" className="nav-link" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
