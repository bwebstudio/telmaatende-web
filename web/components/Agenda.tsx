import Image from 'next/image'
import { CalendarClock } from 'lucide-react'
import type { Content } from '@/content'
import { stock } from '@/lib/images'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

export function Agenda({ c }: { c: Content }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col gap-6">
            <Eyebrow>{c.agenda.label}</Eyebrow>
            <h2 className="font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {c.agenda.title}
            </h2>
            {c.agenda.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={80} className="relative order-first lg:order-last">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] ring-1 ring-inset ring-line-strong shadow-[0_40px_80px_-45px_rgba(20,17,14,0.45)]">
              <Image
                src={stock.agenda.src}
                alt={stock.agenda.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-pine/25 via-transparent to-accent/5 mix-blend-multiply"
              />
            </div>

            {/* Floating chip */}
            <div className="pointer-events-none absolute -bottom-5 -left-4 hidden animate-float [animation-delay:1.2s] sm:block">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-[0_20px_45px_-25px_rgba(20,17,14,0.5)] backdrop-blur">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
                >
                  <CalendarClock size={20} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium leading-snug text-ink">
                  {c.agenda.label}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
