import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { isLocale, locales, localeMeta } from '@/content'
import { hoteisPt } from '@/content/verticals/hoteis-pt'
import { publicFile } from '@/lib/media'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Voice } from '@/components/sections/Voice'
import { Problem } from '@/components/sections/Problem'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Pricing } from '@/components/sections/Pricing'
import { Faq } from '@/components/sections/Faq'
import { Trust } from '@/components/sections/Trust'
import { Clinics } from '@/components/sections/Clinics'
import { Banner } from '@/components/sections/Banner'
import { Calls } from '@/components/sections/Calls'
import { Contact } from '@/components/sections/Contact'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'
import {
  CONVERSATION_FLOW_EXPERIMENT,
  ConversationFlowSection,
} from '@/components/experiments/conversation-flow/ConversationFlowSection'
import {
  PROCESS_ANIMATION_EXPERIMENT,
  ProcessAnimationSection,
} from '@/components/experiments/process-animation/ProcessAnimationSection'

/**
 * ── /pt/hoteis ─────────────────────────────────────────────────────────────
 * The clinic home, told to a hotel. Same sections in the same order, with
 * three left out because they are about clinics and have no hotel version:
 *
 *   Agenda        the slot diary is how a clinic books, not how a hotel does
 *   Integrations  Google Calendar and iCal mean nothing next to a PMS; the
 *                 connection to the hotel's own reservation system is
 *                 explained in the FAQ instead
 *   Resources     the articles are written for clinics
 *
 * Portuguese only for now. The other languages send the reader to their own
 * home rather than to a page that does not exist.
 *
 * Every photograph and the voice sample are optional: see lib/media.ts and
 * assets/photography/hoteis-prompts.md for what goes where.
 */
const PATH = 'hoteis'

const IMG = '/images/hoteis'
const HOW = ['como-chamada', 'como-atende', 'como-painel', 'como-resumo'].map((n) =>
  publicFile(`${IMG}/${n}.webp`)
)
const AUDIENCE = {
  hotel: `${IMG}/para-hotel.webp`,
  local: `${IMG}/para-local.webp`,
  rural: `${IMG}/para-rural.webp`,
  hostel: `${IMG}/para-hostel.webp`,
}
const AUDIENCE_READY = Object.values(AUDIENCE).every((src) => publicFile(src))
const BANNER = publicFile(`${IMG}/rececao.webp`)
// The same kind of call twice: once in Portuguese, once with a guest who asks
// for English, which is the argument a hotel cares about most.
const VOICE = [
  { label: 'Em português', src: publicFile('/audio/telma-hotel-pt.mp3') },
  { label: 'O hóspede pede inglês', src: publicFile('/audio/telma-hotel-en.mp3') },
].flatMap((t) => (t.src ? [{ label: t.label, src: t.src }] : []))

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (lang !== 'pt') return {}
  const c = hoteisPt
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: { canonical: `/pt/${PATH}` },
    openGraph: {
      type: 'website',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url: `/pt/${PATH}`,
      siteName: 'Telma Atende',
      locale: localeMeta.pt.ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
    },
  }
}

export default async function HotelPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang) || lang !== 'pt') redirect(`/${isLocale(lang) ? lang : 'pt'}`)

  // "Para quem" waits for its four photographs, and so does its menu link.
  const c = AUDIENCE_READY
    ? hoteisPt
    : {
        ...hoteisPt,
        header: {
          ...hoteisPt.header,
          nav: hoteisPt.header.nav.filter((item) => item.href !== '#para-quem'),
        },
      }

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-pill focus:bg-ink focus:px-6 focus:py-3 focus:text-white"
      >
        {c.skipToContent}
      </a>

      <Header c={c} lang="pt" selfSignup={false} home={`/pt/${PATH}`} />

      <main id="conteudo">
        <Hero c={c} />
        {VOICE.length > 0 && <Voice c={c} src={VOICE} />}
        <Problem c={c} />
        <HowItWorks c={c} media={HOW} />
        {CONVERSATION_FLOW_EXPERIMENT && <ConversationFlowSection c={c} />}
        {PROCESS_ANIMATION_EXPERIMENT && <ProcessAnimationSection c={c} />}
        <Calls c={c} listen={VOICE.length > 0} />
        {BANNER && <Banner c={c} src={BANNER} focus="object-center" />}
        <Trust c={c} />
        {AUDIENCE_READY && (
          <Clinics
            c={c}
            media={Object.fromEntries(Object.entries(AUDIENCE).map(([id, src]) => [id, { src }]))}
          />
        )}
        <Pricing c={c} lang="pt" selfSignup={false} />
        <Faq c={c} />
        <Contact c={c} />
        <FinalCta c={c} />
      </main>

      <Footer c={c} lang="pt" />
    </>
  )
}
