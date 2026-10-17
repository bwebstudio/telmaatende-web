'use client'

import { useEffect, useRef } from 'react'
import {
  Bell,
  CalendarDays,
  CalendarPlus,
  CircleDot,
  Clock,
  FileText,
  MessageSquare,
  Phone,
  Sun,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import { LOOP, PERIPHERY, choreography } from './choreography'
import { compile, sample, type Props } from './timeline'
import type { ProcessContent } from '@/content'

/**
 * A CALL, PASSING THROUGH TELMA.
 *
 * One continuous scene, not slides: the same objects move, scale, blur and
 * settle while a camera pulls back to show the system around the call and
 * pushes in again on what it left behind. The whole thing is a timeline
 * (./choreography.ts) sampled by one requestAnimationFrame clock that writes
 * transforms straight to the DOM, so React renders the scene once and never
 * again while it plays.
 *
 * The agenda at the end borrows the dashboard's own day list: service colour
 * bar, the time as the largest thing in the row, the amber pending tag.
 *
 * Every word in it comes from `process` in the dictionary, because the section
 * renders on all three homepages and used to show Portuguese to everybody.
 *
 * EXPERIMENT. Local only. See ./README.md.
 */

// The system around a call, as plain tiles: telephone, agenda, time,
// notification, status, booking, conversation, caller, summary. Icons only, so
// nothing here needs translating.
const PERI_ICONS: LucideIcon[] = [
  Phone, CalendarDays, Clock, Bell, CircleDot, CalendarPlus, MessageSquare, Clock, UserRound, FileText,
]

// Each fact keeps a small mark of what kind of fact it is.
const CHIP_ICONS: LucideIcon[] = [CalendarPlus, CalendarDays, Sun, Clock]

// The dashboard's pending tone (warn-soft / warn), not a colour of our own.
const PENDING = 'bg-[rgb(250_240_224)] text-[rgb(140_84_10)]'

// Frosted, not flat: translucent white with a white rim and a lit top edge,
// floating on the grey. No backdrop-filter: twenty moving elements blurring
// what is behind them every frame is not worth what it adds.
const card =
  'rounded-[16px] border border-white/90 bg-white/[0.82] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(17,24,39,0.04),0_22px_48px_-26px_rgba(17,24,39,0.35)]'

function Tracked({
  name,
  className = '',
  children,
}: {
  name: string
  className?: string
  children: React.ReactNode
}) {
  // A point at the centre of the stage; the child is centred on it, so x/y
  // are offsets from the centre and scale happens about the element's middle.
  return (
    <div data-track={name} className="absolute left-1/2 top-1/2 will-change-transform" style={{ opacity: 0 }}>
      <div className={`-translate-x-1/2 -translate-y-1/2 ${className}`}>{children}</div>
    </div>
  )
}

function Phrase({ track, children }: { track: string; children: React.ReactNode }) {
  return (
    <span data-track={track} data-inline="" style={{ opacity: 0 }}>
      {children}
    </span>
  )
}

function Speech({
  track,
  who,
  phrases,
  telma = false,
}: {
  track: string
  who: string
  phrases: string[]
  telma?: boolean
}) {
  return (
    <Tracked name={track} className={`w-[17.5rem] px-5 py-4 sm:w-[21.25rem] ${card}`}>
      <span className="flex items-center gap-2 text-label font-medium uppercase text-ink-mute">
        {telma && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-strong" />}
        {who}
      </span>
      <p className="mt-2.5 text-base leading-[1.45] text-ink sm:text-[1.0625rem]">
        {phrases.map((p, i) => (
          <Phrase key={i} track={`${track}_${i}`}>
            {p}
          </Phrase>
        ))}
      </p>
    </Tracked>
  )
}

export type ProcessControl = { seek: (t: number) => void }

export function TelmaProcessAnimation({
  className = 'h-[37.5rem] sm:h-[41.25rem]',
  copy,
  onTick,
  controlRef,
}: {
  className?: string
  copy: ProcessContent
  /** Called every frame with the loop time, for anything that follows it. */
  onTick?: (t: number) => void
  /** Lets the page jump the scene to a moment (the chapter list does). */
  controlRef?: React.MutableRefObject<ProcessControl | null>
}) {
  const onTickRef = useRef(onTick)
  onTickRef.current = onTick
  const stageRef = useRef<HTMLDivElement>(null)
  const worldRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<HTMLSpanElement>(null)
  const lightRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const stage = stageRef.current
    const world = worldRef.current
    if (!stage || !world) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const els = new Map<string, HTMLElement[]>()
    stage.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
      const name = el.dataset.track!
      els.set(name, [...(els.get(name) ?? []), el])
    })

    let mobile = stage.clientWidth < 560
    let tracks = build(mobile)
    function build(m: boolean) {
      const raw = choreography(m)
      const out = new Map<string, ReturnType<typeof compile>>()
      for (const [name, keys] of Object.entries(raw)) out.set(name, compile(keys, LOOP))
      // Elements with no track in this layout (periphery cut on phones) stay hidden.
      els.forEach((list, name) => {
        if (!out.has(name)) list.forEach((el) => (el.style.visibility = 'hidden'))
      })
      return out
    }

    const p: Props = { x: 0, y: 0, s: 1, o: 0, b: 0 }
    const cache = new Map<HTMLElement, string[]>()
    let lastSecond = -1

    const render = (t: number, clock: number) => {
      tracks.forEach((track, name) => {
        sample(track, t, p)
        if (name === 'camera') {
          const tf = `scale(${p.s.toFixed(4)})`
          if (world.style.transform !== tf) world.style.transform = tf
          return
        }
        // The periphery never sits quite still.
        if (name.startsWith('peri')) {
          const i = +name.slice(4)
          p.x += Math.sin(clock * 0.31 + i * 1.3) * 5
          p.y += Math.cos(clock * 0.27 + i * 0.9) * 4
        }
        const list = els.get(name)
        if (!list) return
        // Only what changed reaches the DOM: most of the scene is still at
        // any given moment, and an unchanged write still costs a style pass.
        const transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) scale(${p.s.toFixed(4)})`
        const opacity = p.o.toFixed(3)
        const filter = p.b > 0.05 ? `blur(${p.b.toFixed(1)}px)` : 'none'
        const visibility = p.o < 0.004 ? 'hidden' : 'visible'
        for (const el of list) {
          const c = (cache.get(el) ?? cache.set(el, ['', '', '', '']).get(el))!
          if (el.dataset.inline === undefined && c[0] !== transform) el.style.transform = c[0] = transform
          if (c[1] !== opacity) el.style.opacity = c[1] = opacity
          if (c[2] !== filter) el.style.filter = c[2] = filter
          if (c[3] !== visibility) el.style.visibility = c[3] = visibility
        }
      })

      // The call's clock: it runs while the call is on screen.
      const sec = 3 + Math.floor(Math.min(t, 14.6))
      if (sec !== lastSecond && timerRef.current) {
        lastSecond = sec
        timerRef.current.textContent = `00:${String(sec).padStart(2, '0')}`
      }

      // Ambient light: two soft pools drifting very slowly.
      lightRefs.current.forEach((l, i) => {
        if (!l) return
        const x = Math.sin(clock * 0.05 + i * 2.1) * 60
        const y = Math.cos(clock * 0.043 + i * 1.4) * 40
        l.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
        l.style.opacity = (0.75 + Math.sin(clock * 0.09 + i) * 0.2).toFixed(3)
      })
    }

    if (reduced.matches) {
      // One still composition: the conversation, what came out of it, and
      // the entry waiting for confirmation.
      render(12.6, 0)
      for (const name of ['bar', 'm1', 't1', 'm2']) {
        els.get(name)?.forEach((el) => {
          el.style.opacity = '0.6'
          el.style.filter = 'none'
        })
      }
      onTickRef.current?.(12.6)
      if (controlRef) controlRef.current = { seek: () => {} }
      return
    }

    let raf = 0
    let start = 0
    let paused = 0
    let visible = true

    const frame = (now: number) => {
      if (!start) start = now
      const clock = (now - start) / 1000
      const t = clock % LOOP
      render(t, clock)
      onTickRef.current?.(t)
      raf = requestAnimationFrame(frame)
    }
    const play = () => {
      if (raf || !visible || document.hidden) return
      // Resume where it left off rather than jumping ahead.
      if (paused) start += performance.now() - paused
      paused = 0
      raf = requestAnimationFrame(frame)
    }
    const pause = () => {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
      paused = performance.now()
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) play()
      else pause()
    })
    io.observe(stage)

    const ro = new ResizeObserver(() => {
      const m = stage.clientWidth < 560
      if (m !== mobile) {
        mobile = m
        tracks = build(m)
      }
    })
    ro.observe(stage)

    const onVisibility = () => (document.hidden ? pause() : play())
    document.addEventListener('visibilitychange', onVisibility)

    if (controlRef) {
      controlRef.current = {
        // Jump to a moment. Everything is a function of time, so a jump is
        // just a different clock; the scene redraws from there.
        seek: (target: number) => {
          const now = performance.now()
          start = now - target * 1000
          if (paused) paused = now
        },
      }
    }

    play()
    return () => {
      if (controlRef) controlRef.current = null
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      aria-label="Uma chamada a passar pela Telma: o pedido do cliente fica na agenda, por confirmar."
      role="img"
      className={`relative w-full overflow-hidden rounded-[24px] bg-[rgb(210_210_206)] ${className}`}
    >
      {/* Ambient light and shade: soft pools drifting very slowly, so the grey
          has depth without anything that reads as a gradient. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          ref={(el) => {
            lightRefs.current[0] = el
          }}
          className="absolute -left-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-white blur-[90px]"
        />
        <div
          ref={(el) => {
            lightRefs.current[1] = el
          }}
          className="absolute -bottom-32 -right-16 h-[24rem] w-[24rem] rounded-full bg-white/80 blur-[100px]"
        />
        <div
          ref={(el) => {
            lightRefs.current[2] = el
          }}
          className="absolute left-[30%] top-[45%] h-[22rem] w-[22rem] rounded-full bg-[rgb(120_120_116)]/25 blur-[110px]"
        />
      </div>

      <div ref={worldRef} aria-hidden className="absolute inset-0 origin-center will-change-transform">
        {/* The system around the call: only in frame when the camera pulls back. */}
        {PERIPHERY.map((_, i) => {
          const Icon = PERI_ICONS[i % PERI_ICONS.length]
          return (
            <Tracked key={i} name={`peri${i}`} className={`flex h-14 w-14 items-center justify-center !rounded-[14px] ${card}`}>
              <Icon size={20} strokeWidth={1.6} className="text-ink" aria-hidden />
            </Tracked>
          )
        })}

        {/* The agenda, borrowed from the dashboard's day list. */}
        <Tracked name="dash" className={`w-[19.5rem] overflow-hidden sm:w-[28rem] ${card} !rounded-[12px]`}>
          <div data-track="dashRest" data-inline="" className="px-5 py-4">
            <span className="text-label font-medium uppercase text-ink-mute">{copy.agenda}</span>
            <p className="mt-1 text-xl font-medium tracking-tight text-ink">{copy.day}</p>
          </div>
          <ol className="divide-y divide-line border-t border-line">
            <li data-track="dashRest" data-inline="" className="flex items-start gap-4 px-5 py-3.5">
              <span aria-hidden className="-my-3.5 w-1 self-stretch rounded-full bg-[rgb(219_234_254)]" />
              <span className="w-14 text-lg font-medium tabular-nums text-ink">09:00</span>
              <span className="flex-1 pt-1.5">
                <span className="block h-2.5 w-28 rounded-full bg-line" />
                <span className="mt-2 block h-2.5 w-16 rounded-full bg-line" />
              </span>
            </li>
            <li className="relative px-5 py-3.5">
              <div data-track="dashRow" data-inline="" className="flex items-start gap-4">
                <span aria-hidden className="-my-3.5 w-1 self-stretch rounded-full bg-[rgb(254_233_213)]" />
                <span className="w-14 text-lg font-medium tabular-nums text-ink">10:00</span>
                <span className="min-w-0 flex-1">
                  <span className="block whitespace-nowrap font-medium text-ink">{copy.newBooking}</span>
                  <span className="block whitespace-nowrap text-sm text-ink-soft">{copy.dayAndTime}</span>
                  {/* On a phone the status goes under the entry, not beside it. */}
                  <span className={`mt-2 inline-flex rounded-pill px-2.5 py-1 text-sm font-medium sm:hidden ${PENDING}`}>
                    {copy.toConfirm}
                  </span>
                </span>
                <span className={`hidden shrink-0 rounded-pill px-2.5 py-1 text-sm font-medium sm:inline-flex ${PENDING}`}>
                  {copy.toConfirm}
                </span>
              </div>
            </li>
            <li data-track="dashRest" data-inline="" className="flex items-start gap-4 px-5 py-3.5">
              <span aria-hidden className="-my-3.5 w-1 self-stretch rounded-full bg-[rgb(220_242_229)]" />
              <span className="w-14 text-lg font-medium tabular-nums text-ink">11:00</span>
              <span className="flex-1 pt-1.5">
                <span className="block h-2.5 w-24 rounded-full bg-line" />
                <span className="mt-2 block h-2.5 w-20 rounded-full bg-line" />
              </span>
            </li>
          </ol>
        </Tracked>

        {/* The call. */}
        <Tracked
          name="bar"
          className={`flex w-[17rem] items-center gap-3 !rounded-full px-4 py-2.5 sm:w-[20rem] ${card}`}
        >
          <Phone size={16} strokeWidth={1.75} className="text-brand" aria-hidden />
          <span className="text-sm font-medium text-ink">{copy.callInProgress}</span>
          <span ref={timerRef} className="ml-auto text-sm tabular-nums text-ink-mute">
            00:03
          </span>
        </Tracked>

        <Speech track="m1" who={copy.speakers.caller} phrases={copy.dialogue.caller1} />
        <Speech track="t1" who={copy.speakers.telma} telma phrases={copy.dialogue.telma1} />
        <Speech track="m2" who={copy.speakers.caller} phrases={copy.dialogue.caller2} />

        {/* What Telma took from it. */}
        {copy.facts.map((c, i) => {
          const Icon = CHIP_ICONS[i]
          return (
            <Tracked
              key={c}
              name={`chip${i}`}
              className={`flex items-center gap-2 whitespace-nowrap !rounded-[10px] py-1.5 pl-2.5 pr-3 ${card} ${
                i === 0 ? 'text-label font-medium uppercase text-ink' : 'text-sm text-ink'
              }`}
            >
              <Icon size={14} strokeWidth={1.75} className="shrink-0 text-ink-mute" aria-hidden />
              {c}
            </Tracked>
          )
        })}

        {/* The entry they become. */}
        <Tracked name="booking" className={`w-[17rem] px-6 py-5 sm:w-[19rem] ${card}`}>
          <span className="text-label font-medium uppercase text-ink-mute">{copy.newBooking}</span>
          <p className="mt-3 text-[1.5rem] font-medium leading-tight tracking-tight text-ink">{copy.day}</p>
          <p className="mt-1 flex items-baseline gap-2 text-ink-soft">
            <span className="font-medium tabular-nums text-ink">10:00</span>
            <span>{copy.morning}</span>
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
            <span className="text-sm text-ink-mute">{copy.statusLabel}</span>
            <span className={`rounded-pill px-2.5 py-1 text-sm font-medium ${PENDING}`}>{copy.toConfirm}</span>
          </div>
        </Tracked>
      </div>
    </div>
  )
}
