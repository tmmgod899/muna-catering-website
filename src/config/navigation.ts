/**
 * عناصر القائمة الرئيسية. تُعرَّف المسارات هنا مرة واحدة، والعناوين حسب اللغة.
 */
import type { Locale } from '../i18n/locales';

export type PageKey = 'home' | 'about' | 'services' | 'experience' | 'quality' | 'gallery' | 'contact';

export const routes: Record<PageKey, string> = {
  home: '/',
  about: '/about/',
  services: '/services/',
  experience: '/experience/',
  quality: '/quality/',
  gallery: '/gallery/',
  contact: '/contact/',
};

const labels: Record<Locale, Record<PageKey, string>> = {
  ar: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    experience: 'خبراتنا',
    quality: 'الجودة والسلامة',
    gallery: 'معرض الصور',
    contact: 'تواصل معنا',
  },
};

export const mainNavOrder: PageKey[] = ['home', 'about', 'services', 'experience', 'quality', 'gallery', 'contact'];

export function navLabel(key: PageKey, locale: Locale): string {
  return labels[locale][key];
}
