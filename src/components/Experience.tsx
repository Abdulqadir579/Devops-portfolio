import { experience, certifications } from '../data';
import { useI18n } from '../i18n';
import Section, { Reveal } from './Section';

export default function Experience() {
  const { t } = useI18n();

  return (
    <Section
      id="experience"
      eyebrow={t.sections.experienceEyebrow}
      title={t.sections.experienceTitle}
    >
      <div className="space-y-px">
        {experience.map((job, i) => {
          const copy = t.experience[job.id as 'token13' | 'skillspace' | 'dastgyr'];
          const note = 'note' in copy ? (copy.note as string) : undefined;
          return (
            <Reveal key={job.id} delay={i * 0.05}>
              <article className="grid gap-4 border-t border-line py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
                <div>
                  <p className="font-mono text-xs text-dim">{copy.period}</p>
                  <h3 className="mt-2 text-base font-medium text-fg">{copy.role}</h3>
                  <p className="mt-1 text-sm text-muted" dir="ltr">
                    {job.company}
                  </p>
                  <p className="mt-0.5 text-xs text-dim">{copy.location}</p>
                  {note && (
                    <p className="mt-2 inline-block rounded border border-line px-2 py-0.5 text-[11px] text-dim">
                      {note}
                    </p>
                  )}
                  {job.current && (
                    <p className="mt-2 inline-block rounded border border-amber-line bg-amber-soft px-2 py-0.5 text-[11px] text-amber">
                      {t.experience.current}
                    </p>
                  )}
                </div>
                <ul className="space-y-3">
                  {copy.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-lineStrong"
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-dim">
              {t.credentials.certificationsTitle}
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.id}>
                  <p className="text-[15px] text-fg" dir="ltr">
                    {c.name}
                  </p>
                  <p className="text-xs text-dim">
                    {c.id === 'cka' ? t.credentials.ckaStatus : t.credentials.certified}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-dim">
              {t.credentials.educationTitle}
            </p>
            <div className="mt-4">
              <p className="text-[15px] text-fg">{t.credentials.degree}</p>
              <p className="mt-1 text-sm text-muted">{t.credentials.school}</p>
              <p className="mt-1 text-xs text-dim">{t.credentials.educationNote}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
