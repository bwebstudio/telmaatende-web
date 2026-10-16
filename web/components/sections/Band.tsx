import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { TelmaSettle } from '@/components/ui/TelmaSettle'

/**
 * The brand's one still moment: a full-bleed band where the mark assembles out
 * of its own letters, and a line that says what it is doing.
 *
 * ── WHY THE ANIMATION LIVES HERE AND NOT IN THE HEADER ─────────────────────
 * It was in the header, where the lockup is 44px tall and a cloud of sixty
 * characters is dust. The sequence needs size and a reader who is looking at
 * it: here the mark is half the band's height, the characters are legible as
 * characters, and it only starts once the band is actually in the frame.
 *
 * ── THE CLOUD GETS THE WHOLE BAND, AND NO EXTRA ROOM WAS MADE FOR IT ───────
 * The canvas is laid over the whole band, so the characters begin scattered
 * across all of it and are clipped by its rounded edge. Nothing was padded
 * out to make space: the space was already there, behind the headline.
 *
 * The text keeps a left inset on wide screens so the settled mark has a lane
 * of its own; on a phone it sits above, which is why the padding moves to the
 * top. Those two numbers are the only coupling between the canvas and the
 * layout, and they are both approximate on purpose — a character or two of
 * the cloud passing behind the headline is the effect, not a mistake.
 *
 * ── THE BAND IS THE ACCENT, AND THAT IS A DECISION ─────────────────────────
 * It was built dark first, on the argument that macaw is the reference's own
 * brand colour hex for hex and a full-bleed band of it in their category is
 * where the resemblance would be loudest. That argument was heard and the
 * call went the other way: this is the page's one loud surface and it is the
 * accent that makes it loud.
 *
 * What changes with the ground: the characters and the mark are ink, not
 * white, because ink on macaw is 14.65:1 and white on macaw is 1.65:1. And
 * the action turns black, since a macaw button on a macaw band is nothing.
 */
export function Band({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] bg-accent text-ink">
            <TelmaSettle className="absolute inset-0 h-full w-full" />
            <div className="relative flex min-h-[15rem] flex-col gap-10 px-8 pb-14 pt-28 sm:px-14 sm:pb-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-16 lg:pl-[17rem]">
              <h2 className="display max-w-[16ch] text-h2 text-balance">{c.band.title}</h2>
              <ButtonLink href="#precos" variant="primary" className="shrink-0 self-start lg:self-auto">
                {c.hero.ctaPrimary}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
