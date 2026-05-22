import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ReadingTime from '../components/ReadingTime'
import postsData from '../data/posts.json'
import '../css/pages/blog.css'

const blogPosts = postsData

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Get unique categories
  const categories = ['Todos', ...new Set(blogPosts.map(post => post.category))]

  // Filter posts by category
  const filteredPosts = selectedCategory && selectedCategory !== 'Todos'
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  return (
    <div className="blog-page">
      <Hero
        image="/img/hero-blog.jpg"
        title="Blog: Conocimiento sobre Yerba Mate"
        subtitle="Guías, historias, ciencia y tradición de la mejor yerba mate de Misiones"
      />

      <section className="blog-section">
        <div className="blog-container">
          {/* Category Filter */}
          <div className="blog-filters">
            <h3 className="blog-filters__title">Filtrar por Categoría</h3>
            <div className="blog-filters__list">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`blog-filter-btn ${
                    (selectedCategory === category || (!selectedCategory && category === 'Todos'))
                      ? 'blog-filter-btn--active'
                      : ''
                  }`}
                  onClick={() => setSelectedCategory(category === 'Todos' ? null : category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="blog-posts-section">
            <div className="blog-posts-header">
              <h2 className="blog-posts-title">
                {selectedCategory && selectedCategory !== 'Todos'
                  ? `Artículos sobre ${selectedCategory}`
                  : 'Todos los Artículos'}
              </h2>
              <p className="blog-posts-count">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo' : 'artículos'}
              </p>
            </div>

            <div className="blog-posts-grid">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article key={post.slug} className="blog-post-card">
                    {/* Card Image */}
                    <div className="blog-post-card__image">
                      <img src={post.image} alt={post.title} loading="lazy" />
                      <div className="blog-post-card__overlay">
                        <Link to={`/post/${post.slug}`} className="blog-post-card__link-overlay">
                          Leer artículo
                        </Link>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="blog-post-card__content">
                      {/* Category & Reading Time */}
                      <div className="blog-post-card__meta-top">
                        <span className="blog-post-card__category">{post.category}</span>
                        <span className="blog-post-card__reading-time">
                          {post.readingTime} min
                        </span>
                      </div>

                      {/* Title */}
                      <Link to={`/post/${post.slug}`} className="blog-post-card__title-link">
                        <h3 className="blog-post-card__title">{post.title}</h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="blog-post-card__excerpt">{post.excerpt}</p>

                      {/* Meta Information */}
                      <div className="blog-post-card__meta-bottom">
                        <span className="blog-post-card__author">{post.author}</span>
                        <span className="blog-post-card__separator">•</span>
                        <time className="blog-post-card__date">
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>

                      {/* Read More Link */}
                      <Link to={`/post/${post.slug}`} className="blog-post-card__cta">
                        Leer más →
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="blog-no-posts">
                  <p>No hay artículos en esta categoría.</p>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="blog-no-posts__reset"
                  >
                    Ver todos los artículos
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta">
        <div className="blog-container">
          <h2>¿Preguntas sobre Alborada?</h2>
          <p>Contacta a nuestro equipo y entérate todo sobre nuestra yerba mate premium.</p>
          <a href="https://wa.me/543765042085" target="_blank" rel="noopener noreferrer" className="blog-cta__button">
            💬 Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
