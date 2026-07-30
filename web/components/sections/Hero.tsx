import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'
import { CallFlow } from '@/components/hero/CallFlow'

/**
 * The first screen. A headline, one sentence, one action, one object.
 *
 * This is the third pass, and it is mostly deletion. The screen used to carry
 * a four-line paragraph, a two-item checklist, a credit line, four timestamps,
 * a quoted sentence, a booking chip and a caption — about eighty words of
 * explanation before the fold. All of that is now discovered on the scroll,
 * where a reader who wants it will go looking.
 *
 * What is left is fifteen words. The eye is meant to land on the headline,
 * move once to the scene, and stop. Anything a first screen has to explain, it
 * has already failed to say.
 *
 * The scene is not wrapped in a Reveal: it has its own entrance, and stacking a
 * fade on top of a draw made the object arrive twice.
 */
export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden bg-bg pb-32 pt-14 sm:pt-20 lg:pb-42 lg:pt-24">
      <Container>
        <Reveal>
          <h1 className="display text-hero text-balance text-ink">
            {c.hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-16 sm:mt-24 lg:mt-30 lg:grid-cols-12 lg:gap-x-10">
          <Reveal delay={120} className="lg:col-span-4">
            <p className="max-w-prose text-xl leading-[1.55] text-ink-soft">
              {c.hero.subtitle}
            </p>

            {/* One button, not two. A pair of pills side by side is the most
                generic thing a landing page owns; a single action with a quiet
                link beside it reads as confidence rather than as a choice. */}
            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="#precos" variant="primary">
                {c.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#contacto" variant="quiet">
                {c.hero.ctaSecondary}
                <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <CallFlow steps={c.hero.flow.steps} />
          </div>
        </div>
      </Container>
    </section>
  )
}
