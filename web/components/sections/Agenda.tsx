import type { Content } from '@/content'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The photograph is gone. In its place, the thing the copy describes: one
 * day in the clinic's dashboard, drawn in the dashboard's own language (the
 * service colour bar, the time as the largest thing in the row, the amber
 * "por confirmar" the product uses), on the page's grey panel.
 *
 * Nothing in the rows is a person: the lines that would hold a name are
 * placeholders, so no patient is invented.
 */
const PENDING = 'bg-[rgb(250_240_224)] text-[rgb(140_84_10)]'

export function Agenda({ c }: { c: Content }) {
  const v = c.agenda.preview
  const rows = [
    { time: '09:00', bar: 'bg-[rgb(219_234_254)]', state: 'confirmed' as const },
    { time: '10:00', bar: 'bg-[rgb(254_233_213)]', state: 'pending' as const },
    { time: '11:00', bar: 'bg-[rgb(220_242_229)]', state: 'confirmed' as const },
    { time: '12:00', bar: 'bg-transparent', state: 'free' as const },
  ]

  return (
    <Section id="agenda" tone="bg" rule>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeader eyebrow={c.agenda.label} title={c.agenda.title} />
          <ol className="mt-12 border-t border-line">
            {c.agenda.paragraphs.map((p, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="flex gap-6 border-b border-line py-7">
                <span className="pt-0.5 font-mono text-[0.8125rem] text-ink-mute">0{i + 1}</span>
                <p className="leading-relaxed text-ink-soft">{p}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={120} className="lg:order-first">
          <div className="panel-grey rounded-[24px] p-6 sm:p-12">
            <div className="overflow-hidden rounded-[14px] border border-white bg-white shadow-[0_24px_48px_-28px_rgba(0,0,0,0.3)]">
              <div className="px-6 py-5">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink-mute">{v.heading}</span>
                <p className="mt-1 text-xl font-medium tracking-tight text-ink">{v.day}</p>
              </div>
              <ol className="divide-y divide-line border-t border-line">
                {rows.map((r) => (
                  <li key={r.time} className="flex items-start gap-4 px-6 py-4">
                    <span aria-hidden className={`-my-4 w-1 self-stretch rounded-full ${r.bar}`} />
                    <span
                      className={`w-14 text-lg tabular-nums ${r.state === 'free' ? 'text-ink-mute' : 'font-medium text-ink'}`}
                    >
                      {r.time}
                    </span>
                    <span className="min-w-0 flex-1 pt-1">
                      {r.state === 'free' ? (
                        <span className="text-sm text-ink-mute">{v.free}</span>
                      ) : r.state === 'pending' ? (
                        <span className="block font-medium text-ink">{v.booking}</span>
                      ) : (
                        <>
                          <span className="block h-2.5 w-28 rounded-full bg-line" />
                          <span className="mt-2 block h-2.5 w-16 rounded-full bg-line" />
                        </>
                      )}
                    </span>
                    {r.state !== 'free' && (
                      <span
                        className={`shrink-0 rounded-pill px-2.5 py-1 text-sm font-medium ${
                          r.state === 'pending' ? PENDING : 'bg-surface-sunken text-ink-soft'
                        }`}
                      >
                        {r.state === 'pending' ? v.pending : v.confirmed}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
