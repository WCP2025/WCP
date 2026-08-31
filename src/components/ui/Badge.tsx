import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  /** neutral: celeste con texto navy — accent: rojo tenue con texto rojo */
  variant?: 'neutral' | 'accent';
  className?: string;
}

/** Chip/etiqueta redondeada, según el componente "Chips/Badges" de
 * DESIGN.md: fondo celeste + texto navy para tags neutros, tinte
 * rojo para tags "destacados". */
export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-4 py-1.5 text-label-bold uppercase',
        variant === 'neutral' ? 'bg-surface-container text-primary' : 'bg-[rgba(230,57,70,0.1)] text-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}
