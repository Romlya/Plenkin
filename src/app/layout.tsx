import type { Metadata, Viewport } from 'next'
import { Inter, Unbounded, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingButtons } from '@/components/layout/FloatingButtons'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { BackToTop } from '@/components/layout/BackToTop'
import { JsonLd } from '@/components/seo/JsonLd'
import { YandexMetrika } from '@/components/seo/YandexMetrika'
import { SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'ПЛЕНКИН — Архитектурные плёнки: защита, солнцезащита, декор. Москва и МО',
  description: 'Монтаж архитектурных плёнок в Москве и МО: противоосколочные и бронезащитные (К4–Р4А), солнцезащитные, атермальные, декоративные. Брендирование офисов под ключ. Гарантия до 15 лет. Бесплатный выезд замерщика.',
  keywords: ['архитектурные плёнки', 'противоосколочная плёнка', 'бронеплёнка', 'тонировка окон', 'атермальная плёнка', 'матование стекла', 'брендирование офиса', 'фотопечать на плёнке', 'защита от БПЛА', 'москва'],
  authors: [{ name: 'ПЛЕНКИН' }],
  creator: 'ПЛЕНКИН',
  publisher: 'ПЛЕНКИН',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'ПЛЕНКИН',
    title: 'ПЛЕНКИН — Архитектурные плёнки: защита, солнцезащита, декор',
    description: 'Монтаж архитектурных плёнок в Москве и МО: противоосколочные и бронезащитные (К4–Р4А), солнцезащитные, атермальные, декоративные. Брендирование офисов под ключ.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ПЛЕНКИН — архитектурные плёнки',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ПЛЕНКИН — Архитектурные плёнки',
    description: 'Монтаж архитектурных плёнок в Москве и МО',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    yandex: 'bfb86aacf5c761ad',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-bg text-fg antialiased">
        <JsonLd />
        <YandexMetrika />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </body>
    </html>
  )
}