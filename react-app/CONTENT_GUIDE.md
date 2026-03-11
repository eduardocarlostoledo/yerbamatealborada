# Guía: Agregar Contenido Manualmente

**Proyecto:** Yerba Mate Alborada - React  
**Arquitectura:** React Puro + CSS + JSON Estático  
**Workflow:** Manual (sin CMS)

---

## 📋 Estructura de Datos

```
react-app/src/data/
├── config.json          ← Config global del sitio
├── posts.json           ← Blog articles
└── pages.json           ← (Futuro) Datos de páginas dinámicas
```

---

## ✍️ CÓMO AGREGAR UN BLOG POST

### 1. Abrir `src/data/posts.json`

### 2. Agregar objeto nuevo al array:

```json
{
  "id": "8",
  "slug": "nuevo-post-titulo",
  "title": "Nuevo Post - Título Completo",
  "date": "2024-03-11",
  "description": "Descripción corta que aparece en listado de blog",
  "image": "/img/blog-post-8.jpg",
  "content": "<h2>Título del post</h2>\n<p>Contenido en HTML...</p>\n<h3>Sección 2</h3>\n<p>Más contenido...</p>"
}
```

### 3. Campos Requeridos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | string | ID único (puede ser número como string) |
| `slug` | string | URL-friendly (ej: `nuevo-post-titulo`) |
| `title` | string | Título del post (aparece en listado y detail) |
| `date` | string | Formato ISO: `YYYY-MM-DD` |
| `description` | string | Resumen corto (aparece en listado) |
| `image` | string | Ruta de imagen (ej: `/img/blog-post-8.jpg`) |
| `content` | string | HTML del contenido (puede incluir `\n` para saltos de línea) |

### 4. Ejemplo Completo:

```json
{
  "id": "8",
  "slug": "beneficios-salud-yerba-mate-2024",
  "title": "Nuevos beneficios para la salud - Estudio 2024",
  "date": "2024-03-11",
  "description": "Recientes estudios demuestran nuevos beneficios de la yerba mate",
  "image": "/img/estudio-2024.jpg",
  "content": "<h2>Estudio Científico 2024</h2>\n<p>Un nuevo estudio realizado por la Universidad de Misiones ha demostrado...</p>\n<h3>Hallazgos principales</h3>\n<ul>\n<li>Punto 1</li>\n<li>Punto 2</li>\n</ul>"
}
```

### 5. Guardar y Commit:

```bash
cd react-app
git add src/data/posts.json
git commit -m "feat: nuevo post - beneficios salud yerba mate 2024"
git push origin react-migration
```

**¡Automáticamente aparecerá en:**
- `/post` (listado de blog) ✓
- `/post/beneficios-salud-yerba-mate-2024` (página individual) ✓
- `/` (últimos 4 posts) ✓

---

## 🖼️ CÓMO AGREGAR IMÁGENES

### 1. Copiar imagen a `public/img/`

```
react-app/public/img/
├── matecito-blanco.jpeg
├── producto-principal.png
├── blog-post-1.jpg
├── blog-post-8.jpg  ← NUEVA
└── ...
```

### 2. Referencia en posts.json:

```json
"image": "/img/blog-post-8.jpg"
```

---

## ⚙️ CÓMO EDITAR CONFIG GLOBAL

### Archivo: `src/data/config.json`

```json
{
  "site": {
    "title": "Nombre del sitio",
    "description": "Descripción para SEO",
    "url": "https://yerbamatealborada.com",
    "defaultImage": "/img/default.jpg"
  },
  "navigation": [
    { "label": "Productos", "path": "/products" },
    { "label": "Acerca de", "path": "/values" },
    { "label": "Blog", "path": "/post" },
    { "label": "Contacto", "path": "/contact" }
  ],
  "footer": {
    "newsletter": {
      "title": "Boletín",
      "blurb": "Texto del newsletter"
    },
    "social": {
      "whatsapp": "https://wa.me/...",
      "email": "email@example.com",
      "instagram": "https://instagram.com/...",
      "maps": "https://maps.google.com/..."
    }
  }
}
```

**Cambios que se reflejan automáticamente:**
- Título en navegación/footer
- Links sociales
- Mensaje newsletter

