import { profile } from '../data';
import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
        <p className="text-xs text-dim">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="text-xs text-dim">{t.footer.built}</p>
      </div>
    </footer>
  );
}
