'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { Content, Locale } from '@/content'
import { articles } from '@/content/articles'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { ArticleCover } from '@/components/ui/ArticleCover'

/**
 * Featured reading, after the reference's resource slider: a row of cards
 * that runs off the right edge of the page, a cover on top, a mono label and
 * a title below, and two round buttons to move it.
 *
 * The cards now lead somewhere: each one is a piece in content/articles.ts,
 * which is also where its text lives, so a title cannot drift between the card
 * and the page it opens. Most of the bodies are still unwritten and the
 * template says so on arrival rather than showing a convincing empty page.
 *
 * The covers are final: ArticleCover draws each one from the piece's own
 * format and position, so writing the fifth article costs no design work.
 *
 * It used to alternate a drawn document with a stock photograph every other
 * card. Two of the five were then photographs of nothing in particular, and a
 * bought photograph between two drawn covers reads as a hole in the row. The
 * photographs earn their place where the photograph is the argument: the
 * reception banner and the four kinds of clinic.
 */
export function Resources({ c, lang }: { c: Content; lang: Locale }) {
  const track = useRef<HTMLUListElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      setAtStart(el.scrollLeft < 8)
      setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const move = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 20), behavior: 'smooth' })
  }

  const round = (enabled: boolean) =>
    `flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-fast ease-calm ${
      enabled ? 'border border-ink text-ink hover:bg-ink hover:text-white' : 'bg-line-strong text-white'
    }`

  return (
    <section id="recursos" className="overflow-hidden py-16 sm:py-20">
      <Container>
        <Reveal>
          <h2 className="display text-h1 text-ink">{c.resources.title}</h2>
        </Reveal>

        {/* Runs to the window's right edge, not the container's. */}
        <ul
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [margin-right:calc(50%-50vw)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articles[lang].map((item, i) => (
            <li
              key={item.slug}
              className="group w-[82vw] shrink-0 snap-start overflow-hidden rounded-[16px] border border-line bg-surface transition-shadow duration-fast ease-calm hover:shadow-2 sm:w-[26rem] lg:w-[30rem]"
            >
              <Link href={`/${lang}/artigos/${item.slug}`} className="block">
                <div className="aspect-[5/4] overflow-hidden">
                  <ArticleCover index={i} format={item.format} kind={item.kind} title={item.title} image={item.image} />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-ink-mute">
                    {item.kind}
                  </span>
                  <h3 className="mt-3 text-[1.25rem] leading-snug tracking-tight text-ink group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.lead}</p>
                </div>
              </Link>
            </li>
          ))}
          <li aria-hidden className="w-px shrink-0" />
        </ul>

        <div className="mt-8 flex gap-3">
          <button type="button" aria-label={c.resources.prev} disabled={atStart} onClick={() => move(-1)} className={round(!atStart)}>
            <ChevronLeft size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <button type="button" aria-label={c.resources.next} disabled={atEnd} onClick={() => move(1)} className={round(!atEnd)}>
            <ChevronRight size={20} strokeWidth={1.75} aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  )
}
