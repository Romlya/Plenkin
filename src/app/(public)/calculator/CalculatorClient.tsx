'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { motion, AnimatePresence } from 'framer-motion'

const filmCategories = [
  { id: 'protective', label: 'Защита', icon: 'shield', color: '#22c55e', description: 'Противоосколочные, бронезащитные' },
  { id: 'solar', label: 'Солнцезащита', icon: 'sun', color: '#e8b42a', description: 'Тонировка, атермальные, керамика' },
  { id: 'decor', label: 'Декор', icon: 'art', color: '#3b82f6', description: 'Матирование, печать, резка' },
  { id: 'smart', label: 'Спецрешения', icon: 'smart', color: '#a855f7', description: 'Смарт-плёнки, экранирующие' },
]

const filmTypes: Record<string, { value: string; label: string; pricePerM2: number }[]> = {
  protective: [
    { value: 'protective-k4', label: 'К4 / ДВ2 (56–112 мкм)', pricePerM2: 1100 },
    { value: 'protective-r1a', label: 'Р1А / А0 (200 мкм)', pricePerM2: 1500 },
    { value: 'protective-r2a', label: 'Р2А / А1 (300 мкм)', pricePerM2: 2200 },
    { value: 'protective-r3a', label: 'Р3А / А2 (400 мкм)', pricePerM2: 3400 },
    { value: 'protective-r4a', label: 'Р4А / А3 (600 мкм)', pricePerM2: 4500 },
  ],
  solar: [
    { value: 'solar-mirror', label: 'Зеркальная Silver', pricePerM2: 650 },
    { value: 'solar-athermal', label: 'Атермальная IR-cut', pricePerM2: 1200 },
    { value: 'solar-ceramic', label: 'Спаттерная/керамическая', pricePerM2: 2000 },
  ],
  decor: [
    { value: 'decor-matte', label: 'Матовая/сатиновая', pricePerM2: 750 },
    { value: 'decor-print', label: 'Фотопечать UV', pricePerM2: 2350 },
    { value: 'decor-plotter', label: 'Плоттерная резка ORACAL', pricePerM2: 550 },
    { value: 'decor-branding', label: 'Брендирование офиса', pricePerM2: 1000 },
  ],
  smart: [
    { value: 'smart-pdlc', label: 'Смарт-плёнка PDLC', pricePerM2: 22000 },
  ],
}

const heightOptions = [
  { value: '1-3', label: '1–3 этаж (стандарт)', coefficient: 1 },
  { value: '4-10', label: '4–10 этаж (высотные)', coefficient: 1.15 },
  { value: '10+', label: '10+ этаж (промальп)', coefficient: 1.4 },
  { value: 'industrial', label: 'Промышленный альпинизм', coefficient: 1.8 },
]

const urgencyOptions = [
  { value: 'standard', label: 'Стандарт (5–10 дней)', coefficient: 1 },
  { value: 'fast', label: 'Срочно (1–3 дня)', coefficient: 1.25 },
  { value: 'express', label: 'Экспресс (24 часа)', coefficient: 1.5 },
]

function CategoryIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, React.ReactNode> = {
    shield: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={color} strokeWidth="1.5"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
    sun: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={color} strokeWidth="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
    art: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={color} strokeWidth="1.5"><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125 0-.926.746-1.688 1.688-1.688h1.999c3.108 0 5.541-2.451 5.541-5.5C22 6.5 17.5 2 12 2z"/></svg>,
    smart: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={color} strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>,
  }
  return <>{icons[name] || icons.shield}</>
}

