/**
 * خريطة الصور المركزية للموقع.
 *
 * طريقة الاستبدال:
 * 1) ضع الصورة الجديدة في المجلد المناسب داخل src/assets/images/ (hero أو services أو projects أو gallery).
 * 2) عدّل سطر الاستيراد (import) المقابل أدناه ليشير إلى الملف الجديد، وحدّث النص البديل alt.
 * 3) لتحويل عنصر نائب إلى صورة فعلية: استورد الصورة واستبدل القيمة null بها.
 *
 * يتولى Astro ضغط الصور وتحويلها إلى WebP وتوليد المقاسات المناسبة تلقائيًا عند البناء.
 * الصور الحالية مستخرجة من صفحتي «معرض المطبخ» في الملف التعريفي، ودقتها محدودة (نحو 670 بكسل عرضًا)،
 * لذا يُستحسن استبدالها بالنسخ الأصلية عالية الدقة عند توفرها.
 */
import type { ImageMetadata } from 'astro';

import logo from '../assets/images/brand/logo.png';
import logoMark from '../assets/images/brand/logo-mark.png';

import facilityExterior from '../assets/images/gallery/facility-exterior.jpg';
import facilityVan from '../assets/images/gallery/facility-van.jpg';
import platingLine from '../assets/images/gallery/plating-line.jpg';
import kitchenEquipment from '../assets/images/gallery/kitchen-equipment.jpg';
import kitchenCookingArea from '../assets/images/gallery/kitchen-cooking-area.jpg';
import mealPacking from '../assets/images/gallery/meal-packing.jpg';
import teamAprons from '../assets/images/gallery/team-aprons.jpg';
import kitchenPrepArea from '../assets/images/gallery/kitchen-prep-area.jpg';
import mealPackingBoxes from '../assets/images/gallery/meal-packing-boxes.jpg';
import teamGroup from '../assets/images/gallery/team-group.jpg';
import kitchenHall from '../assets/images/gallery/kitchen-hall.jpg';
// صور مضافة من مواد الشركة الجديدة (بدقتها الأصلية؛ يولّد Astro المقاسات والصيغ المناسبة)
import ceoSigningSession from '../assets/images/gallery/ceo-signing-session.jpg';
import ceoMissionVisit from '../assets/images/gallery/ceo-mission-visit-kitchen.jpg';
import staffServingStation from '../assets/images/gallery/staff-serving-station.jpg';
import staffHandingMeal from '../assets/images/gallery/staff-handing-meal.jpg';
import staffMealDistribution from '../assets/images/gallery/staff-meal-distribution.jpg';
import staffDistributionHall1 from '../assets/images/gallery/staff-distribution-hall-1.jpg';
import staffDistributionHall2 from '../assets/images/gallery/staff-distribution-hall-2.jpg';
import kitchenTourPoster from '../assets/images/gallery/kitchen-tour-poster.jpg';

export interface SiteImage {
  /** الصورة الفعلية، أو null لعرض عنصر نائب واضح */
  src: ImageMetadata | null;
  /** النص البديل (يصف محتوى الصورة الفعلي) */
  alt: string;
  /** وصف الصورة المطلوبة؛ يظهر على العنصر النائب لتسهيل الاستبدال */
  placeholder?: string;
}

export const brandImages = {
  logo: { src: logo, alt: 'شعار مطابخ منى للإعاشة والتموين' },
  logoMark: { src: logoMark, alt: 'مطابخ منى' },
} satisfies Record<string, SiteImage>;

export const images = {
  hero: {
    main: { src: kitchenHall, alt: 'صالة الطهي في مطبخ الشركة بتجهيزاتها المصنوعة من الفولاذ المقاوم للصدأ' },
    secondary: { src: teamAprons, alt: 'أفراد من فريق العمل بزي الشركة وأدوات الوقاية' },
  },
  about: {
    main: { src: kitchenCookingArea, alt: 'منطقة الطهي في مطبخ الشركة' },
    team: { src: teamGroup, alt: 'فريق العمل في موقع الخدمة' },
    facility: { src: facilityExterior, alt: 'واجهة مبنى مطابخ منى' },
  },
  services: {
    // ملاحظة: الصور التالية عامة من مطبخ الشركة؛ يُستحسن استبدالها بصور من مواقع الخدمة نفسها.
    makkah: { src: platingLine, alt: 'فريق العمل أثناء تجهيز الوجبات وتعبئتها' },
    mashaer: { src: teamAprons, alt: 'أفراد من فريق العمل بزي الشركة', placeholder: 'صورة لخدمة الإعاشة في المشاعر المقدسة' },
    institutions: { src: mealPackingBoxes, alt: 'وجبات معبأة وجاهزة للتوزيع' },
    // بطاقات «أنواع الوجبات» في صفحة الخدمات تُعرض دون صور بطلب من الشركة.
    logistics: { src: facilityVan, alt: 'مركبة الشركة أمام مبنى المطبخ' },
  },
  quality: {
    main: { src: mealPacking, alt: 'تعبئة الوجبات مع ارتداء القفازات وأغطية الرأس والكمامات' },
    hygiene: { src: kitchenPrepArea, alt: 'منطقة التحضير بعد التنظيف' },
  },
} satisfies Record<string, Record<string, SiteImage>>;

