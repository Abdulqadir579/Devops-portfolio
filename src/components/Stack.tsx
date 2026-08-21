import { stackGroups } from '../data';
import { useI18n } from '../i18n';
import Section, { Reveal } from './Section';

export default function Stack() {
  const { t } = useI18n();

  return (
    <Section id="stack" eyebrow={t.sections.stackEyebrow} title={t.sections.stackTitle}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {stackGroups.map((group, i) => (
          <Reveal key={group.id} delay={Math.min(i, 4) * 0.04}>
            <div className="h-full bg-panel p-6">
              <p className="text-[11px] uppercase tracking-[0.14em] text-amber">
                {t.stackGroups[group.id as keyof typeof t.stackGroups]}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
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
