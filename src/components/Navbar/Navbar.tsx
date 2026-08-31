import { Menu, X, Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useScrolled } from '@/hooks/useScrolled';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useLanguage } from '@/hooks/useLanguage';
import { navLinks } from '@/data/navigation';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';

/**
 * Header fijo: logo + nombre, links centrados, selector de idioma
 * y botón de contacto. En mobile los links colapsan a un menú
 * desplegable (hamburguesa).
 */
export function Navbar() {
  const scrolled = useScrolled();
  const { isOpen, toggle, close } = useMobileMenu();
  const { t } = useLanguage();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b-4 border-secondary bg-primary transition-shadow duration-200',
        scrolled && 'shadow-1'
      )}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo + nombre */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            <img
              src={site.logo}
              alt={site.name}
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="font-script text-xl text-white whitespace-nowrap">
              {site.name}
            </span>
          </a>

          {/* Links — desktop */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-body-md text-white/80 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LanguageToggle />
            <Button
              href="#contacto"
              variant="primary"
              className="bg-white px-6 py-2.5 text-sm text-primary hover:bg-secondary hover:text-white"
            >
              {t.nav.contacto}
            </Button>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary hover:bg-secondary hover:text-white transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>

          {/* Botón hamburguesa — solo mobile */}
          <button
            onClick={toggle}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Menú mobile desplegable */}
      {isOpen && (
        <div className="md:hidden border-t border-white/15 bg-primary">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="py-2.5 text-body-md text-white"
                >
                  {t.nav[link.key]}
                </a>
              ))}
              <div className="flex items-center justify-between mt-2 py-2">
                <LanguageToggle />
              </div>
              <Button
                href="#contacto"
                variant="primary"
                onClick={close}
                className="w-full bg-white text-primary hover:bg-secondary hover:text-white"
              >
                {t.nav.contacto}
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
