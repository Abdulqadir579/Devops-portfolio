import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import en, { type Dictionary } from './en';
import de from './de';
import fr from './fr';

export const locales = { en, de, fr } as const;
export type Locale = keyof typeof locales;
export const localeOrder: Locale[] = ['en', 'de', 'fr'];

const STORAGE_KEY = 'portfolio-locale';

function detect(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in locales) return saved as Locale;
  } catch {
    // storage unavailable, fall through to browser language
  }
  const nav = navigator.languages ?? [navigator.language];
  for (const tag of nav) {
    const base = tag.slice(0, 2).toLowerCase();
    if (base in locales) return base as Locale;
  }
  return 'en';
}

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: Dictionary };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    setLocale(detect());
  }, []);

  useEffect(() => {
    const { dir, htmlLang } = locales[locale].meta;
    document.documentElement.lang = htmlLang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore write failures in private browsing
    }
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, t: locales[locale] }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider');
  return ctx;
}
