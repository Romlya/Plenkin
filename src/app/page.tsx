import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Hero } from '@/components/sections/Hero'
import { MotionSection, MotionStagger, MotionItem } from '@/components/sections/Motion'
import { QuickLeadForm } from '@/components/sections/QuickLeadForm'

const services = [
  { title: 'Противоосколочные и бронеплёнки', slug: 'protective', description: 'Классы К4–Р4А по ГОСТ 30826-2014: защита от осколков, взлома и БПЛА для школ, ТЦ и офисов.', priceFrom: 'от 1 100 ₽/м²', icon: 'shield', image: '/images/showcase-protection.webp', forWhom: 'Школы, банки, ТЦ, госучреждения' },
  { title: 'Солнцезащитные и атермальные', slug: 'solar', description: 'Зеркальные, атермальные, керамические. Снижение тепловой нагрузки до 80% для офисов и квартир.', priceFrom: 'от 650 ₽/м²', icon: 'sun', image: '/images/sun-protection-interior.webp', forWhom: 'Офисы, ЖК, квартиры, балконы' },
  { title: 'Декоративные плёнки', slug: 'decorative', description: 'Матирование, витражи, дихроика. Зонирование переговорных и open space без замены стекла.', priceFrom: 'от 650 ₽/м²', icon: 'art', image: '/images/tinting-bright-interior.webp', forWhom: 'Офисы, рестораны, клиники' },
  { title: 'Фотопечать на плёнке', slug: 'photo-print', description: 'UV, сольвентная, латексная печать. Брендирование витрин и навигация в ТЦ и бизнес-центрах.', priceFrom: 'от 1 250 ₽/м²', icon: 'print', image: '/images/film-windows-showcases.webp', forWhom: 'Ритейл, ТЦ, брендирование' },
  { title: 'Плоттерная резка', slug: 'plotter', description: 'ORACAL 641/751/8500. Логотипы, буквы, навигация для офисов и торговых залов.', priceFrom: 'от 150 ₽/м²', icon: 'cut', image: '/images/promo-2.webp', forWhom: 'Офисы, ТЦ, мероприятия' },
  { title: 'Брендирование офисов', slug: 'branding', description: 'Поставка, монтаж и сервис: ресепшн, переговорные, коридоры, фасадные перегородки.', priceFrom: 'от 750 ₽/м²', icon: 'brand', image: '/images/modern-office-athermal.webp', forWhom: 'Бизнес-центры, стартапы' },
  { title: 'Смарт-плёнки (PDLC)', slug: 'smart', description: 'Электрохромные: матовое/прозрачное по запросу. Переговорные, кабинеты руководителей.', priceFrom: 'от 15 000 ₽/м²', icon: 'smart', image: '/images/office-solar-film.webp', forWhom: 'VIP-зоны, переговорные, клиники' },
]

const advantages = [
  { title: 'Сертификаты ГОСТ', description: 'Протоколы испытаний и сертификаты по ГОСТ 30826-2014 и ГОСТ Р 51136-2008 предоставляем по запросу. Классы подтверждены документально, не «на словах».', number: '01' },
  { title: 'Гарантия до 15 лет', description: 'На материалы — гарантия производителя. На монтаж — 2 года. Покрываем: отслоения, выгорание, пузырьки, потерю адгезии. Рекламации редки: монтажники с опытом 5+ лет.', number: '02' },
  { title: 'Бесплатный замерщик', description: 'Выезд специалиста по Москве и МО — в течение 1–2 дней. Точные замеры, консультация по выбору класса защиты, предварительная смета на объекте.', number: '03' },
  { title: 'Госзакупки 44-ФЗ и 223-ФЗ', description: 'Полный пакет документов: договор, акт, гарантийный талон, сертификаты. Готовые типовые формулировки для ТЗ. Работаем по типовым формам заказчика или предлагаем свой шаблон.', number: '04' },
  { title: 'Проектирование решений', description: 'Подбираем плёнку под требования МЧС, страховщиков и внутренних регламентов безопасности. Учитываем тип стекла, ориентацию окон, нормативную базу.', number: '05' },
]

