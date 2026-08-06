import React, { useEffect, useRef, useState } from 'react'
import isMobile from '../three/utils/isMobile.js'
import webglSupport from '../three/utils/webglSupport.js'

export default function ParticleSection() {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [mobile, setMobile] = useState(() => isMobile())

  useEffect(() => {
    const onResize = () => setMobile(isMobile())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (mobile) setVisible(false)
  }, [mobile])

  useEffect(() => {
    if (mobile || !webglSupport() || !wrapRef.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        obs.disconnect()
      }
    }, { rootMargin: '200px' })
    obs.observe(wrapRef.current)
    return () => obs.disconnect()
  }, [mobile])

  useEffect(() => {
    if (!visible || !canvasRef.current) return
    let field
    import('../three/ParticleField.js').then(({ default: ParticleField }) => {
      if (!canvasRef.current) return
      field = new ParticleField(canvasRef.current)
      field.init()

      const onScroll = () => field.updateScroll(window.scrollY)
      window.addEventListener('scroll', onScroll, { passive: true })
      field._scrollCleanup = () => window.removeEventListener('scroll', onScroll)
    })
    return () => {
      field?._scrollCleanup?.()
      field?.dispose()
    }
  }, [visible])

  if (mobile || !webglSupport()) return null

  return (
    <div ref={wrapRef} className="particle-section">
      {visible && <canvas ref={canvasRef} />}
      <style>{`
        .particle-section {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          pointer-events: none;
          margin: -100px 0;
          z-index: 0;
          background: var(--verde-selva);
        }
        .particle-section canvas {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}
