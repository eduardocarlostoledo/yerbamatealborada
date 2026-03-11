import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Grid from '../components/Grid'
import postsData from '../data/posts.json'
import '../css/pages/home.css'

// Datos temporales - Luego migrar a archivo de datos
const products = [
  {
    title: 'Producto Principal',
    text: 'Descripción del producto principal',
    image: '/img/producto-principal.png'
  },
  {
    title: 'Producto 2',
    text: 'Descripción del segundo producto',
    image: '/img/producto-2-principal.png'
  }
]

// Últimos 4 posts del JSON
const recentPosts = postsData.slice(0, 4)

export default function Home() {
  return (
    <div className="home-page">
      <Hero
        image="/img/hero-home.jpg"
        title="Yerba Mate Alborada"
        subtitle="Elaborada con palo de origen Misiones"
      />

      {/* Blurb Section */}
      <section className="blurb-section">
        <div className="container">
          <p className="blurb-text">
            Descubre la autenticidad y calidad de nuestra yerba mate, 
            elaborada con tradición desde Misiones. Cada sorbo es una experiencia única.
          </p>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="products-showcase">
        <div className="container">
          <Grid items={products} columns={2} />
        </div>
      </section>

      {/* Values Preview */}
      <section className="values-preview">
        <div className="container">
          <div className="values-content">
            <h2>Nuestros Valores</h2>
            <p>Tradición, calidad y sabor en cada paquete de yerba mate Alborada.</p>
            <Link to="/values" className="link-button">Conocer más</Link>
          </div>
          <img src="/img/values-hero.jpg" alt="Nuestros valores" />
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="recent-posts">
        <div className="container">
          <h2>Últimas Noticias</h2>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <article key={post.slug} className="post-card">
                <img src={post.image} alt={post.title} />
                <h3>{post.title}</h3>
                <time>{new Date(post.date).toLocaleDateString('es-ES')}</time>
                <Link to={`/post/${post.slug}`} className="read-more">
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
