'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { motion } from 'framer-motion'

type CalcMode = 'quick' | 'pro'

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

// Professional mode options
const protectionClasses = [
  { value: 'k4', label: 'К4 / ДВ2 — базовая противоосколочность (56–112 мкм)', pricePerM2: 1100, color: '#22c55e' },
  { value: 'r1a', label: 'Р1А / А0 — умеренный удар (200 мкм)', pricePerM2: 1500, color: '#16a34a' },
  { value: 'r2a', label: 'Р2А / А1 — стальной шар 4 кг, 3,5 м (300–336 мкм)', pricePerM2: 2200, color: '#eab308' },
  { value: 'r3a', label: 'Р3А / А2 — стальной шар 4 кг, 6,5 м (400–448 мкм)', pricePerM2: 3400, color: '#f97316' },
  { value: 'r4a', label: 'Р4А / А3 — стальной шар 4 кг, 9,5 м (600–672 мкм)', pricePerM2: 4500, color: '#ef4444' },
]

const glassTypes = [
  { value: '4mm', label: 'Стекло 4 мм (стандартное)', coefficient: 1 },
  { value: '6mm', label: 'Стекло 6 мм', coefficient: 1.1 },
  { value: '8mm', label: 'Стекло 8 мм', coefficient: 1.2 },
  { value: 'triplex', label: 'Триплекс / закалённое', coefficient: 1.35 },
]

const orientationOptions = [
  { value: 'south', label: 'Южная (макс. солнце)', coefficient: 1 },
  { value: 'east-west', label: 'Восток/Запад', coefficient: 1 },
  { value: 'north', label: 'Северная (мин. солнце)', coefficient: 1 },
]

