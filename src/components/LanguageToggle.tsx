import { useEffect, useRef, useState } from 'react';
import { Languages, Check } from 'lucide-react';
import { useI18n, locales, localeOrder, type Locale } from '../i18n';

export default function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const choose = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {localeOrder.map((l) => (
          <button
            key={l}
            onClick={() => choose(l)}
            lang={locales[l].meta.htmlLang}
            className={`rounded border px-3 py-1.5 text-sm transition-colors ${
              l === locale
                ? 'border-amber-line bg-amber-soft text-amber'
                : 'border-line text-dim hover:border-lineStrong hover:text-fg'
            }`}
          >
            {locales[l].meta.endonym}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.switchLanguage}
        className="inline-flex items-center gap-2 rounded border border-line px-3 py-2 text-sm text-muted transition-colors hover:border-lineStrong hover:text-fg"
      >
        <Languages className="h-4 w-4" aria-hidden="true" />
        <span lang={locales[locale].meta.htmlLang}>
          {locales[locale].meta.endonym}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-lg border border-line bg-raised py-1"
        >
          {localeOrder.map((l) => (
            <li key={l}>
              <button
                role="option"
                aria-selected={l === locale}
                onClick={() => choose(l)}
                lang={locales[l].meta.htmlLang}
                dir={locales[l].meta.dir}
                className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-start text-sm transition-colors hover:bg-panel ${
                  l === locale ? 'text-amber' : 'text-muted'
                }`}
              >
                <span>{locales[l].meta.endonym}</span>
                {l === locale && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
