import type { Locale } from '@/content'

/**
 * Recorded call samples, per language.
 *
 * The voice section renders for a language only when that language has a
 * recording. Playing a Portuguese call to a Spanish visitor would undercut the
 * exact objection the section exists to answer — "will it sound artificial?" —
 * so the block is hidden rather than filled with the wrong voice. That is why
 * the Spanish site had no voice section at all until now, rather than a
 * Portuguese one.
 *
 * English still has none. Record it, drop the file in /public/audio, add it
 * here, and the section appears on that site with no other change.
 */
export const voiceSamples: Partial<Record<Locale, string>> = {
  pt: '/audio/telma-portugues.mp3',
  es: '/audio/telma-esp2.mp3',
}

export function voiceSampleFor(lang: Locale): string | undefined {
  return voiceSamples[lang]
}
