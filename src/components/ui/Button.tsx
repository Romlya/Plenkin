'use client'

import { forwardRef, ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, loading = false, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-accent text-bg hover:bg-accent-dim hover:shadow-glow-strong active:scale-[0.98] btn-shimmer',
      secondary: 'bg-bg-elevated text-fg border border-border hover:bg-bg-card hover:border-border-hover active:scale-[0.98]',
      ghost: 'bg-transparent text-fg hover:bg-glass hover:text-accent active:scale-[0.98]',
      outline: 'bg-transparent text-fg border border-border hover:bg-glass hover:border-accent active:scale-[0.98]',
      danger: 'bg-danger text-white hover:bg-danger-dim active:scale-[0.98] shadow-[0_0_20px_-5px_rgb(220_38_38_/0.3)]',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm gap-2 rounded-lg',
      md: 'px-6 py-3 text-base gap-2.5 rounded-lg',
      lg: 'px-8 py-4 text-lg gap-3 rounded-xl',
      xl: 'px-10 py-5 text-xl gap-3 rounded-xl',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }