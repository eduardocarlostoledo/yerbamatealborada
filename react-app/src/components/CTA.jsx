import Icon from './Icon'
import '../css/components/cta.css'

export default function CTA() {
  const ctaCards = [
    {
      iconType: 'phone',
      title: 'Contacto directo',
      description: 'Escribinos por WhatsApp para consultas, presupuestos o pedidos personalizados.',
    },
    {
      iconType: 'truck',
      title: 'Envío rápido',
      description: 'Procesamos pedidos en 24hs hábiles. Envíos a todo el país con seguimiento.',
    },
    {
      iconType: 'check',
      title: 'Garantía de calidad',
      description: 'Cada paquete es inspeccionado para garantizar la mejor yerba mate premium.',
    },
  ];

  return (
    <section id="cta" className="cta-section">
      <span className="cta-tag">Última oportunidad</span>
      <h2 className="cta-title">
        Despiertá tu alma<br />
        <em>con Alborada</em>
      </h2>
      <p className="cta-sub">
        Únete a miles de materos que confían en Yerba Mate Alborada. Desde el primer mate sentirás la diferencia de la calidad y tradición misionera.
      </p>
      <div className="cta-actions">
        <a
          href="https://wa.me/543765042085?text=Hola%2C%20quiero%20pedir%20Yerba%20Mate%20Alborada"
          className="btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedir por WhatsApp
        </a>
      </div>
      <div className="cta-cards reveal">
        {ctaCards.map((card, i) => (
          <div key={i} className="cta-card">
            <Icon type={card.iconType} size="lg" />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
