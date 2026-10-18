'use client'

import { useState } from 'react'
import { Check, MessageCircle, Plus } from 'lucide-react'
import type { Content, Locale } from '@/content'
import { localeMeta } from '@/content'
import type { Plan } from '@/content/types'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ICON_STROKE } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'
import { signupUrl } from '@/lib/signup'

function formatEuro(value: number, lang: Locale): string {
  return new Intl.NumberFormat(localeMeta[lang].numberLocale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Three plans, per the Brand Bible's "tres tarjetas máximo", in the reference's
 * figures grammar: grey panels where the price is the largest thing, set like
 * a statistic. The most chosen plan is the one tile that carries the accent.
 *
 * The custom plan and the WhatsApp add-on are not plans to compare, so they
 * leave the grid for one dark panel underneath, side by side. The fine print
 * becomes a quiet grid instead of a centred paragraph.
 */
/**
 * The WhatsApp add-on is off the price list until Telma answers on WhatsApp.
 * Today nothing receives a WhatsApp message, so it cannot be sold as Telma
 * answering and booking there. The content stays in content/ for when it does;
 * the panel has the same switch (WHATSAPP_ON_SALE in lib/onboarding/catalog.ts).
 */
const WHATSAPP_ON_SALE = false

/**
 * Rede is off the price list until the product has locations.
 *
 * It is sold as several locations under one contract, each with its own number
 * and its own agenda, all in one panel. None of that exists: a user belongs to
 * one clinic, a clinic is one row with one number and one agenda, and there is
 * no table of locations and no way to see two at once. The grid is the one
 * place on the site that can start a checkout, so this is the place it has to
 * come off; a group with several addresses goes to the contact row instead,
 * whose audience line now says so.
 *
 * Nothing about Rede is deleted. Its price, audience and features are still in
 * content/, its row is still in the `plans` table, and the sign-up has the same
 * switch (SIGNUP_PLANS in lib/onboarding/catalog.ts). The day there are real
 * locations, this line is where it comes back.
 */
const REDE_ON_SALE = false

export function Pricing({ c, lang }: { c: Content; lang: Locale }) {
  const [annual, setAnnual] = useState(false)

  const standard = c.pricing.plans.filter(
    (p) => !p.isCustom && (REDE_ON_SALE || p.id !== 'rede')
  )
  const custom = c.pricing.plans.find((p) => p.isCustom)

  return (
    <Section id="precos" tone="bg" rule>
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
          <SectionHeader eyebrow={c.pricing.label} title={c.pricing.title} lead={c.pricing.intro} align="center" />
          {/* How to choose, not which to choose: the plans already say who they
              are for, so this points the reader at the one number that decides it. */}
          <p className="mx-auto mt-4 max-w-lead text-ink-mute">{c.pricing.chooseHint}</p>
        </div>

        <Reveal className="flex flex-col items-center gap-3">
          <div
            role="group"
            aria-label={`${c.pricing.monthly} / ${c.pricing.annual}`}
            className="inline-flex rounded-pill border border-ink/25 p-1.5"
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
                className={`min-h-[2.75rem] rounded-pill px-7 text-base transition-all duration-fast ease-calm ${
                  annual === option.value ? 'bg-ink text-white' : 'text-ink hover:bg-ink/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p
            className={`font-mono text-[0.8125rem] uppercase tracking-[0.08em] transition-opacity duration-fast ${
              annual ? 'text-ink opacity-100' : 'opacity-0'
            }`}
            aria-hidden={!annual}
          >
            {c.pricing.annualBadge}
          </p>
        </Reveal>
      </div>

      {/* As many columns as there are plans, so two cards do not sit in a
          three-column grid with a hole where Rede used to be. */}
      <div
        className={`mt-14 grid items-stretch gap-5 lg:mt-16 ${
          standard.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
        }`}
      >
        {standard.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} annual={annual} lang={lang} c={c} delay={i * 90} />
        ))}
      </div>

      {/* The custom plan and the WhatsApp add-on are footnotes to the grid, not
          rivals to it: two slim rows, each one line of what it is and one way
          in. The add-on's features sit behind its name instead of on the page. */}
      <Reveal delay={120} className={`mt-5 grid gap-5 ${WHATSAPP_ON_SALE ? 'lg:grid-cols-2' : ''}`}>
        {custom && (
          <div className="flex flex-col gap-5 rounded-[20px] border border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-medium tracking-tight text-ink">
                {custom.name} <span className="text-ink-mute">· {custom.priceText}</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">{custom.audience}</p>
            </div>
            <ButtonLink href="#contacto" variant="secondary" className="shrink-0">
              {c.pricing.customCta}
            </ButtonLink>
          </div>
        )}

        {WHATSAPP_ON_SALE && (
        <details className="group rounded-[20px] border border-line p-6 sm:p-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-4">
              <MessageCircle size={20} strokeWidth={ICON_STROKE} aria-hidden className="shrink-0 text-ink" />
              <span>
                <span className="block font-medium tracking-tight text-ink">
                  {c.pricing.whatsapp.name}{' '}
                  <span className="ml-1 rounded-pill bg-accent-wash px-2 py-0.5 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink">
                    {c.pricing.whatsapp.label}
                  </span>
                </span>
                <span className="mt-1 block text-sm text-ink-soft">
                  {c.pricing.whatsapp.price} {c.pricing.whatsapp.priceNote}
                </span>
              </span>
            </span>
            <Plus
              size={18}
              strokeWidth={ICON_STROKE}
              aria-hidden
              className="shrink-0 text-ink transition-transform duration-fast group-open:rotate-45"
            />
          </summary>
          <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
            {c.pricing.whatsapp.features.map((f, k) => (
              <li key={k} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                <Check size={15} strokeWidth={ICON_STROKE} aria-hidden className="mt-0.5 shrink-0 text-ink" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </details>
        )}
      </Reveal>

      <Reveal delay={160} className="mt-14">
        <ul className="grid gap-x-10 gap-y-4 border-t border-line pt-8 text-sm leading-relaxed text-ink-mute sm:grid-cols-2 lg:grid-cols-3">
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

  // The plan id travels to the wizard, so the last step opens on the plan the
  // reader just chose. Choosing it twice is how a reader starts to wonder
  // whether the first choice registered.
  const signup = signupUrl(plan.id)

  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-[24px] p-8 sm:p-10 ${
          // The one highlighted tile carries the accent, as the reference
          // highlights one customer among many.
          plan.highlighted
            ? 'bg-[linear-gradient(160deg,rgb(var(--accent-soft)),rgb(var(--accent-wash))_75%)]'
            : 'panel-grey'
        }`}
      >
        {plan.highlighted && (
          <span className="absolute right-8 top-8 rounded-pill bg-ink px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-white sm:right-10 sm:top-10">
            {c.pricing.mostChosen}
          </span>
        )}

        <h3 className="text-[1.5rem] font-medium tracking-tight text-ink">{plan.name}</h3>
        <p className="mt-2 max-w-[28ch] text-ink-soft">{plan.audience}</p>

        <div className="mt-12">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="display text-[4rem] leading-none tracking-[-0.03em] tabular-nums text-ink sm:text-[4.5rem]">
              {formatEuro(effective, lang)}
            </span>
            <span className="text-ink-mute">{c.pricing.perMonth}</span>
          </div>
          {/* "Is this per location or in total?" is the first thing a group with
              several addresses asks, so the answer sits against the number. */}
          {plan.priceUnit && (
            <p className="mt-2 text-sm font-medium text-ink-soft">{plan.priceUnit}</p>
          )}
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
          {/* No entry fee on any plan. Setting a clinic up is real work, but it
              is carried by the subscription: a number here is the one figure a
              clinic sees before it knows whether any of this works. */}
          <p className="mt-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-ink-soft">
            {c.pricing.installIncluded}
          </p>
        </div>

        {/* The allowance is the plan. It is metered in minutes because that is
            how Telma costs, with the equivalent in calls underneath so a clinic
            can picture it. */}
        {plan.allowance && (
          <div className="mt-9 border-t border-ink/10 pt-8">
            <p className="font-medium text-ink">{plan.allowance}</p>
            {plan.allowanceNote && (
              <p className="mt-1 text-sm text-ink-mute">{plan.allowanceNote}</p>
            )}
          </div>
        )}

        <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-ink/10 pt-8">
          {plan.features.map((f, i) => (
            <li key={i} className="flex gap-3 text-ink-soft">
              <Check
                size={17}
                strokeWidth={ICON_STROKE}
                aria-hidden
                className="mt-1 shrink-0 text-ink"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {plan.extraSite && (
          <p className="mt-8 border-t border-ink/10 pt-8 text-sm text-ink-mute">
            {plan.extraSite}
          </p>
        )}

        {/* The one button on the page that can start a sign-up. It only says
            so when there is a sign-up to start: with NEXT_PUBLIC_ONBOARDING_URL
            unset this stays the contact form it has always been, rather than
            promising a checkout that does not exist yet. */}
        <ButtonLink
          href={signup ?? '#contacto'}
          variant={plan.highlighted ? 'primary' : 'secondary'}
          className="mt-10 w-full"
        >
          {signup ? c.pricing.planCtaSignup : c.pricing.planCta}
        </ButtonLink>
      </div>
    </Reveal>
  )
}
