import Icon from './Icon'
import '../css/components/trust-bar.css'

export default function TrustBar() {
  const trustItems = [
    { iconType: 'leaf', text: 'Sin conservantes artificiales' },
    { iconType: 'box', text: 'Envíos a todo el país' },
    { iconType: 'star', text: 'Calidad premium garantizada' },
    { iconType: 'phone', text: 'Atención directa por WhatsApp' },
    { iconType: 'heart', text: 'Somos de Misiones' },
  ];

  return (
    <div className="trust-bar">
      {trustItems.map((item, i) => (
        <div key={i} className="trust-item">
          <Icon type={item.iconType} size="md" />
          {item.text}
        </div>
      ))}
    </div>
  );
}
