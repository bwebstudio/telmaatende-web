Telma — self hosted fonts
=========================

Instrument Serif (Regular 400)  — display only, 28px and above.
Geist (Variable 300-700)        — everything else.

Both are Open Font Licence, downloaded from Google Fonts and served from this
directory so the site makes no third party request and keeps working if
fonts.googleapis.com is unreachable.

Two subsets per family: "latin" covers Portuguese, Spanish and English;
"latin-ext" carries the rest of the Latin range. next/font declares the
unicode-range for each, so neither file is downloaded unless a character in its
range is actually rendered.

Wired up in lib/fonts.ts. To replace a family, drop the .woff2 files here and
change the paths there; nothing else refers to them.
