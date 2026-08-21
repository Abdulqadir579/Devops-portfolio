import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { profile } from '../data';
import { useI18n } from '../i18n';
import LanguageToggle from './LanguageToggle';

export default function Nav() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#experience', label: t.nav.experience },
    { href: '#stack', label: t.nav.stack },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-ink/90 backdrop-blur'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm text-fg" dir="ltr">
          <span className="text-amber">$</span> abdul qadir
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <div className="ms-2">
            <LanguageToggle />
          </div>
          <a
            href={profile.resume}
            download
            className="ms-2 inline-flex items-center gap-2 rounded border border-amber-line bg-amber-soft px-3.5 py-2 text-sm text-amber transition-colors hover:border-amber"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.nav.resume}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          className="rounded p-2 text-muted transition-colors hover:text-fg md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink md:hidden">
          <div className="mx-auto max-w-page px-5 py-3 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 border-t border-line pt-4">
              <LanguageToggle compact />
            </div>
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 rounded border border-amber-line bg-amber-soft px-3.5 py-2 text-sm text-amber"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.nav.resume}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
