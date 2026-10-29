/**
 * أنواع بيانات الخبرات ودوال حساب الإحصاءات منها.
 * لا تُكتب أي أرقام يدويًا في الصفحات؛ جميعها مشتقة من سجل الخبرات.
 */

export type ServiceLocation = 'makkah' | 'mashaer';
export type ClientType = 'mission' | 'company' | 'domestic' | 'government';

export interface ExperienceRecord {
  location: ServiceLocation;
  client: string;
  /** توضيح إضافي وارد في المصدر (مثل اسم العلامة أو نوع العقد) */
  note?: string;
  clientType: ClientType;
  /** قيمة عمود «الجنسية» في المصدر */
  segment: string;
  count: number;
  /** 'pilgrims' افتراضيًا؛ 'unspecified' عندما لا يحدد المصدر وحدة العدد */
  countUnit?: 'pilgrims' | 'unspecified';
  hijri: number;
  gregorian: number;
  /** 'hajj' افتراضيًا */
  season?: 'hajj' | 'ramadan';
}

export interface Appreciation {
  issuer: string;
  seasons: number[];
}

export interface SeasonSummary {
  hijri: number;
  gregorian: number;
  total: number;
  makkah: number;
  mashaer: number;
  records: ExperienceRecord[];
}

const COUNTRY_SEGMENTS = new Set(['إندونيسيا', 'باكستان', 'نيجيريا']);

export function summarizeBySeason(records: ExperienceRecord[]): SeasonSummary[] {
  const map = new Map<number, SeasonSummary>();
  for (const r of records) {
    const s = map.get(r.hijri) ?? { hijri: r.hijri, gregorian: r.gregorian, total: 0, makkah: 0, mashaer: 0, records: [] };
    s.total += 1;
    s[r.location] += 1;
    s.records.push(r);
    map.set(r.hijri, s);
  }
  return [...map.values()].sort((a, b) => a.hijri - b.hijri);
}

export function experienceStats(records: ExperienceRecord[]) {
  const hajjRecords = records.filter((r) => (r.season ?? 'hajj') === 'hajj');
  const hajjSeasons = [...new Set(hajjRecords.map((r) => r.hijri))].sort((a, b) => a - b);
  const countries = [...new Set(records.map((r) => r.segment).filter((s) => COUNTRY_SEGMENTS.has(s)))];
  const servesDomestic = records.some((r) => r.clientType === 'domestic');
  const consecutive = hajjSeasons.every((y, i) => i === 0 || y === hajjSeasons[i - 1] + 1);
  const maxPerSeason = Math.max(...summarizeBySeason(records).map((s) => s.total));
  return {
    totalProjects: records.length,
    makkahProjects: records.filter((r) => r.location === 'makkah').length,
    mashaerProjects: records.filter((r) => r.location === 'mashaer').length,
    hajjSeasons,
    seasonCount: hajjSeasons.length,
    firstSeason: hajjSeasons[0],
    lastSeason: hajjSeasons[hajjSeasons.length - 1],
    consecutive,
    countries,
    servesDomestic,
    maxPerSeason,
  };
}

/** تنسيق الأرقام بالأرقام العربية الغربية مع فاصل الآلاف */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat('en-US').format(n);
}

/** صيغة العدد بالعربية مع التمييز (مثال: 26 مشروعًا) — تبسيط كافٍ للأعداد المستخدمة في الموقع */
export function arabicCount(n: number, forms: { one: string; two: string; few: string; many: string }): string {
  if (n === 1) return forms.one;
  if (n === 2) return forms.two;
  const mod100 = n % 100;
  if (mod100 >= 3 && mod100 <= 10) return `${formatNumber(n)} ${forms.few}`;
  return `${formatNumber(n)} ${forms.many}`;
}
