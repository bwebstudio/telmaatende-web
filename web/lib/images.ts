/**
 * Site imagery, served from /public. Swap a `src` for another file (and the
 * `alt`, ideally per language via the content files) to change a photo — the
 * layouts and aspect ratios stay the same, so nothing else needs to change.
 */
export type StockImage = { src: string; alt: string }

export const stock = {
  hero: {
    src: '/recepcionista.png',
    alt: 'Rececionista de uma clínica ao telefone',
  },
  agenda: {
    src: '/agenda.png',
    alt: 'Agenda de marcações da clínica',
  },
  contact: {
    src: '/escritorio.png',
    alt: 'Secretária de receção de uma clínica',
  },
} satisfies Record<string, StockImage>
