Share card assets — build time only
===================================

Read by app/[lang]/opengraph-image.tsx while `next build` draws the three share
cards, and by nothing else. This directory is NOT public/: none of it is
deployed, requested or served. That matters for the two .otf files, which are
whole fonts rather than the web subsets.

  SuisseIntl-Regular.otf   400   ImageResponse can read TTF/OTF/WOFF but not
  SuisseIntl-Medium.otf    500   WOFF2, which is why the card cannot reuse the
                                 files in public/fonts. Subset to Latin-1 plus
                                 the punctuation the three languages need —
                                 197 characters, ~35 kB each.

  logotype.png             420x193, transparent. The wordmark is drawn in a
                           serif that exists nowhere but this artwork, so the
                           card carries the artwork rather than setting "Telma"
                           in a sans and hoping nobody notices.

  reception.jpg            490x630. The hero poster, cropped to the card's
                           right-hand panel.

Regenerating
------------
Fonts, from the licensed .otf originals:

  pip install fonttools brotli
  pyftsubset SuisseIntl-Regular.otf --flavor=otf --name-IDs='*' \
    --layout-features='kern,liga,clig,calt,ccmp,locl,mark,mkmk,case' \
    --unicodes='U+0020-007E,U+00A0-00FF,U+2013-2014,U+2018-2019,U+201C-201D,
      U+2026,U+20AC' \
    --output-file=SuisseIntl-Regular.otf

Logotype and photograph, with sharp (already a dependency):

  sharp('public/images/logo.webp').resize({width: 420}).png()
  sharp('public/images/telma-hero-poster.webp')
    .extract({left: 170, top: 0, width: 630, height: 810})
    .resize(490, 630).jpeg({quality: 82, mozjpeg: true})

The photograph's crop is deliberate: it holds the telephone, the open agenda
and the daylight, which is the whole story the card has to tell without words.
Changing the panel's width means re-cropping at the new aspect rather than
letting the image squash — and it means re-measuring the claim, which is set at
the largest size that keeps the longest of the three languages on one line.
