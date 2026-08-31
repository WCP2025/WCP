import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import { MainLayout } from '@/layouts/MainLayout';
import { LandingPage } from '@/pages/LandingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/**
 * Enrutamiento de la app. Hoy es una landing de una sola página
 * (todo vive en "/", navegado por anclas #inicio, #nosotros, etc.),
 * pero queda armado con React Router para poder agregar páginas
 * reales más adelante (ej: /privacidad, /terminos) sin reestructurar
 * nada — solo agregar un <Route> más acá.
 *
 * LanguageProvider envuelve todo para que cualquier componente pueda
 * acceder al idioma actual y las traducciones con useLanguage().
 */
export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
