/**
 * A very small timeline. Every animated element has one track: a list of
 * keyframes in seconds, each setting some of x, y, scale, opacity and blur.
 * Unset properties carry over from the previous key, so a track only says
 * what changes. One clock samples every track, so the whole scene stays in
 * step to the frame, and nothing here allocates while it plays.
 */

export type Props = { x: number; y: number; s: number; o: number; b: number }
export type Ease = (t: number) => number
export type Key = { t: number } & Partial<Props> & { e?: Ease }
type Compiled = { t: number; p: Props; e: Ease }[]

/** CSS-style cubic-bezier, solved for x with Newton steps then bisection. */
export function bezier(x1: number, y1: number, x2: number, y2: number): Ease {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const sx = (t: number) => ((ax * t + bx) * t + cx) * t
  const sy = (t: number) => ((ay * t + by) * t + cy) * t
  const dx = (t: number) => (3 * ax * t + 2 * bx) * t + cx
  return (x: number) => {
    if (x <= 0) return 0
    if (x >= 1) return 1
    let t = x
    for (let i = 0; i < 6; i++) {
      const err = sx(t) - x
      if (Math.abs(err) < 1e-5) return sy(t)
      const d = dx(t)
      if (Math.abs(d) < 1e-6) break
      t -= err / d
    }
    let lo = 0, hi = 1
    t = x
    for (let i = 0; i < 20; i++) {
      const v = sx(t)
      if (Math.abs(v - x) < 1e-5) break
      if (v < x) lo = t
      else hi = t
      t = (lo + hi) / 2
    }
    return sy(t)
  }
}

/** The house curve: a long, quiet settle, no overshoot. */
export const OUT = bezier(0.22, 1, 0.36, 1)
/** For the camera: leaves gently, arrives gently. */
export const IN_OUT = bezier(0.65, 0, 0.35, 1)

const DEFAULT: Props = { x: 0, y: 0, s: 1, o: 0, b: 0 }

/**
 * Fills each key from the one before it, and closes the loop: the track's
 * last key at `length` repeats its first, so the end of one loop is exactly
 * the start of the next.
 */
export function compile(keys: Key[], length: number): Compiled {
  const out: Compiled = []
  let prev: Props = { ...DEFAULT }
  for (const k of [...keys].sort((a, b) => a.t - b.t)) {
    const p: Props = {
      x: k.x ?? prev.x,
      y: k.y ?? prev.y,
      s: k.s ?? prev.s,
      o: k.o ?? prev.o,
      b: k.b ?? prev.b,
    }
    out.push({ t: k.t, p, e: k.e ?? OUT })
    prev = p
  }
  if (out.length === 0) out.push({ t: 0, p: { ...DEFAULT }, e: OUT })
  const first = out[0]
  if (first.t > 0) out.unshift({ t: 0, p: { ...first.p }, e: OUT })
  if (out[out.length - 1].t < length) out.push({ t: length, p: { ...out[0].p }, e: OUT })
  return out
}

/** Writes the track's value at time t into `into`. */
export function sample(track: Compiled, t: number, into: Props) {
  let i = 0
  while (i < track.length - 1 && track[i + 1].t <= t) i++
  const a = track[i]
  const b = track[Math.min(i + 1, track.length - 1)]
  if (a === b || b.t === a.t) {
    Object.assign(into, a.p)
    return
  }
  const u = b.e((t - a.t) / (b.t - a.t))
  into.x = a.p.x + (b.p.x - a.p.x) * u
  into.y = a.p.y + (b.p.y - a.p.y) * u
  into.s = a.p.s + (b.p.s - a.p.s) * u
  into.o = a.p.o + (b.p.o - a.p.o) * u
  into.b = a.p.b + (b.p.b - a.p.b) * u
}
