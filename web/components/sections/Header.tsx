'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import type { Content } from '@/content'
import { locales, localeMeta, type Locale } from '@/content'
import { LogoLink } from '@/components/ui/Logo'
import { ICON_STROKE } from '@/components/ui/Card'
import { loginUrl, signupUrl } from '@/lib/signup'

/**
 * EXPERIMENT (local): a floating bar, after the reference. The previous header
 * is in git (`git checkout web/components/sections/Header.tsx`).
 *
 * It floats: inset from the edges and the top of the window, rounded, frosted,
 * with the page passing underneath it. It is a surface, not a strip, so it can
 * sit on the hero without cutting the first screen in two.
 *
 * It reads the page under it. Over a section marked data-nav-theme="dark" the
 * bar turns dark and its type white; over everything else it is a pale grey.
 * The check samples the element under the bar's middle, once per frame at
 * most, only while scrolling.
 *
 * The bar sits at the container's width, so the wordmark lines up with every
 * section below it. The page's first section clears it with --nav-h.
 */
export function Header({ c, lang }: { c: Content; lang: Locale }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const check = () => {
      raf = 0
      const bar = barRef.current
      if (!bar) return
      const r = bar.getBoundingClientRect()
      const y = r.top + r.height / 2
      // The first thing under the bar that is not the bar itself.
      const under = document
        .elementsFromPoint(window.innerWidth / 2, y)
        .find((el) => !bar.contains(el))
      setDark(!!under?.closest('[data-nav-theme="dark"]'))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  // A menu open behind a locked body is the one place the page may not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Both doors, or neither. Unset means the panel is not launched and the bar
  // falls back to the single "talk to us" it has always had — see lib/signup.
  const signIn = loginUrl()
  const signUp = signupUrl()

  const t = dark
    ? {
        bar: 'bg-[rgb(24_24_24/0.72)] text-white',
        link: 'text-white/80 hover:text-white',
        rule: 'border-white/15',
        cta: 'bg-white text-ink hover:bg-white/90',
        icon: 'text-white hover:bg-white/10',
      }
    : {
        bar: 'bg-[rgb(228_228_226/0.78)] text-ink',
        link: 'text-ink/80 hover:text-ink',
        rule: 'border-ink/10',
        cta: 'bg-ink text-white hover:bg-ink/85',
        icon: 'text-ink hover:bg-ink/5',
      }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div
        ref={barRef}
        className={`pointer-events-auto mx-auto max-w-[calc(82.5rem-3rem)] overflow-hidden rounded-[12px] backdrop-blur-xl transition-colors duration-500 ease-calm lg:max-w-[calc(82.5rem-4rem)] ${t.bar}`}
      >
        <div className="flex h-[3.75rem] items-center justify-between gap-6 pl-5 pr-2.5 sm:h-[4.5rem] sm:pl-7 sm:pr-3.5">
          <div className="flex items-center gap-10 xl:gap-12">
            <span className={dark ? 'brightness-0 invert' : ''}>
              <LogoLink href={`/${lang}`} />
            </span>
            <nav className="hidden items-center gap-8 lg:flex" aria-label={c.header.navLabel}>
              {c.header.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap text-[0.9375rem] transition-colors duration-fast ease-calm ${t.link}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <LangSwitch c={c} lang={lang} dark={dark} className="hidden sm:flex" />
            {/* Entrar is quiet and Criar conta is the solid one: the clinics
                that already pay us know where they are going and need a door,
                not an invitation. "Falar connosco" is not dropped so much as
                moved — it is the hero's second action, and three things to
                press in one bar is a bar nobody reads. */}
            {signIn && (
              <a
                href={signIn}
                className={`hidden shrink-0 whitespace-nowrap text-[0.9375rem] transition-colors duration-fast ease-calm sm:inline-flex ${t.link}`}
              >
                {c.header.signIn}
              </a>
            )}
            <a
              href={signUp ?? '#contacto'}
              className={`hidden h-11 shrink-0 items-center whitespace-nowrap rounded-pill px-5 text-[0.9375rem] font-medium transition-colors duration-fast ease-calm sm:inline-flex ${t.cta}`}
            >
              {signUp ? c.header.signUp : c.header.cta}
            </a>
            <button
              type="button"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-[10px] transition-colors duration-fast lg:hidden ${t.icon}`}
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
        </div>

        {/* The menu opens inside the bar: the same surface, taller. */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-500 ease-calm lg:hidden ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className={`mx-5 flex flex-col border-t py-3 sm:mx-7 ${t.rule}`}>
              {c.header.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  className="py-3 text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className={`mt-2 flex items-center justify-between gap-4 border-t pb-2 pt-5 ${t.rule}`}>
                <LangSwitch c={c} lang={lang} dark={dark} />
                <div className="flex items-center gap-4">
                  {signIn && (
                    <a
                      href={signIn}
                      tabIndex={open ? 0 : -1}
                      className="text-[0.9375rem]"
                      onClick={() => setOpen(false)}
                    >
                      {c.header.signIn}
                    </a>
                  )}
                  <a
                    href={signUp ?? '#contacto'}
                    tabIndex={open ? 0 : -1}
                    className={`inline-flex h-11 items-center rounded-pill px-5 text-[0.9375rem] font-medium ${t.cta}`}
                    onClick={() => setOpen(false)}
                  >
                    {signUp ? c.header.signUp : c.header.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

/**
 * The id of the section the reader is in: the last one whose top has passed a
 * line a third of the way down the window. Null above the first one (the hero
 * has no id) and on pages without sections, so those open at the top.
 */
function sectionInView(): string | null {
  const line = window.innerHeight / 3
  let current: string | null = null
  for (const el of document.querySelectorAll<HTMLElement>('main section[id]')) {
    if (el.getBoundingClientRect().top > line) break
    current = el.id
  }
  return current
}

/**
 * Every registered language, current one marked. Built from the locale list so
 * adding a fourth language needs no change here.
 */
function LangSwitch({
  c,
  lang,
  dark,
  className = '',
}: {
  c: Content
  lang: Locale
  dark: boolean
  className?: string
}) {
  // Keep the reader where they are when switching language. Paths and anchor ids
  // are shared across languages, so only the first segment changes. The hash is
  // not trusted: it holds the last menu link clicked, not where the reader has
  // scrolled since, so the section on screen is read at the moment of the click.
  function switchLang(e: React.MouseEvent, target: Locale) {
    e.preventDefault()
    const rest = window.location.pathname.replace(/^\/[^/]+/, '')
    const section = sectionInView()
    window.location.href = `/${target}${rest}${section ? `#${section}` : ''}`
  }

  return (
    <div className={`flex items-center gap-1 text-sm ${className}`} aria-label={c.langSwitchLabel}>
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden className={dark ? 'text-white/30' : 'text-ink/25'}>
              ·
            </span>
          )}
          {code === lang ? (
            <span aria-current="true" className="font-medium">
              {localeMeta[code].label}
            </span>
          ) : (
            <Link
              href={`/${code}`}
              onClick={(e) => switchLang(e, code)}
              className={`px-1 transition-colors duration-fast ease-calm ${
                dark ? 'text-white/55 hover:text-white' : 'text-ink/50 hover:text-ink'
              }`}
            >
              {localeMeta[code].label}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}
