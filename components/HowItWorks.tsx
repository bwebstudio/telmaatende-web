import type { Content } from '@/content'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

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

        <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {c.how.steps.map((step, i) => (
            <FadeIn as="li" key={step.n} delay={i * 70} className="flex gap-5">
              <span
                aria-hidden
                className="font-serif text-4xl font-medium leading-none text-accent sm:text-5xl"
              >
                {step.n}
              </span>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>

        <FadeIn className="mt-14 flex items-start gap-5 rounded-[1.75rem] bg-pine px-7 py-7 text-paper shadow-[0_28px_70px_-40px_rgba(27,58,46,0.9)] ring-1 ring-inset ring-paper/10 sm:items-center sm:gap-6 sm:px-10 sm:py-9">
          <span aria-hidden className="mt-1 shrink-0 text-accent-light sm:mt-0">
            <CallTransfer />
          </span>
          <p className="font-serif text-xl font-normal leading-snug sm:text-2xl">
            {c.how.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function CallTransfer() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6.6 10.8a11 11 0 0 0 4.6 4.6l1.6-1.6a1 1 0 0 1 1-.25 8 8 0 0 0 2.5.4 1 1 0 0 1 1 1v2.55a1 1 0 0 1-1 1A14 14 0 0 1 4 5a1 1 0 0 1 1-1h2.55a1 1 0 0 1 1 1 8 8 0 0 0 .4 2.5 1 1 0 0 1-.25 1z" />
      <path d="M15.5 3.5h5v5" />
      <path d="M20.5 3.5l-5.5 5.5" />
    </svg>
  )
}
