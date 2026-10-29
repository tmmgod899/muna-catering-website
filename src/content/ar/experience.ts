/**
 * سجل الخبرات السابقة.
 * المصدر: جدولا «الخبرات السابقة بمكة المكرمة» و«الخبرات السابقة بالمشاعر المقدسة» في الملف التعريفي (ص 1–3).
 * تُحسب جميع الإحصاءات المعروضة في الموقع آليًا من هذه البيانات (انظر src/lib/experience.ts)،
 * لذا يكفي تعديل هذا الملف لتحديث الأرقام في جميع الصفحات.
 */
import type { ExperienceRecord, Appreciation } from '../../lib/experience';

export const experienceRecords: ExperienceRecord[] = [
  // ——— مكة المكرمة ———
  { location: 'makkah', client: 'البعثة الإندونيسية', clientType: 'mission', segment: 'إندونيسيا', count: 7000, hijri: 1443, gregorian: 2022 },
  { location: 'makkah', client: 'البعثة الإندونيسية', clientType: 'mission', segment: 'إندونيسيا', count: 4000, hijri: 1444, gregorian: 2023 },
  { location: 'makkah', client: 'البعثة الإندونيسية', clientType: 'mission', segment: 'إندونيسيا', count: 4500, hijri: 1445, gregorian: 2024 },
  { location: 'makkah', client: 'البعثة النيجيرية', clientType: 'mission', segment: 'نيجيريا', count: 3102, hijri: 1445, gregorian: 2024 },
  { location: 'makkah', client: 'البعثة الإندونيسية', clientType: 'mission', segment: 'إندونيسيا', count: 4000, hijri: 1446, gregorian: 2025 },
  { location: 'makkah', client: 'البعثة الإندونيسية', clientType: 'mission', segment: 'إندونيسيا', count: 4500, hijri: 1447, gregorian: 2026 },
  { location: 'makkah', client: 'البعثة الباكستانية', clientType: 'mission', segment: 'باكستان', count: 7588, hijri: 1447, gregorian: 2026 },
  { location: 'makkah', client: 'البعثة النيجيرية', clientType: 'mission', segment: 'نيجيريا', count: 94, hijri: 1447, gregorian: 2026 },
  { location: 'makkah', client: 'شركة مشارق المتميزة لخدمات الحجاج', note: 'عقد توريد وجبات القدوم', clientType: 'company', segment: 'إندونيسيا', count: 3996, hijri: 1447, gregorian: 2026 },
  // وحدة العدد في هذا السجل غير محددة في المصدر (عمود «عدد الحجاج»)؛ لذلك يُعرض الرقم دون وحدة.
  { location: 'makkah', client: 'الهيئة العامة للعناية بشؤون الحرمين', note: 'مشروع رمضان', clientType: 'government', segment: 'رمضان', count: 20000, countUnit: 'unspecified', hijri: 1447, gregorian: 2026, season: 'ramadan' },

  // ——— المشاعر المقدسة ———
  { location: 'mashaer', client: 'شركة مشارق الذهبية لخدمات الحجاج', note: 'شركة مطوفي حجاج دول جنوب شرق آسيا', clientType: 'company', segment: 'إندونيسيا', count: 6000, hijri: 1444, gregorian: 2023 },
  { location: 'mashaer', client: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 527, hijri: 1444, gregorian: 2023 },
  { location: 'mashaer', client: 'شركة حملة الرسالة لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 673, hijri: 1444, gregorian: 2023 },
  { location: 'mashaer', client: 'شركة رحلات ومنافع للسياحة', clientType: 'company', segment: 'باكستان', count: 3500, hijri: 1445, gregorian: 2024 },
  { location: 'mashaer', client: 'شركة مشارق المتميزة لخدمات الحجاج', note: 'ركين', clientType: 'company', segment: 'إندونيسيا', count: 3395, hijri: 1445, gregorian: 2024 },
  { location: 'mashaer', client: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 800, hijri: 1445, gregorian: 2024 },
  { location: 'mashaer', client: 'شركة حملة الرسالة لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 600, hijri: 1445, gregorian: 2024 },
  { location: 'mashaer', client: 'شركة مشارق الذهبية لخدمات الحجاج', note: 'سنا', clientType: 'company', segment: 'إندونيسيا', count: 3919, hijri: 1446, gregorian: 2025 },
  { location: 'mashaer', client: 'شركة الراجحي للخدمات التجارية المساندة', clientType: 'company', segment: 'باكستان', count: 2885, hijri: 1446, gregorian: 2025 },
  { location: 'mashaer', client: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 500, hijri: 1446, gregorian: 2025 },
  { location: 'mashaer', client: 'شركة حملة الرسالة لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 487, hijri: 1446, gregorian: 2025 },
  { location: 'mashaer', client: 'شركة الراجحي للخدمات التجارية المساندة', clientType: 'company', segment: 'باكستان', count: 3148, hijri: 1447, gregorian: 2026 },
  { location: 'mashaer', client: 'شركة حملة الرسالة لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 1262, hijri: 1447, gregorian: 2026 },
  { location: 'mashaer', client: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل', clientType: 'domestic', segment: 'حجاج الداخل', count: 1213, hijri: 1447, gregorian: 2026 },
  { location: 'mashaer', client: 'شركة مشارق الذهبية لخدمات الحجاج', note: 'ركين', clientType: 'company', segment: 'إندونيسيا', count: 3996, hijri: 1447, gregorian: 2026 },
  // وحدة العدد غير محددة في المصدر؛ عمود «الجنسية» يذكر «معيصم 2 ومعيصم 3».
  { location: 'mashaer', client: 'مشروع المملكة العربية السعودية للإفادة من الهدي والأضاحي', note: 'الهيئة الملكية — مجمعا المعيصم 2 و3', clientType: 'government', segment: 'المعيصم 2 و3', count: 800, countUnit: 'unspecified', hijri: 1447, gregorian: 2026 },
];

/**
 * شهادات الشكر والتقدير الواردة في الملف التعريفي، والمتسقة مع سجل الخبرات.
 * استُبعدت عمدًا خطابات الشكر المؤرخة في أغسطس 2019 لتعارض تاريخها مع المواسم المذكورة فيها (انظر README).
 */
export const appreciations: Appreciation[] = [
  { issuer: 'مكتب شؤون حجاج جمهورية إندونيسيا بمكة المكرمة', seasons: [1444, 1445, 1446] },
  { issuer: 'شركة مشارق المتميزة (ركين)', seasons: [1445] },
  { issuer: 'شركة رحلات ومنافع للسياحة', seasons: [1445] },
  // توجد نسختان من شهادتي حجاج الداخل بموسمين مختلفين (1443 و1444)؛ يُعرض الموسم المتسق مع سجل الخبرات فقط.
  { issuer: 'شركة حملة الرسالة لخدمات حجاج الداخل', seasons: [1444] },
  { issuer: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل', seasons: [1444] },
];

export const experiencePage = {
  meta: {
    title: 'خبراتنا | مطابخ منى للإعاشة والتموين',
    description:
      'سجل الخبرات الموثقة لشركة منى لخدمات الإعاشة في إعاشة الحجاج بمكة المكرمة والمشاعر المقدسة خلال مواسم الحج من 1443هـ إلى 1447هـ.',
  },
  hero: {
    title: 'خبراتنا',
    lead: 'سجل المشاريع الموثقة في الملف التعريفي للشركة، مرتبًا حسب موسم الحج وموقع الخدمة.',
  },
  ledgerTitle: 'المشاريع في كل موسم',
  explorer: {
    title: 'تفاصيل المشاريع',
    intro: 'الأعداد الواردة أدناه كما وردت في سجل خبرات الشركة لكل مشروع.',
    filterLocation: 'موقع الخدمة',
    filterSeason: 'الموسم',
    all: 'الكل',
    allSeasons: 'جميع المواسم',
    columns: { client: 'الجهة', segment: 'الفئة', count: 'العدد', location: 'الموقع', season: 'الموسم' },
    countUnitPilgrims: 'حاج',
    hiddenClient: 'جهة متعاقدة',
    empty: 'لا توجد مشاريع مطابقة لاختيارك. غيّر موقع الخدمة أو الموسم لعرض نتائج أخرى.',
    resultCount: 'عدد المشاريع المعروضة: {n}',
  },
  appreciation: {
    title: 'شهادات الشكر والتقدير',
    intro: 'تلقّت الشركة شهادات شكر وتقدير من جهات خدمت حجاجها، منها:',
    seasonsLabel: 'المواسم',
  },
};
