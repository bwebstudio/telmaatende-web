'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'

/**
 * DA CONVERSA, FICA O NECESSÁRIO.
 *
 * A current of small facts drifting right to left behind one card that holds
 * what Telma understood from a call. The current never stops and never syncs
 * with the card: they are one system because the facts that matter to the
 * card brighten as they pass behind it, not because they move in step.
 *
 * The current is not a marquee. Every fact is its own element on one of three
 * planes, moved by a single requestAnimationFrame loop writing transforms
 * straight to the DOM (no React render per frame). When a fact leaves on the
 * left it is reborn off-screen on the right with new words, a new height and a
 * new speed, so there is no strip to wrap and no moment the whole scene resets.
 *
 * EXPERIMENT. Local only. See ./README.md.
 */

// --- Content -------------------------------------------------------------------

type Step =
  | { kind: 'call'; label: string; quote: string; duration: string; related: string[] }
  | { kind: 'identified'; label: string; title: string; lines: string[]; badge: string; related: string[] }
  | { kind: 'agenda'; label: string; day: string; detail: string; status: string; related: string[] }
  | { kind: 'summary'; label: string; title: string; lines: string[]; channels: string[]; related: string[] }

/** One tab's worth of scene: what the card says, and what drifts behind it. */
export type Scene = { steps: Step[]; facts: { text: string; caption?: string }[] }

/**
 * Three calls, three steps each. Nothing here is a person, a price or a
 * clinical detail, and nothing claims a booking exists: every outcome is
 * "por confirmar", because that is what the clinic still has to do.
 */
const BOOKING_STEPS: Step[] = [
  {
    kind: 'call',
    label: 'Chamada',
    quote: 'Olá, queria marcar para terça-feira de manhã, se houver disponibilidade.',
    duration: '12 s',
    related: ['chamada atendida', 'terça-feira', 'de manhã'],
  },
  {
    kind: 'identified',
    label: 'Telma identificou',
    title: 'Marcação',
    lines: ['terça-feira', 'de manhã'],
    badge: 'Por confirmar',
    related: ['marcação', 'terça-feira', 'de manhã'],
  },
  {
    kind: 'agenda',
    label: 'Na agenda',
    day: 'Terça-feira',
    detail: 'Manhã',
    status: 'Por confirmar',
    related: ['por confirmar', 'terça-feira'],
  },
  {
    kind: 'call',
    label: 'Chamada',
    quote: 'Boa tarde. Precisava de mudar a consulta de quinta para sexta, à tarde.',
    duration: '9 s',
    related: ['chamada atendida', 'quinta-feira', 'sexta-feira'],
  },
  {
    kind: 'identified',
    label: 'Telma identificou',
    title: 'Alteração',
    lines: ['de quinta-feira para sexta-feira', 'à tarde'],
    badge: 'Por confirmar',
    related: ['alteração', 'sexta-feira', 'à tarde'],
  },
  {
    kind: 'agenda',
    label: 'Na agenda',
    day: 'Sexta-feira',
    detail: 'Tarde',
    status: 'Por confirmar',
    related: ['por confirmar', 'sexta-feira'],
  },
  {
    kind: 'call',
    label: 'Chamada',
    quote: 'Bom dia. Amanhã não vou conseguir ir, queria cancelar, por favor.',
    duration: '7 s',
    related: ['chamada atendida', 'amanhã'],
  },
  {
    kind: 'identified',
    label: 'Telma identificou',
    title: 'Cancelamento',
    lines: ['amanhã'],
    badge: 'Por confirmar',
    related: ['cancelamento', 'amanhã'],
  },
  {
    kind: 'agenda',
    label: 'Na agenda',
    day: 'Amanhã',
    detail: 'Cancelamento pedido',
    status: 'Por confirmar',
    related: ['por confirmar', 'cancelamento'],
  },
]

/** How long each kind of step holds, in ms. A call is read; the rest glanced. */
const HOLD: Record<Step['kind'], number> = { call: 3300, identified: 2700, agenda: 3900, summary: 3600 }

/**
 * The current's rhythm. Between cards it all but stops; when the card changes
 * it surges left and settles again, as if the camera travelled to the next
 * moment. It never fully stops, so it never reads as paused.
 */
const SURGE = {
  /** Seconds the surge lasts, start to settle. */
  duration: 1.1,
  /** Speed between surges, as a fraction of each plane's speed. */
  rest: 0.1,
  /** How far the near plane travels in one surge, as a fraction of the width. */
  reach: 0.28,
}

/** The facts in the current. A caption is optional; most are a single word. */
const BOOKING_FACTS: Scene['facts'] = [
  { text: 'terça-feira' },
  { text: 'de manhã' },
  { text: 'marcação', caption: 'Pedido' },
  { text: 'alteração', caption: 'Pedido' },
  { text: 'cancelamento', caption: 'Pedido' },
  { text: 'por confirmar', caption: 'Estado' },
  { text: 'chamada atendida' },
  { text: 'quinta-feira' },
  { text: 'sexta-feira', caption: 'Quando' },
  { text: 'à tarde' },
  { text: 'amanhã' },
  { text: 'primeira consulta' },
  { text: 'ligar de volta' },
  { text: 'de manhã', caption: 'Quando' },
  { text: 'marcação' },
  { text: 'por confirmar' },
]

/** A few marks with no card at all, so the current is not only boxes. */
const MARKS = ['12 s', '9 s', '7 s', '“', '…', '?']

/**
 * The summary the reception gets after every call (content: "resumo de cada
 * chamada", sent by email or WhatsApp). Two calls, two steps each.
 */
const SUMMARY_STEPS: Step[] = [
  {
    kind: 'call',
    label: 'Chamada',
    quote: 'Bom dia. É a primeira vez que ligo. Queria marcar uma consulta para a próxima semana, de tarde.',
    duration: '24 s',
    related: ['chamada atendida', 'primeira consulta'],
  },
  {
    kind: 'summary',
    label: 'Resumo para a receção',
    title: 'Primeira consulta',
    lines: ['Pedido de marcação', 'Próxima semana, à tarde', 'Por confirmar'],
    channels: ['Email', 'WhatsApp'],
    related: ['resumo', 'email', 'whatsapp', 'à tarde'],
  },
  {
    kind: 'call',
    label: 'Chamada',
    quote: 'Boa tarde. Liguei há pouco e esqueci-me de perguntar a que horas abrem ao sábado.',
    duration: '11 s',
    related: ['chamada atendida', 'pergunta'],
  },
  {
    kind: 'summary',
    label: 'Resumo para a receção',
    title: 'Pergunta respondida',
    lines: ['Horário de sábado', 'Sem marcação'],
    channels: ['Email', 'WhatsApp'],
    related: ['resumo', 'email', 'pergunta'],
  },
]

const SUMMARY_FACTS: Scene['facts'] = [
  { text: 'resumo', caption: 'Para a receção' },
  { text: 'email' },
  { text: 'whatsapp' },
  { text: 'chamada atendida' },
  { text: 'primeira consulta', caption: 'Pedido' },
  { text: 'próxima semana', caption: 'Quando' },
  { text: 'à tarde' },
  { text: 'pergunta', caption: 'Pedido' },
  { text: 'gravação' },
  { text: 'por confirmar', caption: 'Estado' },
  { text: 'resumo' },
  { text: 'sábado' },
]

/**
 * Telma on WhatsApp (the add-on): the client writes, Telma answers, the
 * booking lands in the agenda to be confirmed, as on the phone.
 */
const WHATSAPP_STEPS: Step[] = [
  {
    kind: 'call',
    label: 'WhatsApp · Cliente',
    quote: 'Olá! Dá para marcar para sexta de manhã?',
    duration: '10:42',
    related: ['whatsapp', 'sexta-feira', 'de manhã'],
  },
  {
    kind: 'call',
    label: 'WhatsApp · Telma',
    quote: 'Claro. Tenho às 10:00 ou às 11:30. Qual prefere?',
    duration: '10:42',
    related: ['whatsapp', '10:00', 'mensagem'],
  },
  {
    kind: 'agenda',
    label: 'Na agenda',
    day: 'Sexta-feira',
    detail: '10:00 · pedido por WhatsApp',
    status: 'Por confirmar',
    related: ['por confirmar', 'sexta-feira', 'marcação'],
  },
]

