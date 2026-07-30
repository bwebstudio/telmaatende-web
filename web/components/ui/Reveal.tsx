'use client'

import { useEffect, useRef } from 'react'

/**
 * A slow fade and rise as an element enters the viewport.
 *
 * The hidden state lives in CSS, scoped to `.js` (see globals.css). This
 * component only adds `.is-revealed`; it never sets opacity itself. That
 * inversion is the whole point: if JavaScript is off, slow, or broken, the
 * `.js` class is never added and the page is simply readable. The old
 * implementation held `opacity: 0` in React state, which made the entire site
 * invisible without JavaScript.
 */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'figure'
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Comp = Tag as React.ElementType
  return (
    <Comp
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Comp>
  )
}
