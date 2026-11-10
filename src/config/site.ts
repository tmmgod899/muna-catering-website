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
  /** رقم واتساب بالصيغة الدولية دون علامة + ولا مسافات؛ اعتمدته الشركة رقمًا رسميًا لاستقبال طلبات عروض الأسعار. */
  whatsapp: '966567750002' as string | null,
  /** الصيغة المعروضة لرقم واتساب */
  whatsappDisplay: '+966 56 775 0002',
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
 * إعدادات نظام طلب عرض السعر.
 *
 * الإرسال بالبريد الإلكتروني يتم عبر خدمة Web3Forms، التي تستقبل الطلب وتحوّله إلى بريد الشركة.
 * مفتاح الوصول (Access Key) معرّف عام مصمَّم للاستخدام في المتصفح وليس كلمة مرور أو مفتاحًا سريًّا:
 * لا يتيح الدخول إلى الحساب، ويقتصر عمله على توجيه الطلبات إلى البريد المسجَّل عليه.
 * يُمرَّر المفتاح وقت البناء عبر متغير البيئة PUBLIC_WEB3FORMS_ACCESS_KEY (متغير المستودع WEB3FORMS_ACCESS_KEY
 * في GitHub Actions)، ولا يُكتب في الشيفرة. عند غيابه يُخفى خيار البريد تلقائيًا ويبقى خيار واتساب متاحًا.
 */
const accessKey = (import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '').trim();
const isValidAccessKey = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(accessKey);

if (accessKey && !isValidAccessKey) {
  console.warn('[quote] قيمة PUBLIC_WEB3FORMS_ACCESS_KEY ليست بصيغة صحيحة؛ تم تعطيل الإرسال بالبريد الإلكتروني.');
} else if (!accessKey) {
  console.warn('[quote] لم يُضبط PUBLIC_WEB3FORMS_ACCESS_KEY؛ يُعرض خيار الإرسال عبر واتساب فقط.');
}

export const quoteRequest = {
  /** مفتاح Web3Forms، أو سلسلة فارغة عند عدم الضبط */
  accessKey: isValidAccessKey ? accessKey : '',
  emailEnabled: isValidAccessKey,
  endpoint: 'https://api.web3forms.com/submit',
  /** عنوان رسالة البريد المرسلة إلى الشركة */
  emailSubject: 'New Quotation Request – Muna Company',
  /** اسم المرسل الظاهر في رسالة البريد */
  emailFromName: 'Muna Company Website',
  /** مدة منع تكرار إرسال الطلب نفسه بالبريد (بالدقائق) */
  duplicateWindowMinutes: 30,
};

/** خيارات العرض */
export const displayOptions = {
  /** إظهار أسماء الجهات المتعاقد معها في صفحة الخبرات (يُستحسن التأكد من موافقة العملاء قبل النشر) */
  showClientNames: true,
  /** إظهار وسم «صورة مؤقتة» على العناصر النائبة عن الصور */
  showPlaceholderLabels: true,
};
