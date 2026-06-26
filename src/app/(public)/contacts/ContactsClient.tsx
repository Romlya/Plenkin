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
                    <span className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </span>
                    WhatsApp
                  </a>
                  <a href="https://t.me/plenkin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-fg hover:text-accent transition-colors">
                    <span className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.48.329-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.891-.663 3.498-1.524 5.83-2.531 6.998-3.021 3.332-1.387 4.025-1.628 4.476-1.636z"/></svg>
                    </span>
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