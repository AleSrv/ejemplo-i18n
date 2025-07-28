/**
 * src\i18n\url.ts
 * Reemplaza el idioma en la URL manteniendo la ruta
 */
export function switchLocaleUrl(currentUrl: string, currentLang: string, newLang: string) {
  // Ej: /es/about → /en/about
  return currentUrl.replace(`/${currentLang}`, `/${newLang}`);
}
