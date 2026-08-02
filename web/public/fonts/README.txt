Telma — self hosted font
========================

DM Sans (Variable, latin subset)  —  the entire interface.

One file, one family. Headline, body, navigation, buttons, forms, labels and
prices are all set in it; there is no second family and no serif. The logotype's
letterforms live inside the artwork at web/public/images/logo.webp, so they cost
nothing to load.

Two axes:
  opsz  9–40      the same file redraws itself between a 16px paragraph and an
                  80px headline. Driven by `font-optical-sizing: auto`, this is
                  what carries the hierarchy now that there is no serif.
  wght  100–1000  the design weight is 550, between medium and semibold.

Open Font Licence, drawn by Colophon, commissioned through Google Fonts, and
served from this directory so the site makes no third party request and keeps
working if fonts.googleapis.com is unreachable.

Latin only: 222 glyphs, verified to cover every accent Portuguese, Spanish and
English use. A latin-ext subset would be dead weight — next/font/local cannot
attach a unicode-range to a second file, so it would never be selected.

Wired up in lib/fonts.ts. To replace the family, drop the .woff2 here and change
the path there; nothing else refers to it.
