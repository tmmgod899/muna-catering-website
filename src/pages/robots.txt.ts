/**
 * ملف robots.txt. يشير إلى خريطة الموقع على النطاق المحدد في astro.config.mjs.
 */
import type { APIRoute } from 'astro';
import { absoluteUrl } from '../lib/paths';

export const GET: APIRoute = ({ site }) => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml', site)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
