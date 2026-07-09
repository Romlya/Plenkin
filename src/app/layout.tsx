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
    google: 'nmmEmUI2nJGJOgydpOUk-fW8xoJYIqCz3LA_xoZMMC8',
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
        <style dangerouslySetInnerHTML={{ __html: `
          :root { --color-bg:#0a0a0b; --color-fg:#fafafa; --color-accent:#e8b42a; }
          body { margin:0; background-color:#0a0a0b; color:#fafafa; font-family:Inter,system-ui,-apple-system,sans-serif; }
          * { box-sizing:border-box; }
          img { max-width:100%; height:auto; }
          a { color:inherit; text-decoration:none; }
          h1,h2,h3 { margin:0; font-weight:inherit; }
          ul,ol { margin:0; padding:0; list-style:none; }
          .bg-bg { background-color:#0a0a0b; }
          .bg-bg-elevated { background-color:#141416; }
          .bg-bg-card { background-color:#18181b; }
          .text-fg { color:#fafafa; }
          .text-fg-muted { color:#a1a1aa; }
          .text-accent { color:#e8b42a; }
          .text-gradient-accent { background:linear-gradient(135deg,#e8b42a,#f5d76e); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
          .glass-card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:1rem; }
          .hidden { display:none; }
          .flex { display:flex; }
          .grid { display:grid; }
          .container { max-width:80rem; margin:0 auto; padding:0 1rem; }
          @media (min-width:40rem) { .container { padding:0 1.5rem; } }
          @media (min-width:64rem) { .container { padding:0 2rem; } }
        `}} />
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