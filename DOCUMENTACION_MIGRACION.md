# Documentación de Migración: Hugo CMS → React + CSS Puro

**Proyecto:** Yerba Mate Alborada  
**Fecha de documentación:** Marzo 2026  
**Objetivo:** Capturar completa estructura del sitio Hugo para migración a React

---

## 📋 Tabla de Contenidos

1. [Configuración Base](#configuración-base)
2. [Estructura de Contenido](#estructura-de-contenido)
3. [Páginas Principales](#páginas-principales)
4. [Componentes/Partials](#componentespartials)
5. [Estructura de Datos](#estructura-de-datos)
6. [Navegación Global](#navegación-global)
7. [Estilos (CSS/SCSS)](#estilos-cssscss)
8. [JavaScript & Funcionalidades](#javascript--funcionalidades)
9. [Imágenes y Activos](#imágenes-y-activos)
10. [SEO & Metadata](#seo--metadata)
11. [Build & Deployment](#build--deployment)

---

## Configuración Base

### Settings Hugo (site/hugo.toml)
- **Titulo:** "Yerba Mate Alborada - Yerba Mate elaborada con palo de origen Misiones"
- **URL Base:** `/` (relative)
- **Idioma:** en-us
- **Idioma Display:** es (visible en site)
- **Regex Filters:** Enabled
- **Output Formats:** Standard
- **Características Deshabilitadas:**
  - RSS feed
  - Taxonomy pages
  - Sitemap (aunque hay un static sitemap.xml)

### Imagen Predeterminada
- `img/matecito-blanco.jpeg` - Usada como OG image default

---

## Estructura de Contenido

### Ubicación Principal
```
site/content/
├── _index.md (Página de inicio)
├── post/ (Blog - 7 artículos)
├── products/ (Sección productos)
├── values/ (Sección acerca de)
└── contact/ (Sección contacto)
```

### Rutas URL Generadas
| Ruta | Origen | Tipo |
|------|--------|------|
| `/` | `_index.md` | Homepage |
| `/post/` | post/ | Blog listing |
| `/post/{slug}/` | post/*.md | Blog single |
| `/products/` | products/_index.md | Products page |
| `/values/` | values/_index.md | About/Values page |
| `/contact/` | contact/_index.md | Contact page |

---

## Páginas Principales

### 1. HOMEPAGE (`site/content/_index.md`)

**Tipo:** Homepage  
**Layout:** `layouts/index.html`

**Secciones en orden:**
1. **Jumbotron (Hero)** 
   - Imagen de fondo (hero image)
   - Título principal
   - Subtítulo
   - CTA button (opcional)

2. **Blurb Section (Short-text)**
   - Texto descriptivo corto sobre la marca

3. **Product Showcase (2-up)**
   - Columna 1: `producto-principal.png`
   - Columna 2: `producto-2-principal.png`
   - Con textos descriptivos

4. **Values Preview (Text-and-image)**
   - Imagen izquierda + texto derecha
   - Link a `/values`

5. **Recent Blog (4 últimos posts)**
   - Tarjetas con imagen, título, fecha
   - Link "Read More"

**Front Matter:**
```yaml
title: "Yerba Mate Alborada"
description: "..."
params:
  hero_image: "..."
  hero_subtitle: "..."
  blurb_text: "..."
  products: 
    - imagen: "producto-principal.png"
      titulo: "Producto 1"
      descripcion: "..."
    - imagen: "producto-2-principal.png"
      titulo: "Producto 2"
      descripcion: "..."
  values_section:
    title: "Nuestros Valores"
    text: "..."
    image: "..."
```

---

### 2. PRODUCTS (`site/content/products/_index.md`)

**Tipo:** Section: products  
**Layout:** `layouts/section/products.html`

**Secciones en orden:**
1. **Jumbotron Header**
   - Imagen, título, subtítulo

2. **Intro Grid (4-up)**
   - 4 tarjetas descriptivas de productos/categorías
   - Imagen + título + descripción corta

3. **Main Description**
   - Texto largo sobre producto

4. **Image Grid**
   - Galería de imágenes de productos

5. **Testimonials Section**
   - Múltiples blockquotes con testimonios

6. **Full-Width Image**
   - Imagen de impacto (hero image)

7. **Pricing/Partnership Table**
   - 4 planes de asociación:
     - **Representante** - Sales representative
     - **Distribuidor** - Distributor
     - **Mayorista** - Wholesale
     - **Revendedor** - Reseller
   - Cada plan:
     - Nombre
     - Descripción
     - Beneficios (list)
     - CTA button (WhatsApp link: `https://wa.me/543765042085`)

**Front Matter:**
```yaml
title: "Productos"
type: "products"
params:
  hero_image: "..."
  hero_title: "Nuestros Productos"
  intro_cards:
    - title: "..."
      text: "..."
      image: "..."
  description: "..."
  images: ["img1.jpg", "img2.jpg", ...]
  testimonials:
    - quote: "..."
      author: "..."
  pricing_plans:
    - name: "Representante"
      description: "..."
      benefits: ["...", "..."]
      cta_text: "Contactar"
      cta_url: "https://wa.me/543765042085"
```

---

### 3. VALUES/ABOUT (`site/content/values/_index.md`)

**Tipo:** Section: values  
**Layout:** `layouts/section/values.html`

**Secciones en orden:**
1. **Jumbotron Header**
   - Imagen, título, subtítulo

2. **Media Block 1: "Yerba Mate"**
   - Texto IZQUIERDA / Imagen DERECHA
   - Contenido sobre la marca/filosofía
   - Hero image

3. **Media Block 2: "Origen" (REVERSED)**
   - Imagen IZQUIERDA / Texto DERECHA
   - Contenido sobre origen y producción
   - Detalles de Misiones

**Front Matter:**
```yaml
title: "Acerca de Nosotros"
type: "values"
params:
  hero_image: "..."
  hero_title: "Nuestros Valores"
  sections:
    - title: "Yerba Mate"
      text: "..."
      image: "..."
      align: "left"
    - title: "Origen"
      text: "..."
      image: "..."
      align: "right"
```

---

### 4. CONTACT (`site/content/contact/_index.md`)

**Tipo:** Section: contact  
**Layout:** `layouts/section/contact.html`

**Secciones en orden:**
1. **Logo**
   - Imagen/logo de la marca

2. **Contact Entries**
   - Tarjetas de información:
     - Email: `alboradayerbamate@gmail.com`
     - (posibles: teléfono, dirección, etc.)

3. **Contact Form**
   - Campos:
     - Nombre (text)
     - Email (email)
     - Mensaje (textarea)
     - Submit button
   - Acción: Form submission (Netlify form, endpoint, etc.)

4. **Additional Contact Methods**
   - WhatsApp link: `https://wa.me/543765042085`
   - Dirección física (si aplica)
   - Teléfono
   - Instagram link

**Front Matter:**
```yaml
title: "Contacto"
type: "contact"
params:
  logo: "logo.png"
  contact_entries:
    - label: "Email"
      value: "alboradayerbamate@gmail.com"
    - label: "Teléfono"
      value: "+54 (376) 504-2085"
  whatsapp: "https://wa.me/543765042085"
  instagram: "..."
  address: "..."
```

---

### 5. BLOG POSTS (`site/content/post/`)

**Tipo:** Post type  
**Layout:** `layouts/post/single.html`

**Posts existentes:**
1. `beneficios-de-consumir-yerba-mate-de-misiones/` - Benefits of consuming yerba mate
2. `brewing-chemex/` - How to brew with Chemex
3. `buscamos-representantes-revendedores-y-distribuidores/` - Seek reps/resellers
4. `cómo-preparar-el-mate-perfecto-con-yerba-mate-de-misiones/` - Perfect mate recipe
5. `Qué-es-la-Yerba-Mate/` - What is Yerba Mate
6. `yerba-mate-alborada-calidad-y-tradición-en-cada-paquete/` - Quality & tradition
7. `yerba-mate-de-misiones-tradición-calidad-y-sabor-en-cada-sorbo/` - Misiones traditions

**Estructura de Post:**
- Título
- Fecha (date)
- Featured image (hero image)
- Contenido (markdown body)
- Metadata: Reading time (auto-calculated)
- Tags/Categorías (opcional)

**Front Matter Post:**
```yaml
title: "Título del Post"
date: 2024-01-15
description: "Short description"
image: "featured-image.jpg"
draft: false
categories:
  - Educación
tags:
  - yerba-mate
  - beneficios
---
```

**Layout Post:**
```
[Hero Image - Full width]
[Title + Date + Reading Time Meta]
---
[Content from markdown body]
```

---

## Componentes/Partials

### Registro de Partials (18 componentes reutilizables)

| Partial | Archivo | Props | Aplicación |
|---------|---------|-------|------------|
| **2-up** | `2-up.html` | title, subtitle, items (2 cols) | Homepage product showcase |
| **4-up** | `4-up.html` | title, items (4 card grid) | Products intro section |
| **Blog** | `blog.html` | limit (4 default) | Recent posts display |
| **Blockquote** | `blockquote.html` | quote, author | Testimonials |
| **Contact Form** | `contact-form.html` | action, fields | Contact page |
| **Footer** | `footer.html` | data (footer.json), newsletter | Site-wide footer |
| **Head** | `head.html` | site params, OG tags | Meta tags & SEO |
| **Image Grid** | `image-grid.html` | images array | Product gallery |
| **Jumbotron** | `jumbotron.html` | image, title, subtitle, cta | Hero sections |
| **Media Block** | `media-block.html` | title, text, image | Text + image (text left) |
| **Media Block Reverse** | `media-block-reverse.html` | title, text, image | Text + image (image left) |
| **Nav** | `nav.html` | menu items | Header navigation |
| **Newsletter Form** | `newsletter-form.html` | action, placeholder | Email signup (footer) |
| **Pagination** | `pagination.html` | pages, current | Blog pagination |
| **Short Text** | `short-text.html` | title, text, css_class | Simple text section |
| **Social Icon** | `social-icon.html` | platform, url | Social media links |
| **Table** | `table.html` | rows, columns | Pricing/data tables |
| **Table Column** | `table-column.html` | content, css_class | Table cell (internal) |
| **Text and Image** | `text-and-image.html` | title, text, image, cta_text, cta_url | CTA section |

---

## Estructura de Datos

### Footer Data (`site/data/footer.json`)
```json
{
  "title": "Boletín",
  "blurb": "Adherite para recibir noticias en tu correo electrónico"
}
```
**Uso:** Newsletter section en footer

### Webpack Data (`webpack.json` - generado)
```json
{
  "js": "main.[hash].js",
  "css": "styles.[hash].css"
}
```
**Uso:** Cache busting en baseof.html

---

## Navegación Global

### Header Navigation (`nav.html`)
```
LOGO (link to /)
├── /products - Productos
├── /values - Acerca de
├── /post - Blog
└── /contact - Contacto
```
**Responsive:** Hamburger menu en mobile (toggle via `data-mobile-menu`)

### Footer Navigation
```
ALBORADA Section:
├── /products - Productos
├── /values - Acerca de
├── /post - Blog
├── /contact - Contacto
└── / - Home

MÁS INFO Section:
├── Recent Posts
└── Schedule Appointment

SOCIAL Section:
├── WhatsApp: https://wa.me/543765042085
├── Email: mailto:alboradayerbamate@gmail.com
├── Instagram: (link)
└── Google Maps: (distributor map)
```

---

## Estilos (CSS/SCSS)

### Framework Base
- **Tachyons CSS v4.5.5** - Utility-first CSS framework
- **Precompilador:** SCSS (via webpack sass-loader)
- **Font:** Google Fonts - "Nunito Sans" (weights: 400, 700)

### Estructura SCSS (`src/css/`)

**Main Entry:** `main.scss`
```scss
// Imports tachyons modules via @use "path"
@use "imports/variables";
@use "imports/reset";
@use "imports/box-sizing";
@use "imports/typography";
@use "imports/spacing";
// ... 50+ module imports
```

### Módulos SCSS Disponibles

#### Reset & Basics
- `_reset.scss` - HTML5 reset
- `_box-sizing.scss` - Border-box model
- `_images.scss` - Image responsive styles

#### Layout System
- `_display.scss` - display utilities
- `_flexbox.scss` - flex layout
- `_floats.scss` - float utilities
- `_position.scss` - position (static, relative, absolute)
- `_coordinates.scss` - top, right, bottom, left

#### Spacing
- `_spacing.scss` - Margin & padding
- `_heights.scss` - Height utilities
- `_widths.scss` - Width utilities
- `_max-widths.scss` - Max-width constraints

#### Typography
- `_typography.scss` - Font families
- `_type-scale.scss` - Font sizes
- `_font-style.scss` - Italic, normal
- `_font-weight.scss` - Font weights (400, 700)
- `_line-height.scss` - Line height
- `_text-align.scss` - Text alignment
- `_text-decoration.scss` - Text decoration
- `_text-transform.scss` - Uppercase, lowercase, etc.

#### Colors & Borders
- `_colors.scss` - Text/background colors
- `_border-colors.scss` - Border color utilities
- `_borders.scss` - Border utilities
- `_border-radius.scss` - Border radius
- `_border-style.scss` - Solid, dotted, etc.
- `_border-widths.scss` - Border widths

#### Components
- `_buttons.scss` - Button styles
- `_forms.scss` - Form inputs & styling
- `_tables.scss` - Table styles
- `_lists.scss` - List styles
- `_code.scss` - Code/pre styles
- `_links.scss` - Link styles

#### Effects & States
- `_opacity.scss` - Opacity utilities
- `_outlines.scss` - Outline styles
- `_states.scss` - Hover, focus, active
- `_z-index.scss` - Z-index utilities
- `_background-size.scss` - BG sizing
- `_background-position.scss` - BG positioning

#### Responsive
- `_responsive-nav.scss` - Mobile nav
- `_media-queries.scss` - Breakpoints

#### Helpers & Debug
- `_visibility.scss` - Visibility/display
- `_white-space.scss` - Whitespace handling
- `_overflow.scss` - Overflow utilities
- `_vertical-align.scss` - Vertical alignment
- `_word-break.scss` - Word break
- `_clears.scss` - Clear floats
- `_debug.scss` - Debug grid overlay
- `_cms.scss` - CMS editor styles

#### Configuration
- `_variables.scss` - CSS variables & custom props
- `_media-queries.scss` - Breakpoint definitions

### Custom CSS (si existe)
- CMS styles en `_cms.scss` para preview editor

### Colores & Tipografía Inferidos
**Font:**
```css
font-family: "Nunito Sans", sans-serif;
font-weight: 400 /* regular */ / 700 /* bold */;
```

**Colores:** Depende de utilities de Tachyons en uso (revisar archivo CSS compilado)

---

## JavaScript & Funcionalidades

### Entry Points

#### 1. **app.js** (`src/js/app.js`)
**Responsable:** Autenticación Netlify & CMS access

```javascript
// Netlify Identity initialization
netlifyIdentity.init();

// Check for existing user
if (user) {
  // Redirect to /admin/ on first login
}

// Use: CMS access control, admin panel
```

**Features:**
- Checks for authenticated Netlify Identity user
- Manages CMS admin panel access
- Minimal client-side logic

#### 2. **cms.js** (`src/js/cms.js`)
**Responsable:** Decap CMS (formerly Netlify CMS) initialization

```javascript
// Initialize Decap CMS
decap_cms.init();

// Register preview templates (React components)
decap_cms.registerPreviewTemplate("home", HomePreview);
decap_cms.registerPreviewTemplate("post", PostPreview);
decap_cms.registerPreviewTemplate("products", ProductsPreview);
decap_cms.registerPreviewTemplate("values", ValuesPreview);
decap_cms.registerPreviewTemplate("contact", ContactPreview);
decap_cms.registerPreviewTemplate("footer", FooterPreview);

// Load editor styles
decap_cms.registerEditorStyle("../css/main.css");
```

**Features:**
- Git-based CMS for content management
- Live preview in editor
- 6 preview templates (React components)

#### 3. **CMS Preview Templates** (`src/js/cms-preview-templates/`)

**6 React Preview Components:**
- `home.js` - Homepage preview
- `post.js` - Blog post preview
- `products.js` - Products page preview
- `values.js` - Values page preview
- `contact.js` - Contact form preview
- `footer.js` - Footer preview
- `components/` - Shared preview UI components

**Render:** Real-time preview mientras se edita en CMS

### Mobile Menu Functionality

**Selector:** `data-nav`, `data-mobile-menu`
**Interaction:** CSS + vanilla JS
- Toggle hamburger button
- Show/hide mobile nav
- Close on link click

**Trigger element:**
```html
<button data-mobile-menu>
  <!-- Hamburger SVG -->
</button>

<nav data-nav>
  <!-- Mobile nav items -->
</nav>
```

### Forms Handling

#### Contact Form
- Fields: name, email, message
- Method: Netlify Forms (automatically handled)
- Submission: Server-side processing
- Success: Redirect or thank you message

#### Newsletter Form
- Field: email
- Method: External email service (depends on action URL)
- Button: Subscribe

---

## Imágenes y Activos

### Ubicación Imágenes
```
site/assets/img/          ← Storage for image assets
site/static/img/          ← Published images
img/                      ← Additional assets (img folder root)
```

### Imágenes Referenciadas en Contenido

**Homepage:**
- `producto-principal.png` - Main product image
- `producto-2-principal.png` - Secondary product
- Hero images (en front matter)
- Values section images

**Products:**
- Various product images
- Gallery images
- Hero image

**Values:**
- Section hero image
- Media block images (2)

**Blog Posts:**
- Featured images (per post)

**General:**
- `matecito-blanco.jpeg` - Default OG image
- Navigation logo
- Contact page logo
- Favicon & browserconfig

### Favicon & Metadata Icons
- `favicon.ico`
- `browserconfig.xml` - Windows tile
- `manifest.json` - PWA manifest
- `apple-touch-icon.png` (si existe)

---

## SEO & Metadata

### Head Partial (`head.html`)

**Elementos en `<head>`:**
1. **Meta Chareset:** UTF-8
2. **Viewport:** Responsive
3. **Title:** `{{ .Site.Title }}`
4. **Meta Description:** `{{ .Site.Params.description }}`
5. **Open Graph Tags:**
   - `og:title`
   - `og:description`
   - `og:image` (default: matecito-blanco.jpeg)
   - `og:url`
   - `og:type` (website/article)
6. **Twitter Card:** Summary card with image
7. **Canonical URL:** Self-linking for SEO
8. **Schema.org JSON-LD:**
   - Organization schema
   - LocalBusiness (posiblemente)
   - Product schema (para productos)
9. **Favicon:** Icon link
10. **Stylesheet:** Main CSS (webpack-injected with hash)

### Metadata por Página

**Homepage (_index.md):**
- title
- description
- image (OG image override)

**Posts (post/*.md):**
- title
- description
- image (featured image)
- date (for schema)

**Products, Values, Contact:**
- title
- description
- image

---

## Build & Deployment

### Build Tools Stack

| Herramienta | Versión | Propósito |
|------------|---------|----------|
| Hugo | v0.98.0 (via hugo-bin) | Static site generator |
| Webpack | v5 | Module bundler & asset pipeline |
| Babel | v7.16+ | ES6+ transpilation |
| Sass | Latest (sass-loader) | SCSS compilation |
| PostCSS | v8+ | Vendor prefixes (autoprefixer) |
| ESLint | v8+ | Code linting (React plugin) |
| Netlify Identity | - | CMS authentication |
| Decap CMS | Latest | Git-based headless CMS |

### Build Scripts (`package.json`)

```bash
npm run start              # Dev: Hugo + Webpack dev server
npm run start:hugo        # Dev: Hugo only (watch mode)
npm run start:webpack     # Dev: Webpack dev server (hot reload)
npm run preview           # Dev: with drafts + future content
npm run build             # Prod: Webpack + Hugo build
npm run build:preview     # Prod preview: drafts + future
npm run lint              # ESLint check on src/ & cypress/
npm run cypress:open      # E2E test GUI
npm run cypress:run       # E2E test CLI
```

### Dev Server Setup

```
npm start
├── Hugo dev server (default port 1313)
│   └── site/public/dist -> src/
└── Webpack dev server (default port 8080)
    └── Hot module replacement enabled
```

### Production Build Output

**Hugo Output:** `site/public/`
- Static HTML pages
- /post/*.html
- /products/index.html
- /values/index.html
- /contact/index.html
- /index.html (home)
- /404.html
- /sitemap.xml
- /robots.txt

**Webpack Output:** Injected into Hugo
- `main.[hash].js` - Bundled JavaScript
- `styles.[hash].css` - Bundled CSS (SCSS compiled + Tachyons)

### Deployment

**Platform:** Netlify
- **Configuration:** `netlify.toml`
- **Build command:** `npm run build`
- **Publish directory:** `site/public`
- **Redirects:** `_redirects` file (edge rules)

**Environment:**
- Git-based deployment (push to trigger build)
- Netlify Identity for CMS auth
- Netlify Forms for contact form processing

### CMS Configuration

**Location:** `site/static/admin/config.yml`
**Type:** Decap CMS config
**Collections:**
- Home page
- Posts
- Products
- Values
- Contact
- Footer

**Backend:** Netlify (Git)
**Auth:** Netlify Identity

---

## 📝 Notas Adicionales para Migración

### Consideraciones Técnicas

1. **Reemplazar Static Site Generation** 
   - De: Hugo (static HTML generation)
   - A: React (client/server-side rendering)
   - Considerar: Next.js, Gatsby, o custom React app with Vite

2. **State Management**
   - Blog posts: JSON data or GraphQL
   - Contact submissions: API endpoint
   - Newsletter: External service (Mailchimp, etc.)

3. **Routing**
   - Mantener same URL structure (SPA routing)
   - `/` → Home
   - `/products/` → Products
   - `/values/` → Values
   - `/contact/` → Contact
   - `/post/:slug/` → Post detail

4. **CSS Approach**
   - Opción A: Keep Tachyons (via npm package)
   - Opción B: Replace with pure CSS modules
   - Opción C: Tailwind CSS (similar utility-first approach)
   - **Usuario prefiere:** Pure CSS

5. **CMS Replacement**
   - Decap CMS funciona sobre Git
   - Alternativas: Strapi, Sanity, Contentful
   - Considerar: Editar JSON files directamente (simple approach)

6. **Image Optimization**
   - Hugo maneja image processing
   - React: usar React Image lazy loading, next/image, etc.

7. **Forms**
   - Contact Form: Reemplazar Netlify Forms con API endpoint
   - Newsletter: Integrar con email service

8. **SEO en React**
   - Implementar: React Helmet para meta tags dinámicas
   - O: Next.js con built-in SEO support

### Estructura React Recomendada
```
react-yerba-mate/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── ... (otros componentes)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Values.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── PostDetail.jsx
│   ├── data/
│   │   ├── posts.json
│   │   ├── products.json
│   │   └── config.json
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── ... (otros módulos CSS)
│   ├── App.jsx
│   └── index.jsx
├── public/
│   └── img/ (imágenes estáticas)
├── package.json
└── vite.config.js / webpack.config.js
```

### Assets a Migrar
- ✅ Todas las imágenes de `site/assets/img/` y `img/`
- ✅ Logo y favicon
- ✅ Datos de posts (convertir a JSON)
- ✅ Configuración de navegación
- ✅ Contenido de páginas (extraer markdown -> JSON/componentes)

### Idioma & Regionalización
- ✅ Mantener español → React i18n (opcional)
- ✅ Mantener URLs en español (slug de posts)

---

## ✅ Checklist de Migración

- [ ] Extraer todos los posts (markdown → JSON)
- [ ] Convertir contenido de páginas (front matter → data files)
- [ ] Copiar todas las imágenes
- [ ] Replicar componentes Hugo → React components
- [ ] Transferir estilos (SCSS → Pure CSS)
- [ ] Implementar routing (React Router o Next.js routing)
- [ ] Crear Contact form handler (API endpoint)
- [ ] Implementar blog listing & detail pages
- [ ] Configurar SEO (React Helmet o equivalente)
- [ ] Setup CMS replacement (opcional)
- [ ] Testing & QA
- [ ] Deployment setup (Netlify o similar)
- [ ] 301 redirects (si aplica)
- [ ] Performance optimization
- [ ] Analytics integration

---

**Documentación Completa** ✓  
Próximo paso: Iniciar nuevo proyecto React y comenzar componentización.
