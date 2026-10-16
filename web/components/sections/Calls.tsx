import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'

/**
 * Why it matters, after the reference's "built for the calls that can't wait":
 * a centred head, three outlined cards each led by a tag, two actions under
 * them. Every line restates something the page already promises elsewhere
 * (answering when reception cannot, out of hours, the summary and recording).
 */
export function Calls({ c }: { c: Content }) {
  return (
    <Section tone="bg">
      <SectionHeader title={c.calls.title} lead={c.calls.lead} align="center" />

      <ul className="mt-12 grid gap-4 lg:grid-cols-3">
        {c.calls.items.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 80}
            className="flex min-h-[17rem] flex-col rounded-[20px] border border-line p-6 sm:p-7"
          >
            {/* The accent, and only here. These labels sort the cards into
                two groups, which is a distinction the reader should see at a
                glance; the section eyebrows further up the page look the same
                but do a different job, so they stay grey. Seven accent pills
                down one page is not an accent any more. */}
            <span className="self-start rounded-[6px] bg-accent px-3 py-1.5 font-mono text-[0.75rem] uppercase tracking-[0.1em] text-ink">
              {item.tag}
            </span>
            <h3 className="mt-auto pt-12 text-[1.375rem] tracking-tight text-ink">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-3">
        <ButtonLink href="#voz" variant="primary">
          {c.calls.listen}
        </ButtonLink>
        <ButtonLink href="#contacto" variant="secondary">
          {c.header.cta}
          <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
        </ButtonLink>
      </Reveal>
    </Section>
  )
}
