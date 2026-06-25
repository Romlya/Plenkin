'use client'

import { cn } from '@/lib/utils'

interface ServiceItemProps {
  title: string
  description: string
  icon: string
  className?: string
}

export function ServiceItem({ title, description, icon, className }: ServiceItemProps) {
  return (
    <div className={cn('flex items-start gap-6 p-8 rounded-xl bg-bg-card border border-border hover:border-accent/30 transition-all', className)}>
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-3xl flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-fg mb-2">{title}</h3>
        <p className="text-fg-muted leading-relaxed">{description}</p>
      </div>
    </div>
  )
}