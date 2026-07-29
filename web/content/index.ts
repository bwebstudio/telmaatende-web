import type { Content } from './types'
import { pt } from './pt'
import { en } from './en'
import { es } from './es'

// Register every language here. To add a language:
//   1. Create content/<lang>.ts implementing the Content type.
//   2. Import it and add it to the dictionaries map below.
//   3. Add the code to the `locales` array and an entry to `localeMeta`.
// Routing, metadata, the sitemap and the language switch pick it up
// automatically — nothing else needs to change.

export const dictionaries: Record<string, Content> = {
  pt,
  en,
  es,
}

export const locales = ['pt', 'en', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

/**
 * Per-language settings that are not translated copy: how the code appears in
 * the switcher, and the tags the platform APIs expect. Keeping these in a table
 * rather than in ternaries is what lets a fourth language be added without
 * hunting through components — a two-branch `lang === 'pt' ? … : …` silently
 * gives every *other* language the English fallback.
 */
export const localeMeta: Record<
  Locale,
  { label: string; ogLocale: string; numberLocale: string }
> = {
  pt: { label: 'PT', ogLocale: 'pt_PT', numberLocale: 'pt-PT' },
  en: { label: 'EN', ogLocale: 'en_GB', numberLocale: 'en-IE' },
  es: { label: 'ES', ogLocale: 'es_ES', numberLocale: 'es-ES' },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getContent(lang: string): Content {
  return dictionaries[lang] ?? dictionaries[defaultLocale]
}

export type { Content }
