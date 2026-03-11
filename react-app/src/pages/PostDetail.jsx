import React from 'react'
import { useParams, Link } from 'react-router-dom'
import postsData from '../data/posts.json'
import '../css/pages/post-detail.css'

export default function PostDetail() {
  const { slug } = useParams()
  const post = postsData.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post no encontrado</h1>
        <p>Lo sentimos, el artículo que buscas no existe.</p>
        <Link to="/post">Volver al blog</Link>
      </div>
    )
  }

  return (
    <div className="post-detail-page">
      <article className="post-article">
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date">
            {new Date(post.date).toLocaleDateString('es-ES')}
          </time>
        </header>

        <img src={post.image} alt={post.title} className="post-featured-image" />

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="post-footer">
          <Link to="/post" className="back-to-blog">
            ← Volver al blog
          </Link>
        </footer>
      </article>
    </div>
  )
}
