'use client'

import { HTMLAttributes, forwardRef, CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { theme } from '@/lib/theme'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'protection'
  size?: 'sm' | 'md' | 'lg'
  protectionClass?: keyof typeof theme.colors.protection
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', protectionClass, children, style, ...props }, ref) => {
    const variants = {
      default: 'bg-bg-elevated text-fg-muted border border-border',
      accent: 'bg-accent/15 text-accent border-accent/30',
      success: 'bg-green-500/15 text-green-400 border-green-500/30',
      warning: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
      danger: 'bg-red-500/15 text-red-400 border-red-500/30',
      info: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      protection: 'text-white border-transparent font-mono',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    }

    const protectionColors = theme.colors.protection
    const protectionStyle: CSSProperties | undefined = protectionClass
      ? { backgroundColor: protectionColors[protectionClass] }
      : undefined

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center font-medium rounded-full border transition-colors',
          variants[variant],
          sizes[size],
          className
        )}
        style={{ ...protectionStyle, ...style }}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }