import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata = pageMetadata({
  canonical: '/gov',
  title: 'Для госзаказчиков — работа по 44-ФЗ и 223-ФЗ | ПЛЕНКИН',
  description: 'Поставка и монтаж архитектурных плёнок для государственных учреждений. Полный пакет документов для 44-ФЗ и 223-ФЗ. Сертификаты ГОСТ. Опыт работы со школами, МЧС, администрациями.',
})

const tenderAdvantages = [
  { title: 'Полный пакет документов', desc: 'Договор, спецификация, счёт-фактура с НДС, акт приёмки КС-2/КС-3, гарантийный талон, паспорта качества, сертификаты соответствия ГОСТ. Работаем по ЭДО.' },
  { title: 'Типовые формулировки для ТЗ', desc: 'Готовые технические задания с указанием классов защиты по ГОСТ 30826-2014, толщины плёнки, методов испытаний. Подбираем под объект и нормативные требования.' },
  { title: 'Сертификаты на каждую партию', desc: 'Протоколы испытаний по ГОСТ Р 51136-2008 и ГОСТ 30826-2014. Сертификаты соответствия на плёнки классов К4, Р1А–Р4А. Предоставляем оригиналы для тендерной документации.' },
  { title: 'Опыт с госучреждениями', desc: 'Школы, детские сады, администрации, объекты МЧС. Понимаем специфику: приёмка с участием надзорных органов, скрытые работы, гарантийные обязательства на весь период эксплуатации.' },
  { title: 'НДС в цене', desc: 'Работаем с НДС. Все цены в КП включают НДС 20%. Предоставляем счета-фактуры и УПД. Годовые контракты с рамочными договорами.' },
  { title: 'Гарантия до 15 лет', desc: 'Гарантийные обязательства на весь срок действия контракта. Покрываем: отслоения, выгорание, потеря адгезии, пузырьки. Бесплатное сервисное обслуживание в гарантийный период.' },
]

const objectTypes = [
  { title: 'Школы и детсады', class: 'К4 / Р1А', desc: 'Противоосколочные плёнки по требованиям МЧС. Защита детей от осколков при ударах БПЛА и взрывах. Документы для приёмки.' },
  { title: 'Административные здания', class: 'Р2А / Р3А', desc: 'Бронеплёнки для офисов госучреждений. Защита от взлома и осколков. Соответствие РД МВД РФ №78 148-94.' },
  { title: 'Учреждения здравоохранения', class: 'К4 / Р1А', desc: 'Противоосколочные плёнки для больниц и поликлиник. Монтаж без остановки работы учреждения.' },
  { title: 'Объекты культуры и спорта', class: 'К4 / Р2А', desc: 'Защита остекления в музеях, театрах, спортивных комплексах. Музейные плёнки с UV-блоком 99%.' },
]

const documentPackage = [
  'Договор поставки и монтажа (типовая форма или форма заказчика)',
  'Спецификация с указанием классов защиты по ГОСТ',
  'Счёт-фактура с НДС 20%',
  'Акт приёмки выполненных работ (КС-2 / КС-3)',
  'Сертификаты соответствия ГОСТ Р 51136-2008',
  'Протоколы испытаний по ГОСТ 30826-2014',
  'Паспорта качества на плёнку (на каждую партию)',
  'Гарантийный талон с указанием срока и покрытия',
  'УПД (универсальный передаточный документ)',
  'Письмо о возможности работы по ЭДО',
]

