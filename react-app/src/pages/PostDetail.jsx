import React from 'react'
import { useParams, Link } from 'react-router-dom'
import postsData from '../data/posts.json'
import ReadingTime from '../components/ReadingTime'
import RelatedPosts from '../components/RelatedPosts'
import BlogSidebar from '../components/BlogSidebar'
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
      <div className="post-detail-container">
        <main className="post-detail-main">
          <article className="post-article">
            {/* Post Header */}
            <header className="post-header">
              <div className="post-breadcrumb">
                <Link to="/post">Blog</Link>
                <span className="post-breadcrumb__separator">/</span>
                <span>{post.category}</span>
              </div>

              <h1 className="post-title">{post.title}</h1>

              <div className="post-meta">
                <div className="post-meta__left">
                  {post.author && (
                    <span className="post-author">
                      Por <strong>{post.author}</strong>
                    </span>
                  )}
                  <time className="post-date">
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                
                <ReadingTime minutes={post.readingTime} category={post.category} />
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <figure className="post-featured-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </figure>
            )}

            {/* Post Content */}
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Post Footer */}
            <footer className="post-footer">
              <div className="post-footer__tags">
                {post.keywords && post.keywords.map((keyword, idx) => (
                  <span key={idx} className="post-tag">{keyword}</span>
                ))}
              </div>

              <Link to="/post" className="back-to-blog">
                ← Volver al blog
              </Link>
            </footer>
          </article>

          {/* Related Posts */}
          <RelatedPosts posts={postsData} currentPostId={post.id} maxPosts={3} />
        </main>

        {/* Sidebar */}
        <BlogSidebar />
      </div>
    </div>
  )
}
