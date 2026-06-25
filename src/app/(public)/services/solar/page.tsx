import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card, CardDescription, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Солнцезащитные и атермальные плёнки на окна | ПЛЕНКИН',
  description: 'Зеркальные, атермальные, спаттерные, керамические плёнки. Снижение жары до 80%, UV-защита 99%. Цены от 650 ₽/м². Москва и МО.',
}

const advantages = [
  { title: 'Управление солнечными потоками', description: 'Точное регулирование солнечными потоками, снижение энергозатрат', icon: '🌡️' },
  { title: 'Защита от перегрева', description: 'Энергосбережение до 80% снижения теплового воздействия', icon: '💨' },
  { title: 'Защита от ультрафиолета', description: 'UV-защита 99% — защищает содержимое от выцветания', icon: '☀️' },
  { title: 'Конфиденциальность', description: 'Визуальная приватность снаружи при сохранении прозрачности внутри', icon: '👁️' },
]

const types = [
  { name: 'Зеркальные', description: 'Silver 15, 35, 50 — отражают до 99% солнечного света, обеспечивают визуальную приватность снаружи', color: '#e8b42a', image: '/images/sun-protection-interior.webp' },
  { name: 'Атермальные', description: 'Прозрачные или слабо тонированные, блокируют ИК-излучение без снижения светопропускания', color: '#22c55e', image: '/images/modern-office-athermal.webp' },
  { name: 'Спаттерные', description: 'Металлизированные или керамические напыления, сочетание зеркального эффекта и термоблокировки', color: '#3b82f6', image: '/images/office-solar-film.webp' },
  { name: 'Нейтральные (Carbon)', description: 'Отсутствие металла, не создают помех радиосигналу (Wi-Fi, 5G)', color: '#71717a', image: '/images/balcony-solar-film.webp' },
]

const comparison = [
  { type: 'Зеркальная Silver 15', ts: 15, vs: 15, ir: 95, price: 'от 650 ₽/м²' },
  { type: 'Зеркальная Silver 35', ts: 35, vs: 35, ir: 85, price: 'от 750 ₽/м²' },
  { type: 'Атермальная IR-cut', ts: 65, vs: 60, ir: 80, price: 'от 1 200 ₽/м²' },
  { type: 'Спаттерная керамическая', ts: 45, vs: 40, ir: 90, price: 'от 2 000 ₽/м²' },
  { type: 'Carbon нейтральная', ts: 50, vs: 50, ir: 60, price: 'от 800 ₽/м²' },
]

export default function SolarPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Солнцезащитные плёнки', href: '/services/solar' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg via-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/modern-office-heat.webp" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="accent" size="lg" className="mb-6">Солнцезащитные и атермальные плёнки</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Управление солнцем,<br />теплом и светом
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              Зеркальные, атермальные, спаттерные и Carbon плёнки. Снижение жары до 80%, UV-защита 99%, гарантия до 15 лет.
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
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Типы солнцезащитных плёнок</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {types.map((type) => (
              <Card key={type.name} variant="glass" hover className="overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image src={type.image} alt={type.name} fill className="object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: type.color }} />
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="mb-3">{type.name}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{type.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Сравнение характеристик</h2>
          <Card variant="elevated" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-bg-card border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-fg">Тип плёнки</th>
                    <th className="px-6 py-4 text-sm font-semibold text-fg text-center">Светопропускание</th>
                    <th className="px-6 py-4 text-sm font-semibold text-fg text-center">ИК-блокировка</th>
                    <th className="px-6 py-4 text-sm font-semibold text-fg text-right">Цена</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparison.map((row, i) => (
                    <tr key={i} className="hover:bg-glass transition-colors">
                      <td className="px-6 py-4 text-fg font-medium">{row.type}</td>
                      <td className="px-6 py-4 text-center text-fg-muted">{row.ts}%</td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-24 h-2 rounded-full bg-bg-elevated overflow-hidden">
                            <div className="h-full rounded-full bg-accent" style={{ width: `${row.ir}%` }} />
                          </div>
                          <span className="text-fg-muted text-sm">{row.ir}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-accent">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-xs text-fg-subtle text-center mt-4">
            ТС — коэффициент солнцезащиты · ИК-блокировка — процент блокировки инфракрасного излучения
          </p>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <Card key={index} variant="default" hover className="p-6 text-center">
                <div className="text-4xl mb-4">{adv.icon}</div>
                <h3 className="font-semibold text-fg mb-2">{adv.title}</h3>
                <p className="text-sm text-fg-muted">{adv.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent/10 to-transparent rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-fg mb-6" style={{ fontFamily: 'var(--font-display)' }}>Готовы к проекту?</h2>
            <p className="text-lg text-fg-muted mb-8">
              Свяжитесь с нами для бесплатного выезда замерщика или получения подробной консультации
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacts"><Button variant="primary" size="lg">Оставить заявку</Button></Link>
              <Link href="/calculator"><Button variant="secondary" size="lg">Калькулятор цен</Button></Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}