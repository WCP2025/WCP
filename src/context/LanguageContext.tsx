import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from '@/i18n/translations';
import { LanguageContext } from '@/context/languageStore';

const STORAGE_KEY = 'wcp-language';

/** Detecta el idioma preferido: primero localStorage (elección previa
 * del usuario), después el idioma del navegador, con español de
 * respaldo si no coincide con ninguno de los dos soportados. */
function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'es' || stored === 'en') return stored;

  const browserLang = window.navigator.language.slice(0, 2);
  return browserLang === 'en' ? 'en' : 'es';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
