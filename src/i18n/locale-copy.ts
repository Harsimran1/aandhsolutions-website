import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import type { Locale } from '../lib/i18n';

const copy = { en, de, fr, es } as const;

export function getLocaleCopy(locale: Locale) {
  return copy[locale] ?? copy.en;
}
