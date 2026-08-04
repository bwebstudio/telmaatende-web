import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * Three levels of integration.
 *
 * This was three cards with an icon chip, a tag and a badge each — the single
 * most generic arrangement on the page, and the third card grid in a row. It is
 * now one panel with three rows: level on the left, explanation in the middle,
 * availability on the right, separated by hairlines.
 *
 * A reader comparing options wants to scan down a column, not across three
 * boxes. It also happens to be the more sophisticated object: a table of terms
 * reads like a contract, and a contract is what this section is really about.
 */
export function Integrations({ c }: { c: Content }) {
  return (
    <Section id="integracoes" tone="sunken">
      <SectionHeader
        eyebrow={c.integrations.label}
        title={c.integrations.title}
        lead={c.integrations.closing}
      />

      <Reveal delay={100} className="mt-24 lg:mt-30">
        <div className="overflow-hidden rounded-card border border-line bg-surface">
          {c.integrations.levels.map((level, i) => (
            <div
              key={i}
              className="grid gap-6 border-b border-line p-9 last:border-b-0 sm:p-11 lg:grid-cols-12 lg:items-baseline lg:gap-10"
            >
              <div className="lg:col-span-4">
                <span className="text-label font-medium uppercase text-ink-mute">
                  {level.tag}
                </span>
                <h3 className="mt-4 text-[1.0625rem] font-medium leading-snug tracking-tight text-ink">
                  {level.name}
                </h3>
              </div>

              <p className="leading-relaxed text-ink-soft lg:col-span-5">{level.text}</p>

              <div className="lg:col-span-3 lg:text-right">
                <span
                  className={`inline-flex rounded-pill px-4 py-1.5 text-sm ${
                    level.badgeStrong
                      ? 'bg-brand-wash font-medium text-brand-accent'
                      : 'border border-line-strong text-ink-mute'
                  }`}
                >
                  {level.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