const requirementOptions = [
  { value: 'none', label: 'Без требований', coefficient: 1 },
  { value: 'mchs', label: 'Требования МЧС (К4+)', coefficient: 1 },
  { value: 'insurance', label: 'Требования страховой (Р2А+)', coefficient: 1 },
  { value: 'bank', label: 'Банк/ювелирный (Р3А+)', coefficient: 1 },
  { value: 'gov', label: 'Гособъект (44-ФЗ/223-ФЗ)', coefficient: 1.1 },
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
  const [mode, setMode] = useState<CalcMode>('quick')

  // Quick mode state
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState('')
  const [filmType, setFilmType] = useState('')
  const [area, setArea] = useState('')
  const [height, setHeight] = useState('')
  const [urgency, setUrgency] = useState('')

  // Pro mode state
  const [proClass, setProClass] = useState('')
  const [proGlass, setProGlass] = useState('')
  const [proArea, setProArea] = useState('')
  const [proHeight, setProHeight] = useState('')
  const [proOrientation, setProOrientation] = useState('')
  const [proRequirement, setProRequirement] = useState('')

  // Shared
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [website, setWebsite] = useState('')

  // Quick calculation
  const availableFilms = category ? filmTypes[category] || [] : []
  const selectedFilm = availableFilms.find(f => f.value === filmType)
  const selectedHeight = heightOptions.find(h => h.value === height)
  const selectedUrgency = urgencyOptions.find(u => u.value === urgency)
  const areaNum = parseFloat(area) || 0
  const basePrice = selectedFilm ? selectedFilm.pricePerM2 : 0
  const heightCoef = selectedHeight ? selectedHeight.coefficient : 1
  const urgencyCoef = selectedUrgency ? selectedUrgency.coefficient : 1
  const quickTotal = Math.round(basePrice * areaNum * heightCoef * urgencyCoef)
  const quickMin = Math.round(quickTotal * 0.9)
  const quickMax = Math.round(quickTotal * 1.15)
  const quickMaterial = Math.round(basePrice * areaNum * 0.6)
  const quickMounting = Math.round(basePrice * areaNum * 0.4 * heightCoef * urgencyCoef)
  const canCalcQuick = filmType && areaNum > 0 && height && urgency

  // Pro calculation
  const selectedProClass = protectionClasses.find(c => c.value === proClass)
  const selectedProGlass = glassTypes.find(g => g.value === proGlass)
  const selectedProHeight = heightOptions.find(h => h.value === proHeight)
  const selectedProReq = requirementOptions.find(r => r.value === proRequirement)
  const proAreaNum = parseFloat(proArea) || 0
  const proBasePrice = selectedProClass ? selectedProClass.pricePerM2 : 0
  const proGlassCoef = selectedProGlass ? selectedProGlass.coefficient : 1
  const proHeightCoef = selectedProHeight ? selectedProHeight.coefficient : 1
  const proReqCoef = selectedProReq ? selectedProReq.coefficient : 1
  const proTotal = Math.round(proBasePrice * proAreaNum * proGlassCoef * proHeightCoef * proReqCoef)
  const proMin = Math.round(proTotal * 0.9)
  const proMax = Math.round(proTotal * 1.15)
  const proMaterial = Math.round(proBasePrice * proAreaNum * 0.55 * proGlassCoef)
  const proMounting = Math.round(proBasePrice * proAreaNum * 0.45 * proHeightCoef * proReqCoef)
  const canCalcPro = proClass && proGlass && proAreaNum > 0 && proHeight && proRequirement

  const canSubmit = mode === 'quick' ? (canCalcQuick && name && phone) : (canCalcPro && name && phone)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    const calcData = mode === 'quick'
      ? { mode, filmType, area: areaNum, height, urgency, priceMin: quickMin, priceMax: quickMax }
      : { mode, protectionClass: proClass, glassType: proGlass, area: proAreaNum, height: proHeight, orientation: proOrientation, requirement: proRequirement, priceMin: proMin, priceMax: proMax }
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, source: `calculator-${mode}`, subject: `Расчёт (${mode})`, calculatorData: calcData, website }),
      })
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  const currentMin = mode === 'quick' ? quickMin : proMin
  const currentMax = mode === 'quick' ? quickMax : proMax

  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="accent" className="mb-6">Онлайн-калькулятор</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>Расчёт стоимости монтажа</h1>
            <p className="text-lg text-fg-muted mb-8">Выберите режим: быстрый — для оценки бюджета, профессиональный — с классами защиты по ГОСТ и нормативами.</p>

            {/* Mode switcher */}
            <div className="inline-flex rounded-xl border border-border bg-bg-card p-1 mb-8">
              <button
                onClick={() => setMode('quick')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${mode === 'quick' ? 'bg-accent text-bg' : 'text-fg-muted hover:text-fg'}`}
              >
                Быстрый расчёт
              </button>
              <button
                onClick={() => setMode('pro')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${mode === 'pro' ? 'bg-accent text-bg' : 'text-fg-muted hover:text-fg'}`}
              >
                Профессиональный (по ГОСТ)
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container size="md">
          {!submitted ? (
            <Card variant="elevated" className="p-8">
              {mode === 'quick' ? (
                <>
                  {/* Quick mode steps */}
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="text-xl font-bold text-fg mb-4">1. Выберите направление</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filmCategories.map((cat) => (
                          <button key={cat.id} onClick={() => { setCategory(cat.id); setFilmType('') }}
                            className={`p-6 rounded-xl border transition-all text-center ${category === cat.id ? 'border-accent bg-accent/10 shadow-glow' : 'border-border bg-bg-card hover:border-border-hover'}`}>
                            <div className="flex justify-center mb-3"><CategoryIcon name={cat.icon} color={cat.color} /></div>
                            <div className="font-bold text-fg text-sm mb-1">{cat.label}</div>
                            <div className="text-xs text-fg-subtle">{cat.description}</div>
                          </button>
                        ))}
                      </div>
                      {category && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                          <h3 className="text-xl font-bold text-fg mb-4">2. Выберите тип плёнки</h3>
                          {availableFilms.map((film) => (
                            <button key={film.value} onClick={() => setFilmType(film.value)}
                              className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between ${filmType === film.value ? 'border-accent bg-accent/10' : 'border-border bg-bg-card hover:border-border-hover'}`}>
                              <span className="text-fg font-medium">{film.label}</span>
                              <span className="text-accent font-mono text-sm">от {film.pricePerM2.toLocaleString()} ₽/м²</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                      {filmType && <Button variant="primary" size="lg" fullWidth onClick={() => setStep(2)}>Продолжить →</Button>}
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      <h3 className="text-xl font-bold text-fg mb-4">3. Параметры объекта</h3>
                      <Input label="Площадь остекления (м²)" type="number" min="1" step="0.1" placeholder="например, 50" value={area} onChange={(e) => setArea(e.target.value)} hint="Укажите примерную площадь." />
                      <Select label="Высота / этажность" placeholder="Выберите" value={height} onChange={(e) => setHeight(e.target.value)} options={heightOptions.map(h => ({ value: h.value, label: `${h.label} (×${h.coefficient})` }))} />
                      <Select label="Срочность" placeholder="Выберите" value={urgency} onChange={(e) => setUrgency(e.target.value)} options={urgencyOptions.map(u => ({ value: u.value, label: `${u.label} (×${u.coefficient})` }))} />
                      {canCalcQuick && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                          <div className="text-sm text-fg-muted mb-2">Предварительная стоимость:</div>
                          <div className="text-3xl font-bold text-accent font-mono mb-3">{quickMin.toLocaleString()} — {quickMax.toLocaleString()} ₽</div>
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-3 rounded-lg bg-bg/50"><div className="text-fg-subtle mb-1">Материал</div><div className="text-fg font-mono">~{quickMaterial.toLocaleString()} ₽</div></div>
                            <div className="p-3 rounded-lg bg-bg/50"><div className="text-fg-subtle mb-1">Монтаж</div><div className="text-fg font-mono">~{quickMounting.toLocaleString()} ₽</div></div>
                          </div>
                        </motion.div>
                      )}
                      <div className="flex gap-4">
                        <Button variant="secondary" size="lg" onClick={() => setStep(1)}>← Назад</Button>
                        <Button variant="primary" size="lg" fullWidth disabled={!canCalcQuick} onClick={() => setStep(3)}>Продолжить →</Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} onSubmit={handleSubmit} className="space-y-6">
                      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                        <label>Не заполняйте это поле<input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" /></label>
                      </div>
                      <h3 className="text-xl font-bold text-fg mb-4">4. Контактные данные</h3>
                      <div className="p-4 rounded-xl bg-bg-card border border-border">
                        <div className="text-sm text-fg-muted mb-1">Ваш расчёт:</div>
                        <div className="text-2xl font-bold text-accent font-mono">{quickMin.toLocaleString()} — {quickMax.toLocaleString()} ₽</div>
                        <div className="text-xs text-fg-subtle mt-1">{selectedFilm?.label} · {areaNum} м²</div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Ваше имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)} required />
                        <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                      </div>
                      <div className="flex gap-4">
                        <Button variant="secondary" size="lg" onClick={() => setStep(2)}>← Назад</Button>
                        <Button type="submit" variant="primary" size="lg" fullWidth disabled={!canSubmit} loading={loading}>{loading ? 'Отправка...' : 'Получить расчёт'}</Button>
                      </div>
                      <p className="text-xs text-fg-subtle text-center">Нажимая «Получить расчёт», вы соглашаетесь с <a href="/privacy" className="text-accent underline">политикой конфиденциальности</a></p>
                    </motion.form>
                  )}
                </>
              ) : (
                /* Pro mode */
                <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={handleSubmit} className="space-y-6">
                  <div className="absolute -left-[9999px] top-0" aria-hidden="true">
                    <label>Не заполняйте это поле<input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" /></label>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 mb-4">
                    <p className="text-sm text-fg-muted">
                      Профессиональный режим: расчёт по классам защиты ГОСТ 30826-2014,
                      типу стекла, ориентации окон и нормативным требованиям.
                      Подходит для ТЗ, тендеров и технического обоснования.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-fg mb-2">Класс защиты по ГОСТ</label>
                    <div className="space-y-2">
                      {protectionClasses.map((cls) => (
                        <button key={cls.value} type="button" onClick={() => setProClass(cls.value)}
                          className={`w-full p-3 rounded-lg border transition-all flex items-center gap-3 ${proClass === cls.value ? 'border-accent bg-accent/10' : 'border-border bg-bg-card hover:border-border-hover'}`}>
                          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: cls.color }} />
                          <span className="text-fg text-sm flex-1 text-left">{cls.label}</span>
                          <span className="text-accent font-mono text-xs">от {cls.pricePerM2.toLocaleString()} ₽/м²</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <Select label="Тип стекла" placeholder="Выберите тип стекла" value={proGlass} onChange={(e) => setProGlass(e.target.value)}
                    options={glassTypes.map(g => ({ value: g.value, label: `${g.label} (×${g.coefficient})` }))} />

                  <Input label="Площадь остекления (м²)" type="number" min="1" step="0.1" placeholder="например, 50" value={proArea} onChange={(e) => setProArea(e.target.value)} />

                  <Select label="Высота / этажность" placeholder="Выберите" value={proHeight} onChange={(e) => setProHeight(e.target.value)}
                    options={heightOptions.map(h => ({ value: h.value, label: `${h.label} (×${h.coefficient})` }))} />

                  <Select label="Ориентация окон" placeholder="Выберите" value={proOrientation} onChange={(e) => setProOrientation(e.target.value)}
                    options={orientationOptions.map(o => ({ value: o.value, label: o.label }))} />

                  <Select label="Нормативные требования" placeholder="Выберите" value={proRequirement} onChange={(e) => setProRequirement(e.target.value)}
                    options={requirementOptions.map(r => ({ value: r.value, label: `${r.label} (×${r.coefficient})` }))} />

                  {canCalcPro && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-accent/10 border border-accent/30">
                      <div className="text-sm text-fg-muted mb-2">Расчёт по ГОСТ:</div>
                      <div className="text-3xl font-bold text-accent font-mono mb-3">{proMin.toLocaleString()} — {proMax.toLocaleString()} ₽</div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 rounded-lg bg-bg/50"><div className="text-fg-subtle mb-1">Материал</div><div className="text-fg font-mono">~{proMaterial.toLocaleString()} ₽</div></div>
                        <div className="p-3 rounded-lg bg-bg/50"><div className="text-fg-subtle mb-1">Монтаж</div><div className="text-fg font-mono">~{proMounting.toLocaleString()} ₽</div></div>
                      </div>
                      <div className="mt-3 text-xs text-fg-subtle">
                        Класс: {selectedProClass?.label.split('—')[0].trim()} · Стекло: {selectedProGlass?.label.split('(')[0].trim()} · {proAreaNum} м²
                      </div>
                    </motion.div>
                  )}

                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-fg mb-4">Контактные данные</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Ваше имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)} required />
                      <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" fullWidth disabled={!canSubmit} loading={loading}>
                    {loading ? 'Отправка...' : 'Получить расчёт с разбивкой по ГОСТ'}
                  </Button>
                  <p className="text-xs text-fg-subtle text-center">Нажимая «Получить расчёт», вы соглашаетесь с <a href="/privacy" className="text-accent underline">политикой конфиденциальности</a></p>
                </motion.form>
              )}
            </Card>
          ) : (
            <Card variant="elevated" className="p-12 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
              </motion.div>
              <h2 className="text-2xl font-bold text-fg mb-4">Заявка отправлена!</h2>
              <p className="text-fg-muted mb-8 max-w-md mx-auto">Мы свяжемся с вами в течение 15 минут с детальным расчётом и предложением по выезду замерщика.</p>
              <div className="inline-block p-6 rounded-xl bg-bg border border-border mb-8">
                <div className="text-sm text-fg-muted mb-1">Ваш расчёт:</div>
                <div className="text-2xl font-bold text-accent font-mono">{currentMin.toLocaleString()} — {currentMax.toLocaleString()} ₽</div>
                <div className="text-xs text-fg-subtle mt-2">Режим: {mode === 'quick' ? 'быстрый' : 'профессиональный (ГОСТ)'}</div>
              </div>
              <div><Link href="/"><Button variant="secondary" size="md">На главную</Button></Link></div>
            </Card>
          )}
        </Container>
      </section>
    </div>
  )
}