/**
 * The measure: 1320px of content inside 64px margins on wide screens.
 *
 * The margins are deliberately narrower than the content is wide. A page that
 * hugs its own edges reads cramped; a page whose margins compete with its
 * column reads like a template. This is the ratio editorial layouts use.
 */
export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-full max-w-container px-6 sm:px-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  )
}
