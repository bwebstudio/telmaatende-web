import { notFound } from 'next/navigation'
import { getContent, isLocale } from '@/content'
import type { Locale } from '@/content'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { HowItWorks } from '@/components/HowItWorks'
import { Agenda } from '@/components/Agenda'
import { Pricing } from '@/components/Pricing'
import { Integrations } from '@/components/Integrations'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  const locale = lang as Locale
  const c = getContent(locale)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
      >
        {locale === 'pt' ? 'Saltar para o conteúdo' : 'Skip to content'}
      </a>
      <Header c={c} lang={locale} />
      <main id="conteudo">
        <Hero c={c} />
        <Problem c={c} />
        <HowItWorks c={c} />
        <Agenda c={c} />
        <Pricing c={c} lang={locale} />
        <Integrations c={c} />
        <Faq c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} lang={locale} />
    </>
  )
}
