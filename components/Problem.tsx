import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

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

        <div className="mt-12 border-t border-line">
          {c.problem.items.map((item, i) => (
            <FadeIn
              as="div"
              key={i}
              delay={i * 80}
              className="grid grid-cols-1 gap-2 border-b border-line py-8 sm:grid-cols-[1fr_2fr] sm:gap-10"
            >
              <h3 className="font-serif text-xl font-medium text-ink sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed text-ink-soft">{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
