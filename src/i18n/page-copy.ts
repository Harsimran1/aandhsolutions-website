import type { Locale } from '../lib/i18n';
import { getLocaleCopy } from './locale-copy';
import en from './locales/en.json';
type PageCopy = (typeof en)['pages'];

export function getPageCopy(locale: Locale): PageCopy {
  return getLocaleCopy(locale).pages ?? getLocaleCopy('en').pages;
}
