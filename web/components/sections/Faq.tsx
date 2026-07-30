'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
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
      <SectionHeader eyebrow={c.faq.label} title={c.faq.title} align="center" />

      <Reveal delay={80} className="mx-auto mt-24 max-w-3xl lg:mt-30">
        <div id="faq-list" className="border-t border-line">
          {items.map((item, i) => (
            <details key={i} name="faq" className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-10 py-8 text-[1.0625rem] font-mid tracking-tight text-ink transition-colors duration-fast ease-calm hover:text-brand-accent [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-mute transition-all duration-fast ease-calm group-open:rotate-45 group-open:border-brand-accent group-open:text-brand-accent"
                >
                  <Plus size={15} strokeWidth={ICON_STROKE} />
                </span>
              </summary>
              <p className="max-w-prose pb-10 pr-12 leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {hasMore && (
          <div className="mt-16 flex justify-center">
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
    </Section>
  )
}
