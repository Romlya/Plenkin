import { pageMetadata } from '@/lib/seo'
import CalculatorClient from './CalculatorClient'

export const metadata = pageMetadata({
  canonical: '/calculator',
  title: 'Калькулятор стоимости монтажа плёнок | ПЛЕНКИН',
  description: 'Онлайн-калькулятор: выберите тип плёнки, площадь, этажность, срочность — получите предварительную стоимость. Бесплатный выезд замерщика.',
})

export default function CalculatorPage() {
  return <CalculatorClient />
}