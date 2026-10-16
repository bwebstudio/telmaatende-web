import { Siren } from 'lucide-react'
import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { MediaSlot } from '@/components/ui/MediaSlot'

/**
 * Four steps, four cards, each led by a picture of the moment it describes,
 * in the reference's resource-card grammar: image, small mono label, title.
 *
 * The four are one story and not four stock photographs: the same caller, the
 * same booking. Somebody rings the clinic, Telma answers, the appointment
 * appears in the panel, and the summary reaches the desk. Read in order they
 * say what the steps say, which is why the text below each one can stay short.
 *
 * The handover note used to get the page's only other dark panel, which gave
 * an edge case more weight than the four steps together. It is now one quiet
 * line under the grid: present for whoever is looking for it, and nothing more.
 */
const MEDIA = [
  '/images/how-call.webp',
  '/images/how-answered.webp',
  '/images/how-panel.webp',
  '/images/how-summary.webp',
]

export function HowItWorks({ c }: { c: Content }) {
  return (
    <Section id="como-funciona" tone="bg" rule>
      <SectionHeader eyebrow={c.how.label} title={c.how.title} align="center" />

      <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {c.how.steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.n}
            delay={i * 90}
            className="overflow-hidden rounded-[16px] border border-line bg-surface"
          >
            <MediaSlot
              src={MEDIA[i]}
              alt=""
              className="aspect-[4/3]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="p-6 sm:p-7">
              <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                {step.n}
              </span>
              <h3 className="mt-3 text-[1.1875rem] font-medium leading-snug tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={140} className="mt-10 flex items-start gap-3 text-ink-soft">
        <Siren size={18} strokeWidth={1.75} aria-hidden className="mt-0.5 shrink-0 text-ink" />
        <p className="max-w-[60ch] text-[0.9375rem] leading-relaxed">{c.how.note}</p>
      </Reveal>
    </Section>
  )
}
