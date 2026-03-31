export interface ClientLogo {
  name: string;
  logoPath: string;
  url: string;
  alt?: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    name: 'Aquanomix',
    logoPath: '/clients/aquanomix.png',
    url: 'https://aquanomix.com',
  },
  {
    name: 'Cloudsync',
    logoPath: '/clients/cloudsync.png',
    url: 'https://mycloudsync.app',
  },
  {
    name: 'Coursera',
    logoPath: '/clients/coursera.png',
    url: 'https://coursera.org',
  },
  {
    name: 'Data4Life',
    logoPath: '/clients/data4life.png',
    url: 'https://data4life.care',
  },
  {
    name: 'Levven',
    logoPath: '/clients/levven.png',
    url: 'https://levven.com',
  },
  {
    name: 'Propcan',
    logoPath: '/clients/propcan.png',
    url: 'https://propcan.com',
  },
  {
    name: 'Sat Daycare & OSC',
    logoPath: '/clients/satdaycareandosc.png',
    url: 'https://satdaycareandosc.ca',
  },
  {
    name: 'SigXA',
    logoPath: '/clients/sigxa.png',
    url: 'https://sigxa.com',
  },
  {
    name: 'SmartVet AI',
    logoPath: '/clients/smartvet.png',
    url: 'https://smartvetai.com',
  },
  {
    name: 'Toptal',
    logoPath: '/clients/toptal.png',
    url: 'https://toptal.com',
  },
  {
    name: 'WeTranslate',
    logoPath: '/clients/wetranslate.png',
    url: 'https://wetranslate.fr',
  },
];
