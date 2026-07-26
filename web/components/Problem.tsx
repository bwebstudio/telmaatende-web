import { PhoneMissed, MoonStar, Users, type LucideIcon } from 'lucide-react'
import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'
import { FeatureIcon } from './FeatureIcon'

const decor: { icon: LucideIcon; bg: string }[] = [
  { icon: PhoneMissed, bg: 'bg-wash-peach' },
  { icon: MoonStar, bg: 'bg-wash-sage' },
  { icon: Users, bg: 'bg-wash-sand' },
]

export function Problem({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>{c.problem.label}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.problem.title}
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.problem.items.map((item, i) => {
            const { icon, bg } = decor[i % decor.length]
            return (
              <FadeIn as="article" key={i} delay={i * 80} className="h-full">
                <div className={`card-lift group h-full rounded-2xl border border-transparent p-6 transition duration-200 sm:p-7 ${bg}`}>
                  <FeatureIcon icon={icon} bg="bg-paper/80" />
                  <h3 className="mt-5 font-serif text-xl font-medium text-ink sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
