'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Услуги', href: '/services', hasDropdown: true },
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Калькулятор', href: '/calculator' },
  { name: 'Госзаказчикам', href: '/gov' },
  { name: 'Блог', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
]

const serviceSubmenu = [
  { name: 'Противоосколочные и бронирующие плёнки', href: '/services/protective', description: 'Классы защиты К4–Р4А, ГОСТ 51136' },
  { name: 'Солнцезащитные и атермальные плёнки', href: '/services/solar', description: 'Зеркальные, атермальные, спаттерные' },
  { name: 'Декоративные плёнки', href: '/services/decorative', description: 'Матовое, витражи, сатин' },
  { name: 'Фотопечать на плёнке', href: '/services/photo-print', description: 'UV, сольвентная и печать на прозрачной' },
  { name: 'Плоттерная резка', href: '/services/plotter', description: 'Логотипы, буквы, надписи ORACAL' },
  { name: 'Брендирование офисов', href: '/services/branding', description: 'Под ключ: ресепшн, переговорные, коридоры' },
  { name: 'Смарт-плёнки', href: '/services/smart', description: 'Электрохромные, переключение матовое/прозрачное' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-300 transition-all duration-300',
          isScrolled
            ? 'bg-bg/95 backdrop-blur-md border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 transition-all group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="ПЛЕНКИН — архитектурные плёнки"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) saturate(100%) invert(75%) sepia(60%) saturate(500%) hue-rotate(5deg) brightness(105%)' }}
                priority
              />
              </div>
              <div>
                <div className="font-bold text-xl text-accent" style={{ fontFamily: 'var(--font-display)' }}>ПЛЕНКИН</div>
                <div className="text-xs text-fg-muted -mt-0.5">Архитектурные плёнки</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-all duration-200',
                      'text-fg hover:text-accent',
                      activeDropdown === item.name
                        ? 'text-accent'
                        : 'text-fg'
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className={cn('w-4 h-4 ml-1 transition-transform', activeDropdown === item.name && 'rotate-180')} />
                    )}
                  </Link>
                  {item.hasDropdown && (
                    <div
                      className={cn(
                        'absolute left-0 mt-3 w-80 bg-bg-card border border-border rounded-xl shadow-xl',
                        'transition-all duration-200 transform origin-top',
                        activeDropdown === item.name
                          ? 'opacity-100 scale-y-100 visible'
                          : 'opacity-0 scale-y-95 invisible'
                      )}
                    >
                      <div className="p-2">
                        {serviceSubmenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              'block px-4 py-3 rounded-lg transition-all',
                              'hover:bg-glass',
                              'text-sm group'
                            )}
                          >
                            <div className="font-medium text-fg group-hover:text-accent transition-colors">{sub.name}</div>
                            <div className="text-xs text-fg-muted mt-0.5">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link href="tel:+79857801375" className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dim transition-colors">
                <Phone className="w-4 h-4" />
                +7 985 780 13 75
              </Link>
              <Link href="/contacts">
                <Button variant="primary" size="sm">Оставить заявку</Button>
              </Link>
            </nav>

            <div className="flex items-center gap-3 lg:hidden">
              <Link href="tel:+79857801375" className="p-2.5 rounded-lg glass-card">
                <Phone className="w-4 h-4 text-accent" />
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-lg glass-card"
                aria-label="Открыть меню"
              >
                <Menu className="w-5 h-5 text-fg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[400] lg:hidden bg-bg"
          >
            <div className="bg-dot-pattern h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/images/logo.png" alt="ПЛЕНКИН" fill className="object-contain" />
                  </div>
                  <div className="font-bold text-lg text-accent" style={{ fontFamily: 'var(--font-display)' }}>ПЛЕНКИН</div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-lg glass-card"
                  aria-label="Закрыть меню"
                >
                  <X className="w-5 h-5 text-fg" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <div className="space-y-1">
                  {navigation.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-4 px-4 text-lg font-medium text-fg rounded-xl hover:bg-glass transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && (
                        <div className="ml-4 mb-2 space-y-1">
                          {serviceSubmenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block py-2.5 px-4 text-sm text-fg-muted hover:text-accent transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>

              <div className="border-t border-border p-4 space-y-3">
                <a href="tel:+79857801375" className="flex items-center gap-3 py-3 text-accent font-bold text-lg">
                  <Phone className="w-5 h-5" />
                  +7 985 780 13 75
                </a>
                <a href="mailto:plenkininfo@yandex.ru" className="block py-2 text-fg-muted hover:text-accent transition-colors">
                  plenkininfo@yandex.ru
                </a>
                <Link href="/contacts" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" fullWidth size="lg">Оставить заявку</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}