import { stack } from '../data';
import Section, { Reveal } from './Section';

export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Tooling"
      title="What I actually use in production"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {stack.map((group, i) => (
          <Reveal key={group.group} delay={Math.min(i, 4) * 0.04}>
            <div className="h-full bg-panel p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber">
                {group.group}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line px-2 py-1 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
