import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const footerLinks = {
  services: [
    { name: 'Противоосколочные плёнки', href: '/services/protective' },
    { name: 'Солнцезащитные плёнки', href: '/services/solar' },
    { name: 'Декоративные плёнки', href: '/services/decorative' },
    { name: 'Фотопечать на плёнке', href: '/services/photo-print' },
    { name: 'Плоттерная резка', href: '/services/plotter' },
    { name: 'Брендирование офисов', href: '/services/branding' },
    { name: 'Смарт-плёнки', href: '/services/smart' },
  ],
  company: [
    { name: 'Портфолио', href: '/portfolio' },
    { name: 'Калькулятор', href: '/calculator' },
    { name: 'Сертификаты', href: '/certificates' },
    { name: 'Блог', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Контакты', href: '/contacts' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#050506] border-t border-border">
      {/* CTA Block */}
      <div className="border-b border-border">
        <Container>
          <div className="py-12">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-fg mb-4 text-balance" style={{ fontFamily: 'var(--font-display)' }}>
                Готовы защитить ваши окна?
              </h2>
              <p className="text-fg-muted mb-6 max-w-xl mx-auto">
                Бесплатный выезд замерщика по Москве и МО. Расчёт стоимости в день обращения.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/calculator"><Button variant="primary" size="lg">Рассчитать стоимость</Button></Link>
                <Link href="tel:+79857801375"><Button variant="secondary" size="lg">+7 985 780 13 75</Button></Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="ПЛЕНКИН — архитектурные плёнки"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl text-accent" style={{ fontFamily: 'var(--font-display)' }}>ПЛЕНКИН</div>
                  <div className="text-xs text-fg-muted">Архитектурные плёнки</div>
                </div>
              </Link>
              <p className="text-sm text-fg-muted leading-relaxed mb-6">
                Комплексный провайдер безопасности и эстетики остекления в Москве и МО.
                Сертифицированные плёнки с гарантией до 15 лет.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:+79857801375" className="flex items-center gap-2 text-fg hover:text-accent transition-colors">
                  <span className="text-accent">тел:</span> +7 985 780 13 75
                </a>
                <a href="mailto:plenkininfo@yandex.ru" className="flex items-center gap-2 text-fg hover:text-accent transition-colors">
                  <span className="text-accent">mail:</span> plenkininfo@yandex.ru
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://wa.me/79857801375" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center text-green-400 font-bold text-sm hover:bg-green-500/25 transition-colors">W</a>
                <a href="https://t.me/plenkin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center text-blue-400 font-bold text-sm hover:bg-blue-500/25 transition-colors">T</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">Услуги</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-fg-muted hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">Компания</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-fg-muted hover:text-accent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy" className="text-sm text-fg-muted hover:text-accent transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-fg uppercase tracking-wider mb-4">Нормативная база</h3>
              <ul className="space-y-2 text-sm text-fg-muted">
                <li>ГОСТ Р 51136-2008</li>
                <li>ГОСТ 30826-2014</li>
                <li>РД МВД РФ №78 148-94</li>
                <li>ГОСТ Р 51261</li>
              </ul>
              <div className="mt-6 p-4 rounded-xl glass-card">
                <div className="text-xs text-fg-muted mb-1">Работаем по договору</div>
                <div className="text-sm text-fg">Юр. лица, НДС, 44-ФЗ, 223-ФЗ</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-fg-subtle">
              © {new Date().getFullYear()} ПЛЕНКИН. Все права защищены.
            </p>
            <span className="text-xs text-fg-subtle">Москва и Московская область</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}