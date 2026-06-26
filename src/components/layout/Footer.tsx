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
    { name: 'Госзаказчикам', href: '/gov' },
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
                Поставляем и монтируем архитектурные плёнки безопасности и декора
                для школ, офисов, ТЦ и жилых домов в Москве и МО.
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
                <a href="https://wa.me/79857801375" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500/15 flex items-center justify-center hover:bg-green-500/25 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-green-400" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="https://t.me/plenkin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center hover:bg-blue-500/25 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.061 3.345-.48.329-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.324-.437.891-.663 3.498-1.524 5.83-2.531 6.998-3.021 3.332-1.387 4.025-1.628 4.476-1.636z"/></svg>
                </a>
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
                <li><a href="https://docs.cntd.ru/document/1200083226" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">ГОСТ Р 51136-2008</a></li>
                <li><a href="https://docs.cntd.ru/document/1200104145" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">ГОСТ 30826-2014</a></li>
                <li>РД МВД РФ №78 148-94</li>
                <li><a href="https://docs.cntd.ru/document/1200023125" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">ГОСТ Р 51261</a></li>
              </ul>
              <p className="text-xs text-fg-subtle mt-4 leading-relaxed">
                Подбор плёнок ведём с учётом нормативной базы и требований надзорных органов.
              </p>
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