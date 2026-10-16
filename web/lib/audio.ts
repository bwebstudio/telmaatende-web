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
 * All three exist now, so the section renders on every site.
 *
 * ── THEY ARE LEVELLED, AND THAT IS NOT HOUSEKEEPING ────────────────────────
 * The three came from three different voices and arrived at -25.0, -18.3 and
 * -22.9 LUFS: nearly seven decibels apart. A visitor switching language would
 * have reached for the volume, and this is the one block on the page whose
 * job is to sound effortless. Normalised to -16 LUFS, which is where speech
 * sits, and they are now within half a decibel of each other.
 *
 * Mono at 24kHz and 48kbps: a third of the original weight, and speech has
 * nothing above 12kHz to lose. Rebuild them from web/assets/audios with
 *
 *   ffmpeg -i <src> -af loudnorm=I=-16:TP=-1.5:LRA=11 \
 *          -ac 1 -ar 24000 -codec:a libmp3lame -b:a 48k <out>
 */
export const voiceSamples: Partial<Record<Locale, string>> = {
  pt: '/audio/telma-pt.mp3',
  es: '/audio/telma-es.mp3',
  en: '/audio/telma-en.mp3',
}

export function voiceSampleFor(lang: Locale): string | undefined {
  return voiceSamples[lang]
}
