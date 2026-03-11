# Arquitectura de Datos - CMS React

**Proyecto:** Yerba Mate Alborada  
**CMS Recomendado:** Sanity  
**Estado:** Diseño Conceptual

---

## 📦 Content Types (Modelos de Datos)

### 1. POST (Blog Articles)

**Ubicación Actual Hugo:** `site/content/post/*/index.md`

```javascript
// Content Type: Post
{
  _id: "post-1",                    // Auto (Sanity)
  _type: "post",
  
  // Metadata
  title: "Beneficios de consumir yerba mate",
  slug: "beneficios-de-consumir-yerba-mate-de-misiones",
  description: "Descubre los múltiples beneficios para la salud...",
  
  // Publicación
  publishedAt: "2024-01-15T10:30:00Z",
  status: "published" | "draft",
  
  // Contenido
  image: {
    asset: {
      url: "https://cdn.sanity.io/...",
      alt: "Beneficios yerba mate"
    }
  },
  
  body: {
    _type: "blockContent",
    blocks: [
      {
        _type: "block",
        style: "h2",
        children: [{ _key: "...", text: "Los beneficios..." }]
      },
      {
        _type: "block",
        style: "normal",
        children: [{ _key: "...", text: "La yerba mate contiene..." }]
      }
    ]
  },
  
  // Metadata SEO
  tags: ["yerba-mate", "salud"],
  author: "Alborada Team"
}
```

**Fields en Sanity:**
```groovy
name: "post"
title: "Blog Post"
type: "document"

fields: [
  { name: "title", type: "string", validation: required },
  { name: "slug", type: "slug", source: "title" },
  { name: "description", type: "text", rows: 3 },
  { name: "publishedAt", type: "datetime" },
  { name: "image", type: "image", options: { hotspot: true } },
  { name: "body", type: "blockContent" },
  { name: "tags", type: "array", of: [{ type: "string" }] },
  { name: "status", type: "string", options: { list: ["draft", "published"] } }
]
```

---

### 2. PAGE (Páginas Principales)

**Ubicación Actual Hugo:** `site/content/{contact,products,values}/_index.md`

```javascript
// Content Type: Page
{
  _id: "page-home",
  _type: "page",
  
  title: "Inicio",
  slug: "home",
  
  sections: [
    {
      _key: "hero-1",
      _type: "sectionHero",
      title: "Yerba Mate Alborada",
      subtitle: "Elaborada con palo de origen Misiones",
      backgroundImage: { asset: {...} },
      cta: { text: "Conocer más", link: "/products" }
    },
    {
      _key: "text-1",
      _type: "sectionText",
      content: "Descubre la autenticidad..."
    },
    {
      _key: "gallery-1",
      _type: "sectionGallery",
      title: "Nuestros Productos",
      items: [
        {
          image: {...},
          title: "Producto 1",
          description: "..."
        }
      ]
    },
    {
      _key: "testimonials-1",
      _type: "sectionTestimonials",
      items: [
        {
          quote: "Excelente producto",
          author: "Cliente"
        }
      ]
    }
  ]
}
```

**Fields:**
```groovy
name: "page"
title: "Page"
type: "document"

fields: [
  { name: "title", type: "string" },
  { name: "slug", type: "slug", source: "title" },
  {
    name: "sections",
    type: "array",
    of: [
      { type: "sectionHero" },
      { type: "sectionText" },
      { type: "sectionGallery" },
      { type: "sectionTestimonials" },
      { type: "sectionPricing" },
      { type: "sectionMediaBlock" }
    ]
  }
]
```

---

### 3. HERO SECTION

```javascript
{
  _type: "sectionHero",
  title: string,
  subtitle?: string,
  backgroundImage: image,
  cta?: {
    text: string,
    link: string
  }
}
```

---

### 4. PRICING/PLANES SECTION

**Ubicación Actual Hugo:** `site/content/products/_index.md` → `params.pricing_plans`

