import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site'

const DEFAULT_OG_IMAGE = '/images/og-image.jpg'

export function pageMetadata({
  title,
  description,
  canonical,
  ogImage,
  type = 'website',
}: {
  title: string
  description: string
  canonical: string
  ogImage?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${SITE_URL}${canonical}`
  const image = ogImage || DEFAULT_OG_IMAGE

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
