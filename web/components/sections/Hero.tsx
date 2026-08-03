import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'
import { Cinemagraph } from '@/components/ui/Cinemagraph'

/**
 * The first screen: the promise on the left, the room it happens in on the right.
 *
 * The scene replaces the drawn flow that used to sit here. That was four words
 * on a hairline and it explained the product honestly, but it explained it the
 * way a diagram does.
 *
 * The footage carries the same three beats without a diagram, and it carries
 * them as an event rather than a list: an open appointment book, and over the
 * course of the loop a booking appears on the page — 11:00, Consulta, Dra.
 * Martins. Blank, then written, then held long enough to read, then dissolved
 * back to blank as the next call arrives.
 *
 * That sequence is the whole point, so it survives every editing decision. An
 * early cut kept only the calmest two seconds and threw the writing away; what
 * was left was a pretty room that explained nothing. And the palindrome that
 * suits the reception footage is wrong here for the same reason — run
 * backwards, the booking would erase itself.
 *
 * NOT A CARD.
 *
 * No border, no shadow, no frame, no panel behind it. The footage rests on the
 * page the way a photograph rests on a spread, and the only thing softening its
 * edge is the 12px the whole site gives its media.
 *
 * What made the earlier version read as a component was not its size but its
 * shape: at 5:4 it was nearly square, and a near-square rectangle beside a
 * column of text is a card however large it grows. At 16:10 it is a picture.
 *
 * The panoramic ratio pays twice. It crops 9% of the 16:9 source where the
 * square crop was taking 30%, so more of the desk, the light and the room
 * survive — and the phone, which lives on the left edge, stops being at risk.
 *
 * THE READING ORDER IS THE ENTRANCE ORDER.
 *
 * Headline, then the scene, then the sentence and the action. Each step rises
 * 12px over 800ms, spaced far enough apart to read as a sequence and slowly
 * enough that none of it asks to be watched. The eye is meant to run logo,
 * headline, scene, button; the animation just follows it down.
 *
 * The columns align at the top rather than at their centres, and the scene is
 * nudged down by roughly the headline's own leading so their optical tops
 * agree. A box aligned to a text box always sits a few pixels high.
 */
export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden bg-bg pb-30 pt-12 sm:pt-16 lg:pb-38 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-x-8">
          <div>
            <Reveal>
              <h1 className="display text-hero text-balance text-ink lg:text-[3rem] xl:text-[3.25rem]">
                {c.hero.headlineLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-9 max-w-prose text-xl leading-[1.55] text-ink-soft">
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
          </div>

          {/*
            16:9 on phones, where the whole frame fits and nothing is cropped at
            all. Wider than a phone it goes to 16:10 — panoramic, never square —
            with the framing pulled left so the desk phone keeps its edge.
          */}
          <Reveal delay={160} className="lg:mt-1.5">
            <Cinemagraph
              mp4="/video/telma-hero.mp4"
              webm="/video/telma-hero.webm"
              poster="/images/telma-hero-poster.webp"
              label={c.hero.sceneAlt}
              eager
              frame="aspect-video [object-position:42%_center] lg:aspect-[16/10] lg:[object-position:35%_center]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
