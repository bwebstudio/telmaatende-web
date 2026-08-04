import localFont from 'next/font/local'

/**
 * ONE FAMILY: SUISSE INTL.
 *
 * The brand typeface. Everything on the site — headline, body, navigation,
 * buttons, forms, labels, prices — is set in it. There is no second family and
 * no serif anywhere: the drawn logotype arrived as artwork, so the wordmark's
 * letterforms live inside the image and cost nothing to load.
 *
 * It replaces DM Sans, which was a stand-in chosen for the register the brand
 * was after. Suisse Intl is that register — a Swiss neo-grotesque, low contrast,
 * tightly spaced, with numerals that make a price read as a fact rather than as
 * a pitch. It is the family Telma owns, so the site stops approximating it.
 *
 * THREE STATIC WEIGHTS, NOT A VARIABLE AXIS.
 *
 * DM Sans was variable and the whole hierarchy turned on 550 — a weight between
 * medium and semibold that only a variable font can reach. Suisse Intl ships as
 * separate cuts, so that trick is gone and the hierarchy is now built from real
 * drawn weights:
 *
 *   400  Regular  — body copy, and the great majority of the page.
 *   500  Medium   — display type, sub-headings, buttons, labels. The one step
 *                   up, and enough of one: a grotesque this tightly drawn
 *                   carries far more presence at 500 than DM Sans did.
 *
 * Two cuts, not four. Semibold and Bold exist in the family and neither is
 * loaded, because next/font preloads every cut declared here — a weight nothing
 * uses is 28 kB the reader pays for at first paint and never sees. Semibold is
 * the one to reach for if a line ever has to out-rank a Medium heading beside
 * it; public/fonts/README.txt has the command that builds it.
 *
 * Latin only: subset to the same 219 characters the DM Sans build carried,
 * verified to cover every accent Portuguese, Spanish and English use. Two static
 * cuts cost 53 kB against the variable file's 62 kB, so the brand typeface is
 * also the lighter one.
 *
 * ---------------------------------------------------------------------------
 * TRIAL FILES, LIVE. The .otf files these were built from are Swiss Typefaces'
 * *Test* cuts, licensed for evaluation only, and they are what production is
 * serving — a deliberate call, and the one loose end left on the typeface. The
 * full licence delivers identically-named cuts: rebuild the two .woff2 files
 * from those (see public/fonts/README.txt) and nothing else here changes.
 * ---------------------------------------------------------------------------
 */
export const sans = localFont({
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: 'Arial',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
  src: [
    {
      path: '../public/fonts/SuisseIntl-Regular-latin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseIntl-Medium-latin.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})
