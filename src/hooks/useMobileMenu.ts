import { useState } from 'react';

/** Estado simple abierto/cerrado para el menú hamburguesa en mobile. */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);
  return { isOpen, toggle, close };
}
