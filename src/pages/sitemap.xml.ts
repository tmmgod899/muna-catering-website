/**
 * خريطة الموقع لمحركات البحث. تعتمد على قيمة site في astro.config.mjs.
 */
import type { APIRoute } from 'astro';
import { routes } from '../config/navigation';
import { absoluteUrl } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const urls = Object.values(routes)
    .map((path) => `  <url><loc>${absoluteUrl(path, site)}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
