# Setup Local Development - Guía Rápida

## Primeros Pasos Después de Clonar

```bash
# 1. Entrar a carpeta del proyecto React
cd react-app

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

**Debería mostrar:**
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

---

## URL Locales Disponibles

```
http://localhost:3000/           ← Home
http://localhost:3000/products   ← Productos
http://localhost:3000/values     ← Acerca de / Valores
http://localhost:3000/contact    ← Contacto
http://localhost:3000/post       ← Blog (listado)
http://localhost:3000/post/beneficios-de-consumir-yerba-mate-de-misiones  ← Blog (post individual)
```

---

## Estructura del Proyecto

```
react-app/
├── src/
│   ├── components/       ← Componentes reutilizables
│   ├── pages/           ← Páginas (Home, Blog, etc)
│   ├── data/            ← posts.json, config.json
│   ├── css/             ← Estilos (CSS puro)
│   ├── index.jsx        ← Entry point
│   ├── App.jsx          ← Router setup
│   └── main.jsx         ← Vite entry
│
├── public/
│   └── img/             ← Imágenes estáticas
│
├── index.html           ← HTML root
├── vite.config.js       ← Configuración de build
├── package.json         ← Dependencias
└── netlify.toml         ← Configuración de Netlify (deploy)
```

---

## Flujo de Trabajo Típico

### Editar contenido:

```bash
# 1. Editar posts.json o config.json
nano src/data/posts.json

# 2. El navegador se actualiza automáticamente (HMR)
# 3. Cuando listo, hacer commit
git add src/data/
git commit -m "actualización contenido"
git push origin react-migration
```

### Agregar componente:

```bash
# 1. Crear archivo
touch src/components/NuevoComponente.jsx

# 2. Implementar React component
# 3. Importar donde sea necesario
# 4. Crear CSS si necesita
touch src/css/components/nuevo-componente.css

# 5. Build y test
npm run build
npm run preview
```

---

## Troubleshooting Común

### "Cannot find module 'react'"

```bash
npm install
```

### Port 3000 already in use

```bash
npm run dev -- --port 3001
```

### CSS no se actualiza

- Limpiar caché del navegador (Ctrl+Shift+R en Windows)
- O usar: `npm run dev -- --force`

### Build falla

```bash
npm run build
# Ver error exacto y corregir
```

---

## Deploy a Producción

### Opción 1: Netlify Auto-Deploy (Recomendado)

```bash
# Simplemente hacer push
git push origin react-migration

# Netlify detecta cambios automáticamente y re-deploy
# (~3-5 minutos)
```

### Opción 2: Deploy Manual

```bash
# 1. Build localmente
npm run build

# 2. Deploy a Netlify directo
npm install -g netlify-cli
netlify deploy --prod --dir=dist

# 3. Confirmar en CLI
```

---

## Variables de Entorno (Si futuro lo necesita)

Crear archivo `.env` en raíz:

```
VITE_API_URL=https://api.ejemplo.com
VITE_ENVIRONMENT=development
```

Acceder en código:

```jsx
console.log(import.meta.env.VITE_API_URL)
```

---

## Testing Local - Checklist

```
[ ] npm run dev - arranca sin errores
[ ] Navegar a http://localhost:3000 - carga home
[ ] Revisar todas las rutas (Products, Blog, Contact)
[ ] Blog listado muestra todos los posts
[ ] Click en post abre detail view con contenido HTML
[ ] Imágenes cargan correctamente
[ ] Responsive mobile (F12 → Device toggle)
[ ] Links funcionan (nav, footer, internos)
[ ] Formulario de contacto valida
```

---

## Próximos Pasos Después del Setup

1. ✓ Local development working
2. ✓ Copiar imágenes a `public/img/` (si faltan)
3. ✓ Test todas las rutas
4. ✓ `git push` para trigger Netlify
5. ✓ Verificar en https://yerbamatealborada.com

---

## Soporte Rápido

**Preguntas frecuentes:**

- ¿Cómo agrego un post? → Ver `CONTENT_GUIDE.md`
- ¿Dónde pongo imágenes? → `public/img/`
- ¿Cómo cambio navegación? → `src/data/config.json`
- ¿Cómo agrego componente? → Crear en `src/components/` + CSS en `src/css/components/`

---

**Importante: Este proyecto NO usa CMS. Todo es manual + Git. Mantener el workflow simple.** 🚀
