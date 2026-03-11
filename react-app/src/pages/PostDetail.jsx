import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../css/pages/post-detail.css'

// Datos de posts - Esto debería venir de un archivo de datos o API
const postsData = {
  'beneficios-de-consumir-yerba-mate-de-misiones': {
    title: 'Beneficios de consumir yerba mate de Misiones',
    date: '2024-01-15',
    image: '/img/blog-post-1.jpg',
    content: `
      <h2>Los múltiples beneficios de la Yerba Mate</h2>
      <p>La yerba mate no es solo una bebida deliciosa, sino que también ofrece numerosos 
      beneficios para la salud...</p>
      
      <h3>Antioxidantes naturales</h3>
      <p>La yerba mate contiene más de 196 activos compuesto, incluyendo polifenoles 
      que actúan como potentes antioxidantes.</p>
      
      <h3>Energía natural</h3>
      <p>Con cafeína natural, la yerba mate proporciona un estimulante suave pero efectivo 
      sin los efectos secundarios del café.</p>
      
      <h3>Digestión mejorada</h3>
      <p>Estudios muestran que consumir yerba mate favorece la digestión y puede ayudar 
      a mantener un peso saludable.</p>
    `
  },
  'que-es-la-yerba-mate': {
    title: 'Qué es la Yerba Mate',
    date: '2024-01-10',
    image: '/img/blog-post-2.jpg',
    content: `
      <h2>Introducción a la Yerba Mate</h2>
      <p>La yerba mate es una bebida tradicional preparada a partir de las hojas de 
      la planta Ilex paraguariensis, originaria de América del Sur...</p>
      
      <h3>Origen histórico</h3>
      <p>Los guaraníes fueron los primeros en consumir yerba mate, reconociendo sus 
      propiedades energizantes y medicinales.</p>
      
      <h3>Producción en Misiones</h3>
      <p>Misiones es la región más importante de producción de yerba mate en Argentina, 
      con condiciones climáticas ideales para su cultivo.</p>
    `
  },
  'como-preparar-el-mate-perfecto': {
    title: 'Cómo preparar el mate perfecto con Yerba Mate de Misiones',
    date: '2024-01-05',
    image: '/img/blog-post-3.jpg',
    content: `
      <h2>Guía para preparar el mate perfecto</h2>
      <p>Preparar un buen mate es un arte que combina técnica y pasión. Aquí te 
      compartimos nuestros consejos...</p>
      
      <h3>Paso 1: Elige el recipiente correcto</h3>
      <p>Un mate tradicional de cerámica o calabaza es lo ideal. Caliéntalo antes 
      de usarlo.</p>
      
      <h3>Paso 2: La temperatura del agua</h3>
      <p>El agua debe estar entre 70-80 grados Celsius. Muy caliente puede quemar 
      la yerba.</p>
      
      <h3>Paso 3: Rellena el mate</h3>
      <p>Llena el mate hasta 3/4 de su capacidad con yerba mate de Alborada.</p>
    `
  }
}

export default function PostDetail() {
  const { slug } = useParams()
  const post = postsData[slug]

  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post no encontrado</h1>
        <p>Lo sentimos, el artículo que buscas no existe.</p>
        <Link to="/post">Volver al blog</Link>
      </div>
    )
  }

  return (
    <div className="post-detail-page">
      <article className="post-article">
        <header className="post-header">
          <h1>{post.title}</h1>
          <time className="post-date">
            {new Date(post.date).toLocaleDateString('es-ES')}
          </time>
        </header>

        <img src={post.image} alt={post.title} className="post-featured-image" />

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        <footer className="post-footer">
          <Link to="/post" className="back-to-blog">
            ← Volver al blog
          </Link>
        </footer>
      </article>
    </div>
  )
}
