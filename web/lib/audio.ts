import type { Locale } from '@/content'

/**
 * Recorded call samples, per language.
 *
 * Only Portuguese exists today. The voice section renders for a language only
 * when that language has a recording — playing a Portuguese call to a Spanish
 * visitor would undercut the exact objection the section exists to answer.
 * Record ES and EN samples, drop them in /public/audio, add them here, and the
 * section appears on those sites automatically.
 */
export const voiceSamples: Partial<Record<Locale, string>> = {
  pt: '/audio/telma-portugues.mp3',
}

export function voiceSampleFor(lang: Locale): string | undefined {
  return voiceSamples[lang]
}
