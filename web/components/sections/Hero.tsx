import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
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
 * IT LEAVES THE GRID.
 *
 * The footage runs off the right of the screen instead of stopping at the
 * container. That single move is what stops it reading as a component: a
 * rectangle that closes on both sides is a card however it is styled, and no
 * amount of border-radius argues otherwise. On a 27-inch monitor a contained
 * image is worse still — it sits marooned in six hundred pixels of margin.
 *
 * Breaking the grid on one side makes the other side matter more, not less. The
 * text column reproduces the container's left edge exactly, so the headline
 * starts on the same vertical as the logotype above it and every section below.
 * The break has to be the only irregularity, or it reads as an accident.
 *
 * ITS HEIGHT COMES FROM THE TEXT.
 *
 * The footage stretches to the exact height of the column beside it, so both
 * halves begin and end on the same two lines. Nothing draws that relationship
 * and nobody will notice it consciously — but a reader feels the difference
 * between two objects that happen to sit near each other and two that share a
 * frame, and this is the cheapest way to buy the second.
 *
 * It also means the ratio is not a number I chose. It falls out of how much the
 * headline has to say, which is why it lands near 2:1 in every language.
 *
 * A wider screen does make the frame more panoramic, and widening the text
 * column cannot fix it: that unwraps the headline from four lines to two, which
 * shortens the block and makes the ratio worse instead of better. Stepping the
 * column at a breakpoint was worse still — it made the footage jump 191px
 * narrower crossing 1536px.
 *
 * What does work is spacing the text apart rather than widening it. The gaps
 * inside the column grow with the viewport, so the button moves down, the
 * footage grows to match, and both halves stay locked top and bottom. See
 * .hero-gap-lead and .hero-gap-action in globals.css.
 *
 * So the column stays flat and the crop is centred on the appointment rather
 * than on the middle of the frame. What a wide screen takes away is wall and
 * ceiling; the phone, the book and the booking stay in shot at every width.
 *
 * No border, no shadow, no panel. The left corners carry the site's 12px; the
 * right ones do not exist.
 *
 * THE READING ORDER IS THE ENTRANCE ORDER.
 *
 * Headline, then the scene, then the sentence and the action. Each step rises
 * 12px over 800ms, spaced far enough apart to read as a sequence and slowly
 * enough that none of it asks to be watched. The eye is meant to run logo,
 * headline, scene, button; the animation just follows it down.
 *
 * The hero ends without a rule beneath it. A hairline that stops at the
 * container while the footage runs past it contradicts the one irregularity the
 * composition is built on, and a hero that closes with a line is a landing-page
 * tell besides. What separates it from the next section is the same thing that
 * separates every other pair: air.
 */
export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden hero-tail bg-bg pt-12 sm:pt-16 lg:pt-20">
      <div className="hero-gutter grid grid-cols-1 gap-10 pr-6 sm:pr-10 lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-stretch lg:gap-x-10 lg:pr-0">
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
            <p className="hero-gap-lead max-w-prose text-xl leading-[1.55] text-ink-soft">
              {c.hero.subtitle}
            </p>

            {/* One button, not two. A pair of pills side by side is the most
                generic thing a landing page owns; a single action with a quiet
                link beside it reads as confidence rather than as a choice. */}
            <div className="hero-gap-action flex flex-wrap items-center gap-x-8 gap-y-4">
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
          all. Past that the height is what is fixed, so a wider screen makes
          the frame more panoramic rather than taller, and the framing is pulled
          left so the desk phone keeps its edge.
        */}
        <Reveal delay={160} className="lg:relative">
          <Cinemagraph
            mp4="/video/telma-hero.mp4"
            webm="/video/telma-hero.webm"
            poster="/images/telma-hero-poster.webp"
            label={c.hero.sceneAlt}
            eager
            className="lg:absolute lg:inset-0 lg:rounded-r-none"
            frame="aspect-video [object-position:42%_center] lg:aspect-auto lg:h-full lg:[object-position:35%_68%]"
          />
        </Reveal>
      </div>
    </section>
  )
}
