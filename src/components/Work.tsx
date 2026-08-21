import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, Category } from '../data';
import Section, { Reveal } from './Section';

const filters: ('All' | Category)[] = [
  'All',
  'Blockchain',
  'Platform & SRE',
  'Self-directed',
];

export default function Work() {
  const [active, setActive] = useState<'All' | Category>('All');
  const shown =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="work" eyebrow="Selected work" title="Things I built and run">
      <Reveal>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter work">
          {filters.map((f) => {
            const on = active === f;
            const count =
              f === 'All'
                ? projects.length
                : projects.filter((p) => p.category === f).length;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(f)}
                className={`rounded border px-3 py-1.5 font-mono text-xs transition-colors ${
                  on
                    ? 'border-amber-line bg-amber-soft text-amber'
                    : 'border-line text-dim hover:border-lineStrong hover:text-muted'
                }`}
              >
                {f}
                <span className="ml-2 text-dim">{count}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={Math.min(i, 4) * 0.04}>
            <article className="group flex h-full flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-lineStrong">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber">
                  {p.category}
                </p>
                {p.impact && (
                  <p className="shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                    {p.impact}
                  </p>
                )}
              </div>

              <h3 className="mt-4 text-lg font-medium tracking-tight text-fg">
                {p.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-dim">{p.context}</p>

              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {p.blurb}
              </p>

              <p className="mt-4 border-l-2 border-amber-line pl-3 text-[15px] leading-relaxed text-muted">
                <span className="text-dim">Why it matters — </span>
                {p.proves}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
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
                      className="inline-flex items-center gap-1 font-mono text-xs text-amber transition-colors hover:text-fg"
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