const cases = [
  { title: 'Школа «Гармония»', category: 'Образование', area: '420 м²', desc: 'Противоосколочная плёнка К4 на все окна. Защита 800 учеников от осколков при ударах БПЛА.', class: 'К4', image: '/images/sun-protection-all.webp', result: 'Соответствие требованиям МЧС, акт приёмки без замечаний' },
  { title: 'Ювелирный салон', category: 'Ритейл', area: '450 м²', desc: 'Бронеплёнка Р3А (400 мкм) на витрины + антиграффити. Класс защиты для страховой компании.', class: 'Р3А', image: '/images/showcase-protection.webp', result: 'Страховая приняла объект без доп. условий' },
  { title: 'ЖК «ЭкоЛюкс»', category: 'Жильё', area: '1200 м²', desc: 'Атермальная плёнка на фасадное остекление. Снижение расходов на кондиционирование.', class: 'IR-cut', image: '/images/cozy-balcony-city-view.webp', result: 'Снижение затрат на кондиционирование до 80% по данным заказчика' },
]

const workSteps = [
  { num: '01', title: 'Заявка', desc: 'Звонок или форма на сайте. Предварительный расчёт по телефону на основе ваших размеров и фото — за 15 минут.' },
  { num: '02', title: 'Замер', desc: 'Бесплатный выезд замерщика в течение 1–2 дней. Точные размеры, выбор плёнки, смета на объекте.' },
  { num: '03', title: 'Договор', desc: 'Работаем по типовым формам заказчика или предлагаем свой шаблон, согласованный с юристами. Предоплата 50%.' },
  { num: '04', title: 'Монтаж', desc: 'Профессиональная установка. От 20 минут на окно, типичный объект — 1–3 дня. Уборка после работ.' },
  { num: '05', title: 'Приёмка', desc: 'Сдача объекта, подписание акта. Оплата остатка. Передача гарантийного талона.' },
  { num: '06', title: 'Гарантия', desc: 'Гарантийный талон до 15 лет. Покрываем отслоения, выгорание, пузырьки, потерю адгезии. Бесплатное сервисное обслуживание.' },
]

const protectionScale = [
  { label: 'К4', color: '#22c55e', price: '1 100₽', desc: 'Базовая защита от осколков стекла', objects: 'Жильё, школы, торговые залы' },
  { label: 'Р1А', color: '#16a34a', price: '1 500₽', desc: 'Умеренный удар', objects: 'Офисы, витрины в спокойных районах' },
  { label: 'Р2А', color: '#eab308', price: '2 200₽', desc: 'А1 — стальной шар 4 кг, 3,5 м', objects: 'ТЦ с сигнализацией, офисы' },
  { label: 'Р3А', color: '#f97316', price: '3 400₽', desc: 'А2 — стальной шар 4 кг, 6,5 м', objects: 'Банки, ювелирные, музеи' },
  { label: 'Р4А', color: '#ef4444', price: '4 000₽', desc: 'А3 — стальной шар 4 кг, 9,5 м', objects: 'Госучреждения, спецобъекты' },
]

const reviews = [
  { name: 'Алексей М.', role: 'Директор ТЦ «Гранд Олимп»', city: 'Москва', type: 'Торговый центр', text: 'Тонировка 800 м² витрин + One Way Vision. Сделали за 4 дня, без остановки работы ТЦ. Энергозатраты на кондиционирование снизились заметно — замеры подтвердили 75%.', rating: 5 },
  { name: 'Ирина К.', role: 'Управляющая школой «Гармония»', city: 'Москва', type: 'Школа', text: 'После событий с дронами срочно нужна была защита окон. ПЛЕНКИН установили плёнку К4 на 420 м² за 2 дня. Документы для МЧС подготовили сами — акт приёмки прошёл без замечаний.', rating: 5 },
  { name: 'Дмитрий С.', role: 'Владелец ювелирного салона', city: 'Москва', type: 'Ювелирный салон', text: 'Бронеплёнка Р3А на витрины — страховая сразу приняла. Все сертификаты, гарантийный талон. Монтаж без пузырей, аккуратно.', rating: 5 },
  { name: 'Марина В.', role: 'Финансовый директор', city: 'Москва', type: 'Бизнес-центр', text: 'Заказывали брендирование офиса при переезде — сжатые сроки, нужно было за выходные. Бригада работала в субботу и воскресенье с 8:00 до 22:00, в понедельник сотрудники пришли в готовый офис. Матирование + фотопечать + навигация — 180 м².', rating: 5 },
]

