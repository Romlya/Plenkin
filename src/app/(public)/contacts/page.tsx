import { pageMetadata } from '@/lib/seo'
import ContactsClient from './ContactsClient'

export const metadata = pageMetadata({
  canonical: '/contacts',
  title: 'Контакты — заявка на монтаж плёнок | ПЛЕНКИН',
  description: 'Свяжитесь с нами: телефон +7 985 780 13 75, email plenkininfo@yandex.ru. Бесплатный выезд замерщика по Москве и МО. WhatsApp, Telegram.',
})

export default function ContactsPage() {
  return <ContactsClient />
}