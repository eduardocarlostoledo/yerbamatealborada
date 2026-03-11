import React from 'react'
import '../css/components/product-card.css'

export default function ProductCard({ title, text, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
