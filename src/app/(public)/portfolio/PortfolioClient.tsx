'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  category: 'office' | 'mall' | 'residential' | 'school' | 'bank' | 'industrial'
  subtitle: string
  description: string
  features: string[]
  mainImage: string
  beforeImage?: string
  afterImage?: string
  area: string
  year: string
}

const projects: Project[] = [
  {
    id: 'office-1',
    title: 'Офисный центр "Сити Плаза"',
    category: 'office',
    subtitle: 'Матирование перегородок + фотопечать',
    description: 'Полный ребрендинг офисного центра после ухода западных арендаторов. Установлено матовое остекление на всех перегородках, нанесена фотопечать с фирменной символикой, созданы навигационные указатели.',
    features: ['Матовое остекление 120 м²', 'Фотопечать 45 м²', 'Плоттерная резка 30 п.м', 'Антивандальная защита'],
    mainImage: '/images/modern-office-athermal.webp',
    beforeImage: '/images/before-after-tinting.webp',
    afterImage: '/images/tinting-bright-interior.webp',
    area: '195 м²',
    year: '2024',
  },
  {
    id: 'bank-1',
    title: 'Ювелирный салон "Королевское золото"',
    category: 'bank',
    subtitle: 'Противоосколочная плёнка класса Р3А',
    description: 'Защита от взрывов и осколков для ювелирного салона. Установлена бронеплёнка класса Р3А на все витрины, дополнительно установлены антивандальные и антиграффити плёнки.',
    features: ['Бронеплёнка Р3А (400 мкм) 280 м²', 'Антиграффити плёнка 150 м²', 'Плоттерная резка логотипа 20 п.м'],
    mainImage: '/images/showcase-protection.webp',
    beforeImage: '/images/before-after-athermal.webp',
    afterImage: '/images/film-windows-showcases.webp',
    area: '450 м²',
    year: '2024',
  },
  {
    id: 'mall-1',
    title: 'Торговый центр "Гранд Олимп"',
    category: 'mall',
    subtitle: 'Тонировка витрин + антивандал',
    description: 'Энергосберегающая тонировка всех витрин ТЦ, установка перфорированной плёнки One Way Vision на входных стёклах, защита от вандализма.',
    features: ['Тонировка витрин 800 м²', 'One Way Vision плёнка 250 м²', 'Антивандальная защита 180 м²'],
    mainImage: '/images/solar-protection-offices.webp',
    beforeImage: '/images/before-after-tinting.webp',
    afterImage: '/images/sun-protection-all.webp',
    area: '1230 м²',
    year: '2024',
  },
  {
    id: 'school-1',
    title: 'Школа "Гармония"',
    category: 'school',
    subtitle: 'Противоосколочная защита по требованиям МЧС',
    description: 'Установка противоосколочных плёнок К4/ДВ2 в школе для защиты детей от угрозы БПЛА. Работы выполнены согласно требованиям МЧС России.',
    features: ['Противоосколочная плёнка К4 420 м²', 'Контрольно-сметная документация', 'Гарантийное обслуживание 5 лет'],
    mainImage: '/images/sun-protection-all.webp',
    beforeImage: '/images/before-after-athermal-2.webp',
    afterImage: '/images/bright-balcony-protection.webp',
    area: '420 м²',
    year: '2024',
  },
  {
    id: 'residential-1',
    title: 'ЖК "ЭкоЛюкс"',
    category: 'residential',
    subtitle: 'Тонировка фасадного остекления + энергосбережение',
    description: 'Тонировка фасадов жилого комплекса для снижения энергозатрат. Установлена атермальная плёнка с высоким коэффициентом solar heat gain reduction.',
    features: ['Атермальная плёнка 1200 м²', 'Энергосберегающий эффект до 80%', 'Гарантия 10 лет'],
    mainImage: '/images/cozy-balcony-city-view.webp',
    beforeImage: '/images/balcony-solar-film.webp',
    afterImage: '/images/bright-balcony-protection.webp',
    area: '1200 м²',
    year: '2023',
  },
  {
    id: 'industrial-1',
    title: 'Производственный комплекс "ТехноПарк"',
    category: 'industrial',
    subtitle: 'Плоттерная резка + брендирование',
    description: 'Оформление производственного пространства: фотопечать на стенах, плоттерная резка логотипов компании, матирование перегородок в офисной зоне.',
    features: ['Фотопечать 350 м²', 'Плоттерная резка 200 п.м', 'Матирование перегородок 180 м²'],
    mainImage: '/images/office-solar-film.webp',
    beforeImage: '/images/promo-2.webp',
    afterImage: '/images/promo-3.webp',
    area: '730 м²',
    year: '2023',
  },
]

