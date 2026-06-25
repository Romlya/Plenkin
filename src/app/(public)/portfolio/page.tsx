import type { Metadata } from 'next'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Портфолио — реализованные проекты | ПЛЕНКИН',
  description: 'Кейсы по монтажу архитектурных плёнок: офисы, торговые центры, школы, банки, ЖК. Более 5200 м² обработанного остекления. Фото До/После.',
}

export default function PortfolioPage() {
  return <PortfolioClient />
}