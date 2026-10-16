import { ImageResponse } from 'next/og'
import { MARK_WIDTHS } from '@/components/ui/TelmaMark'

/**
 * THE iOS ICON.
 *
 * Generated rather than drawn, for one reason: the bar widths live in
 * TelmaMark and nowhere else, so the home-screen icon cannot drift away from
 * the mark in the header the way a hand-exported PNG eventually does.
 *
 * Green ground, black mark — the inverse of the panel's icon, which is the
 * distinction the two products are meant to carry. app/icon.svg draws the same
 * thing for browsers; iOS is the one place that still refuses an SVG.
 *
 * The mark sits on 62% of the canvas width, the same proportion the 512px SVG
 * uses. No rounded corners here: iOS masks the square itself, and a shape that
 * arrives pre-rounded gets rounded twice.
 */
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const SCALE = (size.width * 0.62) / MARK_WIDTHS[0]
const BAR = 100 * SCALE
const GAP = 62 * SCALE

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: GAP,
          paddingLeft: (size.width - MARK_WIDTHS[0] * SCALE) / 2,
          background: '#D9EE50',
        }}
      >
        {MARK_WIDTHS.map((w) => (
          <div
            key={w}
            style={{
              width: w * SCALE,
              height: BAR,
              borderRadius: BAR / 2,
              background: '#0B0B0B',
            }}
          />
        ))}
      </div>
    ),
    size,
  )
}
