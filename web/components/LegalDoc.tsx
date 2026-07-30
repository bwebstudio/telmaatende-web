import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { LegalPage } from '@/content/types'
import type { Locale } from '@/content'
import { Container } from './ui/Container'
import { ICON_STROKE } from './ui/Card'

/**
 * The legal pages. Same system, narrower measure, no ornament — a document,
 * set to be read rather than scanned.
 */
export function LegalDoc({ page, lang }: { page: LegalPage; lang: Locale }) {
  return (
    <main className="py-24 sm:py-30">
      <Container className="max-w-3xl">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-ink-mute transition-colors duration-fast ease-calm hover:text-ink"
        >
          <ArrowLeft size={16} strokeWidth={ICON_STROKE} aria-hidden />
          {page.back}
        </Link>

        <h1 className="mt-12 display text-h1 text-ink">{page.title}</h1>

        <p className="mt-8 rounded-input border border-line bg-brand-wash px-5 py-4 text-ink-soft">
          {page.updated}
        </p>

        <p className="mt-10 text-body-lg leading-relaxed text-ink-soft">{page.intro}</p>

        <div className="mt-16 flex flex-col gap-12">
          {page.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-medium text-ink">{section.heading}</h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((p, j) => (
                  <p key={j} className="leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  )
}
