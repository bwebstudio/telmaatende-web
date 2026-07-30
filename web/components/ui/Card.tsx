import type { LucideIcon } from 'lucide-react'

/**
 * The single card in the system.
 *
 * It used to be a 24px-radius white box with a soft drop shadow — which is the
 * default look of every component library on the internet. This one carries no
 * shadow at all by default: a hairline border, a tight 14px radius, and a lot
 * of internal padding. The separation comes from the white space around it, not
 * from a glow underneath it.
 *
 * A shadow only appears on hover, and only on cards that are themselves
 * actionable.
 */
export function Card({
  children,
  className = '',
  lift = false,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  /** Adds the hover rise. Only for cards that are a link or hold an action. */
  lift?: boolean
  as?: 'div' | 'article' | 'li'
}) {
  const Comp = Tag as React.ElementType
  return (
    <Comp
      className={`rounded-card border border-line bg-surface p-10 transition-all duration-fast ease-calm sm:p-12 ${
        lift ? 'hover:-translate-y-0.5 hover:border-line-strong hover:shadow-2' : ''
      } ${className}`}
    >
      {children}
    </Comp>
  )
}

/** Uniform stroke everywhere. Never mix icon weights. */
export const ICON_STROKE = 1.5

/**
 * The icon chip. 40px, hairline, no fill — a filled tile at 48px was reading
 * as a badge, and there is one on nearly every card. It should register as
 * punctuation, not as an object.
 */
export function IconChip({
  icon: Icon,
  className = '',
  onDark = false,
}: {
  icon: LucideIcon
  className?: string
  onDark?: boolean
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-input border ${
        onDark ? 'border-white/15 text-brand' : 'border-line-strong text-brand-accent'
      } ${className}`}
    >
      <Icon size={19} strokeWidth={ICON_STROKE} />
    </span>
  )
}
