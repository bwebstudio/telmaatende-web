import { IN_OUT, type Key } from './timeline'

/**
 * THE SEQUENCE, IN SECONDS.
 *
 *   0.2   the call bar surfaces
 *   0.9   the client speaks, phrase by phrase
 *   2.6   the conversation climbs; Telma answers
 *   4.2   it climbs again; the client answers
 *   5.6   the conversation draws back to the left
 *   6.7   everything but what matters dims; the facts surface beside it
 *   7.9   the camera pulls back: the call, small, in the middle of the system
 *  10.8   the camera pushes in; the facts gather into one entry
 *  13.6   the agenda arrives under the entry, and the entry settles into it
 *  16.4   everything but that row recedes; it breathes
 *  17.8   the scene dissolves, and the next call can begin
 *  19.0   loop
 *
 * Coordinates are pixels from the centre of the stage, in "world" space: the
 * camera scales the world, so the system around the call is only in frame
 * when the camera pulls back. Every element's last key equals its first, so
 * the loop closes without a seam.
 */
export const LOOP = 19

export type Tracks = Record<string, Key[]>

// The facts beside the conversation, and which fragments they came from.
export const CHIPS = ['Marcação', 'terça-feira', 'manhã', '~10:00']

// Periphery: what surrounds a call inside Telma. Position, depth (0 sharp,
// 1 mid, 2 far), and which phone layout keeps it.
export const PERIPHERY: { x: number; y: number; depth: number; mobile?: [number, number] }[] = [
  { x: -480, y: -270, depth: 1, mobile: [-185, -255] },
  { x: 470, y: -300, depth: 2, mobile: [185, -250] },
  { x: -540, y: 70, depth: 0 },
  { x: 540, y: 110, depth: 1 },
  { x: -330, y: 380, depth: 2, mobile: [-180, 250] },
  { x: 350, y: 390, depth: 0, mobile: [180, 245] },
  { x: -60, y: -450, depth: 2 },
  { x: 130, y: 460, depth: 1 },
  { x: -230, y: -400, depth: 0 },
  { x: 420, y: -40, depth: 2 },
]

const DEPTH = [
  { o: 0.9, b: 0 },
  { o: 0.6, b: 1.2 },
  { o: 0.38, b: 2.6 },
]

/** A fragment of speech: unseen, then arriving softly, then held. */
function phrase(at: number, dimAt: number | null, keepBright: boolean): Key[] {
  const k: Key[] = [
    { t: 0, o: 0, b: 4 },
    { t: at, o: 0, b: 4 },
    { t: at + 0.35, o: 0.38, b: 0 },
    { t: at + 0.95, o: 1 },
  ]
  if (dimAt !== null && !keepBright) k.push({ t: dimAt, o: 1 }, { t: dimAt + 0.6, o: 0.28 })
  k.push({ t: 14.6, o: keepBright ? 1 : 0.28 }, { t: 15.0, o: 0, b: 4 })
  return k
}

