import { CalendarDays, CalendarSync, Code2, Mail, MessageSquareText } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

/**
 * The reference's integrations panel: one grey surface, the argument on the
 * left, a grid of tiles on the right. The tiles are not partner logos. They
 * are the channels and calendar formats the copy already names, so nothing on
 * the grid claims an integration that does not exist. Their names are the same
 * in every language, which is why they live here and not in content/.
 *
 * The level included on every plan carries the page's one accent.
 */
// No WhatsApp tile: nothing in the product receives a WhatsApp message, and a
// tile is a claim like any other. It comes back with the add-on.
const TILES = [
  { icon: CalendarDays, name: 'Google Calendar' },
  { icon: CalendarSync, name: 'iCal' },
  { icon: Mail, name: 'Email' },
  { icon: MessageSquareText, name: 'SMS' },
  { icon: Code2, name: 'API' },
]

export function Integrations({ c }: { c: Content }) {
  return (
    <section id="integracoes" className="scroll-mt-32 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="panel-grey grid gap-14 rounded-[24px] p-8 sm:p-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-16">
            <div>
              <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                {c.integrations.label}
              </span>
              <h2 className="display mt-8 max-w-[16ch] text-h2 text-balance text-ink">
                {c.integrations.title}
              </h2>
              <p className="mt-6 max-w-[34rem] leading-relaxed text-ink-soft">{c.integrations.closing}</p>

              <ol className="mt-10 border-t border-ink/10">
                {c.integrations.levels.map((level, i) => (
                  <li key={i} className="border-b border-ink/10 py-6">
                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                      {/* The category used to be "Nível 1/2/3", three characters
                          wide. It is now the category spelled out, which at
                          phone width leaves nothing for the name beside it, so
                          below sm the two stack instead of sharing a line. */}
                      <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="shrink-0 whitespace-nowrap font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                          {level.tag}
                        </span>
                        <span className="font-medium tracking-tight text-ink">{level.name}</span>
                      </span>
                      <span
                        className={`rounded-pill px-3 py-1 text-sm ${
                          level.badgeStrong
                            ? 'bg-accent-soft font-medium text-ink'
                            : 'border border-ink/15 text-ink-soft'
                        }`}
                      >
                        {level.badge}
                      </span>
                    </div>
                    <p className="mt-3 max-w-[40rem] text-[0.9375rem] leading-relaxed text-ink-soft">
                      {level.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="self-center rounded-[16px] border border-white bg-white/50 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {TILES.map(({ icon: Icon, name }) => (
                  <li
                    key={name}
                    className="flex aspect-[5/4] flex-col items-center justify-center gap-3 rounded-[12px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <Icon size={26} strokeWidth={1.5} aria-hidden className="text-ink" />
                    <span className="text-[0.9375rem] font-medium tracking-tight text-ink">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
