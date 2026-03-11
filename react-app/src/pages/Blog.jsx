import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import postsData from '../data/posts.json'
import '../css/pages/blog.css'

const blogPosts = postsData

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
                  <p className="post-excerpt">{post.description}</p>
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
