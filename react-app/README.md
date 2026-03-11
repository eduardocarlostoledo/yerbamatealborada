# Yerba Mate Alborada - React Version

Este es el proyecto de migración del sitio de Yerba Mate Alborada de Hugo a React con CSS Puro.

## 📋 Estructura del Proyecto

```
react-app/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── MediaBlock.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Grid.jsx
│   │   └── Testimonial.jsx
│   ├── pages/              # Páginas (rutas)
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Values.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── PostDetail.jsx
│   ├── css/                # Estilos CSS puro
│   │   ├── main.css        # Estilos globales
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── components/     # Estilos de componentes
│   │   └── pages/          # Estilos de páginas
│   ├── data/               # Datos (posts, config, etc)
│   ├── utils/              # Utilidades y helpers
│   ├── App.jsx             # Componente principal
│   └── index.jsx           # Punto de entrada
├── public/                 # Archivos estáticos
│   └── img/               # Imágenes
├── index.html             # HTML principal
├── vite.config.js         # Configuración Vite
├── package.json           # Dependencias
└── .gitignore             # Archivos ignorados
```

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Build Producción

```bash
npm run build
```

El sitio compilado estará en el directorio `dist/`.

## 🎨 Paleta de Colores

- **Color Primario:** #2d5016 (Verde oscuro)
- **Color Primario Oscuro:** #1f3611
- **Color Primario Claro:** #4a7c24
- **Color Acentuado:** #d4a574 (Marrón/dorado)
- **Texto:** #333333
- **Texto Ligero:** #666666
- **Fondo Ligero:** #f9f9f9

## 📄 Páginas

### Inicio (`/`)
- Hero section
- Blurb descriptivo
- Showcase de productos
- Preview de valores
- Últimos posts del blog

### Productos (`/products`)
- Hero header
- Grid intro (4 tarjetas)
- Descripción principal
- Testimonios
- Planes de asociación (pricing)

### Acerca De (`/values`)
- Hero header
- Media block 1: "Yerba Mate"
- Media block 2: "Origen" (reversed)

### Contacto (`/contact`)
- Logo
- Información de contacto
- Formulario de contacto
- Links socialesContacto

### Blog (`/post`)
- Listado de posts
- Grid responsive
- Links a posts individuales

### Post Detail (`/post/:slug`)
- Título + metadata
- Imagen destacada
- Contenido del post
- Link volver al blog

## 🔗 Navegación

**Header:**
- Logo (home)
- /products - Productos
- /values - Acerca de
- /post - Blog
- /contact - Contacto

**Footer:**
- Sección ALBORADA (mismos links que header)
- Sección MÁS INFO
- Sección SÍGUENOS (WhatsApp, Email, Instagram, Maps)
- Newsletter signup

## 📦 Dependencias

- **React:** 18.2.0
- **React Router DOM:** 6.20.0
- **React DOM:** 18.2.0
- **Vite:** 5.0.0 (dev)
- **ESLint:** 8.55.0 (dev)

## 🎯 Próximos Pasos

- [ ] Integración de datos desde API/JSON
- [ ] Sistema de CMS reemplazando Decap CMS
- [ ] Integración de formularios (email service)
- [ ] Optimización de imágenes
- [ ] SEO meta tags dinámicos
- [ ] Análisis con Google Analytics
- [ ] Deployment en Netlify/Vercel

## 📝 Notas

- CSS puro (sin frameworks CSS como Tailwind)
- Componentes funcionales con React Hooks
- Enrutamiento con React Router v6
- Variables CSS para temas y espaciado
- Diseño responsive mobile-first

## 👨‍💻 Desarrollo

Para un cambio de estilos global, edita `src/css/main.css` (variables CSS).

Para nuevos componentes:
1. Crear archivo en `src/components/`
2. Crear archivo CSS en `src/css/components/`
3. Importar en el componente padre

---

**Migración de Hugo CMS a React - 2026**
