import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const blogSlugs = [
  'klassy-zashchity-plenki',
  'atermalnaya-vs-zerkalnaya',
  'zashchita-okon-ot-bpla',
  'diy-vs-professional',
  'branding-ofisa-plenkoy',
  'smart-plenki-pdlc',
  'antigraffiti-antivandal',
  'normativnaya-baza-gost',
  'gid-plenka-dlya-shkoly',
  'gid-broneplenka-bank',
  'gid-solncezashchita-ofis',
  'gid-brendirovanie-ofisa',
  'gid-plenka-kvartira',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const lastModified = new Date()

  const staticPages = [
    '', '/services', '/portfolio', '/calculator', '/certificates', '/blog', '/faq', '/contacts', '/privacy', '/gov',
    '/services/protective', '/services/solar', '/services/decorative',
    '/services/photo-print', '/services/plotter', '/services/branding', '/services/smart',
  ]

  const pages = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'daily' as const : 'weekly' as const,
    priority: path === '' ? 1 : path.startsWith('/services') ? 0.9 : 0.7,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...pages, ...blogPages]
}
