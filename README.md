<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plantilla Hugo para Decap CMS con Netlify Identity</title>
</head>
<body>
  <h1>Plantilla Hugo para Decap CMS con Netlify Identity</h1>
  <p>
    Esta es una plantilla para pequeñas empresas desarrollada con 
    <a href="https://gohugo.io" target="_blank">Hugo</a> y 
    <a href="https://github.com/decaporg/decap-cms" target="_blank">Decap CMS</a>, diseñada y desarrollada por 
    <a href="https://twitter.com/deezel" target="_blank">Darin Dimitroff</a>, 
    <a href="https://www.spacefarm.digital" target="_blank">spacefarm.digital</a>.
  </p>

  <h2>Comenzando</h2>
  <p>Usa nuestro botón de despliegue para obtener tu propia copia del repositorio:</p>
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/decaporg/one-click-hugo-cms&stack=cms" target="_blank">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify">
  </a>
  <p>Esto configurará todo lo necesario para ejecutar el CMS:</p>
  <ul>
    <li><strong>Un nuevo repositorio</strong> en tu cuenta de GitHub con el código fuente del proyecto.</li>
    <li><strong>Despliegue continuo</strong> al CDN global de Netlify.</li>
    <li><strong>Control de usuarios y acceso</strong> mediante Netlify Identity.</li>
    <li><strong>Gestión de contenido</strong> mediante Decap CMS.</li>
  </ul>
  <h3>¿Qué sigue?</h3>
  <ol>
    <li>Ve a la pestaña <strong>Identity</strong> en tu nuevo sitio.</li>
    <li>Haz clic en "Invite" y envíate una invitación por correo electrónico.</li>
  </ol>
  <p>¡Listo! Ahora puedes empezar a editar el contenido del sitio.</p>

  <h2>Desarrollo local</h2>
  <ol>
    <li>Clona este repositorio en tu máquina local.</li>
    <li>
      Desde la carpeta del proyecto, ejecuta <code>yarn</code> o <code>npm install</code> 
      para instalar todas las dependencias necesarias.
    </li>
    <li>Inicia el servidor de desarrollo con <code>yarn start</code> o <code>npm start</code>.</li>
  </ol>

  <h2>Pruebas</h2>
  <p>Con el servidor de desarrollo en funcionamiento, puedes ejecutar las pruebas localmente:</p>
  <ul>
    <li>Ejecuta las pruebas en modo de línea de comandos con <code>yarn cypress:run</code> o <code>npm run cypress:run</code>.</li>
    <li>Usa <code>yarn cypress:open</code> o <code>npm run cypress:open</code> para abrir la interfaz interactiva de Cypress.</li>
  </ul>
  <p>
    Las pruebas también se ejecutan automáticamente en cada despliegue utilizando la 
    <a href="https://www.netlify.com/integrations/cypress/" target="_blank">integración Cypress para Netlify</a>.
  </p>

  <h2>Diseños (Layouts)</h2>
  <p>
    La plantilla se basa en pequeños fragmentos reutilizables, llamados <em>partials</em>, que pueden combinarse 
    de diversas maneras. Las páginas preconstruidas muestran solo algunas de las combinaciones posibles. 
    Consulta la carpeta <code>site/layouts/partials</code> para ver todos los fragmentos disponibles.
  </p>
  <p>
    Usa la funcionalidad <code>dict</code> de Hugo para pasar contenido a los <em>partials</em> y evitar 
    duplicar código o crear inconsistencias.
  </p>

  <h2>CSS</h2>
  <p>
    La plantilla utiliza una versión personalizada de <strong>Tachyons</strong> junto con <strong>PostCSS</strong> 
    (configurado con <em>cssnext</em> y <em>cssnano</em>).
  </p>
  <p>
    Para personalizar el diseño según la marca de tu empresa, consulta 
    <code>src/css/imports/_variables.css</code>, donde se encuentran la mayoría de las variables globales 
    importantes como colores y espaciados.
  </p>

  <h2>Íconos sociales en SVG</h2>
  <p>Los íconos de redes sociales se encuentran en la carpeta <code>site/assets/img</code>.</p>
  <p>
    Asegúrate de usar íconos con estilos coherentes en términos de proporciones y diseño visual 
    para obtener resultados óptimos.
  </p>
  <p>Para usar un ícono llamado <code>icons-facebook.svg</code>, haz referencia al fragmento <code>social-icon</code> de Hugo de la siguiente manera:</p>
  <pre>
    <code>
{{ partial "social-icon" (dict "link" "#" "svg" "icons-facebook" "alt" "RM en Facebook") }}
    </code>
  </pre>
</body>
</html>



# Hugo template for Decap CMS with Netlify Identity

This is a small business template built with [Hugo](https://gohugo.io) and [Decap CMS](https://github.com/decaporg/decap-cms), designed and developed by [Darin Dimitroff](https://twitter.com/deezel), [spacefarm.digital](https://www.spacefarm.digital).

https://template-4-itconsultoratoledo.netlify.app/

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Decap CMS

Once the initial build finishes, you can invite yourself as a user. Go to the Identity tab in your new site, click "Invite" and send yourself an invite.

Now you're all set, and you can start editing content!

## Local Development

Clone this repository, and run `yarn` or `npm install` from the new folder to install all required dependencies.

Then start the development server with `yarn start` or `npm start`.

## Testing

With the development server running, run the tests locally
with `yarn cypress:run` or `npm run cypress:run`.
Or use `yarn cypress:open` or `npm run cypress:open` to run interactively.

Cypress tests also run on deploy with the [Cypress Netlify integration](https://www.netlify.com/integrations/cypress/).

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

## SVG Social Icons

The social media icons are in `site/assets/img`.
Make sure you use consistent icons in terms of viewport and art direction for optimal results.
For an icon named `icons-facebook.svg`, refer to the SVG `social-icon` partial like so:

```
{{ partial "social-icon" (dict "link" "#" "svg" "icons-facebook" "alt" "RM on Facebook") }}
```
