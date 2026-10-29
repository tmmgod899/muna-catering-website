import { withBase } from '../lib/paths';

/**
 * تعريف اللغات المدعومة.
 * لإضافة الإنجليزية لاحقًا:
 * 1) أضف 'en' إلى locales هنا وفي astro.config.mjs.
 * 2) أنشئ src/content/en/ بنفس بنية src/content/ar/، وأضف نصوص الواجهة في src/i18n/ui.ts.
 * 3) أنشئ صفحات src/pages/en/ تستدعي نفس مكونات العرض (src/views) مع locale="en".
 */
export const locales = {
  ar: { code: 'ar', htmlLang: 'ar-SA', dir: 'rtl', label: 'العربية', ogLocale: 'ar_SA', pathPrefix: '' },
} as const;

export type Locale = keyof typeof locales;
export const defaultLocale: Locale = 'ar';

/** يبني رابطًا داخليًا يراعي المسار الأساسي للموقع وبادئة اللغة */
export function localizedPath(path: string, locale: Locale = defaultLocale): string {
  const prefix = locales[locale].pathPrefix;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(`${prefix}${clean}`);
}
