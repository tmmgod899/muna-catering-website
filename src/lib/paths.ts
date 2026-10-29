/**
 * أدوات بناء الروابط بما يراعي المسار الأساسي للموقع (base).
 * عند النشر على GitHub Pages تحت مسار فرعي (مثل /muna-catering-website/) تُضاف البادئة تلقائيًا،
 * وعند النشر على نطاق مستقل تكون البادئة فارغة.
 */

/** المسار الأساسي دون شرطة مائلة في نهايته، مثل '' أو '/muna-catering-website' */
export const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** يضيف المسار الأساسي إلى رابط داخلي يبدأ بـ / */
export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${clean}`;
}

/** يبني رابطًا مطلقًا (https://...) لرابط داخلي، لاستخدامه في الوسوم الوصفية وخريطة الموقع */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ?? new URL('https://www.example.com');
  return new URL(withBase(path), origin).href;
}
