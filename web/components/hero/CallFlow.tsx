'use client'

import { useEffect, useRef, useState } from 'react'
import type { FlowStep } from '@/content/types'

/**
 * THE HERO SCENE — one call, in four words.
 *
 * Third iteration, and the first two are worth recording because the mistake
 * was the same both times. Version one put the sequence in a white card with a
 * drop shadow. Version two removed the card but kept the timestamps, the masked
 * phone number, the quoted sentence, the booking chip and the caption. Both
 * were interfaces. An interface asks to be read and understood; this has to be
 * recognised.
 *
 * So everything that explained is gone. What is left is a hairline running the
 * full height of the column, four points on it, and four words set at display
 * weight — the same treatment as the headline, so the scene reads as typography
 * rather than as a product screenshot. A call arrives, it is answered, it
 * becomes an appointment, reception is told. Nobody needs the timestamps to
 * feel that.
 *
 * The line bleeds off the top and bottom of the frame on purpose: it begins
 * before the call and continues after the summary. That is the whole argument
 * of the company, drawn.
 *
 * The animation is CSS, so it plays with JavaScript off. JavaScript adds one
 * thing: it replays the sequence when the scene comes back into view, and only
 * after it has fully left — scrubbing at the boundary will not retrigger it.
 */

// The whole sequence lands inside six seconds: four points 1.4s apart, each
// taking 800ms to arrive, with the line drawn underneath them.
const FIRST_DELAY = 400
const STEP_DELAY = 1400
const STEP_DURATION = 800
const LINE_DURATION = 5200

export function CallFlow({ steps }: { steps: FlowStep[] }) {
  const ref = useRef<HTMLDivElement>(null)
  // Bumping this remounts the animated subtree, which restarts the CSS
  // animations from zero. It starts at 0 so the server-rendered markup and the
  // first client render agree.
  const [play, setPlay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Only replay once the scene has been fully out of view. Without this,
    // easing over the top edge of the section would restart it repeatedly.
    let hasLeft = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeft) {
            hasLeft = false
            setPlay((n) => n + 1)
          }
        } else {
          hasLeft = true
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      {/* The light the scene sits in. Very wide, very weak — it keeps the warm
          white from looking empty behind the type. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -inset-y-20 -z-10"
        style={{
          background:
            'radial-gradient(52% 48% at 40% 45%, rgb(62 123 115 / 0.09), rgb(62 123 115 / 0) 72%)',
        }}
      />

      <div key={play} className="relative pl-9 sm:pl-14">
        <span
          aria-hidden
          className="flow-line absolute inset-y-0 left-0 w-px"
          style={
            {
              '--step-delay': '250ms',
              animationDuration: `${LINE_DURATION}ms`,
              background:
                'linear-gradient(to bottom, transparent, rgb(var(--border-strong)) 12%, rgb(var(--border-strong)) 88%, transparent)',
            } as React.CSSProperties
          }
        />

        <ol className="flex flex-col gap-11 sm:gap-14">
          {steps.map((step, i) => {
            const style = {
              '--step-delay': `${FIRST_DELAY + i * STEP_DELAY}ms`,
              animationDuration: `${STEP_DURATION}ms`,
            } as React.CSSProperties

            return (
              <li key={i} className="flow-step relative" style={style}>
                <span
                  aria-hidden
                  className="absolute -left-9 top-[0.42em] -translate-x-1/2 sm:-left-14"
                >
                  <Marker last={i === steps.length - 1} />
                </span>
                <p className="text-[1.375rem] font-mid leading-none tracking-display text-ink sm:text-[1.75rem]">
                  {step.label}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

/** The last point closes the sequence, so it is the only filled one. */
function Marker({ last }: { last: boolean }) {
  return last ? (
    <span className="block h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-bg" />
  ) : (
    <span className="block h-2 w-2 rounded-full bg-bg ring-1 ring-brand-accent" />
  )
}
