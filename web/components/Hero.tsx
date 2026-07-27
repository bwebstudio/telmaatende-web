import Image from 'next/image'
import { Clock, CalendarCheck, type LucideIcon } from 'lucide-react'
import type { Content } from '@/content'
import { stock } from '@/lib/images'
import { Container } from './Container'
import { FadeIn } from './FadeIn'

const highlightIcons: LucideIcon[] = [Clock, CalendarCheck]

export function Hero({ c }: { c: Content }) {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <FadeIn>
            <p className="eyebrow mb-6">Telma</p>
            <h1 className="font-serif text-[2.8rem] font-medium leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[5.2rem]">
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

          <FadeIn delay={120} className="relative mt-4 lg:mt-0">
            {/* Main image card */}
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] ring-1 ring-inset ring-line-strong shadow-[0_40px_80px_-40px_rgba(20,17,14,0.45)]">
              <Image
                src={stock.hero.src}
                alt={stock.hero.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle brand tint to tie the photo into the palette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-pine/25 via-transparent to-accent/5 mix-blend-multiply"
              />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-ink/5" />
            </div>

            {/* Floating highlight chips */}
            <div className="pointer-events-none absolute -left-4 top-8 hidden animate-float sm:block">
              <HighlightChip icon={highlightIcons[0]} text={c.hero.highlights[0]} />
            </div>
            <div className="pointer-events-none absolute -right-3 bottom-10 hidden animate-float [animation-delay:1.8s] sm:block">
              <HighlightChip icon={highlightIcons[1]} text={c.hero.highlights[1]} />
            </div>
          </FadeIn>
        </div>
      </Container>
      <div className="rule" />
    </section>
  )
}

function HighlightChip({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex max-w-[15rem] items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-[0_20px_45px_-25px_rgba(20,17,14,0.5)] backdrop-blur">
      <span
        aria-hidden
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"
      >
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="text-sm font-medium leading-snug text-ink">{text}</span>
    </div>
  )
}
