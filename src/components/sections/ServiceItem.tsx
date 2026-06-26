'use client'

import { cn } from '@/lib/utils'

interface ServiceItemProps {
  title: string
  description: string
  icon: string
  className?: string
}

const icons: Record<string, React.ReactNode> = {
  car: <svg viewBox="0 0 24 24" className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 17H3v-5l2-5h14l2 5v5h-2"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/><path d="M5 12h14"/></svg>,
  doc: <svg viewBox="0 0 24 24" className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>,
  shield: <svg viewBox="0 0 24 24" className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
}

export function ServiceItem({ title, description, icon, className }: ServiceItemProps) {
  return (
    <div className={cn('flex items-start gap-6 p-8 rounded-xl glass-card transition-all', className)}>
      <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
        {icons[icon] || icons.shield}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-fg mb-2">{title}</h3>
        <p className="text-fg-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}