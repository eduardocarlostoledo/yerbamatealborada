import { useEffect, useRef } from 'react'

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
 * Inicializa IntersectionObserver para todos los elementos con clase 'reveal'
 * Llama una sola vez en App o Layout principal
 */
export function initRevealAnimations() {
  if (!document) return

  const reveals = document.querySelectorAll('.reveal')
  if (reveals.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  )

  reveals.forEach((reveal) => observer.observe(reveal))
}
