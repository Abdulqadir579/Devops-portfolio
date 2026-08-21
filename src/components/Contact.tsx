import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';
import { useI18n } from '../i18n';
import Section, { Reveal } from './Section';

export default function Contact() {
  const { t } = useI18n();

  const rows = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: t.contact.phone, value: profile.phone, href: profile.phoneHref, icon: Phone },
    { label: t.contact.github, value: profile.githubHandle, href: profile.github, icon: Github },
    { label: t.contact.linkedin, value: profile.linkedinHandle, href: profile.linkedin, icon: Linkedin },
  ];

  return (
    <Section id="contact" eyebrow={t.sections.contactEyebrow} title={t.sections.contactTitle}>
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">{t.contact.intro}</p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {rows.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target={r.href.startsWith('http') ? '_blank' : undefined}
              rel={r.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 bg-panel p-5 transition-colors hover:bg-raised"
            >
              <r.icon
                className="h-5 w-5 shrink-0 text-dim transition-colors group-hover:text-amber"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-[0.14em] text-dim">
                  {r.label}
                </span>
                <span className="block truncate text-[15px] text-fg" dir="ltr">
                  {r.value}
                </span>
              </span>
              <ArrowUpRight
                className="ms-auto h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-amber"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 border-t border-line pt-10">
          <p className="text-[11px] uppercase tracking-[0.14em] text-dim">
            {t.contact.authorisationTitle}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {t.authorisation.map((a) => (
              <div key={a.region} className="rounded-lg border border-line bg-panel p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-base font-medium text-fg">{a.region}</h3>
                  <span className="rounded border border-amber-line bg-amber-soft px-2 py-0.5 text-[11px] text-amber">
                    {a.status}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{a.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.14em] text-dim">
              {t.contact.languagesTitle}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.languages.map((l) => (
                <li
                  key={l.name}
                  className="rounded border border-line px-3 py-1.5 text-sm text-muted"
                >
                  {l.name}
                  <span className="ms-2 text-[11px] text-dim">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
