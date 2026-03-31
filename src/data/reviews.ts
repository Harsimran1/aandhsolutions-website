export type LocaleKey = 'en' | 'de' | 'fr' | 'es';

export interface ClutchReviewRecord {
  id: string;
  quote: string;
  reviewer: string;
  reviewerRole: string;
  company: string;
  services: string;
  projectCost: string;
  projectPeriod: string;
  date: string;
  location: string;
  industry: string;
  rating: {
    overall: number;
    quality: number;
    schedule: number;
    cost: number;
    willingToRefer: number;
  };
  clutchUrl: string;
}

export const CLUTCH_REVIEWS: ClutchReviewRecord[] = [
  {
    id: '445175',
    quote: "I was impressed with A & H Solutions' timely delivery and product quality.",
    reviewer: 'Kathleen West',
    reviewerRole: 'CEO',
    company: 'SigXA',
    services: 'Custom Software Development, Mobile App Development, Web Development',
    projectCost: '$10,000 to $49,999',
    projectPeriod: 'Mar. 2025 - Mar. 2026',
    date: 'Mar 24, 2026',
    location: 'Edmonton, Alberta',
    industry: 'Medical',
    rating: {
      overall: 5.0,
      quality: 5.0,
      schedule: 5.0,
      cost: 5.0,
      willingToRefer: 5.0,
    },
    clutchUrl: 'https://clutch.co/go-to-review/2968624c-fc17-4936-9124-dddbfe825ae3/445175',
  },
  {
    id: '440530',
    quote: "We are impressed by A & H Solutions' communication, transparency, and work ethic.",
    reviewer: 'Harrison Hayes',
    reviewerRole: 'CEO',
    company: 'Cloudsync',
    services: 'Custom Software Development, Mobile App Development, Web Development',
    projectCost: '$10,000 to $49,999',
    projectPeriod: 'Mar. 2025 - Mar. 2026',
    date: 'Mar 4, 2026',
    location: 'Jackson, Tennessee',
    industry: 'Medical',
    rating: {
      overall: 5.0,
      quality: 5.0,
      schedule: 5.0,
      cost: 5.0,
      willingToRefer: 5.0,
    },
    clutchUrl: 'https://clutch.co/go-to-review/2968624c-fc17-4936-9124-dddbfe825ae3/440530',
  },
  {
    id: '437386',
    quote: 'A & H Solutions delivered high-quality work and understood the requirements perfectly.',
    reviewer: 'Amandeep Kaur Brar',
    reviewerRole: 'Director',
    company: 'Sat Daycare & OSC',
    services: 'Web Development',
    projectCost: 'Confidential',
    projectPeriod: 'Nov. - Dec. 2024',
    date: 'Feb 21, 2026',
    location: 'Fort Saskatchewan, Alberta',
    industry: 'Other industries',
    rating: {
      overall: 5.0,
      quality: 5.0,
      schedule: 5.0,
      cost: 5.0,
      willingToRefer: 5.0,
    },
    clutchUrl: 'https://clutch.co/go-to-review/2968624c-fc17-4936-9124-dddbfe825ae3/437386',
  },
  {
    id: '437904',
    quote: "A & H Solutions' timeliness of completion was impressive.",
    reviewer: 'Jamie Laity',
    reviewerRole: 'Founder',
    company: 'SmartVet AI',
    services: 'AI Development, Custom Software Development, Web Development',
    projectCost: 'Confidential',
    projectPeriod: 'February 2026',
    date: 'Feb 19, 2026',
    location: 'Charlotte, North Carolina',
    industry: 'Information technology',
    rating: {
      overall: 5.0,
      quality: 5.0,
      schedule: 5.0,
      cost: 5.0,
      willingToRefer: 5.0,
    },
    clutchUrl: 'https://clutch.co/go-to-review/2968624c-fc17-4936-9124-dddbfe825ae3/437904',
  },
];

