import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The four steps, as the horizontal timeline the Brand Bible specifies.
 *
 * The step numbers are set at 44px and left almost as pale as the rule they sit
 * on. They are the section's entire ornament: no icons, no chips, no boxes —
 * four numerals, four hairlines, four short paragraphs. Suisse Intl's figures
 * carry this on their own — they are the section's whole design.
 */
export function HowItWorks({ c }: { c: Content }) {
  return (
    <Section id="como-funciona" tone="bg" rule>
      <SectionHeader eyebrow={c.how.label} title={c.how.title} />

      <ol className="mt-24 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:mt-30 lg:grid-cols-4">
        {c.how.steps.map((step, i) => (
          <Reveal as="li" key={step.n} delay={i * 90} className="border-t border-line pt-8">
            <span
              aria-hidden
              className="text-[2.75rem] font-medium leading-none tracking-display text-line-strong"
            >
              {step.n}
            </span>
            <h3 className="mt-10 text-[1.0625rem] font-medium leading-snug tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">{step.text}</p>
          </Reveal>
        ))}
      </ol>

      {/* The handover note. It answers "and if it is an emergency?" — the
          objection that stops a clinic buying — so it gets the page's only
          other dark surface, and it gets it alone, with nothing beside it. */}
      <Reveal delay={140} className="mt-24 lg:mt-30">
        <div className="rounded-card bg-dark px-10 py-16 text-center sm:px-16 sm:py-20">
          <p className="mx-auto max-w-3xl text-[1.5rem] font-normal leading-[1.35] tracking-tight text-white sm:text-[2rem]">
            {c.how.note}
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
