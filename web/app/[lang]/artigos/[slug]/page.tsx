import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getContent, isLocale, locales } from '@/content'
import type { Locale } from '@/content'
import { allSlugs, articles, pieceBySlug } from '@/content/articles'
import { ArticleDoc } from '@/components/ArticleDoc'

/**
 * One piece of writing. The segment is `artigos` in all three languages, the
 * same way `privacidade` and `termos` already are: one address per piece, so a
 * link shared in Portuguese still resolves for a reader who switches to
 * Spanish.
 */
export function generateStaticParams() {
  return locales.flatMap((lang) => allSlugs.map((slug) => ({ lang, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLocale(lang)) return {}
  const piece = pieceBySlug(lang, slug)
  if (!piece) return {}
  return {
    title: `${piece.title} · Telma`,
    description: piece.lead,
    alternates: {
      canonical: `/${lang}/artigos/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/artigos/${slug}`])),
    },
    openGraph: { title: piece.title, description: piece.lead, type: 'article' },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLocale(lang)) notFound()
  const piece = pieceBySlug(lang, slug)
  if (!piece) notFound()
  // The cover's colour comes from the position in the collection, so the page
  // opens in the same colour as the card that was clicked.
  const index = articles[lang].findIndex((p) => p.slug === slug)
  return <ArticleDoc piece={piece} index={index} lang={lang as Locale} c={getContent(lang)} />
}
