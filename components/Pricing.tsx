'use client'

import { useState } from 'react'
import type { Content, Locale } from '@/content'
import type { Plan } from '@/content/types'
import { Container, Eyebrow } from './Container'
import { FadeIn } from './FadeIn'

function formatEuro(value: number, lang: Locale): string {
  const locale = lang === 'pt' ? 'pt-PT' : 'en-IE'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function PlanPrice({
  plan,
  annual,
  lang,
  c,
}: {
  plan: Plan
  annual: boolean
  lang: Locale
  c: Content
}) {
  if (plan.isCustom || plan.priceMonthly === null) {
    return (
      <div className="mt-5">
        <span className="font-serif text-3xl font-medium text-ink sm:text-4xl">
          {plan.priceText}
        </span>
      </div>
    )
  }

  const monthly = plan.priceMonthly
  // Annual plans pay for 10 months, so the effective monthly price is lower.
  const effective = annual ? (monthly * 10) / 12 : monthly

  return (
    <div className="mt-5">
      <div className="flex items-baseline gap-2">
        <span className="font-serif text-4xl font-medium text-ink sm:text-5xl">
          {formatEuro(effective, lang)}
        </span>
        <span className="text-base text-ink-mute">{c.pricing.perMonth}</span>
      </div>
      {annual && (
        <p className="mt-1 text-sm text-ink-mute">
          <span className="line-through">
            {c.pricing.fromLabel} {formatEuro(monthly, lang)}
          </span>
          <span className="mx-1.5" aria-hidden>
            ·
          </span>
          {c.pricing.billedAnnually}
        </p>
      )}
    </div>
  )
}

export function Pricing({ c, lang }: { c: Content; lang: Locale }) {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="precos" className="scroll-mt-24 border-t border-line py-16 sm:py-24">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>{c.pricing.label}</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            {c.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{c.pricing.intro}</p>
        </FadeIn>

        {/* Billing toggle */}
        <FadeIn className="mt-10 flex flex-wrap items-center gap-4">
          <div
            role="group"
            aria-label={`${c.pricing.monthly} / ${c.pricing.annual}`}
            className="inline-flex rounded-full border border-line-strong bg-paper p-1"
          >
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setAnnual(false)}
              className={`min-h-[2.75rem] rounded-full px-5 text-base font-medium transition-colors ${
                !annual ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {c.pricing.monthly}
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setAnnual(true)}
              className={`min-h-[2.75rem] rounded-full px-5 text-base font-medium transition-colors ${
                annual ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {c.pricing.annual}
            </button>
          </div>
          {annual && (
            <span className="inline-flex items-center gap-2 text-base font-medium text-accent">
              {c.pricing.annualBadge}
              <span className="text-ink-mute" aria-hidden>
                ·
              </span>
              <span className="text-ink-soft">{c.pricing.installFreeAnnual}</span>
            </span>
          )}
        </FadeIn>

        {/* Plan grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {c.pricing.plans.map((plan, i) => (
            <FadeIn
              as="article"
              key={plan.id}
              delay={i * 60}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? 'border-accent bg-paper shadow-[0_1px_0_0_theme(colors.accent)]'
                  : 'border-line bg-paper'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-sm font-semibold uppercase tracking-wide text-paper">
                  {c.pricing.mostChosen}
                </span>
              )}
              <h3 className="font-serif text-2xl font-medium text-ink">
                {plan.name}
              </h3>
              <p className="mt-2 text-base text-ink-mute">{plan.audience}</p>

              <PlanPrice plan={plan} annual={annual} lang={lang} c={c} />

              {plan.installation !== null && (
                <p className="mt-3 text-sm text-ink-mute">
                  {annual ? (
                    <span className="font-medium text-accent">
                      {c.pricing.installFreeAnnual}
                    </span>
                  ) : (
                    <>
                      {c.pricing.installLabel}: {formatEuro(plan.installation, lang)}
                    </>
                  )}
                </p>
              )}

              {plan.features.length > 0 && (
                <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex gap-3 text-base text-ink-soft">
                      <span aria-hidden className="mt-1 text-accent">
                        <Check />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* WhatsApp add-on, shown on every card so it reads consistently */}
              <div className="mt-auto pt-6">
                <p className="flex items-center gap-2 text-sm text-ink-mute">
                  <span aria-hidden className="text-accent">
                    <WhatsAppMark />
                  </span>
                  {c.pricing.whatsappCardNote}
                </p>
                <a
                  href="#contacto"
                  className={`mt-4 w-full ${
                    plan.highlighted ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  {plan.isCustom ? c.pricing.customCta : c.pricing.planCta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* WhatsApp add-on, premium dark treatment */}
        <FadeIn className="mt-8 overflow-hidden rounded-[1.75rem] bg-pine text-paper shadow-[0_28px_70px_-40px_rgba(27,58,46,0.9)] ring-1 ring-inset ring-paper/10">
          <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 md:grid-cols-[1fr_1px_1.1fr] md:gap-12">
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-baseline gap-2 text-sm font-medium uppercase tracking-label text-accent-light">
                <span aria-hidden className="font-serif text-base font-semibold leading-none">
                  /
                </span>
                {c.pricing.whatsapp.label}
              </span>
              <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                {c.pricing.whatsapp.name}
              </h3>
              <p className="mt-5 text-lg">
                <span className="font-serif text-3xl font-semibold text-accent-light">
                  {c.pricing.whatsapp.price}
                </span>{' '}
                <span className="text-sage">{c.pricing.whatsapp.priceNote}</span>
              </p>
            </div>

            <div aria-hidden className="hidden bg-paper/15 md:block" />

            <ul className="flex flex-col justify-center gap-4">
              {c.pricing.whatsapp.features.map((f, j) => (
                <li key={j} className="flex gap-3.5 text-base leading-relaxed text-paper/85">
                  <span aria-hidden className="mt-1 shrink-0 text-accent-light">
                    <Check />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Fine print, legible */}
        <FadeIn className="mt-10">
          <ul className="flex flex-col gap-2 text-base text-ink-mute sm:flex-row sm:flex-wrap sm:gap-x-8">
            {c.pricing.finePrint.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  )
}

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 8.5l3.2 3.2L13 4.5" />
    </svg>
  )
}

function WhatsAppMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2.5 13.5l1-3a5.5 5.5 0 1 1 2 2z" />
    </svg>
  )
}
