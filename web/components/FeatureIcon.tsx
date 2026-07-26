import type { LucideIcon } from 'lucide-react'

/**
 * The single, consistent icon chip used across the whole page: a rounded square
 * with the icon ALWAYS in the brand terracotta. Keeping one colour is what
 * makes the page feel branded even when card backgrounds vary.
 *
 * On a `group` hover (e.g. a card), the chip flips to solid terracotta with a
 * light glyph — a small, playful touch.
 */
export function FeatureIcon({
  icon: Icon,
  bg = 'bg-accent/10',
  className = '',
}: {
  icon: LucideIcon
  /** Background wash — override to a solid chip on a coloured card. */
  bg?: string
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-accent transition-all duration-200 group-hover:scale-105 group-hover:bg-accent group-hover:text-paper ${bg} ${className}`}
    >
      <Icon size={22} strokeWidth={1.75} />
    </span>
  )
}
