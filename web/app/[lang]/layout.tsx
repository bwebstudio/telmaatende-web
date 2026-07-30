import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { sans } from '@/lib/fonts'
import { getContent, isLocale, locales, localeMeta, defaultLocale } from '@/content'
import '../globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://telmaatende.com'

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
  const c = getContent(lang)

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${lang}`,
      // Built from the locale list so a new language is announced to search
      // engines automatically instead of being silently left out of hreflang.
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        'x-default': `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: 'website',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      url: `/${lang}`,
      siteName: 'Telma Atende',
      locale: localeMeta[lang].ogLocale,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    // suppressHydrationWarning is required, not decorative: the inline script
    // below adds `js` to this element before React hydrates, so the server HTML
    // and the live DOM legitimately differ on className. It suppresses the
    // warning for this node's attributes only — children still hydrate normally.
    <html
      lang={lang}
      className={sans.variable}
      suppressHydrationWarning
    >
      <head>
        {/*
          Marks the document as scripted before first paint. Everything that
          hides content until it animates is scoped to `.js` in globals.css, so
          a reader without JavaScript — or with it still loading — gets the
          finished page rather than a blank one. Inline and synchronous on
          purpose: a deferred script would let the un-animated state flash.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