```javascript
{
  _type: "sectionPricing",
  title: "Planes de Asociación",
  description?: string,
  plans: [
    {
      _key: "plan-representante",
      name: "Representante",
      description: "Para representantes de ventas",
      benefits: ["Comisión competitiva", "Material de marketing", ...],
      ctaText: "Contactar",
      ctaLink: "https://wa.me/543765042085"
    },
    // ... más planes
  ]
}
```

---

### 5. TESTIMONIALS SECTION

```javascript
{
  _type: "sectionTestimonials",
  title: "Lo que dicen nuestros clientes",
  items: [
    {
      quote: "La mejor yerba mate que hemos probado",
      author: "Cliente Satisfecho 1"
    },
    // ...
  ]
}
```

---

### 6. MEDIA BLOCK SECTION

**Ubicación Actual Hugo:** `site/layouts/partials/media-block.html`

```javascript
{
  _type: "sectionMediaBlock",
  title: "Yerba Mate",
  description: "La yerba mate es mucho más que una bebida...",
  image: { asset: {...} },
  reverse: false  // true = imagen izquierda
}
```

---

### 7. SETTINGS (Configuración Global)

**Ubicación Actual Hugo:** `site/hugo.toml`, `site/data/footer.json`

```javascript
{
  _id: "settings",
  _type: "settings",
  
  site: {
    title: "Yerba Mate Alborada",
    description: "Yerba Mate elaborada con palo de origen Misiones",
    url: "https://yerbamatealborada.com",
    defaultImage: { asset: {...} }
  },
  
  navigation: [
    { label: "Productos", path: "/products" },
    { label: "Acerca de", path: "/values" },
    { label: "Blog", path: "/post" },
    { label: "Contacto", path: "/contact" }
  ],
  
  footer: {
    newsletter: {
      title: "Boletín",
      blurb: "Adherite para recibir noticias..."
    },
    social: {
      whatsapp: "https://wa.me/543765042085",
      email: "alboradayerbamate@gmail.com",
      instagram: "...",
      maps: "..."
    }
  },
  
  seo: {
    ogImage: { asset: {...} },
    twitterHandle: "@alborada"
  }
}
```

---

## 🔄 MIGRACIÓN DESDE HUGO → SANITY

### Script Conceptual

```javascript
// migrate.js
const fs = require('fs')
const matter = require('gray-matter')
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: 'xyz',
  dataset: 'production',
  token: process.env.SANITY_TOKEN
})

// 1. Migrar Posts
function migratePosts() {
  const postsDir = 'site/content/post'
  const posts = fs.readdirSync(postsDir)
  
  posts.forEach(folder => {
    const filePath = `${postsDir}/${folder}/index.md`
    const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
    
    const doc = {
      _type: 'post',
      title: data.title,
      slug: { current: folder },
      description: data.description,
      publishedAt: data.date,
      image: {
        asset: { /* referencia a imagen en Sanity */ }
      },
      body: convertMarkdownToBlockContent(content),
      tags: data.tags || []
    }
    
    client.create(doc)
      .then(() => console.log(`✓ ${folder}`))
      .catch(err => console.error(`✗ ${folder}: ${err}`))
  })
}

// 2. Migrar Páginas
function migratePages() {
  const pagesConfig = {
    'site/content/_index.md': { slug: 'home', sections: [...] },
    'site/content/products/_index.md': { slug: 'products', sections: [...] },
    'site/content/values/_index.md': { slug: 'values', sections: [...] },
    'site/content/contact/_index.md': { slug: 'contact', sections: [...] }
  }
  
  Object.entries(pagesConfig).forEach(([file, config]) => {
    const { data } = matter(fs.readFileSync(file, 'utf8'))
    
    const doc = {
      _type: 'page',
      title: data.title,
      slug: { current: config.slug },
      sections: convertSections(data, config.sections)
    }
    
    client.create(doc)
  })
}

// 3. Cargar Imágenes
async function uploadImages() {
  const imgDir = 'site/assets/img'
  
  fs.readdirSync(imgDir).forEach(file => {
    const stream = fs.createReadStream(`${imgDir}/${file}`)
    
    client.assets.upload('image', stream)
      .then(asset => console.log(`✓ ${file}`))
      .catch(err => console.error(`✗ ${file}`))
  })
}

// Ejecutar
migratePosts()
migratePages()
uploadImages()
```

