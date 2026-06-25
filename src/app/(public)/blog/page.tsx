import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог — статьи и руководства об архитектурных плёнках | ПЛЕНКИН',
  description: 'Полезные статьи: как выбрать класс защиты, атермальная vs зеркальная, защита от БПЛА, DIY vs профессиональный монтаж, смарт-плёнки PDLC.',
}

const articles = [
  {
    slug: 'klassy-zashchity-plenki',
    title: 'Как выбрать класс защиты плёнки: К4 vs Р1А vs Р2А vs Р3А vs Р4А',
    excerpt: 'Полный разбор классификации противоосколочных плёнок по ГОСТ 51136-2008. Какой класс для какого объекта. Почему 112 мкм — это не А1.',
    date: '2025-06-20',
    readTime: '7 мин',
    category: 'Защита',
  },
  {
    slug: 'atermalnaya-vs-zerkalnaya',
    title: 'Атермальная vs зеркальная: что выбрать для офиса и квартиры',
    excerpt: 'Сравнение по светопропусканию, ИК-блокировке, приватности, цене. Миф про тёмную плёнку = жара. Расчёт окупаемости.',
    date: '2025-06-15',
    readTime: '5 мин',
    category: 'Солнцезащита',
  },
  {
    slug: 'zashchita-okon-ot-bpla',
    title: 'Защита окон от БПЛА: мифы и реальность классов А1–А3',
    excerpt: 'Спрос на бронеплёнку вырос на 100% за год. Разбираем, что реально работает: плёнка не останавливает дрон, а удерживает осколки.',
    date: '2025-06-10',
    readTime: '8 мин',
    category: 'Безопасность',
  },
  {
    slug: 'diy-vs-professional',
    title: 'Почему DIY-монтаж плёнки обходится дороже',
    excerpt: 'Пузыри, морщины, пылинки — основная причина рекламаций. Неправильный монтаж снижает защитные свойства на 40–60%.',
    date: '2025-06-05',
    readTime: '4 мин',
    category: 'Монтаж',
  },
  {
    slug: 'branding-ofisa-plenkoy',
    title: 'Брендирование офиса плёнкой: от навигации до имиджевых стен',
    excerpt: 'Этапы: замер → дизайн → печать → монтаж. Что входит в «под ключ». Примеры зон: ресепшн, переговорные, open space.',
    date: '2025-05-28',
    readTime: '6 мин',
    category: 'Дизайн',
  },
  {
    slug: 'smart-plenki-pdlc',
    title: 'Смарт-плёнки PDLC: как работает, сколько стоит, где применяют',
    excerpt: 'Принцип работы: жидкие кристаллы в полимерной матрице. Управление: выключатель, смартфон, умный дом. Цена 15–30 тыс. ₽/м².',
    date: '2025-05-20',
    readTime: '5 мин',
    category: 'Технологии',
  },
  {
    slug: 'antigraffiti-antivandal',
    title: 'Антиграффити и антивандальные плёнки: защита витрин',
    excerpt: 'Жертвенная плёнка: замена плёнки вместо замены стекла. Применение для ТЦ, витрин, фасадов. Срок службы и замена.',
    date: '2025-05-15',
    readTime: '3 мин',
    category: 'Защита',
  },
  {
    slug: 'normativnaya-baza-gost',
    title: 'Нормативная база: ГОСТ 51136, 30826, МВД 78-148',
    excerpt: 'Что нужно знать заказчику. Для каких объектов обязательно защитное остекление. При А1–А2 решётки не требуются.',
    date: '2025-05-10',
    readTime: '6 мин',
    category: 'Документы',
  },
]

const categories = ['Все', 'Защита', 'Солнцезащита', 'Дизайн', 'Монтаж', 'Технологии', 'Документы', 'Безопасность']

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Блог</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance">Статьи и руководства</h1>
            <p className="text-lg text-fg-muted mb-8">Полезная информация без воды: как выбрать, сколько стоит, на что обратить внимание.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-1.5 rounded-full text-sm bg-bg-elevated text-fg-muted border border-border">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card variant="glass" hover className="h-full p-6 group cursor-pointer flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="accent" size="sm">{article.category}</Badge>
                    <span className="text-xs text-fg-subtle">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-fg mb-3 group-hover:text-accent transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-fg-subtle">{article.date}</span>
                    <span className="text-sm text-accent group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}