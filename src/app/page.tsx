import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Hero } from '@/components/sections/Hero'
import { MotionSection, MotionStagger, MotionItem } from '@/components/sections/Motion'

const services = [
  { title: 'Противоосколочные и бронирующие', slug: 'protective', description: 'Классы К4–Р4А по ГОСТ. Защита от осколков, взлома, БПЛА.', priceFrom: 'от 1 100 ₽/м²', icon: 'shield', image: '/images/showcase-protection.webp' },
  { title: 'Солнцезащитные и атермальные', slug: 'solar', description: 'Зеркальные, атермальные, керамические. Снижение жары до 80%.', priceFrom: 'от 650 ₽/м²', icon: 'sun', image: '/images/sun-protection-interior.webp' },
  { title: 'Декоративные плёнки', slug: 'decorative', description: 'Матирование, витражи, дихроика. Зонирование без замены стекла.', priceFrom: 'от 650 ₽/м²', icon: 'art', image: '/images/tinting-bright-interior.webp' },
  { title: 'Фотопечать на плёнке', slug: 'photo-print', description: 'UV, сольвентная, латексная печать. Прозрачные и перфорированные.', priceFrom: 'от 1 250 ₽/м²', icon: 'print', image: '/images/film-windows-showcases.webp' },
  { title: 'Плоттерная резка', slug: 'plotter', description: 'ORACAL 641/751/8500. Логотипы, буквы, надписи, навигация.', priceFrom: 'от 150 ₽/м²', icon: 'cut', image: '/images/promo-2.webp' },
  { title: 'Брендирование офисов', slug: 'branding', description: 'Под ключ: ресепшн, переговорные, коридоры, фасадные перегородки.', priceFrom: 'от 750 ₽/м²', icon: 'brand', image: '/images/modern-office-athermal.webp' },
  { title: 'Смарт-плёнки (PDLC)', slug: 'smart', description: 'Электрохромные: матовое/прозрачное по запросу. Управление со смартфона.', priceFrom: 'от 15 000 ₽/м²', icon: 'smart', image: '/images/office-solar-film.webp' },
]

const advantages = [
  { title: 'Сертификаты ГОСТ', description: 'Реальные классы защиты К4–Р4А, подтверждённые испытаниями по ГОСТ 30826-2014. Не «маркетинговые» — документальные.', number: '01' },
  { title: 'Гарантия до 15 лет', description: 'На материалы — гарантия производителя. На монтаж — 2 года. Рекламации редки: монтажники с опытом 5+ лет.', number: '02' },
  { title: 'Бесплатный замерщик', description: 'Выезд специалиста по Москве и МО — бесплатно при заключении договора. Точные замеры, консультация на объекте.', number: '03' },
  { title: 'Договор и НДС', description: 'Работаем с юридическими лицами. Полный пакет документов: договор, акт, гарантийный талон. Госзакупки 44-ФЗ и 223-ФЗ.', number: '04' },
]

const cases = [
  { title: 'Школа «Гармония»', category: 'Образование', area: '420 м²', desc: 'Противоосколочная плёнка К4 на все окна. Защита 800 учеников от осколков при ударах БПЛА.', class: 'К4', image: '/images/sun-protection-all.webp' },
  { title: 'Ювелирный салон', category: 'Ритейл', area: '450 м²', desc: 'Бронеплёнка Р3А (400 мкм) на витрины + антиграффити. Класс защиты для страховой компании.', class: 'Р3А', image: '/images/showcase-protection.webp' },
  { title: 'ЖК «ЭкоЛюкс»', category: 'Жильё', area: '1200 м²', desc: 'Атермальная плёнка на фасадное остекление. Снижение расходов на кондиционирование на 80%.', class: 'IR-cut', image: '/images/cozy-balcony-city-view.webp' },
]

