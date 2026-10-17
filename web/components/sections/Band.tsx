import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { TelmaSettle } from '@/components/ui/TelmaSettle'

/**
 * NOT ON THE PAGE. Kept, not deleted, and here is why.
 *
 * Its line was "Da conversa, fica o essencial", a second wording of the brand
 * sentence. Unifying the wording across the site left the band saying, word
 * for word, what the conversation section above it already says, twice on one
 * page. The band is the restatement, so the band is what went.
 *
 * Nothing else used it: `c.band.title` and TelmaSettle are now unreferenced
 * too. Put `<Band c={c} />` back in app/[lang]/page.tsx to restore it, and
 * give it a line of its own first.
 *
 * ── WHAT IT WAS ────────────────────────────────────────────────────────────
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
 * ── DESKTOP ONLY, AND THAT IS THE DECISION ────────────────────────────────
 * The band was drawn as one shape: a mark down the left with a lane of its
 * own, and a line of display type beside it. It does not survive being made
 * narrow. Stacked on a phone the mark sat above a headline it had nothing to
 * do with; side by side, the lane ate a third of the width and the headline
 * came apart into a stack of two-word lines. Both were tried.
 *
 * So below lg it is not shown. Nothing is lost that the page does not say
 * elsewhere: the line is a restatement, and its button repeats the one in the
 * hero and the one on every plan. A phone gets a shorter page instead of a
 * compromised version of a composition that was never meant to be narrow.
 *
 * The text keeps a left inset so the settled mark has a lane of its own. That
 * number is the only coupling between the canvas and the layout, and it is
 * approximate on purpose — a character or two of the cloud passing behind the
 * headline is the effect, not a mistake.
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
    <section className="hidden py-16 lg:block lg:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] bg-accent text-ink">
            <TelmaSettle className="absolute inset-0 h-full w-full" />
            <div className="relative flex min-h-[15rem] items-center justify-between gap-16 py-16 pl-[17rem] pr-14">
              <h2 className="display max-w-[16ch] text-h2 text-balance">{c.band.title}</h2>
              <ButtonLink href="#precos" variant="primary" className="shrink-0">
                {c.hero.ctaPrimary}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
