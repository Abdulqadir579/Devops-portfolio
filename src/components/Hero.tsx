import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { profile } from '../data';
import { useI18n } from '../i18n';
import { Reveal } from './Section';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(#232932 0.5px, transparent 0.5px), linear-gradient(90deg, #232932 0.5px, transparent 0.5px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(120% 70% at 15% 0%, #000 20%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(120% 70% at 15% 0%, #000 20%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-page px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow-row flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-dim">
                {profile.available && (
                  <span className="inline-flex items-center gap-2 text-amber">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                    </span>
                    {t.hero.availability}
                  </span>
                )}
                <span className="text-line">/</span>
                <span>{t.hero.openTo}</span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-amber sm:text-base">
                {t.hero.role}
                <span className="text-dim"> · {t.hero.basedIn}</span>
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
                {t.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded border border-amber-line bg-amber-soft px-4 py-2.5 text-sm text-amber transition-colors hover:border-amber"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t.hero.downloadResume}
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-1.5 rounded border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-lineStrong hover:text-fg"
                >
                  {t.hero.seeWork}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <div className="flex items-center gap-1">
                  <IconLink href={profile.github} label="GitHub" icon={Github} />
                  <IconLink href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
                  <IconLink href={`mailto:${profile.email}`} label="Email" icon={Mail} />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-56 sm:w-64 lg:me-0 lg:ms-auto">
              <div className="overflow-hidden rounded-lg border border-line bg-panel">
                <img
                  src={profile.photo}
                  alt={t.hero.photoAlt}
                  width={560}
                  height={700}
                  className="block w-full"
                />
              </div>
              <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-dim lg:text-end">
                {t.hero.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 border-t border-line pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              {t.hero.ledgerTitle}
            </p>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {t.ledger.map((row) => (
                <div key={row.label} className="bg-panel p-5">
                  <dt className="text-sm leading-snug text-muted">{row.label}</dt>
                  <dd className="mt-3 font-mono text-sm">
                    {row.from && (
                      <>
                        <span className="text-dim">{row.from}</span>
                        <span className="px-2 text-dim">→</span>
                      </>
                    )}
                    <span className="text-amber">{row.to}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="rounded p-2.5 text-dim transition-colors hover:text-amber"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
