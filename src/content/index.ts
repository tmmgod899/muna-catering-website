/**
 * نقطة الوصول الموحدة إلى محتوى الموقع حسب اللغة.
 * عند إضافة الإنجليزية: أنشئ src/content/en/ بالبنية نفسها وأضفها إلى الكائن content.
 */
import type { Locale } from '../i18n/locales';
import * as ar from './ar';

const content = { ar } satisfies Record<Locale, typeof ar>;

export function getContent(locale: Locale) {
  return content[locale];
}
