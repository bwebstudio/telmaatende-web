import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { MediaSlot } from '@/components/ui/MediaSlot'
import { ICON_STROKE } from '@/components/ui/Card'

/**
 * One wide photograph with one line over it, after the reference's industry
 * hero: the page breathes between two dense blocks, and the action over the
 * picture is the page's accent.
 *
 * ── THE PHOTOGRAPH IS THE FIRST HALF OF THE HEADLINE ───────────────────────
 * Someone is being attended to at the counter, which is precisely what the
 * line says reception is for. The previous picture had to be cropped hard
 * because it was a posed two-shot that read as bought; this one is simply a
 * receptionist mid-conversation with a patient, and it survives being looked
 * at whole.
 *
 * It ships at its native 3:2 and the slot does the cropping, which is why
 * there is no baked-in crop any more. The old file was cut to 21:9 for the
 * desktop slot, so on a phone the 4:5 slot was cropping a crop and the people
 * fell out of frame. Full frame in, every breakpoint takes what it needs.
 */
export function Banner({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div data-nav-theme="dark" className="relative overflow-hidden rounded-[24px]">
            <MediaSlot
              src="/images/reception-desk.webp"
              alt=""
              className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]"
              // The two people live in the left half, so the narrow phone slot
              // holds left; from 16/9 up the crop keeps the full width and
              // only the vertical matters, which centred puts the faces and
              // the counter in frame together.
              focus="object-left sm:object-center"
              sizes="100vw"
            />
            {/* The headline sits over pale concrete and a lit lamp, so the
                veil earns its keep: measured on the composite, white type
                clears AA across the whole band only with this much under it. */}
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <h2 className="display max-w-[22ch] text-h1 text-balance text-white">{c.banner.title}</h2>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <ButtonLink href="#precos" variant="secondary" onDark className="backdrop-blur">
                  {c.hero.ctaPrimary}
                  <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
                </ButtonLink>
                <ButtonLink href="#contacto" variant="accent">
                  {c.banner.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
