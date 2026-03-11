import '../css/components/resellers.css'

export default function Resellers() {
  const resellers = [
    {
      icon: '🗺️',
      title: 'Representantes',
      features: [
        'Exclusividad territorial por provincia o zona',
        'Comisiones atractivas sobre ventas',
        'Soporte completo de la marca',
        'Zonas disponibles en todo el país',
      ],
    },
    {
      icon: '🏪',
      title: 'Distribuidores',
      features: [
        'Margen mayorista especial',
        'Acceso a stock prioritario',
        'Material de merchandising gratis',
        'Visitas periódicas del equipo',
      ],
    },
    {
      icon: '🎁',
      title: 'Revendedores',
      features: [
        'Precios especiales por volumen',
        'Mínimos accesibles',
        'Posibilidad de pack personalizados',
        'Crecimiento flexible según ventas',
      ],
    },
    {
      icon: '💼',
      title: 'B2B / Mayorista',
      features: [
        'Cotizaciones personalizadas',
        'Envíos directos a tu depósito',
        'Términos de pago negociables',
        'Contacto directo con producción',
      ],
    },
  ];

  return (
    <section id="resellers" className="resellers-section">
      <div className="reveal" style={{ textAlign: 'center' }}>
        <span className="section-tag">Oportunidad de negocio</span>
        <h2 className="section-title">
          Hacé crecer tu negocio<br />con Alborada
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Buscamos socios estratégicos para expandir Yerba Mate Alborada en todo el país. Exclusividad por zona, comisiones atractivas y soporte real.
        </p>
      </div>
      <div className="resellers-grid reveal">
        {resellers.map((reseller, i) => (
          <div key={i} className="reseller-card">
            <span className="reseller-icon">{reseller.icon}</span>
            <h3>{reseller.title}</h3>
            <ul>
              {reseller.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
