import Link from 'next/link'
import Image from 'next/image'
import { pageMetadata } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ServiceSchema, BreadcrumbSchema } from '@/components/seo/ServiceSchema'
import { SmartFilmDemo } from '@/components/sections/SmartFilmDemo'

export const metadata = pageMetadata({
  canonical: '/services/smart',
  title: 'Смарт-плёнки PDLC и спецрешения: экранирующие, музейные | ПЛЕНКИН',
  description: 'Электрохромные смарт-плёнки (переключение матовое/прозрачное), экранирующие (антишпион), музейные (UV 99%), антиграффити. От 2 300 до 84 000 ₽/м².',
})

const specialFilms = [
  { name: 'Смарт-плёнка PDLC', price: '15 000–30 000 ₽/м²', desc: 'Электрохромная плёнка. Переключение матовое/прозрачное за 0,1 сек. Управление: выключатель, пульт, смартфон, датчик.', features: ['Прозрачность 75% (вкл)', 'Непрозрачность 100% (выкл)', 'Питание 220В / трансформатор', 'Срок службы 10+ лет'] },
  { name: 'Экранирующая (Антишпион)', price: '18 000–84 000 ₽/м²', desc: 'Защита от перехвата Wi-Fi, 5G, ГЛОНАСС, сотовой связи. Создаёт эффект клетки Фарадея на остеклении.', features: ['Подавление сигналов 90+ дБ', 'Разные частотные диапазоны', 'Для переговорных и серверных', 'Сертификация по ТЗ'] },
  { name: 'Музейная (UV-блок)', price: 'от 2 300 ₽/м²', desc: 'Блокировка УФ-излучения до 99% без визуального затемнения. Защита экспонатов от выцветания.', features: ['UV-блок 99%', 'Прозрачность 85%+', 'Без искажения цвета', 'Для музеев и галерей'] },
  { name: 'Антиграффити', price: 'по запросу', desc: 'Жертвенная плёнка для защиты витрин и фасадов от вандализма. Замена плёнки вместо замены стекла.', features: ['Защита от царапин и краски', 'Лёгкая замена', 'Прозрачная 88%+', 'Для витрин и фасадов'] },
]

export default function SmartPage() {
  return (
    <div className="min-h-screen pt-32">
      <ServiceSchema name="Смарт-плёнки и спецрешения" description="Электрохромные PDLC, экранирующие, музейные, антиграффити." priceFrom="2300" />
      <BreadcrumbSchema items={[{ name: 'Услуги', url: '/services' }, { name: 'Смарт-плёнки', url: '/services/smart' }]} />
      <Container>
        <Breadcrumbs items={[{ name: 'Услуги', href: '/services' }, { name: 'Смарт-плёнки', href: '/services/smart' }]} />
      </Container>
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/office-solar-film.webp" alt="" fill className="object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Смарт-плёнки и спецрешения</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Умное стекло и специальные плёнки</h1>
            <p className="text-lg text-fg-muted mb-8">Электрохромные, экранирующие, музейные, антиграффити. Нишевые решения для специфических задач.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacts"><Button variant="primary" size="lg">Получить КП</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <h2 className="text-3xl font-bold text-fg mb-12 text-center">Каталог специальных плёнок</h2>
          <div className="space-y-6">
            {specialFilms.map((film) => (
              <Card key={film.name} variant="glass" className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-fg">{film.name}</h3>
                      <Badge variant="accent" size="sm">{film.price}</Badge>
                    </div>
                    <p className="text-fg-muted leading-relaxed mb-4">{film.desc}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {film.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-fg-muted">
                          <span className="text-accent">—</span> {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-elevated">
        <Container>
          <h2 className="text-2xl font-bold text-fg mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>Как работает смарт-плёнка PDLC</h2>
          <p className="text-fg-muted leading-relaxed mb-8 max-w-2xl mx-auto text-center">
            PDLC (Polymer Dispersed Liquid Crystal) — полимерная матрица с жидкокристаллическими каплями.
            Нажмите на стекло ниже, чтобы увидеть эффект в действии.
          </p>
          <SmartFilmDemo />
          <div className="mt-8 max-w-2xl mx-auto text-center text-sm text-fg-subtle">
            Управление: настенный выключатель, пульт ДУ, смартфон (WiFi/Bluetooth), датчик освещённости, умный дом.
          </div>
        </Container>
      </section>
    </div>
  )
}