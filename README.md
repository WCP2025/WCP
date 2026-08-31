# Work Cleaning & Pressure — Landing Page

Landing page profesional construida con **React + TypeScript + Vite +
Tailwind CSS + Framer Motion + React Router**, siguiendo un design
system propio con paleta navy/rojo y tipografía Inter ("High-Contrast
Corporate Minimalism").

## ⚠️ Importante: instalar dependencias primero

Este proyecto se armó con todo el código fuente escrito a mano (no se
pudo correr `npm install` en el entorno donde se generó, por una
restricción de red). Antes de poder verlo andar, necesitás correr,
**una sola vez**, en la carpeta del proyecto:

```bash
npm install
```

Después de eso, todo funciona normal.

## Cómo correrlo

```bash
npm install       # solo la primera vez
npm run dev        # levanta el servidor de desarrollo (http://localhost:5173)
npm run build       # genera la versión de producción en /dist
npm run preview     # previsualiza esa versión de producción
```

Requisitos: Node.js 18 o superior.

## Selector de idioma (Español / Inglés)

Toda la página soporta español e inglés. El selector está en el
Navbar (arriba a la derecha en desktop, dentro del menú en mobile).

- **Qué SÍ cambia con el idioma**: todos los textos (títulos, botones,
  testimonios, etc.)
- **Qué NO cambia** (a propósito): el nombre de la marca "Work
  Cleaning Pressure" y el logo — quedan fijos en los dos idiomas
- El idioma elegido se guarda en el navegador (`localStorage`), así
  que si alguien vuelve a entrar más tarde, se mantiene su elección
- Si es la primera visita, se detecta automáticamente el idioma del
  navegador (si es inglés arranca en inglés, si no, en español)

**Para editar textos**: todo vive en un solo archivo,
`src/i18n/translations.ts`, con la versión en español y en inglés
una al lado de la otra. Ese es el único archivo que hace falta tocar
para cambiar cualquier texto de la página, en cualquiera de los dos
idiomas.

**Para agregar un tercer idioma** (ej: portugués): agregar `'pt'` al
tipo `Language` en `src/i18n/translations.ts`, agregar el objeto
`pt: { ... }` completo dentro de `translations`, y sumar un botón más
en `src/components/ui/LanguageToggle.tsx`.

## Marca de agua del logo

El logo aparece como una marca de agua muy sutil, fija en el centro
de la pantalla, detrás de todo el contenido — se queda quieta en el
mismo lugar mientras uno scrollea la página (por eso se ve "flotando"
detrás de las secciones).

- El componente vive en `src/components/Watermark/Watermark.tsx`
- Para hacerla más marcada o más tenue: cambiar la clase
  `opacity-[0.04]` de ese archivo (0.04 = muy sutil, 0.1 sería más
  notoria)
- Para sacarla del todo: quitar `<Watermark />` de
  `src/layouts/MainLayout.tsx`

## Estructura del proyecto

```
src/
├── i18n/                  → TODOS los textos del sitio en ES/EN (translations.ts)
├── assets/            → imágenes/recursos que se importan desde código
├── components/        → piezas de UI reutilizables, una carpeta por componente
│   ├── Navbar/
│   ├── Hero/
│   ├── Stats/
│   ├── WhyUs/
│   ├── Security/
│   ├── Testimonials/
│   ├── CTA/
│   ├── Footer/
│   ├── WhatsAppFloat/
│   ├── Watermark/
│   └── ui/             → Button, Container, SectionHeading, Badge, LanguageToggle (genéricos)
├── sections/           → bloques de página que componen varios componentes
│   ├── Home/
│   ├── About/
│   ├── Testimonials/
│   └── Contact/
├── layouts/            → MainLayout (Navbar + contenido + Footer + WhatsApp + Watermark)
├── pages/               → LandingPage, NotFoundPage (rutas de React Router)
├── hooks/               → useScrolled, useMobileMenu, useLanguage
├── lib/                  → cn() (merge de clases), whatsapp.ts, animations.ts
├── types/                → tipos TypeScript compartidos
├── data/                 → EDITA ACÁ: site.ts (empresa/WhatsApp/email/redes), navigation.ts (menú)
├── context/              → LanguageContext + languageStore (estado global del idioma)
├── App.tsx               → rutas de la app
└── main.tsx              → punto de entrada
```

## Cómo editar el contenido

Casi todo el contenido de texto vive en **`src/i18n/translations.ts`**,
separado del código de los componentes — es lo primero que tenés que
tocar. Ahí está la versión en español y en inglés, una al lado de la
otra, de **todos** los textos del sitio: hero, nosotros (incluido el
párrafo), por qué elegirnos, seguridad, testimonios, estadísticas, CTA y
footer. Cualquier cambio en cualquier idioma se hace en ese único archivo.

Además, los datos generales de la empresa viven en **`src/data/`**:

- **`data/site.ts`** — nombre de la empresa, números de WhatsApp, email, redes sociales
- **`data/navigation.ts`** — las anclas del menú (las etiquetas se traducen solas desde `translations.ts`)

## Cómo cambiar las fotos

Las fotos ya están puestas como imágenes reales, separadas en dos
lugares según dónde se usen.

**Imágenes importadas desde el código** (Hero y sección "Nosotros").
Viven en `src/assets/` y se referencian con un `import` dentro del
componente:

1. Poné tu imagen en `src/assets/` (por ejemplo `src/assets/hero.jpg`)
2. En el componente correspondiente, importala y usala:
   ```tsx
   import heroImg from '@/assets/hero.jpg';
   // ...
   <img src={heroImg} alt="..." />
   ```
   - Foto del Hero → `src/components/Hero/Hero.tsx` (hoy usa `Cocina001.jpeg`)
   - Foto de "Nosotros" → `src/sections/About/About.tsx` (hoy usa `Cocina002.jpeg`)

   Nota: hay dos copias sin usar en `src/assets/` (`cocina.jpeg` y
   `cocina2.jpeg`) que podés borrar si no las necesitás.

**Imágenes servidas como archivos estáticos** (galería de testimonios).
Van en `public/testimonials/` y se referencian por URL — esos nombres de
archivo se usan directamente en `src/i18n/translations.ts` (campo
`images[].src` de cada testimonio):

```
public/testimonials/
├── maria-service-certification.jpeg
├── kitchen-hood-1.jpeg
├── kitchen-hood-2.jpeg
├── laura-extraction-1.jpeg
├── laura-extraction-2.jpeg
└── laura-extraction-3.jpeg
```

Para cambiar una foto: reemplazá el archivo por uno nuevo con el mismo
nombre (o subí el nuevo y actualizá el `src` en `translations.ts`).

El logo real (`public/logo.jpg`) ya está puesto — para cambiarlo, solo
reemplazá ese archivo por uno nuevo con el mismo nombre.

## Paleta y diseño

Todos los tokens de color, tipografía, sombras y radios de borde están
centralizados en `tailwind.config.js` (paleta navy/rojo, Inter,
elevaciones de sombra, ritmo vertical entre secciones). Para ajustar la
marca (por ejemplo si cambia el rojo de acento), ese es el único archivo
que hace falta tocar — se propaga a todos los componentes automáticamente.

## Despliegue

El build (`npm run build`) genera una carpeta `dist/` con archivos
estáticos, lista para subir a:

- **Vercel**: conectá el repo o corré `vercel` en la carpeta
- **Netlify**: arrastrá la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop)
- Cualquier hosting estático

---
by Jhon Silva
