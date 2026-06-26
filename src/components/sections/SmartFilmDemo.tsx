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
            <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-fg-muted" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>
            <div className="text-xl font-bold text-fg">Матовая</div>
            <div className="text-sm text-fg-muted mt-1">Приватность 100%</div>
          </div>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{ opacity: isOn ? 1 : 0 }}
        >
          <div className="text-center bg-bg/60 backdrop-blur-sm rounded-xl p-4">
            <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
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