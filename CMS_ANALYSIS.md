# Análisis de Implementación CMS - Proyecto React Alborada

**Fecha:** Marzo 2026  
**Proyecto:** Migración Hugo → React  
**Status:** En Análisis

---

## 📊 ANÁLISIS - CMS ACTUAL (DECAP // NETLIFY CMS)

### ¿Cómo Funciona Ahora?

```
┌─────────────────────────────────────────┐
│   Decap CMS (Netlify CMS)              │
│   URL: /admin/                          │
└──────────────┬──────────────────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌────────────────┐  ┌──────────────────┐
│ Netlify Auth   │  │ Git as Backend   │
│ (Netlify ID)   │  │ (GitHub commits) │
└────────────────┘  └──────────────────┘
       │                     │
       └─────────┬───────────┘
               ▼
    ┌──────────────────┐
    │ Edita Markdown   │
    │ + YAML Front     │
    │ Matter           │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────────┐
    │ site/content/        │
    │ site/data/           │
    │ (archivos git)       │
    └────────┬─────────────┘
             │
             ▼
    ┌──────────────────────┐
    │ Hugo genera HTML     │
    │ (build + deploy)     │
    └──────────────────────┘
```

### ✅ Fortalezas de Decap CMS

- **Git-based:** Todo en versionamiento
- **Sin servidor:** No requiere backend separado
- **Netlify Identity:** Autenticación integrada
- **Archivos markdown:** Humanos legibles
- **Configuración simple:** Single config.yml file
- **Bajo costo:** Funciona con static hosting

### ❌ Limitaciones Decap CMS

- **Solo markdown:** No ideal para contenido complejo
- **Previsualizaciones limitadas:** Requiere componentes React custom
- **No escalable:** Complejo con >100 posts
- **Sin queries dinámicas:** Todo flat file
- **Workflow editorial basic:** Sin roles complejos
- **UX lenta:** Para edits en vivo

---

## 🔄 OPCIONES CMS PARA REACT

### OPCIÓN 1: Mantener Decap CMS (Simple Migration)

```
┌─────────────────────────────────────┐
│   React App (Port 3000)             │
│   ├── App.jsx                       │
│   ├── pages/                        │
│   └── components/                   │
└────────────┬────────────────────────┘
             │
      ┌──────┴───────┐
      ▼              ▼
┌─────────────┐  ┌──────────────┐
│ Decap CMS   │  │ JSON Data    │
│ @ /admin/   │  │ (git repo)   │
└─────────────┘  └──────────────┘
      │              │
      └──────┬───────┘
             ▼
    ┌──────────────────┐
    │ React reads JSON │
    │ en tiempo real   │
    └──────────────────┘
```

**Implementación:**
```jsx
// react-app/src/pages/Blog.jsx
import postsData from '../data/posts.json'

export default function Blog() {
  // Decap CMS escribe a posts.json
  // React lee y renderiza
  const posts = postsData
  return (...)
}
```

| Aspecto | Detalles |
|---------|----------|
| **Esfuerzo de Migración** | ⭐⭐ Bajo |
| **Setup Time** | 1-2 horas |
| **Costo** | $0 (Netlify free) |
| **Escalabilidad** | 📊 Medio (OK hasta 200 posts) |
| **UX Editor** | 😐 Básica |
| **Querys** | ❌ No hay |
| **Recomendado si** | Contenido estable, pocos cambios |

---

### OPCIÓN 2: Strapi (CMS Open Source)

```
┌──────────────────────────┐
│   React App (3000)       │
└────────────┬─────────────┘
             │
      ┌──────┴──────────┐
      ▼                 ▼
┌──────────────┐   ┌──────────────┐
│ Strapi Admin │   │ REST/GraphQL │
│ (localhost)  │   │ API (3001)   │
└──────────────┘   └──────────────┘
                        │
                        ▼
                   ┌──────────────┐
                   │ PostgreSQL   │
                   │ (base datos) │
                   └──────────────┘
```

**Implementación:**
```jsx
// Hook para consumir Strapi
const usePosts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(r => r.json())
      .then(data => setPosts(data.data))
  }, [])
  
  return posts
}
```

