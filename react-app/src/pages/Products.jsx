import React from 'react'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import Testimonial from '../components/Testimonial'
import '../css/pages/products.css'

const productIntros = [
  {
    title: 'Variedad Premium',
    text: 'Selecta con los mejores orígenes de Misiones',
    image: '/img/product-1.jpg'
  },
  {
    title: 'Proceso Natural',
    text: 'Sin químicos ni aditivos artificiales',
    image: '/img/product-2.jpg'
  },
  {
    title: 'Sabor Auténtico',
    text: 'Tradición en cada sorbo',
    image: '/img/product-3.jpg'
  },
  {
    title: 'Presentación Premium',
    text: 'Empaque diseñado para conservar frescura',
    image: '/img/product-4.jpg'
  }
]

const testimonials = [
  {
    quote: 'La mejor yerba mate que hemos probado. Calidad incomparable.',
    author: 'Cliente Satisfecho 1'
  },
  {
    quote: 'Excelente producto, totalmente recomendado para distribuidores.',
    author: 'Distribuidor'
  },
  {
    quote: 'Sabor auténtico de Misiones en cada paquete.',
    author: 'Revendedor'
  }
]

const pricingPlans = [
  {
    name: 'Representante',
    description: 'Para representantes de ventas',
    benefits: ['Comisión competitiva', 'Material de marketing', 'Soporte dedicado', 'Entrenamiento de producto'],
    cta: 'Contactar'
  },
  {
    name: 'Distribuidor',
    description: 'Para distribuidores mayoristas',
    benefits: ['Precios especiales', 'Términos de pago flexibles', 'Soporte logístico', 'Catálogo exclusivo'],
    cta: 'Contactar'
  },
  {
    name: 'Mayorista',
    description: 'Para compras al por mayor',
    benefits: ['Descuentos por volumen', 'Entregas programadas', 'Consultoría comercial', 'Ofertas especiales'],
    cta: 'Contactar'
  },
  {
    name: 'Revendedor',
    description: 'Para pequeños negocios y emprendedores',
    benefits: ['Precios mayoristas', 'Pedidos mínimos bajos', 'Material de consulta', 'Promociones mensuales'],
    cta: 'Contactar'
  }
]

export default function Products() {
  return (
    <div className="products-page">
      <Hero
        image="/img/hero-products.jpg"
        title="Nuestros Productos"
        subtitle="Yerba Mate de Misiones con calidad premium"
      />

      {/* Intro Grid */}
      <section className="intro-section">
        <div className="container">
          <Grid items={productIntros} columns={4} />
        </div>
      </section>

      {/* Main Description */}
      <section className="description-section">
        <div className="container">
          <h2>Calidad Garantizada</h2>
          <p>
            Nuestra yerba mate es elaborada con los mejores estándares de calidad. 
            Utilizamos métodos tradicionales combinados con tecnología moderna para 
            garantizar un producto excepcional que mantiene todas las propiedades 
            beneficiosas del orígenes de Misiones.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <Testimonial key={index} quote={item.quote} author={item.author} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-section">
        <div className="container">
          <h2>Planes de Asociación</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <ul className="benefits-list">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <a 
                  href="https://wa.me/543765042085" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  {plan.cta} vía WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
