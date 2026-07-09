import { pageMetadata } from '@/lib/seo'
import FaqClient from './FaqClient'

export const metadata = pageMetadata({
  canonical: '/faq',
  title: 'FAQ — частые вопросы об архитектурных плёнках | ПЛЕНКИН',
  description: '17 ответов на частые вопросы: классы защиты, выбор плёнки, монтаж, гарантия, документы, оплата. Без воды — конкретика.',
})

export default function FAQPage() {
  return <FaqClient />
}