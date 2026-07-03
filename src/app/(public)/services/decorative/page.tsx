import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/ServiceSchema'

export const metadata: Metadata = {
  alternates: { canonical: '/services/decorative' },
  title: 'Декоративные плёнки: матирование, витражи, фотопечать | ПЛЕНКИН',
  description: 'Матовые, сатиновые, витражные, дихроичные плёнки. Фотопечать, плоттерная резка, One Way Vision. Зонирование без замены стекла. От 529 ₽/м².',
}

const features = [
  { icon: 'matte', title: 'Матовые и сатиновые', description: 'Оформление перегородок, зонирование open space, разграничение переговорных', image: '/images/tinting-bright-interior.webp' },
  { icon: 'photo', title: 'Фотопечать на плёнке', description: 'UV-печать (от 2 150 ₽/м²), сольвентная (от 1 250 ₽/м²), прозрачная (от 2 700 ₽/м²)', image: '/images/film-windows-showcases.webp' },
  { icon: 'cut', title: 'Плоттерная резка', description: 'Фигурные наклейки, логотипы, надписи из ORACAL. Резка от 150 ₽/м²', image: '/images/promo-2.webp' },
  { icon: 'perforated', title: 'Перфорированная One Way Vision', description: 'Печать на окна с видимостью изнутри; от 529 ₽/м² (720 dpi) до 690 ₽/м² (1440 dpi)', image: '/images/solar-protection-offices.webp' },
  { icon: 'stained', title: 'Витражные и дихроичные', description: 'Декоративный эффект на стекле без его замены. Смена цвета при угле обзора', image: '/images/promo-3.webp' },
  { icon: 'branding', title: 'Брендирование офисов', description: 'Оклейка ресепшн, переговорных, коридоров, фасадных перегородок под ключ', image: '/images/modern-office-athermal.webp' },
]

export default function DecorativePage() {
  return (
    <div className="min-h-screen pt-32">
      <ServiceSchema name="Декоративные плёнки" description="Матирование, витражи, фотопечать, плоттерная резка." priceFrom="529" />
      <BreadcrumbSchema items={[{ name: 'Услуги', url: '/services' }, { name: 'Декоративные плёнки', url: '/services/decorative' }]} />
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Декоративные плёнки', href: '/services/decorative' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg via-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/tinting-various-rooms.webp" alt="" fill className="object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="accent" size="lg" className="mb-6">Декоративные плёнки</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Декор стекла без замены
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              Матирование, фотопечать, плоттерная резка, витражи, дихроика, смарт-плёнки.
              7 видов декора — от 529 ₽/м².
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/calculator"><Button variant="primary" size="lg">Рассчитать стоимость</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Виды декоративных плёнок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} variant="glass" hover className="overflow-hidden h-full">
                <div className="relative h-44 overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                    <DecorIcon name={feature.icon} />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-fg mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>Применение в офисном дизайне</h2>

            <div className="space-y-6">
              <Card variant="default" className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-64 md:w-1/2">
                    <Image src="/images/modern-office-athermal.webp" alt="Матовые перегородки" fill className="object-cover" loading="lazy" />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-fg mb-4">Матовые перегородки</h3>
                    <p className="text-fg-muted leading-relaxed mb-4">
                      Создают ощущение пространства, скрывают дефекты стекла, идеальны для переговорных и зон отдыха.
                    </p>
                    <ul className="text-sm text-fg-muted space-y-2">
                      <li className="flex gap-2"><span className="text-accent">—</span> Зонирование open space</li>
                      <li className="flex gap-2"><span className="text-accent">—</span> Разграничение переговорных</li>
                      <li className="flex gap-2"><span className="text-accent">—</span> Скрытие рабочих зон от визитов</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="overflow-hidden">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="relative h-64 md:w-1/2">
                    <Image src="/images/film-windows-showcases.webp" alt="Фотопанели" fill className="object-cover" loading="lazy" />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-fg mb-4">Фотопанели с брендированием</h3>
                    <p className="text-fg-muted leading-relaxed mb-4">
                      Наносят фирменную символику, фотографический контент, создают визуальный акцент и фирменный стиль.
                    </p>
                    <ul className="text-sm text-fg-muted space-y-2">
                      <li className="flex gap-2"><span className="text-accent">—</span> UV-печать на плёнке</li>
                      <li className="flex gap-2"><span className="text-accent">—</span> Сольвентная печать</li>
                      <li className="flex gap-2"><span className="text-accent">—</span> Прозрачная плёнка для премиум</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-fg mb-6" style={{ fontFamily: 'var(--font-display)' }}>Создадим уникальный дизайн?</h2>
            <p className="text-lg text-fg-muted mb-8 max-w-2xl mx-auto">
              Бесплатная консультация + выезд замерщика = идеальное решение для вашего пространства
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacts"><Button variant="primary" size="lg">Получить консультацию</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">Позвонить</Button></Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

function DecorIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    matte: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18" strokeDasharray="2 2"/></svg>,
    photo: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
    cut: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/></svg>,
    perforated: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>,
    stained: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 12l10 10 10-10z"/><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/></svg>,
    branding: <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>,
  }
  return <>{icons[name] || icons.matte}</>
}