﻿import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Фотопечать на плёнке: UV, сольвент, латекс | ПЛЕНКИН',
  description: 'Широкоформатная печать на плёнке: UV (от 2 150 ₽/м²), сольвентная (от 1 250 ₽/м²), латексная. Прозрачные и перфорированные основы. Москва и МО.',
}

const technologies = [
  { name: 'UV-печать', price: '2 150–2 350 ₽/м²', desc: 'Ультрафиолетовые чернила, мгновенное отверждение. Стойкость к воде и царапинам. Для наружной рекламы и декоративных панелей.', use: 'Наружка, витрины, фасады' },
  { name: 'Сольвентная печать', price: '1 250–2 000 ₽/м²', desc: 'Органические растворители, глубокое проникновение в материал. Доступна для печати на перфорированной плёнке One Way Vision.', use: 'Интерьеры, One Way Vision' },
  { name: 'Латексная печать', price: 'от 3 400 ₽/м²', desc: 'Краски на водной основе, высокая точность цветопередачи. Экологичная, без запаха. Печать на плёнках и бумагах.', use: 'Эко-интерьеры, фотопанели' },
]

const bases = [
  { name: 'Прозрачная плёнка', price: 'от 2 700 ₽/м²', desc: 'Печать на прозрачном пластике. Используется для витрин и интерьеров с эффектом парения изображения.' },
  { name: 'Перфорированная One Way Vision', price: '529–690 ₽/м²', desc: 'Печать на окнах с видимостью изнутри. 720 dpi и 1440 dpi. Идеальна для фасадной рекламы.' },
  { name: 'Белая плёнка ORACAL', price: 'от 360 ₽/м²', desc: 'Классическая основа для полноцветной печати. ORACAL 641 (мат) и 751 (глянец).' },
]

export default function PhotoPrintPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Фотопечать', href: '/services/photo-print' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/film-windows-showcases.webp" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Фотопечать на плёнке</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Печать на плёнке: UV, сольвент, латекс</h1>
            <p className="text-lg text-fg-muted mb-8">Три технологии печати, три типа основ. Подбираем под задачу: наружная реклама, интерьер, витрина.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator"><Button variant="primary" size="lg">Рассчитать стоимость</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Технологии печати</h2>
          <div className="space-y-6">
            {technologies.map((tech) => (
              <Card key={tech.name} variant="glass" className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-fg">{tech.name}</h3>
                      <Badge variant="accent" size="sm">{tech.price}</Badge>
                    </div>
                    <p className="text-fg-muted leading-relaxed mb-2">{tech.desc}</p>
                    <div className="text-sm text-accent">Применение: {tech.use}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Основы для печати</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bases.map((base) => (
              <Card key={base.name} variant="default" hover className="p-6">
                <div className="font-mono text-accent mb-2">{base.price}</div>
                <h3 className="text-lg font-bold text-fg mb-2">{base.name}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{base.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-fg mb-6">Требования к макетам</h2>
            <Card variant="default" className="p-8">
              <ul className="space-y-4 text-fg-muted">
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Разрешение: 300 dpi для интерьерной печати, 150 dpi для наружной</li>
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Цветовая модель: CMYK для печати, RGB только для предпросмотра</li>
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Вылеты (bleed): по 5 мм с каждой стороны для реза</li>
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Форматы: TIFF, PDF (без слоёв), EPS, AI</li>
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Шрифты: переведены в кривые или приложены к макету</li>
                <li className="flex gap-3"><span className="text-accent flex-shrink-0">—</span> Масштаб: 1:1 для плёнок до 3 м, 1:10 для крупноформатных</li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}