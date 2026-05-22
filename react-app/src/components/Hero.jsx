import React from 'react'
import '../css/components/hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div>
        <div className="hero-badge">Origen Misiones · Con Palo · 100% Natural</div>
        <h1 className="hero-title">
          El mate que te<br />
          <em>despierta el alma</em>
        </h1>
        <p className="hero-sub">
          Yerba Mate Alborada: elaborada con palo de origen Misiones, sabor meticulosamente diseñado para el deleite del consumidor. Para quienes empiezan el día desde el amor, la unión y el compartir.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/543765042085?text=Hola%2C%20quiero%20pedir%20Yerba%20Mate%20Alborada"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir ahora por WhatsApp
          </a>
          <a href="/#solution" className="btn-ghost">
            Conocer el producto
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Origen Misiones</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">Con Palo</span>
            <span className="stat-label">Sabor auténtico</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">★ 5/5</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img
          src="/img/flyer.jpeg"
          alt="Yerba Mate Alborada producto principal"
        />
        <svg
          className="hero-leaf hero-leaf-1"
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0 C80 40, 100 80, 50 200 C0 80, 20 40, 50 0Z" fill="#4a8a52" />
        </svg>
        <svg
          className="hero-leaf hero-leaf-2"
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0 C80 40, 100 80, 50 200 C0 80, 20 40, 50 0Z" fill="#c8921a" />
        </svg>
      </div>
    </section>
  )
}
