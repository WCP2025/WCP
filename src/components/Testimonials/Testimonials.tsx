import { motion } from 'framer-motion';
import { TestimonialCard } from './TestimonialCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { staggerContainer } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';

/** Sección completa de testimonios: encabezado + grid de tarjetas. */
export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonios" className="py-16 md:py-section bg-white/70">
      <Container>
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
          align="center"
          chip
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {t.testimonials.items.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
