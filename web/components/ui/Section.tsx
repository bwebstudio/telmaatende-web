import { Container } from './Container'
import { Reveal } from './Reveal'

export type SectionTone = 'bg' | 'surface' | 'sunken' | 'dark'

const tones: Record<SectionTone, string> = {
  bg: 'bg-bg text-ink',
  surface: 'bg-surface text-ink',
  sunken: 'bg-surface-sunken text-ink',
  dark: 'bg-dark text-white',
}

/**
 * Every section on the site is this component. It owns the vertical rhythm so
 * no section can quietly drift: 128px of air on mobile, 192px on desktop.
 *
 * That is a lot — roughly a third of a laptop screen given away above and
 * below every block — and it is the point. At this scale a section stops
 * reading as a row on a landing page and starts reading as a chapter.
 *
 * `rule` draws a hairline instead of changing the background. It lets two white
 * sections sit next to each other and still be separate, which is how the page
 * stays mostly white without turning into one undifferentiated field.
 */
export function Section({
  children,
  id,
  tone = 'bg',
  rule = false,
  className = '',
}: {
  children: React.ReactNode
  id?: string
  tone?: SectionTone
  rule?: boolean
  className?: string
}) {
  // The rule sits exactly on the seam between two sections — it replaces the
  // section's own top padding rather than being drawn inside it. Placed inside,
  // it read as a hairline floating in the middle of nowhere and doubled the gap
  // to nearly 600px, which is the point where air stops being composure.
  const pad = 'pt-32 sm:pt-40 lg:pt-48'

  return (
    <section
      id={id}
      className={`${tones[tone]} scroll-mt-32 pb-32 sm:pb-40 lg:pb-48 ${
        rule ? '' : pad
      } ${className}`}
    >
      {rule && (
        <Container>
          <span aria-hidden className="block h-px bg-line" />
        </Container>
      )}
      <Container className={rule ? pad : ''}>{children}</Container>
    </section>
  )
}

/**
 * The label above a section title. Small, spaced, green — one of the very few
 * places the brand colour is actually read, which is why it uses the lighter
 * --brand-accent (4.77:1) rather than the primary: #183C37 at caption size
 * stops reading as green and starts reading as black.
 *
 * On the dark blocks the accent drops to 3.62:1 and fails AA for text at this
 * size, so there the label is simply white held back — green is a fill on dark,
 * never a label.
 */
export function Eyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode
  onDark?: boolean
}) {
  return (
    <span
      className={`inline-block text-label font-medium uppercase ${
        onDark ? 'text-white/55' : 'text-brand-accent'
      }`}
    >
      {children}
    </span>
  )
}

/**
 * Title block. One question per section, so there is one title, one optional
 * lead, and nothing else.
 *
 * The gaps inside it are large on purpose: an eyebrow sitting 12px above its
 * title reads as a caption, at 40px it reads as a chapter mark.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  onDark = false,
  className = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  lead?: string
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}) {
  const centered = align === 'center'

  return (
    <Reveal
      as="header"
      className={`flex flex-col ${centered ? 'items-center text-center' : ''} ${className}`}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`display text-h2 text-balance ${eyebrow ? 'mt-10' : ''} ${
          centered ? 'max-w-[20ch]' : 'max-w-[17ch]'
        } ${onDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-9 max-w-lead text-body-lg leading-relaxed ${
            onDark ? 'text-white/65' : 'text-ink-soft'
          }`}
        >
          {lead}
        </p>
      )}
    </Reveal>
  )
}