export default function CalculatorClient() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState('')
  const [filmType, setFilmType] = useState('')
  const [area, setArea] = useState('')
  const [height, setHeight] = useState('')
  const [urgency, setUrgency] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const availableFilms = category ? filmTypes[category] || [] : []
  const selectedFilm = availableFilms.find(f => f.value === filmType)
  const selectedHeight = heightOptions.find(h => h.value === height)
  const selectedUrgency = urgencyOptions.find(u => u.value === urgency)

  const areaNum = parseFloat(area) || 0
  const basePrice = selectedFilm ? selectedFilm.pricePerM2 : 0
  const heightCoef = selectedHeight ? selectedHeight.coefficient : 1
  const urgencyCoef = selectedUrgency ? selectedUrgency.coefficient : 1

  const totalPrice = Math.round(basePrice * areaNum * heightCoef * urgencyCoef)
  const priceMin = Math.round(totalPrice * 0.9)
  const priceMax = Math.round(totalPrice * 1.15)
  const materialCost = Math.round(basePrice * areaNum * 0.6)
  const mountingCost = Math.round(basePrice * areaNum * 0.4 * heightCoef * urgencyCoef)

  const canCalculate = filmType && areaNum > 0 && height && urgency
  const canSubmit = canCalculate && name && phone

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone,
          source: 'calculator',
          subject: 'Расчёт стоимости',
          calculatorData: { filmType, area: areaNum, height, urgency, priceMin, priceMax },
        }),
      })
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Онлайн-калькулятор</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>Расчёт стоимости монтажа</h1>
            <p className="text-lg text-fg-muted mb-8">Выберите тип плёнки, укажите площадь и условия — получите предварительную стоимость. Точную смету — после выезда замерщика.</p>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? 'bg-accent text-bg' : 'bg-bg-card text-fg-subtle border border-border'}`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 transition-all ${step > s ? 'bg-accent' : 'bg-border'}`} />}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container size="md">
          {!submitted ? (
            <Card variant="elevated" className="p-8">
              {/* Step 1: Category + Film type */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-fg mb-4">1. Выберите направление</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filmCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { setCategory(cat.id); setFilmType('') }}
                        className={`p-6 rounded-xl border transition-all text-center ${category === cat.id
                            ? 'border-accent bg-accent/10 shadow-glow'
                            : 'border-border bg-bg-card hover:border-border-hover'
                          }`}
                      >
                        <div className="flex justify-center mb-3">
                          <CategoryIcon name={cat.icon} color={cat.color} />
                        </div>
                        <div className="font-bold text-fg text-sm mb-1">{cat.label}</div>
                        <div className="text-xs text-fg-subtle">{cat.description}</div>
                      </button>
                    ))}
                  </div>

                  {category && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4">
                      <h3 className="text-xl font-bold text-fg mb-4">2. Выберите тип плёнки</h3>
                      <div className="space-y-3">
                        {availableFilms.map((film) => (
                          <button
                            key={film.value}
                            onClick={() => setFilmType(film.value)}
                            className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between ${filmType === film.value
                                ? 'border-accent bg-accent/10'
                                : 'border-border bg-bg-card hover:border-border-hover'
                              }`}
                          >
                            <span className="text-fg font-medium">{film.label}</span>
                            <span className="text-accent font-mono text-sm">от {film.pricePerM2.toLocaleString()} ₽/м²</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {filmType && (
                    <Button variant="primary" size="lg" fullWidth onClick={() => setStep(2)}>
                      Продолжить →
                    </Button>
                  )}
                </motion.div>
              )}

              {/* Step 2: Area + Height + Urgency */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-fg mb-4">3. Параметры объекта</h3>
                  <Input
                    label="Площадь остекления (м²)"
                    type="number"
                    min="1"
                    step="0.1"
                    placeholder="например, 50"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    hint="Укажите примерную площадь. Если не знаете — замерщик посчитает бесплатно."
                  />
                  <Select
                    label="Высота / этажность"
                    placeholder="Выберите условия работы"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    options={heightOptions.map(h => ({ value: h.value, label: `${h.label} (×${h.coefficient})` }))}
                  />
                  <Select
                    label="Срочность"
                    placeholder="Выберите срок"
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    options={urgencyOptions.map(u => ({ value: u.value, label: `${u.label} (×${u.coefficient})` }))}
                  />

                  {canCalculate && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                      <div className="text-sm text-fg-muted mb-2">Предварительная стоимость:</div>
                      <div className="text-3xl font-bold text-accent font-mono mb-3">
                        {priceMin.toLocaleString()} — {priceMax.toLocaleString()} ₽
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-lg bg-bg/50">
                          <div className="text-fg-subtle mb-1">Материал</div>
                          <div className="text-fg font-mono">~{materialCost.toLocaleString()} ₽</div>
                        </div>
                        <div className="p-3 rounded-lg bg-bg/50">
                          <div className="text-fg-subtle mb-1">Монтаж</div>
                          <div className="text-fg font-mono">~{mountingCost.toLocaleString()} ₽</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-4">
                    <Button variant="secondary" size="lg" onClick={() => setStep(1)}>← Назад</Button>
                    <Button variant="primary" size="lg" fullWidth disabled={!canCalculate} onClick={() => setStep(3)}>
                      Продолжить →
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact form */}
              {step === 3 && (
                <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-fg mb-4">4. Контактные данные</h3>

                  <div className="p-4 rounded-xl bg-bg-card border border-border">
                    <div className="text-sm text-fg-muted mb-1">Ваш расчёт:</div>
                    <div className="text-2xl font-bold text-accent font-mono">
                      {priceMin.toLocaleString()} — {priceMax.toLocaleString()} ₽
                    </div>
                    <div className="text-xs text-fg-subtle mt-1">
                      {selectedFilm?.label} · {areaNum} м² · {selectedHeight?.label} · {selectedUrgency?.label}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Ваше имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)} required />
                    <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="secondary" size="lg" onClick={() => setStep(2)}>← Назад</Button>
                    <Button type="submit" variant="primary" size="lg" fullWidth disabled={!canSubmit} loading={loading}>
                      {loading ? 'Отправка...' : 'Получить расчёт'}
                    </Button>
                  </div>
                  <p className="text-xs text-fg-subtle text-center">
                    Нажимая «Получить расчёт», вы соглашаетесь с политикой конфиденциальности
                  </p>
                </motion.form>
              )}
            </Card>
          ) : (
            <Card variant="elevated" className="p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </motion.div>
              <h2 className="text-2xl font-bold text-fg mb-4">Заявка отправлена!</h2>
              <p className="text-fg-muted mb-8 max-w-md mx-auto">
                Мы свяжемся с вами в течение 15 минут для уточнения деталей и записи на бесплатный выезд замерщика.
              </p>
              <div className="inline-block p-6 rounded-xl bg-bg border border-border mb-8">
                <div className="text-sm text-fg-muted mb-1">Ваш расчёт:</div>
                <div className="text-2xl font-bold text-accent font-mono">
                  {priceMin.toLocaleString()} — {priceMax.toLocaleString()} ₽
                </div>
              </div>
              <div>
                <Link href="/"><Button variant="secondary" size="md">На главную</Button></Link>
              </div>
            </Card>
          )}
        </Container>
      </section>
    </div>
  )
}