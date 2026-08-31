import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';
import heroImg from '@/assets/Cocina001.jpeg';


/**
 * Hero dividido: texto a la izquierda, imagen a la derecha con una
 * tarjeta flotante superpuesta.
 */
export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-44 md:pb-28 bg-white/70 overflow-hidden">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center"
        >
          {/* --- Texto --- */}
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 font-script text-xl text-secondary"
            >
              <span className="h-px w-6 bg-secondary" />
              {t.hero.eyebrow}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-headline-lg-mobile md:text-display text-primary"
            >
              {t.hero.titleBefore}{' '}
              <span className="relative inline-block">
                {t.hero.titleHighlight}
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 120 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 5.5C30 1.5 90 1.5 118 5.5" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              {t.hero.titleAfter}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-body-lg text-neutral max-w-md">
              {t.hero.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href="#contacto" variant="primary">
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#nosotros" variant="outline">
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </div>

          {/* --- Imagen + tarjeta flotante --- */}
          <motion.div variants={fadeUp} className="relative">
            <img
              src={heroImg}
              alt={t.hero.imageAlt}
              className="w-full aspect-[4/5] object-cover rounded-lg shadow-2"
            />

            <div className="absolute -left-4 sm:-left-6 bottom-8 flex items-center gap-3 bg-white rounded-md pl-4 pr-5 py-3.5 shadow-3 border-l-4 border-secondary">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <div className="text-body-md font-bold text-primary leading-none">
                  {t.hero.badgeTitle}
                </div>
                <div className="text-caption text-neutral mt-1">{t.hero.badgeSub}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
