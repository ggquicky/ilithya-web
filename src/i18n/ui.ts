import { es } from './translations/es';
import { en } from './translations/en';

export type Language = 'es' | 'en';

export const languages: Record<Language, { label: string; flag: string }> = {
  es: { label: 'Español', flag: '🇪🇸' },
  en: { label: 'English', flag: '🇺🇸' }
};

export const defaultLang: Language = 'es';

export const translations = {
  es,
  en
} as const;

export function getTranslations(lang: Language = defaultLang) {
  return translations[lang] || translations[defaultLang];
}

/**
 * Returns the localized URL path corresponding to the given pathname and target language.
 * Examples:
 * - getLocalizedPath('/', 'en') => '/en'
 * - getLocalizedPath('/en', 'es') => '/'
 * - getLocalizedPath('/casos-de-uso', 'en') => '/en/casos-de-uso'
 * - getLocalizedPath('/en/casos-de-uso', 'es') => '/casos-de-uso'
 */
export function getLocalizedPath(pathname: string, targetLang: Language): string {
  // Normalize pathname: ensure leading slash, remove trailing slash except root
  let cleanPath = pathname.trim();
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const isEnglish = cleanPath === '/en' || cleanPath.startsWith('/en/');

  if (targetLang === 'en') {
    if (isEnglish) return cleanPath;
    if (cleanPath === '/') return '/en';
    return `/en${cleanPath}`;
  } else {
    // targetLang is 'es'
    if (!isEnglish) return cleanPath;
    if (cleanPath === '/en') return '/';
    return cleanPath.replace(/^\/en/, '') || '/';
  }
}
