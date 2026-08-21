import { ArrowUpRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { profile, ledger } from '../data';
import { Reveal } from './Section';

export default function Hero() {
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

      <div className="relative mx-auto max-w-page px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <Reveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-dim">
            {profile.available && (
              <span className="inline-flex items-center gap-2 text-amber">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                </span>
                {profile.availabilityNote}
              </span>
            )}
            <span className="text-line">/</span>
            <span>{profile.location}</span>
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-amber sm:text-base">
            {profile.role}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.intro}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 max-w-xl rounded-lg border border-line bg-panel p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              What changed on my watch
            </p>
            <dl className="mt-4 space-y-3">
              {ledger.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="font-mono text-sm text-fg">
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

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded border border-amber-line bg-amber-soft px-4 py-2.5 text-sm text-amber transition-colors hover:border-amber"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-1.5 rounded border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-lineStrong hover:text-fg"
            >
              See the work
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub" icon={Github} />
              <IconLink href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
              <IconLink
                href={`mailto:${profile.email}`}
                label="Email"
                icon={Mail}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 max-w-xl border-l-2 border-amber-line pl-4 text-sm leading-relaxed text-dim">
            {profile.visa}
          </p>
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
