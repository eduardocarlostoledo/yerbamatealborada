import React from 'react'
import { Link } from 'react-router-dom'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ALBORADA</h3>
          <ul>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/values">Acerca de</Link></li>
            <li><Link to="/post">Blog</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>MÁS INFO</h3>
          <ul>
            <li><a href="#blog">Últimos Posts</a></li>
            <li><a href="#appointment">Agendar Cita</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <ul className="social-links">
            <li>
              <a 
                href="https://wa.me/543765042085" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a 
                href="mailto:alboradayerbamate@gmail.com"
              >
                Email
              </a>
            </li>
            <li>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Google Maps
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Boletín</h3>
          <p>Adherite para recibir noticias en tu correo electrónico</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tu email" 
              required 
            />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Yerba Mate Alborada. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
