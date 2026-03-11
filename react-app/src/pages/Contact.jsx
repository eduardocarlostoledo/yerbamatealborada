import React from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import '../css/pages/contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <Hero
        image="/img/hero-contact.jpg"
        title="Contacto"
        subtitle="¿Preguntas? Nos encantaría escucharte"
      />

      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <img src="/img/logo.png" alt="Alborada Logo" className="contact-logo" />
            
            <div className="contact-entries">
              <div className="contact-entry">
                <label>Email</label>
                <a href="mailto:alboradayerbamate@gmail.com">
                  alboradayerbamate@gmail.com
                </a>
              </div>

              <div className="contact-entry">
                <label>Teléfono / WhatsApp</label>
                <a href="https://wa.me/543765042085" target="_blank" rel="noopener noreferrer">
                  +54 (376) 504-2085
                </a>
              </div>

              <div className="contact-entry">
                <label>Ubicación</label>
                <p>Misiones, Argentina</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Envíanos un Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="additional-contact">
        <div className="container">
          <h2>También puedes encontrarnos en:</h2>
          <div className="social-links">
            <a 
              href="https://wa.me/543765042085" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button whatsapp"
            >
              WhatsApp
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button instagram"
            >
              Instagram
            </a>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-button maps"
            >
              Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
