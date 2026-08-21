import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data';
import Section, { Reveal } from './Section';

const rows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: 'GitHub', value: 'Abdulqadir579', href: profile.github, icon: Github },
  { label: 'LinkedIn', value: 'in/aqsg', href: profile.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let us talk">
      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          I am open to DevSecOps and SRE roles in the UAE, and I am happy to walk
          through any of the systems above in detail. Fastest route is email.
        </p>
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
              <r.icon className="h-5 w-5 shrink-0 text-dim transition-colors group-hover:text-amber" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  {r.label}
                </span>
                <span className="block truncate text-[15px] text-fg">{r.value}</span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-dim transition-colors group-hover:text-amber" aria-hidden="true" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 border-l-2 border-amber-line pl-4 text-sm leading-relaxed text-dim">
          {profile.visa}
        </p>
      </Reveal>
    </Section>
  );
}
