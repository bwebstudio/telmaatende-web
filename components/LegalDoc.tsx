import Link from 'next/link'
import type { LegalPage } from '@/content/types'
import type { Locale } from '@/content'
import { Container } from './Container'

export function LegalDoc({ page, lang }: { page: LegalPage; lang: Locale }) {
  return (
    <main className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link href={`/${lang}`} className="text-base text-ink-mute hover:text-accent">
          ← {page.back}
        </Link>
        <h1 className="mt-8 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-4 rounded-lg border border-line-strong bg-paper-2 px-4 py-3 text-base italic text-ink-mute">
          {page.updated}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{page.intro}</p>

        <div className="mt-10 flex flex-col gap-10">
          {page.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl font-medium text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-ink-soft">
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
