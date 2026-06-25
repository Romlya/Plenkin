'use client'

import { useState } from 'react'

export function SmartFilmDemo() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="max-w-3xl mx-auto">
      <div
        className="relative h-72 rounded-2xl overflow-hidden border-2 transition-all duration-700 cursor-pointer"
        style={{
          borderColor: isOn ? 'rgba(232, 180, 42, 0.5)' : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: isOn ? 'blur(0px)' : 'blur(12px)',
          WebkitBackdropFilter: isOn ? 'blur(0px)' : 'blur(12px)',
          background: isOn ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.08)',
        }}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: isOn ? 1 : 0,
            backgroundImage: `url('/images/office-solar-film.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{ opacity: isOn ? 0 : 1 }}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🔒</div>
            <div className="text-xl font-bold text-fg">Матовая</div>
            <div className="text-sm text-fg-muted mt-1">Приватность 100%</div>
          </div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{ opacity: isOn ? 1 : 0 }}
        >
          <div className="text-center bg-bg/60 backdrop-blur-sm rounded-xl p-4">
            <div className="text-6xl mb-4">👁️</div>
            <div className="text-xl font-bold text-fg">Прозрачная</div>
            <div className="text-sm text-fg-muted mt-1">Светопропускание 75%</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setIsOn(false)}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${!isOn ? 'bg-accent text-bg' : 'bg-bg-card text-fg-muted border border-border'}`}
        >
          Выключено
        </button>
        <div className="text-fg-subtle text-sm">нажмите на стекло</div>
        <button
          onClick={() => setIsOn(true)}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${isOn ? 'bg-accent text-bg' : 'bg-bg-card text-fg-muted border border-border'}`}
        >
          Включено
        </button>
      </div>

      <div className="mt-4 text-center text-xs text-fg-subtle">
        Демонстрация работы PDLC: матовая → прозрачная за 0,1 сек
      </div>
    </div>
  )
}