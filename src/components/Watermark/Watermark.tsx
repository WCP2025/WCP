import { site } from '@/data/site';

/**
 * Marca de agua del logo: UN SOLO logo grande, centrado, fijo en la
 * pantalla (position: fixed) — se queda quieto en el mismo lugar
 * mientras se scrollea la página, así que "flota" detrás de todas
 * las secciones a medida que el contenido pasa por encima.
 *
 * Para ajustar:
 * - Más/menos visible → cambiar "opacity-[0.12]" más abajo
 * - Más grande/chico → cambiar "w-[780px]"
 */
export function Watermark() {
  return (
    <div
      className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      <img
        src={site.logo}
        alt=""
        className="w-[780px] max-w-[85vw] opacity-[0.55]"
      />
    </div>
  );
}