| Aspecto | Detalles |
|---------|----------|
| **Esfuerzo de Migración** | ⭐⭐⭐ Medio |
| **Setup Time** | 4-6 horas |
| **Costo** | $0 (self-hosted) o $$ (cloud) |
| **Escalabilidad** | 📊📊📊 Excelente |
| **UX Editor** | 😊 Muy buena |
| **Querys** | ✅ REST + GraphQL |
| **Recomendado si** | Crecimiento esperado, contenido dinámico |

**Ventajas:**
- Full CMS backend
- Roles y permisos complejos
- Versionamiento de contenido
- APIs REST/GraphQL
- Panel admin profesional
- Self-hosted (control total)

**Desventajas:**
- Requiere backend/database
- Hosting adicional complejo
- Más setup inicial
- Curva de aprendizaje media

---

### OPCIÓN 3: Sanity (Headless CMS en Cloud)

```
┌──────────────────────────┐
│   React App (3000)       │
└────────────┬─────────────┘
             │
      ┌──────┴──────────────────┐
      ▼                         ▼
┌──────────────┐   ┌──────────────────┐
│ Sanity Studio│   │ Sanity API Cloud │
│ (localhost)  │   │ (cdn.sanity.io)  │
└──────────────┘   └──────────────────┘
```

**Implementación:**
```jsx
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'xyz',
  dataset: 'production',
  useCdn: true
})

const usePosts = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    client.fetch(`*[_type == "post"]`)
      .then(setPosts)
  }, [])
  
  return posts
}
```

| Aspecto | Detalles |
|---------|----------|
| **Esfuerzo de Migración** | ⭐⭐⭐ Medio |
| **Setup Time** | 3-4 horas |
| **Costo** | FREE tier (hasta 500k) o $$ |
| **Escalabilidad** | 📊📊📊 Excelente |
| **UX Editor** | 😊😊 Excelente - intuitive |
| **Querys** | ✅ GROQ (similar GraphQL) |
| **Recomendado si** | Hostless, CMS potente, visión enterprise |

**Ventajas:**
- Zero backend infrastructure
- CMS muy intuitivo
- GROQ queries (poderosas)
- Versioning + workflow editorial
- CDN global
- Free tier generoso

**Desventajas:**
- Depende del vendor cloud
- Curva de aprendizaje (GROQ)
- Costo puede crecer rápido
- Lock-in a Sanity

---

### OPCIÓN 4: Contentful (Enterprise Headless)

```
┌──────────────────────────┐
│   React App (3000)       │
└────────────┬─────────────┘
             │
      ┌──────┴──────────────────┐
      ▼                         ▼
┌──────────────┐   ┌──────────────────┐
│ Contentful   │   │ Contentful API   │
│ Web App      │   │ (GraphQL/REST)   │
│ (contentful) │   │ (cdn.contentful) │
└──────────────┘   └──────────────────┘
```

| Aspecto | Detalles |
|---------|----------|
| **Esfuerzo de Migración** | ⭐⭐⭐⭐ Alto |
| **Setup Time** | 6-8 horas |
| **Costo** | FREE tier o $$$ (alto) |
| **Escalabilidad** | 📊📊📊📊 Enterprise |
| **UX Editor** | 😊😊😊 Profesional |
| **Querys** | ✅ GraphQL |
| **Recomendado si** | Team grande, enterprise requirements |

**Ventajas:**
- Más potente del mercado
- Roles/permisos avanzados
- CMS profesional
- Workflow editorial completo

**Desventajas:**
- Caro (desde $400/mes)
- Overkill para proyecto pequeño
- Setup complejo
- Curva de aprendizaje alta

---

### OPCIÓN 5: JSON en Git (Simplista)

```
┌──────────────────────────┐
│   React App              │
└────────────┬─────────────┘
             │
      ┌──────┴──────────────────┐
      ▼                         ▼
┌──────────────┐   ┌──────────────────┐
│ Editar JSON  │   │ Git commit       │
│ en editor    │   │ automático        │
│ manual       │   │ (via API)        │
└──────────────┘   └──────────────────┘
             │
             ▼
    ┌──────────────────┐
    │ React re-renders │
    │ automáticamente  │
    └──────────────────┘
```

**Estructura:**
```
react-app/
├── src/
│   └── data/
│       ├── posts.json
│       ├── pages.json
│       └── config.json
└── cms/
    └── simple-editor.tsx
```

