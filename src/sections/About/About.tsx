import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Stats } from '@/components/Stats';
import { fadeUp } from '@/lib/animations';
import { useLanguage } from '@/hooks/useLanguage';
import { site } from '@/data/site';
import aboutImg from '@/assets/Cocina002.jpeg';

/**
 * Sección "Nosotros": foto a la izquierda (con un detalle decorativo
 * superpuesto), texto + estadísticas a la derecha.
 */
export function About() {
  const { t } = useLanguage();
  const [paragraphBeforeName, ...paragraphAfterName] = t.about.paragraph1.split(site.name);

  return (
    <section id="nosotros" className="py-16 md:py-section bg-[rgba(248,250,252,0.72)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* --- Imagen --- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 md:order-1"
          >
            <img
              src={aboutImg}
              alt={t.about.imageAlt}
              loading="lazy"
              className="w-full aspect-square object-cover rounded-lg"
            />
            <div className="absolute bottom-0 right-0 w-52 overflow-hidden rounded-tl-[3.5rem] border border-secondary bg-primary px-5 pb-4 pt-8 text-right shadow-3">
              <span
                className="absolute -left-8 -top-6 h-16 w-72 rounded-[50%] border-t-[6px] border-secondary"
                aria-hidden="true"
              />
              <span className="relative block font-script text-[22px] leading-tight text-white">
                {site.name}
              </span>
            </div>
          </motion.div>

          {/* --- Texto + stats --- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2"
          >
            <span className="inline-flex items-center gap-2 font-script text-xl text-secondary">
              <span className="h-px w-6 bg-secondary" />
              {t.about.eyebrow}
            </span>

            <h2 className="mt-3 text-headline-lg-mobile md:text-headline-md text-primary">
              {t.about.title}
            </h2>

            <div className="mt-5 space-y-4 text-body-md text-neutral max-w-md">
              <p>
                {paragraphBeforeName}
                <span className="font-script text-xl text-primary">{site.name}</span>
                {paragraphAfterName.join(site.name)}
              </p>
              <p className="text-primary font-semibold italic">{t.about.tagline}</p>
            </div>

            <Stats items={t.about.stats} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
