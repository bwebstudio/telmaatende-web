import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

export function Integrations({ c }: { c: Content }) {
  return (
    <section id="integracoes" className="scroll-mt-24 bg-paper-2 py-16 sm:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>{c.integrations.label}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.integrations.title}
          </h2>
        </FadeIn>

        <div className="mt-12 flex flex-col">
          {c.integrations.levels.map((level, i) => (
            <FadeIn
              as="div"
              key={i}
              delay={i * 80}
              className="grid grid-cols-1 gap-4 border-t border-line py-8 sm:grid-cols-[13rem_1fr] sm:gap-10"
            >
              <div>
                <span className="text-sm font-medium uppercase tracking-label text-ink-mute">
                  {level.tag}
                </span>
                <div className="mt-3">
                  <span
                    className={`inline-block rounded-2xl px-4 py-2 text-sm font-medium leading-snug ${
                      level.badgeStrong
                        ? 'bg-accent text-paper'
                        : 'border border-line-strong text-ink-soft'
                    }`}
                  >
                    {level.badge}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink sm:text-2xl">
                  {level.name}
                </h3>
                <p className="mt-2 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {level.text}
                </p>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-line" />
        </div>

        <FadeIn className="mt-10 max-w-2xl">
          <p className="font-serif text-xl leading-relaxed text-ink sm:text-2xl">
            {c.integrations.closing}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
