import { useEffect, useState } from 'react';

/**
 * Devuelve true cuando el usuario scrolleó más de `threshold` px.
 * Se usa en el Navbar para agregar sombra/borde solo después de
 * bajar un poco, no desde el primer pixel.
 */
export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll(); // estado inicial correcto si la página carga ya scrolleada
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
