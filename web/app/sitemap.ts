import type { MetadataRoute } from 'next'
import { locales } from '@/content'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://telmaatende.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    },
  }))
}
