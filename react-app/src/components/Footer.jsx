import Icon from './Icon'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/img/logo-alborada-corto.jpg" alt="Yerba Mate Alborada" />
          <p>
            Yerba Mate Alborada: Tradición, calidad y sabor del corazón yerbatero de Misiones. Desde el monte a tu mate.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/543765042085" className="social-btn" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <Icon type="phone" size="sm" />
            </a>
            <a href="mailto:alboradayerbamate@gmail.com" className="social-btn" title="Email">
              <Icon type="book" size="sm" />
            </a>
            <a href="https://instagram.com/alboradayerbamate" className="social-btn" target="_blank" rel="noopener noreferrer" title="Instagram">
              <Icon type="star" size="sm" />
            </a>
            <a href="https://maps.google.com/maps/place/Misiones,+Argentina" className="social-btn" target="_blank" rel="noopener noreferrer" title="Ubicación">
              <Icon type="location" size="sm" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Producto</h5>
          <ul>
            <li><a href="#solution">Características</a></li>
            <li><a href="#prepare">Cómo preparar</a></li>
            <li><a href="#benefits">Beneficios</a></li>
            <li><a href="/post">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Negocio</h5>
          <ul>
            <li><a href="#resellers">Revendedores</a></li>
            <li><a href="#resellers">Distribuidores</a></li>
            <li><a href="#resellers">Mayorista</a></li>
            <li>
              <div className="contact-line">
                <span>WhatsApp:</span>
                <a href="https://wa.me/543765042085" target="_blank" rel="noopener noreferrer">
                  +54 3765 042085
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Newsletter</h5>
          <div className="newsletter">
            <p>Recibí ofertas y noticias en tu correo</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu email" 
                required 
              />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Yerba Mate Alborada. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
        </div>
        <div className="footer-province">
          Misiones, Argentina
        </div>
      </div>
    </footer>
  )
}
