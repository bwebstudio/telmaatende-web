import { PARA_LINES, lineIndent, lineRight } from '@/lib/paragraph'

/**
 * The cover of a piece of writing, drawn rather than photographed.
 *
 * ── WHY IT IS GENERATED AND NOT A FILE ─────────────────────────────────────
 * A cover made in a drawing tool is a file somebody has to make, name, export
 * and remember, and the fifth one is always worse than the first. This one is
 * made of the article's own data, so a new piece arrives with its cover the
 * same way it arrives with its title.
 *
 * ── THE TWO KINDS, AND WHY THE DIFFERENCE IS NOT DECORATIVE ────────────────
 * A guide is a reference you come back to, so its cover shows a document with
 * the title set on it. An article is read once, straight through, and drawing
 * a little PDF for it would be a claim about the format that is not true.
 *
 * It used to get the field and the sheet and nothing else, and read as an
 * empty panel beside a guide's white page: a sheet of lines is a texture, and
 * a texture has no focal point. What fills it is a photograph of the thing the
 * piece is about, laid under the ground rather than on it.
 *
 * ── THE PHOTOGRAPH IS UNDER THE COLOUR, NOT ON IT ──────────────────────────
 * Desaturated and multiplied into the field, so what comes through is the
 * ground's own colour in light and shade. A photograph pasted on top at low
 * opacity reads as a grey rectangle someone forgot to finish; multiplied, it
 * reads as the colour having a picture in it. The ground stays the ground,
 * which is what keeps five covers looking like one set.
 *
 * The covers used to alternate between a drawn document and a stock
 * photograph, picked by position in the list. That made the row look like two
 * websites, and it told the reader nothing.
 *
 * ── THE SHEET IS THE HERO'S SHEET ──────────────────────────────────────────
 * Every cover carries the paragraph from lib/paragraph, projected onto a plane
 * running away from the viewer. The hero sets the same text in live letters.
 * One rule, two surfaces, which is the whole reason this reads as a brand and
 * not as a set of nice pictures.
 */

const W = 1000
const H = 800 // 5:4, the aspect the cards reserve

/**
 * Five grounds, cycled by position. The site's body is deliberately quiet
 * because it is selling; this row is not selling anything, so it is where the
 * palette gets spent.
 *
 * ── ONE HUE EACH, AND THEY ARE TOKENS ──────────────────────────────────────
 * The palette has four ramps, so the row uses four: near-black, macaw, red,
 * blue and purple, no hue twice. These name the ramp tokens rather than hexes,
 * so re-pointing a ramp in globals.css moves the covers with everything else.
 * Hard-coding a colour here would be the one way to guarantee the covers
 * contradict the page they sit on.
 *
 * Each ground carries the ink its sheet is drawn in, because a pale page on
 * black and a dark page on lilac are the same object lit differently, not two
 * decisions.
 *
 * The two article grounds carry the sheet at roughly twice the strength of
 * the ones under a document, and that is not a tweak. A guide's cover has a
 * white page on it to hold the eye; an article's has only the sheet, so at
 * the strength that reads as texture behind an object it reads as an empty
 * panel on its own.
 *
 * The order is not arbitrary either. The pieces alternate guide, article,
 * guide, so the grounds under a document (0, 2, 4) are the ones a white page
 * can sit on and be seen, and the two articles get the two that differ most
 * from each other: one saturated, one almost paper.
 */
const FIELDS = [
  { bg: 'rgb(var(--dark))', sheet: 'rgb(var(--bg))', sheetAlpha: 0.22, strip: 'rgb(var(--macaw))', on: 'rgb(var(--bg))' },
  { bg: 'rgb(var(--macaw))', sheet: 'rgb(var(--ink))', sheetAlpha: 0.42, strip: 'rgb(var(--macaw-100))', on: 'rgb(var(--ink))' },
  { bg: 'rgb(var(--red))', sheet: 'rgb(var(--bg))', sheetAlpha: 0.3, strip: 'rgb(var(--purple))', on: 'rgb(var(--ink))' },
  { bg: 'rgb(var(--blue-100))', sheet: 'rgb(var(--blue-400))', sheetAlpha: 0.72, strip: 'rgb(var(--blue-200))', on: 'rgb(var(--ink))' },
  { bg: 'rgb(var(--purple))', sheet: 'rgb(var(--bg))', sheetAlpha: 0.3, strip: 'rgb(var(--blue))', on: 'rgb(var(--ink))' },
]