const WHATSAPP_FACTS: Scene['facts'] = [
  { text: 'whatsapp' },
  { text: 'mensagem', caption: 'Canal' },
  { text: 'sexta-feira', caption: 'Quando' },
  { text: 'de manhã' },
  { text: '10:00' },
  { text: 'marcação', caption: 'Pedido' },
  { text: 'por confirmar', caption: 'Estado' },
  { text: 'remarcar' },
  { text: 'cancelar' },
  { text: 'confirmação', caption: 'Por WhatsApp' },
  { text: 'whatsapp' },
  { text: '11:30' },
]

export const SCENES = {
  booking: { steps: BOOKING_STEPS, facts: BOOKING_FACTS },
  summary: { steps: SUMMARY_STEPS, facts: SUMMARY_FACTS },
  whatsapp: { steps: WHATSAPP_STEPS, facts: WHATSAPP_FACTS },
} satisfies Record<string, Scene>

// --- Planes ----------------------------------------------------------------------

type Plane = { speed: number; scale: number; opacity: number; blur: number; z: number }

// Far, middle, near. Nearer is larger, sharper and a little faster: parallax.
const PLANES: Plane[] = [
  { speed: 15, scale: 0.84, opacity: 0.42, blur: 1.6, z: 1 },
  { speed: 24, scale: 0.93, opacity: 0.72, blur: 0.5, z: 2 },
  { speed: 34, scale: 1, opacity: 0.96, blur: 0, z: 3 },
]

const COUNTS = { desktop: [8, 6, 5], mobile: [4, 3, 3] }
const MAX_ITEMS = COUNTS.desktop.reduce((a, b) => a + b, 0)

type Item = {
  el: HTMLDivElement
  caption: HTMLSpanElement
  text: HTMLSpanElement
  plane: number
  active: boolean
  x: number
  y: number
  w: number
  h: number
  speed: number
  phase: number
  key: string
  glow: number
}

// --- Component ---------------------------------------------------------------------

