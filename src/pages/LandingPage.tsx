import { Home } from '@/sections/Home';
import { About } from '@/sections/About';
import { WhyUs } from '@/components/WhyUs';
import { Security } from '@/components/Security';
import { TestimonialsSection } from '@/sections/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactSection } from '@/sections/Contact';

/** Página principal: arma todas las secciones en el orden final. */
export function LandingPage() {
  return (
    <>
      <Home />
      <About />
      <WhyUs />
      <Security />
      <TestimonialsSection />
      <FAQ />
      <ContactSection />
    </>
  );
}
