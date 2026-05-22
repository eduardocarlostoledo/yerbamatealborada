import React from 'react'
import Icon from '../components/Icon'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import HowToPrepare from '../components/HowToPrepare'
import Testimonials from '../components/Testimonials'
import Resellers from '../components/Resellers'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import '../css/pages/home.css'

export default function Home() {
  const benefits = [
    {
      iconType: 'growth',
      title: 'Energía natural',
      text: 'Gracias a su cafeína natural, el mate es una excelente fuente de energía sin los efectos negativos de otras bebidas estimulantes.',
    },
    {
      iconType: 'leaf',
      title: 'Rico en antioxidantes',
      text: 'Ayuda a combatir el envejecimiento celular y fortalece el sistema inmunológico de forma natural.',
    },
    {
      iconType: 'wood',
      title: 'Digestivo',
      text: 'Facilita la digestión y ayuda a mantener un sistema digestivo saludable con cada cebada.',
    },
    {
      iconType: 'heart',
      title: 'Comunión social',
      text: 'El mate es más que una bebida: es un símbolo de unión y de compartir en la cultura argentina y latinoamericana.',
    },
  ];

  return (
    <div className="home-page">
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <HowToPrepare />
      
      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-tag">Por qué tomar mate</span>
          <h2 className="section-title">
            Más que una bebida.<br />Un estilo de vida.
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            La yerba mate de Misiones no solo es deliciosa: también ofrece beneficios reales para tu salud y bienestar.
          </p>
        </div>
        <div className="benefits-grid reveal">
          {benefits.map((benefit, i) => (
            <div key={i} className="benefit-card">
              <Icon type={benefit.iconType} size="lg" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <Resellers />
      <FAQ />
      <CTA />
    </div>
  )
}
