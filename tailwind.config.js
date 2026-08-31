/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Se usa extend (no se pisa el theme por defecto) para no perder
    // utilidades estándar de Tailwind que no están en el design system
    // pero son útiles igual (ej: colores de estado, sombras puntuales).
    extend: {
      colors: {
        // --- Paleta tomada 1:1 de DESIGN.md ---
        primary: {
          DEFAULT: '#0A2540', // Navy profundo — marca, botones primarios, títulos
          dark: '#071a2e',
        },
        secondary: {
          DEFAULT: '#E63946', // Rojo vibrante — SOLO para CTAs y acentos puntuales
          light: '#ffb3b1',   // variante clara, para texto de acento sobre fondo oscuro
        },
        surface: {
          DEFAULT: '#F8FAFC', // Gris frío — secciones alternadas, tarjetas, inputs
          low: '#eff4ff',
          container: '#e5eeff',
          high: '#dce9ff',    // usado en la tarjeta ancha de testimonios
        },
        neutral: {
          DEFAULT: '#64748B', // Texto secundario, íconos, bordes
        },
        border: '#F1F5F9',
      },
      fontFamily: {
        // Inter exclusivamente, como marca el design system
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-lg-mobile': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-md': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.5' }],
        'label-bold': ['14px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
        caption: ['12px', { lineHeight: '1.4' }],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      boxShadow: {
        // Niveles de elevación tal cual DESIGN.md
        1: '0 4px 12px rgba(10, 37, 64, 0.05)',
        2: '0 8px 24px rgba(10, 37, 64, 0.10)',
        3: '0 12px 32px rgba(10, 37, 64, 0.15)',
      },
      spacing: {
        section: '120px', // ritmo vertical entre secciones (desktop)
      },
      maxWidth: {
        container: '1280px',
      },
      keyframes: {
        'ping-slow': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
      },
      animation: {
        'ping-slow': 'ping-slow 2.8s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