const categories = [
  { id: 'all', label: 'Все объекты' },
  { id: 'office', label: 'Офисные центры' },
  { id: 'mall', label: 'Торговые центры' },
  { id: 'residential', label: 'Жилые комплексы' },
  { id: 'school', label: 'Школы и ДОУ' },
  { id: 'bank', label: 'Банки и ювелирные' },
  { id: 'industrial', label: 'Промышленные объекты' },
]

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg via-bg to-bg-elevated">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Наши <span className="text-gradient-accent">кейсы</span>
            </h1>
            <p className="text-lg text-fg-muted mb-8 leading-relaxed">
              Реализованные проекты — работа с 2009 года. Более 5200 м² обработанного остекления — практический опыт и гарантированный результат.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category.id
                    ? 'bg-accent text-bg shadow-glow'
                    : 'bg-bg-elevated text-fg-muted hover:bg-bg-card hover:text-accent'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card variant="glass" hover className="overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110" loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="accent" size="sm">{project.year}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-fg mb-1">{project.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{project.subtitle}</p>
                    <p className="text-sm text-fg-muted mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-fg-muted">
                        Площадь: <span className="text-fg font-medium">{project.area}</span>
                      </span>
                    </div>
                    <Button variant="secondary" size="sm" fullWidth onClick={() => setSelectedProject(project)}>
                      Подробнее
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.subtitle}
        size="xl"
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src={selectedProject.mainImage}
                alt={selectedProject.title}
                fill
                className="object-cover" loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-fg mb-4">Описание проекта</h3>
                <p className="text-fg-muted leading-relaxed mb-6">{selectedProject.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-fg-muted w-24">Категория:</span>
                    <Badge variant="success" size="sm">
                      {categories.find(c => c.id === selectedProject.category)?.label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-fg-muted w-24">Площадь:</span>
                    <span className="text-fg">{selectedProject.area}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-fg-muted w-24">Год:</span>
                    <span className="text-fg">{selectedProject.year}</span>
                  </div>
                </div>

                <h4 className="text-md font-semibold text-fg mb-3">Выполненные работы:</h4>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span className="text-sm text-fg-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contacts">
                  <Button variant="primary" size="lg" fullWidth>Оставить заявку на аналогичный проект</Button>
                </Link>
              </div>

              <div>
                {selectedProject.beforeImage && selectedProject.afterImage && (
                  <div>
                    <h3 className="text-lg font-semibold text-fg mb-4">До / После</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-fg-muted mb-2">До</div>
                        <div className="relative h-40 rounded-lg overflow-hidden">
                          <Image src={selectedProject.beforeImage} alt="До" fill className="object-cover" loading="lazy" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-fg-muted mb-2">После</div>
                        <div className="relative h-40 rounded-lg overflow-hidden">
                          <Image src={selectedProject.afterImage} alt="После" fill className="object-cover" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 rounded-xl bg-bg-elevated border border-border">
                  <h4 className="text-sm font-semibold text-fg mb-3">Свяжитесь с нами</h4>
                  <div className="space-y-2">
                    <a href="tel:+79857801375" className="flex items-center gap-2 text-sm text-accent hover:text-accent-dim">
                      <span>+7 985 780 13 75</span>
                    </a>
                    <a href="mailto:plenkininfo@yandex.ru" className="flex items-center gap-2 text-sm text-fg-muted hover:text-accent">
                      <span>plenkininfo@yandex.ru</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}