const targetSegments = [
  { icon: 'school', title: 'Школы и детсады', desc: 'Противоосколочные плёнки К4 по требованиям МЧС. Документы для приёмки.' },
  { icon: 'office', title: 'Офисы и БЦ', desc: 'Брендирование, матирование, солнцезащита. Монтаж в выходные.' },
  { icon: 'shop', title: 'ТЦ и ритейл', desc: 'Тонировка витрин, One Way Vision, антивандальная защита.' },
  { icon: 'bank', title: 'Банки и ювелирные', desc: 'Бронеплёнки Р3А–Р4А. Сертификаты для страховых.' },
  { icon: 'gov', title: 'Госучреждения', desc: 'Работа по 44-ФЗ и 223-ФЗ. Полный пакет документов.' },
  { icon: 'home', title: 'Частные клиенты', desc: 'Тонировка балконов, защита от осколков, декор.' },
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
      <MotionSection className="py-12 bg-bg-elevated overflow-hidden">
        <div className="flex gap-4 animate-scroll-x">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 w-80 h-48 rounded-xl overflow-hidden border border-border group">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <div className="absolute bottom-3 left-4 text-sm text-fg font-medium whitespace-nowrap">{img.title}</div>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* Для кого мы работаем */}
      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Для кого мы работаем
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Поставляем и монтируем плёнки для объектов любой сложности
            </p>
          </div>

          <MotionStagger className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {targetSegments.map((seg, i) => (
              <MotionItem key={i}>
                <Card variant="glass" className="p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 transition-all group-hover:bg-accent/20 group-hover:border-accent/40">
                    <SegmentIcon name={seg.icon} />
                  </div>
                  <h3 className="font-bold text-fg mb-2 text-sm md:text-base">{seg.title}</h3>
                  <p className="text-xs md:text-sm text-fg-muted leading-relaxed">{seg.desc}</p>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">7 направлений</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Полный спектр архитектурных плёнок
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              От базовой противоосколочности до смарт-стекла. Подбираем решение под задачу, бюджет и нормативные требования.
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
                        className="object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                          <ServiceIcon name={service.icon} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-fg group-hover:text-accent transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-fg-muted leading-relaxed mb-3">{service.description}</p>
                      <div className="text-xs text-accent mb-4">Для кого: {service.forWhom}</div>
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
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Почему выбирают ПЛЕНКИН
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Поставляем и монтируем плёнки с документальным подтверждением классов защиты
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <MotionItem key={adv.number}>
                <Card variant="default" className="p-6 h-full">
                  <div className="text-4xl font-bold text-accent/30 font-mono mb-3">{adv.number}</div>
                  <h3 className="text-lg font-bold text-fg mb-2">{adv.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{adv.description}</p>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Кейсы и объекты
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Более 5200 м² остекления с плёнкой безопасности по ГОСТ. Каждый объект — решение конкретной задачи.
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((project) => (
              <MotionItem key={project.title}>
                <Card variant="glass" hover className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110" loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs font-mono font-bold">
                        {project.class}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="accent" size="sm">{project.category}</Badge>
                      <span className="text-sm text-fg-muted">{project.area}</span>
                    </div>
                    <h3 className="text-lg font-bold text-fg mb-2">{project.title}</h3>
                    <p className="text-sm text-fg-muted leading-relaxed mb-3">{project.desc}</p>
                    <div className="mt-auto pt-3 border-t border-border">
                      <div className="text-xs text-fg-subtle mb-1">Результат:</div>
                      <div className="text-sm text-accent font-medium">{project.result}</div>
                    </div>
                  </CardContent>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>

          <div className="text-center mt-12">
            <Link href="/contacts">
              <Button variant="secondary" size="lg">Запросить похожее решение для вашего объекта</Button>
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
            {workSteps.map((step) => (
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
              От базовой противоосколочности до защиты банков. Выберите класс по ГОСТ 30826-2014.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2 mb-8">
              {protectionScale.map((cls) => (
                <div key={cls.label} className="flex-1 group">
                  <div className="h-3 rounded-full transition-all group-hover:h-4" style={{ backgroundColor: cls.color }} />
                  <div className="mt-3 text-center">
                    <div className="font-bold text-fg text-sm">{cls.label}</div>
                    <div className="text-xs text-fg-muted mt-1">{cls.desc}</div>
                    <div className="text-xs text-fg-subtle mt-1">{cls.objects}</div>
                    <div className="text-xs font-mono text-accent mt-1">от {cls.price}/м²</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/services/protective">
                <Button variant="secondary" size="md">Подробнее о классах и испытаниях ГОСТ →</Button>
              </Link>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
              Отзывы клиентов
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl mx-auto">
              Нам доверяют защиту своих объектов
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
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
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-fg">{review.name}</div>
                      <div className="text-xs text-fg-muted">{review.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-fg-muted">{review.type}</div>
                      <div className="text-xs text-fg-subtle">{review.city}</div>
                    </div>
                  </div>
                </Card>
              </MotionItem>
            ))}
          </MotionStagger>

          <div className="text-center mt-8">
            <p className="text-xs text-fg-subtle">Оригиналы отзывов и благодарственные письма доступны по запросу.</p>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="py-20 bg-bg-elevated">
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
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Класс А1 (Р2А) требует 300–336 мкм, не 100. Испытания по ГОСТ 30826-2014: стальной шар 4 кг с высоты 3,5 м</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Цвет не влияет на ударостойкость — важна толщина и структура многослойного полиэстера</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Пузыри и пыль под DIY-плёнкой снижают адгезию на 40–60%. При ударе плёнка отслаивается</li>
                  <li className="flex gap-2"><span className="text-accent flex-shrink-0">✓</span> Плёнка удерживает осколки при взрыве — не останавливает снаряд. Классы А1–А3 регламентированы ГОСТ 30826-2014</li>
                </ul>
              </Card>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-bg-card border border-border text-center">
              <p className="text-sm text-fg-muted">
                Окончательный выбор класса защиты и толщины плёнки выполняется по результатам обследования объекта
                и с учётом требований заказчика, МЧС и страховщиков.
              </p>
            </div>
          </div>
        </Container>
      </MotionSection>

      {/* Финальный CTA с микроформой */}
      <MotionSection className="py-20 bg-bg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                  Готовы защитить ваши окна?
                </h2>
                <p className="text-lg text-fg-muted mb-2">
                  Бесплатный выезд замерщика по Москве и МО. Расчёт в день обращения.
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a href="tel:+79857801375" className="text-accent font-bold hover:text-accent-dim transition-colors">+7 985 780 13 75</a>
                  <span className="text-fg-subtle">·</span>
                  <a href="https://wa.me/79857801375" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">WhatsApp</a>
                </div>
              </div>
              <QuickLeadForm />
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

function SegmentIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    school: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L2 10l10 6 10-6-10-6z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/><path d="M22 10v6"/></svg>,
    office: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></svg>,
    shop: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/><path d="M3 9h18"/><path d="M9 20v-6h6v6"/></svg>,
    bank: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10l9-6 9 6"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M3 21h18"/><circle cx="12" cy="7.5" r="1.5"/></svg>,
    gov: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h20M4 20V10M8 20V10M12 20V10M16 20V10M20 20V10"/><path d="M2 10l10-7 10 7"/><circle cx="12" cy="3.5" r="1"/></svg>,
    home: <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>,
  }
  return <>{icons[name] || icons.office}</>
}