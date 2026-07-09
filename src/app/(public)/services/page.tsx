import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  canonical: '/services',
  title: 'Услуги — архитектурные плёнки в Москве | ПЛЕНКИН',
  description: '7 направлений: противоосколочные (К4–Р4А), солнцезащитные, атермальные, декоративные плёнки, фотопечать, плоттерная резка, брендирование офисов, смарт-плёнки. Цены от 150 ₽/м².',
})

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

const services = [
  { title: 'Противоосколочные и бронирующие', slug: 'protective', description: 'Защита от осколков, взлома, БПЛА. Классы К4–Р4А по ГОСТ 51136, 30826.', priceFrom: 'от 1 100 ₽/м²', features: ['5 классов защиты', 'Сертификаты ГОСТ', 'Гарантия до 15 лет'] },
  { title: 'Солнцезащитные и атермальные', slug: 'solar', description: 'Снижение жары до 80%. Зеркальные, атермальные, керамические, Carbon.', priceFrom: 'от 650 ₽/м²', features: ['4 типа плёнок', 'Энергосбережение', 'UV-защита 99%'] },
  { title: 'Декоративные плёнки', slug: 'decorative', description: 'Матирование, витражи, дихроика. Зонирование без замены стекла.', priceFrom: 'от 650 ₽/м²', features: ['7 видов декора', 'One Way Vision', 'Смарт-плёнки PDLC'] },
  { title: 'Фотопечать на плёнке', slug: 'photo-print', description: 'UV, сольвентная, латексная печать. Прозрачные и перфорированные основы.', priceFrom: 'от 1 250 ₽/м²', features: ['3 технологии печати', 'Стойкость к УФ', 'Подготовка макетов'] },
  { title: 'Плоттерная резка', slug: 'plotter', description: 'ORACAL 641/751/8500. Фигурные наклейки, логотипы, надписи, навигация.', priceFrom: 'от 150 ₽/м²', features: ['ORACAL 641/751/8500', 'Сложная выборка', 'Срок 1–3 дня'] },
  { title: 'Брендирование офисов', slug: 'branding', description: 'Под ключ: ресепшн, переговорные, коридоры, фасадные перегородки.', priceFrom: 'от 750 ₽/м²', features: ['Дизайн-проект', 'Монтаж под ключ', 'Срок от 3 дней'] },
  { title: 'Смарт-плёнки (PDLC)', slug: 'smart', description: 'Электрохромные: матовое/прозрачное по запросу. Управление со смартфона.', priceFrom: 'от 15 000 ₽/м²', features: ['Переключение 0,1 сек', 'Управление WiFi/Bluetooth', 'Гарантия 5 лет'] },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated bg-dot-pattern">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Каталог услуг</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Архитектурные плёнки<br />для любой задачи
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              7 направлений: от противоосколочной защиты до смарт-стекла.
              Подбираем оптимальное решение под объект, бюджет и нормативные требования.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card variant="glass" hover className="h-full p-6 group cursor-pointer flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-xl font-bold text-fg group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-fg-muted">
                        <span className="text-accent">—</span> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-mono text-accent">{service.priceFrom}</span>
                    <span className="text-sm text-fg-muted group-hover:text-accent transition-colors">Подробнее →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-fg mb-4" style={{ fontFamily: 'var(--font-display)' }}>Не знаете, что выбрать?</h2>
            <p className="text-fg-muted mb-6">Получите бесплатную консультацию специалиста</p>
            <Link href="/contacts"><Button variant="primary" size="lg">Получить консультацию</Button></Link>
          </div>
        </Container>
      </section>
    </div>
  )
}