'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg bg-dot-pattern">
      <Container size="sm">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            500
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-fg mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ошибка сервера
          </h1>
          <p className="text-fg-muted mb-8 max-w-md mx-auto">
            Что-то пошло не так. Мы уже знаем о проблеме. Попробуйте обновить страницу или вернитесь позже.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/"><Button variant="primary" size="lg">На главную</Button></Link>
            <a href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></a>
          </div>
        </div>
      </Container>
    </div>
  )
}