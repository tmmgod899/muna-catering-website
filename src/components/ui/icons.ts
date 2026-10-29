/**
 * سجل الأيقونات المستخدمة في الموقع (Lucide — رخصة ISC).
 * تُدرج الأيقونات كنص SVG وقت البناء دون أي JavaScript في المتصفح.
 */
import phone from 'lucide-static/icons/phone.svg?raw';
import mail from 'lucide-static/icons/mail.svg?raw';
import mapPin from 'lucide-static/icons/map-pin.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';
import chevronLeft from 'lucide-static/icons/chevron-left.svg?raw';
import chevronRight from 'lucide-static/icons/chevron-right.svg?raw';
import arrowLeft from 'lucide-static/icons/arrow-left.svg?raw';
import check from 'lucide-static/icons/check.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import snowflake from 'lucide-static/icons/snowflake.svg?raw';
import packageIcon from 'lucide-static/icons/package.svg?raw';
import truck from 'lucide-static/icons/truck.svg?raw';
import users from 'lucide-static/icons/users.svg?raw';
import clipboardCheck from 'lucide-static/icons/clipboard-check.svg?raw';
import award from 'lucide-static/icons/award.svg?raw';
import badgeCheck from 'lucide-static/icons/badge-check.svg?raw';
import cookingPot from 'lucide-static/icons/cooking-pot.svg?raw';
import image from 'lucide-static/icons/image.svg?raw';
import send from 'lucide-static/icons/send.svg?raw';
import sparkles from 'lucide-static/icons/sparkles.svg?raw';
import thermometer from 'lucide-static/icons/thermometer.svg?raw';
import heartHandshake from 'lucide-static/icons/heart-handshake.svg?raw';
import graduationCap from 'lucide-static/icons/graduation-cap.svg?raw';
import bug from 'lucide-static/icons/bug.svg?raw';
import stethoscope from 'lucide-static/icons/stethoscope.svg?raw';
import fileText from 'lucide-static/icons/file-text.svg?raw';
import info from 'lucide-static/icons/info.svg?raw';
import externalLink from 'lucide-static/icons/external-link.svg?raw';
import maximize from 'lucide-static/icons/maximize-2.svg?raw';

export const icons = {
  phone,
  mail,
  mapPin,
  menu,
  x,
  chevronLeft,
  chevronRight,
  arrowLeft,
  check,
  shieldCheck,
  snowflake,
  package: packageIcon,
  truck,
  users,
  clipboardCheck,
  award,
  badgeCheck,
  cookingPot,
  image,
  send,
  sparkles,
  thermometer,
  heartHandshake,
  graduationCap,
  bug,
  stethoscope,
  fileText,
  info,
  externalLink,
  maximize,
};

export type IconName = keyof typeof icons;
