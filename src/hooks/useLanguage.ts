import { useContext } from 'react';
import { LanguageContext, type LanguageContextValue } from '@/context/languageStore';

/** Devuelve el idioma actual, el selector y el diccionario de textos resuelto. */
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }

  return ctx;
}
