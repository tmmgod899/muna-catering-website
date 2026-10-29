/**
 * نصوص الواجهة الثابتة (القوائم والأزرار والرسائل).
 * يُضاف قاموس مماثل لكل لغة جديدة.
 */
import type { Locale } from './locales';

const ar = {
  skipToContent: 'تخطَّ إلى المحتوى',
  menuOpen: 'فتح القائمة',
  menuClose: 'إغلاق القائمة',
  mainNav: 'القائمة الرئيسية',
  footerNav: 'روابط التذييل',
  breadcrumb: 'مسار التنقل',
  home: 'الرئيسية',
  requestQuote: 'اطلب عرض سعر',
  callUs: 'اتصل بنا',
  emailUs: 'راسلنا',
  openMap: 'افتح الموقع في خرائط Google',
  learnMore: 'اعرف المزيد',
  allRightsReserved: 'جميع الحقوق محفوظة',
  footer: {
    about: 'عن الشركة',
    pages: 'روابط سريعة',
    services: 'خدماتنا',
    contact: 'التواصل',
  },
  placeholder: 'صورة مؤقتة',
  hijriSuffix: 'هـ',
  gregorianSuffix: 'م',
  gallery: {
    all: 'الكل',
    filterLabel: 'تصفية الصور حسب التصنيف',
    open: 'عرض الصورة بالحجم الكامل',
    close: 'إغلاق',
    next: 'الصورة التالية',
    prev: 'الصورة السابقة',
    counter: 'صورة {current} من {total}',
  },
  notFound: {
    title: 'الصفحة غير موجودة',
    body: 'تعذّر العثور على الصفحة المطلوبة. ربما تغيّر عنوانها أو أُزيلت.',
    back: 'العودة إلى الرئيسية',
  },
};

export type UIStrings = typeof ar;

export const ui: Record<Locale, UIStrings> = { ar };

export function t(locale: Locale): UIStrings {
  return ui[locale];
}
