import { motion } from 'framer-motion';
import type { TestimonialItem } from '@/i18n/translations';
import { fadeUp } from '@/lib/animations';
import { cn } from '@/lib/cn';
import { TestimonialGallery } from './TestimonialGallery';

/**
 * Tarjeta de testimonio con 3 variantes visuales:
 * - light: fondo gris claro (surface)
 * - dark: fondo navy (primary), texto blanco
 * - wide: fondo celeste (surface-high), ocupa las 2 columnas del grid
 *
 * NOTA TÉCNICA: los fondos usan valores rgba() explícitos en vez del
 * modificador de opacidad de Tailwind (ej: "bg-primary/98"). Ese
 * modificador no se estaba aplicando de forma confiable sobre estos
 * colores personalizados (el fondo terminaba transparente y el texto
 * blanco quedaba invisible sobre la página blanca). Con rgba() directo
 * queda garantizado que el fondo siempre se pinta.
 */
export function TestimonialCard({ quote, name, role, initials, variant, images }: TestimonialItem) {
  const isWide = variant === 'wide';
  const isDark = variant === 'dark';

  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        'relative overflow-hidden rounded-lg p-8 pt-9 transition-transform duration-200 hover:-translate-y-1',
        variant === 'light' && 'bg-[rgba(248,250,252,0.97)] border border-border',
        isDark && 'bg-[rgba(10,37,64,0.97)] text-white',
        isWide &&
          'bg-[rgba(220,233,255,0.97)] md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-8'
      )}
    >
      {/* Barra de color arriba: navy en las claras/oscura, rojo en la ancha
          — le da más presencia a la paleta de marca en toda la sección */}
      <span
        className={cn(
          'absolute top-0 left-0 right-0 h-1.5',
          isWide ? 'bg-secondary' : isDark ? 'bg-secondary' : 'bg-primary'
        )}
        aria-hidden="true"
      />

      {!isWide && (
        <div
          className={cn(
            'font-serif text-5xl leading-none mb-2',
            isDark ? 'text-white/25' : 'text-neutral/25'
          )}
          aria-hidden="true"
        >
          "
        </div>
      )}

      <p
        className={cn(
          'text-body-md',
          isWide ? 'italic text-primary flex-1' : isDark ? 'text-white/90 mb-6' : 'text-primary mb-6'
        )}
      >
        {quote}
      </p>

      <TestimonialGallery images={images} />

      <div className="flex items-center gap-3 shrink-0">
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full font-semibold shrink-0 ring-2 ring-secondary/40',
            isDark ? 'bg-white text-primary' : 'bg-primary text-white'
          )}
        >
          {initials}
        </div>
        <div>
          <div className="text-body-md font-semibold leading-none">{name}</div>
          <div
            className={cn(
              'text-caption mt-1',
              isDark ? 'text-white/55' : 'text-neutral'
            )}
          >
            {role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
