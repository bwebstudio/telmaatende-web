'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Content } from '@/content'
import type { Locale } from '@/content'
import { Container } from './Container'

export function Header({ c, lang }: { c: Content; lang: Locale }) {
  const [open, setOpen] = useState(false)
  const other: Locale = lang === 'pt' ? 'en' : 'pt'

  // Keep the reader on the same section when switching language: the anchor
  // ids are identical across languages, so we carry the current hash across.
  function switchLang(e: React.MouseEvent) {
    e.preventDefault()
    const hash = typeof window !== 'undefined' ? window.location.hash : ''
    window.location.href = `/${other}${hash}`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <Link
            href={`/${lang}`}
            className="font-serif text-2xl font-semibold tracking-tight text-ink"
          >
            Telma
          </Link>
          <span className="hidden text-sm text-ink-mute sm:inline">
            {c.header.productBy}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label={lang === 'pt' ? 'Principal' : 'Main'}
          >
            {c.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base text-ink-soft transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="ml-1 hidden items-center gap-1 border-l border-line pl-4 text-sm md:flex"
            aria-label={c.langSwitchLabel}
          >
            <span aria-current="page" className="font-medium text-ink">
              {lang.toUpperCase()}
            </span>
            <span className="text-line-strong" aria-hidden>
              |
            </span>
            <Link
              href={`/${other}`}
              onClick={switchLang}
              className="text-ink-mute transition-colors hover:text-accent"
            >
              {other.toUpperCase()}
            </Link>
          </div>

          <a href="#contacto" className="btn-primary ml-2 hidden md:inline-flex">
            {c.header.cta}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform ${
                  open ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col py-4">
            {c.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-2 text-base">
                <span className="font-medium text-ink">{lang.toUpperCase()}</span>
                <span className="text-line-strong" aria-hidden>
                  |
                </span>
                <Link href={`/${other}`} onClick={switchLang} className="text-ink-mute">
                  {other.toUpperCase()}
                </Link>
              </div>
              <a
                href="#contacto"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                {c.header.cta}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
