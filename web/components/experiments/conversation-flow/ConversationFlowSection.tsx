import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ConversationFlowTabs } from './ConversationFlowTabs'

/** Flip to false (or remove the line in app/[lang]/page.tsx) to drop the section. */
export const CONVERSATION_FLOW_EXPERIMENT = true

/**
 * EXPERIMENT: calls turning into what the clinic needs to know, in three
 * scenes behind segmented tabs, after the reference. pt-PT only for now.
 */
export function ConversationFlowSection() {
  return (
    <Section tone="bg" rule>
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="display text-h2 text-balance text-ink">Da conversa, fica o necessário.</h2>
        <p className="mt-6 max-w-lead text-body-lg leading-relaxed text-ink-soft">
          Cada chamada termina no sítio certo: na agenda, num resumo para a receção, ou numa resposta
          no WhatsApp.
        </p>
      </Reveal>
      <Reveal delay={120} className="mt-12">
        <ConversationFlowTabs />
      </Reveal>
    </Section>
  )
}
