export const SUPPORTED_LOCALES = ['en', 'fr', 'de', 'es'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const OG_LOCALE_BY_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
  es: 'es_ES',
};

function trimTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalized = trimTrailingSlash(pathname);
  const segments = normalized.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && isLocale(firstSegment)) {
    return firstSegment;
  }

  return DEFAULT_LOCALE;
}

export function resolveLocale(currentLocale: string | undefined, pathname: string): Locale {
  const localeFromPath = getLocaleFromPathname(pathname);
  if (localeFromPath !== DEFAULT_LOCALE || pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    return localeFromPath;
  }

  if (currentLocale) {
    const normalized = currentLocale.toLowerCase();
    if (isLocale(normalized)) {
      return normalized;
    }

    const language = normalized.split('-')[0];
    if (isLocale(language)) {
      return language;
    }
  }

  return localeFromPath;
}

export function stripLocaleFromPathname(pathname: string): string {
  const normalized = trimTrailingSlash(pathname);
  const segments = normalized.split('/').filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    const withoutLocale = segments.slice(1).join('/');
    return withoutLocale ? `/${withoutLocale}` : '/';
  }

  return normalized || '/';
}

function splitPathAndHash(value: string): { path: string; hash: string } {
  const hashIndex = value.indexOf('#');

  if (hashIndex === -1) {
    return { path: value, hash: '' };
  }

  return {
    path: value.slice(0, hashIndex),
    hash: value.slice(hashIndex),
  };
}

function isInternalPath(value: string): boolean {
  return value.startsWith('/');
}

export function localizePath(path: string, locale: Locale): string {
  if (!path) {
    return `/${locale}`;
  }

  if (!isInternalPath(path)) {
    return path;
  }

  const { path: internalPath, hash } = splitPathAndHash(path);
  const normalizedPath = internalPath || '/';

  if (normalizedPath === '/') {
    return `/${locale}${hash}`;
  }

  const cleaned = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  return `/${locale}${cleaned}${hash}`;
}

export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const basePath = stripLocaleFromPathname(currentPathname);
  return localizePath(basePath, targetLocale);
}

export function getAbsoluteLocaleUrl(site: string, locale: Locale, currentPathname: string): string {
  const basePath = stripLocaleFromPathname(currentPathname);
  return new URL(localizePath(basePath, locale), site).toString();
}

export function getOgLocale(locale: Locale): string {
  return OG_LOCALE_BY_LOCALE[locale];
}
