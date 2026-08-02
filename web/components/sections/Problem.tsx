import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Cinemagraph } from '@/components/ui/Cinemagraph'

/**
 * The enemy, stated once and calmly.
 *
 * The scene and the three symptoms now sit side by side instead of stacked, and
 * the scene is a cinemagraph rather than a still: an empty reception counter
 * with a phone nobody is answering, light drifting across the wall. It is the
 * argument the section makes, so it belongs beside the argument — not below it
 * as a full-bleed slab, which is what it was and which read as decoration.
 *
 * Seven columns of twelve for the footage, four for the symptoms, one left
 * empty between them. The gap under the title is a third of what it was: the
 * distance was making the image feel like a separate exhibit.
 *
 * The two halves are centred against each other rather than aligned at the top.
 * The footage is a 2:1 crop and the symptoms run to three paragraphs, so
 * top-aligning left two hundred pixels of void under the image and the pair
 * read as though one of them had slipped.
 *
 * No cards, no icons, no colour, and no rounded corners on the media. Weight
 * here comes from a quiet moving image and plain type.
 */
export function Problem({ c }: { c: Content }) {
  return (
    <Section id="problema" tone="sunken">
      <SectionHeader eyebrow={c.problem.label} title={c.problem.title} />

      <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <Reveal className="lg:col-span-7">
          <div className="relative">
            <Cinemagraph
              mp4="/video/reception.mp4"
              webm="/video/reception.webm"
              poster="/video/reception-poster.jpg"
              label={c.problem.sceneAlt}
              frame="aspect-[2/1]"
            />
            {/* The same hairline the photographs carry, so the footage sits on
                the page rather than being pasted onto it. */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line-strong"
            />
          </div>
        </Reveal>

        <div className="flex flex-col lg:col-span-4 lg:col-start-9">
          {c.problem.items.map((item, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="border-t border-line pt-7 [&:not(:first-child)]:mt-10"
            >
              <h3 className="text-[1.0625rem] font-mid leading-snug tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
