'use client'

import { useCallback, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'
import { TelmaProcessAnimation, type ProcessControl } from './TelmaProcessAnimation'
import type { ProcessContent } from '@/content'

/**
 * The scene with its reading guide. Two chapters split the one continuous
 * sequence in two; the line under the open chapter fills as the scene plays,
 * and choosing a chapter moves the scene to where it begins. The chapters
 * follow the scene, never the other way round, so nothing here can make the
 * animation jump on its own.
 *
 * The words come from `process` in the dictionary; what stays here is where
 * each chapter starts and ends in the timeline, which is not copy. It says
 * nothing the site does not already say in "Como funciona".
 */
const MARKS = [
  { n: '01', from: 0, to: 10.8 },
  { n: '02', from: 10.8, to: 19 },
]

export function ProcessShowcase({
  copy,
  ctaPrimary,
  ctaSecondary,
}: {
  copy: ProcessContent
  ctaPrimary: string
  ctaSecondary: string
}) {
  const control = useRef<ProcessControl | null>(null)
  const fills = useRef<(HTMLSpanElement | null)[]>([])
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)

  const onTick = useCallback((t: number) => {
    const i = MARKS.findIndex((c) => t >= c.from && t < c.to)
    const now = i < 0 ? 0 : i
    if (now !== activeRef.current) {
      activeRef.current = now
      setActive(now)
    }
    MARKS.forEach((c, k) => {
      const el = fills.current[k]
      if (!el) return
      const p = k === now ? Math.min(1, Math.max(0, (t - c.from) / (c.to - c.from))) : 0
      el.style.transform = `scaleX(${p.toFixed(4)})`
    })
  }, [])

  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-20">
      <div className="flex flex-col">
        <h2 className="display text-h2 text-balance text-ink">{copy.title}</h2>
        <p className="mt-8 max-w-[30rem] text-body-lg leading-relaxed text-ink-soft">{copy.lead}</p>

        <ol className="mt-14 lg:mt-20">
          {MARKS.map((c, i) => {
            const open = i === active
            const chapter = copy.chapters[i]
            return (
              <li key={c.n} className="relative border-b border-line">
                <button
                  type="button"
                  aria-pressed={open}
                  onClick={() => {
                    control.current?.seek(c.from + 0.01)
                    activeRef.current = i
                    setActive(i)
                  }}
                  className="group block w-full py-7 text-left"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-sm tabular-nums text-ink-mute">{c.n}</span>
                    <span
                      className={`text-[1.625rem] font-medium leading-tight tracking-tight transition-colors duration-500 ease-calm sm:text-[2rem] ${
                        open ? 'text-ink' : 'text-ink-mute/70 group-hover:text-ink-soft'
                      }`}
                    >
                      {chapter.title}
                    </span>
                  </span>
                  {/* Opens and closes by height, smoothly, without measuring. */}
                  <span
                    className={`grid transition-[grid-template-rows,opacity] duration-700 ease-calm ${
                      open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-[28rem] pt-4 leading-relaxed text-ink-soft">{chapter.text}</span>
                    </span>
                  </span>
                </button>
                <span
                  aria-hidden
                  ref={(el) => {
                    fills.current[i] = el
                  }}
                  className="absolute -bottom-px left-0 h-[2px] w-full origin-left bg-accent-strong"
                  style={{ transform: 'scaleX(0)' }}
                />
              </li>
            )
          })}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 lg:mt-auto lg:pt-16">
          <ButtonLink href="#precos" variant="primary">
            {ctaPrimary}
          </ButtonLink>
          <ButtonLink href="#contacto" variant="secondary">
            {ctaSecondary}
            <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
          </ButtonLink>
        </div>
      </div>

      <TelmaProcessAnimation
        className="h-[37.5rem] sm:h-[42rem] lg:h-[45rem]"
        copy={copy}
        onTick={onTick}
        controlRef={control}
      />
    </div>
  )
}
