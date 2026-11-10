/**
 * صور الشهادات والوثائق المعروضة في الموقع.
 *
 * المصدر: صفحات «الجودة وسلامة الغذاء» (ص 07) و«شهادات الشكر والتقدير» (ص 12) في الملف التعريفي المحدَّث.
 * النصوص أدناه منقولة مما هو مطبوع على كل وثيقة دون إضافة؛ ولا تُذكر أرقام الشهادات في النص (تظهر في الصورة فقط).
 *
 * لإضافة شهادة: ضع الصورة في src/assets/images/certificates/ ثم أضف عنصرًا بالبنية نفسها.
 * لإخفاء شهادة مؤقتًا دون حذفها: اجعل published: false.
 *
 * ملاحظة على الدقة: صور الشهادات مأخوذة من الملف التعريفي بدقة محدودة (نحو 480 بكسل عرضًا لأغلبها).
 * يُستحسن استبدالها بالنسخ الممسوحة الأصلية بالاسم نفسه عند توفرها لتحسين وضوح القراءة.
 */
import type { ImageMetadata } from 'astro';

import haccp from '../assets/images/certificates/quality/haccp-miyar-arabia.jpg';
import iso22000 from '../assets/images/certificates/quality/iso-22000-qfs.jpg';
import facilityAssessment from '../assets/images/certificates/quality/facility-assessment-bayt-almejhar.jpg';

import pakistanShield1447 from '../assets/images/certificates/appreciation/pakistan-opap-shield-1447.jpg';
import indonesiaMinistry1447 from '../assets/images/certificates/appreciation/indonesia-ministry-sector2-1447.jpg';
import rakeen1447 from '../assets/images/certificates/appreciation/rakeen-1447.jpg';
import alrisalahAchievement1447 from '../assets/images/certificates/appreciation/alrisalah-achievement-1447.jpg';
import almulhimAchievement1447 from '../assets/images/certificates/appreciation/almulhim-achievement-1447.jpg';
import indonesiaPpih1446 from '../assets/images/certificates/appreciation/indonesia-ppih-1446.jpg';
import indonesiaPpih1445 from '../assets/images/certificates/appreciation/indonesia-ppih-1445.jpg';
import rakeen1445 from '../assets/images/certificates/appreciation/rakeen-1445.jpg';
import rehlatWaManafea1445 from '../assets/images/certificates/appreciation/rehlat-wa-manafea-1445.jpg';
import indonesiaPpih1444 from '../assets/images/certificates/appreciation/indonesia-ppih-1444.jpg';
import alrisalah1444 from '../assets/images/certificates/appreciation/alrisalah-1444.jpg';
import almulhim1443 from '../assets/images/certificates/appreciation/almulhim-1443.jpg';
import alrisalah1443 from '../assets/images/certificates/appreciation/alrisalah-1443.jpg';
import sunriseLetter from '../assets/images/certificates/appreciation/sunrise-international-letter.jpg';
import fozanLetter from '../assets/images/certificates/appreciation/shirkah-alfozan-letter.jpg';

export interface CertificateItem {
  src: ImageMetadata;
  /** عنوان الوثيقة أو نوعها */
  title: string;
  /** الجهة المُصدِرة كما وردت في الوثيقة */
  issuer: string;
  /** الموسم أو التاريخ كما ورد في الوثيقة */
  detail?: string;
  /** النص البديل للصورة */
  alt: string;
  /** false لإخفاء الوثيقة من الموقع مع الإبقاء عليها في المشروع */
  published?: boolean;
}

/** وثائق الجودة وسلامة الغذاء (صفحة «الجودة والسلامة») */
export const qualityDocuments: CertificateItem[] = [
  {
    src: haccp,
    title: 'شهادة HACCP',
    issuer: 'شركة معيار العربية',
    detail: 'نظام تحليل المخاطر ونقاط التحكم الحرجة في مجال تقديم خدمات الإعاشة — صادرة في ديسمبر 2025',
    alt: 'شهادة منح HACCP من شركة معيار العربية لشركة منى لخدمات الإعاشة',
  },
  {
    src: iso22000,
    title: 'شهادة ISO 22000:2018',
    issuer: 'QFS Management Systems LLP',
    detail: 'نظام إدارة سلامة الغذاء لتقديم خدمات الإعاشة — من نوفمبر 2025 حتى نوفمبر 2028',
    alt: 'شهادة تسجيل نظام إدارة سلامة الغذاء ISO 22000:2018 من QFS Management Systems LLP',
  },
  {
    src: facilityAssessment,
    title: 'تقرير تقييم منشأة',
    issuer: 'بيت المجهر للمختبرات والاستشارات الغذائية',
    detail: 'اجتازت المنشأة متطلبات التقييم بنسبة 95% — ديسمبر 2025',
    alt: 'تقرير تقييم منشأة مطابخ منى من شركة بيت المجهر للمختبرات والاستشارات الغذائية',
  },
];

