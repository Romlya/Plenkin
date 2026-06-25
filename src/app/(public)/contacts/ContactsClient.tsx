'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'

export default function ContactsClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setLoading(true)
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, subject, message, source: 'contacts' }),
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
            <Badge variant="accent" className="mb-6">Контакты</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-fg mb-6 text-balance" style={{ fontFamily: 'var(--font-display)' }}>Свяжитесь с нами</h1>
            <p className="text-lg text-fg-muted mb-8">Перезвоним за 15 минут в рабочее время. Бесплатный выезд замерщика по Москве и МО.</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card variant="glass" className="p-6">
                <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">Телефон</h3>
                <a href="tel:+79857801375" className="text-2xl font-bold text-accent hover:text-accent-dim transition-colors">
                  +7 985 780 13 75
                </a>
                <p className="text-sm text-fg-subtle mt-2">Ежедневно с 9:00 до 21:00</p>
              </Card>

              <Card variant="glass" className="p-6">
                <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">Email</h3>
                <a href="mailto:plenkininfo@yandex.ru" className="text-lg text-accent hover:text-accent-dim transition-colors break-all">
                  plenkininfo@yandex.ru
                </a>
                <p className="text-sm text-fg-subtle mt-2">Ответим в течение часа</p>
              </Card>

              <Card variant="glass" className="p-6">
                <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">География</h3>
                <p className="text-fg mb-2">Москва и Московская область</p>
                <p className="text-sm text-fg-subtle">Выезд замерщика — бесплатно при заключении договора</p>
              </Card>

              <Card variant="glass" className="p-6">
                <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-4">Мессенджеры</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/79857801375" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fg hover:text-accent transition-colors">
                    <span className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center text-green-400 font-bold text-sm">W</span>
                    WhatsApp
                  </a>
                  <a href="https://t.me/plenkin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fg hover:text-accent transition-colors">
                    <span className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold text-sm">T</span>
                    Telegram
                  </a>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-2">
              {!submitted ? (
                <Card variant="elevated" className="p-8">
                  <h2 className="text-2xl font-bold text-fg mb-6">Оставить заявку</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Имя" placeholder="Иван" value={name} onChange={(e) => setName(e.target.value)} required />
                      <Input label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input label="Email" type="email" placeholder="ivan@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <Select
                        label="Тема обращения"
                        placeholder="Выберите тему"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                          { value: 'protective', label: 'Противоосколочные плёнки' },
                          { value: 'solar', label: 'Солнцезащитные плёнки' },
                          { value: 'decor', label: 'Декоративные плёнки' },
                          { value: 'branding', label: 'Брендирование офиса' },
                          { value: 'smart', label: 'Смарт-плёнки' },
                          { value: 'other', label: 'Другое' },
                        ]}
                      />
                    </div>
                    <Textarea
                      label="Сообщение"
                      placeholder="Опишите объект, площадь, сроки..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-border accent-accent"
                        required
                      />
                      <span className="text-xs text-fg-subtle leading-relaxed">
                        Я согласен на обработку персональных данных в соответствии с <a href="/privacy" className="text-accent underline">политикой конфиденциальности</a>
                      </span>
                    </label>

                    <div className="pt-2">
                      <Button type="submit" variant="primary" size="lg" fullWidth loading={loading} disabled={!consent}>
                        {loading ? 'Отправка...' : 'Отправить заявку'}
                      </Button>
                    </div>
                  </form>
                </Card>
              ) : (
                <Card variant="elevated" className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-fg mb-4">Заявка отправлена!</h2>
                  <p className="text-fg-muted mb-8 max-w-md mx-auto">
                    Спасибо, {name || 'друг'}! Мы свяжемся с вами в течение 15 минут.
                  </p>
                  <Button variant="secondary" size="md" onClick={() => setSubmitted(false)}>
                    Отправить ещё одну
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}