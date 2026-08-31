import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/** Contenedor centrado con el ancho máximo del design system (1280px). */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('container-page', className)} {...props} />;
}
