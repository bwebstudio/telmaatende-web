import Image from 'next/image'
import Link from 'next/link'

/**
 * THE LOGOTYPE.
 *
 * The drawn lockup — mark plus wordmark — replacing the typographic stand-in
 * that stood here while the asset was missing. With it in place the serif is
 * gone from the site as a webfont entirely: it now lives inside the image,
 * which is exactly where the brand rule puts it.
 *
 * Two variants, because the delivered artwork only works on light ground. The
 * wordmark is drawn in a near-black navy that disappears against the ink
 * blocks, so `logo-light` recolours it to white and lifts the mark to the
 * accent green, which clears the 3:1 a non-text element needs on dark.
 *
 * It is raster, not vector. That is what was supplied, and at 480px tall it is
 * sharp well past 3× the size it is ever drawn at — but an SVG would be smaller,
 * infinitely crisp and recolourable from the palette instead of by hand. Worth
 * asking the designer for.
 */

// The delivered artwork, trimmed. 1043 × 480.
const RATIO = 2.172

export function Logo({
  onDark = false,
  className = '',
}: {
  onDark?: boolean
  className?: string
}) {
  const height = 44
  return (
    <Image
      src={onDark ? '/images/logo-light.webp' : '/images/logo.webp'}
      alt="Telma"
      width={Math.round(height * RATIO)}
      height={height}
      priority
      // Sized so the wordmark inside the lockup reads at roughly the size the
      // old type-only mark did: the drawn wordmark is only about 60% of the
      // lockup's height, so a 36px lockup would have shrunk it noticeably.
      className={`h-10 w-auto sm:h-11 lg:h-12 ${className}`}
    />
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