const tenderSteps = [
  { num: '01', title: 'Запрос КП', desc: 'Присылаете ТЗ или описание объекта. Готовим коммерческое предложение с указанием классов, цен и сроков.' },
  { num: '02', title: 'Согласование', desc: 'Уточняем тип стекла, площадь, этажность, требования к классу защиты. Корректируем КП.' },
  { num: '03', title: 'Тендер', desc: 'Предоставляем полный пакет документов для участия в торгах. Консультируем по формулировкам ТЗ.' },
  { num: '04', title: 'Договор', desc: 'Заключаем государственный контракт. Согласуем график работ и условия приёмки.' },
  { num: '05', title: 'Монтаж', desc: 'Выполняем работы в установленные сроки. Монтаж без остановки работы учреждения (выходные/вечер).' },
  { num: '06', title: 'Приёмка и гарантия', desc: 'Сдаём объект с участием надзорных органов. Передаём пакет закрывающих документов и гарантийные талоны.' },
]

export default function GovPage() {
  return (
    <div className="min-h-screen pt-32">
      <Container>
        <Breadcrumbs items={[{ name: 'Для госзаказчиков', href: '/gov' }]} />
      </Container>

      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-dot-pattern opacity-50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" size="lg" className="mb-6">Для государственных заказчиков</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Работа по 44-ФЗ и 223-ФЗ
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              Поставка и монтаж архитектурных плёнок безопасности для школ, администраций,
              больниц и объектов культуры. Полный пакет документов, НДС, сертификаты ГОСТ,
              гарантия до 15 лет.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacts"><Button variant="primary" size="lg">Запросить КП</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Преимущества для госзаказчиков
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenderAdvantages.map((adv, i) => (
              <Card key={i} variant="glass" className="p-6 h-full">
                <div className="text-3xl font-bold text-accent/30 font-mono mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold text-fg mb-2">{adv.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{adv.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Типы объектов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectTypes.map((obj, i) => (
              <Card key={i} variant="default" hover className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-fg">{obj.title}</h3>
                  <Badge variant="accent" size="sm">{obj.class}</Badge>
                </div>
                <p className="text-sm text-fg-muted leading-relaxed">{obj.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Пакет документов
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card variant="elevated" className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {documentPackage.map((doc, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-bg-card border border-border">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <path d="M14 2v6h6"/>
                    </svg>
                    <span className="text-sm text-fg">{doc}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Как мы работаем с госзаказчиками
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenderSteps.map((step) => (
              <Card key={step.num} variant="glass" className="p-6 h-full">
                <div className="text-3xl font-bold text-accent/30 font-mono mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-fg mb-2">{step.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed">{step.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Нормативная база
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { code: 'ГОСТ Р 51136-2008', desc: 'Защитное стекло. Классы защиты, технические требования. Основной документ для тендерной документации.' },
              { code: 'ГОСТ 30826-2014', desc: 'Испытания многослойного стекла на ударостойкость. Метод: стальной шар 4 кг, высота падения 3,5–9,5 м.' },
              { code: 'РД МВД РФ №78 148-94', desc: 'Перечень объектов с обязательным защитным остеклением. При классах А1–А2 решётки не требуются.' },
              { code: 'ГОСТ Р 51261', desc: 'Защитные конструкции для банков и государственных учреждений.' },
              { code: '44-ФЗ', desc: 'Федеральный закон о контрактной системе. Работаем по всем требованиям: обеспечение, ЭЦП, ЕИС.' },
              { code: '223-ФЗ', desc: 'Закупки госкорпораций. Участвуем в закупках по положению о закупках заказчика.' },
            ].map((norm) => (
              <Card key={norm.code} variant="default" className="p-5 flex items-start gap-4">
                <div className="font-mono text-accent font-bold text-sm flex-shrink-0 w-40">{norm.code}</div>
                <div className="text-sm text-fg-muted leading-relaxed">{norm.desc}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-fg mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Готовы участвовать в вашем тендере?
              </h2>
              <p className="text-fg-muted mb-6">
                Подготовим КП, пакет документов и техническое задание в течение 1 рабочего дня.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contacts"><Button variant="primary" size="lg">Запросить КП</Button></Link>
                <a href="tel:+79857801375" className="text-accent font-bold text-lg hover:text-accent-dim transition-colors">+7 985 780 13 75</a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}