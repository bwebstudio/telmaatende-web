import type { MetadataRoute } from 'next'
import { locales } from '@/content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://telmaatende.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const homes: MetadataRoute.Sitemap = locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    },
  }))
  // The hotel page, Portuguese only for now; see app/[lang]/hoteis/page.tsx.
  return [...homes, { url: `${siteUrl}/pt/hoteis`, changeFrequency: 'monthly', priority: 0.8 }]
}
