import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook para animar elementos cuando entran en la vista
 * Agrega la clase 'visible' a los elementos cuando se hacen visibles en el viewport
 */
export function useInView() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}

/**
 * Anima con GSAP ScrollTrigger todos los elementos con clase 'reveal':
 * entran con profundidad real (translateZ + perspectiva), no solo fade.
 * Llamar una sola vez en App/Layout principal, después de montar el DOM.
 */
export function initRevealAnimations() {
  if (typeof document === 'undefined') return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const reveals = document.querySelectorAll('.reveal:not([data-reveal-bound])')
  if (!reveals.length) return

  reveals.forEach((el) => {
    el.setAttribute('data-reveal-bound', '1')

    if (reduceMotion) {
      gsap.set(el, { opacity: 1, clearProps: 'transform' })
      return
    }

    gsap.set(el, {
      opacity: 0,
      y: 46,
      z: -120,
      transformPerspective: 900,
      transformOrigin: '50% 100%',
    })

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          z: 0,
          duration: 1,
          ease: 'power3.out',
        })
      },
    })
  })
}
