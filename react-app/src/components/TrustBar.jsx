import '../css/components/trust-bar.css'

export default function TrustBar() {
  const trustItems = [
    { icon: '🌿', text: 'Sin conservantes artificiales' },
    { icon: '📦', text: 'Envíos a todo el país' },
    { icon: '🏅', text: 'Calidad premium garantizada' },
    { icon: '💬', text: 'Atención directa por WhatsApp' },
    { icon: '🤝', text: 'Somos de Misiones' },
  ];

  return (
    <div className="trust-bar">
      {trustItems.map((item, i) => (
        <div key={i} className="trust-item">
          <span className="trust-icon">{item.icon}</span>
          {item.text}
        </div>
      ))}
    </div>
  );
}
