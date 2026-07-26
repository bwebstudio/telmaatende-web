'use client'

import { useState } from 'react'
import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

// How many questions to show before the reader asks to see the rest.
const INITIAL_COUNT = 6

export function Faq({ c }: { c: Content }) {
  const [expanded, setExpanded] = useState(false)

  const items = expanded ? c.faq.items : c.faq.items.slice(0, INITIAL_COUNT)
  const hasMore = c.faq.items.length > INITIAL_COUNT

  return (
    <section id="perguntas" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>{c.faq.label}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.faq.title}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-10 max-w-3xl">
          <div id="faq-list" className="border-t border-line">
            {items.map((item, i) => (
              <details key={i} name="faq" className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    <Plus />
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-lg leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls="faq-list"
                className="btn-secondary"
              >
                {expanded ? c.faq.showLess : c.faq.showMore}
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

function Plus() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M10 4v12M4 10h12" />
    </svg>
  )
}
