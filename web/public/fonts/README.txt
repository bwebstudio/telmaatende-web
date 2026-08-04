Telma — self hosted font
========================

Suisse Intl (latin subset)  —  the entire interface.

One family, two cuts. Headline, body, navigation, buttons, forms, labels and
prices are all set in it; there is no second family and no serif. The logotype's
letterforms live inside the artwork at web/public/images/logo.webp, so they cost
nothing to load.

  SuisseIntl-Regular-latin.woff2    400   body copy, and most of the page
  SuisseIntl-Medium-latin.woff2     500   display type, sub-headings, buttons
                                          and labels — the one step up

Semibold and Bold are not shipped. next/font preloads every cut declared in
lib/fonts.ts, so a weight nothing uses is 28 kB the reader pays for at first
paint and never sees. Semibold is the one to add back if a line ever has to
out-rank a Medium heading beside it — build it with the command below, then add
a third `src` entry at weight 600.

Static cuts, not a variable file. The 550 weight the old DM Sans build turned on
does not exist here — `.display` in globals.css runs Medium instead, and the
`font-mid` utility is gone in favour of Tailwind's `font-medium`.

Latin only: 219 glyphs, the same set the DM Sans build carried, verified to
cover every accent Portuguese, Spanish and English use. A latin-ext subset would
be dead weight — next/font/local cannot attach a unicode-range to a second file,
so it would never be selected.

------------------------------------------------------------------------------
TRIAL FILES — LIVE, AND STILL TO BE REPLACED
------------------------------------------------------------------------------
These were built from Swiss Typefaces' *Test* cuts (SuisseIntlTest-*.otf), which
are licensed for evaluation only. They are what the site is serving today: that
was a deliberate call, not an oversight, and it is the one loose end left on the
typeface. The production licence delivers the same cuts without the Test suffix.
To swap them in, subset the new .otf originals to the same character set and
convert to woff2:

  pip install fonttools brotli
  pyftsubset SuisseIntl-Regular.otf \
    --flavor=woff2 --name-IDs='*' \
    --layout-features='kern,liga,clig,calt,ccmp,locl,mark,mkmk,frac,tnum,case' \
    --output-file=SuisseIntl-Regular-latin.woff2 \
    --unicodes='U+0020-007E,U+00A0-00A3,U+00A5-00AC,U+00AE-00B4,U+00B6-00FF,
      U+0102,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,
      U+0308,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+2039-203A,
      U+2044,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215'

(one line, no spaces inside --unicodes). Repeat for Medium. Keep the file names
identical and nothing else changes.

Wired up in lib/fonts.ts. To replace the family entirely, drop the .woff2 files
here and change the paths there; nothing else refers to them.