/**
 * Where the camera stands, per position.
 *
 * Without this every cover is the same photograph of the same page, and five
 * of them in a row look like a pattern rather than like five pieces of
 * writing. The two articles are the ones that show the most sheet, so they get
 * the two most different viewpoints: one low and swung left, one high, far
 * over to the right and nearly flat.
 */
const CAMERAS = [
  { swing: -90, horizon: 90, height: 5.4 },
  { swing: -40, horizon: 160, height: 4.4 },
  { swing: 120, horizon: 70, height: 5.8 },
  { swing: 300, horizon: 250, height: 3.4 },
  { swing: -170, horizon: 110, height: 5.0 },
]

/**
 * The paragraph, on a plane that recedes.
 *
 * Flat, a line is a bar, and a stack of bars is the loading state of every
 * website ever built. Tilted, the same bars are a page seen from where somebody
 * is sitting. The projection is the plain one: everything is scaled by its
 * distance, so the near lines are enormous and leave the frame, and the far
 * ones converge on the horizon and die there.
 */
function sheetLines({
  lines,
  first,
  cx,
  horizon,
  camHeight,
  camDistance,
  measure,
  focal = 900,
  lineHeight = 0.55,
  inkHeight = 0.17,
  near = 1,
  far = 0,
  gamma = 0.5,
}: {
  lines: number
  first: number
  cx: number
  horizon: number
  camHeight: number
  camDistance: number
  measure: number
  focal?: number
  lineHeight?: number
  inkHeight?: number
  near?: number
  far?: number
  gamma?: number
}) {
  const out: { points: string; opacity: number }[] = []
  for (let k = 0; k < lines; k++) {
    const i = first + k
    const v = k * lineHeight
    const t = k / Math.max(1, lines - 1)
    const opacity = near + (far - near) * t ** gamma
    if (opacity <= 0.02) continue

    const sNear = focal / (v + camDistance)
    const sFar = focal / (v + inkHeight + camDistance)
    const yNear = horizon + camHeight * sNear
    const yFar = horizon + camHeight * sFar
    const x0 = (lineIndent(i) - 0.5) * measure
    const x1 = (lineRight(i) - 0.5) * measure

    out.push({
      opacity,
      points: [
        `${(cx + x0 * sNear).toFixed(1)},${yNear.toFixed(1)}`,
        `${(cx + x1 * sNear).toFixed(1)},${yNear.toFixed(1)}`,
        `${(cx + x1 * sFar).toFixed(1)},${yFar.toFixed(1)}`,
        `${(cx + x0 * sFar).toFixed(1)},${yFar.toFixed(1)}`,
      ].join(' '),
    })
  }
  // Far first, so a near line overlaps the one behind it and not the reverse.
  return out.reverse()
}

/**
 * Break a title into lines for the document.
 *
 * SVG will not wrap text, and measuring it properly would mean laying the font
 * out before paint. An average advance is enough here: the column is wide, the
 * titles are short, and a line that lands one character long costs nothing.
 */
function wrap(text: string, perLine: number) {
  const lines: string[] = []
  let line = ''
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > perLine) {
      lines.push(line)
      line = word
    } else {
      line = line ? line + ' ' + word : word
    }
  }
  if (line) lines.push(line)
  return lines
}

