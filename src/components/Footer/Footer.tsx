import { useState } from 'react';
import { Check, Copy, Instagram, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { footerLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { useLanguage } from '@/hooks/useLanguage';

/** Footer claro con columnas (marca / enlaces / redes) + barra de derechos. */
export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  }

  return (
    <footer className="bg-[rgba(239,244,255,0.72)]">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-2.5">
              <img src={site.logo} alt={site.name} className="h-8 w-8 rounded-md object-cover" />
              <span className="font-script text-xl text-primary">{site.name}</span>
            </a>
            <p className="mt-4 text-body-md text-neutral max-w-xs">{t.footer.blurb}</p>
          </div>

          {/* Enlaces */}
          <div>
            <div className="font-script text-xl text-primary mb-4 pb-2 border-b-2 border-secondary/30 inline-block">
              {t.footer.linksTitle}
            </div>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-body-md text-neutral hover:text-primary transition-colors w-fit"
                >
                  {t.nav[link.key]}
                </a>
              ))}
            </nav>
          </div>

          {/* Redes sociales */}
          <div>
            <div className="font-script text-xl text-primary mb-4 pb-2 border-b-2 border-secondary/30 inline-block">
              {t.footer.socialTitle}
            </div>
            <div className="flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`mailto:${site.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.emailAction.goToGmail}
                title={t.emailAction.goToGmail}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              title={emailCopied ? t.emailAction.copiedTitle : t.emailAction.copy}
              className="mt-3 inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-sm text-neutral transition-colors hover:border-secondary hover:text-primary"
            >
              {emailCopied ? (
                <Check size={14} className="text-secondary" aria-hidden="true" />
              ) : (
                <Copy size={14} aria-hidden="true" />
              )}
              <span className="truncate">{site.email}</span>
            </button>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-caption text-neutral">
            <span>
              &copy; {year} {site.name}. {t.footer.rights}
            </span>
            <span>
              {t.footer.credit}{' '}
              <a
                href="https://github.com/jhonriverat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Jhon Silva
              </a>
            </span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