---

## 🎨 CÓMO AGREGAR COMPONENTES CUSTOM

Cuando el cliente pida una sección nueva (ej: "Testimonios", "FAQ", "Galería"):

### 1. Crear componente React

```bash
# src/components/Testimonials.jsx
touch src/components/Testimonials.jsx
```

```jsx
export default function Testimonials() {
  return (
    <section className="testimonials">
      {/* Contenido */}
    </section>
  )
}
```

### 2. Crear CSS

```bash
touch src/css/components/testimonials.css
```

### 3. Importar en página

```jsx
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/* ... */}
    </>
  )
}
```

### 4. Si necesita datos dinámicos:

Crear archivo en `src/data/`

```json
// src/data/testimonials.json
[
  {
    "quote": "Excelente producto",
    "author": "Cliente 1"
  }
]
```

---

## 🚀 DEPLOY A NETLIFY

### Primera vez:

```bash
# Desde raíz del proyecto
cd react-app
npm run build
# Conectar a Netlify (UI o CLI)
netlify deploy --prod
```

### Después de cambios:

```bash
cd react-app
git add .
git commit -m "actualización contenido"
git push origin react-migration
# Netlify auto-deploy automáticamente
```

---

## 📝 EDICIÓN DE CONTENIDO - WORKFLOW ÁGIL

### Proceso Simple:

```
1. Recibir solicitud del cliente
   ↓
2. Editar src/data/posts.json (o archivo corresponda)
   ↓
3. Copiar imágenes a public/img/
   ↓
4. git add + git commit + git push
   ↓
5. Netlify auto-deploy en 2-3 minutos
   ↓
6. ✓ Live en https://yerbamatealborada.com
```

### Sin CMS = Sin dependencias externas

- ✓ Control total del contenido
- ✓ Histórico en Git (versiones)
- ✓ Cambios inmediatos
- ✓ Costo: $0 (excepto hosting)
- ✗ Requiere edición manual de JSON

---

## 📊 CASOS DE USO COMUNES

### Actualizar teléfono WhatsApp

**Archivo:** `src/data/config.json`

```json
"whatsapp": "https://wa.me/54XXXXXXXXXX"  ← Cambiar aquí
```

### Cambiar texto footer newsletter

**Archivo:** `src/data/config.json`

```json
"newsletter": {
  "title": "Boletín",
  "blurb": "NUEVO TEXTO AQUÍ"
}
```

### Agregar nuevo link en navegación

**Archivo:** `src/data/config.json`

```json
"navigation": [
  { "label": "Productos", "path": "/products" },
  { "label": "Nuevo Item", "path": "/nueva-pagina" }  ← Agregar
]
```

### Ocultar un post sin borrarlo

**Archivo:** `src/data/posts.json`

```json
// Opción: Mover post al final del array (menos visible)
// O: Crear campo "published": false (requiere cambio en componentes)
```

---

## 🔧 COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview de build local
npm run preview

# Lint (verificar código)
npm run lint
```

---

## ⚠️ NOTAS IMPORTANTES

1. **Siempre validar JSON:** Use https://jsonlint.com si tiene dudas
2. **HTML en content:** Escapar caracteres especiales si los usa
3. **Rutas de imágenes:** Relativas a `public/` (ej: `/img/file.jpg`)
4. **Slugs únicos:** Cada post debe tener slug diferente
5. **Git pull antes de editar:** Para evitar conflictos

---

## 📞 SOPORTE RÁPIDO

**¿El post no aparece?**
- ✓ Validar JSON syntax (jsonlint.com)
- ✓ Verificar slug único y sin espacios
- ✓ Hacer `git push`
- ✓ Esperar 2-3 min deploy de Netlify

**¿Imagen no carga?**
- ✓ Verificar que archivo existe en `public/img/`
- ✓ Verificar ruta exacta en JSON
- ✓ Hacer push y esperar deploy

**¿Necesito agregar sección nueva?**
- ✓ Crear issue/request
- ✓ Implement component Custom
- ✓ Deploy

---

**Workflow = Máxima Simpleza. Solo React + JSON + Git. 🚀**
