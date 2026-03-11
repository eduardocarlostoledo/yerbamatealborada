import React from 'react'
import '../css/components/hero.css'

export default function Hero({ 
  image, 
  title, 
  subtitle, 
  ctaText = null, 
  ctaLink = null 
}) {
  return (
    <section className="hero">
      <img src={image} alt={title} className="hero-image" />
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {ctaText && ctaLink && (
          <a href={ctaLink} className="cta-button">{ctaText}</a>
        )}
      </div>
    </section>
  )
}
