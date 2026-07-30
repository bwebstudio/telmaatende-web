import Link from 'next/link'
import { Mail } from 'lucide-react'
import type { Content, Locale } from '@/content'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { ICON_STROKE } from '@/components/ui/Card'

/**
 * Dark, very clean, and directly continuous with the final CTA above it — one
 * ink field, split by a hairline, rather than two dark blocks stacked.
 */
export function Footer({ c, lang }: { c: Content; lang: Locale }) {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <div className="border-t border-dark-line py-24">
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Logo onDark />
              <p className="mt-6 max-w-xs text-body-lg text-white/60">
                {c.footer.tagline}
              </p>
            </div>

            <div>
              <h2 className="text-label font-medium uppercase text-white/40">
                {c.footer.contactHeading}
              </h2>
              <a
                href={`mailto:${c.footer.email}`}
                className="mt-5 inline-flex items-center gap-2.5 text-white/80 transition-colors duration-fast ease-calm hover:text-white"
              >
                <Mail
                  size={16}
                  strokeWidth={ICON_STROKE}
                  aria-hidden
                  // The primary green is all but invisible on ink; the lighter
                  // accent clears the 3:1 a non-text glyph needs.
                  className="shrink-0 text-brand-accent"
                />
                {c.footer.email}
              </a>
            </div>

            <div>
              <h2 className="text-label font-medium uppercase text-white/40">
                {c.footer.companyHeading}
              </h2>
              <p className="mt-5 text-white/80">{c.footer.companyText}</p>
              <a
                href={c.footer.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-white underline decoration-white/30 underline-offset-4 transition-colors duration-fast ease-calm hover:decoration-white"
              >
                {c.footer.companyLinkLabel}
              </a>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-4 border-t border-dark-line pt-10 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Telma. {c.footer.rights}</p>
            <div className="flex gap-8">
              <Link
                href={`/${lang}/privacidade`}
                className="transition-colors duration-fast ease-calm hover:text-white"
              >
                {c.footer.privacyLabel}
              </Link>
              <Link
                href={`/${lang}/termos`}
                className="transition-colors duration-fast ease-calm hover:text-white"
              >
                {c.footer.termsLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
