import React from 'react'
import Hero from '../components/Hero'
import MediaBlock from '../components/MediaBlock'
import '../css/pages/values.css'

export default function Values() {
  return (
    <div className="values-page">
      <Hero
        image="/img/hero-values.jpg"
        title="Nuestros Valores"
        subtitle="Tradición, calidad y sabor"
      />

      <MediaBlock
        title="Yerba Mate"
        text="La yerba mate es mucho más que una bebida. Es parte de nuestra cultura, 
        nuestra tradición y nuestra identidad. En Alborada, creemos que cada taza 
        debe transmitir la esencia de Misiones, el lugar donde se produce el mejor 
        mate del mundo. Nuestro compromiso es llevar a tu casa la autenticidad 
        de esta experiencia única."
        image="/img/yerba-mate-section.jpg"
        reverse={false}
      />

      <MediaBlock
        title="Origen"
        text="Misiones es la cuna de la yerba mate de mejor calidad. Sus suelos fértiles, 
        su clima subtropical y la tradición de sus productores garantizan un producto 
        excepcional. Trabajamos directamente con productores locales que comparten 
        nuestros valores de sostenibilidad y calidad. Cada paquete de Alborada 
        lleva consigo la historia, el trabajo y la pasión de Misiones."
        image="/img/origen-section.jpg"
        reverse={true}
      />
    </div>
  )
}
