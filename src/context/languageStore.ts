import { createContext } from 'react';
import type { Language, Translation } from '@/i18n/translations';

export interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
