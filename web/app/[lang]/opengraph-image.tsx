import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import sharp from 'sharp'
import { getContent, locales } from '@/content'

/**
 * Next only accepts a static string here, so this cannot follow the locale the
 * way the card's own words do. It therefore describes the photograph — true in
 * any language — rather than quoting the claim, which would be Portuguese on
 * the English and Spanish pages. Portuguese because that is the default locale.
 */
const ASSETS = join(process.cwd(), 'assets', 'og')

export const alt =
  'Telma Atende. O balcão de receção de uma clínica: o telefone, a agenda aberta do dia e a luz da manhã.'
export const size = { width: 1200, height: 630 }

/**
 * JPEG, not the PNG ImageResponse hands back.
 *
 * Half this card is a photograph, which PNG stores badly: the card came to
 * 343 kB. WhatsApp stops rendering a link preview at roughly 300 kB, and
 * WhatsApp is not a rounding error here — it is how one clinic owner in
 * Portugal sends this page to another. At quality 86 the same card is a third
 * of the size and the difference is invisible at any size anyone will see it.
 */
export const contentType = 'image/jpeg'

/**
 * Both params, because of `dynamicParams: false` below: with an id in the path
 * the route is /[lang]/opengraph-image/[__metadata_id__], and a route pinned to
 * its static params has to name every one of them. The id is the same token
 * `generateImageMetadata` hands to the metadata, so the file that gets written
 * is the file the <meta> tag points at.
 */
export async function generateStaticParams() {
  return Promise.all(
    locales.map(async (lang) => ({ lang, __metadata_id__: await cardVersion(lang) }))
  )
}

/**
 * THE CARD'S ADDRESS HAS TO CHANGE WHEN THE CARD DOES.
 *
 * Next appends a hash to this route's URL -- /pt/opengraph-image?83eac4e52... --
 * and that hash is of *this file*, not of the picture it draws. The picture is
 * drawn from content/, so every word on it can change without the address
 * moving a character.
 *
 * Which is what happened. The headline became "A Telma atende quando ninguém
 * pode" on 2026-10-17; this file had not been touched since 2026-08-04. The
 * server has been serving the new card ever since, and WhatsApp has been
 * showing the old one, because WhatsApp, Facebook and LinkedIn cache by URL:
 * they fetched it once in August and nothing has told them to look again. A
 * share card nobody can refresh is worse than no share card, because it goes on
 * being wrong in every group it is forwarded to.
 *
 * `generateImageMetadata` is the way out: the `id` it returns becomes part of
 * the path, so a token computed from what the card draws makes the address move
 * with the drawing. Change a headline and the URL is new, so the caches have
 * never seen it and fetch it.
 *
 * The token covers the three things on the card: the claim, the by-line, and
 * the artwork, hashed from the bytes rather than from a version somebody has to
 * remember to bump. Twelve characters of sha1 is not cryptography, it is a
 * cache key.
 */
async function cardVersion(lang: string): Promise<string> {
  const c = getContent(lang)
  const art = await Promise.all([
    readFile(join(ASSETS, 'logotype.png')),
    readFile(join(ASSETS, 'reception.jpg')),
  ])
  const h = createHash('sha1')
  h.update([...c.hero.headlineLines, c.header.productBy].join('\u0000'))
  for (const file of art) h.update(file)
  return h.digest('hex').slice(0, 12)
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }> | { lang: string }
}) {
  const { lang } = await params
  return [{ id: await cardVersion(lang), alt, size, contentType }]
}

/**
 * dynamicParams:false pins this route to the three locales, which makes it
 * fully static — every card is drawn during `next build` and served as a file.
 * That is not an optimisation, it is what makes the reads below safe: the fonts
 * and the photograph live outside public/, so they exist while the build runs
 * and are never deployed, never requested and never served to anyone.
 */
export const dynamicParams = false

/**
 * THE SHARE CARD.
 *
 * For most people this image *is* the brand — it is what arrives in a WhatsApp
 * group of clinic owners, and the majority of them will never scroll the site.
 * So it is drawn the way the top of the site is drawn: the logotype, the claim
 * set in the brand typeface, and the reception itself bleeding off the right
 * edge exactly as the hero footage does.
 *
 * It used to be set in whatever sans the renderer defaulted to, because the
 * site shipped woff2 only and ImageResponse cannot read woff2. The .otf
 * originals fixed that: assets/og holds a subset cut of Regular and Medium for
 * this file alone. Same for the wordmark — "Telma" is drawn in a serif that
 * exists nowhere but the logo artwork, so the card carries the artwork rather
 * than typing the name in a sans and hoping nobody notices.
 *
 * WHAT GOES WHERE, AND WHY IT IS NOT ALL HERE.
 *
 * A preview is three surfaces, not one: the image, the title, the description.
 * They used to say the same sentence — the claim was the og:description *and*
 * the headline drawn on the card, so a WhatsApp preview spent its two lines
 * repeating what the reader had already read in the picture. Now the image
 * carries the claim, the title says what Telma is, and the description says
 * what she does. Three surfaces, three jobs.
 *
 * Colours mirror globals.css.
 */
const BG = '#FCFCFA'
const INK = '#111827'
const MUTE = '#5F6B66'

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const c = getContent(lang)

  const [regular, medium, logotype, reception] = await Promise.all([
    readFile(join(ASSETS, 'SuisseIntl-Regular.otf')),
    readFile(join(ASSETS, 'SuisseIntl-Medium.otf')),
    readFile(join(ASSETS, 'logotype.png')),
    readFile(join(ASSETS, 'reception.jpg')),
  ])

  const logoSrc = `data:image/png;base64,${logotype.toString('base64')}`
  const receptionSrc = `data:image/jpeg;base64,${reception.toString('base64')}`

  const card = new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: BG,
          color: INK,
          fontFamily: 'Suisse Intl',
        }}
      >
        {/* The text column. 710 wide is not a round number, it is a measured
            one: the longest claim of the three languages is the Portuguese, and
            at 44px it sets 580px, so the column is the width that holds it on
            one line with air to spare. The claim was breaking into four lines
            with "perdida." hanging alone — a headline that wraps mid-sentence
            in a poster reads as an accident, and this card is 90% of the brand
            impressions the site will ever make. */}
        <div
          style={{
            width: 710,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 40px 60px 72px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={140} height={64} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {c.hero.headlineLines.map((line, i) => (
              <div
                key={i}
                style={{
                  fontSize: 44,
                  fontWeight: 500,
                  lineHeight: 1.24,
                  letterSpacing: '-0.02em',
                }}
              >
                {line}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', fontSize: 24, color: MUTE }}>
            {c.header.productBy}
          </div>
        </div>

        {/* The reception, full bleed. Square edges here on purpose: the card is
            a poster, not a card inside a card, and a radius would open a sliver
            of background that reads as a rendering fault at thumbnail size. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={receptionSrc} alt="" width={490} height={630} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Suisse Intl', data: regular, weight: 400, style: 'normal' },
        { name: 'Suisse Intl', data: medium, weight: 500, style: 'normal' },
      ],
    }
  )

  const jpeg = await sharp(Buffer.from(await card.arrayBuffer()))
    .flatten({ background: BG })
    .jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toBuffer()

  return new Response(new Uint8Array(jpeg), {
    headers: { 'Content-Type': contentType },
  })
}
