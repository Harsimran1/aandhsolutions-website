import type { Locale } from '../lib/i18n';

interface Dictionary {
  nav: {
    home: string;
    services: string;
    caseStudies: string;
    pricing: string;
    blog: string;
    contact: string;
    resources: string;
    pages: string;
    serviceAreas: string;
    canada: string;
    unitedStates: string;
    europe: string;
    freeBlueprint: string;
  };
  footer: {
    home: string;
    product: string;
    resources: string;
    industries: string;
    company: string;
    serviceAreas: string;
    usMarkets: string;
    europe: string;
    features: string;
    faq: string;
    integrations: string;
    careers: string;
    reviews: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaLink: string;
    description: string;
    copyright: string;
  };
  common: {
    aboutUs: string;
    contact: string;
    pricing: string;
    blog: string;
    caseStudies: string;
    careers: string;
    privacyPolicy: string;
    termsOfService: string;
    reviews: string;
    page404: string;
  };
  languageNames: Record<Locale, string>;
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      caseStudies: 'Case Studies',
      pricing: 'Pricing',
      blog: 'Blog',
      contact: 'Contact',
      resources: 'Resources',
      pages: 'Pages',
      serviceAreas: 'Service Areas',
      canada: 'Canada',
      unitedStates: 'United States',
      europe: 'Europe',
      freeBlueprint: 'FREE Project Blueprint',
    },
    footer: {
      home: 'Home',
      product: 'Product',
      resources: 'Resources',
      industries: 'Industries',
      company: 'Company',
      serviceAreas: 'Service Areas',
      usMarkets: 'US Markets',
      europe: 'Europe',
      features: 'Features',
      faq: 'FAQ',
      integrations: 'Integrations',
      careers: 'Careers',
      reviews: 'Reviews',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      ctaTitle: 'FREE Project Blueprint',
      ctaDescription: 'Get a comprehensive project roadmap absolutely free.',
      ctaLink: 'Get Started',
      description:
        'Custom software development firm specializing in web applications, mobile app development, and AI integrations that transform businesses and drive digital success.',
      copyright: 'All rights reserved.',
    },
    common: {
      aboutUs: 'About Us',
      contact: 'Contact',
      pricing: 'Pricing',
      blog: 'Blog',
      caseStudies: 'Case Studies',
      careers: 'Careers',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      reviews: 'Reviews',
      page404: '404 Page',
    },
    languageNames: {
      en: 'English',
      fr: 'Francais',
      de: 'Deutsch',
      es: 'Espanol',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      caseStudies: 'Etudes de cas',
      pricing: 'Tarifs',
      blog: 'Blog',
      contact: 'Contact',
      resources: 'Ressources',
      pages: 'Pages',
      serviceAreas: 'Zones de service',
      canada: 'Canada',
      unitedStates: 'Etats-Unis',
      europe: 'Europe',
      freeBlueprint: 'Plan de projet GRATUIT',
    },
    footer: {
      home: 'Accueil',
      product: 'Produit',
      resources: 'Ressources',
      industries: 'Secteurs',
      company: 'Entreprise',
      serviceAreas: 'Zones de service',
      usMarkets: 'Marches americains',
      europe: 'Europe',
      features: 'Fonctionnalites',
      faq: 'FAQ',
      integrations: 'Integrations',
      careers: 'Carrieres',
      reviews: 'Avis',
      privacyPolicy: 'Politique de confidentialite',
      termsOfService: 'Conditions d\'utilisation',
      cookiePolicy: 'Politique relative aux cookies',
      ctaTitle: 'Plan de projet GRATUIT',
      ctaDescription: 'Obtenez gratuitement une feuille de route complete pour votre projet.',
      ctaLink: 'Commencer',
      description:
        'Agence de developpement logiciel sur mesure specialisee dans les applications web, mobiles et integrations IA.',
      copyright: 'Tous droits reserves.',
    },
    common: {
      aboutUs: 'A propos',
      contact: 'Contact',
      pricing: 'Tarifs',
      blog: 'Blog',
      caseStudies: 'Etudes de cas',
      careers: 'Carrieres',
      privacyPolicy: 'Politique de confidentialite',
      termsOfService: 'Conditions d\'utilisation',
      reviews: 'Avis',
      page404: 'Page 404',
    },
    languageNames: {
      en: 'English',
      fr: 'Francais',
      de: 'Deutsch',
      es: 'Espanol',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      caseStudies: 'Fallstudien',
      pricing: 'Preise',
      blog: 'Blog',
      contact: 'Kontakt',
      resources: 'Ressourcen',
      pages: 'Seiten',
      serviceAreas: 'Regionen',
      canada: 'Kanada',
      unitedStates: 'Vereinigte Staaten',
      europe: 'Europa',
      freeBlueprint: 'KOSTENLOSER Projektplan',
    },
    footer: {
      home: 'Startseite',
      product: 'Produkt',
      resources: 'Ressourcen',
      industries: 'Branchen',
      company: 'Unternehmen',
      serviceAreas: 'Regionen',
      usMarkets: 'US-Markte',
      europe: 'Europa',
      features: 'Funktionen',
      faq: 'FAQ',
      integrations: 'Integrationen',
      careers: 'Karriere',
      reviews: 'Bewertungen',
      privacyPolicy: 'Datenschutz',
      termsOfService: 'Nutzungsbedingungen',
      cookiePolicy: 'Cookie-Richtlinie',
      ctaTitle: 'KOSTENLOSER Projektplan',
      ctaDescription: 'Erhalten Sie kostenlos eine vollstandige Projekt-Roadmap.',
      ctaLink: 'Jetzt starten',
      description:
        'Individuelle Softwareentwicklung fur Webanwendungen, Mobile Apps und KI-Integrationen.',
      copyright: 'Alle Rechte vorbehalten.',
    },
    common: {
      aboutUs: 'Uber uns',
      contact: 'Kontakt',
      pricing: 'Preise',
      blog: 'Blog',
      caseStudies: 'Fallstudien',
      careers: 'Karriere',
      privacyPolicy: 'Datenschutz',
      termsOfService: 'Nutzungsbedingungen',
      reviews: 'Bewertungen',
      page404: '404-Seite',
    },
    languageNames: {
      en: 'English',
      fr: 'Francais',
      de: 'Deutsch',
      es: 'Espanol',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      caseStudies: 'Casos de estudio',
      pricing: 'Precios',
      blog: 'Blog',
      contact: 'Contacto',
      resources: 'Recursos',
      pages: 'Paginas',
      serviceAreas: 'Areas de servicio',
      canada: 'Canada',
      unitedStates: 'Estados Unidos',
      europe: 'Europa',
      freeBlueprint: 'Plan de proyecto GRATIS',
    },
    footer: {
      home: 'Inicio',
      product: 'Producto',
      resources: 'Recursos',
      industries: 'Industrias',
      company: 'Empresa',
      serviceAreas: 'Areas de servicio',
      usMarkets: 'Mercados de EE. UU.',
      europe: 'Europa',
      features: 'Funciones',
      faq: 'FAQ',
      integrations: 'Integraciones',
      careers: 'Carreras',
      reviews: 'Resenas',
      privacyPolicy: 'Politica de privacidad',
      termsOfService: 'Terminos del servicio',
      cookiePolicy: 'Politica de cookies',
      ctaTitle: 'Plan de proyecto GRATIS',
      ctaDescription: 'Obtenga una hoja de ruta completa del proyecto sin costo.',
      ctaLink: 'Comenzar',
      description:
        'Empresa de desarrollo de software a medida especializada en aplicaciones web, moviles e integraciones de IA.',
      copyright: 'Todos los derechos reservados.',
    },
    common: {
      aboutUs: 'Nosotros',
      contact: 'Contacto',
      pricing: 'Precios',
      blog: 'Blog',
      caseStudies: 'Casos de estudio',
      careers: 'Carreras',
      privacyPolicy: 'Politica de privacidad',
      termsOfService: 'Terminos del servicio',
      reviews: 'Resenas',
      page404: 'Pagina 404',
    },
    languageNames: {
      en: 'English',
      fr: 'Francais',
      de: 'Deutsch',
      es: 'Espanol',
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
