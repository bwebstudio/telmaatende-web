'use client'

import { useState } from 'react'
import { Check, MessageCircle } from 'lucide-react'
import type { Content, Locale } from '@/content'
import { localeMeta } from '@/content'
import type { Plan } from '@/content/types'
import { Section, SectionHeader } from '@/components/ui/Section'
import { Card, ICON_STROKE, IconChip } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

function formatEuro(value: number, lang: Locale): string {
  return new Intl.NumberFormat(localeMeta[lang].numberLocale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Three plans, per the Brand Bible's "tres tarjetas máximo". The custom plan is
 * a fourth product but not a fourth card — comparing three things is a
 * decision, comparing four is a task, and the custom plan is not something
 * anyone compares anyway. It sits below as a single quiet line.
 */
export function Pricing({ c, lang }: { c: Content; lang: Locale }) {
  const [annual, setAnnual] = useState(false)

  const standard = c.pricing.plans.filter((p) => !p.isCustom)
  const custom = c.pricing.plans.find((p) => p.isCustom)

  return (
    <Section id="precos" tone="bg" rule>
      <SectionHeader
        eyebrow={c.pricing.label}
        title={c.pricing.title}
        lead={c.pricing.intro}
        align="center"
      />

      <Reveal className="mt-24 flex flex-col items-center gap-5 lg:mt-30">
        <div
          role="group"
          aria-label={`${c.pricing.monthly} / ${c.pricing.annual}`}
          className="inline-flex rounded-pill border border-line-strong bg-surface p-1"
        >
          {[
            { label: c.pricing.monthly, value: false },
            { label: c.pricing.annual, value: true },
          ].map((option) => (
            <button
              key={option.label}
              type="button"
              aria-pressed={annual === option.value}
              onClick={() => setAnnual(option.value)}
              className={`min-h-[2.75rem] rounded-pill px-6 text-base font-medium transition-all duration-fast ease-calm ${
                annual === option.value
                  ? 'bg-brand text-white'
                  : 'text-ink-mute hover:text-ink'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {annual && (
          <p className="text-sm text-ink-soft">
            <span className="font-medium text-brand-accent">{c.pricing.annualBadge}</span>
            <span aria-hidden className="mx-2 text-line-strong">
              ·
            </span>
            {c.pricing.installFreeAnnual}
          </p>
        )}
      </Reveal>

      <div className="mt-20 grid items-stretch gap-5 lg:grid-cols-3">
        {standard.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} annual={annual} lang={lang} c={c} delay={i * 90} />
        ))}
      </div>

      {custom && (
        <Reveal delay={120} className="mt-5">
          <div className="flex flex-col gap-6 rounded-card border border-line bg-surface p-9 sm:flex-row sm:items-center sm:justify-between sm:p-11">
            <div>
              <h3 className="text-[1.0625rem] font-mid tracking-tight text-ink">{custom.name}</h3>
              <p className="mt-2 text-ink-soft">{custom.audience}</p>
            </div>
            <div className="flex shrink-0 items-center gap-6">
              <span className="display text-xl text-ink">{custom.priceText}</span>
              <ButtonLink href="#contacto" variant="secondary">
                {c.pricing.customCta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      )}

      {/* The WhatsApp add-on. Previously a gradient panel with a glow and a fake
          chat mock — the loudest thing on the page for a €39 extra. It is an
          add-on, so it looks like one. */}
      <Reveal delay={140} className="mt-5">
        <div className="flex flex-col gap-8 rounded-card border border-line bg-surface p-9 sm:p-11 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex items-start gap-5 lg:w-2/5">
            <IconChip icon={MessageCircle} />
            <div>
              <span className="text-label font-medium uppercase text-ink-mute">
                {c.pricing.whatsapp.label}
              </span>
              <h3 className="mt-2 text-[1.0625rem] font-mid tracking-tight text-ink">
                {c.pricing.whatsapp.name}
              </h3>
              <p className="mt-2 text-ink-soft">
                <span className="font-medium text-ink">{c.pricing.whatsapp.price}</span>{' '}
                {c.pricing.whatsapp.priceNote}
              </p>
            </div>
          </div>

          <ul className="flex flex-1 flex-col gap-3">
            {c.pricing.whatsapp.features.map((f, i) => (
              <li key={i} className="flex gap-3 leading-relaxed text-ink-soft">
                <Check
                  size={17}
                  strokeWidth={ICON_STROKE}
                  aria-hidden
                  className="mt-1 shrink-0 text-brand-accent"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={160} className="mt-20">
        <ul className="flex flex-col gap-2 text-sm text-ink-mute sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {c.pricing.finePrint.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

function PlanCard({
  plan,
  annual,
  lang,
  c,
  delay,
}: {
  plan: Plan
  annual: boolean
  lang: Locale
  c: Content
  delay: number
}) {
  const monthly = plan.priceMonthly ?? 0
  // Annual plans pay for ten months, so the effective monthly figure is lower.
  // Rounded to the euro to avoid prices like 165,83 €.
  const effective = annual ? Math.round((monthly * 10) / 12) : monthly

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <Card
        className={`relative flex h-full flex-col ${
          plan.highlighted ? 'border-brand/30' : ''
        }`}
      >
        {plan.highlighted && (
          <span className="absolute -top-3 left-9 rounded-pill border border-line bg-brand-wash px-4 py-1 text-label font-medium uppercase text-brand-accent">
            {c.pricing.mostChosen}
          </span>
        )}

        <h3 className="text-[1.0625rem] font-mid tracking-tight text-ink">{plan.name}</h3>
        <p className="mt-2 text-sm text-ink-mute">{plan.audience}</p>

        <div className="mt-8">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="display text-[2.75rem] leading-none tabular-nums text-ink sm:text-[3rem]">
              {formatEuro(effective, lang)}
            </span>
            <span className="text-ink-mute">{c.pricing.perMonth}</span>
          </div>
          {annual && (
            <p className="mt-2 text-sm text-ink-mute">
              <span className="line-through">
                {c.pricing.fromLabel} {formatEuro(monthly, lang)}
              </span>
              <span aria-hidden className="mx-1.5">
                ·
              </span>
              {c.pricing.billedAnnually}
            </p>
          )}
          {plan.installation !== null && (
            <p className="mt-2 text-sm text-ink-mute">
              {annual ? (
                <span className="font-medium text-brand-accent">
                  {c.pricing.installFreeAnnual}
                </span>
              ) : (
                <>
                  {c.pricing.installLabel}: {formatEuro(plan.installation, lang)}
                </>
              )}
            </p>
          )}
        </div>

        <ul className="mt-10 flex flex-1 flex-col gap-3.5 border-t border-line pt-10">
          {plan.features.map((f, i) => (
            <li key={i} className="flex gap-3 text-ink-soft">
              <Check
                size={17}
                strokeWidth={ICON_STROKE}
                aria-hidden
                className="mt-1 shrink-0 text-brand-accent"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <ButtonLink
          href="#contacto"
          variant={plan.highlighted ? 'primary' : 'secondary'}
          className="mt-12 w-full"
        >
          {c.pricing.planCta}
        </ButtonLink>
      </Card>
    </Reveal>
  )
}
