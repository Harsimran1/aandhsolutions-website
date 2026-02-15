import { middleware } from 'astro:i18n';

export const onRequest = middleware({
  prefixDefaultLocale: true,
  redirectToDefaultLocale: true,
  fallbackType: 'rewrite',
});

