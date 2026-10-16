import { ArrowRight, CalendarCheck, Mic, Phone, ShieldCheck, Siren, Unlock } from 'lucide-react'
import type { Content } from '@/content'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'

const ICONS = {
  shield: ShieldCheck,
  mic: Mic,
  siren: Siren,
  calendar: CalendarCheck,
  phone: Phone,
  unlock: Unlock,
}

/**
 * What a clinic can rely on, in one dark panel. It used to live only at the
 * bottom of the FAQ, where the people who needed it most were the least likely
 * to look. Nothing here is new: every line restates an answer the FAQ gives.
 *
 * A panel inside the container rather than a full-bleed band, so it reads as
 * an object on the page, with the page's white around it.
 */
export function Trust({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div
            data-nav-theme="dark"
            className="rounded-[24px] bg-dark px-8 py-16 text-white sm:px-14 sm:py-20 lg:px-20 lg:py-24"
          >
            <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-white/50">
              {c.trust.label}
            </span>
            <h2 className="display mt-8 max-w-[18ch] text-h2 text-balance">{c.trust.title}</h2>

            <ul className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
              {c.trust.items.map((item) => {
                const Icon = ICONS[item.icon]
                return (
                  <li key={item.title}>
                    <Icon size={24} strokeWidth={1.75} aria-hidden className="text-white" />
                    <h3 className="mt-6 text-[1.1875rem] font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-3 max-w-[32ch] leading-relaxed text-white/65">{item.text}</p>
                  </li>
                )
              })}
            </ul>

            <div className="mt-16 flex flex-wrap gap-3 lg:mt-20">
              <ButtonLink href="#contacto" variant="primary" onDark>
                {c.finalCta.cta}
                <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
              </ButtonLink>
              <ButtonLink href="#perguntas" variant="secondary" onDark>
                {c.faq.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
