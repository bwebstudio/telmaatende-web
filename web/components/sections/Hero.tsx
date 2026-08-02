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
 * That sequence is the whole point, so it survives every editing decision. The
 * first cut of this clip kept only its calmest two seconds and threw the
 * writing away; what was left was a pretty room that explained nothing. And the
 * palindrome that suits the reception footage is wrong here for the same
 * reason — run backwards, the booking would erase itself.
 *
 * THE HEADLINE IS SMALLER THAN IT WAS, AND THAT IS THE TRADE.
 *
 * At full measure it ran at 80px across two lines. In a 46% column the same
 * sentence needs about 48px to still break in two, and at 80px it shattered
 * into six lines. A two-column hero cannot have both the width and the size;
 * this one gives the width to the scene, because the scene is now carrying the
 * explanation the headline used to carry alone.
 *
 * The two halves are centred against each other. The text block is shorter than
 * the footage, and aligning them at the top would leave the column hanging.
 */
export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden bg-bg pb-30 pt-12 sm:pt-16 lg:pb-38 lg:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[46fr_54fr] lg:items-center lg:gap-x-10">
          <Reveal>
            <h1 className="display text-hero text-balance text-ink lg:text-[3rem] xl:text-[3.25rem]">
              {c.hero.headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>

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

          {/*
            16:9 on phones, where the full frame fits and nothing has to be
            cropped. Wider than a phone the box gets taller, so the scene fills
            a column beside the text instead of sitting in it as a letterbox —
            and the frame is pulled left, because the phone lives on the left
            edge and centring the crop would cut the handset off.
          */}
          <div>
            <Cinemagraph
              mp4="/video/telma-hero.mp4"
              webm="/video/telma-hero.webm"
              poster="/images/telma-hero-poster.webp"
              label={c.hero.sceneAlt}
              eager
              frame="aspect-video [object-position:42%_center] lg:aspect-[5/4] lg:[object-position:34%_center]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
