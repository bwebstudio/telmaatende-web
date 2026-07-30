import { ImageResponse } from 'next/og'
import { getContent, locales } from '@/content'

export const alt = 'Telma Atende'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

/**
 * The share card.
 *
 * It cannot use the brand font: ImageResponse reads TTF/OTF/WOFF and the site
 * ships WOFF2 only — carrying a second copy of Inter purely for this image is
 * not worth the weight. So the card leans on what survives without the
 * typeface: the palette, a generous margin, and the flow motif, which is the
 * most recognisable thing the brand owns.
 *
 * Colours mirror globals.css.
 */
const BG = '#FCFCFA'
const INK = '#111827'
const BRAND = '#183C37'
const BRAND_WASH = '#DDE7E4'
const MUTE = '#5F6B66'
const LINE = '#D4D9D6'

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const c = getContent(lang)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: BG,
          color: INK,
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600 }}>Telma</div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {c.hero.headlineLines.map((line, i) => (
              <div key={i} style={{ fontSize: 66, lineHeight: 1.1, fontWeight: 600 }}>
                {line}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', fontSize: 26, color: MUTE }}>
            {c.header.productBy}
          </div>
        </div>

        {/* The flow, upright: four events on a rail, the last one closed. */}
        <div
          style={{
            width: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 64,
          }}
        >
          {c.hero.flow.steps.map((step, i) => {
            const last = i === c.hero.flow.steps.length - 1
            return (
              <div key={i} style={{ display: 'flex', gap: 20 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 24,
                  }}
                >
                  <div
                    style={{
                      width: last ? 22 : 14,
                      height: last ? 22 : 14,
                      borderRadius: 999,
                      backgroundColor: last ? BRAND : BRAND_WASH,
                      border: `2px solid ${BRAND}`,
                    }}
                  />
                  {!last && <div style={{ width: 2, height: 56, backgroundColor: LINE }} />}
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: 22,
                    color: INK,
                    paddingBottom: last ? 0 : 48,
                  }}
                >
                  {step.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ),
    { ...size }
  )
}
