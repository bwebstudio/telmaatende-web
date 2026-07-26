import { ImageResponse } from 'next/og'
import { getContent, locales } from '@/content'

export const alt = 'Telma Atende'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

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
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F6F2EA',
          color: '#14110E',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#B4522F',
          }}
        >
          Telma Atende
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600 }}>
            {c.hero.headlineLines[0]}
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 600 }}>
            {c.hero.headlineLines[1]}
          </div>
        </div>
        <div style={{ fontSize: 30, color: '#4A433B' }}>
          {c.header.productBy}
        </div>
      </div>
    ),
    { ...size }
  )
}
