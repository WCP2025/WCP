import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind sin conflictos (ej: si dos fuentes
 * definen "px-4" y "px-6", se queda con la última en vez de
 * aplicar ambas). Patrón estándar en proyectos React + Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