export function choreography(mobile: boolean): Tracks {
  const m = mobile
  const T: Tracks = {}

  // --- Camera ----------------------------------------------------------------
  // Starts close on the call: a detail shot, words large enough to read as
  // speech. Draws back as the conversation becomes information.
  const close = m ? 1 : 1.24
  T.camera = [
    { t: 0, s: close, o: 1 },
    { t: 5.6, s: close },
    { t: 6.8, s: m ? 0.97 : 0.94 },
    { t: 7.9, s: m ? 0.97 : 0.94 },
    { t: 9.2, s: m ? 0.8 : 0.66, e: IN_OUT },
    { t: 10.8, s: m ? 0.79 : 0.64, e: IN_OUT },
    { t: 12.1, s: m ? 0.97 : 0.92, e: IN_OUT },
    { t: 13.6, s: m ? 0.97 : 0.92 },
    { t: 14.8, s: 1, e: IN_OUT },
    { t: 17.6, s: 1.02, e: IN_OUT },
    { t: 18.8, s: close, e: IN_OUT },
  ]

  // --- The conversation --------------------------------------------------------
  // Each card: where it lives in each phase. Later cards push earlier ones up;
  // in the identification phase the whole exchange draws back and shrinks.
  const side = m ? 0 : 1
  const convX = m ? 0 : -150
  const convS = m ? 0.8 : 0.86
  const fadeTo = (x: number, y: number): Key[] => [
    { t: 10.9 },
    { t: 11.9, o: 0.22, b: 2.2, x, y },
    { t: 13.6, o: 0.22 },
    { t: 14.6, o: 0, b: 6 },
  ]

  T.bar = [
    { t: 0.2, o: 0, y: m ? -80 : -55, b: 8, s: 0.98 },
    { t: 1.0, o: 1, y: m ? -90 : -70, b: 0, s: 1 },
    { t: 2.6 },
    { t: 3.4, y: m ? -235 : -210 },
    { t: 4.2 },
    { t: 5.0, y: m ? -265 : -250, o: 0.85 },
    { t: 5.6 },
    { t: 6.6, x: convX, y: m ? -250 : -230, s: convS, o: 0.9 },
    ...fadeTo(m ? 0 : -255, m ? -270 : -215),
  ]

  T.m1 = [
    { t: 0.9, o: 0, y: m ? 12 : 32, b: 8, x: 20 * side },
    { t: 1.7, o: 1, y: m ? 0 : 20, b: 0 },
    { t: 2.6 },
    { t: 3.4, y: m ? -140 : -110 },
    { t: 4.2, o: 1, b: 0 },
    { t: 5.0, y: m ? -175 : -150, o: 0.55, b: 0.8 },
    { t: 5.6 },
    { t: 6.6, x: convX + 20 * side, y: m ? -168 : -130, s: convS, o: 1, b: 0 },
    ...fadeTo(m ? 0 : -235, m ? -195 : -125),
  ]

  T.t1 = [
    { t: 2.9, o: 0, y: m ? 42 : 72, b: 8, x: -20 * side },
    { t: 3.7, o: 1, y: m ? 30 : 60, b: 0 },
    { t: 4.2 },
    { t: 5.0, y: m ? -45 : -10, o: 0.65, b: 0.6 },
    { t: 5.6 },
    { t: 6.6, x: convX - 20 * side, y: m ? -70 : -10, s: convS, o: 1, b: 0 },
    ...fadeTo(m ? 0 : -275, m ? -120 : -10),
  ]

  T.m2 = [
    { t: 4.4, o: 0, y: m ? 82 : 122, b: 8, x: 20 * side },
    { t: 5.2, o: 1, y: m ? 70 : 110, b: 0 },
    { t: 5.6 },
    { t: 6.6, x: convX + 20 * side, y: m ? 25 : 110, s: convS },
    ...fadeTo(m ? 0 : -235, m ? -45 : 95),
  ]

  // --- Speech, phrase by phrase ---------------------------------------------------
  // Dimmed at 6.7, except the words the facts come from.
  const DIM = 6.7
  ;[1.05, 1.4, 1.75, 2.1, 2.45].forEach((at, i) => {
    T[`m1_${i}`] = phrase(at, DIM, i === 2 || i === 3)
  })
  ;[3.05, 3.45].forEach((at, i) => {
    T[`t1_${i}`] = phrase(at, DIM, false)
  })
  ;[4.95, 5.3].forEach((at, i) => {
    T[`m2_${i}`] = phrase(at, DIM, i === 0)
  })

  // --- The facts ---------------------------------------------------------------------
  // They surface beside the words they came from (on phones, beneath the
  // exchange), hold through the pull-back, then gather into the entry.
  const chipPos: [number, number][] = m
    ? [[-62, 120], [62, 120], [-62, 168], [62, 168]]
    : [[205, -180], [205, -132], [205, -84], [205, 110]]
  const entry: [number, number] = m ? [0, 40] : [80, 20]
  chipPos.forEach(([x, y], i) => {
    const at = 6.95 + i * 0.3
    T[`chip${i}`] = [
      { t: 0, o: 0, x: x - (m ? 0 : 40), y: y + (m ? 12 : 0), b: 6, s: 0.96 },
      { t: at, o: 0, x: x - (m ? 0 : 40), y: y + (m ? 12 : 0), b: 6, s: 0.96 },
      { t: at + 0.8, o: 1, x, y, b: 0, s: 1 },
      { t: 10.9 },
      { t: 12.0, o: 0, x: entry[0], y: entry[1], s: 0.9, b: 3 },
      { t: 18.9, o: 0, x: x - (m ? 0 : 40), y: y + (m ? 12 : 0), b: 6, s: 0.96 },
    ]
  })

  // --- The periphery -----------------------------------------------------------------
  PERIPHERY.forEach((p, i) => {
    const pos = m ? p.mobile : [p.x, p.y]
    if (!pos) return
    const d = DEPTH[p.depth]
    const at = 8.1 + i * 0.09
    T[`peri${i}`] = [
      { t: 0, o: 0, x: pos[0], y: pos[1], s: 0.92, b: d.b + 4 },
      { t: at, o: 0 },
      { t: at + 1.2, o: d.o, s: 1, b: d.b },
      { t: 10.8, o: d.o },
      { t: 11.9, o: d.o * 0.35 },
      { t: 13.4, o: 0, b: d.b + 4, s: 0.96 },
    ]
  })

  // --- The entry ------------------------------------------------------------------
  // Born from the facts, then carried into the agenda: it shrinks towards the
  // 10:00 row and hands over to it.
  const rowY = m ? 36 : 38
  T.booking = [
    { t: 0, o: 0, x: entry[0], y: entry[1] + 14, s: 0.96, b: 8 },
    { t: 11.3, o: 0 },
    { t: 12.3, o: 1, y: entry[1], s: 1, b: 0 },
    { t: 14.0 },
    { t: 15.2, x: 0, y: rowY, s: m ? 0.86 : 0.78 },
    { t: 15.75, o: 0, b: 2 },
    { t: 18.9, o: 0, x: entry[0], y: entry[1] + 14, s: 0.96, b: 8 },
  ]

  // --- The agenda ------------------------------------------------------------------
  T.dash = [
    { t: 0, o: 0, y: 26, s: 0.97, b: 8 },
    { t: 13.6, o: 0 },
    { t: 14.6, o: 1, y: 0, s: 1, b: 0 },
    { t: 17.8 },
    { t: 18.7, o: 0, y: -6, s: 0.985, b: 6 },
  ]
  // Everything in the agenda but the new row: it recedes at the end.
  T.dashRest = [
    { t: 0, o: 1 },
    { t: 16.4, o: 1 },
    { t: 17.2, o: 0.22 },
    { t: 18.7, o: 0.22 },
    { t: 18.95, o: 1 },
  ]
  // The new row: it arrives as the entry lands, and is the last thing left.
  T.dashRow = [
    { t: 0, o: 0, b: 4 },
    { t: 15.2, o: 0, b: 4 },
    { t: 15.9, o: 1, b: 0 },
    { t: 18.7, o: 1, b: 0 },
    { t: 18.95, o: 0, b: 4 },
  ]

  return T
}
