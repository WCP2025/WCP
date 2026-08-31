import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeUp } from '@/lib/animations';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** Color del eyebrow: navy (normal) o rojo (acento, para secciones destacadas) */
  eyebrowVariant?: 'neutral' | 'accent';
  /** Si es true, el eyebrow se muestra como chip/pill redondeado en vez
   * de la línea + texto en mayúsculas — más colorido, como en el
   * diseño de referencia (ej: sección de Testimonios) */
  chip?: boolean;
  className?: string;
}

/**
 * Encabezado de sección reutilizable: eyebrow (etiqueta chica arriba)
 * + título + descripción opcional. Usado en Nosotros y Testimonios.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  eyebrowVariant = 'neutral',
  chip = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(align === 'center' ? 'text-center mx-auto' : 'text-left', className)}
    >
      {chip ? (
        <Badge variant={eyebrowVariant === 'accent' ? 'accent' : 'neutral'}>{eyebrow}</Badge>
      ) : (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-label-bold uppercase',
            eyebrowVariant === 'accent' ? 'text-secondary' : 'text-neutral'
          )}
        >
          {eyebrowVariant === 'accent' && <span className="h-px w-6 bg-secondary" />}
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-headline-lg-mobile md:text-headline-lg text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body-lg text-neutral max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
