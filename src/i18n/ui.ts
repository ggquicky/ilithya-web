import { es } from './translations/es';
import { en } from './translations/en';
import { it } from './translations/it';
import { pt } from './translations/pt';

export type Language = 'es' | 'en' | 'it' | 'pt';

export const languages: Record<Language, { label: string; flag: string }> = {
  es: { label: 'Español', flag: '🇪🇸' },
  en: { label: 'English', flag: '🇺🇸' },
  it: { label: 'Italiano', flag: '🇮🇹' },
  pt: { label: 'Português', flag: '🇧🇷' }
};

export const defaultLang: Language = 'es';

export const translations = {
  es,
  en,
  it,
  pt
} as const;

export function getTranslations(lang: Language = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

/**
 * Returns the localized URL path corresponding to the given pathname and target language.
 * Examples:
 * - getLocalizedPath('/', 'en') => '/en'
 * - getLocalizedPath('/', 'it') => '/it'
 * - getLocalizedPath('/it', 'es') => '/'
 * - getLocalizedPath('/casos-de-uso', 'pt') => '/pt/casos-de-uso'
 * - getLocalizedPath('/en/casos-de-uso', 'it') => '/it/casos-de-uso'
 * - getLocalizedPath('/it/casos-de-uso', 'es') => '/casos-de-uso'
 */
export function getLocalizedPath(pathname: string, targetLang: Language): string {
  // Normalize pathname: ensure leading slash, remove trailing slash except root
  let cleanPath = pathname.trim();
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Strip any existing locale prefix: /en, /it, /pt
  const segments = cleanPath.split('/').filter(Boolean);
  const knownNonDefaultLocales: string[] = ['en', 'it', 'pt'];

  if (segments.length > 0 && knownNonDefaultLocales.includes(segments[0])) {
    segments.shift(); // remove the locale prefix
  }

  const basePath = '/' + segments.join('/');

  if (targetLang === 'es') {
    return basePath === '/' ? '/' : basePath;
  } else {
    return basePath === '/' ? `/${targetLang}` : `/${targetLang}${basePath}`;
  }
}
