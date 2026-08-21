import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
        <p className="font-mono text-xs text-dim">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-mono text-xs text-dim">
          Built with React and Tailwind. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