**posts.json:**
```json
[
  {
    "id": "1",
    "slug": "beneficios-yerba-mate",
    "title": "Beneficios...",
    "date": "2024-01-15",
    "content": "...",
    "image": "/img/post-1.jpg"
  }
]
```

| Aspecto | Detalles |
|---------|----------|
| **Esfuerzo de Migración** | ⭐ Muy bajo |
| **Setup Time** | 30 min - 1 hora |
| **Costo** | $0 |
| **Escalabilidad** | 📊 Bajo (OK hasta 50 posts) |
| **UX Editor** | 😞 Ninguno o homebrew |
| **Querys** | ❌ No hay |
| **Recomendado si** | MVP rápido, contenido mínimo |

**Ventajas:**
- Cero complejidad
- Cero costo
- Rápido de implementar
- Git-based (versionamiento)

**Desventajas:**
- Sin interfaz de edición
- Workflow manual
- No escalable
- Sin validaciones

---

## 🏆 COMPARATIVA GENERAL

| Criterio | Decap | Strapi | Sanity | Contentful | JSON |
|----------|-------|--------|--------|-----------|------|
| **Setup** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐ |
| **UX Editor** | 😐 | 😊 | 😊😊 | 😊😊😊 | ❌ |
| **Costo** | $0 | $0* | $0-$$ | $$$$ | $0 |
| **Escalabilidad** | 📊 | 📊📊📊 | 📊📊📊 | 📊📊📊📊 | 📊 |
| **APIs** | ❌ | ✅ | ✅ | ✅ | ❌ |
| **Roles** | Básicos | Avanzados | Avanzados | Muy avanzados | ❌ |
| **Mejor para** | Static | Dinámico | Moderno | Enterprise | MVP |

*Strapi: Self-hosted es gratis, pero requiere server

---

## 📋 ARQUITECTURA DE DATOS RECOMENDADA

### Modelo Genérico (Compatible con cualquier CMS)

```javascript
// Post/Blog Content Type
{
  id: string,
  slug: string,
  title: string,
  description: string,
  image: { url, alt },
  content: string (markdown),
  date: ISO date,
  author?: string,
  tags?: string[],
  published: boolean
}

// Page Content Type
{
  id: string,
  slug: string,
  title: string,
  sections: [
    {
      type: "hero" | "text" | "grid" | "testimonials" | "form",
      data: {...}
    }
  ]
}

// Settings Content Type
{
  siteName: string,
  siteDescription: string,
  logo: { url, alt },
  navigation: [{ label, path }],
  social: { whatsapp, email, instagram, maps },
  footer: { title, blurb }
}
```

---

## 🎯 RECOMENDACIÓN FINAL

### Para Este Proyecto (Alborada Yerba Mate):

**Opción Recomendada: Sanity CMS** ✅

**Razones:**

1. **Balance Perfecto:**
   - Cero infraestructura (cloud)
   - CMS intuitivo y potente
   - Free tier cubre nuestras necesidades
   - Escalable si crece

2. **Características:**
   - GROQ queries (flexible)
   - Versionamiento de contenido
   - Workflow editorial (para equipo futuro)
   - Imagen/media management
   - CDN integrada

3. **Costo:**
   - FREE tier: 500k banwidth, suficiente
   - Si crece: $99/mes (documentos ilimitados)

4. **Migración:**
   - Rápida desde Hugo
   - UI limpia y moderna
   - No requiere backend

5. **Alternativa Cercana:**
   - Si preferís "git-based": Mantener Decap CMS
   - Si preferís "self-hosted": Strapi

### Plan de Implementación Sanity:

```
Fase 1 (2h): Setup Sanity project
├── npm install sanity
├── Crear content types (Post, Pages, Settings)
└── Importar datos desde Hugo

Fase 2 (3h): Conectar React
├── Setup cliente Sanity en React
├── Crear hooks usePost, usePosts
├── Integrar en componentes

Fase 3 (2h): Testing + Deploy
├── Validar todas las páginas
├── Setup webhooks para rebuild
└── Deploy en producción
```

---

## 📚 Recursos

- **Decap CMS:** https://decapcms.org
- **Strapi:** https://strapi.io
- **Sanity:** https://www.sanity.io
- **Contentful:** https://www.contentful.com

---

**Próximo paso:** ¿Comenzamos con Sanity o prefieres evaluado más?