export function TelmaConversationFlow({ scene = SCENES.booking }: { scene?: Scene }) {
  // Read once per mount: a different scene is a different mount (keyed by the
  // tab), so every loop below starts clean on the new material.
  const STEPS = scene.steps
  const FACTS = scene.facts
  const sceneRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const relatedRef = useRef<string[]>(STEPS[0].related)
  const surgeRef = useRef(-1e9)

  const [step, setStep] = useState(0)
  const [phase, setPhase] = useState<'in' | 'out'>('in')

  // --- The card ------------------------------------------------------------------
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  useLayoutEffect(() => {
    const el = contentRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight))
    ro.observe(el)
    setHeight(el.offsetHeight)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    relatedRef.current = STEPS[step].related
  }, [step])

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) {
      // One representative moment, held still.
      setStep(1)
      return
    }
    let swap = 0
    const hold = window.setTimeout(() => {
      // Out: the current content softens; at its softest it is replaced, and
      // the same element resolves back to sharp with the new words in it.
      surgeRef.current = performance.now()
      setPhase('out')
      swap = window.setTimeout(() => {
        setStep((s) => (s + 1) % STEPS.length)
        setPhase('in')
      }, 260)
    }, HOLD[STEPS[step].kind])
    return () => {
      window.clearTimeout(hold)
      window.clearTimeout(swap)
    }
  }, [step])

  // --- The hand ------------------------------------------------------------------
  // On the agenda step a pointer drifts in and presses the status: the person
  // at the clinic confirms, Telma does not. That is the only thing on the card
  // anyone ever touches.
  const buttonRef = useRef<HTMLSpanElement>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [hand, setHand] = useState({ x: 0, y: 0, shown: false, gliding: false, pressed: false })

  useEffect(() => {
    // Leaving: keep the card as it was while it softens, just let go.
    if (phase === 'out') {
      setHand((h) => ({ ...h, shown: false }))
      return
    }
    setConfirmed(false)
    setHand((h) => ({ ...h, shown: false, gliding: false, pressed: false }))
    if (STEPS[step].kind !== 'agenda') return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timers: number[] = []
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms))
    let bx = 0
    let by = 0

    at(380, () => {
      const scene = sceneRef.current?.getBoundingClientRect()
      const btn = buttonRef.current?.getBoundingClientRect()
      if (!scene || !btn) return
      bx = btn.left - scene.left + btn.width * 0.55
      by = btn.top - scene.top + btn.height * 0.55
      // Appear off to the lower right, still, then glide in.
      setHand({ x: bx + 150, y: by + 96, shown: true, gliding: false, pressed: false })
    })
    at(460, () => setHand((h) => ({ ...h, x: bx, y: by, gliding: true })))
    at(1300, () => setHand((h) => ({ ...h, pressed: true })))
    at(1370, () => setConfirmed(true))
    at(1480, () => setHand((h) => ({ ...h, pressed: false })))
    at(2800, () => setHand((h) => ({ ...h, x: h.x + 70, y: h.y + 60, shown: false })))
    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [step, phase])

  // --- The current ---------------------------------------------------------------
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    let W = scene.clientWidth
    let H = scene.clientHeight
    let raf = 0
    let last = 0
    let t = 0
    let visible = true

    const items: Item[] = itemRefs.current.map((el, i) => ({
      el: el!,
      caption: el!.querySelector('[data-caption]') as HTMLSpanElement,
      text: el!.querySelector('[data-text]') as HTMLSpanElement,
      plane: 0,
      active: false,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      speed: 0,
      phase: i * 1.7,
      key: '',
      glow: 0,
    }))

    // Facts are dealt like a shuffled deck, so the same word never turns up
    // twice in a row and the order never visibly repeats.
    let deck: number[] = []
    const draw = () => {
      if (deck.length === 0) {
        deck = FACTS.map((_, i) => i)
        for (let i = deck.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[deck[i], deck[j]] = [deck[j], deck[i]]
        }
      }
      return FACTS[deck.pop()!]
    }

    const dress = (it: Item) => {
      const mark = Math.random() < 0.16
      if (mark) {
        const m = MARKS[Math.floor(Math.random() * MARKS.length)]
        it.el.dataset.kind = 'mark'
        it.caption.textContent = ''
        it.text.textContent = m
        it.key = ''
      } else {
        const f = draw()
        it.el.dataset.kind = 'card'
        it.caption.textContent = f.caption ?? ''
        it.text.textContent = f.text
        it.key = f.text
      }
      it.caption.style.display = it.caption.textContent ? '' : 'none'
      it.w = it.el.offsetWidth
      it.h = it.el.offsetHeight
      it.speed = PLANES[it.plane].speed * (0.88 + Math.random() * 0.24)
    }

    // A height that does not sit on top of another fact of the same plane
    // that is still near the right edge; if every height is taken, wait.
    const place = (it: Item, xMin: number) => {
      const s = PLANES[it.plane].scale
      const pad = 18
      let best = { y: 0, x: Infinity }
      for (let tries = 0; tries < 6; tries++) {
        const y = pad + Math.random() * Math.max(1, H - pad * 2 - it.h * s)
        let x = xMin + Math.random() * 90
        for (const o of items) {
          if (o === it || !o.active || o.plane !== it.plane) continue
          if (Math.abs(o.y - y) < (Math.max(o.h, it.h) * s) + 14) {
            x = Math.max(x, o.x + o.w * PLANES[o.plane].scale + 56)
          }
        }
        if (x < best.x) best = { y, x }
      }
      it.y = best.y
      it.x = best.x
    }

    const layout = () => {
      W = scene.clientWidth
      H = scene.clientHeight
      const counts = W < 640 ? COUNTS.mobile : COUNTS.desktop
      let i = 0
      counts.forEach((n, plane) => {
        for (let k = 0; k < n; k++, i++) {
          const it = items[i]
          it.plane = plane
          it.active = true
          it.el.style.display = ''
          const p = PLANES[plane]
          it.el.style.zIndex = String(p.z)
          it.el.style.filter = p.blur ? `blur(${p.blur}px)` : ''
          dress(it)
        }
      })
      for (; i < items.length; i++) {
        items[i].active = false
        items[i].el.style.display = 'none'
      }
      // Start mid-flow: spread across the whole width, not queued off-screen.
      for (const it of items) {
        if (!it.active) continue
        place(it, -it.w + Math.random() * (W + it.w))
      }
    }

    const write = (it: Item) => {
      const p = PLANES[it.plane]
      const drift = Math.sin(t * 0.35 + it.phase) * (2 + it.plane * 1.5)
      const scale = p.scale * (1 + 0.05 * it.glow)
      const opacity = Math.min(1, p.opacity + (1 - p.opacity) * 0.8 * it.glow)
      it.el.style.transform = `translate3d(${it.x.toFixed(2)}px, ${(it.y + drift).toFixed(2)}px, 0) scale(${scale.toFixed(4)})`
      it.el.style.opacity = opacity.toFixed(3)
    }

    const frame = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60
      last = now
      t += dt
      const related = relatedRef.current
      const cx = W / 2
      // Surge profile: a quick swell and a long settle (sin² on a skewed clock).
      const u = (now - surgeRef.current) / 1000 / SURGE.duration
      let m = SURGE.rest
      if (u >= 0 && u < 1) {
        const peak = (SURGE.reach * W) / (PLANES[2].speed * SURGE.duration * 0.5)
        const b = Math.sin(Math.PI * Math.pow(u, 0.7))
        m += peak * b * b
      }
      for (const it of items) {
        if (!it.active) continue
        it.x -= it.speed * m * dt
        if (it.x + it.w * PLANES[it.plane].scale < -24) {
          dress(it)
          place(it, W + 24)
        }
        // Facts that belong to what the card is saying lift a little as they
        // pass behind it, and settle again once past.
        const mid = it.x + (it.w * PLANES[it.plane].scale) / 2
        const near = Math.max(0, 1 - Math.abs(mid - cx) / (W * 0.32))
        const target = related.includes(it.key) ? near * near * (3 - 2 * near) : 0
        it.glow += (target - it.glow) * (1 - Math.exp(-dt * 3))
        write(it)
      }
      raf = visible ? requestAnimationFrame(frame) : 0
    }

    layout()
    for (const it of items) if (it.active) write(it)

    if (reduced.matches) return

    const play = () => {
      if (raf || !visible || document.hidden) return
      last = 0
      raf = requestAnimationFrame(frame)
    }
    const pause = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      if (visible) play()
      else pause()
    })
    io.observe(scene)

    let lastW = W
    const ro = new ResizeObserver(() => {
      const w = scene.clientWidth
      // Crossing the phone breakpoint changes the cast; otherwise just adopt
      // the new size and let the current carry on.
      if ((w < 640) !== (lastW < 640)) layout()
      W = w
      H = scene.clientHeight
      lastW = w
    })
    ro.observe(scene)

    const onVisibility = () => (document.hidden ? pause() : play())
    document.addEventListener('visibilitychange', onVisibility)

    play()
    return () => {
      pause()
      io.disconnect()
      ro.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const s = STEPS[step]

  return (
    <div
      ref={sceneRef}
      className="relative h-[26rem] overflow-hidden rounded-card border border-line bg-surface-sunken sm:h-[28rem] lg:h-[31rem]"
    >
      {/* The current. Faded at both ends, so facts arrive and leave rather
          than being cut by the frame. */}
      <div
        aria-hidden
        className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_9%,black_91%,transparent)]"
      >
        {Array.from({ length: MAX_ITEMS }, (_, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el
            }}
            className="group absolute left-0 top-0 flex origin-left flex-col gap-0.5 whitespace-nowrap will-change-transform data-[kind=card]:rounded-[10px] data-[kind=card]:border data-[kind=card]:border-line data-[kind=card]:bg-surface data-[kind=card]:px-3.5 data-[kind=card]:py-2 data-[kind=card]:shadow-[0_8px_24px_-16px_rgba(17,24,39,0.2)]"
            style={{ opacity: 0 }}
          >
            <span data-caption className="text-label font-medium uppercase text-ink-mute" />
            <span data-text className="text-sm text-ink-soft group-data-[kind=mark]:text-[1.375rem] group-data-[kind=mark]:font-medium group-data-[kind=mark]:text-line-strong" />
          </div>
        ))}
      </div>

      {/* The pointer. Decorative: the scene is not interactive. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20"
        style={{
          transform: `translate3d(${hand.x}px, ${hand.y}px, 0)`,
          opacity: hand.shown ? 1 : 0,
          transition: hand.gliding
            ? 'transform 800ms cubic-bezier(0.45, 0, 0.15, 1), opacity 260ms ease'
            : 'opacity 320ms ease',
        }}
      >
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          className="drop-shadow-[0_2px_3px_rgba(17,24,39,0.18)] transition-transform duration-150 ease-out"
          style={{ transform: hand.pressed ? 'scale(0.86)' : 'scale(1)', transformOrigin: '2px 2px' }}
        >
          <path
            d="M2 1.5 L2 17.5 L6.4 13.6 L9.3 20.2 L12.2 18.9 L9.4 12.5 L15.2 12.3 Z"
            fill="rgb(17 24 39)"
            stroke="white"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* The card: what Telma understood. Fixed width, height eased between
          states, absolutely centred, so nothing outside the scene ever moves. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[min(25rem,calc(100%-2.5rem))] -translate-x-1/2 -translate-y-1/2">
        <div
          className="overflow-hidden rounded-card border border-line bg-surface shadow-[0_1px_2px_rgba(17,24,39,0.03),0_28px_64px_-32px_rgba(17,24,39,0.22)] transition-[height] duration-[560ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
          style={height === null ? undefined : { height }}
        >
          <div ref={contentRef}>
            <div
              aria-live="polite"
              className="px-7 py-6 transition-[opacity,filter,transform] ease-[cubic-bezier(0.22,0.61,0.36,1)] sm:px-8 sm:py-7"
              style={
                phase === 'out'
                  ? { opacity: 0.12, filter: 'blur(6px)', transform: 'translateY(-3px)', transitionDuration: '260ms' }
                  : { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)', transitionDuration: '440ms' }
              }
            >
              <CardBody step={s} confirmed={confirmed} pressed={hand.pressed} buttonRef={buttonRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardBody({
  step,
  confirmed,
  pressed,
  buttonRef,
}: {
  step: Step
  confirmed: boolean
  pressed: boolean
  buttonRef: React.RefObject<HTMLSpanElement | null>
}) {
  return (
    <>
      <span className="text-label font-medium uppercase text-ink-mute">{step.label}</span>

      {step.kind === 'call' && (
        <>
          <p className="mt-5 text-[1.25rem] leading-[1.45] tracking-tight text-ink">
            “{step.quote}”
          </p>
          <p className="mt-6 text-sm tabular-nums text-ink-mute">{step.duration}</p>
        </>
      )}

      {step.kind === 'identified' && (
        <>
          <p className="mt-5 text-[1.5rem] font-medium leading-tight tracking-tight text-ink">
            {step.title}
          </p>
          <ul className="mt-3 space-y-1 text-body-lg text-ink-soft">
            {step.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <Badge className="mt-6">{step.badge}</Badge>
        </>
      )}

      {step.kind === 'summary' && (
        <>
          <p className="mt-5 text-[1.5rem] font-medium leading-tight tracking-tight text-ink">
            {step.title}
          </p>
          <ul className="mt-3 space-y-1 text-body-lg text-ink-soft">
            {step.lines.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {step.channels.map((ch) => (
              <span key={ch} className="rounded-pill border border-line-strong px-3 py-1 text-sm text-ink-soft">
                {ch}
              </span>
            ))}
          </div>
        </>
      )}

      {step.kind === 'agenda' && (
        <>
          <p className="mt-5 text-[1.5rem] font-medium leading-tight tracking-tight text-ink">
            {step.day}
          </p>
          <p className="mt-1 text-body-lg text-ink-soft">{step.detail}</p>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
            <span className="text-sm text-ink-mute">Estado</span>
            <span
              ref={buttonRef}
              className={`inline-flex items-center gap-1.5 rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                confirmed
                  ? 'border-accent bg-accent text-ink'
                  : 'border-line-strong bg-surface text-ink'
              }`}
              style={{ transform: pressed ? 'scale(0.96)' : 'scale(1)' }}
            >
              {confirmed && <Check size={14} strokeWidth={2} aria-hidden />}
              {confirmed ? 'Confirmado' : step.status}
            </span>
          </div>
        </>
      )}
    </>
  )
}

function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-pill bg-brand-wash px-3 py-1 text-sm font-medium text-brand ${className}`}
    >
      {children}
    </span>
  )
}
