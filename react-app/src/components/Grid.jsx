import React from 'react'
import '../css/components/grid.css'

export default function Grid({ items, columns = 4 }) {
  return (
    <div className={`grid grid-${columns}`}>
      {items.map((item, index) => (
        <div key={index} className="grid-item">
          {item.image && <img src={item.image} alt={item.title} />}
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
        </div>
      ))}
    </div>
  )
}
