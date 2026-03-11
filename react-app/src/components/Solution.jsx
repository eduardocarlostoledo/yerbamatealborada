import '../css/components/solution.css'

export default function Solution() {
  const features = [
    {
      icon: '🌿',
      title: 'Hojas seleccionadas',
      description: 'Seleccionamos cuidadosamente las hojas de yerba mate para asegurar un sabor y aroma inigualables en cada infusión.',
    },
    {
      icon: '🪵',
      title: 'Con palo ideal',
      description: 'El tamaño de palo justo y la cantidad de polvillo precisa generan un sabor meticulosamente diseñado para el deleite.',
    },
    {
      icon: '📍',
      title: '100% Origen Misiones',
      description: 'Producida en el corazón yerbatero del país. Sin mezclas. Sin intermediarios innecesarios. Del monte a tu mate.',
    },
    {
      icon: '💰',
      title: 'Precio competitivo',
      description: 'Los mejores precios del mercado sin comprometer la calidad, para el consumidor final y para quien quiera revender.',
    },
    {
      icon: '📈',
      title: 'Tendencia en crecimiento',
      description: 'Producto con alta demanda nacional e internacional. El mate premium es una de las bebidas más buscadas hoy.',
    },
    {
      icon: '🤝',
      title: 'Soporte real',
      description: 'Atención directa con los productores. Exclusividad por zona para revendedores. Acompañamos tu negocio.',
    },
  ];

  const productFeatures = [
    'Elaborada con palo, sabor equilibrado y consistente',
    'Polvillo justo: sin tapones, sin amargor excesivo',
    'Aroma auténtico de la selva misionera',
    'Disponible en diferentes presentaciones y volúmenes',
    'Precio al consumidor y precio especial para revendedores',
  ];

  return (
    <section id="solution" className="solution-section">
      <div className="reveal">
        <span className="section-tag" style={{ color: 'var(--dorado-claro)' }}>
          La diferencia Alborada
        </span>
        <h2 className="section-title">
          Calidad y tradición<br />en cada paquete
        </h2>
        <p className="section-sub">
          En Alborada nos dedicamos a ofrecer la mejor yerba mate de Misiones, elaborada con los más altos estándares de calidad. Ideales para consumo personal y para la venta al por mayor.
        </p>
      </div>

      <div className="solution-grid reveal">
        {features.map((feature, i) => (
          <div key={i} className="solution-card">
            <span className="solution-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="solution-product reveal">
        <img
          src="/img/producto-2-principal.png"
          alt="Producto Yerba Mate Alborada"
        />
        <div className="solution-details">
          <h3>
            Yerba Mate Alborada<br />Con Palo · Misiones
          </h3>
          <p>
            Alborada simboliza un nuevo amanecer. Para quienes deciden todos los días, con la sencillez de un mate, desde el amor, la amistad, la unión y el compartir, mostrarse agradecidos a la vida desde la primera luz del alba.
          </p>
          <ul className="feature-list">
            {productFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
