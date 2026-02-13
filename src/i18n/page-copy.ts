import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import type { Locale } from '../lib/i18n';

const copy = { en, de, fr, es } as const;

type PageCopy = (typeof en)['pages'];

export function getPageCopy(locale: Locale): PageCopy {
  return copy[locale]?.pages ?? copy.en.pages;
}
