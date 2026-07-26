'use client'

import { useState } from 'react'
import { Plus, MessageCircle } from 'lucide-react'
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
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left panel with a colourful help card */}
          <FadeIn className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{c.faq.label}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {c.faq.title}
            </h2>

            <div className="group mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-pine to-pine-soft p-7 text-paper shadow-[0_28px_70px_-45px_rgba(23,53,42,0.9)] ring-1 ring-inset ring-paper/10">
              <span
                aria-hidden
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/10 text-paper ring-1 ring-inset ring-paper/15 transition-transform duration-200 group-hover:scale-105"
              >
                <MessageCircle size={24} strokeWidth={1.75} />
              </span>
              <p className="mt-5 font-serif text-xl font-medium leading-snug sm:text-2xl">
                {c.contact.title}
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-accent px-6 text-base font-medium text-paper transition-colors duration-200 hover:bg-accent-dark"
              >
                {c.header.cta}
              </a>
            </div>
          </FadeIn>

          {/* Accordion */}
          <FadeIn delay={80}>
            <div id="faq-list" className="border-t border-line">
              {items.map((item, i) => (
                <details key={i} name="faq" className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-lg py-5 text-lg font-medium text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span
                      aria-hidden
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-200 group-open:rotate-45 group-open:bg-accent group-open:text-paper"
                    >
                      <Plus size={18} strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-lg leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>

            {hasMore && (
              <div className="mt-8">
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
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
