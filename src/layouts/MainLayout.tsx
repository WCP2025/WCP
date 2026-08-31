import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { Watermark } from '@/components/Watermark';

/**
 * Layout general: Navbar arriba, Footer abajo, botón flotante de
 * WhatsApp siempre visible, y el contenido de la página en el medio.
 * La <Watermark /> queda fija detrás de todo (z-0) — el contenido
 * (z-10) siempre se dibuja encima. Si más adelante agregan más
 * páginas (ej: /privacidad), todas comparten este mismo layout.
 */
export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Watermark />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}
