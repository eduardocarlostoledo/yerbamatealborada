import React, { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const fineHover = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const evaluate = () => setActive(fineHover.matches && !reduceMotion.matches)
    evaluate()

    fineHover.addEventListener('change', evaluate)
    reduceMotion.addEventListener('change', evaluate)
    return () => {
      fineHover.removeEventListener('change', evaluate)
      reduceMotion.removeEventListener('change', evaluate)
    }
  }, [])

  useEffect(() => {
    if (!active) {
      document.documentElement.classList.remove('custom-cursor-active', 'cursor-hover')
      return
    }

    document.documentElement.classList.add('custom-cursor-active')

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let raf
    let moved = false

    const onMove = (e) => {
      moved = true
      mx = e.clientX
      my = e.clientY
      dot.style.opacity = '1'
      ring.style.opacity = '1'
      dot.style.transform = `translate(${mx}px, ${my}px)`
    }

    const loop = () => {
      if (moved) {
        rx += (mx - rx) * 0.16
        ry += (my - ry) * 0.16
        ring.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    dot.style.opacity = '0'
    ring.style.opacity = '0'
    raf = requestAnimationFrame(loop)

    const HOVER_SELECTOR = 'a, button, .tilt-card, .faq-question, input, textarea, select'
    const onOver = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        document.documentElement.classList.add('cursor-hover')
      }
    }
    const onOut = (e) => {
      if (e.target.closest?.(HOVER_SELECTOR)) {
        document.documentElement.classList.remove('cursor-hover')
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active', 'cursor-hover')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [active])

  if (!active) return null

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  )
}
