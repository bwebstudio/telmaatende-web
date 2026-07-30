# Photography — originals

The PNGs the images were generated as. They live here, outside `web/`, because
anything under `web/public` is deployed: at ~2MB each they would have shipped
11MB of lossless PNG to the CDN for no benefit.

What the site serves is `web/public/images/*.webp` — the same frames at quality
82, 453KB for all six. The conversion is visually lossless on this kind of
photograph, which is mostly smooth plaster and wood.

To re-export after editing an original:

    python -c "from PIL import Image; import sys; \
      Image.open(sys.argv[1]).convert('RGB').save(sys.argv[2],'WEBP',quality=82,method=6)" \
      assets/photography/NAME.png web/public/images/NAME.webp

Two duplicates were removed: `manos.png` and `recepcion.png` were byte-identical
copies of `hands-agenda.png` and `reception-quiet.png`.
