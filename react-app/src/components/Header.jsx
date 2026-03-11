import React, { useState } from 'react'
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
    <nav className="nav">
      <a href="#" className="nav-logo">
        <img src="/img/logo-alborada-corto.jpg" alt="Yerba Mate Alborada" />
        <span>Alborada</span>
      </a>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#solution" onClick={closeMobileMenu}>
            Producto
          </a>
        </li>
        <li>
          <a href="#benefits" onClick={closeMobileMenu}>
            Beneficios
          </a>
        </li>
        <li>
          <a href="#resellers" onClick={closeMobileMenu}>
            Revendedores
          </a>
        </li>
        <li>
          <a href="#faq" onClick={closeMobileMenu}>
            Preguntas
          </a>
        </li>
        <li>
          <a href="/post" onClick={closeMobileMenu}>
            Blog
          </a>
        </li>
      </ul>
      <a
        href="https://wa.me/543765042085"
        className="nav-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contactar
      </a>
      <div className="nav-hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
