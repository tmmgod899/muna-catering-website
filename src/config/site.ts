/**
 * الإعدادات العامة للموقع: هوية الشركة وبيانات التواصل وخيارات العرض.
 *
 * المصدر المعتمد لجميع البيانات أدناه: الملف التعريفي لشركة منى لخدمات الإعاشة (1448هـ).
 * أي قيمة تساوي null تعني أن البيان غير متوفر في المصدر؛ ويُخفى العنصر المرتبط بها تلقائيًا
 * من الموقع إلى أن تُضاف قيمة مؤكدة.
 */

export const company = {
  /** الاسم التجاري كما يظهر في الشعار ورخصة البلدية */
  brandName: 'مطابخ منى للإعاشة والتموين',
  /** الاسم المختصر المستخدم في العناوين القصيرة */
  shortName: 'مطابخ منى',
  /** الاسم النظامي للشركة */
  legalName: 'شركة منى لخدمات الإعاشة',
  /** سنة التأسيس وفق الملف التعريفي */
  foundedYear: 2019,
  city: 'مكة المكرمة',
  country: 'المملكة العربية السعودية',
} as const;

export interface PhoneEntry {
  label: string;
  /** الصيغة المعروضة للزائر */
  display: string;
  /** الصيغة الدولية المستخدمة في رابط الاتصال */
  e164: string;
}

export const contact = {
  phones: [
    // الرقم الوارد في تذييل جميع صفحات الملف التعريفي وصفحة «موقع المنشأة»
    { label: 'الجوال', display: '+966 56 775 0002', e164: '+966567750002' },
    // لإضافة رقم آخر (مثل الهاتف الثابت بعد تأكيده)، أضف عنصرًا بالصيغة نفسها:
    // { label: 'الهاتف', display: '+966 12 xxx xxxx', e164: '+96612xxxxxxx' },
  ] satisfies PhoneEntry[],
  /** البريد الوارد في صفحة «موقع المنشأة». يُستحسن استبداله ببريد على نطاق الشركة بعد حجزه. */
  email: 'menaaa002@gmail.com',
  /** رقم واتساب بالصيغة الدولية دون علامة + (مثال: 966500000000). غير مؤكد في المصدر. */
  whatsapp: null as string | null,
  address: {
    street: 'شارع صلاح الدين الأيوبي (شارع العسكر)',
    district: 'حي الشرائع، الخضراء',
    landmark: 'مقابل محطة بترومين',
    city: 'مكة المكرمة',
  },
  /** الإحداثيات الواردة في صفحة «موقع المنشأة»: 21°27'24.0"N 39°55'48.7"E */
  geo: { lat: 21.456667, lng: 39.930194 },
  /** ساعات العمل غير واردة في المصدر */
  workingHours: null as string | null,
} as const;

/** روابط الحسابات الرسمية على وسائل التواصل الاجتماعي. لا توجد حسابات موثقة في المصدر حاليًا. */
export const social: Record<'x' | 'instagram' | 'linkedin' | 'snapchat' | 'tiktok' | 'youtube', string | null> = {
  x: null,
  instagram: null,
  linkedin: null,
  snapchat: null,
  tiktok: null,
  youtube: null,
};

export const mapLinks = {
  /** رابط فتح الموقع في خرائط Google */
  open: `https://www.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}`,
  /** رابط الخريطة المضمَّنة في صفحة التواصل */
  embed: `https://maps.google.com/maps?q=${contact.geo.lat},${contact.geo.lng}&z=16&hl=ar&output=embed`,
};

/**
 * إعدادات نموذج التواصل.
 * - 'demo': وضع تجريبي؛ يتحقق من الحقول ولا يُرسل أي بيانات، ويعرض للزائر وسائل التواصل المباشرة.
 * - 'endpoint': يُرسل البيانات بصيغة JSON إلى العنوان المحدد في endpoint (مثل خدمة نماذج خارجية).
 *   يجب اختبار هذا الوضع قبل النشر.
 */
export const contactForm = {
  mode: 'demo' as 'demo' | 'endpoint',
  endpoint: '',
};

/** خيارات العرض */
export const displayOptions = {
  /** إظهار أسماء الجهات المتعاقد معها في صفحة الخبرات (يُستحسن التأكد من موافقة العملاء قبل النشر) */
  showClientNames: true,
  /** إظهار وسم «صورة مؤقتة» على العناصر النائبة عن الصور */
  showPlaceholderLabels: true,
};
