import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/hooks/useLanguage';

/** Preguntas frecuentes en formato acordeón, cerrado por defecto. */
export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white/70 py-16 md:py-section" aria-labelledby="faq-title">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 id="faq-title" className="text-headline-lg-mobile md:text-headline-lg text-primary">
            {t.faq.title}
          </h2>

          <div className="mt-10 border-t-2 border-primary">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-answer-${index}`;

              return (
                <div key={item.question} className="border-b-2 border-primary">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-primary transition-colors hover:text-secondary md:py-7 md:text-xl"
                  >
                    <span>{item.question}</span>
                    {isOpen ? <Minus size={26} className="shrink-0" aria-hidden="true" /> : <Plus size={26} className="shrink-0" aria-hidden="true" />}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-4xl space-y-4 pb-7 text-body-md text-neutral md:text-body-lg">
                          {item.content.map((block, blockIndex) =>
                            block.type === 'paragraph' ? (
                              <p key={`paragraph-${blockIndex}`}>{block.text}</p>
                            ) : (
                              <ul key={`list-${blockIndex}`} className="list-disc space-y-2 pl-6 marker:text-secondary">
                                {block.items.map((listItem) => (
                                  <li key={listItem}>{listItem}</li>
                                ))}
                              </ul>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
