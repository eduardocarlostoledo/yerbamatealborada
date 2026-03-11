import React from 'react'
import '../css/components/testimonial.css'

export default function Testimonial({ quote, author }) {
  return (
    <blockquote className="testimonial">
      <p className="testimonial-text">"{quote}"</p>
      <footer className="testimonial-author">— {author}</footer>
    </blockquote>
  )
}
