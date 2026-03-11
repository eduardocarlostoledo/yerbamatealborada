import '../css/components/testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      text: 'La mejor yerba mate que he probado. Sabor impecable, sin amargor y con una tradición que se siente en cada matecito.',
      author: 'María González',
      role: 'Consumidora de mate',
      rating: 5,
    },
    {
      text: 'Decidimos trabajar con Alborada como revendedor. Los márgenes son justos y el producto se vende solo. Ya tenemos lista de espera.',
      author: 'Jorge Fernández',
      role: 'Revendedor, Buenos Aires',
      rating: 5,
    },
    {
      text: 'El palo es el detalle que faltaba. Preparamos mate para toda la familia y todos notan la diferencia con otras marcas.',
      author: 'Carolina Martinez',
      role: 'Amante del mate',
      rating: 5,
    },
  ];

  const featuredTestimonial = {
    text: 'Alborada no es solo un producto. Es la respuesta que muchos materos estábamos buscando. Calidad, tradición y confianza en cada paquete.',
    author: 'Roberto Díaz',
    role: 'Distribuidor mayorista, Misiones',
    percentage: '98%',
    label: 'Satisfacción de clientes',
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="reveal" style={{ textAlign: 'center' }}>
        <span className="section-tag">Qué dicen nuestros clientes</span>
        <h2 className="section-title">Testimonios reales de<br />materos felices</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Miles de consumidores, revendedores y distribuidores confían en Yerba Mate Alborada. Acá están sus historias.
        </p>
      </div>

      <div className="testimonials-grid reveal">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            <div className="stars">
              {'★'.repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-featured reveal">
        <div className="featured-label">
          <div className="big-num">{featuredTestimonial.percentage}</div>
          <span>{featuredTestimonial.label}</span>
        </div>
        <p className="testimonial-text">{featuredTestimonial.text}</p>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div className="author-name">{featuredTestimonial.author}</div>
          <div className="author-role">{featuredTestimonial.role}</div>
        </div>
      </div>
    </section>
  );
}
