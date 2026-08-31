import { forwardRef } from 'react';
import type { AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'outline' | 'whatsapp';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

/**
 * Botón reutilizable en forma de <a> (siempre navega o hace scroll a
 * un ancla, nunca hace submit de formulario). Tres variantes, según
 * DESIGN.md:
 * - primary: navy sólido, texto blanco (acción principal)
 * - outline: borde navy, transparente (acción secundaria)
 * - whatsapp: verde, para el CTA de contacto directo
 */
export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-body-md font-semibold transition-all duration-200';

    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-primary text-white hover:bg-secondary hover:-translate-y-0.5 hover:shadow-2',
      outline:
        'border-2 border-primary/15 text-primary hover:border-secondary hover:text-secondary hover:-translate-y-0.5',
      whatsapp: 'bg-[#25D366] text-white hover:-translate-y-0.5 hover:shadow-2',
    };

    return (
      <a ref={ref} className={cn(base, variants[variant], className)} {...props}>
        {children}
      </a>
    );
  }
);

Button.displayName = 'Button';
