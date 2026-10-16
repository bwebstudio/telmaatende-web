'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'

const INITIAL_COUNT = 6

/**
 * One column, no panel, no colour — the Brand Bible's "acordeón limpio, una
 * columna, sin ruido visual", which the previous two-column version with a
 * sticky gradient card was not.
 *
 * `name="faq"` makes the accordion exclusive natively: opening one closes the
 * rest with no JavaScript involved.
 */
export function Faq({ c }: { c: Content }) {
  const [expanded, setExpanded] = useState(false)

  const items = expanded ? c.faq.items : c.faq.items.slice(0, INITIAL_COUNT)
  const hasMore = c.faq.items.length > INITIAL_COUNT

  return (
    <Section id="perguntas" tone="bg" rule>
      <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
      <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start">
        <SectionHeader eyebrow={c.faq.label} title={c.faq.title} />
      </div>

      <Reveal delay={80}>
        {/* One grey card per question, after the reference: a black disc that
            turns from plus to minus, and the answer opening inside the card. */}
        <div id="faq-list" className="flex flex-col gap-3">
          {items.map((item, i) => (
            <details key={i} name="faq" className="group rounded-[16px] bg-surface-sunken px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-[1.125rem] font-medium tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors duration-fast ease-calm group-open:bg-accent group-open:text-ink"
                >
                  <Plus size={15} strokeWidth={2} className="group-open:hidden" />
                  <Minus size={15} strokeWidth={2} className="hidden group-open:block" />
                </span>
              </summary>
              <p className="max-w-prose pb-7 pr-12 leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls="faq-list"
            >
              {expanded ? c.faq.showLess : c.faq.showMore}
            </Button>
          </div>
        )}
      </Reveal>
      </div>
    </Section>
  )
}
