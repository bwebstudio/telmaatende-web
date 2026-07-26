import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

export function Agenda({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <FadeIn>
            <Eyebrow>{c.agenda.label}</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {c.agenda.title}
            </h2>
          </FadeIn>
          <FadeIn delay={80} className="flex flex-col justify-center gap-6">
            {c.agenda.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