---

## 📊 SCHEMA QUERIES (GROQ en Sanity)

### Obtener todos los posts

```groq
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  description,
  "image": image.asset->url,
  tags
}
```

### Obtener post detallado

```groq
*[_type == "post" && slug.current == "beneficios-yerba-mate"] {
  title,
  slug,
  publishedAt,
  "author": author->name,
  image {
    asset->{ url, alt },
    hotspot
  },
  body,
  tags
}
```

### Obtener página con secciones

```groq
*[_type == "page" && slug.current == "products"] {
  title,
  sections[] {
    _type,
    _type == "sectionPricing" => {
      title,
      plans[] {
        name,
        description,
        benefits,
        ctaLink
      }
    },
    _type == "sectionTestimonials" => {
      title,
      items[] {
        quote,
        author
      }
    }
  }
}
```

### Obtener configuración global

```groq
*[_type == "settings"][0] {
  site,
  navigation,
  footer,
  seo
}
```

---

## 🔗 INTEGRACIÓN EN REACT

### Hook usePosts

```jsx
// src/hooks/usePosts.js
import { useEffect, useState } from 'react'
import sanityClient from '../sanityClient'

export function usePosts() {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        description,
        "image": image.asset->url
      }`)
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])
  
  return { posts, loading, error }
}
```

### Hook usePost (single)

```jsx
export function usePost(slug) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if (!slug) return
    
    sanityClient
      .fetch(`*[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        image { asset->{ url } },
        body,
        tags
      }`)
      .then(setPost)
      .finally(() => setLoading(false))
  }, [slug])
  
  return { post, loading }
}
```

### Hook usePages

```jsx
export function usePage(slug) {
  const [page, setPage] = useState(null)
  
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "page" && slug.current == "${slug}"][0]`)
      .then(setPage)
  }, [slug])
  
  return page
}
```

---

## 📁 ESTRUCTURA RESULTANTE

```
react-app/
├── src/
│   ├── hooks/
│   │   ├── usePosts.js
│   │   ├── usePost.js
│   │   ├── usePage.js
│   │   └── useSettings.js
│   ├── components/
│   │   ├── sections/
│   │   │   ├── SectionHero.jsx
│   │   │   ├── SectionText.jsx
│   │   │   ├── SectionPricing.jsx
│   │   │   ├── SectionTestimonials.jsx
│   │   │   └── SectionMediaBlock.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx (usa usePage('home'))
│   │   ├── Products.jsx (usa usePage('products'))
│   │   ├── Blog.jsx (usa usePosts())
│   │   ├── PostDetail.jsx (usa usePost(slug))
│   │   └── ...
│   ├── lib/
│   │   └── sanityClient.js
│   └── ...
├── sanity/
│   ├── schemaTypes/
│   │   ├── post.js
│   │   ├── page.js
│   │   ├── sections.js
│   │   ├── settings.js
│   │   └── ...
│   ├── sanity.config.js
│   └── ...
```

---

## ✅ VENTAJAS DE ESTA ARQUITECTURA

1. **Flexible:** Nuevos section types sin cambiar estructura
2. **Reutilizable:** Mismo componente en múltiples páginas
3. **Versionable:** Todo en Sanity con historial
4. **Tipo-seguro:** Definición clara de tipos
5. **Escalable:** Manejo de >1000 documentos sin problema
6. **Localizable:** Fácil agregar idiomas después
7. **Webhook-ready:** Rebuild automático en nuevos contenidos

---

**Próximo paso:** ¿Implementamos Sanity?
