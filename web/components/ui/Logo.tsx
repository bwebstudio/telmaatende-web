import Link from 'next/link'
import { TelmaMark } from '@/components/ui/TelmaMark'

/**
 * THE LOGOTYPE: the mark, and the name set in the brand's own face.
 *
 * ── IT IS DRAWN HERE AND NOT LOADED ────────────────────────────────────────
 * This replaces a 38 KB raster lockup that shipped in two colour variants,
 * because a bitmap cannot be recoloured: the dark blocks needed their own
 * file, and the wordmark's green was pinned outside the token system with a
 * note in globals.css saying so. Inline, the whole thing is `currentColor`,
 * so it takes the colour of whatever it sits on and the two files and the
 * exception all go away.
 *
 * The wordmark is Matter Medium at -0.02em, the site's own display tracking,
 * converted to outlines. Not live text: a logotype has to be the same shape
 * on a machine that never loads the webfont.
 */

/** Matter Medium, "Telma", outlines. The box is the ink, not the font's
 *  metrics, so the T sits flush against whatever is to its left. */
const WORD_BOX = '1.50 -70.80 263.50 71.60'
const WORD_PATH =
  'M23 0H34.8V-59.9H56.3V-70H1.5V-59.9H23Z M84.5 0.8C96 0.8 105 -5.3 107.5 -14.3L97.3 -17C96.1 -12.1 90.8 -8.4 84.5 -8.4C76.3 -8.4 70.8 -14.3 70 -23.2H107.9C109.9 -38.8 100.1 -51.2 84.1 -51.2C69.4 -51.2 59 -40.4 59 -25.2C59 -10 69.3 0.8 84.5 0.8ZM70.6 -31.5C72.3 -38.5 77.3 -42.4 84.1 -42.4C91.4 -42.4 96.4 -38.2 96.6 -31.5Z M115.5 0H126.4V-70.8H115.5Z M136.6 0H147.5V-24.8C147.5 -34.1 152.3 -41.6 160.3 -41.6C166.4 -41.6 169.9 -37.4 169.9 -30.6V0H180.8V-24.8C180.8 -34.1 185.6 -41.6 193.6 -41.6C199.6 -41.6 203.2 -37.4 203.2 -30.6V0H214.1V-33C214.1 -44.1 206.7 -51.2 196 -51.2C189 -51.2 182.7 -47.3 178.9 -41.7C177 -47.3 171 -51.2 163.5 -51.2C156.2 -51.2 150.4 -47.4 147.5 -42.7V-50.4H136.6Z M239 0.8C245.8 0.8 251.9 -2.8 254.1 -7.3V0H265V-31.7C265 -44.1 256 -51.2 243.4 -51.2C232 -51.2 223.7 -44.5 222 -34.7L232.5 -33.1C233.3 -39.4 237.3 -42.4 243.4 -42.4C249.8 -42.4 254.1 -38.9 254.1 -33V-31.7L243.8 -30.7C228.2 -29 221.4 -23.8 221.4 -13.8C221.4 -5.5 228.2 0.8 239 0.8ZM254.1 -23.6V-22.2C254.1 -14.2 248.7 -7.6 240.8 -7.6C235.6 -7.6 232.3 -10 232.3 -14.3C232.3 -19.3 235.9 -21.4 244.3 -22.4Z'

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-[0.42em] text-[2.75rem] sm:text-[3rem] lg:text-[3.25rem] ${
        onDark ? 'text-white' : 'text-ink'
      }`}
    >
      <TelmaMark className="h-[0.52em] w-auto" />
      <svg viewBox={WORD_BOX} className="h-[0.38em] w-auto" fill="currentColor" role="img" aria-label="Telma">
        <path d={WORD_PATH} />
      </svg>
    </span>
  )
}

export function LogoLink({
  href,
  label = 'Telma',
  onDark = false,
}: {
  href: string
  label?: string
  onDark?: boolean
}) {
  return (
    <Link href={href} aria-label={label} className="inline-flex items-center">
      <Logo onDark={onDark} />
    </Link>
  )
}
