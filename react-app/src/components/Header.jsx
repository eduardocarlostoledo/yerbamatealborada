import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Manejador para links internos con hash
  const handleHashNavigation = (hash) => {
    closeMobileMenu()
    
    // Si no estamos en la home, navega a home con el hash
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      // Si estamos en home, simple scroll al elemento
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <img src="/img/logo-alborada-corto.jpg" alt="Yerba Mate Alborada" />
        <span>Alborada</span>
      </a>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a 
            href="#solution"
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#solution')
            }}
          >
            Producto
          </a>
        </li>
        <li>
          <a 
            href="#benefits"
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#benefits')
            }}
          >
            Beneficios
          </a>
        </li>
        <li>
          <a 
            href="#resellers"
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#resellers')
            }}
          >
            Revendedores
          </a>
        </li>
        <li>
          <a 
            href="#faq"
            onClick={(e) => {
              e.preventDefault()
              handleHashNavigation('#faq')
            }}
          >
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
