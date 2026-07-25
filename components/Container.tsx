export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-baseline gap-2 text-sm font-medium uppercase tracking-label text-accent">
      <span aria-hidden className="font-serif text-base font-semibold not-italic leading-none">
        /
      </span>
      {children}
    </span>
  )
}
