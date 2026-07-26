import type { Content } from './types'
import { pt } from './pt'
import { en } from './en'

// Register every language here. To add a third language:
//   1. Create content/<lang>.ts implementing the Content type.
//   2. Import it and add it to the dictionaries map below.
//   3. Add the code to the `locales` array.
// Routing, metadata and the language switch pick it up automatically.

export const dictionaries: Record<string, Content> = {
  pt,
  en,
}

export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getContent(lang: string): Content {
  return dictionaries[lang] ?? dictionaries[defaultLocale]
}

export type { Content }
