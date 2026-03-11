import { useState } from 'react';import '../css/components/faq.css'
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿De dónde es la yerba Alborada?',
      answer:
        '100% de origen Misiones, Argentina. Producida en el corazón yerbatero del país, sin mezclas con otras provincias. Nuestras plantaciones están ubicadas en la zona de Oberá, garantizando la autenticidad y el perfil único de nuestra yerba.',
    },
    {
      question: '¿Por qué Alborada tiene palo?',
      answer:
        'El palo es fundamental para un mate de calidad. Proporciona el tamaño de partícula ideal, reduce el polvillo que tapa la bombilla, y genera un sabor equilibrado y menos amargo. El palo justo es lo que diferencia una yerba premium de una industrial.',
    },
    {
      question: '¿Puedo comprar directamente como revendedor?',
      answer:
        'Sí, tenemos precios especiales para revendedores, distribuidores y empresas. Mínimos accesibles, comisiones atractivas y soporte directo. Contactanos por WhatsApp al 3765042085 para cotizar según tu volumen.',
    },
    {
      question: '¿Envían a todo el país?',
      answer:
        'Sí, hacemos envíos a todo el país. Nuestro sistema de logística garantiza entregas seguras y rápidas. Los costos varían según la zona. Consultanos sin compromiso por WhatsApp.',
    },
    {
      question: '¿Cuáles son las presentaciones disponibles?',
      answer:
        'Contamos con diferentes opciones: bolsas de 500g, 1kg, 5kg y 10kg. También ofrecemos opciones a granel para revendedores. Consultá las opciones disponibles para tu necesidad.',
    },
    {
      question: '¿Tiene una fecha de vencimiento?',
      answer:
        'Sí, como todo producto. La yerba mate Alborada tiene excelente conservación. Se recomienda almacenar en lugar fresco y seco. Los detalles específicos están en el empaque de cada producto.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="reveal" style={{ textAlign: 'center' }}>
        <span className="section-tag">Dudas habituales</span>
        <h2 className="section-title">Preguntas frecuentes</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Aquí respondemos las dudas más comunes sobre Yerba Mate Alborada, nuestro proceso y cómo trabajar con nosotros.
        </p>
      </div>
      <div className="faq-container reveal">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleFAQ(i)}>
              <span>{faq.question}</span>
              <span className="icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
