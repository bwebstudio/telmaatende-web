import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Content } from '@/content'
import type { Locale } from '@/content'
import { articles, isWritten, type Piece } from '@/content/articles'
import { Container } from './ui/Container'
import { ArticleCover } from './ui/ArticleCover'
import { ButtonLink } from './ui/Button'
import { ICON_STROKE } from './ui/Card'

/**
 * A piece of writing: guide or article, same template.
 *
 * ── WHAT IT TAKES FROM THE REFERENCE, AND WHAT IT LEAVES ───────────────────
 * The shape is the reference's: breadcrumb, headline, a metadata row, a wide
 * cover, one column with no sidebar, related pieces, a closing action. Three
 * things are deliberately not copied.
 *
 * No author photograph and no job title. They have a Head of Communications;
 * we would be inventing a byline portrait, which is the exact register this
 * site has spent its whole build avoiding.
 *
 * No form in front of a guide. They gate because they are farming enterprise
 * leads over a sales cycle measured in months. A clinic manager who opens a
 * page about recording law and meets a form leaves, and we wanted the trust
 * more than the address. The ask goes at the end, to somebody who read it.
 *
 * No invented numbers. Their best move is a headline that is the finding
 * rather than the subject, and it is worth copying the day we have findings
 * of our own. We do not yet.
 *
 * ── THE COVER IS NOT AN ASSET ──────────────────────────────────────────────
 * The same ArticleCover the card uses, run wide. A new piece arrives with its
 * own header image for the price of writing a title.
 */

const dateFor = (lang: Locale, iso: string) =>
  new Intl.DateTimeFormat(lang === 'pt' ? 'pt-PT' : lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))

function Body({ piece }: { piece: Piece }) {
  return (
    <div className="mt-14 flex flex-col gap-6">
      {piece.body.map((block, i) => {
        if (typeof block === 'string')
          return (
            <p key={i} className="text-body-lg leading-relaxed text-ink-soft">
              {block}
            </p>
          )
        if ('h' in block)
          return (
            <h2 key={i} className="mt-8 text-[1.5rem] font-medium leading-snug tracking-tight text-ink">
              {block.h}
            </h2>
          )
        if ('list' in block)
          return (
            <ul key={i} className="flex flex-col gap-3">
              {block.list.map((item) => (
                <li key={item} className="flex gap-3 text-body-lg leading-relaxed text-ink-soft">
                  <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                  {item}
                </li>
              ))}
            </ul>
          )
        if ('quote' in block)
          return (
            <blockquote key={i} className="my-6 border-l-2 border-accent-strong pl-6">
              <p className="display text-[1.5rem] leading-snug text-ink">{block.quote}</p>
              {block.by && <cite className="mt-3 block not-italic text-ink-mute">{block.by}</cite>}
            </blockquote>
          )
        return (
          <aside key={i} className="my-4 rounded-card border border-line bg-surface-sunken px-6 py-5">
            <p className="leading-relaxed text-ink-soft">{block.note}</p>
          </aside>
        )
      })}
    </div>
  )
}

export function ArticleDoc({
  piece,
  index,
  lang,
  c,
}: {
  piece: Piece
  /** Position in the collection, so the cover keeps the colour its card had. */
  index: number
  lang: Locale
  c: Content
}) {
  const more = articles[lang].filter((p) => p.slug !== piece.slug).slice(0, 3)

  return (
    <main className="pb-24 pt-32 sm:pb-30 sm:pt-40">
      <Container className="max-w-3xl">
        <Link
          href={`/${lang}#recursos`}
          className="inline-flex items-center gap-2 text-ink-mute transition-colors duration-fast ease-calm hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={ICON_STROKE} aria-hidden />
          {c.resources.title}
        </Link>

        <p className="mt-12 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
          {piece.kind}
        </p>
        <h1 className="mt-4 display text-h1 text-balance text-ink">{piece.title}</h1>
        <p className="mt-6 max-w-lead text-body-lg leading-relaxed text-ink-soft">{piece.lead}</p>

        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-mute">
          <time dateTime={piece.date}>{dateFor(lang, piece.date)}</time>
          <span aria-hidden>·</span>
          <span>{c.resources.readingTime.replace('{n}', String(piece.minutes))}</span>
        </p>
      </Container>

      <Container className="mt-12">
        <div className="overflow-hidden rounded-[24px] border border-line">
          <div className="aspect-[2/1]">
            <ArticleCover index={index} format={piece.format} kind={piece.kind} title={piece.title} image={piece.image} />
          </div>
        </div>
      </Container>

      <Container className="max-w-3xl">
        {isWritten(piece) ? (
          <Body piece={piece} />
        ) : (
          <aside className="mt-14 rounded-card border border-line bg-surface-sunken px-6 py-5">
            <p className="leading-relaxed text-ink-soft">{c.resources.unwritten}</p>
          </aside>
        )}

        {/* The ask, at the end, to somebody who read it. */}
        <div className="mt-20 rounded-[24px] bg-dark px-8 py-12 text-white sm:px-12">
          <h2 className="display max-w-[20ch] text-h2 text-balance">{c.finalCta.title}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${lang}#precos`} variant="accent">
              {c.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href={`/${lang}#contacto`} variant="secondary" onDark>
              {c.banner.cta}
              <ArrowRight size={16} strokeWidth={ICON_STROKE} aria-hidden />
            </ButtonLink>
          </div>
        </div>

        <h2 className="mt-24 text-[1.25rem] font-medium tracking-tight text-ink">
          {c.resources.more}
        </h2>
        <ul className="mt-6 flex flex-col divide-y divide-line border-y border-line">
          {more.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${lang}/artigos/${p.slug}`}
                className="group flex items-baseline gap-4 py-5 transition-colors duration-fast ease-calm"
              >
                <span className="w-20 shrink-0 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                  {p.kind}
                </span>
                <span className="flex-1 text-[1.0625rem] leading-snug text-ink group-hover:underline">
                  {p.title}
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={ICON_STROKE}
                  aria-hidden
                  className="mt-1 shrink-0 text-ink-mute transition-transform duration-fast ease-calm group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
