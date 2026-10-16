/**
 * THE MARK.
 *
 * Three bars, left-flush, each one roughly 1.85 times the next. That is the
 * paragraph the rest of the brand is made of, taken down to the three lines
 * that still read at sixteen pixels.
 *
 * This is the still mark and nothing else: a logotype has to be the same shape
 * in a favicon, in an email signature and on a machine that runs no scripts.
 * The sequence where it assembles out of its own letters lives in
 * components/ui/TelmaSettle, which is a canvas, because the letters have to be
 * counted in thousands to look like the field in the hero and that is not
 * something to ask of animated DOM nodes.
 *
 * ── WHY THE GAP IS 0.62 AND NOT 0.35 ───────────────────────────────────────
 * Drawn tight, the three rounded left ends stack into a vertical stroke and
 * the whole thing reads as a letter F, which is a problem for a brand called
 * Telma. Measured in the lockup: at 0.35 it is unmistakably an F, at 0.88 it
 * stops being a letter at all but goes soft at favicon size. 0.62 is where it
 * stops reading as F while the three bars still separate at sixteen pixels.
 */

/** Bar height is the unit. Widths and the gap are multiples of it. */
const U = 100
const GAP = 62
export const MARK_WIDTHS = [556, 294, 162]
const VW = MARK_WIDTHS[0]
const VH = U * 3 + GAP * 2

export function TelmaMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} className={className} fill="currentColor" aria-hidden>
      {MARK_WIDTHS.map((w, i) => (
        <rect key={i} x={0} y={i * (U + GAP)} width={w} height={U} rx={U / 2} />
      ))}
    </svg>
  )
}
