/**
 * محتوى صفحة معرض الصور. عناصر المعرض نفسها معرّفة في src/config/images.ts.
 */
import type { GalleryCategory } from '../../config/images';

export const galleryPage = {
  meta: {
    title: 'معرض الصور | مطابخ منى للإعاشة والتموين',
    description: 'صور من مطبخ شركة منى لخدمات الإعاشة في مكة المكرمة: صالات الطهي، وتجهيز الوجبات وتغليفها، وفريق العمل.',
  },
  hero: {
    title: 'معرض الصور',
    lead: 'لقطات من مطبخ الشركة وفريق العمل أثناء تجهيز الوجبات وتغليفها.',
  },
  categories: {
    kitchen: 'المطبخ',
    packing: 'التجهيز والتغليف',
    team: 'فريق العمل',
    facility: 'المنشأة والنقل',
    meals: 'الوجبات',
  } satisfies Record<GalleryCategory, string>,
};
