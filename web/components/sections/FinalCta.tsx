import Image from 'next/image'
import type { Content } from '@/content'
import { imageSlots } from '@/lib/images'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

/**
 * The closing invitation, on the dark surface, immediately above the footer.
 *
 * The empty waiting room sits behind the words at 12% — enough that the eye
 * registers a room rather than a colour, not enough to compete with the type.
 * It is the state the product produces, not the product, which is why it is the
 * one photograph on the page a reader is not really meant to look at.
 *
 * `aria-hidden` and an empty alt: it carries no information a screen reader
 * needs, and announcing it would interrupt the one instruction this block has.
 */
export function FinalCta({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden bg-dark py-40 text-white sm:py-50">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <Image
          src={imageSlots['waiting-room'].src as string}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 0%, rgba(62,123,115,0.28), rgba(17,24,39,0.55) 70%)',
        }}
      />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="display text-h1 text-balance text-white">
            {c.finalCta.title}
          </h2>
          <p className="mt-10 max-w-lead text-body-lg leading-relaxed text-white/70">
            {c.finalCta.lead}
          </p>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto" variant="primary" onDark>
              {c.finalCta.cta}
            </ButtonLink>
            <ButtonLink href="#precos" variant="secondary" onDark>
              {c.finalCta.secondary}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
