import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ServiceItem } from '@/components/sections/ServiceItem'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Противоосколочные и бронирующие плёнки (К4–Р4А) | ПЛЕНКИН',
  description: 'Сертифицированные классы защиты К4–Р4А по ГОСТ 51136, 30826. Защита от осколков, взлома, БПЛА. Цены от 1 100 ₽/м². Гарантия до 15 лет. Москва и МО.',
}

const protectionClasses = [
  { id: 'k4', label: 'К4 / ДВ2', thickness: '56–112 мкм', energy: 'базовая противоосколочность', objects: 'жилые помещения, школы, торговые залы', color: '#22c55e', price: 'от 1 100 ₽/м²' },
  { id: 'r1a', label: 'Р1А / А0', thickness: '200 мкм', energy: 'умеренный удар', objects: 'офисы, кафе, рестораны', color: '#16a34a', price: 'от 1 500 ₽/м²' },
  { id: 'r2a', label: 'Р2А / А1', thickness: '300–336 мкм', energy: 'стальной шар 4 кг, 3,5 м', objects: 'ТЦ с сигнализацией, офисы', color: '#eab308', price: 'от 2 200 ₽/м²' },
  { id: 'r3a', label: 'Р3А / А2', thickness: '400–448 мкм', energy: 'стальной шар 4 кг, 6,5 м', objects: 'ювелирные магазины, банки, музеи', color: '#f97316', price: 'от 3 400 ₽/м²' },
  { id: 'r4a', label: 'Р4А / А3', thickness: '600–672 мкм', energy: 'стальной шар 4 кг, 9,5 м', objects: 'правительственные здания, банки', color: '#ef4444', price: 'от 4 000 ₽/м²' },
]

const additionalClasses = [
  { label: 'СМ1–СМ3', description: 'защита от удара молоткового инструмента' },
  { label: 'СТ1–СТ3', description: 'защита от удара ударного инструмента' },
  { label: 'Б1–Б2', description: 'устойчивые к пробиванию' },
]

const norms = [
  { code: 'ГОСТ Р 51136-2008', description: 'устойчивое к удару защитное стекло, классы защиты' },
  { code: 'ГОСТ 30826-2014', description: 'испытания многослойного стекла на ударостойкость (классы Р1А–Р4А)' },
  { code: 'РД МВД РФ №78 148-94', description: 'перечень объектов с защитным остеклением; при А1–А2 решётки не требуются' },
  { code: 'ГОСТ Р 51261', description: 'защитные конструкции для банков и госучреждений' },
]

const faqItems = [
  { q: 'Чем отличается 112 мкм от класса А1?', a: '112 мкм — это класс К4 (базовая противоосколочность). Класс А1 (Р2А) требует плёнки 300–336 мкм. Продажа плёнок 56–80 мкм под видом «А1» — фальсификация, выявляемая при тестировании.' },
  { q: 'Нужны ли решётки при установке бронеплёнки?', a: 'При защитном остеклении классов А1–А2 установка металлических решёток и жалюзи не требуется согласно РД МВД РФ №78 148-94.' },
  { q: 'Какая плёнка нужна для защиты от БПЛА?', a: 'Для защиты от осколков при ударах дронов рекомендуются классы Р1А (200 мкм) для жилых помещений и Р2А (300 мкм) для административных зданий, школ, ТЦ.' },
  { q: 'Работаете ли вы по 44-ФЗ и 223-ФЗ?', a: 'Да, мы работаем с юридическими лицами, НДС, предоставляем договоры с гарантией и сертифицированную продукцию с указанием класса защиты по ГОСТ в технических заданиях.' },
]

export default function ProtectivePage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Противоосколочные плёнки', href: '/services/protective' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg via-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/showcase-protection.webp" alt="" fill className="object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">Противоосколочные и бронирующие плёнки</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Защита стекла от осколков,<br />взлома и угрозы БПЛА
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              Сертифицированные классы защиты К4–Р4А по ГОСТ Р 51136-2008 и ГОСТ 30826-2014.
              Монтаж с гарантией до 15 лет. Документальное сопровождение для госзакупок 44-ФЗ и 223-ФЗ.
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
          <h2 className="text-3xl font-bold text-fg mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>Классы защиты по ГОСТ</h2>
          <p className="text-fg-muted text-center mb-12 max-w-2xl mx-auto">
            Классификация по ударостойкости (ГОСТ Р 51136-2008, испытания по ГОСТ 30826-2014).
            Для стекла 4–5 мм класс А1 требует плёнки 300–381 мкм (11–15 mil).
          </p>
          <div className="space-y-4">
            {protectionClasses.map((cls) => (
              <Card key={cls.id} variant="glass" hover className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center" style={{ backgroundColor: cls.color }}>
                      {cls.label.split(' / ')[0]}
                    </div>
                    <div>
                      <div className="text-lg font-bold text-fg">{cls.label}</div>
                      <div className="text-sm text-fg-muted">{cls.thickness}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-fg-muted mb-1">Энергия удара: <span className="text-fg">{cls.energy}</span></div>
                    <div className="text-sm text-fg-muted">Объекты: <span className="text-fg">{cls.objects}</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-accent">{cls.price}</div>
                    <div className="text-xs text-fg-subtle">материал + монтаж</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalClasses.map((cls) => (
              <Card key={cls.label} variant="default" className="p-4 text-center">
                <div className="font-mono font-bold text-accent mb-1">{cls.label}</div>
                <div className="text-sm text-fg-muted">{cls.description}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Нормативная база</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {norms.map((norm) => (
              <Card key={norm.code} variant="default" className="p-6">
                <div className="font-mono text-accent font-bold mb-2">{norm.code}</div>
                <div className="text-fg-muted text-sm">{norm.description}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ServiceItem icon="🚗" title="Бесплатный выезд замерщика" description="При заключении договора — бесплатный выезд специалиста для точных замеров и консультации по выбору класса защиты" />
            <ServiceItem icon="📋" title="Документальное сопровождение" description="Гарантийные талоны, акты выполненных работ, сертификаты соответствия ГОСТ — необходимо для B2B и государственных тендеров" />
            <ServiceItem icon="✅" title="Гарантия качества" description="Гарантия на материалы до 15 лет, гарантия на монтаж — 2 года. Работаем по договору с юридическим лицом и НДС" />
          </div>

          <h2 className="text-3xl font-bold text-fg mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>Частые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <Card key={i} variant="glass" className="p-6">
                <h3 className="text-lg font-semibold text-fg mb-2">{item.q}</h3>
                <p className="text-fg-muted text-sm leading-relaxed">{item.a}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/calculator"><Button variant="primary" size="xl">Калькулятор стоимости</Button></Link>
          </div>
        </Container>
      </section>
    </div>
  )
}