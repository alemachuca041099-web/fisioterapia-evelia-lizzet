export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type TestimonialItem = {
  author: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ChatIntent = {
  label: string;
  message: string;
  answer?: string;
};

export const therapist = {
  name: 'LFT. Evelia Lizzet',
  role: 'Fisioterapia a domicilio',
  location: 'San Juan del Río y alrededores',
  tagline: 'Tu recuperación, mi compromiso.',
  subtagline: 'Volver a moverte sin dolor sí es posible.',
  photo: 'assets/images/inicio/evelia.png',
  whatsappNumber: '522331132393',
  whatsappDisplay: '233 113 2393',
  whatsappMessage: 'Hola, quiero agendar una sesión de fisioterapia a domicilio.'
} as const;

export function whatsappLinkFor(message: string): string {
  return `https://wa.me/${therapist.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappLink = whatsappLinkFor(therapist.whatsappMessage);

export const chatIntents: ChatIntent[] = [
  {
    label: '¿Las sesiones son en mi domicilio?',
    message: 'Hola, quisiera información sobre las sesiones de fisioterapia a domicilio.',
    answer: `Sí, todas las sesiones son en tu domicilio, en ${therapist.location}, con el equipo necesario para cada tratamiento.`
  },
  {
    label: 'Tengo dolor de espalda o una lesión',
    message: 'Hola, tengo dolor de espalda / una lesión y quisiera información sobre fisioterapia a domicilio.',
    answer:
      'Sí, trato dolor de espalda, contracturas y lesiones musculares o articulares con terapia manual y ejercicio guiado, todo a domicilio.'
  },
  {
    label: 'Rehabilitación post-operatoria',
    message: 'Hola, necesito rehabilitación post-operatoria a domicilio. ¿Me pueden dar información?',
    answer: 'Sí, hago rehabilitación post-operatoria progresiva y segura, con seguimiento cercano en cada visita.'
  },
  {
    label: 'Atención para adulto mayor',
    message: 'Hola, busco fisioterapia a domicilio para un adulto mayor. ¿Qué información necesitan?',
    answer: 'Sí, atiendo adultos mayores enfocándome en movilidad, equilibrio e independencia, siempre en su domicilio.'
  },
  {
    label: 'Quiero agendar una cita',
    message: 'Hola, quiero agendar una cita de fisioterapia a domicilio.'
  },
  {
    label: 'Precios y disponibilidad',
    message: 'Hola, me gustaría conocer precios y disponibilidad para fisioterapia a domicilio.'
  }
];

export const services: ServiceItem[] = [
  {
    slug: 'dolor-de-espalda',
    title: 'Dolor de espalda',
    description: 'Alivio de dolor lumbar, cervical y contracturas con terapia manual y ejercicio guiado.',
    icon: 'shield'
  },
  {
    slug: 'lesiones',
    title: 'Lesiones',
    description: 'Recuperación de esguinces, desgarros y lesiones musculares o articulares.',
    icon: 'activity'
  },
  {
    slug: 'post-operatorio',
    title: 'Post-operatorio',
    description: 'Rehabilitación progresiva y segura tras una cirugía, con seguimiento cercano.',
    icon: 'heart'
  },
  {
    slug: 'adulto-mayor',
    title: 'Adulto mayor',
    description: 'Atención pensada en movilidad, equilibrio e independencia para la tercera edad.',
    icon: 'sparkles'
  },
  {
    slug: 'deportiva',
    title: 'Deportiva',
    description: 'Recuperación y prevención de lesiones para volver a entrenar con confianza.',
    icon: 'bolt'
  },
  {
    slug: 'neurologica',
    title: 'Neurológica',
    description: 'Rehabilitación funcional para procesos neurológicos, con metas claras por etapa.',
    icon: 'briefcase'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Escríbeme',
    description: 'Me cuentas qué te pasa y coordinamos día y hora directo por WhatsApp.'
  },
  {
    step: '02',
    title: 'Valoración a domicilio',
    description: 'Voy a tu casa, evalúo dolor y movilidad, y armamos un plan de tratamiento claro.'
  },
  {
    step: '03',
    title: 'Sesiones y seguimiento',
    description: 'Tratamiento a tu ritmo, con ajustes según tu evolución en cada visita.'
  }
] as const;

export const coverage = {
  hours: 'Lunes a sábado · 8:00 a 20:00',
  area: therapist.location
} as const;

export const benefits = [
  {
    title: 'Atención en tu casa',
    description: 'Sin traslados ni salas de espera: la sesión se adapta a tu espacio y tu horario.'
  },
  {
    title: 'Plan personalizado',
    description: 'Cada tratamiento responde a tu evolución, no a protocolos genéricos.'
  },
  {
    title: 'Seguimiento cercano',
    description: 'Explico avances, tiempos y siguientes pasos con lenguaje simple.'
  },
  {
    title: 'Agenda por WhatsApp',
    description: 'Escríbeme y te confirmo el mejor horario disponible.'
  }
] as const;

export const testimonials: TestimonialItem[] = [
  {
    author: 'Rosa M.',
    role: 'Paciente adulto mayor',
    quote: 'Las sesiones en casa me dieron mucha confianza para volver a caminar sin miedo.'
  },
  {
    author: 'Carlos H.',
    role: 'Recuperación post-operatoria',
    quote: 'El seguimiento fue puntual y muy profesional, noté avances desde las primeras semanas.'
  },
  {
    author: 'Daniela R.',
    role: 'Dolor de espalda',
    quote: 'Por fin entendí qué me pasaba y cómo cuidarme. El dolor bajó muchísimo.'
  }
];

export const faqs: FaqItem[] = [
  {
    question: '¿Las sesiones son en mi domicilio?',
    answer: 'Sí. Voy a tu casa en San Juan del Río y alrededores con el equipo necesario para cada sesión.'
  },
  {
    question: '¿Cómo agendo una cita?',
    answer: 'Escríbeme directo por WhatsApp al 233 113 2393 y coordinamos el horario que te funcione mejor.'
  },
  {
    question: '¿Atienden dolor de espalda y lesiones deportivas?',
    answer: 'Sí, son dos de las consultas más frecuentes y se trabajan con terapia manual y ejercicio terapéutico.'
  },
  {
    question: '¿Manejan rehabilitación post-operatoria y de adultos mayores?',
    answer: 'Sí. Diseño planes progresivos y seguros según tu proceso, con seguimiento en cada visita.'
  }
];
