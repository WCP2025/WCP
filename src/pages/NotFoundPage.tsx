import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';

/** Página 404 simple, coherente con el resto del diseño. */
export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <span className="text-display text-primary">404</span>
      <p className="mt-4 text-body-lg text-neutral max-w-sm">{t.notFound.message}</p>
      <Button href="/" variant="primary" className="mt-8">
        {t.notFound.button}
      </Button>
    </div>
  );
}
