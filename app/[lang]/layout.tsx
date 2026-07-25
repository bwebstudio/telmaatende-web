import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { display, grotesk } from '@/lib/fonts'
import { getContent, isLocale, locales } from '@/content'
import '../globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const c = getContent(lang)

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        pt: '/pt',
        en: '/en',
        'x-default': '/pt',
      },
    },
    openGraph: {
      type: 'website',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url: `/${lang}`,
      siteName: 'Telma Atende',
      locale: lang === 'pt' ? 'pt_PT' : 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <html lang={lang} className={`${display.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