const galleryImages = [
  { src: '/images/modern-office-athermal.webp', title: 'Атермальная плёнка в офисе' },
  { src: '/images/before-after-tinting.webp', title: 'До и после тонировки' },
  { src: '/images/balcony-solar-film.webp', title: 'Защита балкона от солнца' },
  { src: '/images/installing-athermal.webp', title: 'Монтаж атермальной плёнки' },
  { src: '/images/bright-balcony-protection.webp', title: 'Светлый балкон с защитой' },
  { src: '/images/tinting-various-rooms.webp', title: 'Тонировка разных помещений' },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Галерея работ — бегущая лента */}
      <section className="py-12 bg-bg-elevated overflow-hidden">
        <div className="flex gap-4 animate-scroll-x">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-80 h-48 rounded-xl overflow-hidden border border-border group">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <div className="absolute bottom-3 left-4 text-sm text-fg font-medium">{img.title}</div>
            </div>
          ))}
        </div>
      </section>

      <MotionSection className="py-20 bg-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">7 направлений</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance">
              Полный спектр архитектурных плёнок
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              От базовой противоосколочности до смарт-стекла. Выбираем оптимальное решение под задачу и бюджет.
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <MotionItem key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <Card variant="glass" hover className="h-full overflow-hidden group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                          <ServiceIcon name={service.icon} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed mb-4">{service.description}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-xs font-mono text-accent">{service.priceFrom}</span>
                        <span className="text-sm text-fg-muted group-hover:text-accent transition-colors">Подробнее →</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance">
              Почему выбирают ПЛЕНКИН
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Мы не просто клеим плёнку. Мы проектируем защиту с документальным подтверждением.
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <MotionItem key={adv.number}>
                <Card variant="default" className="p-8 flex gap-6 h-full">
                  <div className="text-5xl font-bold text-accent/30 font-mono flex-shrink-0">{adv.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-fg mb-2">{adv.title}</h3>
                    <p className="text-fg-muted leading-relaxed">{adv.description}</p>
                  </div>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance">
              Кейсы и объекты
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Более 5200 м² обработанного остекления. Каждый объект — это решение конкретной задачи.
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((project) => (
              <MotionItem key={project.title}>
                <Card variant="glass" hover className="overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs font-mono font-bold">
                        {project.class}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="accent" size="sm">{project.category}</Badge>
                      <span className="text-sm text-fg-muted">{project.area}</span>
                    </div>
                    <h3 className="text-lg font-bold text-fg mb-2">{project.title}</h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{project.desc}</p>
                  </CardContent>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">Смотреть все проекты</Button>
            </Link>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Как мы работаем
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Прозрачный процесс — от заявки до гарантийного обслуживания
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Заявка', desc: 'Звонок или форма на сайте. Консультация по телефону — 15 минут.' },
              { num: '02', title: 'Замер', desc: 'Бесплатный выезд замерщика. Точные размеры, выбор плёнки, смета.' },
              { num: '03', title: 'Договор', desc: 'Подписание договора, спецификация, график работ. Предоплата 50%.' },
              { num: '04', title: 'Монтаж', desc: 'Профессиональная установка. От 20 мин на окно. Уборка после работ.' },
              { num: '05', title: 'Приёмка', desc: 'Сдача объекта, подписание акта. Оплата остатка.' },
              { num: '06', title: 'Гарантия', desc: 'Гарантийный талон до 15 лет. Бесплатное сервисное обслуживание.' },
            ].map((step) => (
              <MotionItem key={step.num}>
                <Card variant="glass" className="p-6 h-full">
                  <div className="text-3xl font-bold text-accent/30 font-mono mb-3">{step.num}</div>
                  <h3 className="text-lg font-bold text-fg mb-2">{step.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{step.desc}</p>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Классы защиты — цветовая шкала
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              От базовой противоосколочности до защиты банков. Выберите свой класс по ГОСТ.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2 mb-6">
              {[
                { label: 'К4', color: '#22c55e', price: '1 100₽', desc: 'База' },
                { label: 'Р1А', color: '#16a34a', price: '1 500₽', desc: 'Умеренный' },
                { label: 'Р2А', color: '#eab308', price: '2 200₽', desc: 'А1' },
                { label: 'Р3А', color: '#f97316', price: '3 400₽', desc: 'А2' },
                { label: 'Р4А', color: '#ef4444', price: '4 000₽', desc: 'А3' },
              ].map((cls) => (
                <div key={cls.label} className="flex-1 group">
                  <div className="h-3 rounded-full transition-all group-hover:h-4" style={{ backgroundColor: cls.color }} />
                  <div className="mt-3 text-center">
                    <div className="font-bold text-fg text-sm">{cls.label}</div>
                    <div className="text-xs text-fg-muted">{cls.desc}</div>
                    <div className="text-xs font-mono text-accent mt-1">от {cls.price}/м²</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services/protective">
                <Button variant="secondary" size="md">Подробнее о классах →</Button>
              </Link>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Отзывы клиентов
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Нам доверяют защиту своих объектов
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Алексей М.', role: 'Директор ТЦ «Гранд Олимп»', text: 'Заказывали тонировку 800 м² витрин + One Way Vision. Сделали за 4 дня, без простоев. Энергозатраты на кондиционирование снизились заметно.', rating: 5 },
              { name: 'Ирина К.', role: 'Управляющая школой «Гармония»', text: 'После событий с дронами срочно нужна была защита окон. ПЛЕНКИН установили плёнку К4 на 420 м² за 2 дня. Документы для МЧС подготовили сами.', rating: 5 },
              { name: 'Дмитрий С.', role: 'Владелец ювелирного салона', text: 'Бронеплёнка Р3А на витрины — страховая сразу приняла. Дали все сертификаты, гарантийный талон. Профессиональный монтаж, без пузырей.', rating: 5 },
            ].map((review, i) => (
              <MotionItem key={i}>
                <Card variant="glass" className="p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <svg key={j} viewBox="0 0 24 24" className="w-4 h-4 text-accent" fill="currentColor">
                        <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 16.8l-6.3 4.6L8 14 2 9.4h7.6z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-fg-muted leading-relaxed mb-6 flex-1">«{review.text}»</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-fg">{review.name}</div>
                      <div className="text-xs text-fg-muted">{review.role}</div>
                    </div>
                  </div>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                Защита окон от БПЛА —<br />мифы и реальность
              </h2>
              <p className="text-lg text-fg-muted">
                Спрос на бронеплёнку вырос на 100% за год. Разбираемся, что реально работает.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="default" className="p-6 border-danger/30">
                <h3 className="text-lg font-bold text-danger mb-4">Миф</h3>
                <ul className="space-y-3 text-sm text-fg-muted">
                  <li className="flex gap-2"><span className="text-danger flex-shrink-0">✕</span> Любая плёнка 100 мкм — это «бронеплёнка от дронов»</li>
                  <li className="flex gap-2"><span className="text-danger flex-shrink-0">✕</span> Тёмная плёнка лучше защищает от осколков</li>
                  <li className="flex gap-2"><span className="text-danger flex-shrink-0">✕</span> DIY-монтаж из рулона с Ozon = профессиональная защита</li>
                  <li className="flex gap-2"><span className="text-danger flex-shrink-0">✕</span> Плёнка остановит сам дрон, а не только осколки</li>
                </ul>
              </Card>
              <Card variant="default" className="p-6 border-accent/30">
                <h3 className="text-lg font-bold text-accent mb-4">Реальность</h3>
                <ul className="space-y-3 text-sm text-fg-muted">
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Класс А1 (Р2А) требует 300–336 мкм, не 100</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Цвет не влияет на ударостойкость — важна толщина</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Пузыри и пыль под DIY-плёнкой снижают защиту на 40–60%</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Плёнка удерживает осколки при взрыве — не останавливает снаряд</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg-elevated">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-6 text-balance">
              Готовы защитить ваши окна?
            </h2>
            <p className="text-lg text-fg-muted mb-8">
              Бесплатный выезд замерщика по Москве и МО. Расчёт стоимости в день обращения.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/calculator"><Button variant="primary" size="xl">Рассчитать стоимость</Button></Link>
              <Link href="tel:+79857801375"><Button variant="secondary" size="xl">+7 985 780 13 75</Button></Link>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    shield: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
    sun: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
    art: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.926.746-1.688 1.688-1.688h1.999c3.108 0 5.541-2.451 5.541-5.5C22 6.5 17.5 2 12 2z"/></svg>,
    print: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z"/></svg>,
    cut: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>,
    brand: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>,
    smart: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
  }
  return <>{icons[name] || icons.shield}</>
}