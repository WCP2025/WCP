// ============================================================
// Tipos compartidos que no son de traducción (esos viven en
// src/i18n/translations.ts: StatItem, TestimonialItem, Language).
// Este archivo queda para tipos estructurales generales que se
// sumen más adelante (ej: props de formularios, respuestas de API).
// ============================================================

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'mail';
}
