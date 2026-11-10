/**
 * شركاء النجاح.
 * المصدر: صفحة «شركاء النجاح» (ص 11) في الملف التعريفي المحدَّث؛ الترتيب مطابق لترتيبها في الصفحة.
 * الشعارات مستخرجة من الملف نفسه. النص البديل يذكر ما هو مكتوب على الشعار فقط؛
 * والشعاران الخاليان من أي نص وُصفا بما يمثّلانه دون نسبة اسم جهة لم يرد في المصدر.
 *
 * لإضافة شريك: ضع الشعار (PNG بخلفية شفافة) في src/assets/images/partners/ ثم أضف عنصرًا بالبنية نفسها.
 */
import type { ImageMetadata } from 'astro';

import haramain from '../assets/images/partners/haramain-authority.png';
import alrajhi from '../assets/images/partners/alrajhi-mateen-almanasik.png';
import pakistan from '../assets/images/partners/pakistan-emblem.png';
import rakeen from '../assets/images/partners/rakeen-mashariq-almutamayizah.png';
import sana from '../assets/images/partners/sana-mashariq-aldhahabiah.png';
import adahi from '../assets/images/partners/adahi.png';
import nahcon from '../assets/images/partners/nahcon-nigeria.png';
import mashariqLicense from '../assets/images/partners/mashariq-almutamayizah-license-13.png';
import nusuk from '../assets/images/partners/nusuk-humanitarian.png';
import mashariq from '../assets/images/partners/mashariq.png';
import rehlat from '../assets/images/partners/rehlat-wa-manafea.png';
import indonesia from '../assets/images/partners/indonesia-ministry-religious-affairs.png';

export interface Partner {
  logo: ImageMetadata;
  /** النص البديل: الاسم كما هو مكتوب على الشعار */
  name: string;
}

export const partners: Partner[] = [
  { logo: haramain, name: 'الحرمين — الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي' },
  { logo: alrajhi, name: 'الراجحي (Al Rajhi) — متين المناسك (Mateen Almanasik)' },
  // شعار دون نص: الشعار الرسمي لجمهورية باكستان الإسلامية
  { logo: pakistan, name: 'شعار جمهورية باكستان الإسلامية' },
  { logo: rakeen, name: 'ركين (RAKEEN) — شركة مشارق المتميزة لخدمات الحجاج' },
  { logo: sana, name: 'سنا (sana) — شركة مشارق الذهبية لخدمات الحجاج' },
  { logo: adahi, name: 'أضاحي (adahi)' },
  { logo: nahcon, name: 'National Hajj Commission of Nigeria (NAHCON)' },
  { logo: mashariqLicense, name: 'شركة مشارق المتميزة لخدمات الحجاج — ترخيص رقم (13)' },
  { logo: nusuk, name: 'نسك الإنسانية (Nusuk Humanitarian)' },
  { logo: mashariq, name: 'مشارق (MASHARIQ)' },
  { logo: rehlat, name: 'شركة رحلات ومنافع للسياحة' },
  // شعار يحمل عبارة «IKHLAS BERAMAL»: شعار وزارة الشؤون الدينية في جمهورية إندونيسيا
  { logo: indonesia, name: 'شعار وزارة الشؤون الدينية في جمهورية إندونيسيا (IKHLAS BERAMAL)' },
];
