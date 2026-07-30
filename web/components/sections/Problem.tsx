import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'

/**
 * The enemy, stated once and calmly.
 *
 * Three movements stacked rather than the usual text-beside-component: a short
 * title held in the left third, then the photograph running the whole measure,
 * then the three symptoms as a row of hairline-topped columns.
 *
 * No cards, no icons, no colour. This section is supposed to be the one place
 * on the page that feels slightly heavy, and weight comes from a wide quiet
 * image and plain type, not from decoration.
 */
export function Problem({ c }: { c: Content }) {
  return (
    <Section id="problema" tone="sunken">
      <SectionHeader eyebrow={c.problem.label} title={c.problem.title} />

      <Reveal delay={80} className="mt-24 lg:mt-30">
        <Figure slot="reception-quiet" sizes="(max-width: 1400px) 100vw, 1320px" />
      </Reveal>

      <div className="mt-20 grid gap-x-10 gap-y-14 lg:mt-24 lg:grid-cols-3">
        {c.problem.items.map((item, i) => (
          <Reveal key={i} delay={i * 90} className="border-t border-line pt-8">
            <h3 className="text-[1.0625rem] font-mid leading-snug tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
