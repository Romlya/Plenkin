﻿import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Плоттерная резка плёнок ORACAL: логотипы, буквы | ПЛЕНКИН',
  description: 'Фигурная резка самоклеящихся плёнок ORACAL 641/751/8500. Логотипы, надписи, навигация. Точность 0,1 мм. Срок 1–3 дня. От 150 ₽/м².',
}

const materials = [
  { name: 'ORACAL 641', type: 'Матовая', price: '360–550 ₽/м²', desc: 'Классическая самоклеящаяся плёнка. 40+ цветов. Срок службы 3–4 года. Для интерьеров, стендов, навигации.', colors: 40 },
  { name: 'ORACAL 751', type: 'Глянцевая', price: '360–550 ₽/м²', desc: 'Глянцевая поверхность, глубокий цвет. Срок службы 5–6 лет. Ультрафиолетовая стойкость.', colors: 30 },
  { name: 'ORACAL 8500', type: 'Металлизированная', price: '2 970 ₽/п.м', desc: 'Серебряный или золотой эффект. Премиум-декор и брендирование. Срок службы 7+ лет.', colors: 8 },
]

const applications = [
  'Логотипы и эмблемы на стекло',
  'Буквы и надписи на фасады',
  'Навигация и wayfinding в офисах',
  'Фигурные наклейки и стикеры',
  'Декоративные орнаменты',
  'Информационные стенды',
  'Брендирование витрин',
  'Оформление ресепшн',
]

export default function PlotterPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Плоттерная резка', href: '/services/plotter' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/promo-2.webp" alt="" fill className="object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Плоттерная резка</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Резка плёнок ORACAL: логотипы, буквы, навигация</h1>
            <p className="text-lg text-fg-muted mb-8">Фигурная резка самоклеящихся плёнок. Точность 0,1 мм. Срок изготовления 1–3 дня. Монтаж на объекте.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator"><Button variant="primary" size="lg">Рассчитать стоимость</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Материалы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((mat) => (
              <Card key={mat.name} variant="glass" hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-fg">{mat.name}</h3>
                    <span className="text-xs text-fg-muted">{mat.type}</span>
                  </div>
                  <Badge variant="accent" size="sm">{mat.price}</Badge>
                </div>
                <p className="text-sm text-fg-muted leading-relaxed mb-4">{mat.desc}</p>
                <div className="text-xs text-fg-subtle">Доступно цветов: {mat.colors}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Применение</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {applications.map((app, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-bg-card border border-border">
                <span className="text-accent font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-fg">{app}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-fg mb-6">Ценообразование</h2>
            <Card variant="default" className="p-6 space-y-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Резка (простая: буквы, прямоугольники)</span>
                <span className="text-accent font-mono">от 150 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Резка (сложная: кривые, логотипы)</span>
                <span className="text-accent font-mono">от 270 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Плёнка ORACAL 641</span>
                <span className="text-accent font-mono">360–550 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Сложная выборка (орт. рез)</span>
                <span className="text-accent font-mono">2 970 ₽/п.м</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-fg-muted">Монтаж на объекте</span>
                <span className="text-accent font-mono">от 200 ₽/м²</span>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}