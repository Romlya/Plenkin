'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const faqCategories = [
  { id: 'all', label: 'Все' },
  { id: 'protective', label: 'Бронирование' },
  { id: 'solar', label: 'Солнцезащита' },
  { id: 'decor', label: 'Декор' },
  { id: 'mounting', label: 'Монтаж и гарантия' },
  { id: 'docs', label: 'Документы и оплата' },
]

const faqItems = [
  { category: 'protective', q: 'Чем отличается 112 мкм от класса А1?', a: '112 мкм — это класс К4 (базовая противоосколочность). Класс А1 (Р2А) требует плёнки 300–336 мкм. Продажа плёнок 56–80 мкм под видом «А1» — фальсификация, выявляемая при независимом тестировании.' },
  { category: 'protective', q: 'Нужны ли решётки при установке бронеплёнки?', a: 'При защитном остеклении классов А1–А2 установка металлических решёток и жалюзи не требуется согласно РД МВД РФ №78 148-94.' },
  { category: 'protective', q: 'Какая плёнка нужна для защиты от БПЛА?', a: 'Для защиты от осколков при ударах дронов рекомендуются классы Р1А (200 мкм) для жилых помещений и Р2А (300 мкм) для административных зданий, школ, ТЦ. Плёнка удерживает осколки при взрыве — не останавливает снаряд.' },
  { category: 'protective', q: 'Цвет плёнки влияет на защиту?', a: 'Нет. Ударостойкость зависит от толщины и структуры (многослойный полиэстер), а не от цвета или тонировки. Тёмная плёнка без специальных слоёв поглощает ИК, но не лучше защищает от удара.' },
  { category: 'solar', q: 'Атермальная или зеркальная — что выбрать?', a: 'Атермальная — если нужен свет без жары (квартиры, офисы с компьютерами). Зеркальная — если нужна приватность снаружи + солнцезащита (фасады, витрины). Атермальная дороже, но не затемняет помещение.' },
  { category: 'solar', q: 'Тёмная плёнка = меньше жары?', a: 'Миф. Тёмная плёнка без теплоотражающих слоёв поглощает, а не отражает ИК. При отсутствии вентиляции это может усилить перегрев стекла. Качественные атермальные плёнки прозрачные, но блокируют до 80% ИК.' },
  { category: 'solar', q: 'Carbon-плёнки не мешают Wi-Fi?', a: 'Да. Нейтральные/угольные (Carbon) плёнки не содержат металла и не создают помех радиосигналу. Металлизированные (Silver, спаттерные) могут слегка ослаблять сигнал.' },
  { category: 'decor', q: 'Можно ли матировать стекло без замены?', a: 'Да. Матовая/сатиновая плёнка наносится на существующее стекло. Эффект идентичен пескоструйной обработке, но дешевле и обратим — плёнку можно снять без повреждения стекла.' },
  { category: 'decor', q: 'Сколько служит фотопечать на плёнке?', a: 'UV-печать: 5–7 лет на улице, 10+ лет в интерьере. Сольвентная: 3–5 лет в интерьере. Латексная: 7+ лет. Стойкость зависит от УФ-экспозиции и ухода.' },
  { category: 'decor', q: 'Что такое One Way Vision?', a: 'Перфорированная плёнка с печатным слоем снаружи. Изнутри стекло остаётся прозрачным (видно улицу), снаружи — виден рисунок. Используется для рекламы на окнах.' },
  { category: 'mounting', q: 'Почему DIY-монтаж хуже профессионального?', a: 'Пузыри, морщины, пылинки под плёнкой — основная причина рекламаций. Неправильный монтаж снижает защитные свойства на 40–60%. Профессиональный монтажник использует чистую среду, обезжиривание, финишную разгонку.' },
  { category: 'mounting', q: 'Сколько времени занимает монтаж?', a: 'Окно 1,5×1,5 м — 20–30 минут. Офис 100 м² — 1 день. Фасад 500 м² — 3–5 дней. Сроки зависят от этажности, доступа к стеклу и типа плёнки.' },
  { category: 'mounting', q: 'Какая гарантия на работы?', a: 'Гарантия на материалы — до 15 лет (от производителя). Гарантия на монтаж — 2 года. В гарантийный срок бесплатно устраняем пузыри, отслоения, дефекты.' },
  { category: 'mounting', q: 'Когда лучше делать монтаж?', a: 'Солнцезащитные плёнки — пик спроса апрель–август. Защитные и декоративные — круглый год. Монтаж возможен при температуре от +5°C (в помещении — круглый год).' },
  { category: 'docs', q: 'Работаете ли вы с юрлицами и НДС?', a: 'Да. Работаем по договору с юридическими лицами, включая НДС. Предоставляем: договор, счёт, акт выполненных работ, гарантийный талон, сертификаты соответствия.' },
  { category: 'docs', q: 'Работаете ли по 44-ФЗ и 223-ФЗ?', a: 'Да. Участвуем в государственных закупках. Подготавливаем техническое задание с указанием класса защиты по ГОСТ, предоставляем все необходимые сертификаты и гарантийные письма.' },
  { category: 'docs', q: 'Как оплатить?', a: 'Безналичный расчёт для юрлиц (с НДС). Наличный или перевод для физлиц. Предоплата 50% при заключении договора, остаток — после приёмки работ.' },
]

export default function FaqClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const filteredItems = activeCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory)

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Вопросы и ответы</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Частые вопросы</h1>
            <p className="text-lg text-fg-muted mb-8">17 вопросов, которые клиенты задают чаще всего. Без воды — конкретика.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container size="md">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(0) }}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat.id
                    ? 'bg-accent text-bg'
                    : 'bg-bg-elevated text-fg-muted hover:bg-bg-card hover:text-accent'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredItems.map((item, i) => (
              <Card key={i} variant="glass" className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-glass transition-colors"
                >
                  <span className="text-base font-semibold text-fg pr-4">{item.q}</span>
                  <svg
                    className={cn('w-5 h-5 text-fg-muted flex-shrink-0 transition-transform', openIndex === i && 'rotate-180')}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={cn('overflow-hidden transition-all duration-300', openIndex === i ? 'max-h-96' : 'max-h-0')}>
                  <div className="px-6 pb-6 text-fg-muted text-sm leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}