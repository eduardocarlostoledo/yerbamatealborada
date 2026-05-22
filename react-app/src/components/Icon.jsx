import React from 'react'
import '../css/components/icon.css'

export default function Icon({ type, size = 'md' }) {
  const icons = {
    leaf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C7 2 3 6 3 11c0 5 4 11 9 11s9-6 9-11c0-5-4-9-9-9z" />
        <path d="M12 8v8" />
      </svg>
    ),
    wood: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 4h12v16H6z" />
        <line x1="6" y1="8" x2="18" y2="8" />
        <line x1="6" y1="12" x2="18" y2="12" />
        <line x1="6" y1="16" x2="18" y2="16" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    price: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8H13V6.5c0-.83-.67-1.5-1.5-1.5S10 5.67 10 6.5V8H8c-.83 0-1.5.67-1.5 1.5S7.17 11 8 11h2.5v2H8c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h2v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V16h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H13v-2h2.5z" />
      </svg>
    ),
    growth: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    handshake: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.41 7.41L14.59 3.41c.39-.39 1.02-.39 1.41 0l3.18 3.18c.39.39.39 1.02 0 1.41L14.59 10.59M6.41 16.41L10.59 12.41c.39-.39 1.02-.39 1.41 0l3.39 3.39c.39.39.39 1.02 0 1.41L9.59 20.41c-.39.39-1.02.39-1.41 0l-1.77-1.77M6.41 16.41L2.23 20.59c-.39.39-.39 1.02 0 1.41l1.77 1.77c.39.39 1.02.39 1.41 0l4.18-4.18" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
    shop: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
    gift: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5.67 1.5 1.5S16.33 14 15.5 14 14 13.33 14 12.5 14.67 11 15.5 11zm-7 0c.83 0 1.5.67 1.5 1.5S9.33 14 8.5 14 7 13.33 7 12.5 7.67 11 8.5 11z" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 16.5h4v-2h-4v2zm6-8.5h4c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2h4V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2zm-6-2v2h4V6h-4z" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 10.5V7c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    ),
    truck: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 18.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M1 6v9h4V9h10v6h4V6H1zm17 10h3V5h-3c.55-1.92 2.3-3.32 4.5-3.32S24 3.08 24 5h2V4h-1V3h1v1.5V5h1v2h-3l-1 4zm-11-9.5h6v1h-6v-1zm6 5h-6v1h6v-1zm0 4h-6v1h6v-1zm5.5 2c1.38 0 2.5 1.12 2.5 2.5S20.38 23 19 23s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 1H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 20H5V3h14v18zM7 5h10v2H7z" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.6C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1 .1-1.4z" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  }

  return (
    <span className={`icon icon--${type} icon--${size}`}>
      {icons[type]}
    </span>
  )
}
