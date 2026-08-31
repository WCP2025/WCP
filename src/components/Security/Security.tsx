import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';

/**
 * Sección "Seguridad y cumplimiento": ícono + texto + dos chips
 * destacando el seguro de responsabilidad civil y el cumplimiento
 * con el estándar NFPA 96. Fondo navy para que resalte como un
 * bloque de confianza, distinto al resto de secciones claras.
 */
export function Security() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section bg-[rgba(10,37,64,0.94)] text-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary mb-6"
          >
            <ShieldCheck size={26} />
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="text-label-bold uppercase text-white/60"
          >
            {t.security.eyebrow}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-headline-lg-mobile md:text-headline-lg"
          >
            {t.security.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-body-lg text-white/75">
            {t.security.text}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-3">
            <Badge variant="neutral" className="bg-[rgba(255,255,255,0.12)] text-white">
              {t.security.badge1}
            </Badge>
            <Badge variant="accent" className="bg-[rgba(230,57,70,0.25)] text-white">
              {t.security.badge2}
            </Badge>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