export type GalleryCategory = 'kitchen' | 'packing' | 'team' | 'facility' | 'meals' | 'meetings';

export interface GalleryItem extends SiteImage {
  category: GalleryCategory;
  /** مسار مقطع فيديو داخل المجلد public (مثل /media/kitchen-tour.mp4)؛ تُستخدم الصورة حينئذٍ غلافًا له */
  video?: string;
}

/**
 * عناصر معرض الصور. لإضافة صورة جديدة: استوردها أعلاه ثم أضف عنصرًا بالتصنيف المناسب.
 * العناصر ذات القيمة null عناصر نائبة تُستبدل بصور الشركة لاحقًا.
 * ترتيب العناصر الخمسة الأولى يحدد الصور المعروضة في معرض الصفحة الرئيسية.
 */
export const gallery: GalleryItem[] = [
  { src: kitchenHall, alt: 'صالة الطهي الرئيسية', category: 'kitchen' },
  { src: platingLine, alt: 'خط تجهيز الوجبات', category: 'packing' },
  { src: teamAprons, alt: 'أفراد من فريق العمل بزي الشركة', category: 'team' },
  { src: kitchenCookingArea, alt: 'منطقة الطهي وأوعية الطبخ الكبيرة', category: 'kitchen' },
  { src: mealPacking, alt: 'تعبئة الوجبات في عبوات فردية', category: 'packing' },
  { src: facilityVan, alt: 'مركبة الشركة أمام مبنى المطبخ', category: 'facility' },
  { src: kitchenEquipment, alt: 'عربات الصواني وخزائن الطهي', category: 'kitchen' },
  { src: mealPackingBoxes, alt: 'وجبات معبأة وجاهزة للتوزيع', category: 'packing' },
  { src: teamGroup, alt: 'فريق العمل في موقع الخدمة', category: 'team' },
  { src: kitchenPrepArea, alt: 'منطقة التحضير وأحواض الغسيل', category: 'kitchen' },
  { src: facilityExterior, alt: 'واجهة مبنى مطابخ منى', category: 'facility' },
  { src: null, alt: '', placeholder: 'صورة وجبة رئيسية جاهزة للتقديم', category: 'meals' },
  { src: null, alt: '', placeholder: 'صورة الوجبات بعد التغليف النهائي', category: 'meals' },
  // حلّت الصورة التالية محل العنصر النائب «صورة التوزيع في مواقع الحجاج»
  { src: staffMealDistribution, alt: 'فريق العمل أثناء توزيع الوجبات على الحجاج', category: 'team' },
  { src: kitchenTourPoster, alt: 'جولة مصورة داخل مطبخ منى', category: 'kitchen', video: '/media/kitchen-tour.mp4' },
  { src: staffServingStation, alt: 'أحد أفراد فريق العمل يقدّم الوجبة لحاج من محطة التقديم', category: 'team' },
  { src: staffHandingMeal, alt: 'أحد أفراد فريق العمل يسلّم وجبة لأحد الحجاج', category: 'team' },
  { src: staffDistributionHall1, alt: 'أحد أفراد فريق العمل أثناء توزيع الوجبات على المستفيدين', category: 'team' },
  { src: staffDistributionHall2, alt: 'فريق العمل أثناء توزيع الوجبات على المستفيدين', category: 'team' },
  { src: ceoMissionVisit, alt: 'الرئيس التنفيذي للشركة مع وفد من البعثة في مطبخ الشركة', category: 'meetings' },
  { src: ceoSigningSession, alt: 'الرئيس التنفيذي للشركة خلال جلسة توقيع', category: 'meetings' },
];
