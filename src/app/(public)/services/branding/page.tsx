import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/ServiceSchema'

export const metadata: Metadata = {
  alternates: { canonical: '/services/branding' },
  title: 'Брендирование офисов плёнкой под ключ | ПЛЕНКИН',
  description: 'Полное оформление офисов: матирование перегородок, фотопечать, плоттерная резка, навигация. Дизайн-проект + монтаж. Срок от 3 дней. От 750 ₽/м².',
}

const stages = [
  { num: '01', title: 'Замер и аудит', desc: 'Выезд замерщика. Фиксация размеров перегородок, типа стекла, освещения. Согласование стиля с брендбуком.' },
  { num: '02', title: 'Дизайн-проект', desc: 'Разработка макетов: матирование, фотопечать, плоттерная резка, навигация. Превью в интерьере. Согласование.' },
  { num: '03', title: 'Производство', desc: 'Печать на плёнке, плоттерная резка, подготовка к монтажу. Контроль качества на каждом этапе.' },
  { num: '04', title: 'Монтаж', desc: 'Установка на объекте. Чистка стекла, нанесение, разгонка. Минимальные сроки — от 3 дней на 100 м².' },
]

const zones = [
  { name: 'Ресепшн и входная группа', desc: 'Логотип на стекле, матирование входных дверей, навигация' },
  { name: 'Переговорные комнаты', desc: 'Матирование с логотипом, фотопечать, смарт-плёнки для приватности' },
  { name: 'Open space зонирование', desc: 'Матовые перегородки, цветовые акценты, навигация отделов' },
  { name: 'Коридоры и проходы', desc: 'Навигация, указатели, декоративные элементы, брендинг стен' },
  { name: 'Фасадные перегородки', desc: 'Тонировка, One Way Vision, солнцезащита + брендирование' },
  { name: 'Кабинеты руководителей', desc: 'Премиум-оформление: дихроика, смарт-плёнки, фотопанели' },
]

export default function BrandingPage() {
  return (
    <div className="min-h-screen pt-32">
      <ServiceSchema name="Брендирование офисов плёнкой" description="Оформление офисов под ключ: ресепшн, переговорные, коридоры." priceFrom="750" />
      <BreadcrumbSchema items={[{ name: 'Услуги', url: '/services' }, { name: 'Брендирование', url: '/services/branding' }]} />
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Брендирование', href: '/services/branding' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/modern-office-athermal.webp" alt="" fill className="object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Брендирование офисов под ключ</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Оформление офисных пространств плёнкой</h1>
            <p className="text-lg text-fg-muted mb-8">Полный цикл: от замера до монтажа. Дизайн-проект, печать, резка, установка. Срок от 3 дней на 100 м².</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator"><Button variant="primary" size="lg">Рассчитать стоимость</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Этапы работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage) => (
              <Card key={stage.num} variant="glass" className="p-6">
                <div className="text-4xl font-bold text-accent/30 font-mono mb-4">{stage.num}</div>
                <h3 className="text-lg font-bold text-fg mb-2">{stage.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{stage.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Зоны оформления</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {zones.map((zone) => (
              <Card key={zone.name} variant="default" hover className="p-6">
                <h3 className="text-lg font-bold text-fg mb-2">{zone.name}</h3>
                <p className="text-sm text-fg-muted">{zone.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-fg mb-6">Цены</h2>
            <Card variant="default" className="p-6 space-y-4">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Оклейка матовой плёнкой</span>
                <span className="text-accent font-mono">от 750 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Тонировка перегородок</span>
                <span className="text-accent font-mono">от 750 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Фотопечать + монтаж</span>
                <span className="text-accent font-mono">от 1 350 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-fg-muted">Плоттерная резка + монтаж</span>
                <span className="text-accent font-mono">от 550 ₽/м²</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-fg-muted">Комплексный проект под ключ</span>
                <span className="text-accent font-mono">по смете</span>
              </div>
            </Card>
            <div className="mt-8 text-center">
              <Link href="/contacts"><Button variant="primary" size="lg">Заказать брендирование</Button></Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}