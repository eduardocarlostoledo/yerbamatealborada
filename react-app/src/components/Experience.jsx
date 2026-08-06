import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../css/components/experience.css'

gsap.registerPlugin(ScrollTrigger)

const scenes = [
  {
    tag: 'Escena 01',
    title: 'La Cosecha',
    text: 'Manos misioneras cosechan la hoja en el momento justo, cuando el yerbatal guarda más aroma que nunca.',
    image: '/img/blog4.jpg',
  },
  {
    tag: 'Escena 02',
    title: 'El Estacionamiento',
    text: 'Secado y estacionamiento controlados: el tiempo hace su trabajo silencioso hasta lograr el punto exacto de sabor.',
    image: '/img/blog3.webp',
  },
  {
    tag: 'Escena 03',
    title: 'El Ritual',
    text: 'Compartir el mate es el gesto que une generaciones. Cada cebada repite un ritual que empezó en Misiones.',
    image: '/img/blog6.webp',
  },
  {
    tag: 'Escena 04',
    title: 'El Amanecer',
    text: 'Alborada: el sabor de un nuevo amanecer. El mismo ritual que cierra el día abre el siguiente, sorbo a sorbo.',
    image: '/img/blog5.jpg',
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
      const getDistance = () => track.scrollWidth - section.clientWidth

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${getDistance()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        animation: gsap.to(track, { x: () => -getDistance(), ease: 'none' }),
      })

      return () => st.kill()
    })

    return () => mm.revert()
  }, [])

  return (
    <section className="experience" ref={sectionRef}>
      <div className="experience-track" ref={trackRef}>
        {scenes.map((scene, i) => (
          <div className={`experience-panel experience-panel--${i + 1}`} key={scene.title}>
            <img
              src={scene.image}
              alt={scene.title}
              className="experience-panel-img"
              loading="lazy"
            />
            <div className="experience-panel-scrim" />
            <div className="experience-panel-content">
              <span className="experience-tag">{scene.tag}</span>
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