export function ArticleCover({
  index,
  format,
  kind,
  title,
  image,
}: {
  /** Position in the row. It picks the ground and the camera, so two covers
   *  beside each other are never the same picture. */
  index: number
  format: 'guide' | 'article'
  /** The word the reader sees for this format, already translated. */
  kind: string
  title: string
  /** Optional photograph, laid under the ground. */
  image?: string
}) {
  const field = FIELDS[index % FIELDS.length]
  const guide = format === 'guide'

  // A guide's sheet starts further to one side, because a document is about to
  // be laid over the middle of it and whatever is under there is wasted.
  const camera = CAMERAS[index % CAMERAS.length]
  const lines = sheetLines({
    lines: PARA_LINES * 2,
    first: 3 + index * 7,
    cx: (guide ? 210 : 520) + camera.swing,
    horizon: camera.horizon,
    camHeight: camera.height,
    camDistance: 6.6,
    measure: guide ? 14 : 11.5,
    near: 1,
    far: 0.04,
    gamma: 0.45,
  })

  const titleLines = wrap(title, 26)
  const docTop = 178
  const docLeft = 150
  const columnLeft = docLeft + 56
  const columnWidth = 520
  const titleTop = docTop + 196
  const bodyTop = titleTop + titleLines.length * 50 + 34

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      // Composed at 5:4 for the card and cropped, never letterboxed, when the
      // slot is wider: the article page runs the same cover at 2:1, which is
      // exactly the band that still contains the whole document.
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      role="presentation"
      aria-hidden
    >
      <defs>
        {/* Saturation out: the photograph lends its light and shade, never
            its own colour, which would fight the ground. */}
        <filter id={`cover-grey-${index}`}>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <filter id="cover-lift" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="26" stdDeviation="26" floodColor="#0B1F1C" floodOpacity="0.22" />
        </filter>
      </defs>
      <rect width={W} height={H} style={{ fill: field.bg }} />

      {image && (
        <image
          href={image}
          width={W}
          height={H}
          preserveAspectRatio="xMidYMid slice"
          filter={`url(#cover-grey-${index})`}
          style={{ mixBlendMode: 'multiply', opacity: 0.55 }}
        />
      )}

      {/* The page itself. It lifts a little when the card is hovered, which is
          the same move the hero's field makes: the text drifting away. */}
      <g
        className="transition-transform duration-slow ease-calm group-hover:-translate-y-1.5"
        style={{ fill: field.sheet }}
      >
        {lines.map((line, i) => (
          <polygon key={i} points={line.points} opacity={line.opacity * field.sheetAlpha} />
        ))}
      </g>

      {guide && (
        // Past the right edge on purpose. A document that fits inside the frame
        // reads as a thumbnail of a document; one the frame cuts reads as an
        // object that happens to be lying there.
        <g filter="url(#cover-lift)">
          <rect
            x={docLeft}
            y={docTop}
            width={W - docLeft + 72}
            height={H - docTop - 150}
            rx={10}
            style={{ fill: 'rgb(var(--surface))' }}
          />
          <rect
            x={760}
            y={docTop}
            width={W - 760 + 72}
            height={H - docTop - 150}
            style={{ fill: field.strip }}
          />
          <text
            x={columnLeft}
            y={docTop + 72}
            fontSize={30}
            fontWeight={500}
            letterSpacing={-0.4}
            style={{ fill: 'rgb(var(--ink))' }}
          >
            Telma
          </text>
          <text
            x={columnLeft}
            y={docTop + 140}
            fontSize={20}
            letterSpacing={2.6}
            className="font-mono uppercase"
            style={{ fill: 'rgb(var(--ink-mute))' }}
          >
            {kind}
          </text>
          {titleLines.map((line, i) => (
            <text
              key={line}
              x={columnLeft}
              y={titleTop + i * 50}
              fontSize={40}
              letterSpacing={-0.8}
              style={{ fill: 'rgb(var(--ink))' }}
            >
              {line}
            </text>
          ))}
          {/* Four lines of the same paragraph, as the document's contents. */}
          {[0, 1, 2].map((k) => {
            const i = 40 + index * 5 + k
            return (
              <rect
                key={k}
                x={columnLeft + lineIndent(i) * columnWidth}
                y={bodyTop + k * 26}
                width={(lineRight(i) - lineIndent(i)) * columnWidth}
                height={8}
                rx={4}
                style={{ fill: 'rgb(var(--ink))' }}
                opacity={0.1}
              />
            )
          })}
        </g>
      )}
    </svg>
  )
}
