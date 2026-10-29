// @ts-check
import { defineConfig } from 'astro/config';

/**
 * إعدادات Astro.
 * - site: عنوان النطاق النهائي؛ يُستخدم في الروابط المرجعية (canonical) وخريطة الموقع وروابط المشاركة.
 *   يمكن تمريره عبر متغير البيئة SITE_URL عند البناء، أو تعديل القيمة الافتراضية أدناه بعد حجز النطاق.
 * - base: المسار الفرعي للموقع، ويُمرَّر عبر متغير البيئة BASE_PATH (مثل /muna-catering-website عند النشر
 *   على GitHub Pages كموقع مشروع). يحدده سير عمل GitHub Actions تلقائيًا؛ ويُترك فارغًا للتشغيل المحلي أو النطاق المستقل.
 * - i18n: العربية هي اللغة الافتراضية دون بادئة في الرابط؛ تُضاف الإنجليزية لاحقًا إلى locales
 *   وتُنشأ صفحاتها تحت المسار /en/ دون تعديل بنية الموقع.
 */
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.example.com',
  base: process.env.BASE_PATH || undefined,
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
    routing: { prefixDefaultLocale: false },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
