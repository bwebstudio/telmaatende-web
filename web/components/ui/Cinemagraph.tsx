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
 * 12px corners, the media step of the scale — the smallest softening that still
 * reads as a decision rather than an unfinished edge. Cards sit at 16px, which
 * is what keeps a window and an object distinguishable.
 */
export function Cinemagraph({
  mp4,
  webm,
  poster,
  label,
  className = '',
  /**
   * Aspect ratio and framing, as classes rather than inline style, so both can
   * change at a breakpoint. A box that is a different shape from the footage
   * crops it, and where that crop falls is a composition decision — on a phone
   * the whole 16:9 frame fits, beside a column of text it has to get taller and
   * give up its edges.
   *
   * The ratio has to be here from the first render: it is what reserves the
   * height, and without it the page reflows the moment the poster decodes.
   */
  frame = 'aspect-video',
  /** Load as soon as it mounts. For anything above the fold. */
  eager = false,
}: {
  mp4: string
  webm: string
  poster: string
  label: string
  className?: string
  frame?: string
  eager?: boolean
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Asked for stillness: never attach the observer, never fetch the file.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    // Above the fold there is nothing to wait for — waiting would only leave a
    // still where the page has already promised movement.
    if (eager || typeof IntersectionObserver === 'undefined') {
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
  }, [eager])

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
    <div className={`relative overflow-hidden rounded-media ${className}`}>
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
        className={`block h-full w-full object-cover ${frame}`}
      >
        {load && (
          <>
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </>
        )}
      </video>

      {/* Four percent of the page's own warm white, not pure white — the point
          is to pull the footage a shade towards the ground it sits on, and pure
          white pulls it towards blue instead. It covers the poster too, so the
          still and the moving state are the same colour and the swap between
          them is invisible. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-bg/[0.04]"
      />
    </div>
  )
}
