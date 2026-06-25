import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Сертификаты и нормативная документация | ПЛЕНКИН',
  description: 'Сертификаты соответствия ГОСТ Р 51136-2008, ГОСТ 30826-2014. Классы защиты К4–Р4А. Документы для госзакупок 44-ФЗ и 223-ФЗ.',
}

const certificates = [
  { title: 'Сертификат соответствия ГОСТ Р 51136-2008', code: 'ГОСТ Р 51136-2008', desc: 'Устойчивое к удару защитное стекло. Классы защиты К4, Р1А–Р4А.', status: 'Действует' },
  { title: 'Сертификат испытаний ГОСТ 30826-2014', code: 'ГОСТ 30826-2014', desc: 'Многослойное стекло. Метод испытания на ударостойкость.', status: 'Действует' },
  { title: 'Сертификат на плёнку класса К4/ДВ2', code: 'К4 / ДВ2', desc: 'Базовая противоосколочность. Толщина 56–112 мкм.', status: 'Действует' },
  { title: 'Сертификат на плёнку класса Р1А/А0', code: 'Р1А / А0', desc: 'Умеренный удар. Толщина 200 мкм.', status: 'Действует' },
  { title: 'Сертификат на плёнку класса Р2А/А1', code: 'Р2А / А1', desc: 'Стальной шар 4 кг, высота 3,5 м. Толщина 300–336 мкм.', status: 'Действует' },
  { title: 'Сертификат на плёнку класса Р3А/А2', code: 'Р3А / А2', desc: 'Стальной шар 4 кг, высота 6,5 м. Толщина 400–448 мкм.', status: 'Действует' },
  { title: 'Сертификат на плёнку класса Р4А/А3', code: 'Р4А / А3', desc: 'Стальной шар 4 кг, высота 9,5 м. Толщина 600–672 мкм.', status: 'Действует' },
  { title: 'Гарантийное обязательство производителя', code: 'Гарантия 15 лет', desc: 'Гарантия на материалы от производителя плёнки.', status: 'Действует' },
]

const norms = [
  { code: 'ГОСТ Р 51136-2008', desc: 'Устойчивое к удару защитное стекло. Классы защиты, технические требования.' },
  { code: 'ГОСТ 30826-2014', desc: 'Стекло многослойное. Методы испытаний на ударостойкость.' },
  { code: 'РД МВД РФ №78 148-94', desc: 'Перечень объектов, подлежащих обязательной защите. При А1–А2 решётки не требуются.' },
  { code: 'ГОСТ Р 51261', desc: 'Защитные конструкции для банков и государственных учреждений.' },
]

export default function CertificatesPage() {
  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Сертификаты и документация</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Подтверждённые классы защиты</h1>
            <p className="text-lg text-fg-muted mb-8">Все плёнки сертифицированы по ГОСТ. Предоставляем полный пакет документов для B2B и госзакупок 44-ФЗ, 223-ФЗ.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Сертификаты соответствия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.code} variant="glass" hover className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                    </svg>
                  </div>
                  <Badge variant="success" size="sm">{cert.status}</Badge>
                </div>
                <div className="font-mono text-sm text-accent mb-2">{cert.code}</div>
                <h3 className="text-sm font-semibold text-fg mb-2">{cert.title}</h3>
                <p className="text-xs text-fg-muted leading-relaxed">{cert.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Нормативная база</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {norms.map((norm) => (
              <Card key={norm.code} variant="default" className="p-6">
                <div className="font-mono text-accent font-bold mb-2">{norm.code}</div>
                <div className="text-sm text-fg-muted leading-relaxed">{norm.desc}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-fg mb-4">Нужны документы для тендера?</h2>
            <p className="text-fg-muted mb-6">Подготовим техническое задание, сертификаты, гарантийные письма под 44-ФЗ и 223-ФЗ</p>
            <a href="tel:+79857801375"><Badge variant="accent" size="lg">+7 985 780 13 75</Badge></a>
          </div>
        </Container>
      </section>
    </div>
  )
}