import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import type { Content } from '@/content'
import { ConversationFlowTabs } from './ConversationFlowTabs'

/** Flip to false (or remove the line in app/[lang]/page.tsx) to drop the section. */
export const CONVERSATION_FLOW_EXPERIMENT = true

/**
 * EXPERIMENT: calls turning into what the clinic needs to know, in three
 * scenes behind segmented tabs, after the reference. pt-PT only for now.
 */
export function ConversationFlowSection({ c }: { c: Content }) {
  return (
    <Section tone="bg" rule>
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="display text-h2 text-balance text-ink">{c.flow.title}</h2>
        <p className="mt-6 max-w-lead text-body-lg leading-relaxed text-ink-soft">
          {c.flow.description}
        </p>
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <ConversationFlowTabs flow={c.flow} />
      </Reveal>
    </Section>
  )
}
