import { motion } from 'framer-motion';
import { useState } from 'react';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { useLanguage } from '@/hooks/useLanguage';
import { site } from '@/data/site';

/**
 * Botón flotante de WhatsApp, fijo en la esquina inferior derecha.
 * Se expande mostrando texto al hacer hover (desktop). En mobile
 * queda solo el ícono (ver clases responsive abajo).
 */
export function WhatsAppFloat() {
  const { t } = useLanguage();
  const [isWhatsAppSelectorOpen, setIsWhatsAppSelectorOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {isWhatsAppSelectorOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-72 rounded-lg bg-white p-3 shadow-3">
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

      <button
        type="button"
        onClick={() => setIsWhatsAppSelectorOpen((isOpen) => !isOpen)}
        aria-label={t.cta.whatsappFloat}
        aria-expanded={isWhatsAppSelectorOpen}
        className="group relative flex items-center overflow-hidden rounded-full bg-primary p-4 text-white shadow-3 hover:shadow-3"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping-slow" aria-hidden="true" />

        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" className="text-[#25D366] shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2C6.478 2 2 6.478 2 12.004c0 1.885.512 3.7 1.483 5.284L2 22l4.837-1.457A9.958 9.958 0 0 0 12.004 22C17.53 22 22 17.522 22 11.996 22 6.47 17.53 2 12.004 2zm0 18.13a8.09 8.09 0 0 1-4.132-1.126l-.296-.176-3.06.92.926-2.982-.193-.307a8.096 8.096 0 0 1-1.246-4.35c0-4.482 3.648-8.13 8.13-8.13 4.483 0 8.13 3.648 8.13 8.13 0 4.482-3.647 8.021-8.259 8.021z" />
        </svg>

        <span className="max-w-0 opacity-0 whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] group-hover:opacity-100 group-hover:ml-2.5 hidden sm:inline-block">
          {t.cta.whatsappFloat}
        </span>
      </button>
    </motion.div>
  );
}
