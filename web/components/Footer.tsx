import Link from 'next/link'
import { Mail } from 'lucide-react'
import type { Content, Locale } from '@/content'
import { Container } from './Container'

export function Footer({ c, lang }: { c: Content; lang: Locale }) {
  return (
    <footer className="bg-pine text-paper">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl font-medium">Telma</p>
            <p className="mt-3 max-w-xs text-lg text-paper/70">{c.footer.tagline}</p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-label text-paper/50">
              {c.footer.contactHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-base">
              <li>
                <a
                  href={`mailto:${c.footer.email}`}
                  className="inline-flex items-center gap-2.5 text-paper/80 hover:text-paper"
                >
                  <Mail size={16} strokeWidth={1.75} className="shrink-0 text-accent-light" aria-hidden />
                  {c.footer.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-label text-paper/50">
              {c.footer.companyHeading}
            </h2>
            <p className="mt-4 text-base text-paper/80">{c.footer.companyText}</p>
            <a
              href={c.footer.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-base text-paper underline decoration-paper/40 underline-offset-4 hover:decoration-paper"
            >
              {c.footer.companyLinkLabel}
            </a>
            <p className="mt-4 border-l-2 border-paper/25 pl-3 text-sm italic text-paper/45">
              {c.footer.legalPlaceholder}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/15 pt-6 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Telma. {c.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacidade`} className="hover:text-paper">
              {c.footer.privacyLabel}
            </Link>
            <Link href={`/${lang}/termos`} className="hover:text-paper">
              {c.footer.termsLabel}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
