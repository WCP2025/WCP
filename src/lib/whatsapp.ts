import { site } from '@/data/site';

/** Arma el link de WhatsApp para una de las líneas configuradas de la empresa. */
export function getWhatsAppLink(phoneNumber: string, customMessage?: string): string {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
