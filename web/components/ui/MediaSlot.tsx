import Image from 'next/image'

/**
 * A place for a photograph or a video that the page needs and does not have
 * yet. It shows a provisional image (Unsplash License, see
 * public/images/placeholder/SOURCES.txt) and, in development only, a small tag
 * with the brief for the final media, so the gap is impossible to miss locally
 * and invisible in a production build.
 *
 * To fill it: pass the final `src` and delete the `brief`.
 */
export function MediaSlot({
  src,
  alt,
  brief,
  className = '',
  focus = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
}: {
  src: string
  alt: string
  /** What the final media should be. Shown only in development. */
  brief?: string
  className?: string
  /**
   * Where the crop holds on, as Tailwind object-position utilities.
   *
   * A wide photograph in a narrow slot loses its sides, and the middle of a
   * frame is not always what the picture is about: the banner's reception shot
   * is composed with the people on the left, so centred it crops to an empty
   * counter on a phone. Per breakpoint, because the slot's own aspect changes
   * with the breakpoint and so does what survives.
   */
  focus?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden bg-surface-sunken ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${focus}`}
      />
      {brief && process.env.NODE_ENV !== 'production' && (
        <span className="absolute left-3 top-3 max-w-[85%] rounded-[8px] bg-black/70 px-2.5 py-1.5 font-mono text-[0.6875rem] leading-snug text-white backdrop-blur">
          PLACEHOLDER · {brief}
        </span>
      )}
    </div>
  )
}
