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
  let localeFromCurrent: Locale | null = null;
  if (currentLocale) {
    const normalized = currentLocale.toLowerCase();
    if (isLocale(normalized)) {
      localeFromCurrent = normalized;
    } else {
      const language = normalized.split('-')[0];
      if (isLocale(language)) {
        localeFromCurrent = language;
      }
    }
  }

  // Prefer non-default locale from either source.
  if (localeFromCurrent && localeFromCurrent !== DEFAULT_LOCALE) {
    return localeFromCurrent;
  }
  if (localeFromPath !== DEFAULT_LOCALE) {
    return localeFromPath;
  }

  // Explicit /en URLs should stay English.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    return DEFAULT_LOCALE;
  }

  // Fall back to current locale if available, otherwise path-derived default.
  if (localeFromCurrent) {
    return localeFromCurrent;
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
    return `/${locale}/`;
  }

  if (!isInternalPath(path)) {
    return path;
  }

  const { path: internalPath, hash } = splitPathAndHash(path);
  const normalizedPath = internalPath || '/';

  if (normalizedPath === '/') {
    if (hash) {
      return `/${locale}/${hash}`;
    }
    return `/${locale}/`;
  }

  const cleaned = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  // Ensure trailing slash before hash (if any)
  const pathWithSlash = cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
  return `/${locale}${pathWithSlash}${hash}`;
}

export function switchLocalePath(currentPathname: string, targetLocale: Locale): string {
  const basePath = stripLocaleFromPathname(currentPathname);
  return localizePath(basePath, targetLocale);
}

export function getAbsoluteLocaleUrl(site: string, locale: Locale, currentPathname: string): string {
  const basePath = stripLocaleFromPathname(currentPathname);
  const localizedPath = localizePath(basePath, locale);
  const url = new URL(localizedPath, site);
  // Ensure trailing slash for consistency with Astro's trailingSlash: 'always' setting
  if (!url.pathname.endsWith('/')) {
    url.pathname += '/';
  }
  return url.toString();
}

export function getOgLocale(locale: Locale): string {
  return OG_LOCALE_BY_LOCALE[locale];
}
