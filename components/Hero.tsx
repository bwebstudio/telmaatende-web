import type { Content } from '@/content'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-24 lg:py-28">
        <FadeIn className="max-w-3xl">
          <p className="eyebrow mb-6">Telma</p>
          <h1 className="font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {c.hero.headlineLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {c.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#precos" className="btn-primary">
              {c.hero.ctaPrimary}
            </a>
            <a href="#contacto" className="btn-secondary">
              {c.hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-10 text-sm text-ink-mute">{c.hero.backedBy}</p>
        </FadeIn>
      </Container>
      <div className="rule" />
    </section>
  )
}
