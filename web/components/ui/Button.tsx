import Link from 'next/link'

export type ButtonVariant = 'primary' | 'secondary' | 'quiet'

/**
 * One button, three weights, two tones.
 *
 * The primary is forest green with a white label — 12.07:1, comfortably AAA.
 * The colour it replaced could not do this: it held white at 2.3:1 and had to
 * be paired with dark ink to pass at all. The green needs no workaround, and a
 * deep green pill with white type is the most expensive-looking button in the
 * palette anyway.
 *
 * On the dark blocks the primary inverts to white-on-ink rather than staying
 * green: a #183C37 pill on a #111827 field is very nearly invisible.
 */
const base =
  'inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-pill px-7 text-base font-medium transition-all duration-fast ease-calm disabled:cursor-not-allowed disabled:opacity-50'

const light: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white shadow-brand hover:bg-brand-hover hover:-translate-y-px active:translate-y-0',
  secondary:
    'border border-line-strong bg-surface text-ink shadow-1 hover:border-ink/25 hover:-translate-y-px active:translate-y-0',
  quiet: 'px-2 text-ink-soft hover:text-brand-accent',
}

const dark: Record<ButtonVariant, string> = {
  primary:
    'bg-white text-ink hover:bg-white/90 hover:-translate-y-px active:translate-y-0',
  secondary:
    'border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:-translate-y-px active:translate-y-0',
  quiet: 'px-2 text-white/70 hover:text-white',
}

function classesFor(variant: ButtonVariant, onDark: boolean, className: string) {
  return `${base} ${(onDark ? dark : light)[variant]} ${className}`
}

type CommonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  /** Set on the dark surfaces (final CTA, footer). */
  onDark?: boolean
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  onDark = false,
  className = '',
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classesFor(variant, onDark, className)} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  onDark = false,
  className = '',
  ...rest
}: CommonProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = classesFor(variant, onDark, className)

  // In-page anchors and external links stay plain <a>; internal routes get the
  // router so a language switch does not cost a full document load.
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
