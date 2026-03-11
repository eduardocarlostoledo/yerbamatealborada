import '../css/components/how-to-prepare.css'

export default function HowToPrepare() {
  const steps = [
    {
      num: '1',
      title: 'Cargá el mate',
      description: 'Llenás el mate hasta las ¾ partes con yerba mate Alborada.',
      temp: null,
    },
    {
      num: '2',
      title: 'Humedecé la yerba',
      description: 'Inclinás el mate y agregás agua tibia en la parte vacía para despertar la yerba.',
      temp: '~70°C',
    },
    {
      num: '3',
      title: 'Insertá la bombilla',
      description: 'Insertás la bombilla y vertés agua caliente cerca de ella.',
      temp: '~80°C',
    },
    {
      num: '4',
      title: '¡A disfrutar!',
      description: 'Disfrutás de un mate lleno de sabor, aroma y tradición misionera.',
      temp: null,
    },
  ];

  return (
    <section id="prepare" className="prepare-section">
      <div className="reveal" style={{ textAlign: 'center' }}>
        <span className="section-tag">Guía de preparación</span>
        <h2 className="section-title">Cómo preparar el mate perfecto</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Preparar un mate perfecto es todo un arte. Seguí estos pasos para disfrutar al máximo de tu yerba mate de Misiones.
        </p>
      </div>
      <div className="prepare-steps reveal">
        {steps.map((step, i) => (
          <div key={i} className="step-card">
            <div className="step-num">{step.num}</div>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            {step.temp && <span className="step-temp">{step.temp}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
