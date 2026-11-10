/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** مفتاح الوصول العام لخدمة Web3Forms (يُضبط وقت البناء) */
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
