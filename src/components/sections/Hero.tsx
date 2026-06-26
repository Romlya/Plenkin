'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
      else setDisplayValue(value)
    }
    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'var(--font-display)' }}>
      {displayValue.toLocaleString()}{suffix}
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const backgroundImageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const backgroundImageOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <motion.div
        style={{ y: backgroundImageY, opacity: backgroundImageOpacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/modern-office-heat.webp"
          alt="Архитектурные плёнки ПЛЕНКИН"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
      </motion.div>

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium">Москва и МО · С 2009 года</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-fg mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Защищаем окна —<br />
                <span className="text-gradient-accent">защищаем людей</span>
              </h1>

              <p className="text-lg md:text-xl text-fg-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Противоосколочные и бронеплёнки (К4–Р4А), солнцезащита, декор и смарт-плёнки —
                поставка, монтаж и сервис с документами по ГОСТ и гарантиями до 15 лет.
              </p>

              <div className="flex flex-col gap-2 mb-10 max-w-2xl mx-auto text-left">
                {[
                  'Защита от осколков и БПЛА для школ, офисов, ТЦ',
                  'Снижение жары и затрат на кондиционирование до 80%',
                  'Декоративное зонирование без замены стекла',
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3 text-sm md:text-base text-fg-muted"
                  >
                    <span className="text-accent flex-shrink-0">—</span>
                    {point}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link href="/calculator">
                <Button size="xl" className="w-full sm:w-auto">Рассчитать стоимость</Button>
              </Link>
              <Link href="/contacts">
                <Button variant="secondary" size="xl" className="w-full sm:w-auto">Заказать выезд замерщика</Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: 5200, suffix: '+', label: 'м² остекления по ГОСТ' },
                { value: 0, suffix: '', label: 'с 2009 года', isStatic: true, staticText: '2009' },
                { value: 200, suffix: '+', label: 'объектов в Москве и МО' },
                { value: 0, suffix: '', label: 'поддержка 24/7', isStatic: true, staticText: '24/7' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  {stat.isStatic ? (
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {stat.staticText}
                    </div>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                  <div className="text-xs text-fg-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}