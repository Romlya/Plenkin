import { SITE_URL } from '@/lib/site'

export function ServiceSchema({ name, description, priceFrom }: { name: string; description: string; priceFrom: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'ПЛЕНКИН',
      telephone: '+79857801375',
      areaServed: 'Москва и Московская область',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: priceFrom,
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}