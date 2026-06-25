import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg bg-dot-pattern">
      <Container size="sm">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-bold text-accent/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-fg mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Страница не найдена
          </h1>
          <p className="text-fg-muted mb-8 max-w-md mx-auto">
            Возможно, страница была перемещена или удалена. Вернитесь на главную или посмотрите наши услуги.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/"><Button variant="primary" size="lg">На главную</Button></Link>
            <Link href="/services"><Button variant="secondary" size="lg">Каталог услуг</Button></Link>
          </div>
        </div>
      </Container>
    </div>
  )
}