/** شهادات الشكر والتقدير (صفحة «خبراتنا»)، مرتبة من الأحدث إلى الأقدم */
export const appreciationCertificates: CertificateItem[] = [
  {
    src: pakistanShield1447,
    title: 'درع تقدير',
    issuer: 'مكتب شؤون الحجاج الباكستاني (OPAP)',
    detail: 'حج 1447هـ / 2026م',
    alt: 'درع تقدير من مكتب شؤون الحجاج الباكستاني لمطابخ منى عن خدمات حج 1447هـ',
  },
  {
    src: indonesiaMinistry1447,
    title: 'شهادة تقدير',
    issuer: 'وزارة الحج والعمرة بجمهورية إندونيسيا — القطاع 2 بمكة المكرمة',
    detail: 'موسم 1447هـ / 2026م',
    alt: 'شهادة تقدير من وزارة الحج والعمرة الإندونيسية لموسم 1447هـ',
  },
  {
    src: rakeen1447,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة مشارق المتميزة لخدمات الحجاج (ركين)',
    detail: 'موسم حج 1447هـ',
    alt: 'شهادة شكر وتقدير من شركة مشارق المتميزة (ركين) لموسم حج 1447هـ',
  },
  {
    src: alrisalahAchievement1447,
    title: 'شهادة تقدير وإنجاز',
    issuer: 'شركة حملة الرسالة لخدمات حجاج الداخل',
    detail: 'موسم حج 1447هـ',
    alt: 'شهادة تقدير وإنجاز من شركة حملة الرسالة لموسم حج 1447هـ',
  },
  {
    src: almulhimAchievement1447,
    title: 'شهادة تقدير وإنجاز',
    issuer: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل',
    detail: 'موسم حج 1447هـ',
    alt: 'شهادة تقدير وإنجاز من شركة صالح الملحم وشركاه لموسم حج 1447هـ',
  },
  {
    src: indonesiaPpih1446,
    title: 'شهادة شكر وتقدير',
    issuer: 'مكتب شؤون حجاج جمهورية إندونيسيا بمكة المكرمة',
    detail: '1446هـ / 2025م',
    alt: 'شهادة شكر وتقدير من مكتب شؤون حجاج إندونيسيا بمكة المكرمة لعام 1446هـ',
  },
  {
    src: indonesiaPpih1445,
    title: 'شهادة شكر وتقدير',
    issuer: 'مكتب شؤون حجاج جمهورية إندونيسيا بمكة المكرمة',
    detail: '1445هـ / 2024م',
    alt: 'شهادة شكر وتقدير من مكتب شؤون حجاج إندونيسيا بمكة المكرمة لعام 1445هـ',
  },
  {
    src: rakeen1445,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة مشارق المتميزة لخدمات الحجاج (ركين)',
    detail: 'موسم حج 1445هـ',
    alt: 'شهادة شكر وتقدير من شركة مشارق المتميزة (ركين) لموسم حج 1445هـ',
  },
  {
    src: rehlatWaManafea1445,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة رحلات ومنافع للسياحة',
    detail: 'موسم حج 1445هـ',
    alt: 'شهادة شكر وتقدير من شركة رحلات ومنافع للسياحة لموسم حج 1445هـ',
  },
  {
    src: indonesiaPpih1444,
    title: 'شهادة شكر وتقدير',
    issuer: 'مكتب شؤون حجاج جمهورية إندونيسيا بمكة المكرمة',
    detail: '1444هـ / 2023م',
    alt: 'شهادة شكر وتقدير من مكتب شؤون حجاج إندونيسيا بمكة المكرمة لعام 1444هـ',
  },
  {
    src: alrisalah1444,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة حملة الرسالة لخدمات حجاج الداخل',
    detail: 'موسم حج 1444هـ',
    alt: 'شهادة شكر وتقدير من شركة حملة الرسالة لموسم حج 1444هـ',
  },
  {
    src: almulhim1443,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة صالح الملحم وشركاه لخدمات حجاج الداخل',
    detail: 'موسم حج 1443هـ',
    alt: 'شهادة شكر وتقدير من شركة صالح الملحم وشركاه لموسم حج 1443هـ',
  },
  {
    src: alrisalah1443,
    title: 'شهادة شكر وتقدير',
    issuer: 'شركة حملة الرسالة لخدمات حجاج الداخل',
    detail: 'موسم حج 1443هـ',
    alt: 'شهادة شكر وتقدير من شركة حملة الرسالة لموسم حج 1443هـ',
  },
  // الخطابان التاليان مؤرخان في أغسطس 2019، بينما يذكران موسمي الحج 1443 و1444هـ (2022–2023م)،
  // أي أن تاريخ الخطاب يسبق المواسم المذكورة فيه. يبقيان مخفيين إلى أن تؤكد الشركة صحة التاريخ.
  {
    src: sunriseLetter,
    title: 'خطاب شكر',
    issuer: 'Sunrise International Travel & Tours — باكستان',
    alt: 'خطاب شكر من شركة Sunrise International للسفر والسياحة',
    published: false,
  },
  {
    src: fozanLetter,
    title: 'خطاب شكر',
    issuer: 'Shirkah-Al-Fozan Travel & Tours — باكستان',
    alt: 'خطاب شكر من شركة الفوزان للسفر والسياحة',
    published: false,
  },
];

export const publishedOnly = (items: CertificateItem[]) => items.filter((i) => i.published !== false);
