import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'
import { TelmaConversationField } from '@/components/experiments/telma-field/TelmaConversationField'

/**
 * The close. The page ends where it began: the sculpture of letters from the
 * hero, here behind the invitation, on the same near-black as the footer that
 * follows, so the two read as one last surface. The photograph and the green
 * glow that used to sit here are gone.
 *
 * The copy is marked data-field-copy, so the sculpture thins out behind it.
 */
export function FinalCta({ c }: { c: Content }) {
  return (
    <section
      data-nav-theme="dark"
      className="relative flex min-h-[44rem] items-center overflow-hidden bg-dark py-40 text-white sm:min-h-[52rem]"
    >
      <TelmaConversationField centered />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div data-field-copy className="flex flex-col items-center">
            <h2 className="display text-h1 text-balance text-white">{c.finalCta.title}</h2>
            <p className="mt-10 max-w-lead text-body-lg leading-relaxed text-white/70">{c.finalCta.lead}</p>
            <div className="mt-14 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contacto" variant="primary" onDark>
                {c.finalCta.cta}
                <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
              </ButtonLink>
              <ButtonLink href="#precos" variant="secondary" onDark>
                {c.finalCta.secondary}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
