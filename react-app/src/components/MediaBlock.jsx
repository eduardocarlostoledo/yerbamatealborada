import React from 'react'
import '../css/components/media-block.css'

export default function MediaBlock({ title, text, image, reverse = false }) {
  return (
    <section className={`media-block ${reverse ? 'reverse' : ''}`}>
      <div className="media-block-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="media-block-image">
        <img src={image} alt={title} />
      </div>
    </section>
  )
}
