import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/related-posts.css';

const RelatedPosts = ({ posts = [], currentPostId = null, maxPosts = 3 }) => {
  if (!posts || posts.length === 0) return null;

  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="related-posts">
      <div className="related-posts__container">
        <h3 className="related-posts__title">Artículos Relacionados</h3>
        
        <div className="related-posts__grid">
          {relatedPosts.map((post) => (
            <article key={post.id} className="related-posts__card">
              {post.image && (
                <div className="related-posts__image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
              )}
              
              <div className="related-posts__content">
                <Link to={`/post/${post.slug}`} className="related-posts__category">
                  {post.category}
                </Link>
                
                <Link to={`/post/${post.slug}`} className="related-posts__link">
                  <h4 className="related-posts__heading">{post.title}</h4>
                </Link>
                
                <p className="related-posts__excerpt">{post.excerpt}</p>
                
                <div className="related-posts__meta">
                  <span className="related-posts__date">{post.date}</span>
                  <span className="related-posts__separator">•</span>
                  <span className="related-posts__reading-time">{post.readingTime} min</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
