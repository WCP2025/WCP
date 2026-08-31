// ============================================================
// DICCIONARIO DE TRADUCCIONES
// ------------------------------------------------------------
// Todo el texto visible del sitio vive acá, en dos idiomas.
// Los componentes NO tienen texto escrito adentro — todos leen
// de acá a través del hook useLanguage(). Para editar cualquier
// texto de la página (en cualquiera de los dos idiomas), este es
// el único archivo que hay que tocar.
//
// Estructura: translations[idioma].seccion.campo
// ============================================================

export type Language = 'es' | 'en';

export interface StatItem {
  number: string;
  label: string;
  highlight?: boolean;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
  variant: 'light' | 'dark' | 'wide';
  images?: TestimonialImage[];
}

export interface TestimonialImage {
  src: string;
  alt: string;
}

export type FaqContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export interface FaqItem {
  question: string;
  content: FaqContentBlock[];
}

export interface Translation {
  nav: {
    inicio: string;
    nosotros: string;
    testimonios: string;
    contacto: string;
    faq: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeTitle: string;
    badgeSub: string;
    imageAlt: string;
    imagePlaceholder: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    tagline: string;
    imageAlt: string;
    imagePlaceholder: string;
    stats: StatItem[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    outro: string;
  };
  security: {
    eyebrow: string;
    title: string;
    text: string;
    badge1: string;
    badge2: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: TestimonialItem[];
    photosLabel: string;
    openPhoto: string;
    closeGallery: string;
    previousPhoto: string;
    nextPhoto: string;
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  cta: {
    titleBefore: string;
    titleHighlight: string;
    description: string;
    button: string;
    trust1: string;
    trust2: string;
    whatsappFloat: string;
    whatsappSelectorTitle: string;
  };
  footer: {
    blurb: string;
    linksTitle: string;
    socialTitle: string;
    rights: string;
    credit: string;
  };
  emailAction: {
    copy: string;
    goToGmail: string;
    copied: string;
    copiedTitle: string;
    mailSentTo: string;
  };
  notFound: {
    message: string;
    button: string;
  };
}

export const translations: Record<Language, Translation> = {
  es: {
    nav: {
      inicio: 'Inicio',
      nosotros: 'Nosotros',
      testimonios: 'Testimonios',
      contacto: 'Contacto',
      faq: 'FAQ',
    },
    hero: {
      eyebrow: 'Work Cleaning & Pressure',
      titleBefore: 'Limpieza especializada para',
      titleHighlight: 'cocinas',
      titleAfter: 'comerciales',
      description:
        'Ayudamos a restaurantes y negocios a mantener campanas, filtros y sistemas de extracción limpios, seguros y listos para operar.',
      ctaPrimary: 'Solicitar cotización →',
      ctaSecondary: 'Conocer más',
      badgeTitle: '4.9/5',
      badgeSub: '80+ trabajos',
      imageAlt: 'Cocina comercial limpia por Work Cleaning & Pressure',
      imagePlaceholder: 'Foto de portada\n(reemplaza esta imagen)',
    },
    about: {
      eyebrow: 'Quiénes somos',
      title: 'Limpieza profesional con calidad, seguridad y compromiso',
      paragraph1:
        'En Work Cleaning & Pressure nos dedicamos a brindar servicios profesionales de limpieza para restaurantes y negocios, especializados en campanas de cocina, filtros, sistemas de extracción, lavado a presión y limpieza profunda. Con más de 3 años de experiencia y un equipo totalmente asegurado, nos comprometemos a ofrecer calidad, seguridad y atención al detalle en cada proyecto. Creemos en relaciones duraderas basadas en la confianza y el buen trabajo. Work Cleaning & Pressure: limpieza profesional con calidad, seguridad y compromiso.',
      tagline: 'Sirviendo con orgullo al Sur de la Florida',
      imageAlt: 'Cocina comercial limpia y equipada',
      imagePlaceholder: 'Foto del equipo\n(reemplaza esta imagen)',
      stats: [
        { number: '3+', label: 'Años de experiencia' },
        { number: '80+', label: 'Trabajos realizados' },
        { number: '99%', label: 'Clientes satisfechos', highlight: true },
      ],
    },
    whyUs: {
      eyebrow: 'Por qué elegirnos',
      title: 'Más que limpieza: prevención y seguridad para su negocio y su personal',
      intro:
        'En Work Cleaning & Pressure entendemos que una cocina comercial limpia va más allá de la apariencia: se trata de seguridad, cumplimiento y operación. Lo que nos diferencia:',
      points: [
        'Más de 3 años de experiencia',
        'Empresa totalmente asegurada',
        'Personal capacitado y comprometido',
        'Servicio puntual y confiable',
        'Atención personalizada y resultados de alta calidad',
      ],
      outro:
        'Nuestro objetivo es ser un aliado de confianza para la seguridad, el mantenimiento y la buena imagen de tu negocio.',
    },
    security: {
      eyebrow: 'Seguridad y cumplimiento',
      title: 'Protección y tranquilidad en cada servicio',
      text:
        'En Work Cleaning & Pressure, la seguridad de nuestros clientes y la calidad de nuestro trabajo son prioridad. Contamos con un seguro de responsabilidad civil de hasta $1,000,000, brindando protección y tranquilidad en cada servicio. Además, realizamos la limpieza de campanas de cocina y sistemas de extracción siguiendo las directrices de la NFPA 96, el estándar reconocido para la limpieza y mantenimiento de ventilación en cocinas comerciales.',
      badge1: 'Seguro de responsabilidad civil hasta $1,000,000',
      badge2: 'Cumplimiento con el estándar NFPA 96',
    },
    testimonials: {
      eyebrow: 'Testimonios',
      title: 'Respaldados por la confianza de nuestros clientes',
      description:
        'Lo que dicen las personas que ya confiaron en nosotros para dejar sus espacios impecables.',
      items: [
        {
          quote:
            'Excelente atención y resultados. El equipo entendió exactamente lo que necesitábamos desde el primer día. Además de un trabajo impecable, nos entregaron la certificación del servicio, lo que nos dio mucha tranquilidad. Totalmente recomendados.',
          name: 'María Gómez',
          role: 'Cliente comercial',
          initials: 'M',
          variant: 'light',
          images: [
            {
              src: '/testimonials/maria-service-certification.jpeg',
              alt: 'Certificación de servicio de limpieza de campana de extracción',
            },
          ],
        },
        {
          quote:
            'Profesionales, puntuales y con muy buena comunicación durante todo el proceso. Totalmente recomendados.',
          name: 'Adam Harris',
          role: 'Administrador de hotel',
          initials: 'A',
          variant: 'dark',
          images: [
            {
              src: '/testimonials/kitchen-hood-1.jpeg',
              alt: 'Campana de cocina comercial y equipo de cocción',
            },
            {
              src: '/testimonials/kitchen-hood-2.jpeg',
              alt: 'Sistema de extinción y campana de cocina comercial',
            },
          ],
        },
        {
          quote:
            'Superó nuestras expectativas. Ya los contactamos para un segundo proyecto en otra sucursal.',
          name: 'Laura Ríos',
          role: 'Dueña de local comercial',
          initials: 'L',
          variant: 'wide',
          images: [
            {
              src: '/testimonials/laura-extraction-1.jpeg',
              alt: 'Interior limpio de un sistema de extracción comercial',
            },
            {
              src: '/testimonials/laura-extraction-2.jpeg',
              alt: 'Detalle del ventilador de un sistema de extracción limpio',
            },
            {
              src: '/testimonials/laura-extraction-3.jpeg',
              alt: 'Estado previo de un sistema de extracción comercial',
            },
          ],
        },
      ],
      photosLabel: 'Fotos del trabajo',
      openPhoto: 'Abrir foto',
      closeGallery: 'Cerrar galería',
      previousPhoto: 'Foto anterior',
      nextPhoto: 'Foto siguiente',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Con qué frecuencia se debe realizar la limpieza del sistema de extracción?',
          content: [
            {
              type: 'paragraph',
              text: 'De acuerdo con las recomendaciones de la NFPA 96, la frecuencia de limpieza depende del tipo y volumen de operación de cada cocina:',
            },
            {
              type: 'list',
              items: [
                'Cocinas que utilizan leña o carbón, o que tienen un alto volumen de producción: se recomienda realizar la limpieza cada 1 a 3 meses como máximo.',
                'Cocinas con un bajo volumen de producción: se recomienda realizar la limpieza cada 6 meses.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Mantener el sistema de extracción limpio y libre de acumulación de grasa es fundamental para reducir el riesgo de incendios, mantener un ambiente de trabajo seguro y ayudar a cumplir con los requisitos de inspección.',
            },
            {
              type: 'paragraph',
              text: 'Una limpieza preventiva y realizada a tiempo puede ayudarle a evitar sorpresas durante una inspección y gastos inesperados.',
            },
          ],
        },
        {
          question: '¿Qué incluye el servicio de limpieza?',
          content: [
            {
              type: 'paragraph',
              text: 'Nuestro servicio está enfocado en la limpieza profesional del sistema de extracción de la cocina, incluyendo campanas, filtros y las áreas correspondientes del sistema, según las necesidades de cada establecimiento.',
            },
            {
              type: 'paragraph',
              text: 'Trabajamos para eliminar la acumulación de grasa y residuos, ayudando a mantener el sistema limpio, seguro y en óptimas condiciones de funcionamiento.',
            },
          ],
        },
        {
          question: '¿Por qué es importante limpiar las campanas y el sistema de extracción?',
          content: [
            {
              type: 'paragraph',
              text: 'La acumulación de grasa dentro del sistema de extracción puede representar un importante riesgo de incendio. Una limpieza profesional y periódica ayuda a reducir este riesgo y contribuye a mantener una cocina más segura y en mejores condiciones.',
            },
            {
              type: 'paragraph',
              text: 'Además, mantener el sistema correctamente limpio puede ayudar a los establecimientos a prepararse para inspecciones y cumplir con las recomendaciones aplicables de seguridad contra incendios.',
            },
          ],
        },
        {
          question: '¿Mi negocio necesita realizar una limpieza aunque el sistema no se vea muy sucio?',
          content: [
            {
              type: 'paragraph',
              text: 'Sí. La grasa y los residuos pueden acumularse en áreas internas del sistema que no siempre son visibles durante una inspección visual.',
            },
            {
              type: 'paragraph',
              text: 'Por esta razón, recomendamos establecer un programa de limpieza preventiva basado en el volumen de producción y el tipo de cocina. La limpieza periódica ayuda a prevenir acumulaciones excesivas y permite mantener el sistema en mejores condiciones durante todo el año.',
            },
          ],
        },
        {
          question: '¿Por qué elegir Work Cleaning & Pressure LLC para la limpieza de mi sistema de extracción?',
          content: [
            {
              type: 'paragraph',
              text: 'En Work Cleaning & Pressure LLC nos enfocamos en ofrecer un servicio profesional, responsable y de alta calidad para establecimientos comerciales en South Florida.',
            },
            {
              type: 'paragraph',
              text: 'Contamos con más de 3 años de experiencia en la industria, estamos asegurados por más de $1 millón y realizamos nuestros servicios siguiendo las recomendaciones y estándares aplicables de NFPA 96.',
            },
            {
              type: 'paragraph',
              text: 'Nuestro objetivo es ayudar a nuestros clientes a mantener sus sistemas de extracción limpios, seguros y preparados para las inspecciones, brindando un servicio profesional en el que puedan confiar.',
            },
          ],
        },
      ],
    },
    cta: {
      titleBefore: 'Llevá tu cocina comercial al',
      titleHighlight: 'siguiente nivel',
      description:
        'Escríbenos para coordinar una visita o solicitar una cotización para tu restaurante o negocio, sin compromiso. No esperes una inspección: mantén tu sistema de extracción limpio y certificado.',
      button: 'Contactar por WhatsApp',
      trust1: 'Asesoría sin compromiso',
      trust2: 'Respuesta en el día',
      whatsappFloat: 'Escríbenos',
      whatsappSelectorTitle: 'Elige un número de WhatsApp',
    },
    footer: {
      blurb:
        'Limpieza profesional para cocinas comerciales, restaurantes y negocios del Sur de la Florida.',
      linksTitle: 'Enlaces',
      socialTitle: 'Redes sociales',
      rights: 'Todos los derechos reservados.',
      credit: 'by',
    },
    emailAction: {
      copy: 'Copiar correo',
      goToGmail: 'Ir a Gmail',
      copied: 'Correo copiado',
      copiedTitle: 'Correo copiado. Pégalo en tu aplicación de correo.',
      mailSentTo: 'Enviar correo a',
    },
    notFound: {
      message: 'No encontramos la página que buscás.',
      button: 'Volver al inicio',
    },
  },

  en: {
    nav: {
      inicio: 'Home',
      nosotros: 'About',
      testimonios: 'Testimonials',
      contacto: 'Contact',
      faq: 'FAQ',
    },
    hero: {
      eyebrow: 'Work Cleaning & Pressure',
      titleBefore: 'Specialized cleaning for',
      titleHighlight: 'commercial',
      titleAfter: 'kitchens',
      description:
        'We help restaurants and businesses keep their hoods, filters and exhaust systems clean, safe and ready to operate.',
      ctaPrimary: 'Request a quote →',
      ctaSecondary: 'Learn more',
      badgeTitle: '4.9/5',
      badgeSub: '80+ jobs',
      imageAlt: 'Commercial kitchen cleaned by Work Cleaning & Pressure',
      imagePlaceholder: 'Cover photo\n(replace this image)',
    },
    about: {
      eyebrow: 'Who we are',
      title: 'Professional cleaning with quality, safety and commitment',
      paragraph1:
        'At Work Cleaning & Pressure, we provide professional cleaning services for restaurants and businesses, specializing in kitchen hoods, filters, exhaust systems, pressure washing and deep cleaning. With more than 3 years of experience and a fully insured team, we are committed to quality, safety and attention to detail in every project. We believe in lasting relationships built on trust and great work. Work Cleaning & Pressure: professional cleaning with quality, safety and commitment.',
      tagline: 'Proudly serving South Florida',
      imageAlt: 'Clean, fully equipped commercial kitchen',
      imagePlaceholder: 'Team photo\n(replace this image)',
      stats: [
        { number: '3+', label: 'Years of experience' },
        { number: '80+', label: 'Jobs completed' },
        { number: '99%', label: 'Satisfied clients', highlight: true },
      ],
    },
    whyUs: {
      eyebrow: 'Why choose us',
      title: 'More than cleaning: prevention and safety for your business and staff',
      intro:
        "At Work Cleaning & Pressure, we understand that a clean commercial kitchen goes beyond appearance — it's about safety, compliance and operations. What sets us apart:",
      points: [
        '3+ years of experience',
        'Fully insured company',
        'Trained, committed staff',
        'Punctual, reliable service',
        'Personalized attention and high-quality results',
      ],
      outro:
        'Our goal is to be a trusted partner for the safety, upkeep and image of your business.',
    },
    security: {
      eyebrow: 'Safety & compliance',
      title: 'Protection and peace of mind on every job',
      text:
        'At Work Cleaning & Pressure, the safety of our clients and the quality of our work are top priorities. We carry general liability insurance of up to $1,000,000, providing protection and peace of mind on every service. We also perform kitchen hood and exhaust system cleaning following NFPA 96 guidelines, the recognized standard for cleaning and maintaining ventilation in commercial kitchens.',
      badge1: 'General liability insurance up to $1,000,000',
      badge2: 'NFPA 96 standard compliance',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Backed by our clients\u2019 trust',
      description:
        "What people who've already trusted us to leave their spaces spotless have to say.",
      items: [
        {
          quote:
            'Excellent service and results. The team understood exactly what we needed from day one. In addition to impeccable work, they provided certification for the service, which gave us great peace of mind. Highly recommended.',
          name: 'María Gómez',
          role: 'Commercial client',
          initials: 'M',
          variant: 'light',
          images: [
            {
              src: '/testimonials/maria-service-certification.jpeg',
              alt: 'Exhaust-hood cleaning service certification',
            },
          ],
        },
        {
          quote:
            'Professional, punctual and great communication throughout the whole process. Highly recommended.',
          name: 'Adam Harris',
          role: 'Hotel manager',
          initials: 'A',
          variant: 'dark',
          images: [
            {
              src: '/testimonials/kitchen-hood-1.jpeg',
              alt: 'Commercial kitchen hood and cooking equipment',
            },
            {
              src: '/testimonials/kitchen-hood-2.jpeg',
              alt: 'Commercial kitchen hood and fire-suppression system',
            },
          ],
        },
        {
          quote:
            'They exceeded our expectations. We already booked them for a second project at another branch.',
          name: 'Laura Ríos',
          role: 'Retail store owner',
          initials: 'L',
          variant: 'wide',
          images: [
            {
              src: '/testimonials/laura-extraction-1.jpeg',
              alt: 'Clean interior of a commercial exhaust system',
            },
            {
              src: '/testimonials/laura-extraction-2.jpeg',
              alt: 'Detail of a clean exhaust-system fan',
            },
            {
              src: '/testimonials/laura-extraction-3.jpeg',
              alt: 'Before state of a commercial exhaust system',
            },
          ],
        },
      ],
      photosLabel: 'Job photos',
      openPhoto: 'Open photo',
      closeGallery: 'Close gallery',
      previousPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'How often should an exhaust system be cleaned?',
          content: [
            {
              type: 'paragraph',
              text: 'According to NFPA 96 recommendations, cleaning frequency depends on the type and volume of each kitchen’s operation:',
            },
            {
              type: 'list',
              items: [
                'Kitchens that use wood or charcoal, or have a high production volume: cleaning is recommended every 1 to 3 months at most.',
                'Kitchens with a low production volume: cleaning every 6 months is recommended.',
              ],
            },
            {
              type: 'paragraph',
              text: 'Keeping the exhaust system clean and free of grease buildup is essential to reduce fire risk, maintain a safe workplace, and help meet inspection requirements.',
            },
            {
              type: 'paragraph',
              text: 'Preventive cleaning performed on time can help you avoid surprises during an inspection and unexpected expenses.',
            },
          ],
        },
        {
          question: 'What does the cleaning service include?',
          content: [
            {
              type: 'paragraph',
              text: 'Our service focuses on professional cleaning of the kitchen exhaust system, including hoods, filters, and the relevant parts of the system, according to each establishment’s needs.',
            },
            {
              type: 'paragraph',
              text: 'We work to remove grease buildup and residue, helping keep the system clean, safe, and in optimal working condition.',
            },
          ],
        },
        {
          question: 'Why is it important to clean kitchen hoods and the exhaust system?',
          content: [
            {
              type: 'paragraph',
              text: 'Grease buildup inside the exhaust system can pose a significant fire risk. Professional, regular cleaning helps reduce this risk and contributes to a safer kitchen in better condition.',
            },
            {
              type: 'paragraph',
              text: 'In addition, keeping the system properly clean can help establishments prepare for inspections and follow applicable fire-safety recommendations.',
            },
          ],
        },
        {
          question: 'Does my business need cleaning even if the system does not look very dirty?',
          content: [
            {
              type: 'paragraph',
              text: 'Yes. Grease and residue can build up in internal areas of the system that are not always visible during a visual inspection.',
            },
            {
              type: 'paragraph',
              text: 'For this reason, we recommend establishing a preventive cleaning schedule based on production volume and kitchen type. Regular cleaning helps prevent excessive buildup and keeps the system in better condition throughout the year.',
            },
          ],
        },
        {
          question: 'Why choose Work Cleaning & Pressure LLC to clean my exhaust system?',
          content: [
            {
              type: 'paragraph',
              text: 'At Work Cleaning & Pressure LLC, we focus on providing professional, responsible, high-quality service for commercial establishments in South Florida.',
            },
            {
              type: 'paragraph',
              text: 'We have more than 3 years of industry experience, carry more than $1 million in insurance coverage, and perform our services in accordance with applicable NFPA 96 recommendations and standards.',
            },
            {
              type: 'paragraph',
              text: 'Our goal is to help our clients keep their exhaust systems clean, safe, and prepared for inspections by providing a professional service they can trust.',
            },
          ],
        },
      ],
    },
    cta: {
      titleBefore: 'Take your commercial kitchen to the',
      titleHighlight: 'next level',
      description:
        'Message us to schedule a visit or request a quote for your restaurant or business, with no obligation. Don\'t wait for an inspection: keep your exhaust system clean and certified.',
      button: 'Contact via WhatsApp',
      trust1: 'No-commitment consultation',
      trust2: 'Same-day response',
      whatsappFloat: 'Message us',
      whatsappSelectorTitle: 'Choose a WhatsApp number',
    },
    footer: {
      blurb:
        'Professional cleaning for commercial kitchens, restaurants and businesses across South Florida.',
      linksTitle: 'Links',
      socialTitle: 'Social media',
      rights: 'All rights reserved.',
      credit: 'by',
    },
    emailAction: {
      copy: 'Copy email',
      goToGmail: 'Go to Gmail',
      copied: 'Copied',
      copiedTitle: 'Email copied. Paste it in your email app.',
      mailSentTo: 'Send email to',
    },
    notFound: {
      message: "We couldn't find the page you're looking for.",
      button: 'Back to home',
    },
  },
};
