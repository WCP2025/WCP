import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import type { TestimonialImage } from '@/i18n/translations';
import { useLanguage } from '@/hooks/useLanguage';

interface TestimonialGalleryProps {
  images?: TestimonialImage[];
}

/** Miniaturas discretas con visor completo para las fotos de un testimonio. */
export function TestimonialGallery({ images = [] }: TestimonialGalleryProps) {
  const { t } = useLanguage();
  // Cada testimonio puede incluir tantas fotos como sea necesario.
  const galleryImages = images;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex === null ? undefined : galleryImages[selectedIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft' && galleryImages.length > 1) {
        setSelectedIndex((index) => (index === null ? 0 : (index - 1 + galleryImages.length) % galleryImages.length));
      }
      if (event.key === 'ArrowRight' && galleryImages.length > 1) {
        setSelectedIndex((index) => (index === null ? 0 : (index + 1) % galleryImages.length));
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryImages.length, selectedIndex]);

  if (galleryImages.length === 0) return null;

  function showPrevious() {
    setSelectedIndex((index) => (index === null ? 0 : (index - 1 + galleryImages.length) % galleryImages.length));
  }

  function showNext() {
    setSelectedIndex((index) => (index === null ? 0 : (index + 1) % galleryImages.length));
  }

  return (
    <>
      <div className="mt-5 mb-6 flex flex-wrap items-center gap-2">
        <span className="sr-only">{t.testimonials.photosLabel}</span>
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative h-14 w-14 overflow-hidden rounded-md ring-1 ring-primary/10 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label={`${t.testimonials.openPhoto} ${index + 1}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-primary/45 opacity-0 transition-opacity group-hover:opacity-100">
              <Images size={18} className="text-white" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={t.testimonials.photosLabel}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-h-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-3"
            />
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label={t.testimonials.closeGallery}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-2 transition-colors hover:bg-secondary hover:text-white"
            >
              <X size={20} aria-hidden="true" />
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={t.testimonials.previousPhoto}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-2 transition-colors hover:bg-secondary hover:text-white"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={t.testimonials.nextPhoto}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-2 transition-colors hover:bg-secondary hover:text-white"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
