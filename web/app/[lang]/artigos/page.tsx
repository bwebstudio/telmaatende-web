import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getContent, isLocale, locales } from '@/content'
import type { Locale } from '@/content'
import { articles } from '@/content/articles'
import { Container } from '@/components/ui/Container'
import { ArticleCover } from '@/components/ui/ArticleCover'

/** Everything written, newest first. */
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
  return { title: `${getContent(lang).resources.title} · Telma` }
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const c = getContent(lang)
  const list = articles[lang as Locale]

  return (
    <main className="pb-24 pt-32 sm:pb-30 sm:pt-40">
      <Container>
        <h1 className="display text-h1 text-ink">{c.resources.title}</h1>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((piece, i) => (
            <li
              key={piece.slug}
              className="group overflow-hidden rounded-[16px] border border-line bg-surface transition-shadow duration-fast ease-calm hover:shadow-2"
            >
              <Link href={`/${lang}/artigos/${piece.slug}`} className="block">
                <div className="aspect-[5/4] overflow-hidden">
                  <ArticleCover index={i} format={piece.format} kind={piece.kind} title={piece.title} image={piece.image} />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                    {piece.kind}
                  </span>
                  <h2 className="mt-3 text-[1.25rem] leading-snug tracking-tight text-ink group-hover:underline">
                    {piece.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{piece.lead}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
