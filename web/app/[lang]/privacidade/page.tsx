import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent, isLocale } from '@/content'
import type { Locale } from '@/content'
import { LegalDoc } from '@/components/LegalDoc'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  return { title: `${getContent(lang).legal.privacy.title} · Telma`, robots: { index: false } }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = getContent(lang)
  return <LegalDoc page={c.legal.privacy} lang={lang as Locale} />
}
