import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, type Category } from '../data';
import { useI18n } from '../i18n';
import Section, { Reveal } from './Section';

type Filter = 'all' | Category;
const filters: Filter[] = ['all', 'blockchain', 'platform', 'self'];

export default function Work() {
  const { t } = useI18n();
  const [active, setActive] = useState<Filter>('all');
  const shown =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section
      id="work"
      eyebrow={t.sections.workEyebrow}
      title={t.sections.workTitle}
    >
      <Reveal>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.work.filterLabel}>
          {filters.map((f) => {
            const on = active === f;
            const count =
              f === 'all'
                ? projects.length
                : projects.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(f)}
                className={`rounded border px-3 py-1.5 text-xs transition-colors ${
                  on
                    ? 'border-amber-line bg-amber-soft text-amber'
                    : 'border-line text-dim hover:border-lineStrong hover:text-muted'
                }`}
              >
                {t.categories[f]}
                <span className="ms-2 font-mono text-dim">{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {shown.map((p, i) => {
          const copy = t.projects[p.id as keyof typeof t.projects] as {
            title: string;
            context: string;
            blurb: string;
            proves: string;
            impact?: string;
          };
          return (
            <Reveal key={p.id} delay={Math.min(i, 4) * 0.04}>
              <article className="flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-lineStrong">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-amber">
                    {t.categories[p.category]}
                  </p>
                  {copy.impact && (
                    <p className="shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                      {copy.impact}
                    </p>
                  )}
                </div>

                <h3 className="mt-4 text-lg font-medium tracking-tight text-fg">
                  {copy.title}
                </h3>
                <p className="mt-1 text-xs text-dim">{copy.context}</p>

                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {copy.blurb}
                </p>

                <p className="mt-4 border-s-2 border-amber-line ps-3 text-[15px] leading-relaxed text-muted">
                  <span className="text-dim">{t.work.whyItMatters}</span>
                  {copy.proves}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5" dir="ltr">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-line px-2 py-1 font-mono text-[11px] text-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.links && (
                  <div className="mt-auto flex flex-wrap gap-4 pt-6">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-amber transition-colors hover:text-fg"
                      >
                        {t.work.links[l.key as keyof typeof t.work.links]}
                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
