import React, { useState, useEffect, useRef } from 'react'

export default function Loader({ progress = 0, visible = true, onHidden }) {
  const [phase, setPhase] = useState('loading')
  const containerRef = useRef(null)

  useEffect(() => {
    if (progress >= 1 && phase === 'loading') {
      setPhase('reveal')
      const timer = setTimeout(() => {
        setPhase('hidden')
        onHidden?.()
      }, 900)
      return () => clearTimeout(timer)
    }
  }, [progress, phase, onHidden])

  if (phase === 'hidden') return null

  return (
    <div
      ref={containerRef}
      className={`loader-screen ${phase === 'reveal' ? 'loader-reveal' : ''}`}
    >
      <svg
        className="loader-logo"
        viewBox="0 0 400 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="200"
          y="45"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="42"
          fontWeight="700"
          fill="none"
          stroke="rgba(220, 180, 70, 0.85)"
          strokeWidth="1"
          strokeDasharray="600"
          strokeDashoffset={600 - progress * 600}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        >
          ALBORADA
        </text>
        <text
          x="200"
          y="45"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="42"
          fontWeight="700"
          fill="rgba(220, 180, 70, 0.85)"
          opacity={progress > 0.5 ? (progress - 0.5) * 2 : 0}
          style={{ transition: 'opacity 0.4s ease' }}
        >
          ALBORADA
        </text>
      </svg>

      <div className="loader-bar">
        <div
          className="loader-fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <style>{`
        .loader-screen {
          position: fixed;
          inset: 0;
          background: #071209;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          z-index: 9999;
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .loader-reveal {
          opacity: 0;
          transform: scale(1.05);
          pointer-events: none;
        }
        .loader-logo {
          width: clamp(200px, 50vw, 400px);
          height: 60px;
        }
        .loader-bar {
          width: 140px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .loader-fill {
          height: 100%;
          background: rgba(220, 180, 70, 0.75);
          transition: width 0.2s ease;
        }
      `}</style>
    </div>
  )
}
