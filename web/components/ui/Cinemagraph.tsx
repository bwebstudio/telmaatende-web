'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A photograph that happens to move.
 *
 * Not a video player and not a banner: no controls, no play button, no
 * progress, nothing to click. The only motion is the motion already in the
 * footage — no added zoom, no parallax, no camera drift. If a visitor notices
 * it is a video within the first few seconds, it has failed.
 *
 * The footage is cut to the calmest second of the take and played back at a
 * quarter speed, then ping-ponged, so it never travels far from where it
 * started. A veil of white sits over it at 4%, which is what lets it sit in the
 * page as a texture rather than announce itself as media.
 *
 * Three things keep it honest:
 *
 * 1. THE POSTER IS THE DEFAULT STATE. The `<source>` elements are not rendered
 *    at all until the section approaches the viewport, so a reader who never
 *    scrolls this far downloads a 45kB JPEG and nothing else. React renders no
 *    sources on the server either, so there is no hydration mismatch.
 *
 * 2. REDUCED MOTION MEANS NO VIDEO. Not a paused video — no video. The observer
 *    is never even attached, so the file is never requested. Somebody who asked
 *    their system for stillness gets a still photograph.
 *
 * 3. IT FAILS TO A PHOTOGRAPH. If autoplay is blocked, the decode fails, or the
 *    network drops the request, the poster is what stays on screen. There is no
 *    error state to design because the resting state is already correct.
 *
 * Square corners, deliberately. Large media on this site is never rounded —
 * rounding is reserved for surfaces you could pick up, like cards and buttons.
 */
export function Cinemagraph({
  mp4,
  webm,
  poster,
  label,
  className = '',
  /** Aspect ratio of the footage, so the box reserves its height before load. */
  ratio = '2 / 1',
}: {
  mp4: string
  webm: string
  poster: string
  label: string
  className?: string
  ratio?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Asked for stillness: never attach the observer, never fetch the file.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    if (typeof IntersectionObserver === 'undefined') {
      setLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true)
          observer.disconnect()
        }
      },
      // Start fetching a screen early so the first frame is decoded and the
      // swap from poster to footage is invisible.
      { rootMargin: '400px 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Sources are added to the DOM after mount, and a <video> does not notice new
  // <source> children on its own — it has to be told to look again.
  useEffect(() => {
    if (!load) return
    const node = ref.current
    if (!node) return
    node.load()
    // Autoplay can still be refused. Nothing to handle: the poster stays.
    void node.play().catch(() => {})
  }, [load])

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        poster={poster}
        // The element is standing in for a photograph, so it is announced as one.
        role="img"
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controls={false}
        className="block h-full w-full object-cover"
        style={{ aspectRatio: ratio }}
      >
        {load && (
          <>
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </>
        )}
      </video>

      {/* Four percent of white. Enough to pull the footage a shade closer to the
          warm page it sits on, not enough to read as a wash over it. It covers
          the poster too, so the still and the moving state are the same colour
          and the swap between them is invisible. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/[0.04]"
      />
    </div>
  )
}
