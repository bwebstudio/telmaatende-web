'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import type { Content } from '@/content'
import { locales, localeMeta, type Locale } from '@/content'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { LogoLink } from '@/components/ui/Logo'
import { ICON_STROKE } from '@/components/ui/Card'

/**
 * 104px tall on the desktop, stepping down to 80px on a phone — at full
 * height it ate a sixth of an iPhone SE screen. Transparent over the hero, growing a hairline and a blur only once
 * the page has scrolled — so the first screen is one uninterrupted surface
 * rather than a strip and a page.
 *
 * The navigation is pushed right, against the language switch and the CTA,
 * instead of floating in the middle. Centred nav links are what make a header
 * read as a navigation bar; a wordmark alone on the left with everything else
 * gathered on the right reads as a masthead.
 */
export function Header({ c, lang }: { c: Content; lang: Locale }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // A menu open behind a locked body is the one place the page may not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-fast ease-calm ${
        scrolled || open
          ? 'border-b border-line bg-bg/95 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-8 sm:h-24 lg:h-26">
        <LogoLink href={`/${lang}`} />

        <div className="flex items-center gap-10">
          <nav
            className="hidden items-center gap-12 lg:flex"
            aria-label={c.header.navLabel}
          >
            {c.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.9375rem] text-ink-soft transition-colors duration-fast ease-calm hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LangSwitch
            c={c}
            lang={lang}
            className="hidden sm:flex lg:border-l lg:border-line lg:pl-10"
          />

          <ButtonLink href="#contacto" variant="primary" className="hidden sm:inline-flex">
            {c.header.cta}
          </ButtonLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-input border border-line-strong bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={c.header.navLabel}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={20} strokeWidth={ICON_STROKE} aria-hidden />
            ) : (
              <Menu size={20} strokeWidth={ICON_STROKE} aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {c.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3.5 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-line pt-6">
              <LangSwitch c={c} lang={lang} />
              <ButtonLink
                href="#contacto"
                variant="primary"
                onClick={() => setOpen(false)}
              >
                {c.header.cta}
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}

/**
 * Every registered language, current one marked. Built from the locale list so
 * adding a fourth language needs no change here.
 */
function LangSwitch({
  c,
  lang,
  className = '',
}: {
  c: Content
  lang: Locale
  className?: string
}) {
  // Keep the reader on the same section when switching language: anchor ids are
  // shared across languages, so the hash travels with them.
  function switchLang(e: React.MouseEvent, target: Locale) {
    e.preventDefault()
    window.location.href = `/${target}${window.location.hash}`
  }

  return (
    <div
      className={`flex items-center gap-1 text-sm ${className}`}
      aria-label={c.langSwitchLabel}
    >
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden className="text-line-strong">
              ·
            </span>
          )}
          {code === lang ? (
            <span aria-current="true" className="font-medium text-ink">
              {localeMeta[code].label}
            </span>
          ) : (
            <Link
              href={`/${code}`}
              onClick={(e) => switchLang(e, code)}
              className="px-1 text-ink-mute transition-colors duration-fast ease-calm hover:text-ink"
            >
              {localeMeta[code].label}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}
