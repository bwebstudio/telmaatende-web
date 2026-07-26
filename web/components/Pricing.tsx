'use client'

import { useState } from 'react'
import { Check, MessageCircle, CheckCheck, CalendarCheck } from 'lucide-react'
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
  // Round to a whole euro so we avoid odd figures like 165,83 €.
  const effective = annual ? Math.round((monthly * 10) / 12) : monthly

  return (
    <div className="mt-5">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-serif text-4xl font-medium leading-none text-ink sm:text-5xl">
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
                      <span aria-hidden className="mt-0.5 text-accent">
                        <Check size={16} strokeWidth={2.25} />
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
                    <MessageCircle size={16} strokeWidth={1.75} />
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

        {/* WhatsApp add-on — modern, colourful promo card */}
        <FadeIn className="group relative mt-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-pine to-pine-soft text-paper shadow-[0_28px_70px_-40px_rgba(23,53,42,0.9)] ring-1 ring-inset ring-paper/10">
          {/* Soft brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-xs font-semibold uppercase tracking-label text-accent-light ring-1 ring-inset ring-paper/15">
                {c.pricing.whatsapp.label}
              </span>

              <div className="mt-5 flex items-center gap-4">
                <span
                  aria-hidden
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-paper/10 text-paper ring-1 ring-inset ring-paper/15 transition-transform duration-200 group-hover:scale-105"
                >
                  <MessageCircle size={28} strokeWidth={1.75} />
                </span>
                <h3 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                  {c.pricing.whatsapp.name}
                </h3>
              </div>

              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-semibold text-accent-light">
                  {c.pricing.whatsapp.price}
                </span>
                <span className="text-sage">{c.pricing.whatsapp.priceNote}</span>
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {c.pricing.whatsapp.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-paper/85">
                    <span aria-hidden className="mt-0.5 shrink-0 text-accent-light">
                      <Check size={16} strokeWidth={2.25} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-paper px-6 text-base font-medium text-ink transition-colors duration-200 hover:bg-paper/90"
              >
                {c.pricing.planCta}
              </a>
            </div>

            {/* Chat mock — the playful product detail */}
            <ChatMock />
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

// A small, language-neutral WhatsApp conversation mock — placeholder message
// bubbles ending in a booking confirmation. Purely decorative.
function ChatMock() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-sm animate-float [animation-delay:0.6s]">
      <div className="rounded-[1.5rem] bg-paper/[0.07] p-5 ring-1 ring-inset ring-paper/10 backdrop-blur">
        {/* Incoming */}
        <div className="mb-3 max-w-[78%] rounded-2xl rounded-tl-md bg-paper/12 px-4 py-3">
          <div className="h-2 w-32 rounded-full bg-paper/45" />
          <div className="mt-2 h-2 w-20 rounded-full bg-paper/25" />
        </div>
        {/* Outgoing */}
        <div className="mb-3 ml-auto max-w-[74%] rounded-2xl rounded-tr-md bg-accent px-4 py-3">
          <div className="h-2 w-28 rounded-full bg-paper/80" />
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-2 w-16 rounded-full bg-paper/55" />
            <CheckCheck size={13} className="ml-auto text-paper/80" />
          </div>
        </div>
        {/* Confirmation */}
        <div className="ml-auto inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1.5 text-pine shadow-sm">
          <CalendarCheck size={15} strokeWidth={2} className="text-accent" />
          <span className="h-2 w-16 rounded-full bg-pine/30" />
        </div>
      </div>
    </div>
  )
}
