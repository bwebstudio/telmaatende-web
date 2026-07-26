import { Puzzle, RefreshCw, Code, type LucideIcon } from 'lucide-react'
import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'
import { FeatureIcon } from './FeatureIcon'

const decor: { icon: LucideIcon; bg: string }[] = [
  { icon: Puzzle, bg: 'bg-wash-peach' },
  { icon: RefreshCw, bg: 'bg-wash-sage' },
  { icon: Code, bg: 'bg-wash-sand' },
]

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

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {c.integrations.levels.map((level, i) => {
            const { icon, bg } = decor[i % decor.length]
            return (
              <FadeIn as="article" key={i} delay={i * 80} className="h-full">
                <div className={`card-lift group flex h-full flex-col rounded-2xl border border-line/60 p-6 transition duration-200 sm:p-7 ${bg}`}>
                  <div className="flex items-center gap-4">
                    <FeatureIcon icon={icon} bg="bg-paper/80" />
                    <span className="text-sm font-medium uppercase tracking-label text-ink-mute">
                      {level.tag}
                    </span>
                  </div>
                  <div className="mt-5">
                    <span
                      className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium leading-snug ${
                        level.badgeStrong
                          ? 'bg-accent text-paper'
                          : 'border border-line-strong text-ink-soft'
                      }`}
                    >
                      {level.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-ink sm:text-2xl">
                    {level.name}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-soft">{level.text}</p>
                </div>
              </FadeIn>
            )
          })}
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
