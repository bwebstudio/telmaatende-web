import type { Content } from '@/content'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ProcessShowcase } from './ProcessShowcase'

/** Flip to false (or remove the line in app/[lang]/page.tsx) to drop the section. */
export const PROCESS_ANIMATION_EXPERIMENT = true

/**
 * EXPERIMENT: a call passing through Telma, with a two-chapter reading guide
 * beside it. The actions reuse the hero's labels, so no new CTA copy. pt-PT
 * only for now.
 */
export function ProcessAnimationSection({ c }: { c: Content }) {
  return (
    <Section tone="bg" rule>
      <Reveal>
        <ProcessShowcase ctaPrimary={c.hero.ctaPrimary} ctaSecondary={c.hero.ctaSecondary} />
      </Reveal>
    </Section>
  )
}
