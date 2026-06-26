'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const objectTypes = [
  'Квартира', 'Дом', 'Офис', 'Объект с повышенной безопасностью',
]

export function QuickLeadForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [objectType, setObjectType] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, source: 'homepage-quickform',
          subject: `Быстрая заявка: ${objectType || 'не указан'}`,
        }),
      })
    } catch (err) {
      console.error('Submit error:', err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-fg mb-2">Заявка отправлена!</h3>
        <p className="text-fg-muted text-sm">Мы свяжемся с вами в течение 15 минут.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>

      <div>
        <label className="block text-sm font-medium text-fg mb-2">Тип объекта</label>
        <div className="flex flex-wrap gap-2">
          {objectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setObjectType(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${objectType === type
                  ? 'bg-accent text-bg'
                  : 'bg-bg-card text-fg-muted border border-border hover:border-border-hover'
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
        {loading ? 'Отправка...' : 'Оставить заявку'}
      </Button>
      <p className="text-xs text-fg-subtle text-center">
        Нажимая «Оставить заявку», вы соглашаетесь с <a href="/privacy" className="text-accent underline">политикой конфиденциальности</a>
      </p>
    </form>
  )
}