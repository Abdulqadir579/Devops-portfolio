import { experience, certifications, education } from '../data';
import Section, { Reveal } from './Section';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Track record" title="Where I have done it">
      <div className="space-y-px">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="grid gap-4 border-t border-line py-8 sm:grid-cols-[1fr_2fr] sm:gap-10">
              <div>
                <p className="font-mono text-xs text-dim">{job.period}</p>
                <h3 className="mt-2 text-base font-medium text-fg">{job.role}</h3>
                <p className="mt-1 text-sm text-muted">{job.company}</p>
                <p className="mt-0.5 font-mono text-xs text-dim">{job.location}</p>
                {job.note && (
                  <p className="mt-2 inline-block rounded border border-line px-2 py-0.5 font-mono text-[11px] text-dim">
                    {job.note}
                  </p>
                )}
                {job.current && (
                  <p className="mt-2 inline-block rounded border border-amber-line bg-amber-soft px-2 py-0.5 font-mono text-[11px] text-amber">
                    Current
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {job.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 text-[15px] leading-relaxed text-muted"
                  >
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-lineStrong" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p className="text-[15px] text-fg">{c.name}</p>
                  <p className="font-mono text-xs text-dim">{c.status}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
              Education
            </p>
            <div className="mt-4">
              <p className="text-[15px] text-fg">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-dim">
                {education.year} · {education.note}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
