import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * Sección "Por qué elegirnos": intro + checklist de diferenciadores
 * + frase de cierre. Sigue el patrón de listas del design system
 * (bullets navy tipo checkmark, alto padding vertical entre items).
 */
export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section bg-white/70">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 font-script text-xl text-secondary"
          >
            <span className="h-px w-6 bg-secondary" />
            {t.whyUs.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-headline-lg-mobile md:text-headline-lg text-primary"
          >
            {t.whyUs.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-body-lg text-neutral">
            {t.whyUs.intro}
          </motion.p>

          <motion.ul variants={staggerContainer} className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
            {t.whyUs.points.map((point, index) => (
              <motion.li
                // El texto cambia al alternar idioma, pero el ítem es el mismo.
                key={`benefit-${index}`}
                variants={fadeUp}
                className="flex items-start gap-3 py-3 border-b border-border/70"
              >
                <CheckCircle2
                  size={20}
                  className="text-secondary shrink-0 mt-0.5"
                />
                <span className="text-body-md text-primary font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p variants={fadeUp} className="mt-8 text-body-lg text-neutral italic">
            {t.whyUs.outro}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
