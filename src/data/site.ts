// ============================================================
// EDITA ACÁ: datos generales de la empresa, usados en varios
// componentes (Navbar, Footer, CTA, WhatsAppFloat). Cambiar
// acá una vez actualiza toda la página.
// ============================================================

export const site = {
  name: 'Work Cleaning & Pressure',
  shortName: 'WCP',
  logo: '/logo.jpg',
  tagline: 'Limpieza a presión profesional',

  // Números de WhatsApp: código de país + número, SIN "+" ni espacios.
  whatsappNumbers: [
    { number: '17323432134', label: '+1 (732) 343-2134' },
    { number: '17324289554', label: '+1 (732) 428-9554' },
  ],
  whatsappMessage: 'Hola, quiero más información',

  email: 'Info@workcleaningpressure.com',

  social: {
    instagram: 'https://www.instagram.com/workcleaningpressure_?utm_source=qr',
  },
} as const;
