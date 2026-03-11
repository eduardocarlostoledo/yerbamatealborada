import '../css/components/problem.css'

export default function Problem() {
  const problems = [
    {
      title: 'Yerba sin identidad de origen',
      description: 'La mayoría de las marcas mezclan yerbas de diferentes provincias y pierden el perfil único que solo Misiones puede dar.',
    },
    {
      title: 'Demasiado polvillo, poco sabor',
      description: 'Yerbas con exceso de polvillo tapan la bombilla y dan un sabor amargo sin carácter. El palo justo cambia todo.',
    },
    {
      title: 'Precios altos sin justificación',
      description: 'Pagar premium por packaging llamativo no garantiza calidad. La selección de la hoja sí lo hace.',
    },
    {
      title: 'Sin opción para emprender',
      description: 'Encontrar una yerba de calidad con precios para revendedor, que realmente te deje margen, es difícil.',
    },
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="reveal">
        <span className="section-tag">¿Te identificás?</span>
        <h2 className="section-title">
          Cansado de yerbas sin<br />sabor ni identidad
        </h2>
        <p className="section-sub">
          Millones de materos eligen por precio y terminan tomando una yerba industrializada, sin origen claro, sin el verdadero sabor de la selva. ¿Cuándo fue la última vez que tu mate realmente te sorprendió?
        </p>
      </div>
      <div className="problem-grid reveal">
        <div className="problem-cards">
          {problems.map((problem, i) => (
            <div key={i} className="problem-card">
              <h4>{problem.title}</h4>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="problem-image">
          <img src="/img/header-home.jpg" alt="Selva de Misiones" />
          <div className="problem-image-quote" data-author="— Tradición misionera">
            &quot;El mate no es solo una bebida. Es el ritual con el que comenzás el día.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
