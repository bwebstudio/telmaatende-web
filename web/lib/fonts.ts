import localFont from 'next/font/local'

/**
 * ONE FAMILY: DM SANS.
 *
 * Everything on the site — headline, body, navigation, buttons, forms, labels,
 * prices — is set in DM Sans. There is no second family and no serif anywhere:
 * the drawn logotype arrived as artwork, so the wordmark's letterforms live
 * inside the image and cost nothing to load.
 *
 * It replaces Inter, which was correct and forgettable. Inter is a neo-grotesque
 * built for neutrality, and neutrality is exactly what it delivered: nothing to
 * dislike, nothing to remember.
 *
 * The register the brand is after — Apple, Spotify, Netflix — is not a font that
 * can be bought. SF Pro is not licensable off Apple's platforms, and Circular
 * and Netflix Sans are proprietary. What those three share is a type: a
 * geometric skeleton with humanist warmth and confident, tight spacing. Notion,
 * for what it is worth, runs Inter.
 *
 * Set against Plus Jakarta Sans and Figtree at production settings, DM Sans is
 * the one that holds. Jakarta is wider and reads informal — friendly in a way a
 * clinic buying a phone system does not need. DM Sans is geometric but
 * low-contrast, which is where the warmth comes from, and it is more composed
 * than anything else in the group. Its numerals settle the argument on their
 * own: a price set in it reads modern and certain.
 *
 * Drawn by Colophon, open licence, commissioned through Google Fonts — so it
 * has institutional backing rather than one company's brand attached to it,
 * which is what the ten-year test actually turns on.
 *
 * THE OPTICAL AXIS IS DOING THE WORK THE SERIF USED TO DO.
 *
 * This build carries `opsz` (9–40) as well as `wght` (100–1000). With
 * `font-optical-sizing: auto` the same file redraws itself between a 16px
 * paragraph and a 80px headline — looser and more open small, tighter and more
 * refined large. That is the contrast the page lost when the serif left, and it
 * costs one file rather than two families.
 *
 * Latin only, on purpose: 222 glyphs covering every accent Portuguese, Spanish
 * and English use, verified character by character. An extended subset would be
 * dead weight — next/font/local cannot attach a unicode-range to a second file,
 * so it would never be selected as a fallback anyway.
 */
export const sans = localFont({
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  src: [
    {
      path: '../public/fonts/DMSans-Variable-latin.woff2',
      weight: '300 700',
      style: 'normal',
    },
  ],
})