export const REVIEW_COPY: Record<LocaleKey, {
  badge: string;
  title: string;
  description: string;
  proofStrip: {
    ratingLabel: string;
    reviewsLabel: string;
    verifiedLabel: string;
    referLabel: string;
    qualityScheduleLabel: string;
  };
  card: {
    serviceLabel: string;
    periodLabel: string;
    locationLabel: string;
    readOnClutch: string;
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}> = {
  en: {
    badge: 'Verified Client Reviews',
    title: 'Real Feedback From Clutch Reviews',
    description: 'Every quote below is sourced from our public Clutch profile and links directly to the original review.',
    proofStrip: {
      ratingLabel: 'Average Clutch rating',
      reviewsLabel: 'Published reviews',
      verifiedLabel: 'Verified reviewers',
      referLabel: 'Willing to refer',
      qualityScheduleLabel: 'Schedule / Quality',
    },
    card: {
      serviceLabel: 'Services',
      periodLabel: 'Timeline',
      locationLabel: 'Client Location',
      readOnClutch: 'Read full review on Clutch',
    },
    cta: {
      title: 'Need a team for custom software and AI delivery?',
      description: 'We build workflow-focused systems for healthcare, real estate, and operational teams that need reliable execution.',
      primary: 'Start Your Project',
      secondary: 'See Case Studies',
    },
  },
  de: {
    badge: 'Verifizierte Kundenbewertungen',
    title: 'Echtes Feedback aus Clutch-Bewertungen',
    description: 'Jedes Zitat unten stammt aus unserem offentlichen Clutch-Profil und verlinkt auf die Originalbewertung.',
    proofStrip: {
      ratingLabel: 'Durchschnittliche Clutch-Bewertung',
      reviewsLabel: 'Veroffentlichte Bewertungen',
      verifiedLabel: 'Verifizierte Reviewer',
      referLabel: 'Weiterempfehlung',
      qualityScheduleLabel: 'Termin / Qualitat',
    },
    card: {
      serviceLabel: 'Leistungen',
      periodLabel: 'Zeitraum',
      locationLabel: 'Standort des Kunden',
      readOnClutch: 'Vollstandige Bewertung auf Clutch lesen',
    },
    cta: {
      title: 'Suchen Sie ein Team fur individuelle Software und KI?',
      description: 'Wir entwickeln workflow-orientierte Systeme fur Healthcare, Real Estate und operative Teams mit hoher Umsetzungszuverlassigkeit.',
      primary: 'Projekt starten',
      secondary: 'Fallstudien ansehen',
    },
  },
  fr: {
    badge: 'Avis clients verifies',
    title: 'Retours reels issus de Clutch',
    description: 'Chaque citation ci-dessous provient de notre profil Clutch public avec un lien direct vers l avis original.',
    proofStrip: {
      ratingLabel: 'Note moyenne Clutch',
      reviewsLabel: 'Avis publies',
      verifiedLabel: 'Auteurs verifies',
      referLabel: 'Pret a recommander',
      qualityScheduleLabel: 'Delais / Qualite',
    },
    card: {
      serviceLabel: 'Services',
      periodLabel: 'Periode',
      locationLabel: 'Localisation client',
      readOnClutch: 'Lire l avis complet sur Clutch',
    },
    cta: {
      title: 'Besoin d une equipe pour votre logiciel sur mesure et IA ?',
      description: 'Nous livrons des systemes axes workflow pour la sante, l immobilier et les equipes operationnelles.',
      primary: 'Demarrer votre projet',
      secondary: 'Voir les etudes de cas',
    },
  },
  es: {
    badge: 'Resenas verificadas de clientes',
    title: 'Feedback real desde Clutch',
    description: 'Cada cita de abajo proviene de nuestro perfil publico de Clutch y enlaza a la resena original.',
    proofStrip: {
      ratingLabel: 'Valoracion media en Clutch',
      reviewsLabel: 'Resenas publicadas',
      verifiedLabel: 'Resenadores verificados',
      referLabel: 'Dispuesto a recomendar',
      qualityScheduleLabel: 'Plazos / Calidad',
    },
    card: {
      serviceLabel: 'Servicios',
      periodLabel: 'Periodo',
      locationLabel: 'Ubicacion del cliente',
      readOnClutch: 'Leer resena completa en Clutch',
    },
    cta: {
      title: 'Necesitas un equipo para software a medida e IA?',
      description: 'Construimos sistemas centrados en workflows para salud, real estate y equipos operativos.',
      primary: 'Iniciar proyecto',
      secondary: 'Ver casos de exito',
    },
  },
};
