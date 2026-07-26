import {
  PhoneIncoming,
  PhoneCall,
  CalendarCheck,
  FileText,
  PhoneForwarded,
  type LucideIcon,
} from 'lucide-react'
import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'
import { FeatureIcon } from './FeatureIcon'

const stepIcons: LucideIcon[] = [PhoneIncoming, PhoneCall, CalendarCheck, FileText]

export function HowItWorks({ c }: { c: Content }) {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-paper-2 py-16 sm:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>{c.how.label}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.how.title}
          </h2>
        </FadeIn>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {c.how.steps.map((step, i) => {
            const Icon = stepIcons[i % stepIcons.length]
            return (
              <FadeIn as="li" key={step.n} delay={i * 70} className="h-full">
                <div className="card card-lift group h-full">
                  <div className="flex items-center justify-between">
                    <FeatureIcon icon={Icon} />
                    <span
                      aria-hidden
                      className="font-serif text-4xl font-medium leading-none text-line-strong"
                    >
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-medium text-ink sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-lg leading-relaxed text-ink-soft">{step.text}</p>
                </div>
              </FadeIn>
            )
          })}
        </ol>

        <FadeIn className="mt-14 flex items-start gap-5 rounded-[1.75rem] bg-pine px-7 py-7 text-paper shadow-[0_28px_70px_-40px_rgba(27,58,46,0.9)] ring-1 ring-inset ring-paper/10 sm:items-center sm:gap-6 sm:px-10 sm:py-9">
          <span className="mt-1 shrink-0 text-accent-light sm:mt-0">
            <PhoneForwarded size={30} strokeWidth={1.6} aria-hidden />
          </span>
          <p className="font-serif text-xl font-normal leading-snug sm:text-2xl">
            {c.how.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
