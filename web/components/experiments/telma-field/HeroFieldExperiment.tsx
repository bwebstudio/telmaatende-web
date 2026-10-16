import { ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { ICON_STROKE } from '@/components/ui/Card'
import { TelmaConversationField } from './TelmaConversationField'

/** Flip to false (or revert Hero.tsx) to get the production hero back. */
export const HERO_FIELD_EXPERIMENT = true

/**
 * EXPERIMENT: the hero on black, with the typographic field in place of the
 * footage. Same copy, same type, same actions as components/sections/Hero.tsx;
 * only the surface goes dark so the sculpture can be judged in context.
 */
export function HeroFieldExperiment({ c }: { c: Content }) {
  return (
    <section data-nav-theme="dark" className="hero-fill relative overflow-hidden bg-[#0a0a0a] pb-0 pt-[calc(var(--nav-h)+3rem)] sm:pt-[calc(var(--nav-h)+4rem)] lg:pb-[9.5rem] lg:pt-[calc(var(--nav-h)+5rem)]">
      <TelmaConversationField />

      <div className="hero-frame hero-gutter relative grid grid-cols-1 pr-6 sm:pr-10 lg:grid-cols-[minmax(0,32rem)_1fr] lg:items-stretch lg:pr-0">
        <div data-field-copy className="lg:flex lg:flex-col lg:justify-center">
          <Reveal>
            <span className="mb-6 inline-block font-mono text-[0.8125rem] uppercase tracking-[0.1em] text-white/55">
              {c.hero.eyebrow}
            </span>
            <h1 className="display text-hero text-balance text-white lg:text-[3rem] xl:text-[3.25rem]">
              {c.hero.headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={320}>
            <p className="hero-gap-lead max-w-prose text-xl leading-[1.55] text-white/65">
              {c.hero.subtitle}
            </p>

            <div className="hero-gap-action flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink href="#precos" variant="primary" onDark>
                {c.hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#contacto" variant="quiet" onDark>
                {c.hero.ctaSecondary}
                <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        {/* On phones the sheet lies under the copy, so it needs room of its own. */}
        <div className="h-[62svh] min-h-[22rem] lg:hidden" />
      </div>
    </section>
  )
}
