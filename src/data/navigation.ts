export type NavKey = 'inicio' | 'nosotros' | 'testimonios' | 'contacto' | 'faq';

export interface NavItem {
  /** Clave que apunta a la traducción correspondiente en t.nav.* */
  key: NavKey;
  href: string;
}

// EDITA ACÁ: anclas del menú. Las etiquetas NO van acá — salen
// traducidas automáticamente desde src/i18n/translations.ts según
// la "key" de cada link.
export const navLinks: NavItem[] = [
  { key: 'inicio', href: '#inicio' },
  { key: 'nosotros', href: '#nosotros' },
  { key: 'testimonios', href: '#testimonios' },
  { key: 'faq', href: '#faq' },
];

export const footerLinks: NavItem[] = [
  ...navLinks,
  { key: 'contacto', href: '#contacto' },
];
