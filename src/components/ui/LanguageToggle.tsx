import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/cn';

/**
 * Selector de idioma ES/EN — un pill con dos opciones, la activa
 * resaltada. Se usa en el Navbar (desktop y menú mobile).
 */
export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-surface p-0.5 text-caption font-semibold',
        className
      )}
      role="group"
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-pressed={language === 'es'}
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          language === 'es' ? 'bg-primary text-white' : 'text-neutral hover:text-primary'
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={cn(
          'rounded-full px-2.5 py-1 transition-colors',
          language === 'en' ? 'bg-primary text-white' : 'text-neutral hover:text-primary'
        )}
      >
        EN
      </button>
    </div>
  );
}
