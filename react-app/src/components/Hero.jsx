import React, { useEffect, useRef, useState } from 'react'
import isMobile from '../three/utils/isMobile.js'
import webglSupport from '../three/utils/webglSupport.js'
import '../css/components/hero.css'

export default function Hero({ onReady }) {
  const heroRef = useRef(null)
  const overlayRef = useRef(null)
  const photoRef = useRef(null)
  const particleWrapRef = useRef(null)
  const particleCanvasRef = useRef(null)

  const [mobile, setMobile] = useState(() => isMobile())
  const [particlesVisible, setParticlesVisible] = useState(false)
  const showParticles = !mobile && webglSupport()

  useEffect(() => {
    onReady?.()
  }, [])

  useEffect(() => {
    const onResize = () => setMobile(isMobile())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // partículas doradas sobre la foto — lazy mount, se apaga solo si pasa a mobile
  useEffect(() => {
    if (mobile) setParticlesVisible(false)
  }, [mobile])

  useEffect(() => {
    if (!showParticles || !particleWrapRef.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setParticlesVisible(true)
        obs.disconnect()
      }
    }, { rootMargin: '200px' })
    obs.observe(particleWrapRef.current)
    return () => obs.disconnect()
  }, [showParticles])

  useEffect(() => {
    if (!particlesVisible || !particleCanvasRef.current) return
    let field
    import('../three/ParticleField.js').then(({ default: ParticleField }) => {
      if (!particleCanvasRef.current) return
      field = new ParticleField(particleCanvasRef.current)
      field.init()
    })
    return () => field?.dispose()
  }, [particlesVisible])

  // parallax: texto reacciona sutil al cursor, foto reacciona más (profundidad)
  useEffect(() => {
    if (mobile || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const hero = heroRef.current
    const overlay = overlayRef.current
    const photo = photoRef.current
    if (!hero || !overlay) return

    const state = { rx: 0, ry: 0, px: 0, py: 0, sy: 0 }
    let raf = null
    const apply = () => {
      overlay.style.transform =
        `rotateX(${state.rx}deg) rotateY(${state.ry}deg) translateY(${state.sy}px)`
      if (photo) {
        photo.style.transform =
          `translate(${state.px}px, ${state.py}px) translateY(${state.sy * 1.6}px)`
      }
      raf = null
    }
    const schedule = () => {
      if (raf) return
      raf = requestAnimationFrame(apply)
    }

    const onMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      state.rx = y * -2
      state.ry = x * 2.5
      state.px = x * -18
      state.py = y * -12
      schedule()
    }

    const onScroll = () => {
      const y = window.scrollY
      state.sy = y < window.innerHeight ? y * 0.22 : state.sy
      schedule()
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [mobile])

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-overlay" ref={overlayRef}>
        <div className="hero-badge">Origen Misiones · Con Palo · 100% Natural</div>
        <h1 className="hero-title">
          El mate que te<br />
          <em>despierta el alma</em>
        </h1>
        <p className="hero-sub">
          Yerba Mate Alborada: elaborada con palo de origen Misiones, sabor
          meticulosamente diseñado para el deleite del consumidor.
        </p>
        <div className="hero-actions">
          <a
            href="https://wa.me/543765042085?text=Hola%2C%20quiero%20pedir%20Yerba%20Mate%20Alborada"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir ahora por WhatsApp
          </a>
          <a href="/#solution" className="btn-ghost">
            Descubrí el sabor de Misiones
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Origen Misiones</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">Con Palo</span>
            <span className="stat-label">Sabor auténtico</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">★ 5/5</span>
            <span className="stat-label">Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="hero-photo-wrap" ref={particleWrapRef}>
        <div className="hero-photo-glow" />
        <img
          ref={photoRef}
          src="/img/producto-selva.png"
          alt="Yerba Mate Alborada sobre musgo en la selva misionera"
          className="hero-photo"
        />
        {showParticles && (
          <canvas ref={particleCanvasRef} className="hero-particles-canvas" aria-hidden="true" />
        )}

        <div className="hero-floating-badge" aria-hidden="true">
          <span className="hero-floating-badge-main">1kg</span>
          <span className="hero-floating-badge-sub">Formato<br />premium</span>
        </div>

        <div className="hero-origin-tag">
          <span className="hero-origin-dot" />
          <span>Elaborada en Misiones, Argentina</span>
        </div>

        <div className="hero-photo-medals" aria-hidden="true">
          <div className="hero-photo-medal">
            <span className="hero-photo-medal-num">100%</span>
            <span className="hero-photo-medal-label">Origen Misiones</span>
          </div>
          <div className="hero-photo-medal">
            <span className="hero-photo-medal-num">Con Palo</span>
            <span className="hero-photo-medal-label">Sabor auténtico</span>
          </div>
          <div className="hero-photo-medal">
            <span className="hero-photo-medal-num">★ 5/5</span>
            <span className="hero-photo-medal-label">Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
