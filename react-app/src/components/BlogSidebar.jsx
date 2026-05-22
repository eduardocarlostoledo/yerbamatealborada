import React, { useState } from 'react';
import '../css/components/blog-sidebar.css';

const BlogSidebar = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <aside className="blog-sidebar">
      {/* Newsletter Section */}
      <div className="blog-sidebar__section blog-sidebar__newsletter">
        <h3 className="blog-sidebar__title">Recibe Contenido Exclusivo</h3>
        <p className="blog-sidebar__subtitle">
          Consejos, guías y secretos del mate directo a tu inbox.
        </p>

        <form
          onSubmit={handleNewsletterSubmit}
          className="blog-sidebar__form"
        >
          <input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={handleEmailChange}
            className="blog-sidebar__input"
            required
          />
          <button
            type="submit"
            className="blog-sidebar__button"
          >
            {subscribed ? '✓ ¡Gracias!' : 'Suscribirse'}
          </button>
        </form>

        <p className="blog-sidebar__privacy">
          No enviamos spam. Solo contenido de valor.
        </p>
      </div>

      {/* Featured Product Section */}
      <div className="blog-sidebar__section blog-sidebar__featured">
        <h3 className="blog-sidebar__title">Producto Destacado</h3>
        
        <div className="blog-sidebar__product">
          <img
            src="/img/alborada-premium.jpg"
            alt="Yerba Mate Alborada Premium"
            className="blog-sidebar__product-image"
          />
          
          <h4 className="blog-sidebar__product-name">Alborada Premium</h4>
          
          <p className="blog-sidebar__product-description">
            <strong>100% Misiones.</strong> Selección premium, sin polvillo excesivo.
          </p>

          <div className="blog-sidebar__benefits">
            <ul>
              <li>✓ Sabor consistente</li>
              <li>✓ +25 cebadas garantizadas</li>
              <li>✓ Antioxidantes concentrados</li>
            </ul>
          </div>

          <a
            href="/#products"
            className="blog-sidebar__cta"
          >
            Ver Precios →
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div className="blog-sidebar__section blog-sidebar__categories">
        <h3 className="blog-sidebar__title">Categorías</h3>
        
        <div className="blog-sidebar__category-list">
          <a href="/?category=Salud" className="blog-sidebar__category-link">
            <span className="blog-sidebar__category-icon">💚</span>
            <span>Salud</span>
          </a>
          <a href="/?category=Técnica" className="blog-sidebar__category-link">
            <span className="blog-sidebar__category-icon">🔧</span>
            <span>Técnica</span>
          </a>
          <a href="/?category=Cultura" className="blog-sidebar__category-link">
            <span className="blog-sidebar__category-icon">🌿</span>
            <span>Cultura</span>
          </a>
          <a href="/?category=Marca" className="blog-sidebar__category-link">
            <span className="blog-sidebar__category-icon">⭐</span>
            <span>Marca</span>
          </a>
          <a href="/?category=Negocio" className="blog-sidebar__category-link">
            <span className="blog-sidebar__category-icon">💼</span>
            <span>Negocio</span>
          </a>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="blog-sidebar__section blog-sidebar__contact">
        <h4 className="blog-sidebar__contact-title">¿Preguntas sobre Alborada?</h4>
        <p className="blog-sidebar__contact-text">
          Nuestro equipo está listo para ayudarte.
        </p>
        <a
          href="https://wa.me/543765042085"
          target="_blank"
          rel="noopener noreferrer"
          className="blog-sidebar__whatsapp"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </div>
    </aside>
  );
};

export default BlogSidebar;
