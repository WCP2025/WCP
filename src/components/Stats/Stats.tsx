import { motion } from 'framer-motion';
import type { StatItem } from '@/i18n/translations';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { cn } from '@/lib/cn';

interface StatsProps {
  items: StatItem[];
}

/** Fila de estadísticas en tarjetas cortas (usada en la sección Nosotros).
 * Recibe los items como prop —ya traducidos— en vez de importarlos
 * de un archivo de datos fijo, para que cambien solos con el idioma. */
export function Stats({ items }: StatsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      {items.map((stat, index) => (
        <motion.div
          // La clave debe ser estable al cambiar idioma; la etiqueta cambia entre ES/EN.
          key={`stat-${index}`}
          variants={fadeUp}
          className={cn(
            'rounded-md bg-white/90 border-t-4 shadow-1 px-6 py-5 min-w-[140px]',
            // Alterna navy/rojo entre tarjetas, y la destacada siempre va en rojo
            stat.highlight || index % 2 === 1 ? 'border-secondary' : 'border-primary'
          )}
        >
          <div
            className={cn(
              'text-headline-md leading-none',
              stat.highlight ? 'text-secondary' : 'text-primary'
            )}
          >
            {stat.number}
          </div>
          <div className="mt-2 text-caption uppercase tracking-wide text-neutral">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
