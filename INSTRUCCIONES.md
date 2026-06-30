# I Simposio sobre Memorias Participativas - Sitio Web

## Tecnologías Utilizadas

- **Framework**: Astro 7
- **UI**: React 19
- **Estilos**: Tailwind CSS 4
- **CMS**: Decap CMS (antes Netlify CMS)
- **Hosting**: Netlify (gratuito)

## Estructura del Proyecto

```
simposio-memorias/
├── public/
│   └── admin/
│       ├── index.html          # Interfaz del CMS
│       └── config.yml          # Configuración Decap CMS
├── src/
│   ├── components/             # Componentes React
│   │   ├── Header.tsx          # Navegación
│   │   ├── Footer.tsx          # Pie de página
│   │   ├── Hero.tsx            # Sección principal
│   │   ├── Programa.tsx        # Programa del simposio
│   │   ├── Organizacion.tsx    # Equipo organizador
│   │   ├── Contacto.tsx        # Formulario de contacto
│   │   └── InstagramFeed.tsx   # Feed de Instagram
│   ├── layouts/
│   │   └── Layout.astro        # Layout principal
│   ├── pages/
│   │   ├── index.astro         # Inicio
│   │   ├── el-simposio.astro   # Sobre el simposio
│   │   ├── organizacion.astro  # Organización
│   │   ├── programa.astro      # Programa
│   │   └── contacto.astro      # Contacto
│   ├── content/
│   │   ├── blog/               # Contenido del CMS (noticias)
│   │   └── pages/              # Páginas estáticas del CMS
│   └── styles/
│       └── global.css          # Estilos globales + Tailwind
├── astro.config.mjs
├── netlify.toml                # Configuración de Netlify
└── package.json
```

## Instrucciones de Despliegue

### 1. Preparar el Repositorio

```bash
# Navegar al directorio del proyecto
cd simposio-memorias

# Inicializar repositorio Git
git init
git add .
git commit -m "Initial commit: Simposio Memorias Participativas"

# Crear repositorio en GitHub y subir
git remote add origin https://github.com/TU_USUARIO/simposio-memorias.git
git push -u origin main
```

### 2. Configurar Netlify

1. Ir a [app.netlify.com](https://app.netlify.com)
2. Hacer clic en **"New site from Git"**
3. Seleccionar **GitHub** y autorizar la conexión
4. Seleccionar el repositorio `simposio-memorias`
5. Configurar:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Hacer clic en **"Deploy site"**

### 3. Configurar Netlify Identity (para el CMS)

1. En el dashboard de Netlify, ir a **Site Settings > Identity**
2. Hacer clic en **"Enable Identity"**
3. En **Registration preferences**, seleccionar **"Invite only"**
4. Activar **Git Gateway**:
   - Ir a **Site Settings > Identity > Git Gateway**
   - Hacer clic en **"Enable Git Gateway"**
   - Seleccionar **GitHub** como proveedor

### 4. Configurar OAuth (para acceso al CMS)

1. Ir a [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Hacer clic en **"New OAuth App"**
3. Configurar:
   - **Application name**: `Simposio Memorias CMS`
   - **Homepage URL**: `https://TU-SITIO.netlify.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Guardar el **Client ID** y generar un **Client Secret**
5. En Netlify, ir a **Site Settings > Access control > OAuth**
6. Hacer clic en **"Install provider"** y seleccionar **GitHub**
7. Introducir el Client ID y Client Secret

### 5. Acceder al CMS

1. Ir a `https://TU-SITIO.netlify.app/admin/`
2. Iniciar sesión con GitHub
3. ¡Ya puedes editar el contenido!

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Construir el sitio
npm run build

# Vista previa del sitio construido
npm run preview
```

## Personalización

### Cambiar Colores

Los colores principales se pueden cambiar en los componentes React:
- Azul principal: `blue-900`, `blue-800`, `blue-700`
- Texto: `text-white`, `text-gray-600`

### Agregar Contenido

1. Acceder al CMS en `/admin/`
2. Seleccionar la colección (Blog o Páginas)
3. Crear nueva entrada
4. Publicar

### Agregar Nuevas Páginas

1. Crear archivo `.astro` en `src/pages/`
2. Usar el layout existente:
```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Título de la Página">
  <!-- Contenido aquí -->
</Layout>
```

## Soporte

Para problemas o preguntas, contactar a través del formulario de contacto en el sitio web.
