'use client'

import { useEffect, useRef, useState } from 'react'

// A discreet fade and rise when the element enters the viewport. Nothing else.
export function FadeIn({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
  delay?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the browser cannot observe, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Comp = Tag as React.ElementType
  return (
    <Comp
      ref={ref}
      className={className}
      style={{
        opacity: visible ? undefined : 0,
        // Keep the delay inside the shorthand so we never mix shorthand
        // (animation) with a longhand (animationDelay) on the same style.
        animation: visible ? `fade-up 0.6s ease-out ${delay}ms both` : undefined,
      }}
    >
      {children}
    </Comp>
  )
}
