import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import '../css/pages/blog.css'

const blogPosts = [
  {
    title: 'Beneficios de consumir yerba mate de Misiones',
    slug: 'beneficios-de-consumir-yerba-mate-de-misiones',
    date: '2024-01-15',
    excerpt: 'Descubre los múltiples beneficios para la salud que ofrece la yerba mate.',
    image: '/img/blog-post-1.jpg'
  },
  {
    title: 'Qué es la Yerba Mate',
    slug: 'que-es-la-yerba-mate',
    date: '2024-01-10',
    excerpt: 'Una guía completa sobre el origen, producción y propiedades de la yerba mate.',
    image: '/img/blog-post-2.jpg'
  },
  {
    title: 'Cómo preparar el mate perfecto con Yerba Mate de Misiones',
    slug: 'como-preparar-el-mate-perfecto',
    date: '2024-01-05',
    excerpt: 'Aprende los secretos para preparar un mate perfecto, paso a paso.',
    image: '/img/blog-post-3.jpg'
  },
  {
    title: 'Buscamos representantes, revendedores y distribuidores',
    slug: 'buscamos-representantes-distribuidores',
    date: '2024-01-01',
    excerpt: 'Únete a nuestro equipo y sé parte de la experiencia Alborada.',
    image: '/img/blog-post-4.jpg'
  },
  {
    title: 'Brewing with Chemex',
    slug: 'brewing-chemex',
    date: '2023-12-28',
    excerpt: 'Técnicas modernas para preparar mate usando Chemex.',
    image: '/img/blog-post-5.jpg'
  },
  {
    title: 'Yerba Mate Alborada - Calidad y tradición en cada paquete',
    slug: 'yerba-mate-alborada-calidad-tradicion',
    date: '2023-12-25',
    excerpt: 'Conoce cómo garantizamos la calidad diferencial en nuestros productos.',
    image: '/img/blog-post-6.jpg'
  }
]

export default function Blog() {
  return (
    <div className="blog-page">
      <Hero
        image="/img/hero-blog.jpg"
        title="Blog"
        subtitle="Noticias, tips y historias sobre yerba mate"
      />

      <section className="blog-listing">
        <div className="container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-post-card">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-content">
                  <time className="post-date">
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </time>
                  <h2>{post.title}</h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link to={`/post/${post.slug}`} className="read-more-link">
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
