/**
 * THE IMAGE SLOTS
 *
 * Every photograph the site can hold is declared here, with the exact ratio the
 * layout reserves for it and the brief needed to generate it. A slot with no
 * `src` renders as a calm tonal panel (see components/ui/Figure.tsx), so the
 * page is finished and shippable before a single photo exists.
 *
 * All six are installed. The originals live in assets/photography/ (outside the
 * deployed tree); what ships is the WebP in /public/images at quality 82.
 *
 * To replace one: regenerate from `prompt`, convert to WebP, drop it in
 * /public/images and keep the same filename. See assets/photography/README.md.
 *
 * ---------------------------------------------------------------------------
 * THE HOUSE STYLE — prepend to every prompt, and never vary it
 * ---------------------------------------------------------------------------
 * Editorial photography, hyperreal, shot on a full-frame camera. Soft natural
 * side light from a large window, late morning, no artificial fill, no flash.
 * Materials: pale oak, warm white plaster, stone, brushed aluminium, matte
 * paper, clear glass, a little greenery. Palette: warm whites and soft greys
 * with deep forest green in the shadows and ONE small object in that same deep
 * green as the single accent. Shallow-to-moderate depth of field. Calm, quiet, unhurried.
 * People are working, never posing, never looking at the camera, never smiling
 * at the camera; faces are incidental, often out of frame or turned away.
 * Generous empty space in the frame — the composition should feel underfilled.
 *
 * NEVER: robots, circuitry, chips, brains, holograms, sci-fi interfaces,
 * floating UI panels, glowing edges, invented hardware, smart speakers,
 * headsets as the subject, call-centre imagery, stock-photo smiles, teal-and-
 * orange grading, saturated coloured backdrops, geometric studio props,
 * embedded text or logos, 3D renders, plastic sheen.
 * ---------------------------------------------------------------------------
 */

export type ImageRatio = '16/9' | '4/3' | '3/2' | '1/1' | '4/5'

export interface ImageSlot {
  /** Path under /public once the image exists. Leave undefined until then. */
  src?: string
  alt: string
  ratio: ImageRatio
  /** Where it appears, so the brief can be judged in context. */
  usage: string
  /** Full generation brief. House style above is assumed and must be prepended. */
  prompt: string
}

export const imageSlots = {
  'hands-agenda': {
    src: '/images/hands-agenda.webp',
    alt: 'Manos consultando una agenda de citas junto a un ordenador',
    // 3:2 to match the source. At 4:3 the centre crop clipped the corner of the
    // green notebook, which is the only brand accent in the frame.
    ratio: '3/2',
    usage: 'Sección 05 — tu agenda sigue siendo tuya',
    prompt:
      'Close overhead-oblique shot of two hands resting on an open paper ' +
      'appointment book on a pale oak desk, a pen laid down beside it, a ' +
      'laptop half out of frame at the top edge, screen not readable. A ' +
      'deep forest green folder sits under the corner of the book — the only ' +
      'colour accent in the frame. Warm white surfaces, soft window light from ' +
      'the upper left, gentle shadow of a window frame across the desk. 35mm, ' +
      'f/4, everything within the desk plane sharp. Hands are relaxed, mid ' +
      'gesture, unhurried — a person in control, not rushing. No faces. No ' +
      'screen content visible.',
  },

  'clinician-patient': {
    src: '/images/clinician-patient.webp',
    alt: 'Profesional de una clínica atendiendo a un paciente en consulta',
    ratio: '4/5',
    usage: 'Sección 06 — no sustituye a tu equipo',
    prompt:
      'A clinician seated beside a patient in a modern consulting room, both ' +
      'seen from behind and to the side, in conversation. Only the backs of ' +
      'shoulders and a turned three-quarter profile are visible; no faces to ' +
      'camera. Warm white walls, pale oak cabinetry, a stone basin, one plant. ' +
      'Soft window light behind them, gentle rim on the shoulders. 85mm, f/2, ' +
      'the pair sharp and the room falling soft. The feeling is undivided ' +
      'attention — one person entirely present for another. No clinical ' +
      'instruments in focus, no white coats as a symbol, nothing sterile.',
  },

  'waiting-room': {
    src: '/images/waiting-room.webp',
    alt: 'Sala de espera tranquila de una clínica con luz natural',
    ratio: '16/9',
    usage: 'Sección 12 — CTA final',
    prompt:
      'A wide, low-angle view of a small clinic waiting area, empty. Two pale ' +
      'oak chairs with soft grey wool upholstery, a low stone side table with a ' +
      'single matte magazine, a tall window with sheer linen, one large-leaf ' +
      'plant. Warm white walls. Strong soft daylight pooling across the floor, ' +
      'long calm shadows. 28mm, f/5.6, deep field, perfectly level horizon. ' +
      'The room reads composed and cared for. Bottom third of the frame is ' +
      'simple floor, so a headline can sit over it. Absolutely no people.',
  },

  'studio-desk': {
    src: '/images/studio-desk.webp',
    alt: 'Escritorio de trabajo del equipo que desarrolla Telma',
    ratio: '3/2',
    usage: 'Sección 08 — confianza / quién está detrás',
    prompt:
      'A working desk in a small design studio, shot at eye level from the ' +
      'side. Pale oak surface, a closed aluminium laptop, a matte ceramic cup, ' +
      'a stack of printed A4 sheets with faint unreadable text, a muted green ' +
      'sticky note. Soft daylight from a window at the left, dust visible in ' +
      'the light. 50mm, f/2, the cup sharp, the room dissolving behind. Warm, ' +
      'human, slightly imperfect — a real desk, not a styled set. No branding, ' +
      'no readable text, no screens on.',
  },

  'phone-in-hand': {
    src: '/images/phone-in-hand.webp',
    alt: 'Una persona sostiene el móvil junto a una ventana',
    ratio: '4/5',
    usage: 'Sección 02 — prueba de voz (opcional, acompaña al reproductor)',
    prompt:
      'A single hand holding a smartphone loosely at chest height, seen from ' +
      'the side, near a window. The screen is dark and reflective — no ' +
      'interface visible at all. Warm white wall behind, softly out of focus, ' +
      'the edge of a pale oak surface at the bottom of the frame. Bright soft ' +
      'daylight from the left, the hand gently rim-lit. 85mm, f/1.8, only the ' +
      'phone and fingers sharp. The gesture is listening, not using — the phone ' +
      'is held, not operated. No face, no ear, no headset, no UI.',
  },
} satisfies Record<string, ImageSlot>

export type ImageSlotId = keyof typeof imageSlots
