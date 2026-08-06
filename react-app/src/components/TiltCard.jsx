import React, { useRef, useCallback } from 'react'
import ProductCardEffect from '../three/ProductCardEffect.js'
import isMobile from '../three/utils/isMobile.js'
import webglSupport from '../three/utils/webglSupport.js'

export default function TiltCard({ children, className = '', sparkle = true }) {
  const cardRef = useRef(null)
  const canvasRef = useRef(null)
  const effectRef = useRef(null)
  const mobile = isMobile()
  const showEffect = sparkle && !mobile && webglSupport()

  const handleMouseMove = useCallback((e) => {
    if (mobile) return
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-6px) translateZ(10px)`
  }, [mobile])

  const handleMouseEnter = useCallback(() => {
    if (!showEffect || !canvasRef.current) return
    if (!effectRef.current) {
      const fx = new ProductCardEffect(canvasRef.current)
      fx.init()
      effectRef.current = fx
    }
    effectRef.current.start()
  }, [showEffect])

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = ''
    effectRef.current?.stop()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showEffect && (
        <canvas ref={canvasRef} className="tilt-card-fx" width={300} height={250} />
      )}
      <div className="tilt-card-content">{children}</div>
    </div>
  )
}
