import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { useLanguage } from '@/hooks/useLanguage';
import { site } from '@/data/site';

/** Franja final oscura que invita a escribir por WhatsApp. */
export function CTA() {
  const { t } = useLanguage();
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] = useState(false);

  return (
    <section id="contacto" className="py-20 md:py-section bg-[rgba(10,37,64,0.9)] text-white">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary mb-6"
          >
            <Sparkles size={26} />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-headline-lg-mobile md:text-headline-lg"
          >
            {t.cta.titleBefore} <span className="text-secondary-light">{t.cta.titleHighlight}</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-body-lg text-white/75 max-w-md">
            {t.cta.description}
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-8">
            <Button
              href="#whatsapp-options"
              onClick={(event) => {
                event.preventDefault();
                setIsWhatsAppSelectorOpen((isOpen) => !isOpen);
              }}
              aria-expanded={isWhatsAppSelectorOpen}
              aria-controls="whatsapp-options"
              variant="whatsapp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2C6.478 2 2 6.478 2 12.004c0 1.885.512 3.7 1.483 5.284L2 22l4.837-1.457A9.958 9.958 0 0 0 12.004 22C17.53 22 22 17.522 22 11.996 22 6.47 17.53 2 12.004 2zm0 18.13a8.09 8.09 0 0 1-4.132-1.126l-.296-.176-3.06.92.926-2.982-.193-.307a8.096 8.096 0 0 1-1.246-4.35c0-4.482 3.648-8.13 8.13-8.13 4.483 0 8.13 3.648 8.13 8.13 0 4.482-3.647 8.021-8.259 8.021z" />
              </svg>
              {t.cta.button}
            </Button>

            {isWhatsAppSelectorOpen && (
              <div
                id="whatsapp-options"
                className="absolute left-1/2 z-20 mt-3 w-72 -translate-x-1/2 rounded-lg bg-white p-3 text-left shadow-3"
              >
                <p className="px-2 pb-2 text-sm font-semibold text-primary">
                  {t.cta.whatsappSelectorTitle}
                </p>
                <div className="space-y-1">
                  {site.whatsappNumbers.map((line) => (
                    <a
                      key={line.number}
                      href={getWhatsAppLink(line.number)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center rounded-md px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-surface"
                    >
                      {line.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-caption text-white/60"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} /> {t.cta.trust1}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {t.cta.trust2}
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
