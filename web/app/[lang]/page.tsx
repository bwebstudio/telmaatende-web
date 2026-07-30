import { notFound } from 'next/navigation'
import { getContent, isLocale } from '@/content'
import type { Locale } from '@/content'
import { voiceSampleFor } from '@/lib/audio'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Voice } from '@/components/sections/Voice'
import { Problem } from '@/components/sections/Problem'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Agenda } from '@/components/sections/Agenda'
import { Integrations } from '@/components/sections/Integrations'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'

/**
 * The home page, in narrative order. Each section answers exactly one question
 * a clinic owner has, in the order they ask it:
 *
 *   Hero          what is this?
 *   Voice         will it sound artificial?   ← the first objection, answered second
 *   Problem       does this happen to me?
 *   How it works  how does it actually work?
 *   Agenda        do I lose control of my diary?
 *   Integrations  do I have to change anything?
 *   Pricing       what does it cost?
 *   FAQ           everything else
 *   Final CTA     what is the next step?
 *
 * Still missing, and waiting on real content rather than on design: a trust
 * block (GDPR, EU hosting, who is behind Telma — currently buried in the FAQ)
 * and testimonials. Neither can be written without real clinics to quote.
 */
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const locale = lang as Locale
  const c = getContent(locale)
  const voiceSample = voiceSampleFor(locale)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-6 focus:py-3 focus:text-white"
      >
        {c.skipToContent}
      </a>

      <Header c={c} lang={locale} />

      <main id="conteudo">
        <Hero c={c} />
        {/* Rendered only where a recording exists — see lib/audio.ts. */}
        {voiceSample && <Voice c={c} src={voiceSample} />}
        <Problem c={c} />
        <HowItWorks c={c} />
        <Agenda c={c} />
        <Integrations c={c} />
        <Pricing c={c} lang={locale} />
        <Faq c={c} />
        <Contact c={c} />
        <FinalCta c={c} />
      </main>

      <Footer c={c} lang={locale} />
    </>
  )
}
